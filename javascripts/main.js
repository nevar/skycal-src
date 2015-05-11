sigma.parsers.json(
	'static/main_atlas.json',
	{ renderer:
		{ container: 'sigma-container'
		, type: 'canvas'
		}
	, settings:
		{ defaultNodeColor: '#ffffff'
		}
	},
	function(s) {
		CustomShapes.init(s);
		s.refresh();
	}
);
