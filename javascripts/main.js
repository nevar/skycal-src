var cy,
	blue = 0,
	green = 0,
	red = 0,
	used_blue = 0,
	used_green = 0,
	used_red = 0,
	tempPath,
	showBig = false;

function init() {
	var container = document.getElementById('atlas');

	cy = cytoscape(
		{ container: container
		, elements:
			{ nodes: nodesData
			, edges: edgesData
			}
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
			'edge[target = "n286"],edge[target = "n284"],'+
			'edge[target = "n301"],edge[target = "n302"],'+
			'edge[target = "n320"],edge[target = "n322"],'+
			'edge[target = "n409"],edge[target = "n410"],'+
			'edge[target = "n428"],edge[target = "n425"],'+
			'edge[target = "n426"],edge[target = "n430"],'+
			'edge[target = "n431"],edge[target = "n442"],'+
			'edge[target = "n489"],edge[target = "n491"]'+
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

			'.image {background-fit:cover;background-opacity:0;}' +
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
			'.max_str {background-image:images/nodes/str.png;}'
		, autolock: true
		, autoungrabify: true
		, zoom: 1
		, maxZoom: 1
		, minZoom: 0.05
		});
	cy.center(cy.nodes('#n17'));
};

init();

function updateUsed() {
	document.getElementById('used_red').innerHTML = used_red;
	document.getElementById('used_blue').innerHTML = used_blue;
	document.getElementById('used_green').innerHTML = used_green;
	document.getElementById('used_total').innerHTML = used_red + used_blue + used_green;
}

cy.on('tap', function(evt) {
	var node, resource, openPath;

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
			openPath.removeClass('foundPath want').addClass('open');
			openPath[2].connectedEdges().filter(function(i, ele) {
				return ele.source().data('open') || ele.target().data('open');
			}).removeClass('foundPath want').addClass('open');
			for (var i = 0, l = openPath.length; i < l; i++) {
				openPath[i].data('open', true);
				resource = openPath[i].data('need') || {};
				if (openPath[i].hasClass('foundPath')) {
					blue -= resource.blue || 0;
					red -= resource.red || 0;
					green -= resource.green || 0;
				}
				used_blue += resource.blue || 0;
				used_red += resource.red || 0;
				used_green += resource.green || 0;
			}
			updateNeed();
			updateUsed();
		}
		cy.endBatch();
	}
});

function updateNeed() {
	document.getElementById('need_red').innerHTML = red;
	document.getElementById('need_blue').innerHTML = blue;
	document.getElementById('need_green').innerHTML = green;
	document.getElementById('need_total').innerHTML = red + blue + green;
}

function foundPath(to, excludeNode, useNode) {
	var graphWithouOpen, position, from, aStar;
	var start;
	var helpSearch =
		[
			{ group: 'nodes'
			, data: {id: 'startSearch'}
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
				sourceNeed.blue || 0 + sourceNeed.red || 0 +
				sourceNeed.green || 0 + targetNeed.blue || 0 +
				targetNeed.red || 0 + targetNeed.green || 0;
			return weight;
		}
	});
	cy.remove(helpSearch);
	return aStar;
}

cy.on('cxttap', function(evt) {
	var goal,
		position,
		oldPath,
		foundPath,
		root,
		aStar,
		targetX,
		targetY,
		need;

	goal = evt.cyTarget;
	if (evt.cy === goal) {
		return;
	}
	if (goal.data('open')) {
		return;
	}
	oldPath = cy.elements('.foundPath');
	foundPath = {distance: 9999999999999};
	blue = green = red = 0;
	position = goal.position();
	targetX = position.x;
	targetY = position.y;
	cy.startBatch();
	oldPath.removeClass('foundPath');
	root = cy.elements('node.open').neighborhood('node').difference('.open');
	for (var i = root.length; i--; ) {
		aStar = cy.elements().aStar({root: root[i], goal: goal
			, heuristic: function (node) {
				var position = node.position(),
					dx = position.x - targetX,
					dy = position.y - targetY,
					need = node.data('need') || {},
					weight = need.blue || 0 + need.red || 0 + need.green || 0;
				return (weight * 10000 || 0) + (dx * dx + dy * dy) / 1000;
			}
		});
		if (aStar.found && foundPath.distance > aStar.distance) {
			foundPath = aStar;
		}
	}
	if (foundPath.found) {
		foundPath = foundPath.path;
		foundPath.addClass('foundPath');
		for (var i = foundPath.length; i--; ) {
			if (foundPath[i].isNode()) {
				need = foundPath[i].data('need') || {};
				blue += need.blue || 0;
				red += need.red || 0;
				green += need.green || 0;
			}
		}
		updateNeed();
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
	var title = 'sdlkfj',
		nodeData = node.data(),
		imageName;

	if (node.hasClass('krio')) {
		title = '<img width="25" src="images/nodes/krio.png"></img> Класс: Криомант';
	}
	if (nodeData.vit) {
		imageName = "vit";
		title = 'Бонус: Выносливость';
	}
	if (nodeData.power) {
		imageName = "power";
		title = 'Бонус: Могущество';
	}
	if (nodeData.spirit) {
		imageName = "spirit";
		title = 'Бонус: Дух';
	}
	if (nodeData.str) {
		imageName = "str";
		title = 'Бонус: Сила';
	}
	if (nodeData.luck) {
		imageName = "luck";
		title = 'Бонус: Удача';
	}
	if (nodeData.valor) {
		imageName = "valor";
		title = 'Бонус: Отвага';
	}
	if (nodeData.majesty) {
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

	if (node.data('prestige')) {
		text +=
			'<div class="stat"><img width="25" src="images/prestige.png"></img> + ' +
			node.data('prestige') + '</div><br/>';
	}
	if (nodeData.vit) {
		text +=
			'<div class="stat">Выносливость<span>' + nodeData.vit +'</span></div><br/>' +
			'<div class="stat">Сноровка<span>' + nodeData.dex +'</span></div>' +
			'<p>Увеличивает максимальный запас здоровья.</p>';
	}
	if (nodeData.power) {
		text +=
			'<div class="stat">Могущество<span>' + nodeData.power +'</span></div><br/>' +
			'<div class="stat">Сноровка<span>' + nodeData.dex +'</span></div>' +
			'<p>Увеличивает базовый урон.</p>';
	}
	if (nodeData.spirit) {
		text +=
			'<div class="stat">Дух<span>' + nodeData.spirit +'</span></div><br/>' +
			'<p>Увеличивает импульсный урон.</p>';
	}
	if (nodeData.str) {
		text +=
			'<div class="stat">Сила<span>' + nodeData.str +'</span></div><br/>' +
			'<p>Увеличивает максимальную границу базового урона.</p>';
	}
	if (nodeData.luck) {
		text +=
			'<div class="stat">Удача<span>' + nodeData.luck +'</span></div><br/>' +
			'<p>Увеличивает критический урон.</p>';
	}
	if (nodeData.valor) {
		text +=
			'<div class="stat">Отвага<span>' + nodeData.valor +'</span></div><br/>' +
			'<p>Увеличивает дополнительный урон.</p>';
	}
	if (nodeData.majesty) {
		text +=
			'<div class="stat">Величие<span>' + nodeData.majesty +'</span></div><br/>' +
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
