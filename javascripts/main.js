var images_url;
var loaded = 0;

sigma.utils.pkg('sigma.canvas.nodes');

images_url =
	[ "images/node/green.png"
	];

sigma.parsers.json(
	'static/main_atlas.json',
	{ renderer:
		{ container: document.getElementById('sigma-container')
		, type: 'canvas'
		}
	, settings:
		{ defaultNodeColor: '#ffffff'
		, drawNodes: false
		}
	},
	function(s) {
		CustomShapes.init(s);
		s.refresh();
	}
);
