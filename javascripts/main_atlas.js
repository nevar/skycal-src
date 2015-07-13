var nodesData =
	[
	// Для Крио
		{ data:
			{ id: 'n1'
			}
		, position: {x: 1, y: 1}
		, classes: 'class image krio open'
		}
	,
		{ data:
			{ id: 'n2'
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 1, y: 50}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3'
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 43.4, y: -25}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n4'
			, prestige: 16
			, vit: 16
			, dex: 6
			, need: {green: 155}
			}
		, position: {x: -43.4, y: -25}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n5'
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: -96, y: -60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n6'
			, prestige: 6
			, power: 6
			, dex: 4
			, need: {red: 95}
			}
		, position: {x: -60, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n7'
			, prestige: 7
			, spirit: 7
			, need: {blue: 95}
			}
		, position: {x: 0, y: -110}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n8'
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 60, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n9'
			, prestige: 6
			, power: 6
			, dex: 4
			, need: {red: 95}
			}
		, position: {x: -134, y: 0}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n10'
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: -96, y: 60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n11'
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: -60, y: 110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n12'
			, prestige: 16
			, vit: 16
			, dex: 6
			, need: {green: 155}
			}
		, position: {x: 0, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n13'
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 60, y: 110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n14'
			, prestige: 7
			, str: 7
			, need: {blue: 95}
			}
		, position: {x: 96, y: -60}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n15'
			, prestige: 16
			, vit: 16
			, dex: 6
			, need: {green: 125}
			}
		, position: {x: 134, y: 0}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n16'
			, prestige: 10
			, luck: 10
			, need: {blue: 125}
			}
		, position: {x: 96, y: 60}
		, classes: 'stat image luck'
		}
	// Для Паладина
	,
		{ data:
			{ id: 'n17'
			, need:
				{ blue: 1
				, red: 1
				, green: 1
				}
			}
		, position: {x: -229, y: 330}
		, classes: 'class image paladin open'
		}
	,
		{ data:
			{ id: 'n18'
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: -229, y: 380}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n19'
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: -134, y: 380}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n20'
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: -96, y: 330}
		, classes: 'stat image vit'
		}
	// Для ХСа
	];
var edgesData =
	[ {data: {source: 'n1', target: 'n2'}}
	, {data: {source: 'n2', target: 'n3'}}
	, {data: {source: 'n3', target: 'n4'}}
	, {data: {source: 'n4', target: 'n5'}}
	, {data: {source: 'n5', target: 'n6'}}
	, {data: {source: 'n6', target: 'n7'}}
	, {data: {source: 'n7', target: 'n8'}}
	, {data: {source: 'n5', target: 'n9'}}
	, {data: {source: 'n9', target: 'n10'}}
	, {data: {source: 'n10', target: 'n11'}}
	, {data: {source: 'n11', target: 'n12'}}
	, {data: {source: 'n12', target: 'n13'}}
	, {data: {source: 'n3', target: 'n14'}}
	, {data: {source: 'n14', target: 'n15'}}
	, {data: {source: 'n15', target: 'n16'}}
	, {data: {source: 'n17', target: 'n18'}}
	, {data: {source: 'n18', target: 'n19'}}
	, {data: {source: 'n19', target: 'n20'}}

	, {data: {source: 'n30', target: 'n40'}}
	];
