var images_url;
var loaded = 0;

images_url =
	[ "images/node/green.png"
	];

function init_graph() {
	sigma.parsers.json(
		'static/main_atlas.json',
		{ renderer:
			{ container: document.getElementById('sigma-container')
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
}

for (var i = images_url.length; i--; ) {
	sigma.canvas.nodes.image.cache(
		images_url[i],
		function() {
			if (++loaded === images_url.length) {
				init_graph();
			}
		});
}
