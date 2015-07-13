var cy,
	blue = 0,
	green = 0,
	red = 0,
	used_blue = 0,
	used_green = 0,
	used_red = 0;

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
			'edge[target = "n3"],edge[target = "n4"] {curve-style:unbundled-bezier;control-point-distance:25;control-point-weight:0.5;}' +
			'.class {width:50;height:50;}' +
			'.stat {width:30;height:30;}' +
			'.skill {width:20;height:20;}' +
			'.open {border-width:1;border-color:yellow;line-color:yellow;}' +
			'.foundPath {border-width:1;border-color:blue;border-style:dashed;line-style:dashed;line-color:blue;}' +
			'.image {background-fit:cover;background-opacity:0;}' +

			'.krio {background-image:images/nodes/krio.png;}' +
			'.paladin {background-image:images/nodes/paladin.png;}' +

			'.power {background-image:images/nodes/power.png;}' +
			'.vit {background-image:images/nodes/vit.png;}' +
			'.strength {background-image:images/nodes/str.png;}' +
			'.luck {background-image:images/nodes/luck.png;}' +
			'.spirit {background-image:images/nodes/spirit.png;}' +
			'.valor {background-image:images/nodes/val.png;}'
		, autolock: true
		, autoungrabify: true
		});
};

init();

function updateUsed() {
	document.getElementById('used_red').innerHTML = used_red;
	document.getElementById('used_blue').innerHTML = used_blue;
	document.getElementById('used_green').innerHTML = used_green;
}

cy.on('tap', function(evt) {
	var node, neighborhood, near = false, resource;

	if (evt.cy === evt.cyTarget) {
		return;
	}
	node = evt.cyTarget;
	cy.startBatch();
	neighborhood = node.neighborhood();
	for (var i = neighborhood.length - 1; i > 0; i -= 2) {
		if (neighborhood[i - 1].hasClass('open')) {
			neighborhood[i].addClass('open').removeClass('foundPath');
			near = true;
		}
	}
	if (near) {
		resource = node.data('need');
		node.addClass('open');
		if (node.hasClass('foundPath')) {
			node.removeClass('foundPath');
			blue -= resource.blue || 0;
			red -= resource.red || 0;
			green -= resource.green || 0;
			updateNeed();
		}
		used_blue += resource.blue || 0;
		used_red += resource.red || 0;
		used_green += resource.green || 0;
		updateUsed();
	}
	cy.endBatch();
});

function updateNeed() {
	document.getElementById('need_red').innerHTML = red;
	document.getElementById('need_blue').innerHTML = blue;
	document.getElementById('need_green').innerHTML = green;
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
	if (goal.hasClass('open')) {
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
					dy = position.y - targetY;
				return (node.data('weight') * 10000 || 0) + dx * dx + dy * dy;
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
				need = foundPath[i].data('need');
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
	return '<div class="tooltip-title">' + title + '</div>';
}

function renderText(node) {
	var text = '';

	if (node.data('prestige')) {
		text +=
			'<div class="stat"><img width="25" src="images/prestige.png"></img> +' +
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
	return text;
}

cy.on('tapdragover', 'node', function(evt) {
	var target = evt.cyTarget;
	var renderedPosition = target.renderedPosition();
	var x = renderedPosition.x;
	var y = renderedPosition.y;

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
});
