var godNodesData =
	[
		{ data:
			{ id: 'n3000'
			, open: true
			, need: {}
			}
		, position: {x: 0, y: 0}
		, classes: 'open image god'
		}
	,
		{ data:
			{ id: 'n3001'
			, open: false
			, need: {god: 10}
			, title: 'Стойкость Бога'
			, description:
				'Увеличивает показатель здоровья бога дополнительно на одну треть.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: 0, y: -300}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3002'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 100
			, need: {green: 810}
			}
		, position: {x: 0,  y: -240}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3003'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 52, y: -330}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n3004'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -52, y: -330}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3005'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -95, y: -360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3006'
			, open: false
			, prestige: 75
			, spirit: 75
			, need: {blue: 810}
			}
		, position: {x: -95, y: -240}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3007'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 95, y: -240}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3008'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 95, y: -360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3009'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 0, y: -410}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3010'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 0, y: -190}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3011'
			, open: false
			, prestige: 38
			, spirit: 38
			, need: {blue: 490}
			}
		, position: {x: 0, y: -457}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3012'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 0, y: -143}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3013'
			, open: false
			, prestige: 38
			, spirit: 38
			, need: {blue: 490}
			}
		, position: {x: -133, y: -384}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3014'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -133, y: -216}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3015'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 133, y: -216}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3016'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 133, y: -384}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3017'
			, open: false
			, need: {god: 10}
			, title: 'Ярость Бога'
			, description:
				'Увеличивает на одну пятую урон бога по всем, кроме '+
				'бессмертных и других богов Элиона.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: 0, y: -750}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3018'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: -95, y: -810}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3019'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -95, y: -690}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3020'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 95, y: -690}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3021'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 95, y: -810}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3022'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -61, y: -860}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3023'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 61, y: -860}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3024'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -61, y: -640}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3025'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 61, y: -640}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3026'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 0, y: -860}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3027'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 0, y: -640}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3028'
			, open: false
			, prestige: 38
			, spirit: 38
			, need: {blue: 490}
			}
		, position: {x: -133, y: -834}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3029'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -133, y: -666}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3030'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 133, y: -666}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3031'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 133, y: -834}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3032'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -135, y: -750}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3033'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: 135, y: -750}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3034'
			, open: false
			, need: {god: 10}
			, title: 'Предусмотрительность Бога'
			, description:
				'Стоямость Божественного Исцеления в вере уменьшается в 2 раза.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: -400, y: -850}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3035'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -400,  y: -790}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3036'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -348, y: -880}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3037'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -452, y: -880}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3038'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -495, y: -910}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3039'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -495, y: -790}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3040'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -305, y: -790}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3041'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -305, y: -910}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3042'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: -461, y: -960}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3043'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -339, y: -960}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3044'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: -461, y: -740}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3045'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -339, y: -740}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3046'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -400, y: -960}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3047'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -400, y: -740}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3048'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -535, y: -850}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3049'
			, open: false
			, prestige: 38
			, str: 38
			, need: {blue: 490}
			}
		, position: {x: -265, y: -850}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n3050'
			, open: false
			, need: {god: 10}
			, title: 'Решимость Бога'
			, description:
				'Продолжительность невосприимчивости к контролям от Силы Воли '+
				'увеличивается на 4 секунды.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: 400, y: -850}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3051'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 400,  y: -790}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3052'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 452, y: -880}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3053'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 348, y: -880}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3054'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 305, y: -910}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3055'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 305, y: -790}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3056'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 810}
			}
		, position: {x: 495, y: -790}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3057'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 495, y: -910}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3058'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 400, y: -960}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3059'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 400, y: -740}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3060'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: 400, y: -1007}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3061'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 400, y: -693}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3062'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 267, y: -934}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3063'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 267, y: -766}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3064'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 533, y: -766}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n3065'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: 533, y: -934}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3066'
			, open: false
			, need: {god: 10}
			, title: 'Истина Бога'
			, description:
				'Стоймость в вере перехода в божественную форму снижается на 20.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: 0, y: -1200}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3067'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 0,  y: -1140}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3068'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -52, y: -1230}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3069'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: -95, y: -1260}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3070'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -95, y: -1140}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3071'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 95, y: -1140}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3072'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 95, y: -1260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3073'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -61, y: -1310}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3074'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 61, y: -1310}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3075'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -61, y: -1090}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3076'
			, open: false
			, prestige:56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 61, y: -1090}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n3077'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: 0, y: -1310}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3078'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 0, y: -1357}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3079'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 0, y: -1043}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3080'
			, open: false
			, need: {book: 1}
			, title: 'Бог знаний'
			, description:
				'Этот искусный бог способен создать то, что другим не под силу.'+
				'Ему интересно сотворить могущественное оружие, красота '+
				'которого устуит лишь его смертоносности. Он любит особым '+
				'образом подготовить магический заряд, чтобы использовать его '+
				'в удобный момен без долгой подготовки. Бог знаний уверен, что '+
				'любое ремесло - это искусство, и оттачивать своё мастерство '+
				'в нём можно бесконечно.'+
				'</p><p>'+
				'Эта вершина открывает путь к атласу с техниками, позволяющими '+
				'создавать предметы экипировки, свитки с мощными благословениями '+
				'и проклятиями.'
			, nodeImage: 'knowledge'
			}
		, position: {x: 0, y: -1550}
		, classes: 'skill image knowledge'
		}
	,
		{ data:
			{ id: 'n3081'
			, open: false
			, need: {god: 10}
			, title: 'Воля Бога'
			, description:
				'Время перезарядки способности смены класса сокращается на 10 '+
				'секунд.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: 460, y: -300}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3082'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 460,  y: -240}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3083'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 512, y: -330}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3084'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 408, y: -330}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n3085'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 365, y: -360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3086'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 365, y: -240}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3087'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 555, y: -240}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3088'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 555, y: -360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3089'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 460, y: -410}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3090'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 460, y: -190}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3091'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 460, y: -457}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3092'
			, open: false
			, prestige: 38
			, spirit: 38
			, need: {blue: 490}
			}
		, position: {x: 460, y: -143}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3093'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 327, y: -384}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3094'
			, open: false
			, prestige: 38
			, valor: 38
			, need: {blue: 490}
			}
		, position: {x: 327, y: -216}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3095'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 593, y: -216}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3096'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: 593, y: -384}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3097'
			, open: false
			, need: {god: 10}
			, title: 'Непреклонность Бога'
			, description:
				'На первом ранге способности в три раза уменьшается длительность '+
				'эффектов контроля, если вы находитесь в божественной форме, '+
				'а наложивший противник нет. На втором ранге при тех же '+
				'обстоятельствах вы получаете невосприимчивость к эффектам '+
				'контроля.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: 920, y: -300}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3098'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 920,  y: -240}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3099'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 972, y: -330}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3100'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 868, y: -330}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3101'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 825, y: -360}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3102'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 825, y: -240}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3103'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: 1015, y: -240}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3104'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1015, y: -360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3105'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 859, y: -410}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3106'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 981, y: -410}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n3107'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 859, y: -190}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3108'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 981, y: -190}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3109'
			, open: false
			, prestige: 100
			, power: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 920, y: -410}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3110'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 920, y: -190}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3111'
			, open: false
			, prestige: 75
			, valor: 75
			, need: {blue: 810}
			}
		, position: {x: 785, y: -300}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3112'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1055, y: -300}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3113'
			, open: false
			, need: {god: 10}
			, title: 'Пыл Бога'
			, description:
				'Время перезарядки Силы Воли уменьшается на 120 секунд.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: 1380, y: -300}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3114'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1380,  y: -240}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3115'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1432, y: -330}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3116'
			, open: false
			, prestige: 38
			, str: 38
			, need: {blue: 490}
			}
		, position: {x: 1328, y: -330}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n3117'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 1285, y: -360}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3118'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1285, y: -240}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3119'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: 1475, y: -240}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3120'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 1475, y: -360}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3121'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1380, y: -410}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3122'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 1380, y: -190}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3123'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1380, y: -457}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3124'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1380, y: -143}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3125'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 1247, y: -384}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3126'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 1247, y: -216}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3127'
			, open: false
			, prestige: 75
			, spirit: 75
			, need: {blue: 810}
			}
		, position: {x: 1513, y: -216}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3128'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 1513, y: -384}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3129'
			, open: false
			, need: {god: 10}
			, title: 'Ярость Бога'
			, description:
				'Увеличивает на одну пятую урон бога по всем, кроме '+
				'бессмертных и других богов Элиона.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: 1840, y: -300}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3130'
			, open: false
			, prestige: 38
			, valor: 38
			, need: {blue: 490}
			}
		, position: {x: 1840,  y: -240}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3131'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1892, y: -330}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3132'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 1788, y: -330}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3133'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1745, y: -360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3134'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1745, y: -240}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3135'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1935, y: -240}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3136'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: 1935, y: -360}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3137'
			, open: false
			, prestige: 38
			, str: 38
			, need: {blue: 490}
			}
		, position: {x: 1840, y: -410}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n3138'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1840, y: -190}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3139'
			, open: false
			, prestige: 38
			, str: 38
			, need: {blue: 490}
			}
		, position: {x: 1840, y: -457}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n3140'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 1840, y: -143}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3141'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 1707, y: -384}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3142'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1707, y: -216}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3143'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1973, y: -216}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3144'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 1973, y: -384}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3145'
			, open: false
			, need: {book: 1}
			, title: 'Бог войны'
			, description:
				'Этот бог не мыслит своей жизни без сражений. Он жаждет '+
				'постоянно совершенствовать владение оружием, тактику и стратегию.' +
				'Для него важно соревноваться с другими богами, искать всё новые '+
				'и новые вызовы. Если где-то началась битва, бог войны считает '+
				'это отличной возможностью развития и лучшим видом развлечения, '+
				'ведь всё остальное быстро надоедает.'+
				'</p><p>'+
				'Эта вершина открывает путь к атласу с божественными техниками '+
				'боя, предназначенными для масштабных битв с участием других '+
				'богов.'
			, nodeImage: 'warrior'
			}
		, position: {x: 2140, y: -300}
		, classes: 'skill image warrior'
		}
	,
		{ data:
			{ id: 'n3146'
			, open: false
			, need: {god: 10}
			, title: 'Воля Бога'
			, description:
				'Время перезарядки способности смены класса сокращается на 10 '+
				'секунд.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: -460, y: -300}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3147'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -555, y: -360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3149'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -555, y: -240}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3150'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -365, y: -240}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3151'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -365, y: -360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3152'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -521, y: -410}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3153'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -399, y: -410}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3154'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -521, y: -190}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3155'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -399, y: -190}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3156'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: -460, y: -410}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3157'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -460, y: -190}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3158'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -593, y: -384}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3159'
			, open: false
			, prestige: 38
			, luck: 38
			, need: {blue: 490}
			}
		, position: {x: -593, y: -216}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3160'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -327, y: -216}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3161'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -327, y: -384}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3162'
			, open: false
			, prestige: 38
			, spirit: 38
			, need: {blue: 490}
			}
		, position: {x: -595, y: -300}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3163'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: -325, y: -300}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3164'
			, open: false
			, need: {god: 10}
			, title: 'Непреклонность Бога'
			, description:
				'На первом ранге способности в три раза уменьшается длительность '+
				'эффектов контроля, если вы находитесь в божественной форме, '+
				'а наложивший противник нет. На втором ранге при тех же '+
				'обстоятельствах вы получаете невосприимчивость к эффектам '+
				'контроля.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: -920, y: -300}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3165'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -920,  y: -240}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3166'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -868, y: -330}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3167'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -972, y: -330}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3168'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -981, y: -410}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3169'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -859, y: -410}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3170'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -981, y: -190}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3171'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -859, y: -190}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3172'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -920, y: -457}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3173'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: -920, y: -143}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3174'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1053, y: -384}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3175'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: -1053, y: -216}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3176'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -787, y: -216}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3177'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -787, y: -384}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3178'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -1055, y: -300}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3179'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: -785, y: -300}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3180'
			, open: false
			, need: {god: 10}
			, title: 'Рвение Бога'
			, description:
				'Стоймость Силы Воли в вере уменьшается в 2 раза.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: -1380, y: -300}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3181'
			, open: false
			, prestige: 75
			, luck: 75
			, need: {blue: 810}
			}
		, position: {x: -1380,  y: -240}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3182'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -1328, y: -330}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3183'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1432, y: -330}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3184'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -1475, y: -360}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3185'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -1475, y: -240}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3186'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -1285, y: -240}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3187'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -1285, y: -360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3188'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1441, y: -410}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3189'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: -1319, y: -410}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3190'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: -1441, y: -190}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3191'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1319, y: -190}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3192'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: -1380, y: -410}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n3193'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -1380, y: -457}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3194'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1380, y: -143}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3195'
			, open: false
			, need: {god: 10}
			, title: 'Ярость Бога'
			, description:
				'Увеличивает на одну пятую урон бога по всем, кроме '+
				'бессмертных и других богов Элиона.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: -1840, y: -300}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3196'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1935, y: -360}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3197'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -1935, y: -240}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3198'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1745, y: -240}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3199'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1745, y: -360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3200'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -1901, y: -410}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3201'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1779, y: -410}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3202'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: -1901, y: -190}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3203'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1779, y: -190}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3204'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -1840, y: -410}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3205'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1840, y: -190}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3206'
			, open: false
			, prestige: 75
			, valor: 75
			, need: {blue: 810}
			}
		, position: {x: -1973, y: -384}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3207'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1973, y: -216}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3208'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -1707, y: -216}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3209'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -1707, y: -384}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3210'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: -1975, y: -300}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3211'
			, open: false
			, prestige: 75
			, spirit: 75
			, need: {blue: 810}
			}
		, position: {x: -1705, y: -300}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3212'
			, open: false
			, need: {book: 1}
			, title: 'Бог охоты'
			, description:
				'Он сосредоточен на одной цели и точно знает, как поразить '+
				'любую, даже самую жуткую тварь вторжения. Настоящий охотник, '+
				'целекстремлённый и отважный. Но не только чужеземные твари '+
				'привлекают бога охоты. Не чуждо ему и соревнование, битвы с '+
				'другими богами. То самое дело, которое застваляет проявть '+
				'всю смекалку и все умения.'+
				'</p><p>'+
				'Эта вершина открывает путь к атласу с особыми техниками для '+
				'ликвидации отдельных опасных противников.'
			, nodeImage: 'hunter'
			}
		, position: {x: -2140, y: -300}
		, classes: 'skill image hunter'
		}
	,
		{ data:
			{ id: 'n3213'
			, open: false
			, need: {god: 10}
			, title: 'Знания Бога'
			, description:
				'Увеличивае эффективность Божественного Исцеления в 2 раза.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: 460, y: 150}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3214'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 460,  y: 210}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3215'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 512, y: 120}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3216'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 408, y: 120}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3217'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 365, y: 90}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3218'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 365, y: 210}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3219'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 555, y: 210}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3220'
			, open: false
			, prestige: 75
			, spirit: 75
			, need: {blue: 810}
			}
		, position: {x: 555, y: 90}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3221'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 460, y: 40}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3222'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: 460, y: 260}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3223'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 460, y: -7}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3224'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 460, y: 307}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3225'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 327, y: 66}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3226'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 327, y: 234}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3227'
			, open: false
			, prestige: 75
			, spirit: 75
			, need: {blue: 810}
			}
		, position: {x: 593, y: 234}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3228'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 593, y: 66}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3229'
			, open: false
			, need: {god: 10}
			, title: 'Могущество Бога'
			, description:
				'Увеличивает урон бога дополнительно на 20%'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: 920, y: 150}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3230'
			, open: false
			, prestige: 75
			, luck: 75
			, need: {blue: 810}
			}
		, position: {x: 920,  y: 210}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3231'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 972, y: 120}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3232'
			, open: false
			, prestige: 75
			, luck: 75
			, need: {blue: 810}
			}
		, position: {x: 868, y: 120}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3233'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 825, y: 90}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3234'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 825, y: 210}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3235'
			, open: false
			, prestige: 38
			, luck: 38
			, need: {blue: 490}
			}
		, position: {x: 1015, y: 210}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3236'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 1015, y: 90}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3237'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 859, y: 40}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3238'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 981, y: 40}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3239'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 859, y: 260}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3240'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 981, y: 260}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3241'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 920, y: 40}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3242'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 920, y: 260}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n3243'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 785, y: 150}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3244'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1055, y: 150}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3245'
			, open: false
			, need: {god: 10}
			, title: 'Ярость Бога'
			, description:
				'Увеличивает на одну пятую урон бога по всем, кроме '+
				'бессмертных и других богов Элиона.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: 1380, y: 150}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3246'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1380,  y: 210}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3247'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 20
			, need: {red: 810}
			}
		, position: {x: 1432, y: 120}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3248'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1328, y: 120}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3249'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 1285, y: 90}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3250'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1285, y: 210}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3251'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 1475, y: 210}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n3252'
			, open: false
			, prestige: 38
			, str: 38
			, need: {blue: 490}
			}
		, position: {x: 1475, y: 90}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n3253'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 1380, y: 40}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3254'
			, open: false
			, prestige: 75
			, valor: 75
			, need: {blue: 810}
			}
		, position: {x: 1380, y: 260}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3255'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1380, y: -7}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3256'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1380, y: 307}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3257'
			, open: false
			, prestige: 38
			, spirit: 38
			, need: {blue: 490}
			}
		, position: {x: 1247, y: 66}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3258'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1247, y: 234}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3259'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1513, y: 234}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3260'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 1513, y: 66}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3261'
			, open: false
			, need: {book: 1}
			, title: 'Бог странствий'
			, description:
				'Пока в мире есть таинственные уголки, пока в нём есть опасности '+
				'и место для подвига - этот мир будет интересен богу странствий. '+
				'Он часто путешествует в одиночку, не нуждаясь в компании '+
				'соратников или последователей. Далёкие острова, затерянные в '+
				'глухих лесах руины древних храмов, таинственное наследие Элая '+
				'- всё это привлекает бога странствий.'+
				'</p><p>'+
				'Эта вершина открывает путь к атласу, содержащему техники, '+
				'наиболее подходящие для странствий в одиночку.'
			, nodeImage: 'wanderer'
			}
		, position: {x: 1680, y: 150}
		, classes: 'skill image wanderer'
		}
	,
		{ data:
			{ id: 'n3262'
			, open: false
			, need: {god: 10}
			, title: 'Право Бога'
			, description:
				'Время перезарядки божественных особых способностей сокращается '+
				'на 90 секунд.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: -460, y: 150}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3263'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -460,  y: 210}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3264'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -408, y: 120}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3265'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: -512, y: 120}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3266'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: -521, y: 40}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3267'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -399, y: 40}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3268'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -521, y: 260}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3269'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -399, y: 260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3270'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -460, y: -7}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3271'
			, open: false
			, prestige: 38
			, luck: 38
			, need: {blue: 490}
			}
		, position: {x: -460, y: 307}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3272'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -593, y: 66}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3273'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -593, y: 234}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3274'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -327, y: 234}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3275'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -327, y: 66}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3276'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -595, y: 150}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3277'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -325, y: 150}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3278'
			, open: false
			, need: {god: 10}
			, title: 'Мудрость Бога'
			, description:
				'Время перезарядки Божественного Исциления уменьшается на 120 секунд.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: -920, y: 150}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3279'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: -920,  y: 210}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3280'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -868, y: 120}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3281'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: -972, y: 120}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3282'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 20
			, need: {red: 810}
			}
		, position: {x: -1015, y: 90}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3283'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -1015, y: 210}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3284'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -825, y: 210}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3285'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -825, y: 90}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3286'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -920, y: 40}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3287'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -920, y: 260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3288'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -920, y: -7}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3289'
			, open: false
			, prestige: 75
			, luck: 75
			, need: {blue: 810}
			}
		, position: {x: -920, y: 307}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3290'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1053, y: 66}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3291'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1053, y: 234}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3292'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: -787, y: 234}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3293'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -787, y: 66}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3294'
			, open: false
			, need: {god: 10}
			, title: 'Ярость Бога'
			, description:
				'Увеличивает на одну пятую урон бога по всем, кроме '+
				'бессмертных и других богов Элиона.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: -1380, y: 150}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3295'
			, open: false
			, prestige: 38
			, spirit: 38
			, need: {blue: 490}
			}
		, position: {x: -1380,  y: 210}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3296'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -1328, y: 120}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3297'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1432, y: 120}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3298'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {power: 490}
			}
		, position: {x: -1475, y: 90}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3299'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1475, y: 210}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3300'
			, open: false
			, prestige: 38
			, valor: 38
			, need: {blue: 490}
			}
		, position: {x: -1285, y: 210}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3301'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1285, y: 90}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3302'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1441, y: 40}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3303'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1319, y: 40}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3304'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1441, y: 260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3305'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: -1319, y: 260}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3306'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -1380, y: 40}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3307'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: -1380, y: 260}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3308'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -1515, y: 150}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3309'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -1245, y: 150}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3310'
			, open: false
			, need: {book: 1}
			, title: 'Бог обороны'
			, description:
				'Оборона Элиона, защита мирных жителей - вот главное для этого '+
				'бога. Он не упустит возможности уничтожить как можно больше '+
				'захватчиков. Если где-то высадились враждебные войска, вы '+
				'вы наверняка встретите в самой гуще сражения бога обороны. '+
				'Его цель - уничтожать как можно больше захватчиков, дать людям '+
				'надежду на мир.'+
				'</p><p>'+
				'Эта вершина открывает путь к атласу, содержащему техники '+
				'для борьбы с большим числом противников, нападающих как на бога, '+
				'так и на Элион.'
			, nodeImage: 'defend'
			}
		, position: {x: -1680, y: 150}
		, classes: 'skill image defend'
		}
	,
		{ data:
			{ id: 'n3311'
			, open: false
			, need: {god: 10}
			, title: 'Стойкость Бога'
			, description:
				'Увеличивает показатель здоровья бога дополнительно на одну треть.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: 0, y: 250}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3312'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 0,  y: 310}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3313'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 52, y: 220}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3314'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -52, y: 220}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3315'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -95, y: 190}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3316'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -95, y: 310}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3317'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: 95, y: 310}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3318'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 95, y: 190}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3319'
			, open: false
			, prestige: 38
			, str: 38
			, need: {blue: 490}
			}
		, position: {x: -61, y: 140}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n3320'
			, open: false
			, prestige: 38
			, spirit: 38
			, need: {blue: 490}
			}
		, position: {x: 61, y: 140}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3321'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -61, y: 360}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3322'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 61, y: 360}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3323'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 0, y: 140}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3324'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 0, y: 360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3325'
			, open: false
			, prestige: 38
			, luck: 38
			, need: {blue: 490}
			}
		, position: {x: -135, y: 250}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3326'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 135, y: 250}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3327'
			, open: false
			, need: {god: 10}
			, title: 'Право Бога'
			, description:
				'Время перезарядки божественных особых способностей сокращается '+
				'на 90 секунд.'
			, nodeImage: 'sphere'
			, prestige: 40
			}
		, position: {x: 0, y: 700}
		, classes: 'skill image sphere'
		}
	,
		{ data:
			{ id: 'n3328'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -95, y: 640}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3329'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -95, y: 760}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3330'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 95, y: 760}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3331'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 95, y: 640}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n3332'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -61, y: 590}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3333'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 61, y: 590}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3334'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -61, y: 810}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3335'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 61, y: 810}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3336'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 0, y: 590}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3337'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 0, y: 810}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3338'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -133, y: 616}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3339'
			, open: false
			, prestige: 38
			, valor: 38
			, need: {blue: 490}
			}
		, position: {x: -133, y: 784}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n3340'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 133, y: 784}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3341'
			, open: false
			, prestige: 38
			, luck: 38
			, need: {blue: 490}
			}
		, position: {x: 133, y: 616}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n3342'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -135, y: 700}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3343'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 135, y: 700}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n3344'
			, open: false
			, need: {book: 1}
			, title: 'Бог власти'
			, description:
				'Величие, почёт и уважение среди смертных - вот что важно для '+
				'этого бога. Взамен он дарует своим последователям особые '+
				'возможности. Воодущевленные, они способны на большее, нежели '+
				'обычные последователи других богов.'+
				'</p><p>'+
				'Эта вершина открывает путь к атласу, где находятся '+
				'разнообразные техники для увеличения эффективности ваших '+
				'последователей.'
			, nodeImage: 'rule'
			}
		, position: {x: 0, y: 1000}
		, classes: 'skill image rule'
		}
	];

var godEdgesData =
	[ {classes: 'between', data: {open: false, source: 'n3000', target: 'n3012'}}
	, {classes: '', data: {open: false, source: 'n3012', target: 'n3010'}}
	, {classes: '', data: {open: false, source: 'n3010', target: 'n3007'}}
	, {classes: '', data: {open: false, source: 'n3007', target: 'n3015'}}
	, {classes: '', data: {open: false, source: 'n3007', target: 'n3002'}}
	, {classes: '', data: {open: false, source: 'n3002', target: 'n3001'}}
	, {classes: '', data: {open: false, source: 'n3001', target: 'n3003'}}
	, {classes: '', data: {open: false, source: 'n3003', target: 'n3008'}}
	, {classes: '', data: {open: false, source: 'n3008', target: 'n3016'}}
	, {classes: '', data: {open: false, source: 'n3001', target: 'n3004'}}
	, {classes: '', data: {open: false, source: 'n3004', target: 'n3005'}}
	, {classes: '', data: {open: false, source: 'n3005', target: 'n3006'}}
	, {classes: '', data: {open: false, source: 'n3006', target: 'n3014'}}
	, {classes: '', data: {open: false, source: 'n3005', target: 'n3013'}}
	, {classes: '', data: {open: false, source: 'n3004', target: 'n3009'}}
	, {classes: '', data: {open: false, source: 'n3009', target: 'n3011'}}
	, {classes: 'between', data: {open: false, source: 'n3011', target: 'n3027'}}
	, {classes: '', data: {open: false, source: 'n3027', target: 'n3025'}}
	, {classes: '', data: {open: false, source: 'n3025', target: 'n3030'}}
	, {classes: '', data: {open: false, source: 'n3025', target: 'n3020'}}
	, {classes: '', data: {open: false, source: 'n3020', target: 'n3017'}}
	, {classes: '', data: {open: false, source: 'n3017', target: 'n3019'}}
	, {classes: '', data: {open: false, source: 'n3019', target: 'n3032'}}
	, {classes: '', data: {open: false, source: 'n3032', target: 'n3029'}}
	, {classes: '', data: {open: false, source: 'n3029', target: 'n3024'}}
	, {classes: '', data: {open: false, source: 'n3017', target: 'n3021'}}
	, {classes: '', data: {open: false, source: 'n3021', target: 'n3023'}}
	, {classes: '', data: {open: false, source: 'n3023', target: 'n3031'}}
	, {classes: '', data: {open: false, source: 'n3031', target: 'n3033'}}
	, {classes: '', data: {open: false, source: 'n3017', target: 'n3018'}}
	, {classes: '', data: {open: false, source: 'n3018', target: 'n3028'}}
	, {classes: '', data: {open: false, source: 'n3018', target: 'n3022'}}
	, {classes: '', data: {open: false, source: 'n3022', target: 'n3026'}}
	, {classes: 'between', data: {open: false, source: 'n3028', target: 'n3049'}}
	, {classes: '', data: {open: false, source: 'n3049', target: 'n3040'}}
	, {classes: '', data: {open: false, source: 'n3040', target: 'n3035'}}
	, {classes: '', data: {open: false, source: 'n3035', target: 'n3039'}}
	, {classes: '', data: {open: false, source: 'n3039', target: 'n3044'}}
	, {classes: '', data: {open: false, source: 'n3044', target: 'n3047'}}
	, {classes: '', data: {open: false, source: 'n3047', target: 'n3045'}}
	, {classes: '', data: {open: false, source: 'n3039', target: 'n3048'}}
	, {classes: '', data: {open: false, source: 'n3048', target: 'n3038'}}
	, {classes: '', data: {open: false, source: 'n3038', target: 'n3042'}}
	, {classes: '', data: {open: false, source: 'n3035', target: 'n3034'}}
	, {classes: '', data: {open: false, source: 'n3034', target: 'n3036'}}
	, {classes: '', data: {open: false, source: 'n3036', target: 'n3046'}}
	, {classes: '', data: {open: false, source: 'n3046', target: 'n3037'}}
	, {classes: '', data: {open: false, source: 'n3046', target: 'n3043'}}
	, {classes: '', data: {open: false, source: 'n3043', target: 'n3041'}}
	, {classes: 'between', data: {open: false, source: 'n3033', target: 'n3063'}}
	, {classes: '', data: {open: false, source: 'n3055', target: 'n3063'}}
	, {classes: '', data: {open: false, source: 'n3055', target: 'n3059'}}
	, {classes: '', data: {open: false, source: 'n3059', target: 'n3061'}}
	, {classes: '', data: {open: false, source: 'n3055', target: 'n3051'}}
	, {classes: '', data: {open: false, source: 'n3051', target: 'n3050'}}
	, {classes: '', data: {open: false, source: 'n3050', target: 'n3052'}}
	, {classes: '', data: {open: false, source: 'n3052', target: 'n3056'}}
	, {classes: '', data: {open: false, source: 'n3056', target: 'n3064'}}
	, {classes: '', data: {open: false, source: 'n3052', target: 'n3057'}}
	, {classes: '', data: {open: false, source: 'n3057', target: 'n3065'}}
	, {classes: '', data: {open: false, source: 'n3057', target: 'n3058'}}
	, {classes: '', data: {open: false, source: 'n3058', target: 'n3054'}}
	, {classes: '', data: {open: false, source: 'n3054', target: 'n3053'}}
	, {classes: '', data: {open: false, source: 'n3054', target: 'n3062'}}
	, {classes: '', data: {open: false, source: 'n3058', target: 'n3060'}}
	, {classes: 'between', data: {open: false, source: 'n3043', target: 'n3075'}}
	, {classes: 'between', data: {open: false, source: 'n3062', target: 'n3076'}}
	, {classes: '', data: {open: false, source: 'n3076', target: 'n3079'}}
	, {classes: '', data: {open: false, source: 'n3068', target: 'n3067'}}
	, {classes: '', data: {open: false, source: 'n3068', target: 'n3066'}}
	, {classes: '', data: {open: false, source: 'n3075', target: 'n3070'}}
	, {classes: '', data: {open: false, source: 'n3075', target: 'n3068'}}
	, {classes: '', data: {open: false, source: 'n3067', target: 'n3071'}}
	, {classes: '', data: {open: false, source: 'n3071', target: 'n3076'}}
	, {classes: '', data: {open: false, source: 'n3077', target: 'n3066'}}
	, {classes: '', data: {open: false, source: 'n3072', target: 'n3077'}}
	, {classes: '', data: {open: false, source: 'n3077', target: 'n3069'}}
	, {classes: '', data: {open: false, source: 'n3072', target: 'n3074'}}
	, {classes: '', data: {open: false, source: 'n3074', target: 'n3078'}}
	, {classes: '', data: {open: false, source: 'n3078', target: 'n3073'}}
	, {classes: 'between', data: {open: false, source: 'n3078', target: 'n3080'}}
	, {classes: 'between', data: {open: false, source: 'n3015', target: 'n3094'}}
	, {classes: '', data: {open: false, source: 'n3094', target: 'n3086'}}
	, {classes: '', data: {open: false, source: 'n3081', target: 'n3083'}}
	, {classes: '', data: {open: false, source: 'n3083', target: 'n3084'}}
	, {classes: '', data: {open: false, source: 'n3084', target: 'n3086'}}
	, {classes: '', data: {open: false, source: 'n3083', target: 'n3089'}}
	, {classes: '', data: {open: false, source: 'n3089', target: 'n3085'}}
	, {classes: '', data: {open: false, source: 'n3085', target: 'n3093'}}
	, {classes: '', data: {open: false, source: 'n3089', target: 'n3091'}}
	, {classes: '', data: {open: false, source: 'n3081', target: 'n3082'}}
	, {classes: '', data: {open: false, source: 'n3082', target: 'n3090'}}
	, {classes: '', data: {open: false, source: 'n3090', target: 'n3092'}}
	, {classes: '', data: {open: false, source: 'n3090', target: 'n3087'}}
	, {classes: '', data: {open: false, source: 'n3087', target: 'n3088'}}
	, {classes: '', data: {open: false, source: 'n3088', target: 'n3096'}}
	, {classes: '', data: {open: false, source: 'n3087', target: 'n3095'}}
	, {classes: 'between', data: {open: false, source: 'n3095', target: 'n3111'}}
	, {classes: '', data: {open: false, source: 'n3111', target: 'n3101'}}
	, {classes: '', data: {open: false, source: 'n3101', target: 'n3105'}}
	, {classes: '', data: {open: false, source: 'n3105', target: 'n3109'}}
	, {classes: '', data: {open: false, source: 'n3109', target: 'n3106'}}
	, {classes: '', data: {open: false, source: 'n3106', target: 'n3104'}}
	, {classes: '', data: {open: false, source: 'n3104', target: 'n3112'}}
	, {classes: '', data: {open: false, source: 'n3112', target: 'n3103'}}
	, {classes: '', data: {open: false, source: 'n3103', target: 'n3108'}}
	, {classes: '', data: {open: false, source: 'n3108', target: 'n3110'}}
	, {classes: '', data: {open: false, source: 'n3110', target: 'n3107'}}
	, {classes: '', data: {open: false, source: 'n3107', target: 'n3102'}}
	, {classes: '', data: {open: false, source: 'n3103', target: 'n3098'}}
	, {classes: '', data: {open: false, source: 'n3098', target: 'n3099'}}
	, {classes: '', data: {open: false, source: 'n3099', target: 'n3100'}}
	, {classes: '', data: {open: false, source: 'n3100', target: 'n3097'}}
	, {classes: 'between', data: {open: false, source: 'n3112', target: 'n3125'}}
	, {classes: '', data: {open: false, source: 'n3125', target: 'n3117'}}
	, {classes: '', data: {open: false, source: 'n3117', target: 'n3116'}}
	, {classes: '', data: {open: false, source: 'n3116', target: 'n3113'}}
	, {classes: '', data: {open: false, source: 'n3113', target: 'n3115'}}
	, {classes: '', data: {open: false, source: 'n3119', target: 'n3120'}}
	, {classes: '', data: {open: false, source: 'n3120', target: 'n3121'}}
	, {classes: '', data: {open: false, source: 'n3121', target: 'n3123'}}
	, {classes: '', data: {open: false, source: 'n3120', target: 'n3128'}}
	, {classes: '', data: {open: false, source: 'n3119', target: 'n3127'}}
	, {classes: '', data: {open: false, source: 'n3113', target: 'n3114'}}
	, {classes: '', data: {open: false, source: 'n3126', target: 'n3118'}}
	, {classes: '', data: {open: false, source: 'n3118', target: 'n3122'}}
	, {classes: '', data: {open: false, source: 'n3122', target: 'n3114'}}
	, {classes: '', data: {open: false, source: 'n3122', target: 'n3124'}}
	, {classes: '', data: {open: false, source: 'n3120', target: 'n3115'}}
	, {classes: 'between', data: {open: false, source: 'n3127', target: 'n3142'}}
	, {classes: '', data: {open: false, source: 'n3134', target: 'n3142'}}
	, {classes: '', data: {open: false, source: 'n3141', target: 'n3133'}}
	, {classes: '', data: {open: false, source: 'n3133', target: 'n3132'}}
	, {classes: '', data: {open: false, source: 'n3133', target: 'n3134'}}
	, {classes: '', data: {open: false, source: 'n3134', target: 'n3138'}}
	, {classes: '', data: {open: false, source: 'n3138', target: 'n3140'}}
	, {classes: '', data: {open: false, source: 'n3134', target: 'n3130'}}
	, {classes: '', data: {open: false, source: 'n3130', target: 'n3129'}}
	, {classes: '', data: {open: false, source: 'n3129', target: 'n3131'}}
	, {classes: '', data: {open: false, source: 'n3131', target: 'n3137'}}
	, {classes: '', data: {open: false, source: 'n3137', target: 'n3139'}}
	, {classes: '', data: {open: false, source: 'n3131', target: 'n3135'}}
	, {classes: '', data: {open: false, source: 'n3135', target: 'n3143'}}
	, {classes: '', data: {open: false, source: 'n3135', target: 'n3136'}}
	, {classes: '', data: {open: false, source: 'n3136', target: 'n3144'}}
	, {classes: 'between', data: {open: false, source: 'n3143', target: 'n3145'}}
	, {classes: 'between', data: {open: false, source: 'n3013', target: 'n3161'}}
	, {classes: '', data: {open: false, source: 'n3161', target: 'n3151'}}
	, {classes: '', data: {open: false, source: 'n3151', target: 'n3153'}}
	, {classes: '', data: {open: false, source: 'n3153', target: 'n3156'}}
	, {classes: '', data: {open: false, source: 'n3156', target: 'n3146'}}
	, {classes: '', data: {open: false, source: 'n3146', target: 'n3150'}}
	, {classes: '', data: {open: false, source: 'n3150', target: 'n3163'}}
	, {classes: '', data: {open: false, source: 'n3163', target: 'n3161'}}
	, {classes: '', data: {open: false, source: 'n3163', target: 'n3160'}}
	, {classes: '', data: {open: false, source: 'n3160', target: 'n3155'}}
	, {classes: '', data: {open: false, source: 'n3155', target: 'n3157'}}
	, {classes: '', data: {open: false, source: 'n3157', target: 'n3154'}}
	, {classes: '', data: {open: false, source: 'n3146', target: 'n3149'}}
	, {classes: '', data: {open: false, source: 'n3149', target: 'n3162'}}
	, {classes: '', data: {open: false, source: 'n3162', target: 'n3147'}}
	, {classes: '', data: {open: false, source: 'n3147', target: 'n3158'}}
	, {classes: '', data: {open: false, source: 'n3158', target: 'n3152'}}
	, {classes: '', data: {open: false, source: 'n3162', target: 'n3159'}}
	, {classes: 'between', data: {open: false, source: 'n3159', target: 'n3176'}}
	, {classes: '', data: {open: false, source: 'n3176', target: 'n3179'}}
	, {classes: '', data: {open: false, source: 'n3179', target: 'n3177'}}
	, {classes: '', data: {open: false, source: 'n3177', target: 'n3169'}}
	, {classes: '', data: {open: false, source: 'n3177', target: 'n3166'}}
	, {classes: '', data: {open: false, source: 'n3166', target: 'n3164'}}
	, {classes: '', data: {open: false, source: 'n3164', target: 'n3165'}}
	, {classes: '', data: {open: false, source: 'n3165', target: 'n3173'}}
	, {classes: '', data: {open: false, source: 'n3173', target: 'n3171'}}
	, {classes: '', data: {open: false, source: 'n3173', target: 'n3170'}}
	, {classes: '', data: {open: false, source: 'n3170', target: 'n3175'}}
	, {classes: '', data: {open: false, source: 'n3164', target: 'n3167'}}
	, {classes: '', data: {open: false, source: 'n3167', target: 'n3174'}}
	, {classes: '', data: {open: false, source: 'n3174', target: 'n3168'}}
	, {classes: '', data: {open: false, source: 'n3168', target: 'n3172'}}
	, {classes: '', data: {open: false, source: 'n3174', target: 'n3178'}}
	, {classes: 'between', data: {open: false, source: 'n3187', target: 'n3174'}}
	, {classes: '', data: {open: false, source: 'n3187', target: 'n3189'}}
	, {classes: '', data: {open: false, source: 'n3186', target: 'n3187'}}
	, {classes: '', data: {open: false, source: 'n3186', target: 'n3191'}}
	, {classes: '', data: {open: false, source: 'n3191', target: 'n3194'}}
	, {classes: '', data: {open: false, source: 'n3194', target: 'n3190'}}
	, {classes: '', data: {open: false, source: 'n3186', target: 'n3181'}}
	, {classes: '', data: {open: false, source: 'n3181', target: 'n3182'}}
	, {classes: '', data: {open: false, source: 'n3181', target: 'n3180'}}
	, {classes: '', data: {open: false, source: 'n3180', target: 'n3183'}}
	, {classes: '', data: {open: false, source: 'n3183', target: 'n3192'}}
	, {classes: '', data: {open: false, source: 'n3183', target: 'n3184'}}
	, {classes: '', data: {open: false, source: 'n3184', target: 'n3188'}}
	, {classes: '', data: {open: false, source: 'n3188', target: 'n3193'}}
	, {classes: '', data: {open: false, source: 'n3184', target: 'n3185'}}
	, {classes: 'between', data: {open: false, source: 'n3185', target: 'n3208'}}
	, {classes: '', data: {open: false, source: 'n3208', target: 'n3211'}}
	, {classes: '', data: {open: false, source: 'n3211', target: 'n3199'}}
	, {classes: '', data: {open: false, source: 'n3199', target: 'n3209'}}
	, {classes: '', data: {open: false, source: 'n3209', target: 'n3201'}}
	, {classes: '', data: {open: false, source: 'n3201', target: 'n3204'}}
	, {classes: '', data: {open: false, source: 'n3204', target: 'n3200'}}
	, {classes: '', data: {open: false, source: 'n3199', target: 'n3195'}}
	, {classes: '', data: {open: false, source: 'n3195', target: 'n3205'}}
	, {classes: '', data: {open: false, source: 'n3205', target: 'n3203'}}
	, {classes: '', data: {open: false, source: 'n3203', target: 'n3198'}}
	, {classes: '', data: {open: false, source: 'n3195', target: 'n3196'}}
	, {classes: '', data: {open: false, source: 'n3196', target: 'n3206'}}
	, {classes: '', data: {open: false, source: 'n3206', target: 'n3210'}}
	, {classes: '', data: {open: false, source: 'n3210', target: 'n3207'}}
	, {classes: '', data: {open: false, source: 'n3207', target: 'n3202'}}
	, {classes: '', data: {open: false, source: 'n3202', target: 'n3197'}}
	, {classes: 'between', data: {open: false, source: 'n3207', target: 'n3212'}}
	, {classes: 'between', data: {open: false, source: 'n3000', target: 'n3225'}}
	, {classes: '', data: {open: false, source: 'n3225', target: 'n3217'}}
	, {classes: '', data: {open: false, source: 'n3217', target: 'n3218'}}
	, {classes: '', data: {open: false, source: 'n3218', target: 'n3226'}}
	, {classes: '', data: {open: false, source: 'n3218', target: 'n3216'}}
	, {classes: '', data: {open: false, source: 'n3216', target: 'n3213'}}
	, {classes: '', data: {open: false, source: 'n3213', target: 'n3215'}}
	, {classes: '', data: {open: false, source: 'n3222', target: 'n3219'}}
	, {classes: '', data: {open: false, source: 'n3219', target: 'n3220'}}
	, {classes: '', data: {open: false, source: 'n3219', target: 'n3214'}}
	, {classes: '', data: {open: false, source: 'n3222', target: 'n3224'}}
	, {classes: '', data: {open: false, source: 'n3219', target: 'n3227'}}
	, {classes: '', data: {open: false, source: 'n3220', target: 'n3228'}}
	, {classes: '', data: {open: false, source: 'n3220', target: 'n3221'}}
	, {classes: '', data: {open: false, source: 'n3221', target: 'n3223'}}
	, {classes: '', data: {open: false, source: 'n3219', target: 'n3215'}}
	, {classes: 'between', data: {open: false, source: 'n3227', target: 'n3234'}}
	, {classes: '', data: {open: false, source: 'n3234', target: 'n3230'}}
	, {classes: '', data: {open: false, source: 'n3230', target: 'n3235'}}
	, {classes: '', data: {open: false, source: 'n3235', target: 'n3240'}}
	, {classes: '', data: {open: false, source: 'n3240', target: 'n3242'}}
	, {classes: '', data: {open: false, source: 'n3242', target: 'n3239'}}
	, {classes: '', data: {open: false, source: 'n3230', target: 'n3229'}}
	, {classes: '', data: {open: false, source: 'n3229', target: 'n3232'}}
	, {classes: '', data: {open: false, source: 'n3232', target: 'n3241'}}
	, {classes: '', data: {open: false, source: 'n3241', target: 'n3237'}}
	, {classes: '', data: {open: false, source: 'n3237', target: 'n3233'}}
	, {classes: '', data: {open: false, source: 'n3233', target: 'n3243'}}
	, {classes: '', data: {open: false, source: 'n3241', target: 'n3231'}}
	, {classes: '', data: {open: false, source: 'n3241', target: 'n3238'}}
	, {classes: '', data: {open: false, source: 'n3238', target: 'n3236'}}
	, {classes: '', data: {open: false, source: 'n3236', target: 'n3244'}}
	, {classes: 'between', data: {open: false, source: 'n3244', target: 'n3258'}}
	, {classes: '', data: {open: false, source: 'n3253', target: 'n3249'}}
	, {classes: '', data: {open: false, source: 'n3249', target: 'n3250'}}
	, {classes: '', data: {open: false, source: 'n3254', target: 'n3251'}}
	, {classes: '', data: {open: false, source: 'n3251', target: 'n3252'}}
	, {classes: '', data: {open: false, source: 'n3253', target: 'n3255'}}
	, {classes: '', data: {open: false, source: 'n3249', target: 'n3257'}}
	, {classes: '', data: {open: false, source: 'n3250', target: 'n3258'}}
	, {classes: '', data: {open: false, source: 'n3254', target: 'n3256'}}
	, {classes: '', data: {open: false, source: 'n3251', target: 'n3259'}}
	, {classes: '', data: {open: false, source: 'n3252', target: 'n3260'}}
	, {classes: '', data: {open: false, source: 'n3252', target: 'n3247'}}
	, {classes: '', data: {open: false, source: 'n3249', target: 'n3248'}}
	, {classes: '', data: {open: false, source: 'n3248', target: 'n3245'}}
	, {classes: '', data: {open: false, source: 'n3245', target: 'n3246'}}
	, {classes: '', data: {open: false, source: 'n3251', target: 'n3246'}}
	, {classes: 'between', data: {open: false, source: 'n3259', target: 'n3261'}}
	, {classes: 'between', data: {open: false, source: 'n3000', target: 'n3275'}}
	, {classes: '', data: {open: false, source: 'n3275', target: 'n3264'}}
	, {classes: '', data: {open: false, source: 'n3275', target: 'n3277'}}
	, {classes: '', data: {open: false, source: 'n3275', target: 'n3267'}}
	, {classes: '', data: {open: false, source: 'n3264', target: 'n3265'}}
	, {classes: '', data: {open: false, source: 'n3265', target: 'n3272'}}
	, {classes: '', data: {open: false, source: 'n3272', target: 'n3276'}}
	, {classes: '', data: {open: false, source: 'n3272', target: 'n3266'}}
	, {classes: '', data: {open: false, source: 'n3266', target: 'n3270'}}
	, {classes: '', data: {open: false, source: 'n3264', target: 'n3262'}}
	, {classes: '', data: {open: false, source: 'n3262', target: 'n3263'}}
	, {classes: '', data: {open: false, source: 'n3263', target: 'n3271'}}
	, {classes: '', data: {open: false, source: 'n3271', target: 'n3269'}}
	, {classes: '', data: {open: false, source: 'n3269', target: 'n3274'}}
	, {classes: '', data: {open: false, source: 'n3271', target: 'n3268'}}
	, {classes: '', data: {open: false, source: 'n3268', target: 'n3273'}}
	, {classes: 'between', data: {open: false, source: 'n3273', target: 'n3292'}}
	, {classes: '', data: {open: false, source: 'n3283', target: 'n3287'}}
	, {classes: '', data: {open: false, source: 'n3287', target: 'n3284'}}
	, {classes: '', data: {open: false, source: 'n3279', target: 'n3280'}}
	, {classes: '', data: {open: false, source: 'n3283', target: 'n3291'}}
	, {classes: '', data: {open: false, source: 'n3287', target: 'n3289'}}
	, {classes: '', data: {open: false, source: 'n3284', target: 'n3292'}}
	, {classes: '', data: {open: false, source: 'n3284', target: 'n3279'}}
	, {classes: '', data: {open: false, source: 'n3279', target: 'n3278'}}
	, {classes: '', data: {open: false, source: 'n3280', target: 'n3285'}}
	, {classes: '', data: {open: false, source: 'n3285', target: 'n3293'}}
	, {classes: '', data: {open: false, source: 'n3278', target: 'n3281'}}
	, {classes: '', data: {open: false, source: 'n3281', target: 'n3286'}}
	, {classes: '', data: {open: false, source: 'n3286', target: 'n3288'}}
	, {classes: '', data: {open: false, source: 'n3281', target: 'n3282'}}
	, {classes: '', data: {open: false, source: 'n3282', target: 'n3290'}}
	, {classes: 'between', data: {open: false, source: 'n3290', target: 'n3309'}}
	, {classes: '', data: {open: false, source: 'n3309', target: 'n3301'}}
	, {classes: '', data: {open: false, source: 'n3301', target: 'n3303'}}
	, {classes: '', data: {open: false, source: 'n3309', target: 'n3300'}}
	, {classes: '', data: {open: false, source: 'n3300', target: 'n3305'}}
	, {classes: '', data: {open: false, source: 'n3305', target: 'n3307'}}
	, {classes: '', data: {open: false, source: 'n3307', target: 'n3304'}}
	, {classes: '', data: {open: false, source: 'n3300', target: 'n3295'}}
	, {classes: '', data: {open: false, source: 'n3295', target: 'n3296'}}
	, {classes: '', data: {open: false, source: 'n3296', target: 'n3294'}}
	, {classes: '', data: {open: false, source: 'n3294', target: 'n3297'}}
	, {classes: '', data: {open: false, source: 'n3297', target: 'n3299'}}
	, {classes: '', data: {open: false, source: 'n3297', target: 'n3306'}}
	, {classes: '', data: {open: false, source: 'n3306', target: 'n3302'}}
	, {classes: '', data: {open: false, source: 'n3302', target: 'n3298'}}
	, {classes: '', data: {open: false, source: 'n3298', target: 'n3308'}}
	, {classes: 'between', data: {open: false, source: 'n3308', target: 'n3310'}}
	, {classes: 'between', data: {open: false, source: 'n3274', target: 'n3315'}}
	, {classes: 'between', data: {open: false, source: 'n3226', target: 'n3318'}}
	, {classes: '', data: {open: false, source: 'n3318', target: 'n3323'}}
	, {classes: '', data: {open: false, source: 'n3323', target: 'n3320'}}
	, {classes: '', data: {open: false, source: 'n3323', target: 'n3319'}}
	, {classes: '', data: {open: false, source: 'n3319', target: 'n3315'}}
	, {classes: '', data: {open: false, source: 'n3315', target: 'n3325'}}
	, {classes: '', data: {open: false, source: 'n3315', target: 'n3314'}}
	, {classes: '', data: {open: false, source: 'n3314', target: 'n3311'}}
	, {classes: '', data: {open: false, source: 'n3311', target: 'n3312'}}
	, {classes: '', data: {open: false, source: 'n3312', target: 'n3317'}}
	, {classes: '', data: {open: false, source: 'n3317', target: 'n3313'}}
	, {classes: '', data: {open: false, source: 'n3317', target: 'n3326'}}
	, {classes: '', data: {open: false, source: 'n3317', target: 'n3322'}}
	, {classes: '', data: {open: false, source: 'n3322', target: 'n3324'}}
	, {classes: '', data: {open: false, source: 'n3324', target: 'n3321'}}
	, {classes: '', data: {open: false, source: 'n3321', target: 'n3316'}}
	, {classes: 'between', data: {open: false, source: 'n3324', target: 'n3336'}}
	, {classes: '', data: {open: false, source: 'n3336', target: 'n3332'}}
	, {classes: '', data: {open: false, source: 'n3332', target: 'n3328'}}
	, {classes: '', data: {open: false, source: 'n3328', target: 'n3338'}}
	, {classes: '', data: {open: false, source: 'n3338', target: 'n3342'}}
	, {classes: '', data: {open: false, source: 'n3342', target: 'n3339'}}
	, {classes: '', data: {open: false, source: 'n3339', target: 'n3334'}}
	, {classes: '', data: {open: false, source: 'n3334', target: 'n3329'}}
	, {classes: '', data: {open: false, source: 'n3328', target: 'n3327'}}
	, {classes: '', data: {open: false, source: 'n3327', target: 'n3330'}}
	, {classes: '', data: {open: false, source: 'n3330', target: 'n3343'}}
	, {classes: '', data: {open: false, source: 'n3343', target: 'n3331'}}
	, {classes: '', data: {open: false, source: 'n3331', target: 'n3333'}}
	, {classes: '', data: {open: false, source: 'n3333', target: 'n3341'}}
	, {classes: '', data: {open: false, source: 'n3343', target: 'n3340'}}
	, {classes: '', data: {open: false, source: 'n3340', target: 'n3335'}}
	, {classes: '', data: {open: false, source: 'n3335', target: 'n3337'}}
	, {classes: 'between', data: {open: false, source: 'n3337', target: 'n3344'}}
	];
