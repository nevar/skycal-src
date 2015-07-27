var cy,
	revelationWeight = 1,
	total, used, need,
	sparksName = [],
	tempPath,
	showBig = false,
	main, fitonidy, selected;

function calcSpark() {
	var elements = cy.elements('node'),
		nodeData,
		ll = sparksName.length,
		name;

	total =
		{ red: 0, green: 0, blue: 0, all: 0
		, transformation: 0
		, revelation: 0
		, god: 0
		, fitonidy: 0
		};
	used =
		{ red: 0, green: 0, blue: 0, all: 0
		, transformation: 0
		, revelation: 0
		, god: 0
		, fitonidy: 0
		};
	need =
		{ red: 0, green: 0, blue: 0, all: 0
		, transformation: 0
		, revelation: 0
		, god: 0
		, fitonidy: 0
		};
	for (var i = 0, l = elements.length; i < l; i++) {
		isOpen = elements[i].hasClass('open');
		nodeData = elements[i].data();
		for (var j = 0; j < ll; j++) {
			name = sparksName[j];
			total[name] += nodeData.need[name] || 0;
			if (isOpen) {
				used[name] += nodeData.need[name] || 0;
			}
		}
	}
	if (sparksName.indexOf('all') !== -1) {
		total['all'] = total.red + total.green + total.blue;
		used['all'] = used.red + used.green + used.blue;
	}
}

function initSpark() {
	var image, stat;

	calcSpark();
	for (var i = 0, l = sparksName.length; i < l; i++) {
		element = document.getElementById('image' + i);
		element.className = '';
		image = element.childNodes[0].className = sparksName[i];
		element = document.getElementById('stat' + i);
		element.className = '';
		stat = element.childNodes;
		stat[0].innerHTML = 0;
		stat[2].innerHTML = used[sparksName[i]];
		stat[4].innerHTML = total[sparksName[i]];
	}
	for (var i = sparksName.length; i < 7; i++) {
		document.getElementById('image' + i).className = 'hidden';
		document.getElementById('stat' + i).className = 'hidden';
	}
}

function updateUsedSparks() {
	for (var i = 0, l = sparksName.length; i < l; i++) {
		stat = document.getElementById('stat' + i).childNodes;
		stat[2].innerHTML = used[sparksName[i]];
	}
}

function updateNeedSparks() {
	for (var i = 0, l = sparksName.length; i < l; i++) {
		stat = document.getElementById('stat' + i).childNodes;
		stat[0].innerHTML = need[sparksName[i]];
	}
}

function init() {
	var container = document.getElementById('atlas');

	cy = cytoscape(
		{ container: container
		, elements: []
		, layout:
			{ name: 'preset'
			, fit: false
			}
		, style:
			'edge[target = "n3"],edge[target = "n4"],edge[target = "n18"],'+
			'edge[target = "n20"],edge[target = "n35"],edge[target = "n36"],'+
			'edge[target = "n67"],edge[target = "n93"],edge[target = "n114"],'+
			'edge[target = "n99"],edge[target = "n105"],'+
			'edge[target = "n136"],edge[target = "n137"],'+
			'edge[target = "n156"],edge[target = "n157"],'+
			'edge[target = "n159"],edge[target = "n169"],'+
			'edge[target = "n170"],edge[target = "n175"],'+
			'edge[target = "n171"],edge[target = "n172"],'+
			'edge[target = "n174"],edge[target = "n220"],'+
			'edge[target = "n221"],edge[target = "n222"],'+
			'edge[target = "n224"],edge[target = "n223"],'+
			'edge[target = "n256"],edge[target = "n259"],'+
			'edge[target = "n286"],edge[target = "n284"],'+
			'edge[target = "n301"],edge[target = "n302"],'+
			'edge[target = "n320"],edge[target = "n322"],'+
			'edge[target = "n332"],edge[target = "n347"],'+
			'edge[target = "n349"],'+
			'edge[target = "n364"],edge[target = "n394"],'+
			'edge[target = "n395"],'+
			'edge[target = "n409"],edge[target = "n410"],'+
			'edge[target = "n428"],edge[target = "n425"],'+
			'edge[target = "n426"],edge[target = "n430"],'+
			'edge[target = "n431"],edge[target = "n442"],'+
			'edge[target = "n489"],edge[target = "n491"],'+
			'edge[target = "n522"],edge[target = "n524"],'+
			'edge[target = "n539"],edge[target = "n540"],'+
			'edge[target = "n2022"],edge[target = "n2020"],'+
			'edge[target = "n2052"],edge[target = "n2054"],'+
			'edge[target = "n2055"],edge[target = "n2056"],'+
			'edge[target = "n2058"],edge[target = "n2059"],'+
			'edge[target = "n2072"],edge[target = "n2074"],'+
			'edge[target = "n2075"],'+
			'edge[target = "n2084"],edge[target = "n2085"],'+
			'edge[target = "n2104"],edge[target = "n2106"],'+
			'edge[target = "n2116"],'+
			'edge[target = "n2164"],edge[target = "n2165"],'+
			'edge[target = "n2197"],edge[target = "n2198"],'+
			'edge[target = "n2214"],edge[target = "n2218"],'+
			'edge[target = "n2229"],edge[target = "n2262"]'+
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
			'.hidden {opacity: 0;}' +

			'.want {border-width:3;border-color:yellow;border-style:dashed;}' +
			'.open {border-width:1;border-color:yellow;}' +
			'.foundPath {border-width:3;border-color:#0066CC;border-style:dashed;}' +
			'edge.want {width:3;line-color:yellow;line-style:dashed;}' +
			'edge.open {width:1;line-color:yellow;}' +
			'edge.foundPath {width:3;line-style:dashed;line-color:#0066CC;}' +

			'.big.want {border-width:15;border-color:yellow;border-style:dashed;}' +
			'.big.open {border-width:10;border-color:yellow;}' +
			'.big.foundPath {border-width:15;border-color:#0066CC;border-style:dashed;}' +
			'edge.big {width:15;}' +
			'edge.big.want {width:15;line-color:yellow;line-style:dashed;}' +
			'edge.big.open {width:10;line-color:yellow;}' +
			'edge.big.foundPath {width:15;line-style:dashed;line-color:#0066CC;}' +

			'.image {background-repeat:no-repeat;background-clip:none;background-fit:cover;background-opacity:0;}' +
			'.power {background-image:images/nodes/power.png;}' +
			'.vit {background-image:images/nodes/vit.png;}' +
			'.strength {background-image:images/nodes/str.png;}' +
			'.luck {background-image:images/nodes/luck.png;}' +
			'.spirit {background-image:images/nodes/spirit.png;}' +
			'.valor {background-image:images/nodes/valor.png;}' +
			'.majesty {background-image:images/nodes/majesty.png;}'+
			'.revelation {background-image:images/nodes/revelation.png;}'+
			// class
			'.krio {background-image:images/nodes/krio.png;}' +
			'.paladin {background-image:images/nodes/paladin.png;}' +
			'.light_keeper {background-image:images/nodes/LK.png;}' +
			'.archer {background-image:images/nodes/archer.png;}'+
			'.kinetic {background-image:images/nodes/kinetic.png;}'+
			'.necromancer {background-image:images/nodes/necromancer.png;}'+
			'.rouge {background-image:images/nodes/rouge.png;}'+
			// skill
			'.maneuver {background-image:images/nodes/maneuver.png;}'+
			'.balance {background-image:images/nodes/balance.png;}'+
			'.max_return {background-image:images/nodes/luck.png;}'+
			'.surprise {background-image:images/nodes/surprise.png;}'+
			'.rush {background-image:images/nodes/rush.png;}' +
			'.destroy {background-image:images/nodes/destroy.png;}' +
			'.shock {background-image:images/nodes/shock.png;}' +
			'.triumph {background-image:images/nodes/triumph.png;}'+
			'.impuls {background-image:images/nodes/spirit.png;}'+
			'.inertia {background-image:images/nodes/inertia.png;}'+
			'.luck_hit {background-image:images/nodes/luck_hit.png;}'+
			'.god {background-image:images/nodes/god.png;}'+
			'.max_str {background-image:images/nodes/str.png;}'+
			'.mobilization {background-image:images/nodes/valor.png;}'+
			'.create {background-image:images/nodes/create.png;}'+
			'.defence {background-image:images/nodes/defence.png;}'+
			'.injury {background-image:images/nodes/injury.png;}'+
			'.okulat {background-image:images/nodes/okulat.png;}'+
			'.reflex {background-image:images/nodes/reflex.png;}'+
			'.resist {background-image:images/nodes/resistance.png;}'+
			'.slow {background-image:images/nodes/slow.png;}'+
			'.sphere {background-image:images/nodes/sphere.png;}'+
			'.regeneration {background-image:images/nodes/regeneration.png;}'+
			'.mutation {background-image:images/nodes/mutation.png;}'+
			'.root {background-image:images/nodes/root.png;}'+
			'.cultivation {background-image:images/nodes/cultivation.png;}'+
			'.poison {background-image:images/nodes/poison.png;}'
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
	fitonidy = cy.add(
		{ nodes: fitonidyNodesData
		, edges: fitonidyEdgesData
		});
	cy.remove(fitonidy);
	selected = main;
	cy.center(cy.nodes('#n17'));
	// TODO: load saved data
	sparksName = ['red', 'green', 'blue', 'all', 'transformation', 'revelation', 'god'];
	initSpark();
};

init();

cy.on('tap', function(evt) {
	var node, openPath,
		ll = sparksName.length;

	if (evt.cy === evt.cyTarget) {
		return;
	}
	node = evt.cyTarget;

	if (node.hasClass('open')) {
		// TODO: unopen
		return;
	} else {
		openPath = foundPath(node, '[?open]', '[!open]');
		cy.startBatch();
		if (openPath.found) {
			openPath = openPath.path;
			for (var i = 0, l = openPath.length; i < l; i++) {
				openPath[i].data('open', true);
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
			}
			if (sparksName.indexOf('all') !== -1) {
				need['all'] = need.red + need.green + need.blue;
				used['all'] = used.red + used.green + used.blue;
			}
			updateNeedSparks();
			updateUsedSparks();
			openPath.removeClass('foundPath want').addClass('open');
			openPath[2].connectedEdges().filter(function(i, ele) {
				return ele.source().data('open') || ele.target().data('open');
			}).removeClass('foundPath want').addClass('open');
		}
		cy.endBatch();
	}
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
				(targetNeed.god || 0) + (targetNeed.fitonidy || 0);
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
		, fitonidy: 0
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
			}
		}
		if (sparksName.indexOf('all') !== -1) {
			need['all'] = need.red + need.green + need.blue;
		}
		updateNeedSparks();
	}
	cy.endBatch();
});

cy.on('tapdragout', 'node', function(evt) {
	$("#box").qtip('destroy');
	if (tempPath && tempPath.path) {
		tempPath.path.removeClass('want');
	}
});

function renderTitle(node) {
	var title = 'Не сделано =(',
		nodeData = node.data(),
		imageName;

	if (node.hasClass('skill')) {
		imageName = nodeData.nodeImage;
		title = nodeData.title;
	} else if (node.hasClass('krio')) {
		imageName = 'krio';
		title = 'Класс: Криомант';
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

function renderText(node) {
	var text = '',
		need = node.data('need') || {},
		nodeData = node.data();

	if (node.hasClass('skill')) {
		text = '<p>' + nodeData.description + '</p>';
	}
	if (node.data('prestige')) {
		text +=
			'<div class="stat"><img width="25" src="images/prestige.png"></img> + ' +
			node.data('prestige') + '</div><br/>';
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
	if (nodeData.need) {
		text += '<div class="cost">Стоймость<span>';
		if (nodeData.need.green) {
			text += '<img width="20" src="images/spark/green.png"></img> ' + nodeData.need.green;
		}
		if (nodeData.need.blue) {
			text += '<img width="20" src="images/spark/blue.png"></img> ' + nodeData.need.blue;
		}
		if (nodeData.need.red) {
			text += '<img width="20" src="images/spark/red.png"></img> ' + nodeData.need.red;
		}
		if (nodeData.need.revelation) {
			text += '<img width="20" src="images/spark/revelation.png"></img> ' + nodeData.need.revelation;
		}
		if (nodeData.need.fitonidy) {
			text += '<img width="20" src="images/spark/fitonidy.png"></img> ' + nodeData.need.fitonidy;
		}
		text += '</span></div>';
	}
	return text;
}

cy.on('tapdragover', 'node', function(evt) {
	var target = evt.cyTarget;
	var renderedPosition = target.renderedPosition();
	var x = renderedPosition.x;
	var y = renderedPosition.y;

	if (evt.cy === evt.cyTarget && targer.isNode()) {
		return;
	}
	$("#box").qtip(
		{ content:
			{ title: renderTitle(target)
			, text: renderText(target)
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
	if (target.hasClass('open')) {
		return;
	}
	tempPath = foundPath(target, '[?open]', '[!open]');
	if (tempPath.found) {
		tempPath.path.addClass('want');
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
	selected.remove();
	if (this.value == "0") {
		selected = main;
		sparksName = ['red', 'green', 'blue', 'all', 'transformation', 'revelation', 'god'];
	}
	if (this.value == "1") {
		selected = fitonidy;
		sparksName = ['fitonidy'];
	}
	selected.restore();
	initSpark();
	setNodeSize(showBig);
});
