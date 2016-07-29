import '../stylesheets/main.css';
import base64js from 'base64-js';
import cytoscape from 'cytoscape';
import Vue from 'vue';
import $ from 'jquery';
import 'qtip2';
import {notObserve} from './util/notObserve.js';

let tempPath = {found: false},
    need =
        { red: 0, green: 0, blue: 0, all: 0
        , transformation: 0, revelation: 0
        , god: 0, book: 0, secretKnowledge: 0
        , bronze: 0, silver: 0, gold: 0, core: 0
        , fitonidy: 0, fitonidyInfo: 0
        , mehanoydy: 0, mehanoydyInfo:0
        , gorgonidy: 0, gorgonidyInfo: 0
        , reaper: 0, reaperInfo: 0
        , oceanidy: 0, oceanidyInfo: 0
        , demon: 0, demonInfo: 0
        },
    recive =
        { prestige: 0
        , power: 0, vit: 0
        , str: 0, valor: 0, luck: 0, spirit: 0
        , majesty: 0, dex: 0
        , poisonResist: 0, electricityResist: 0, hypnosisResist: 0
        },
    statName =
        { prestige: 'Престиж'
        , power: 'Могущество'
        , vit: 'Выносливость'
        , str: 'Сила', valor: 'Отвага', luck: 'Удача', spirit: 'Дух'
        , majesty: 'Величие', dex: 'Сноровка'
        , poisonResist: 'Сопротивление яду'
        , electricityResist: 'Сопротивление электричеству'
        , hypnosisResist: 'Сопротивление гипнозу'
        },
    statDescription =
        { vit: 'Увеличивает максимальный запас здоровья.'
        , power: 'Увеличивает базовый урон.'
        , spirit: 'Увеличивает импульсный урон.'
        , str: 'Увеличивает максимальную границу базового урона.'
        , luck: 'Увеличивает критический урон.'
        , valor: 'Увеличивает дополнительный урон.'
        , majesty:
            'Позволяет возводить величественные храмы в провинциях Элиона, '+
            'в которых распространено влияние культа.'
        };

let removeNode = (atlas, id) => {
    id = Number(id);
    let pos = id >> 3;
    atlas.plainData[pos] ^= 1 << (7 - id % 8);
    if (atlas.polish) {
        pos = id >> 2;
        atlas.plainData[atlas.polish + pos] &= ~(3 << ((3 - id % 4) * 2));
    }
};

let addNode = (atlas, id, polish) => {
    id = Number(id);
    let pos = id >> 3;
    atlas.plainData[pos] |= 1 << (7 - id % 8);
    if (atlas.polish) {
        pos = id >> 2;
        let pos_polish = (3 - id % 4) * 2;
        atlas.plainData[atlas.polish + pos] =
            atlas.plainData[atlas.polish + pos] &
                ~(3 << pos_polish) | (polish << pos_polish);
    }
};

let calcTotal = (atlases) => {
    for (let atlasID in atlases) {
        let atlas = atlases[atlasID];
        let nodesData = atlases[atlasID].nodes;
        let nodePos = {};
        let isPolish = atlas.polish;
        let polishPrestige = 0;
        let polishNode = 0;
        let totalPolishCost = 0;
        for (let i in nodesData) {
            let node = nodesData[i];
            let nodeData = node.data;
            nodePos[nodeData.id] = node.position;
            if (isPolish && node.classes === 'stat' && !nodeData.give.majesty)
            {
                polishNode++;
                polishPrestige += nodeData.give.prestige;
                let polishCost = 9999;
                for (let stat in nodeData.give) {
                    if (stat === 'dex') { continue; }
                    polishCost = Math.min(polishCost, nodeData.give[stat]);
                }
                totalPolishCost += polishCost;
            }
            for (let stat in nodeData.give) {
                atlas.stat.total[stat] =
                    (atlas.stat.total[stat] ? atlas.stat.total[stat] : 0) +
                    nodeData.give[stat];
            }
            for (let spark in nodeData.need) {
                atlas.sparks.total[spark] =
                    (atlas.sparks.total[spark] ? atlas.sparks.total[spark] : 0) +
                    nodeData.need[spark];
            }
        }
        if (isPolish) {
            for (let stat in atlas.stat.total) {
                if (stat === 'dex' || stat === 'majesty' || stat === 'prestige')
                { continue; }
                atlas.stat.total[stat] *= 2.5;
            }
            atlas.stat.total.prestige += polishPrestige * 1.5;
            atlas.sparks.total.bronze = totalPolishCost * 5;
            atlas.sparks.total.silver = totalPolishCost * 10;
            atlas.sparks.total.gold = totalPolishCost * 15;
            atlas.sparks.total.core = polishNode * 3;
        }
        if (atlas.sparks.red) {
            atlas.sparks.total.all =
                atlas.sparks.total.red + atlas.sparks.total.green +
                atlas.sparks.total.blue;
        }
        for (let stat in atlas.stat.total) {
            atlas.stat.got[stat] = 0;
        }
        for (let spark in atlas.sparks.total) {
            atlas.sparks.got[spark] = 0;
        }
        notObserve(atlas, 'nodePos', nodePos);
    }
};

let groupSkill = (atlases) => {
    for (let atlasID in atlases) {
        let atlas = atlases[atlasID];
        let nodesData = atlases[atlasID].nodes;
        let skill = [];
        let statGroup = {};
        let pos = {};
        for (let i in nodesData) {
            let node = nodesData[i];
            let nodeData = node.data;
            if (node.classes === 'skill' || node.classes === 'class' ||
                node.classes === 'bigStat')
            {
                let ID = nodeData.title;
                if (!pos[ID]) {
                    pos[ID] = [];
                    skill.push(
                        { title: nodeData.title
                        , description: nodeData.description
                        , nodeImage: nodeData.nodeImage
                        , pos: 0
                        , position: pos[ID]
                        });
                }
                pos[ID].push(node.position);
            }
            if(node.classes === 'stat' || node.classes === 'bigStat') {
                for (let stat in nodeData.give) {
                    if (stat === 'prestige' || stat === 'dex') { continue; }
                    if (!statGroup[stat]) {
                        statGroup[stat] =
                            {pos: 0, node: [], give: {}, cost: {}, show: false};
                    }
                    statGroup[stat].node.push(node);
                    statGroup[stat].give[nodeData.give[stat]] =
                        nodeData.give[stat];
                }
            }
        }
        atlas.group.skill = skill;
        atlas.group.stat = statGroup;
    }
};

let loadAtlas = (atlas) => {
    let nodeCount = atlas.nodes.length;
    let l = (nodeCount >> 3) + 1;
    let len = l;
    len += atlas.polish * 2;
    let dataString = localStorage['atlas_' + atlas.name] || '';
    let _plainData = base64js.toByteArray(dataString);
    if (_plainData.length !== atlas.plainData.length) {
        let size = atlas.polish ? _plainData.length / 3 : _plainData.length;
        for (let i = 0; i < size; i++) {
            atlas._plainData[i] = _plainData[i];
        }
        let polishSize = atlas.polish ? 2 * _plainData.length / 3 : 0;
        for (let i = 0; i < polishSize; i++) {
            atlas.plainData[l + i] = _plainData[size + i];
        }
        _plainData = atlas.plainData;
    } else {
        atlas.plainData = _plainData;
    }
    for (let i = 0; i < l; i++) {
        let val = _plainData[i];
        let index = i * 8 + 7;
        while (val > 0) {
            if (index < nodeCount && (val & 1)) {
                let nodeData = atlas.nodes[index].data;
                nodeData.open = !!(val & 1);
                for (let stat in nodeData.give) {
                    atlas.stat.got[stat] += nodeData.give[stat];
                }
                for (let spark in nodeData.need) {
                    atlas.sparks.got[spark] += nodeData.need[spark];
                }
            }
            index--;
            val = val >> 1;
        }
    }
    const cost = ['', 'bronze', 'silver', 'gold'];
    for (let i = l; i < len; i++) {
        let val = _plainData[i];
        let index = (i - l) * 4 + 3;
        while (val > 0) {
            if (index < nodeCount) {
                let nodeData = atlas.nodes[index].data;
                nodeData.polish = val & 3;
                let polishCost = 9999;
                for (let stat in nodeData.give) {
                    if (stat === 'dex') { continue; }
                    atlas.stat.got[stat] +=
                        nodeData.give[stat] * 0.5 * nodeData.polish;
                    polishCost = Math.min(polishCost, nodeData.give[stat]);
                }
                for (let j = 1; j <= nodeData.polish; j++) {
                    atlas.sparks.got[cost[j]] += polishCost * 5 * j;
                }
                atlas.sparks.got.core += nodeData.polish;
            }
            index--;
            val = val >> 2;
        }
    }
    if (atlas.stat.got.red) {
        atlas.sparks.got.all =
            atlas.sparks.got.red + atlas.sparks.got.green +
                atlas.sparks.got.blue;
    }
};

let saveAtlas = (atlas) => {
    localStorage['atlas_' + atlas.name] =
        base64js.fromByteArray(atlas.plainData);
};

let initCy = (atlases) => {
    for (let atlasID in atlases) {
        let atlas = atlases[atlasID];
        atlas.cy = cytoscape(
            { elements: {nodes: atlas.nodes, edges: atlas.edges}
            , layout: {name: 'preset', fit: false}
            });
        atlas.cy.elements('node[?open]').connectedEdges().filter(
            (i, ele) => ele.source().data('open') && ele.target().data('open')
        ).data('open', true);
    }
};

let renderTitle = (node) => {
    let nodeData = node.data;
    let title = nodeData.title;
    let imageName = nodeData.nodeImage;
    if (!imageName || !title) {
        if (nodeData.give.vit) {
            imageName = 'vit';
            title = 'Бонус: Выносливость';
        } else if (nodeData.give.power) {
            imageName = 'power';
            title = 'Бонус: Могущество';
        } else if (nodeData.give.spirit) {
            imageName = 'spirit';
            title = 'Бонус: Дух';
        } else if (nodeData.give.str) {
            imageName = 'str';
            title = 'Бонус: Сила';
        } else if (nodeData.give.luck) {
            imageName = 'luck';
            title = 'Бонус: Удача';
        } else if (nodeData.give.valor) {
            imageName = 'valor';
            title = 'Бонус: Отвага';
        } else if (nodeData.give.majesty) {
            imageName = 'majesty';
            title = 'Бонус: Величие';
        }
        if (nodeData.need.revelation) {
            imageName = 'revelation';
        }
    }
    return `<div class='tooltip-title'>
<div class='icon icon-25 icon-node-${imageName}'></div> ${title}</div>`;
};

let renderText = (node, isNeedCost) => {
    let text = '';
    let nodeData = node.data;
    let give = nodeData.give;
    let need = nodeData.need;
    let coeff = 0;
    if (node.data.polish) {
        coeff = 0.5 * (node.data.polish % 10);
    }
    if (isNeedCost && give.prestige) {
        text += `<div class='stat'>
            <div class='icon icon-25 icon-spark-prestige'></div>
            ${Math.ceil(give.prestige * (coeff + 1))}</div>`;
    }
    let polishCost;
    if (node.classes === 'stat' || node.classes === 'bigStat') {
        let statText = '';
        text += '<div class="stat">';
        polishCost = 9999;
        for (let stat in give) {
            if (stat === 'prestige' || stat === 'dex') {continue;}
            text +=
                `${statName[stat]}<span>${Math.ceil(give[stat] * (coeff + 1))}`;
            if (coeff !== 0) {
                text += ` (${give[stat]} + ${Math.ceil(give[stat] * coeff)})`;
            }
            text += '</span><br/>';
            statText += `<p>${statDescription[stat]}</p>`;
            polishCost = Math.min(polishCost, give[stat]);
        }
        text += '</div>';
        if ((give.power || give.vit) && give.dex) {
            text += `<div class='stat'>Сноровка<span>${give.dex}</span></div>`;
        }
        text += statText;
    }
    if (nodeData.description) {
        text += `<p>${nodeData.description}</p>`;
    }
    if (isNeedCost) {
        text += '<br/><div class="cost">Стоймость';
        for (let key in need) {
            text +=
                `<span><div class='icon icon-20 icon-spark-${key}'></div>
                ${need[key]}</span>`;
        }
        text += '</div>';
        if ((node.classes === 'stat' || node.classes === 'bigStat') &&
            nodeData.hasOwnProperty('polish') && !nodeData.give.majesty)
        {
            text +=
                `<br/><div class="polish">Полировка:<br/>
                <div class='polish_cell'>+${Math.ceil(give.prestige / 2)}
                <span><div class='icon icon-20 icon-spark-core'></div>1</span>
                <span><div class='icon icon-20 icon-bronze'></div>${5 * polishCost}</span>
                </div>
                <div class='polish_cell'>+${give.prestige}
                <span><div class='icon icon-20 icon-spark-core'></div>1</span>
                <span><div class='icon icon-20 icon-spark-silver'></div>${10 * polishCost}</span>
                </div>
                <div class='polish_cell'>+${Math.ceil(1.5 * give.prestige)}
                <span><div class='icon icon-20 icon-spark-core'></div>1</span>
                <span><div class='icon icon-20 icon-spark-gold'></div>${15 * polishCost}</span>
                </div>
                </div><br/>`;
        }
    }
    return text;
};

let foundPath = (cy, to, excludeNode, useNode) => {
    let helpSearch =
        [
            { group: 'nodes'
            , data: {id: 'startSearch', need: {}}
            , position: {x: 0, y: 0}
            }
        ];
    let from = cy.elements(excludeNode).neighborhood('node' + useNode);
    for (let i = 0, l = from.length; i < l; i++) {
        helpSearch.push(
            { group: 'edges'
            , data: {source: 'startSearch', target: from[i].id()}
            }
        );
    }
    helpSearch = cy.add(helpSearch);
    let aStar = cy.elements(useNode).aStar(
        { root: '#startSearch'
        , goal: to
        , weight: (edge) => {
                let sourceNeed = edge.source().data('need');
                let targetNeed = edge.target().data('need');
                let weight = 0;
                for (let spark in sourceNeed) {
                    weight += sourceNeed[spark];
                }
                for (let spark in targetNeed) {
                    weight += targetNeed[spark];
                }
                return weight;
            }
        });
    cy.remove(helpSearch);
    return aStar;
};

let getUnopen = (cy, nodeID) => {
    let node = cy.elements(nodeID);
    let startNode = cy.elements('[?start]');
    let connected = node.connectedEdges('[?open]').add(node);
    let removed = connected.remove();
    let components = cy.elements('[?open]').components();
    removed.restore();
    for (let i = 0, l = components.length; i < l; i++) {
        if (components[i].anySame(startNode)) {continue;}
        connected = connected.union(components[i]);
    }
    return {found: true, path: connected};
};

let clearNeed = () => {
    for (let spark in need) {need[spark] = 0;}
    for (let stat in recive) {recive[stat] = 0;}
};

let center = (atlas, point) => {
    let svg = document.getElementById('atlas');
    atlas.mX = svg.clientWidth / 2 - point.x * atlas.scale;
    atlas.mY = svg.clientHeight / 2 - point.y * atlas.scale;
};

let nodeImage = (node) => {
    if (node.data.nodeImage) {
        if (node.data.nodeImage === 'empty') {
            return 'none';
        }
        return 'url(#' + node.data.nodeImage + ')';
    }
    if (node.data.need.revelation) {
        return 'url(#revelation)';
    } else if (node.data.give.vit) {
        return 'url(#vit)';
    } else if (node.data.give.power) {
        return 'url(#power)';
    } else if (node.data.give.str) {
        return 'url(#str)';
    } else if (node.data.give.valor) {
        return 'url(#valor)';
    } else if (node.data.give.spirit) {
        return 'url(#spirit)';
    } else if (node.data.give.luck) {
        return 'url(#luck)';
    } else if (node.data.give.majesty) {
        return 'url(#majesty)';
    }
    return 'none';
};

let getNewPolish = (polish, isWant) => {
    let realPolish = polish % 10;
    let wantPolish = Math.floor(polish / 10);
    if (isWant) {
        if (wantPolish === 0) {
            wantPolish = realPolish;
        }
        wantPolish++;
    } else {
        realPolish++;
    }
    realPolish = realPolish % 4;
    wantPolish = wantPolish % 4;
    if (realPolish >= wantPolish) {
        wantPolish = 0;
    }
    return wantPolish * 10 + realPolish;
};

let atlasMove = false;
let atlases =
    [ require('./atlases/main_atlas.js')
    , require('./atlases/god_atlas.js')
    //, require('./atlases/rule_god_atlas.js')
    ];

calcTotal(atlases);
for (let atlasID in atlases) {
    center(atlases[atlasID], {x: 0, y: 0});
    loadAtlas(atlases[atlasID]);
}
groupSkill(atlases);
Vue.component('skill',
    { props: ['skill', 'atlas']
    , template: '#skill-template'
    , ready: function() {
            $(this.$el).qtip(
                { content:
                    { title: this.skill.title
                    , text: this.skill.description
                    }
                , show: {delay: 250}
                , position:
                    { my: 'top center'
                    , at: 'bottom center'
                    , viewport: $(document)
                    }
                , style:
                    { classes: 'qtip qtip-dark qtip-round'
                    , tip: {corner: false}
                    }
                });
        }
    , methods:
        { findSkill: function(skill) {
                center(this.atlas, skill.position[skill.pos++]);
                skill.pos = skill.pos % skill.position.length;
            }
        }
    });
Vue.component('node',
    { props: ['node']
    , template: '#node-template'
    , watch:
        { 'node.data.polish': function(newValue, oldValue) {
                let atlas = this.$parent.atlas;
                let atlasSpark = atlas.sparks.got;
                let atlasStat = atlas.stat.got;
                let nodeData = this.node.data;
                const cost = ['', 'bronze', 'silver', 'gold'];
                let oldRealPolish = oldValue % 10;
                let oldWantPolish = Math.floor(oldValue / 10);
                let newRealPolish = newValue % 10;
                let newWantPolish = Math.floor(newValue / 10);
                let polishCost = 9999;
                for (let stat in nodeData.give) {
                    if (stat === 'prestige' || stat === 'dex') {continue;}
                    polishCost = Math.min(polishCost, nodeData.give[stat]);
                }
                polishCost *= 5;
                if (oldWantPolish !== 0 && newWantPolish === 0) {
                    for (let i = oldWantPolish; i > oldRealPolish; i--) {
                        need[cost[i]] -= polishCost * i;
                    }
                    let change = oldWantPolish - oldRealPolish;
                    need.core -= change;
                    for (let stat in nodeData.give) {
                        if (stat === 'dex') {continue;}
                        recive[stat] -=
                            Math.ceil(nodeData.give[stat] / 2) * change;
                    }
                }
                if (newWantPolish > oldWantPolish) {
                    need[cost[newWantPolish]] += polishCost * newWantPolish;
                    need.core++;
                    for (let stat in nodeData.give) {
                        if (stat === 'dex') {continue;}
                        recive[stat] += Math.ceil(nodeData.give[stat] / 2);
                    }
                }
                if (oldRealPolish === 3 && newRealPolish === 0) {
                    for (let i = 3; i > 0; i--) {
                        atlasSpark[cost[i]] -= polishCost * i;
                    }
                    for (let stat in nodeData.give) {
                        if (stat === 'dex') { continue; }
                        atlasStat[stat] -=
                            Math.ceil(nodeData.give[stat] / 2) * 3;
                    }
                    atlasSpark.core -= 3;
                }
                if (newRealPolish - oldRealPolish === 1) {
                    if (newWantPolish !== 0) {
                        need[cost[newRealPolish]] -= polishCost * newRealPolish;
                        need.core--;
                    }
                    atlasSpark[cost[newRealPolish]] +=
                        polishCost * newRealPolish;
                    for (let stat in nodeData.give) {
                        if (stat === 'dex') { continue; }
                        if (newWantPolish !== 0) {
                            recive[stat] -= Math.ceil(nodeData.give[stat] / 2);
                        }
                        atlasStat[stat] += Math.ceil(nodeData.give[stat] / 2);
                    }
                    atlasSpark.core++;
                }
                $('#tooltip').qtip('api')
                    .set('content.text', renderText(this.node, true));
            }
        }
    , methods:
        { radius: function(node) {
                return node.data.nodeImage ? this.$parent.nodeSize.big : 12;
            }
        , nodeImage: nodeImage
        , hoverNode: function(node) {
                if (atlasMove) {
                    return;
                }
                if (node.data.nodeImage !== 'empty') {
                    $('#tooltip').qtip('api')
                        .set(
                            { 'content.title': renderTitle(node)
                            , 'content.text': renderText(node, true)
                            , 'position.target': $(this.$el.nextElementSibling)
                            })
                        .toggle(true);
                }
                if (node.data.start || node.data.want) {
                    return;
                }
                let cy = this.$parent.atlas.cy;
                if (node.data.open) {
                    tempPath = getUnopen(cy, '#' + node.data.id);
                } else {
                    tempPath = foundPath(cy, '#' + node.data.id, 'node[?open]', '[!open]');
                }
                if (tempPath.found) {
                    tempPath.path.data('hover', true);
                }
            }
        , unHoverNode: () => {
                $('#tooltip').qtip('api').toggle(false);
                if (tempPath.found) {
                    tempPath.path.data('hover', false);
                    tempPath.found = false;
                }
            }
        , getNode: function(node, ev) {
                let atlas = this.$parent.atlas;
                let atlasSpark = atlas.sparks.got;
                let atlasStat = atlas.stat.got;
                let cy = atlas.cy;

                if (node.data.start || atlasMove) {
                    return;
                }
                if (ev.altKey) {
                    let nodeData = node.data;
                    if (!nodeData.open ||
                        !nodeData.hasOwnProperty('polish') ||
                        (node.classes !== 'stat' && node.classes !== 'bigStat') ||
                        nodeData.give.majesty)
                    {
                        return;
                    }
                    nodeData.polish = getNewPolish(nodeData.polish, false);
                    addNode(atlas,
                        nodeData.id.slice(1), nodeData.polish % 4);
                    saveAtlas(atlas);
                    return;
                }
                if (node.data.open) {
                    let openPath = getUnopen(cy, '#' + node.data.id);
                    if (!openPath.found) {
                        return;
                    }
                    openPath = openPath.path;
                    let l = openPath.length;
                    for (let i = 0; i < l; i++) {
                        if (!openPath[i].isNode()) {continue;}
                        let nodeData = openPath[i].data();
                        for (let spark in nodeData.need) {
                            atlasSpark[spark] -= nodeData.need[spark];
                        }
                        for (let stat in nodeData.give) {
                            atlasStat[stat] -= nodeData.give[stat];
                        }
                        openPath[i].data('polish', 0);
                        removeNode(atlas, openPath[i].id().slice(1));
                    }
                    openPath.data({open: false, want: false, hover: false});
                } else {
                    let openPath = foundPath(cy, '#' + node.data.id, '[?open]', '[!open]');
                    if (!openPath.found) {
                        return;
                    }
                    openPath = openPath.path;
                    for (let i = openPath.length; i--; ) {
                        if (!openPath[i].isNode() ||
                            openPath[i].id() === 'startSearch') {continue;}
                        let nodeData = openPath[i].data();
                        let isFound = nodeData.want;
                        for (let spark in nodeData.need) {
                            atlasSpark[spark] += nodeData.need[spark];
                            if (isFound) {
                                need[spark] -= nodeData.need[spark];
                            }
                        }
                        for (let stat in nodeData.give) {
                            atlasStat[stat] += nodeData.give[stat];
                            if (isFound) {
                                recive[stat] -= nodeData.give[stat];
                            }
                        }
                        addNode(atlas,
                            openPath[i].id().slice(1), nodeData.polish);
                    }
                    openPath.data({open: true, want: false, hover: false});
                    openPath[2].connectedEdges().filter(
                        (i, ele) => ele.source().data('open') && ele.target().data('open')
                    ).data({open: true, want: false, hover: false});
                }
                saveAtlas(atlas);
                if (atlasSpark.hasOwnProperty('all')) {
                    atlasSpark.all =
                        atlasSpark.red + atlasSpark.green + atlasSpark.blue;
                    need.all = need.red + need.green + need.blue;
                }
            }
        , findPath: function(node, ev) {
                let atlas = this.$parent.atlas;
                let cy = atlas.cy;
                let nodeData = node.data;
                if (ev.altKey) {
                    if (!nodeData.hasOwnProperty('polish') ||
                        (node.classes !== 'stat' && node.classes !== 'bigStat') ||
                        nodeData.give.majesty)
                    {
                        return;
                    }
                    nodeData.polish = getNewPolish(nodeData.polish, true);
                    return;
                }
                if (nodeData.want || nodeData.open) {
                    return;
                }
                cy.elements('[?want]').data('want', false);
                let needPath = foundPath(cy, '#' + node.data.id, 'node[?open]', '[!open]');
                if (needPath.found) {
                    clearNeed();
                    needPath = needPath.path;
                    needPath.data('want', true);
                    for (let i = needPath.length; i--; ) {
                        if (!needPath[i].isNode()) {continue;}
                        let nodeData = needPath[i].data();
                        for (let spark in nodeData.need) {
                            need[spark] += nodeData.need[spark];
                        }
                        for (let stat in nodeData.give) {
                            recive[stat] += nodeData.give[stat];
                        }
                    }
                    need.all = need.red + need.green + need.blue;
                    needPath[2].connectedEdges().filter((i, ele) => {
                        let source = ele.source();
                        let target = ele.target();
                        return (source.data('open') || source.data('want')) &&
                            (target.data('open') || target.data('want'));
                    }).data('want', true);
                }
            }
        }
    });

Vue.component('edge',
    { props: ['edge', 'source', 'target']
    , template: '#edge-template'
    , computed:
        { path: function(){
                let source = this.source;
                let target = this.target;

                if (this.edge.classes == 'curve120') {
                    return `M ${source.x} ${source.y}
                        Q ${(target.x + source.x) / 2 - (target.y - source.y) / 2}
                        ${(target.y + source.y) / 2 + (target.x - source.x) / 2}
                        ${target.x} ${target.y}`;
                } else if (this.edge.classes == 'curve60' || this.edge.classes == 'curve') {
                    return `M ${source.x} ${source.y}
                        Q ${(target.x + source.x) / 2 - (target.y - source.y) / 4}
                        ${(target.y + source.y) / 2 + (target.x - source.x) / 4}
                        ${target.x} ${target.y}`;
                } else {
                    return `M ${source.x} ${source.y} ${target.x} ${target.y}`;
                }
            }
        }
    });

Vue.component('atlas',
    { props: ['atlas']
    , data: () => ({isBig: false, nodeSize: {big: 20}})
    , template: '#atlas-template'
    , computed:
        { isBig: function() { return this.atlas.scale < 0.3; }
        }
    , watch:
        { isBig: function(newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                if (newValue) {
                    this.nodeSize.big = 150;
                } else {
                    this.nodeSize.big = 20;
                }
            }
        }
    });

new Vue(
    { el: '#container'
    , data:
        { selected: 0
        , statFind: {statName: 'vit', value: -1, polish: -1, isOpen: -1}
        , statName: statName
        , atlases: [atlases[0]]
        , need: need
        , recive: recive
        }
    , watch:
        { selected: function() {
                clearNeed();
                this.statFind.statName = 'vit';
                this.statFind.value = -1;
                this.statFind.polish = -1;
                this.statFind.isOpen = -1;
                if (!this.atlases[this.selected]) {
                    this.atlases.$set(this.selected, atlases[this.selected]);
                    initCy([atlases[this.selected]]);
                }
            }
        }
    , methods:
        { mouseDown: (evt) => {
                if (evt.which === 1) {
                    atlasMove = true;
                }
            }
        , mouseUp: (evt) => {
                if(evt.which === 1) {
                    atlasMove = false;
                }
            }
        , atlasMove: function(evt) {
                if (atlasMove) {
                    this.atlases[this.selected].mX += evt.movementX;
                    this.atlases[this.selected].mY += evt.movementY;
                }
            }
        , atlasScale: function(event) {
                let svg = document.getElementById('atlas');
                let mouseX = event.clientX - svg.offsetLeft;
                let mouseY = event.clientY - svg.offsetTop;
                let wheel = event.wheelDelta ?
                        event.wheelDelta / 120 : event.deltaY / -3;
                let zoom =
                    Math.pow(1 + Math.abs(wheel) / 2 , wheel > 0 ? 1 : -1);
                let atlas = this.atlases[this.selected];
                let newScale = atlas.scale * zoom;
                if (newScale > 1.5 || newScale < 0.08) {return;}
                atlas.mX -= (atlas.mX - mouseX) * (1 - zoom);
                atlas.mY -= (atlas.mY - mouseY) * (1 - zoom);
                atlas.scale = newScale;
            }
        , findNode: function() {
                let atlas = this.atlases[this.selected];
                let statName = this.statFind.statName;
                let stat = atlas.group.stat[statName];
                let startPos = stat.pos;
                let pos = stat.pos;
                let isOpen = this.statFind.isOpen;
                let value = this.statFind.value;
                let polish = this.statFind.polish;
                do {
                    let nodeData = stat.node[pos].data;
                    if ((isOpen === -1 || isOpen === nodeData.open) &&
                        (value === -1 || value === nodeData.give[statName]) &&
                        (polish === -1 || nodeData.polish % 10 === polish))
                    {
                        let node = stat.node[pos];
                        center(this.atlases[this.selected], node.position);
                        $('#tooltip').qtip('api')
                            .set(
                                { 'content.title': renderTitle(node)
                                , 'content.text': renderText(node, true)
                                , 'position.target': false
                                })
                            .toggle(true);
                        stat.pos = (pos + 1) % stat.node.length;
                        return;
                    }
                    pos = (pos + 1) % stat.node.length;
                } while (startPos !== pos);
            }
        , hideTooltip: () => { $('#tooltip').qtip('api').toggle(false); }
        }
    }
);
initCy([atlases[0]]);
$('#tooltip').qtip(
    { content: {title: '', text: ''}
    , show: {delay: 250, effect: false, target: false}
    , hide: {target: false, effect: false}
    , position:
        { my: 'left top', at: 'top right', viewport: $(window)
        , effect: false
        }
    , style: {classes: 'qtip qtip-dark qtip-round', tip: {corner: true}}
    });
$('#tooltip').qtip('api').hide();
