var vm,
	nodePos = {},
	revelationWeight = 1,
	tempPath = {found: false},
	need =
		{ red: 0, green: 0, blue: 0, all: 0
		, transformation: 0, revelation: 0
		, god: 0, book: 0, secretKnowledge: 0
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
		};

function removeNode(node) {
}

function addNode(node) {
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function calcTotal(atlases) {
	var atlas, nodesData, node, nodeData, nodePos;

	for (var atlasID in atlases) {
		atlas = atlases[atlasID];
		nodesData = atlases[atlasID].nodes;
		nodePos = {}
		for (var i in nodesData) {
			node = nodesData[i];
			nodeData = node.data;
			nodePos[nodeData._id] = node._position;
			for (stat in nodeData._give) {
				atlas.stat[stat][1] += nodeData._give[stat];
				if (nodeData.open) {
					atlas.stat[stat][0] += nodeData._give[stat];
				}
			}
			for (spark in nodeData._need) {
				atlas.sparks[spark][1] += nodeData._need[spark];
				if (nodeData.open) {
					atlas.sparks[spark][0] += nodeData._need[spark];
				}
			}
		}
		if (atlas.sparks.all) {
			atlas.sparks.all[0] =
				atlas.sparks.red[0] + atlas.sparks.green[0] +
				atlas.sparks.blue[0];
			atlas.sparks.all[1] =
				atlas.sparks.red[1] + atlas.sparks.green[1] +
				atlas.sparks.blue[1];
		}
		atlas._nodePos = nodePos;
	}
}

function groupSkill(atlases) {
	var atlas, nodeData, node, nodeData, group, ID, skill, stat, pos;

	for (var atlasID in atlases) {
		atlas = atlases[atlasID];
		nodesData = atlases[atlasID].nodes;
		skill = [];
		stat = {};
		pos = {};
		for (var i in nodesData) {
			node = nodesData[i];
			nodeData = node.data;
			if (node._classes === 'skill' || node._classes === 'class') {
				ID = nodeData._title;
				if (!pos[ID]) {
					pos[ID] = [];
					skill.push(
						{ title: nodeData._title
						, description: nodeData._description
						, nodeImage: nodeData._nodeImage
						, pos: 0
						, position: pos[ID]
						});
				}
				pos[ID].push(node._position);
			} else if(node._classes === 'stat') {
				if (nodeData._give.vit) {
					ID = 'vit';
				} else if (nodeData._give.power) {
					ID = 'power';
				} else if (nodeData._give.str) {
					ID = 'str';
				} else if (nodeData._give.valor) {
					ID = 'valor';
				} else if (nodeData._give.spirit) {
					ID = 'spirit';
				} else if (nodeData._give.luck) {
					ID = 'luck';
				} else if (nodeData._give.majesty) {
					ID = 'majesty';
				}
				if (!pos[ID]) {
					pos[ID] = [];
					stat[ID] =
						{ image: ID
						, pos: 0
						, node: pos[ID]
						};
				}
				pos[ID].push(node);
			}
		}
		atlas.group.skill = skill;
		atlas.group.stat = stat;
	}
}

function initCy(atlases) {
	var atlas, nodeData, node, nodeData, group, ID, skill, stat, pos;

	for (var atlasID in atlases) {
		atlas = atlases[atlasID];
		atlas.cy = cytoscape(
			{ elements: {nodes: atlas.nodes, edges: atlas.edges}
			, layout: {name: 'preset', fit: false}
			});
	}
}

function renderTitle(node) {
	var title = 'Не сделано =(',
		nodeData = node.data,
		imageName;

	imageName = nodeData.nodeImage;
	title = nodeData.title;
	if (nodeData.give.vit) {
		imageName = "vit";
		title = 'Бонус: Выносливость';
	} else if (nodeData.give.power) {
		imageName = "power";
		title = 'Бонус: Могущество';
	} else if (nodeData.give.spirit) {
		imageName = "spirit";
		title = 'Бонус: Дух';
	} else if (nodeData.give.str) {
		imageName = "str";
		title = 'Бонус: Сила';
	} else if (nodeData.give.luck) {
		imageName = "luck";
		title = 'Бонус: Удача';
	} else if (nodeData.give.valor) {
		imageName = "valor";
		title = 'Бонус: Отвага';
	} else if (nodeData.give.majesty) {
		imageName = "majesty";
		title = 'Бонус: Величие';
	}
	if (nodeData.need.revelation) {
		imageName = "revelation";
	}
	if (imageName && imageName !== 'empty') {
		return '<div class="tooltip-title">' +
			'<img width="25" src="images/nodes/' + imageName + '.png"></img> ' +
				title +
			'</div>';
	}
	return '<div class="tooltip-title">' + title + '</div>';
}

function renderText(node, isNeedCost) {
	var text = '',
		nodeData = node.data,
		give = nodeData.give,
		need = nodeData.need;

	if (isNeedCost && nodeData.give.prestige) {
		text +=
			'<div class="stat"><img width="25" src="images/prestige.png"></img> + ' +
			give.prestige + '</div><br/>';
	}
	if (nodeData.description) {
		text += '<p>' + nodeData.description + '</p>';
	}
	if (give.vit) {
		text += '<div class="stat">Выносливость<span>' + give.vit +'</span></div>';
		if (give.dex) {
			text += '<br/><div class="stat">Сноровка<span>' + give.dex +'</span></div>';
		}
		text += '<p>Увеличивает максимальный запас здоровья.</p>';
	}
	if (give.power) {
		text += '<div class="stat">Могущество<span>' + give.power +'</span></div>';
		if (give.dex) {
			text += '<br/><div class="stat">Сноровка<span>' + give.dex +'</span></div>';
		}
		text += '<p>Увеличивает базовый урон.</p>';
	}
	if (give.spirit) {
		text +=
			'<div class="stat">Дух<span>' + give.spirit +'</span></div>' +
			'<p>Увеличивает импульсный урон.</p>';
	}
	if (give.str) {
		text +=
			'<div class="stat">Сила<span>' + give.str +'</span></div>' +
			'<p>Увеличивает максимальную границу базового урона.</p>';
	}
	if (give.luck) {
		text +=
			'<div class="stat">Удача<span>' + give.luck +'</span></div>' +
			'<p>Увеличивает критический урон.</p>';
	}
	if (give.valor) {
		text +=
			'<div class="stat">Отвага<span>' + give.valor +'</span></div>' +
			'<p>Увеличивает дополнительный урон.</p>';
	}
	if (give.majesty) {
		text +=
			'<div class="stat">Величие<span>' + give.majesty +'</span></div>' +
			'<p>Позволяет возводить величественные храмы в провинциях Элиона, ' +
			'в которых распространено влияние культа.</p>';
	}
	if (isNeedCost) {
		for (var key in need) {
			text += '<div class="cost">Стоймость<span>' +
				'<img width="20" src="images/spark/' + key + '.png"></img> ' +
				need[key] + '</span></div>';
		}
	}
	text += nodeData.id + '<br/>';
	text += node.position.x + ' ' + node.position.y;
	return text;
}

function foundPath(cy, to, excludeNode, useNode) {
	var graphWithouOpen, from, aStar;
	var start;
	var helpSearch =
		[
			{ group: 'nodes'
			, data: {id: 'startSearch', need: {}}
			, position: {x: 0, y: 0}
			}
		];

	from = cy.elements(excludeNode).neighborhood('node' + useNode);
	for (var i = 0, l = from.length; i < l; i++) {
		helpSearch.push(
			{ group: 'edges'
			, data:
				{ source: 'startSearch'
				, target: from[i].id()
				}
			}
		);
	}
	helpSearch = cy.add(helpSearch);
	aStar = cy.elements(useNode).aStar(
		{ root: '#startSearch'
		, goal: to
		, weight: function (edge) {
				var sourceNeed = edge.source().data('need') || {};
				var targetNeed = edge.target().data('need') || {};
				var weight = 0;
				for (var spark in sourceNeed) {
					weight += sourceNeed[spark];
				}
				for (var spark in targetNeed) {
					weight += targetNeed[spark];
				}
				return weight;
			}
		});
	cy.remove(helpSearch);
	return aStar;
}

function getUnopen(cy, nodeID) {
	var node = cy.elements(nodeID),
		nearNode = node.neighborhood('node'),
		nextNode = cy.elements('[?start]').toArray(),
		connectedEdges, edge, otherNode,
		elements = cy.elements('[?start]'),
		path;

	do {
		curNode = nextNode.pop();
        connectedEdges = curNode.connectedEdges('[?open]');
        for (var j = 0, l = connectedEdges.length; j < l; j++) {
			edge = connectedEdges[j];
			otherNode = edge.connectedNodes().not(node).not(curNode);
			if (otherNode.length == 0 || otherNode.same(node)) {
				continue;
			}
			if (elements.anySame(otherNode)) {
				elements = elements.union(edge);
			} else {
				elements = elements.union([otherNode[0], edge]);
				nextNode.push(otherNode[0]);
			}
		}
	} while (nextNode.length != 0);
	path = cy.elements('[?open]').difference(elements);
	return {found: path.length !== 0, path: path};
}

function clearNeed() {
	for (var spark in need) {
		need[spark] = 0;
	}
	for (var stat in recive) {
		recive[stat] = 0;
	}
}

function center(graph, point) {
	var svg = document.getElementById('atlas');

	graph.mX = svg.clientWidth / 2 - point.x * graph.scale;
	graph.mY = svg.clientHeight / 2 - point.y * graph.scale;
}

$(function() {
	var atlasMove = false,
		svg = document.getElementById('atlas'),
		graphs =
			[ mainAtlas, godAtlas
			, {mX: 0, mY: 0, scale: 1, group: {}, nodes: [], edges: []}
			, {mX: 0, mY: 0, scale: 1, group: {}, nodes: [], edges: []}
			, {mX: 0, mY: 0, scale: 1, group: {}, nodes: [], edges: []}
			, {mX: 0, mY: 0, scale: 1, group: {}, nodes: [], edges: []}
			, {mX: 0, mY: 0, scale: 1, group: {}, nodes: [], edges: []}
			, {mX: 0, mY: 0, scale: 1, group: {}, nodes: [], edges: []}
			, fitonidyAtlas, mehanoydyAtlas
			],
		nodeSize = {big: 20, small: 12};

	atlas = getUrlParameter('atlas') || '';
	atlas = atob(atlas);
	for (var i = atlas.length; i--; ) {
		value = atlas[i];
		pos = (i + 1) * 8;
		while (value > 0) {
			if (value & 1) {
				cy.element('n' + pos).data('open', true);
			}
			pos++;
			value >>> 1;
		}
	}
	/*
	cy.elements('edge').filter(function(i, ele) {
		return ele.source().data('open') && ele.target().data('open');
	}).data('open', true);
	*/
	calcTotal(graphs);
	groupSkill(graphs);
	for (var atlasID in graphs) {
		center(graphs[atlasID], {x: 0, y: 0});
	}
	Vue.config.debug = true;
	Vue.component('skill',
		{ props: ['skill', 'graph']
		, template: '#skill-template'
		, ready: function() {
				$(this.$el).qtip(
					{ content:
						{ title: this.skill.title
						, text: this.skill.description
						}
					, show: {delay: 300}
					, position:
						{ my: 'top left'
						, at: 'bottom right'
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
					center(this.graph, skill.position[skill.pos++]);
					skill.pos = skill.pos % skill.position.length;
				}
			}
		});
	Vue.component('stat',
		{ props: ['stat', 'graph']
		, template: '#stat-template'
		, methods:
			{ findStat: function(stat) {
					center(this.graph, stat.node[stat.pos++].position);
					stat.pos = stat.pos % stat.node.length;
				}
			}
		});
	Vue.component('node',
		{ props: ['node']
		, template: '#node-template'
		, ready: function() {
				if (this.node.data.nodeImage === 'empty') {
					return;
				}
				$(this.$el).qtip(
					{ content:
						{ title: renderTitle(this.node)
						, text: renderText(this.node, true)
						}
					, show:
						{ delay: 300
						, effect: false
						}
					, position:
						{ my: 'top left'
						, at: 'bottom right'
						, viewport: $(document)
						}
					, style:
						{ classes: 'qtip qtip-dark qtip-round'
						, tip: {corner: false}
						}
					});
			}
		, methods:
			{ radius: function(node) {
					if (node.data.nodeImage) {
						return this.$parent.nodeSize.big;
					}
					return this.$parent.nodeSize.small;
				}
			, image: function(node) {
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
					} else {
						if (node.data.nodeImage === 'empty') {
							return 'none';
						}
						return 'url(#' + node.data.nodeImage + ')';
					}
					return '';
				}
			, hoverNode: function(node) {
					var cy = this.$parent.graph.cy;

					if (node.data.open) {
						tempPath = getUnopen(cy, '#' + node.data.id);
					} else {
						tempPath = foundPath(cy, '#' + node.data.id, 'node[?open]', '[!open]');
					}
					if (tempPath.found) {
						tempPath.path.data('hover', true);
					}
				}
			, unHoverNode: function(node) {
					if (tempPath.found) {
						tempPath.path.data('hover', false);
						tempPath.found = false;
					}
				}
			, getNode: function(node) {
					var graphSpark = this.$parent.graph.sparks;
					var graphStat = this.$parent.graph.stat;
					var cy = this.$parent.graph.cy;
					var openPath, nodeData;

					if (node.data.open) {
						openPath = getUnopen(cy, '#' + node.data.id);
						if (!openPath.found) {
							return;
						}
						openPath = openPath.path;
						for (var i = 0, l = openPath.length; i < l; i++) {
							if (!openPath[i].isNode()) {
								continue;
							}
							nodeData = openPath[i].data();
							for (var spark in nodeData.need) {
								graphSpark[spark].$set(0, graphSpark[spark][0] - nodeData.need[spark]);
							}
							for (var stat in nodeData.give) {
								graphStat[stat].$set(0, graphStat[stat][0] - nodeData.give[stat]);
							}
							removeNode(openPath[i]);
						}
						openPath.data({open: false, want: false, hover: false});
					} else {
						openPath = foundPath(cy, '#' + node.data.id, '[?open]', '[!open]');
						if (!openPath.found) {
							return;
						}
						openPath = openPath.path;
						for (var i = 0, l = openPath.length; i < l; i++) {
							if (!openPath[i].isNode()) {
								continue;
							}
							isFound = node.data.want;
							nodeData = openPath[i].data();
							for (var spark in nodeData.need) {
								graphSpark[spark].$set(0, graphSpark[spark][0] + nodeData.need[spark]);
								if (isFound) {
									need[spark] -= nodeData.need[spark];
								}
							}
							for (var stat in nodeData.give) {
								graphStat[stat].$set(0, graphStat[stat][0] + nodeData.give[stat]);
								if (isFound) {
									recive[stat] -= nodeData.give[stat];
								}
							}
							addNode(openPath[i]);
						}
						openPath.data({open: true, want: false, hover: false});
						openPath[2].connectedEdges().filter(function(i, ele) {
							return ele.source().data('open') && ele.target().data('open');
						}).data({open: true, want: false, hover: false});
					}
					if (graphSpark.all) {
						graphSpark.all.$set(0,
							graphSpark.red[0] + graphSpark.green[0] +
							graphSpark.blue[0]);
						need.all = need.red + need.green + need.blue;
					}
				}
			, findPath: function(node) {
					var cy = this.$parent.graph.cy;
					var needPath;

					if (node.data.open || node.data.want) {
						return;
					}
					cy.elements('[?want]').data('want', false);
					needPath = foundPath(cy, '#' + node.data.id, 'node[?open]', '[!open]');
					if (needPath.found) {
						clearNeed();
						needPath = needPath.path;
						needPath.data('want', true);
						for (var i = needPath.length; i--; ) {
							if (!needPath[i].isNode()) {
								continue;
							}
							nodeData = needPath[i].data();
							for (var spark in nodeData.need) {
								need[spark] += nodeData.need[spark];
							}
							for (var stat in nodeData.give) {
								recive[stat] += nodeData.give[stat];
							}
						}
						need.all = need.red + need.green + need.blue;
						needPath[2].connectedEdges().filter(function(i, ele) {
							var source = ele.source(), target = ele.target();
							return (source.data('open') || source.data('want')) &&
								(target.data('open') || target.data('want'));
						}).data('want', true);
					}
				}
			}
		});
	Vue.component('edge',
		{ props: ['edge', 'nodePos']
		, template: '#edge-template'
		});
	Vue.component('graph',
		{ props: ['graph']
		, data: function() {
				return {isBig: false, nodeSize: {big: 20, small: 12}};
			}
		, template: '#graph-template'
		, computed:
			{ isBig: function() {
					return this.graph.scale < 0.3;
				}
			}
		, watch:
			{ isBig: function(newValue, oldValue) {
					if (newValue === oldValue) {
						return;
					}
					if (newValue) {
						this.nodeSize.big = 150;
						this.nodeSize.small = 0;
					} else {
						this.nodeSize.big = 20;
						this.nodeSize.small = 12;
					}
				}
			}
		});
	vm = new Vue(
		{ el: '#container'
		, data:
			{ selected: 0
			, nodeSize: nodeSize
			, statName:
				{ prestige: 'Престиж'
				, power: 'Могущество'
				, vit: 'Выносливость'
				, str: 'Сила', valor: 'Отвага', luck: 'Удача', spirit: 'Дух'
				, majesty: 'Величие', dex: 'Сноровка'
				, poisonResist: 'Сопротивление яду'
				, electricityResist: 'Сопротивление электричеству'
				, hypnosisResist: 'Сопротивление гипнозу'
				}
			, graphs: graphs
			, need: need
			, recive: recive
			, images:
				[ 'krio', 'paladin', 'LK', 'alchemist', 'archer', 'berserker'
				, 'kinetic', 'monk', 'necromancer', 'rouge', 'witch', 'hero'
				, 'hedgehopper'
				, 'maneuver', 'balance', 'surprise', 'rush', 'inertia', 'luck_hit'
				, 'destroy', 'shock', 'adrenaline', 'alert', 'barrier', 'break'
				, 'concussion', 'create', 'credo_defend', 'credo_warrior', 'dash'
				, 'death', 'defence', 'dissection', 'double', 'equilibrium'
				, 'injury', 'laceration', 'life', 'okulat'
				, 'reflex', 'resistance', 'ruthlessness', 'slow', 'spasm', 'timeout'
				, 'triumph', 'wave', 'guardianship', 'medicines'
				, 'god', 'secretKnowledge'
				, 'defend', 'hunter', 'knowledge', 'rule', 'wanderer', 'warrior'
				, 'vit', 'power', 'str', 'valor', 'spirit', 'luck', 'majesty'
				, 'revelation'
				, 'sphere'
				// Фитониды
				, 'cultivation', 'mutation', 'poison', 'regeneration', 'root'
				// Механойды
				, 'capacity', 'eattack', 'eimpuls', 'flash', 'shield'
				// Горгониды
				, 'cobra', 'corrosive', 'slave', 'snakebite', 'trap'
				// Жнецы смерти
				// Океаниды
				// Демоны
				]
			}
		, watch:
			{ selected: function() {
					clearNeed();
				}
			}
		, methods:
			{ mouseDown: function(evt) {
					if(evt.which == 1) {
						atlasMove = true;
					}
				}
			, mouseUp: function(evt) {
					if(evt.which == 1) {
						atlasMove = false;
					}
				}
			, atlasMove: function(evt) {
					if (atlasMove) {
						this.graphs[this.selected].mX += evt.movementX;
						this.graphs[this.selected].mY += evt.movementY;
					}
				}
			, atlasScale: function(event) {
					var mouseX = event.clientX - svg.offsetLeft;
					var mouseY = event.clientY - svg.offsetTop;
					var wheel = event.wheelDelta / 120;
					var zoom = Math.pow(1 + Math.abs(wheel) / 2 , wheel > 0 ? 1 : -1);
					var graph = this.graphs[this.selected];
					var newScale = graph.scale * zoom;

					if (newScale > 1.5 || newScale < 0.08) {
						return;
					}
					graph.mX -= (graph.mX - mouseX) * (1 - zoom);
					graph.mY -= (graph.mY - mouseY) * (1 - zoom);
					graph.scale = newScale;
				}
			}
		}
	);
	initCy(graphs);
});
