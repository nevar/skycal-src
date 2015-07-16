var cy,
	blue = 0,
	green = 0,
	red = 0,
	used_blue = 0,
	used_green = 0,
	used_red = 0,
	tempPath;

function init() {
	var container = document.getElementById('atlas');

	cy = cytoscape(
		{ container: container
		, elements:
			{ nodes: nodesData
			, edges: edgesData
			}
		, layout: {name: 'preset'}
		, style:
			'edge[target = "n3"],edge[target = "n4"],edge[target = "n35"],' +
			'edge[target = "n36"],edge[target = "n67"]' +
			'{' +
				'curve-style:unbundled-bezier;' +
				'control-point-distance: 30;' +
				'control-point-weight:0.5;' +
				'}' +
			'edge[target = "n20"],edge[target = "n19"],edge[target = "n94"],' +
			'edge[target = "n101"],edge[target = "n98"]'+
			'{curve-style:unbundled-bezier;control-point-distance:-30;control-point-weight:0.5;}' +
			'.class {width:50;height:50;}' +
			'.stat {width:30;height:30;}' +
			'.skill {width:50;height:50;}' +
			'.open {border-width:1;border-color:yellow;line-color:yellow;}' +
			'.foundPath {border-width:1;border-color:blue;border-style:dashed;line-style:dashed;line-color:blue;}' +
			'.image {background-fit:cover;background-opacity:0;}' +

			'.krio {background-image:images/nodes/krio.png;}' +
			'.paladin {background-image:images/nodes/paladin.png;}' +
			'.light_keeper {background-image:images/nodes/LK.png;}' +

			'.power {background-image:images/nodes/power.png;}' +
			'.vit {background-image:images/nodes/vit.png;}' +
			'.strength {background-image:images/nodes/str.png;}' +
			'.luck {background-image:images/nodes/luck.png;}' +
			'.spirit {background-image:images/nodes/spirit.png;}' +
			'.valor {background-image:images/nodes/valor.png;}' +
			'.majesty {background-image:images/nodes/majesty.png;}'
		, autolock: true
		, autoungrabify: true
		});
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
	var title = 'sdlkfj';

	if (node.hasClass('krio')) {
		title = '<img width="25" src="images/nodes/krio.png"></img> Класс: Криомант';
	}
	if (node.hasClass('vit')) {
		title = '<img width="25" src="images/nodes/vit.png"></img> Бонус: Выносливость';
	}
	if (node.hasClass('power')) {
		title = '<img width="25" src="images/nodes/power.png"></img> Бонус: Могущество';
	}
	if (node.hasClass('spirit')) {
		title = '<img width="25" src="images/nodes/spirit.png"></img> Бонус: Дух';
	}
	if (node.hasClass('strength')) {
		title = '<img width="25" src="images/nodes/str.png"></img> Бонус: Сила';
	}
	if (node.hasClass('luck')) {
		title = '<img width="25" src="images/nodes/luck.png"></img> Бонус: Удача';
	}
	if (node.hasClass('valor')) {
		title = '<img width="25" src="images/nodes/valor.png"></img> Бонус: Отвага';
	}
	if (node.hasClass('majesty')) {
		title = '<img width="25" src="images/nodes/majesty.png"></img> Бонус: Величие';
	}
	return '<div class="tooltip-title">' + title + '</div>';
}

function renderText(node) {
	var text = '', need = node.data('need') || {};

	if (node.data('prestige')) {
		text +=
			'<div class="stat"><img width="25" src="images/prestige.png"></img> + ' +
			node.data('prestige') + '</div><br/>';
	}
	if (node.hasClass('vit')) {
		text +=
			'<div class="stat">Выносливость<span>' + node.data('vit') +'</span></div><br/>' +
			'<div class="stat">Сноровка<span>' + node.data('dex') +'</span></div>' +
			'<p>Увеличивает максимальный запас здоровья.</p>';
	}
	if (node.hasClass('power')) {
		text +=
			'<div class="stat">Могущество<span>' + node.data('power') +'</span></div><br/>' +
			'<div class="stat">Сноровка<span>' + node.data('dex') +'</span></div>' +
			'<p>Увеличивает базовый урон.</p>';
	}
	if (node.hasClass('spirit')) {
		text +=
			'<div class="stat">Дух<span>' + node.data('spirit') +'</span></div><br/>' +
			'<p>Увеличивает импульсный урон.</p>';
	}
	if (node.hasClass('strength')) {
		text +=
			'<div class="stat">Сила<span>' + node.data('str') +'</span></div><br/>' +
			'<p>Увеличивает максимальную границу базового урона.</p>';
	}
	if (node.hasClass('luck')) {
		text +=
			'<div class="stat">Удача<span>' + node.data('luck') +'</span></div><br/>' +
			'<p>Увеличивает критический урон.</p>';
	}
	if (node.hasClass('valor')) {
		text +=
			'<div class="stat">Отвага<span>' + node.data('valor') +'</span></div><br/>' +
			'<p>Увеличивает дополнительный урон.</p>';
	}
	if (node.hasClass('majesty')) {
		text +=
			'<div class="stat">Величие<span>' + node.data('majesty') +'</span></div><br/>' +
			'<p>Позволяет возводить величественные храмы в провинциях Элиона, ' +
			'в которых распространено влияние культа.</p>';
	}
	text += '<div class="cost">Стоймость<span>';
	if (need.green) {
		text += '<img width="20" src="images/spark/green.png"></img> ' + need.green;
	}
	if (need.blue) {
		text += '<img width="20" src="images/spark/blue.png"></img> ' + need.blue;
	}
	if (need.red) {
		text += '<img width="20" src="images/spark/red.png"></img> ' + need.red;
	}
	text += '</span></div>';
	text += node.data('id') + '<br/>';
	text += node.position().x + ' ' + node.position().y;
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
