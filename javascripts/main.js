var cy,
	revelationWeight = 1,
	total, used, need,
	statTotal, stat, statgive,
	sparksName = [],
	tempPath,
	showBig = false,
	graphsStat = [], selected = 0,
	need =
		{ red: 0, green: 0, blue: 0, all: 0
		, transformation: 0
		, revelation: 0
		, god: 0
		, book: 0
		, fitonidy: 0, mehanoydy: 0, gorgonidy: 0
		},
	giveStat =
		{ prestige: 0
		, power: 0, vit: 0
		, str: 0, valor: 0, luck: 0, spirit: 0
		, majesty: 0, dex: 0
		},
	statsName =
		[ 'prestige', 'power', 'vit', 'str', 'valor', 'luck', 'spirit', 'dex'
		, 'majesty'],
	sl = statsName.length;

function calcSpark(elements) {
	var curElements,
		nodeData,
		sparksName =
			['red', 'green', 'blue', 'all'
			, 'transformation', 'revelation'
			, 'god'
			, 'book'
			, 'fitonidy', 'mehanoydy', 'gorgonidy'],
		ll = sparksName.length,
		x = cy.width() / 2, y = cy.height() / 2,
		name;

	for (var i = 0, gl = elements.length; i < gl; i++) {
		total =
			{ red: 0, green: 0, blue: 0, all: 0
			, transformation: 0
			, revelation: 0
			, god: 0
			, book: 0
			, fitonidy: 0, mehanoydy: 0, gorgonidy: 0
			};
		used =
			{ red: 0, green: 0, blue: 0, all: 0
			, transformation: 0
			, revelation: 0
			, god: 0
			, book: 0
			, fitonidy: 0, mehanoydy: 0, gorgonidy: 0
			};
		statTotal =
			{ prestige: 0
			, power: 0, vit: 0
			, str: 0, valor: 0, luck: 0, spirit: 0
			, majesty: 0, dex: 0
			};
		stat =
			{ prestige: 0
			, power: 0, vit: 0
			, str: 0, valor: 0, luck: 0, spirit: 0
			, majesty: 0, dex: 0
			};
		curElements = elements[i].filter('node');
		for (var j = 0, l = curElements.length; j < l; j++) {
			isOpen = curElements[j].data('open');
			nodeData = curElements[j].data();
			for (var e = 0; e < ll; e++) {
				name = sparksName[e];
				total[name] += nodeData.need[name] || 0;
			}
			for (var e = 0; e < sl; e++) {
				name = statsName[e];
				statTotal[name] += nodeData[name] || 0;
			}
		}
		total['all'] = total.red + total.green + total.blue;
		graphsStat.push(
			{ elements: elements[i]
			, total: total
			, used: used
			, statTotal: statTotal
			, stat: stat
			, position: {x: x, y: y}
			});
	}
}

function initSpark() {
	var element, image, spark, statName;

	for (var i = 0, l = sparksName.length; i < l; i++) {
		element = document.getElementById('image' + i);
		element.className = '';
		image = element.childNodes[0].className = sparksName[i];
		element = document.getElementById('spark' + i);
		element.className = '';
		spark = element.children;
		spark[0].innerHTML = 0;
		spark[1].innerHTML = graphsStat[selected].used[sparksName[i]];
		spark[2].innerHTML = graphsStat[selected].total[sparksName[i]];
	}
	for (var i = sparksName.length; i < 7; i++) {
		document.getElementById('image' + i).className = 'hidden';
		document.getElementById('spark' + i).className = 'hidden';
	}
	updateStat(1, graphsStat[selected].stat);
	updateStat(2, graphsStat[selected].statTotal);
}

function updateSparks(num, data) {
	var spark;

	for (var i = 0, l = sparksName.length; i < l; i++) {
		spark = document.getElementById('spark' + i).children;
		spark[num].innerHTML = data[sparksName[i]];
	}
}

function updateStat(num, data) {
	for (var i = 0; i < sl; i++) {
		statName = statsName[i];
		document.getElementById(statName).children[num].innerHTML = data[statName];
	}
}

function groupSkill(atlas) {
	var group;

	for (var i = atlas.length; i--; ) {
		group = {};
		skillForGroup = graphsStat[i].elements.filter('.skill,.class').sort(
			function(node1, node2) {
				return node1.data('title').localeCompare(node2.data('title'));
			});
		for (var j = skillForGroup.length; j--; ) {
			title = skillForGroup[j].data('title');
			if (!group[title]) {
				group[title] = [];
			}
			group[title].push(skillForGroup[j]);
		}
		graphsStat[i].group = group;
	}
}

function displayGroup() {
	$('#group' + selected).removeClass('hidden');
}

function renderGroup() {
	var groupElement = $('#group');
	var group, node, imageName, element;

	for (var i = graphsStat.length; i--; ) {
		groupElement.append('<div class="hidden" id="group' + i +'"></div>');
		addToElement = $('#group' + i);
		for (var title in graphsStat[i].group) {
			group = graphsStat[i].group[title];
			node = group[0];
			imageName = node.data('nodeImage');
			element = $(
				'<span>'+
					'<img width="30" src="images/nodes/' + imageName + '.png"></img>'+
				'</span>');
			addToElement.append(element);
			element.qtip(
				{ content:
					{ title: renderTitle(node)
					, text: renderText(node, false)
					}
				, position:
					{ my: 'left top'
					, at: 'top right'
					, viewport: $(window)
					}
				, style:
					{ classes: 'qtip qtip-dark qtip-round'
					, tip: {corner: false}
					}
				});
			element.data('group', group);
		}
	}
	$('#group').on('click', 'span', function() {
		var group = $(this).data('group');
		var node = group.shift();
		cy.center(node);
		group.push(node);
	});
}

function init() {
	var container = document.getElementById('atlas'),
		main, fitonidy, god, mehanoydy, gorgonidy;

	cy = cytoscape(
		{ container: container
		, elements: []
		, layout:
			{ name: 'preset'
			, fit: false
			}
		, style:
			'edge.curve'+
				'{' +
				'curve-style:unbundled-bezier;' +
				'control-point-distance: 30;' +
				'control-point-weight:0.5;' +
				'}' +
			'.class {width:50;height:50;}' +
			'.stat {width:30;height:30;}' +
			'.skill {width:50;height:50;}' +
			'.big.class {width:250;height:250;}' +
			'.big.skill {width:250;height:250;}' +
			'.big.empty {width:250;height:250;}' +
			'.hidden {opacity: 0;}' +

			'[?open] {border-width:1;border-color:yellow;}' +
			'.remove {border-width:3;border-color:red;border-style:dashed;}' +
			'.foundPath {border-width:3;border-color:#0066CC;border-style:dashed;}' +
			'.want {border-width:3;border-color:yellow;border-style:dashed;}' +
			'.empty {border-width:1;border-color:gray;background-opacity:0;}' +
			'edge[?open] {width:1;line-color:yellow;}' +
			'edge.remove {width:3;line-color:red;line-style:dashed;}' +
			'edge.foundPath {width:3;line-style:dashed;line-color:#0066CC;}' +
			'edge.want {width:3;line-color:yellow;line-style:dashed;}' +

			'.big[?open] {border-width:10;border-color:yellow;}' +
			'.big.remove {border-width:15;border-color:red;border-style:dashed;}' +
			'.big.foundPath {border-width:15;border-color:#0066CC;border-style:dashed;}' +
			'.big.want {border-width:15;border-color:yellow;border-style:dashed;}' +
			'.big.empty {border-width:15;border-color:gray;background-opacity:0;}' +
			'edge.big {width:15;}' +
			'edge.big[?open] {width:10;line-color:yellow;}' +
			'edge.big.remove {line-color:red;line-style:dashed;}' +
			'edge.big.foundPath {width:15;line-style:dashed;line-color:#0066CC;}' +
			'edge.big.want {line-color:yellow;line-style:dashed;}' +

			'node {background-repeat:no-repeat;background-clip:none;background-fit:cover;background-opacity:0;}' +
			'[power] {background-image:images/nodes/power.png;}' +
			'[vit] {background-image:images/nodes/vit.png;}' +
			'[str] {background-image:images/nodes/str.png;}' +
			'[luck] {background-image:images/nodes/luck.png;}' +
			'[spirit] {background-image:images/nodes/spirit.png;}' +
			'[valor] {background-image:images/nodes/valor.png;}' +
			'[majesty] {background-image:images/nodes/majesty.png;}'+
			'.revelation {background-image:images/nodes/revelation.png;border-width:5;border-color:#FF1493;}'+
			// class
			'[nodeImage="krio"] {background-image:images/nodes/krio.png;}' +
			'[nodeImage="paladin"] {background-image:images/nodes/paladin.png;}' +
			'[nodeImage="LK"] {background-image:images/nodes/LK.png;}' +
			'[nodeImage="archer"] {background-image:images/nodes/archer.png;}'+
			'[nodeImage="kinetic"] {background-image:images/nodes/kinetic.png;}'+
			'[nodeImage="necromancer"] {background-image:images/nodes/necromancer.png;}'+
			'[nodeImage="rouge"] {background-image:images/nodes/rouge.png;}'+
			'[nodeImage="hedgehopper"] {background-image:images/nodes/hedgehopper.png;}'+
			'[nodeImage="monk"] {background-image:images/nodes/monk.png;}'+
			'[nodeImage="alchemist"] {background-image:images/nodes/alchemist.png;}'+
			'[nodeImage="hero"] {background-image:images/nodes/hero.png;}'+
			'[nodeImage="witch"] {background-image:images/nodes/witch.png;}'+
			'[nodeImage="berserker"] {background-image:images/nodes/berserker.png;}'+
			// skill
			'[nodeImage="maneuver"] {background-image:images/nodes/maneuver.png;}'+
			'[nodeImage="balance"] {background-image:images/nodes/balance.png;}'+
			'[nodeImage="max_return"] {background-image:images/nodes/luck.png;}'+
			'[nodeImage="surprise"] {background-image:images/nodes/surprise.png;}'+
			'[nodeImage="rush"] {background-image:images/nodes/rush.png;}' +
			'[nodeImage="destroy"] {background-image:images/nodes/destroy.png;}' +
			'[nodeImage="shock"] {background-image:images/nodes/shock.png;}' +
			'[nodeImage="triumph"] {background-image:images/nodes/triumph.png;}'+
			'[nodeImage="spirit"] {background-image:images/nodes/spirit.png;}'+
			'[nodeImage="inertia"] {background-image:images/nodes/inertia.png;}'+
			'[nodeImage="luck_hit"] {background-image:images/nodes/luck_hit.png;}'+
			'[nodeImage="luck"] {background-image:images/nodes/luck.png;}'+
			'[nodeImage="god"] {background-image:images/nodes/god.png;}'+
			'[nodeImage="str"] {background-image:images/nodes/str.png;}'+
			'[nodeImage="valor"] {background-image:images/nodes/valor.png;}'+
			'[nodeImage="create"] {background-image:images/nodes/create.png;}'+
			'[nodeImage="defence"] {background-image:images/nodes/defence.png;}'+
			'[nodeImage="injury"] {background-image:images/nodes/injury.png;}'+
			'[nodeImage="okulat"] {background-image:images/nodes/okulat.png;}'+
			'[nodeImage="reflex"] {background-image:images/nodes/reflex.png;}'+
			'[nodeImage="resistance"] {background-image:images/nodes/resistance.png;}'+
			'[nodeImage="slow"] {background-image:images/nodes/slow.png;}'+
			'[nodeImage="sphere"] {background-image:images/nodes/sphere.png;}'+
			'[nodeImage="regeneration"] {background-image:images/nodes/regeneration.png;}'+
			'[nodeImage="mutation"] {background-image:images/nodes/mutation.png;}'+
			'[nodeImage="root"] {background-image:images/nodes/root.png;}'+
			'[nodeImage="cultivation"] {background-image:images/nodes/cultivation.png;}'+
			'[nodeImage="poison"] {background-image:images/nodes/poison.png;}'+
			'[nodeImage="alert"] {background-image:images/nodes/alert.png;}'+
			'[nodeImage="equilibrium"] {background-image:images/nodes/equilibrium.png;}'+
			'[nodeImage="wave"] {background-image:images/nodes/wave.png;}'+
			'[nodeImage="spasm"] {background-image:images/nodes/spasm.png;}'+
			'[nodeImage="barrier"] {background-image:images/nodes/barrier.png;}'+
			'[nodeImage="ruthlessness"] {background-image:images/nodes/ruthlessness.png;}'+
			'[nodeImage="adrenaline"] {background-image:images/nodes/adrenaline.png;}'+
			'[nodeImage="timeout"] {background-image:images/nodes/timeout.png;}'+
			'[nodeImage="concussion"] {background-image:images/nodes/concussion.png;}'+
			'[nodeImage="credo_defend"] {background-image:images/nodes/credo_defend.png;}'+
			'[nodeImage="credo_warrior"] {background-image:images/nodes/credo_warrior.png;}'+
			'[nodeImage="double"] {background-image:images/nodes/double.png;}'+
			'[nodeImage="break"] {background-image:images/nodes/break.png;}'+
			'[nodeImage="death"] {background-image:images/nodes/death.png;}'+
			'[nodeImage="dissection"] {background-image:images/nodes/dissection.png;}'+
			'[nodeImage="life"] {background-image:images/nodes/life.png;}'+
			// god
			'[nodeImage="knowledge"] {background-image:images/nodes/knowledge.png;}'+
			'[nodeImage="warrior"] {background-image:images/nodes/warrior.png;}'+
			'[nodeImage="hunter"] {background-image:images/nodes/hunter.png;}'+
			'[nodeImage="wanderer"] {background-image:images/nodes/wanderer.png;}'+
			'[nodeImage="defend"] {background-image:images/nodes/defend.png;}'+
			'[nodeImage="rule"] {background-image:images/nodes/rule.png;}'+
			'[nodeImage="laceration"] {background-image:images/nodes/laceration.png;}'+
			// mehanoydy
			'[nodeImage="power"] {background-image:images/nodes/power.png;}'+
			'[nodeImage="capacity"] {background-image:images/nodes/capacity.png;}'+
			'[nodeImage="eattack"] {background-image:images/nodes/eattack.png;}'+
			'[nodeImage="eimpuls"] {background-image:images/nodes/eimpuls.png;}'+
			'[nodeImage="flash"] {background-image:images/nodes/flash.png;}'+
			'[nodeImage="shield"] {background-image:images/nodes/shield.png;}'+
			// gorgonidy
			'[nodeImage="snakebite"] {background-image:images/nodes/snakebite.png;}'+
			'[nodeImage="cobra"] {background-image:images/nodes/cobra.png;}'
		, autolock: true
		, autoungrabify: true
		, zoom: 1
		, maxZoom: 1
		, minZoom: 0.05
		});
	main = cy.add(
		{ nodes: nodesData
		, edges: edgesData
		});
	god = cy.add(
		{ nodes: godNodesData
		, edges: godEdgesData
		});
	fitonidy = cy.add(
		{ nodes: fitonidyNodesData
		, edges: fitonidyEdgesData
		});
	mehanoydy = cy.add(
		{ nodes: mehanoydyNodesData
		, edges: mehanoydyEdgesData
		});
	gorgonidy = cy.add(
		{ nodes: gorgonidyNodesData
		, edges: gorgonidyEdgesData
		});
	cy.remove(god);
	cy.remove(fitonidy);
	cy.remove(mehanoydy);
	cy.remove(gorgonidy);
	selected = 0;
	cy.center(cy.nodes('#n17'));
	// TODO: load saved data
	sparksName = ['red', 'green', 'blue', 'all', 'transformation', 'revelation', 'god'];
	allAtlas = [main, god, fitonidy, mehanoydy, gorgonidy];
	calcSpark(allAtlas);
	groupSkill(allAtlas);
	initSpark();
	renderGroup();
	displayGroup();
};

init();

cy.on('tap', function(evt) {
	var node, openPath,
		ll = sparksName.length,
		used = graphsStat[selected].used,
		stat = graphsStat[selected].stat;

	if (evt.cy === evt.cyTarget) {
		return;
	}
	node = evt.cyTarget;

	if (node.data('open')) {
		openPath = getUnopen(node);
		if (openPath.length == 0) {
			return;
		}
		cy.startBatch();
		for (var i = 0, l = openPath.length; i < l; i++) {
			if (!openPath[i].isNode()) {
				continue;
			}
			nodeData = openPath[i].data();
			for (var j = 0; j < ll; j++) {
				name = sparksName[j];
				used[name] -= nodeData.need[name] || 0;
			}
			for (var e = 0; e < sl; e++) {
				name = statsName[e];
				stat[name] -= nodeData[name] || 0;
			}
		}
		openPath.data('open', false).removeClass('remove');
		cy.endBatch();
	} else {
		openPath = foundPath(node, '[?open]', '[!open]');
		if (!openPath.found) {
			return;
		}
		cy.startBatch();
		openPath = openPath.path;
		for (var i = 0, l = openPath.length; i < l; i++) {
			if (!openPath[i].isNode()) {
				continue;
			}
			isFound = openPath[i].hasClass('foundPath');
			nodeData = openPath[i].data();
			for (var j = 0; j < ll; j++) {
				name = sparksName[j];
				if (isFound) {
					need[name] -= nodeData.need[name] || 0;
				}
				used[name] += nodeData.need[name] || 0;
			}
			for (var e = 0; e < sl; e++) {
				name = statsName[e];
				if (isFound) {
					giveStat[name] -= nodeData[name] || 0;
				}
				stat[name] += nodeData[name] || 0;
			}
		}
		openPath.data('open', true).removeClass('foundPath want');
		openPath[2].connectedEdges().filter(function(i, ele) {
			return ele.source().data('open') && ele.target().data('open');
		}).removeClass('foundPath want').data('open', true);
		cy.endBatch();
	}
	if (sparksName.indexOf('all') !== -1) {
		need['all'] = need.red + need.green + need.blue;
		used['all'] = used.red + used.green + used.blue;
	}
	updateSparks(0, need);
	updateSparks(1, graphsStat[selected].used);
	updateStat(0, giveStat);
	updateStat(1, stat);
});

function foundPath(to, excludeNode, useNode) {
	var graphWithouOpen, position, from, aStar;
	var start;
	var helpSearch =
		[
			{ group: 'nodes'
			, data: {id: 'startSearch', need: {}}
			, position: {x: 0, y: 0}
			}
		];

	position = to.position();
	targetX = position.x;
	targetY = position.y;
	from = cy.elements('node' + excludeNode).neighborhood('node' + useNode);
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
	aStar = cy.elements(useNode).aStar({root: '#startSearch', goal: to
		, weight: function (edge) {
			var sourceNeed = edge.source().data('need') || {};
			var targetNeed = edge.target().data('need') || {};
			var weight;
			weight =
				(sourceNeed.blue || 0) + (sourceNeed.red || 0) +
				(sourceNeed.green || 0) + (targetNeed.blue || 0) +
				(targetNeed.red || 0) + (targetNeed.green || 0) +
				(targetNeed.revelation || 0) * revelationWeight +
				(targetNeed.god || 0) +
				(targetNeed.fitonidy || 0) + (targetNeed.mehanoydy || 0);
			return weight;
		}
	});
	cy.remove(helpSearch);
	return aStar;
}

cy.on('cxttap', function(evt) {
	var goal,
		needPath,
		ll = sparksName.length;

	goal = evt.cyTarget;
	if (evt.cy === goal) {
		return;
	}
	if (goal.data('open')) {
		return;
	}
	needPath = foundPath(goal, '[?open]', '[!open]');
	need =
		{ red: 0, green: 0, blue: 0, all: 0
		, transformation: 0
		, revelation: 0
		, god: 0
		, book: 0
		, fitonidy: 0, mehanoydy: 0, gorgonidy: 0
		};
	giveStat =
		{ prestige:0
		, power: 0, vit: 0
		, str: 0, valor: 0, luck: 0, spirit: 0
		, majesty: 0, dex: 0
		};
	cy.startBatch();
	cy.elements('.foundPath').removeClass('foundPath');
	if (needPath.found) {
		needPath = needPath.path;
		needPath.addClass('foundPath');
		for (var i = needPath.length; i--; ) {
			if (needPath[i].isNode()) {
				nodeData = needPath[i].data();
				for (var j = 0; j < ll; j++) {
					name = sparksName[j];
					need[name] += nodeData.need[name] || 0;
				}
				for (var e = 0; e < sl; e++) {
					name = statsName[e];
					giveStat[name] += nodeData[name] || 0;
				}
			}
		}
		if (sparksName.indexOf('all') !== -1) {
			need['all'] = need.red + need.green + need.blue;
		}
		updateSparks(0, need);
		updateStat(0, giveStat);
	}
	cy.endBatch();
});

cy.on('tapdragout', 'node', function(evt) {
	$("#box").qtip('destroy');
	if (tempPath) {
		tempPath.removeClass('want remove');
		tempPath = undefined;
	}
});

function renderTitle(node) {
	var title = 'Не сделано =(',
		nodeData = node.data(),
		imageName;

	if (node.hasClass('skill') || node.hasClass('class')) {
		imageName = nodeData.nodeImage;
		title = nodeData.title;
	} else if (nodeData.vit) {
		imageName = "vit";
		title = 'Бонус: Выносливость';
	} else if (nodeData.power) {
		imageName = "power";
		title = 'Бонус: Могущество';
	} else if (nodeData.spirit) {
		imageName = "spirit";
		title = 'Бонус: Дух';
	} else if (nodeData.str) {
		imageName = "str";
		title = 'Бонус: Сила';
	} else if (nodeData.luck) {
		imageName = "luck";
		title = 'Бонус: Удача';
	} else if (nodeData.valor) {
		imageName = "valor";
		title = 'Бонус: Отвага';
	} else if (nodeData.majesty) {
		imageName = "majesty";
		title = 'Бонус: Величие';
	}
	if (nodeData.need.revelation) {
		imageName = "revelation";
	}
	return '<div class="tooltip-title">' +
		'<img width="25" src="images/nodes/' + imageName + '.png"></img> ' +
			title +
		'</div>';
}

function renderText(node, isNeedCost) {
	var text = '',
		nodeData = node.data(),
		need = nodeData.need || {};

	if (nodeData.prestige) {
		text +=
			'<div class="stat"><img width="25" src="images/prestige.png"></img> + ' +
			nodeData.prestige + '</div><br/>';
	}
	if (node.hasClass('skill') || node.hasClass('class')) {
		text += '<p>' + nodeData.description + '</p>';
	}
	if (nodeData.vit) {
		text += '<div class="stat">Выносливость<span>' + nodeData.vit +'</span></div>';
		if (nodeData.dex) {
			text += '<br/><div class="stat">Сноровка<span>' + nodeData.dex +'</span></div>';
		}
		text += '<p>Увеличивает максимальный запас здоровья.</p>';
	}
	if (nodeData.power) {
		text += '<div class="stat">Могущество<span>' + nodeData.power +'</span></div>';
		if (nodeData.dex) {
			text += '<br/><div class="stat">Сноровка<span>' + nodeData.dex +'</span></div>';
		}
		text += '<p>Увеличивает базовый урон.</p>';
	}
	if (nodeData.spirit) {
		text +=
			'<div class="stat">Дух<span>' + nodeData.spirit +'</span></div>' +
			'<p>Увеличивает импульсный урон.</p>';
	}
	if (nodeData.str) {
		text +=
			'<div class="stat">Сила<span>' + nodeData.str +'</span></div>' +
			'<p>Увеличивает максимальную границу базового урона.</p>';
	}
	if (nodeData.luck) {
		text +=
			'<div class="stat">Удача<span>' + nodeData.luck +'</span></div>' +
			'<p>Увеличивает критический урон.</p>';
	}
	if (nodeData.valor) {
		text +=
			'<div class="stat">Отвага<span>' + nodeData.valor +'</span></div>' +
			'<p>Увеличивает дополнительный урон.</p>';
	}
	if (nodeData.majesty) {
		text +=
			'<div class="stat">Величие<span>' + nodeData.majesty +'</span></div>' +
			'<p>Позволяет возводить величественные храмы в провинциях Элиона, ' +
			'в которых распространено влияние культа.</p>';
	}
	if (isNeedCost) {
		for (var key in nodeData.need) {
			text += '<div class="cost">Стоймость<span>' +
				'<img width="20" src="images/spark/' + key + '.png"></img> ' +
				need[key] + '</span></div>';
		}
	}
	return text;
}

function getUnopen(node) {
	var nearNode = node.neighborhood('node'),
		nextNode = cy.elements('.start').toArray(),
		connectedEdges, edge, otherNode,
		elements = cy.elements('.start');

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
	return cy.elements('[?open]').difference(elements);
}

cy.on('tapdragover', 'node', function(evt) {
	var target = evt.cyTarget;
	var renderedPosition = target.renderedPosition();
	var x = renderedPosition.x;
	var y = renderedPosition.y;

	if (evt.cy === evt.cyTarget || !target.isNode() || target.hasClass('empty'))
	{
		return;
	}
	$("#box").qtip(
		{ content:
			{ title: renderTitle(target)
			, text: renderText(target, true)
			}
		, show:
			{ delay: 300
			, event: false
			, ready: true
			, effect: false
			}
		, position:
			{ my: 'left top'
			, at: 'top right'
			, target: [x + 25, y]
			, viewport: $(window)
			}
		, style:
			{ classes: 'qtip qtip-dark qtip-round'
			, tip: {corner: false}
			}
		});
	if (target.hasClass('foundPath')) {
		return;
	} else if (target.data('open')) {
		tempPath = getUnopen(target);
		if (tempPath.length > 0) {
			tempPath.addClass('remove');
		} else {
			tempPath = undefined;
		}
	} else {
		tempPath = foundPath(target, '[?open]', '[!open]');
		if (tempPath.found) {
			tempPath = tempPath.path;
			tempPath.addClass('want');
		} else {
			tempPath = undefined;
		}
	}
});

function setNodeSize(isBig) {
	if (isBig) {
		cy.elements().addClass('big');
		cy.elements('.stat,edge').addClass('hidden');
		cy.elements('edge.between').removeClass('hidden');
	} else {
		cy.elements().removeClass('big hidden');
	}
}

cy.on('zoom', function(evt) {
	var zoomLevel = cy.zoom();

	if (!showBig && zoomLevel < 0.20) {
		showBig = true;
		setNodeSize(showBig);
	}
	if (showBig && zoomLevel > 0.20) {
		showBig = false;
		setNodeSize(showBig);
	}
});

$('#select_atlas select').on('change', function(ev) {
	var newSelected = parseInt(this.value, 10);
	var position = cy.pan();
	if (newSelected === selected) {
		return;
	}
	graphsStat[selected].elements.remove();
	graphsStat[selected].position = {x: position.x, y: position.y};
	$('#group' + selected).addClass('hidden');
	selected = newSelected;
	if (selected == 0) {
		sparksName = ['red', 'green', 'blue', 'all', 'transformation', 'revelation', 'god'];
	} else if (selected == 1) {
		sparksName = ['red', 'green', 'blue', 'all', 'god', 'book'];
	} else if (selected == 2) {
		sparksName = ['fitonidy'];
	} else if (selected == 3) {
		sparksName = ['mehanoydy'];
	} else if (selected == 4) {
		sparksName = ['gorgonidy'];
	}
	graphsStat[selected].elements.restore();
	cy.pan(graphsStat[selected].position);
	displayGroup();
	need =
		{ red: 0, green: 0, blue: 0, all: 0
		, transformation: 0
		, revelation: 0
		, god: 0
		, book: 0
		, fitonidy: 0, mehanoydy: 0, gorgonidy: 0
		};
	giveStat =
		{ prestige:0
		, power: 0, vit: 0
		, str: 0, valor: 0, luck: 0, spirit: 0
		, majesty: 0, dex: 0
		};
	cy.elements('.foundPath').removeClass('foundPath');
	initSpark();
	setNodeSize(showBig);
	updateSparks(0, need);
	updateStat(0, giveStat);
});

$(function() {
	$('#select_atlas select')[0].value = "0";
});
