sigma.parsers.json(
	'static/main_atlas.json',
	{ container: 'sigma-container'
	, settings:
		{ defaultNodeColor: '#ffffff'
		}
	},
	function(s) {
		CustomShapes.init(s);
		s.refresh();
	}
);
