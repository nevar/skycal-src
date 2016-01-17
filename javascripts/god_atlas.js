var godNodesData =
	[
		{ data:
			{ _id: 'n3000'
			, open: true, hover: false, want: false
			, start: true
			, _title: 'Божественный атлас'
			, _description:
				'В божественной форме бессмертный приобретает дополнительные '+
				'способности и становится гараздо больше. Меняеться его '+
				'восприятие окружающего мира и самого себя. И даже когда он '+
				'выходит из этого состояния, отголосок этих по-настоящему '+
				'божественных, сверхъестественных ощущений, пережитых в '+
				'божественной форме, остаётся с ним навсегда. На поле боя '+
				'боги в одиночку способны переломить ход сражения.'
			, _nodeImage: 'god'
			, _need: {}
			, _give: {}
			}
		, _position: {x: 0, y: 10}
		, _classes: ''
		}
	,
		{ data:
			{ _id: 'n3002'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 100}
			}
		, _position: {x: 0,  y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3003'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: 52, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3004'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -52, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3005'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -95, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3006'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, spirit: 75}
			}
		, _position: {x: -95, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3007'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 95, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3008'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 95, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3009'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 0, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3010'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 0, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3011'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: 0, y: -457}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3012'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 0, y: -143}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3013'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: -133, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3014'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -133, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3015'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 133, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3016'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 133, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3001'
			, open: false, hover: false, want: false
			, _title: 'Стойкость Бога'
			, _description:
				'Увеличивает показатель здоровья бога дополнительно на одну треть.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: 0, y: -300}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3018'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -95, y: -810}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3019'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -95, y: -690}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3020'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 95, y: -690}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3021'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 95, y: -810}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3022'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -61, y: -860}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3023'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 61, y: -860}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3024'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -61, y: -640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3025'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 61, y: -640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3026'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 0, y: -860}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3027'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 0, y: -640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3028'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: -133, y: -834}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3029'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -133, y: -666}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3030'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: 133, y: -666}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3031'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 133, y: -834}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3032'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -135, y: -750}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3033'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: 135, y: -750}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3017'
			, open: false, hover: false, want: false
			, _title: 'Ярость Бога'
			, _description:
				'Увеличивает на одну пятую урон бога по всем, кроме '+
				'бессмертных и других богов Элиона.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: 0, y: -750}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3035'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -400,  y: -790}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3036'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -348, y: -880}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3037'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -452, y: -880}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3038'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -495, y: -910}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3039'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -495, y: -790}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3040'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -305, y: -790}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3041'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -305, y: -910}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3042'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -461, y: -960}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3043'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -339, y: -960}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3044'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: -461, y: -740}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3045'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -339, y: -740}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3046'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -400, y: -960}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3047'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -400, y: -740}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3048'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -535, y: -850}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3049'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, str: 38}
			}
		, _position: {x: -265, y: -850}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3034'
			, open: false, hover: false, want: false
			, _title: 'Предусмотрительность Бога'
			, _description:
				'Стоямость Божественного Исцеления в вере уменьшается в 2 раза.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: -400, y: -850}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3051'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 400,  y: -790}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3052'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 452, y: -880}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3053'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: 348, y: -880}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3054'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 305, y: -910}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3055'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 305, y: -790}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3056'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 495, y: -790}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3057'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 495, y: -910}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3058'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 400, y: -960}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3059'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 400, y: -740}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3060'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: 400, y: -1007}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3061'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 400, y: -693}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3062'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 267, y: -934}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3063'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 267, y: -766}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3064'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: 533, y: -766}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3065'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: 533, y: -934}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3050'
			, open: false, hover: false, want: false
			, _title: 'Решимость Бога'
			, _description:
				'Продолжительность невосприимчивости к контролям от Силы Воли '+
				'увеличивается на 4 секунды.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: 400, y: -850}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3067'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 0,  y: -1140}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3445'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 52, y: -1230}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3068'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -52, y: -1230}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3069'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -95, y: -1260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3070'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -95, y: -1140}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3071'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: 95, y: -1140}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3072'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 95, y: -1260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3073'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -61, y: -1310}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3074'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 61, y: -1310}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3075'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -61, y: -1090}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3076'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 61, y: -1090}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3077'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: 0, y: -1310}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3078'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 0, y: -1357}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3079'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: 0, y: -1043}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3066'
			, open: false, hover: false, want: false
			, _title: 'Истина Бога'
			, _description:
				'Стоймость в вере перехода в божественную форму снижается на 20.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: 0, y: -1200}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3080'
			, open: false, hover: false, want: false
			, _title: 'Бог знаний'
			, _description:
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
			, _nodeImage: 'knowledge'
			, _need: {secretKnowledge: 1400}
			, _give: {}
			}
		, _position: {x: 0, y: -1500}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3082'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 460,  y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3083'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 512, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3084'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: 408, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3085'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 365, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3086'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 365, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3087'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 555, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3088'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 555, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3089'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 460, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3090'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 460, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3091'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 460, y: -457}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3092'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: 460, y: -143}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3093'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 327, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3094'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, valor: 38}
			}
		, _position: {x: 327, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3095'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 593, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3096'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: 593, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3081'
			, open: false, hover: false, want: false
			, _title: 'Воля Бога'
			, _description:
				'Время перезарядки способности смены класса сокращается на 10 '+
				'секунд.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: 460, y: -300}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3098'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 920,  y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3099'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 972, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3100'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 868, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3101'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 825, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3102'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 825, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3103'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: 1015, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3104'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1015, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3105'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 859, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3106'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: 981, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3107'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 859, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3108'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 981, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3109'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, power: 100, dex: 30}
			}
		, _position: {x: 920, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3110'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 920, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3111'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, valor: 75}
			}
		, _position: {x: 785, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3112'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1055, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3097'
			, open: false, hover: false, want: false
			, _title: 'Непреклонность Бога'
			, _description:
				'На первом ранге способности в три раза уменьшается длительность '+
				'эффектов контроля, если вы находитесь в божественной форме, '+
				'а наложивший противник нет. На втором ранге при тех же '+
				'обстоятельствах вы получаете невосприимчивость к эффектам '+
				'контроля.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: 920, y: -300}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3114'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1380,  y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3115'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1432, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3116'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, str: 38}
			}
		, _position: {x: 1328, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3117'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: 1285, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3118'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1285, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3119'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: 1475, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3120'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 1475, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3121'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1380, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3122'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 1380, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3123'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1380, y: -457}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3124'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1380, y: -143}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3125'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 1247, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3126'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 1247, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3127'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, spirit: 75}
			}
		, _position: {x: 1513, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3128'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 1513, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3113'
			, open: false, hover: false, want: false
			, _title: 'Пыл Бога'
			, _description:
				'Время перезарядки Силы Воли уменьшается на 120 секунд.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: 1380, y: -300}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3130'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, valor: 38}
			}
		, _position: {x: 1840,  y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3131'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1892, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3132'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 1788, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3133'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1745, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3134'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1745, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3135'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1935, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3136'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: 1935, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3137'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, str: 38}
			}
		, _position: {x: 1840, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3138'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1840, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3139'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, str: 38}
			}
		, _position: {x: 1840, y: -457}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3140'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 1840, y: -143}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3141'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 1707, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3142'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1707, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3143'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1973, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3144'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 1973, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3129'
			, open: false, hover: false, want: false
			, _title: 'Ярость Бога'
			, _description:
				'Увеличивает на одну пятую урон бога по всем, кроме '+
				'бессмертных и других богов Элиона.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: 1840, y: -300}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3145'
			, open: false, hover: false, want: false
			, _title: 'Бог войны'
			, _description:
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
			, _nodeImage: 'warrior'
			, _need: {book: 1}
			, _give: {}
			}
		, _position: {x: 2140, y: -300}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3147'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -555, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3149'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -555, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3150'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -365, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3151'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -365, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3152'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -521, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3153'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -399, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3154'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -521, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3155'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -399, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3156'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -460, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3157'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -460, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3158'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -593, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3159'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, luck: 38}
			}
		, _position: {x: -593, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3160'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -327, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3161'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -327, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3162'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: -595, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3163'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: -325, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3146'
			, open: false, hover: false, want: false
			, _title: 'Воля Бога'
			, _description:
				'Время перезарядки способности смены класса сокращается на 10 '+
				'секунд.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: -460, y: -300}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3165'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -920,  y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3166'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -868, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3167'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -972, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3168'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -981, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3169'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -859, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3170'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -981, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3171'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -859, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3172'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -920, y: -457}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3173'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -920, y: -143}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3174'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1053, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3175'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -1053, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3176'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -787, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3177'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -787, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3178'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1055, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3179'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -785, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3164'
			, open: false, hover: false, want: false
			, _title: 'Непреклонность Бога'
			, _description:
				'На первом ранге способности в три раза уменьшается длительность '+
				'эффектов контроля, если вы находитесь в божественной форме, '+
				'а наложивший противник нет. На втором ранге при тех же '+
				'обстоятельствах вы получаете невосприимчивость к эффектам '+
				'контроля.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: -920, y: -300}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3181'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, luck: 75}
			}
		, _position: {x: -1380,  y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3182'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1328, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3183'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1432, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3184'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -1475, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3185'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -1475, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3186'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1285, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3187'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -1285, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3188'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1441, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3189'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -1319, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3190'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -1441, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3191'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1319, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3192'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: -1380, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3193'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1380, y: -457}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3194'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1380, y: -143}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3180'
			, open: false, hover: false, want: false
			, _title: 'Рвение Бога'
			, _description:
				'Стоймость Силы Воли в вере уменьшается в 2 раза.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: -1380, y: -300}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3196'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1935, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3197'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1935, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3198'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1745, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3199'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1745, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3200'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1901, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3201'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1779, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3202'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -1901, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3203'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1779, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3204'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1840, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3205'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1840, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3206'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, valor: 75}
			}
		, _position: {x: -1973, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3207'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1973, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3208'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1707, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3209'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1707, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3210'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: -1975, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3211'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, spirit: 75}
			}
		, _position: {x: -1705, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3195'
			, open: false, hover: false, want: false
			, _title: 'Ярость Бога'
			, _description:
				'Увеличивает на одну пятую урон бога по всем, кроме '+
				'бессмертных и других богов Элиона.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: -1840, y: -300}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3212'
			, open: false, hover: false, want: false
			, _title: 'Бог охоты'
			, _description:
				'Он сосредоточен на одной цели и точно знает, как поразить '+
				'любую, даже самую жуткую тварь вторжения. Настоящий охотник, '+
				'целекстремлённый и отважный. Но не только чужеземные твари '+
				'привлекают бога охоты. Не чуждо ему и соревнование, битвы с '+
				'другими богами. То самое дело, которое застваляет проявть '+
				'всю смекалку и все умения.'+
				'</p><p>'+
				'Эта вершина открывает путь к атласу с особыми техниками для '+
				'ликвидации отдельных опасных противников.'
			, _nodeImage: 'hunter'
			, _need: {book: 1}
			, _give: {}
			}
		, _position: {x: -2140, y: -300}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3214'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 460,  y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3215'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 512, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3216'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 408, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3217'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 365, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3218'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 365, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3219'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 555, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3220'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, spirit: 75}
			}
		, _position: {x: 555, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3221'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 460, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3222'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: 460, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3223'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 460, y: -7}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3224'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 460, y: 307}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3225'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: 327, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3226'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 327, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3227'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, spirit: 75}
			}
		, _position: {x: 593, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3228'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 593, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3213'
			, open: false, hover: false, want: false
			, _title: 'Знания Бога'
			, _description:
				'Увеличивае эффективность Божественного Исцеления в 2 раза.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: 460, y: 150}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3230'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, luck: 75}
			}
		, _position: {x: 920,  y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3231'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 972, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3232'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, luck: 75}
			}
		, _position: {x: 868, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3233'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 825, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3234'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 825, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3235'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, luck: 38}
			}
		, _position: {x: 1015, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3236'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 1015, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3237'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 859, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3238'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 981, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3239'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: 859, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3240'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 981, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3241'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 920, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3242'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 920, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3243'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 785, y: 150}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3244'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1055, y: 150}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3229'
			, open: false, hover: false, want: false
			, _title: 'Могущество Бога'
			, _description:
				'Увеличивает урон бога дополнительно на 20%'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: 920, y: 150}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3246'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1380,  y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3247'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 20}
			}
		, _position: {x: 1432, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3248'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1328, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3249'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 1285, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3250'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1285, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3251'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: 1475, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3252'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, str: 38}
			}
		, _position: {x: 1475, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3253'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 1380, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3254'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, valor: 75}
			}
		, _position: {x: 1380, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3255'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1380, y: -7}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3256'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1380, y: 307}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3257'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: 1247, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3258'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1247, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3259'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1513, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3260'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 1513, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3245'
			, open: false, hover: false, want: false
			, _title: 'Ярость Бога'
			, _description:
				'Увеличивает на одну пятую урон бога по всем, кроме '+
				'бессмертных и других богов Элиона.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: 1380, y: 150}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3261'
			, open: false, hover: false, want: false
			, _title: 'Бог странствий'
			, _description:
				'Пока в мире есть таинственные уголки, пока в нём есть опасности '+
				'и место для подвига - этот мир будет интересен богу странствий. '+
				'Он часто путешествует в одиночку, не нуждаясь в компании '+
				'соратников или последователей. Далёкие острова, затерянные в '+
				'глухих лесах руины древних храмов, таинственное наследие Элая '+
				'- всё это привлекает бога странствий.'+
				'</p><p>'+
				'Эта вершина открывает путь к атласу, содержащему техники, '+
				'наиболее подходящие для странствий в одиночку.'
			, _nodeImage: 'wanderer'
			, _need: {secretKnowledge: 1400}
			, _give: {}
			}
		, _position: {x: 1680, y: 150}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3263'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -460,  y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3264'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -408, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3265'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -512, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3266'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -521, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3267'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -399, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3268'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -521, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3269'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -399, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3270'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -460, y: -7}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3271'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, luck: 38}
			}
		, _position: {x: -460, y: 307}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3272'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -593, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3273'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -593, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3274'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -327, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3275'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -327, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3276'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -595, y: 150}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3277'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -325, y: 150}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3262'
			, open: false, hover: false, want: false
			, _title: 'Право Бога'
			, _description:
				'Время перезарядки божественных особых способностей сокращается '+
				'на 90 секунд.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: -460, y: 150}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3279'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -920,  y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3280'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -868, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3281'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -972, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3282'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 20}
			}
		, _position: {x: -1015, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3283'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1015, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3284'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -825, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3285'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -825, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3286'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -920, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3287'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -920, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3288'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -920, y: -7}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3289'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, luck: 75}
			}
		, _position: {x: -920, y: 307}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3290'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1053, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3291'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1053, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3292'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -787, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3293'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -787, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3278'
			, open: false, hover: false, want: false
			, _title: 'Мудрость Бога'
			, _description:
				'Время перезарядки Божественного Исциления уменьшается на 120 секунд.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: -920, y: 150}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3295'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: -1380,  y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3296'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -1328, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3297'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1432, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3298'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1475, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3299'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1475, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3300'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, valor: 38}
			}
		, _position: {x: -1285, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3301'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1285, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3302'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1441, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3303'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1319, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3304'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1441, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3305'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: -1319, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3306'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -1380, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3307'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: -1380, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3308'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1515, y: 150}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3309'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1245, y: 150}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3294'
			, open: false, hover: false, want: false
			, _title: 'Ярость Бога'
			, _description:
				'Увеличивает на одну пятую урон бога по всем, кроме '+
				'бессмертных и других богов Элиона.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: -1380, y: 150}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3310'
			, open: false, hover: false, want: false
			, _title: 'Бог обороны'
			, _description:
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
			, _nodeImage: 'defend'
			, _need: {book: 1}
			, _give: {}
			}
		, _position: {x: -1680, y: 150}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3312'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 0,  y: 410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3313'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 52, y: 320}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3314'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -52, y: 320}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3315'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -95, y: 290}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3316'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -95, y: 410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3317'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: 95, y: 410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3318'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 95, y: 290}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3319'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, str: 38}
			}
		, _position: {x: -61, y: 240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3320'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: 61, y: 240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3321'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -61, y: 460}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3322'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 61, y: 460}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3323'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 0, y: 240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3324'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 0, y: 460}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3325'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, luck: 38}
			}
		, _position: {x: -135, y: 350}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3326'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 135, y: 350}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3311'
			, open: false, hover: false, want: false
			, _title: 'Стойкость Бога'
			, _description:
				'Увеличивает показатель здоровья бога дополнительно на одну треть.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: 0, y: 350}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3328'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -95, y: 640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3329'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -95, y: 760}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3330'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 95, y: 760}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3331'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: 95, y: 640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3332'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -61, y: 590}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3333'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 61, y: 590}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3334'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -61, y: 810}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3335'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 61, y: 810}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3336'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 0, y: 590}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3337'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 0, y: 810}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3338'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -133, y: 616}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3339'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, valor: 38}
			}
		, _position: {x: -133, y: 784}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3340'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 133, y: 784}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3341'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, luck: 38}
			}
		, _position: {x: 133, y: 616}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3342'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -135, y: 700}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3343'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 135, y: 700}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3327'
			, open: false, hover: false, want: false
			, _title: 'Право Бога'
			, _description:
				'Время перезарядки божественных особых способностей сокращается '+
				'на 90 секунд.'
			, _nodeImage: 'sphere'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: 0, y: 700}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3344'
			, open: false, hover: false, want: false
			, _title: 'Бог власти'
			, _description:
				'Величие, почёт и уважение среди смертных - вот что важно для '+
				'этого бога. Взамен он дарует своим последователям особые '+
				'возможности. Воодущевленные, они способны на большее, нежели '+
				'обычные последователи других богов.'+
				'</p><p>'+
				'Эта вершина открывает путь к атласу, где находятся '+
				'разнообразные техники для увеличения эффективности ваших '+
				'последователей.'
			, _nodeImage: 'rule'
			, _need: {book: 1}
			, _give: {}
			}
		, _position: {x: 0, y: 1000}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3345'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, luck: 38}
			}
		, _position: {x: -1380,  y: -690}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3346'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1328, y: -780}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3347'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1432, y: -780}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3348'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -1441, y: -860}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3349'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -1319, y: -860}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3350'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: -1441, y: -640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3351'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1319, y: -640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3352'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1380, y: -907}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3353'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1380, y: -593}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3354'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1513, y: -834}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3355'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -1513, y: -666}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3356'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1247, y: -666}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3357'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1247, y: -834}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3358'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1515, y: -750}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3359'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, luck: 38}
			}
		, _position: {x: -1245, y: -750}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3360'
			, open: false, hover: false, want: false
			, _title: 'Тайные исследования'
			, _description:
				'Позволяет вам отправлять адептов на исследование тайн Элиона, '+
				'с помощью которых можно открыть в себе Бога Знаний и Бога '+
				'Странствий.'
			, _nodeImage: 'secretKnowledge'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: -1380, y: -750}
		, _classes: 'skill'
		}
	,
		{ data:
			{ _id: 'n3361'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, spirit: 75}
			}
		, _position: {x: 1380,  y: -690}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3362'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1432, y: -780}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3363'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1328, y: -780}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3364'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, str: 38}
			}
		, _position: {x: 1319, y: -860}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3365'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1441, y: -860}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3366'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: 1319, y: -640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3367'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1441, y: -640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3368'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1380, y: -907}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3369'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1380, y: -593}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3370'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1247, y: -834}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3371'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: 1247, y: -666}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3372'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1513, y: -666}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3373'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: 1513, y: -834}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3374'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1245, y: -750}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3375'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1515, y: -750}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3376'
			, open: false, hover: false, want: false
			, _title: 'Тайные исследования'
			, _description:
				'Позволяет вам отправлять адептов на исследование тайн Элиона, '+
				'с помощью которых можно открыть в себе Бога Знаний и Бога '+
				'Странствий.'
			, _nodeImage: 'secretKnowledge'
			, _need: {god: 10}
			, _give: {prestige: 40}
			}
		, _position: {x: 1380, y: -750}
		, _classes: 'skill'
		}
	];

var godEdgesData =
	[ {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3000', _target: 'n3012'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3012', _target: 'n3010'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3010', _target: 'n3007'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3007', _target: 'n3015'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3007', _target: 'n3002'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3002', _target: 'n3001'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3001', _target: 'n3003'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3003', _target: 'n3008'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3008', _target: 'n3016'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3001', _target: 'n3004'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3004', _target: 'n3005'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3005', _target: 'n3006'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3006', _target: 'n3014'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3005', _target: 'n3013'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3004', _target: 'n3009'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3009', _target: 'n3011'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3011', _target: 'n3027'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3027', _target: 'n3025'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3025', _target: 'n3030'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3025', _target: 'n3020'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3020', _target: 'n3017'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3017', _target: 'n3019'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3019', _target: 'n3032'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3032', _target: 'n3029'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3029', _target: 'n3024'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3017', _target: 'n3021'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3021', _target: 'n3023'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3023', _target: 'n3031'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3031', _target: 'n3033'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3017', _target: 'n3018'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3018', _target: 'n3028'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3028', _target: 'n3022'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3022', _target: 'n3026'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3028', _target: 'n3049'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3049', _target: 'n3040'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3040', _target: 'n3035'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3035', _target: 'n3039'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3039', _target: 'n3044'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3044', _target: 'n3047'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3047', _target: 'n3045'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3039', _target: 'n3048'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3048', _target: 'n3038'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3038', _target: 'n3042'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3035', _target: 'n3034'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3034', _target: 'n3036'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3036', _target: 'n3046'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3046', _target: 'n3037'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3046', _target: 'n3043'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3043', _target: 'n3041'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3033', _target: 'n3063'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3055', _target: 'n3063'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3055', _target: 'n3059'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3059', _target: 'n3061'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3055', _target: 'n3051'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3051', _target: 'n3050'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3050', _target: 'n3052'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3052', _target: 'n3056'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3056', _target: 'n3064'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3052', _target: 'n3057'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3057', _target: 'n3065'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3057', _target: 'n3058'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3058', _target: 'n3054'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3054', _target: 'n3053'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3054', _target: 'n3062'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3058', _target: 'n3060'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3043', _target: 'n3070'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3070', _target: 'n3075'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3070', _target: 'n3067'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3067', _target: 'n3445'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3445', _target: 'n3072'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3071', _target: 'n3072'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3071', _target: 'n3076'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3076', _target: 'n3079'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3071', _target: 'n3062'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3067', _target: 'n3066'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3066', _target: 'n3068'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3068', _target: 'n3077'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3068', _target: 'n3069'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3069', _target: 'n3073'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3073', _target: 'n3078'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3078', _target: 'n3074'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3078', _target: 'n3080'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3015', _target: 'n3094'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3094', _target: 'n3086'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3081', _target: 'n3083'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3083', _target: 'n3084'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3084', _target: 'n3086'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3083', _target: 'n3089'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3089', _target: 'n3085'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3085', _target: 'n3093'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3089', _target: 'n3091'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3081', _target: 'n3082'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3082', _target: 'n3090'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3090', _target: 'n3092'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3090', _target: 'n3087'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3087', _target: 'n3088'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3088', _target: 'n3096'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3087', _target: 'n3095'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3095', _target: 'n3111'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3111', _target: 'n3101'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3101', _target: 'n3105'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3105', _target: 'n3109'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3109', _target: 'n3106'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3106', _target: 'n3104'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3104', _target: 'n3112'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3112', _target: 'n3103'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3103', _target: 'n3108'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3108', _target: 'n3110'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3110', _target: 'n3107'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3107', _target: 'n3102'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3103', _target: 'n3098'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3098', _target: 'n3099'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3099', _target: 'n3100'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3100', _target: 'n3097'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3112', _target: 'n3125'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3125', _target: 'n3117'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3117', _target: 'n3116'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3116', _target: 'n3113'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3113', _target: 'n3115'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3119', _target: 'n3120'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3120', _target: 'n3121'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3121', _target: 'n3123'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3120', _target: 'n3128'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3119', _target: 'n3127'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3113', _target: 'n3114'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3126', _target: 'n3118'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3118', _target: 'n3122'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3122', _target: 'n3114'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3122', _target: 'n3124'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3120', _target: 'n3115'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3127', _target: 'n3142'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3134', _target: 'n3142'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3141', _target: 'n3133'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3133', _target: 'n3132'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3133', _target: 'n3134'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3134', _target: 'n3138'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3138', _target: 'n3140'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3134', _target: 'n3130'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3130', _target: 'n3129'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3129', _target: 'n3131'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3131', _target: 'n3137'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3137', _target: 'n3139'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3131', _target: 'n3135'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3135', _target: 'n3143'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3135', _target: 'n3136'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3136', _target: 'n3144'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3143', _target: 'n3145'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3013', _target: 'n3161'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3161', _target: 'n3151'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3151', _target: 'n3153'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3153', _target: 'n3156'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3156', _target: 'n3146'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3146', _target: 'n3150'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3150', _target: 'n3163'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3163', _target: 'n3161'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3163', _target: 'n3160'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3160', _target: 'n3155'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3155', _target: 'n3157'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3157', _target: 'n3154'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3146', _target: 'n3149'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3149', _target: 'n3162'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3162', _target: 'n3147'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3147', _target: 'n3158'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3158', _target: 'n3152'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3162', _target: 'n3159'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3159', _target: 'n3176'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3176', _target: 'n3179'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3179', _target: 'n3177'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3177', _target: 'n3169'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3177', _target: 'n3166'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3166', _target: 'n3164'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3164', _target: 'n3165'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3165', _target: 'n3173'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3173', _target: 'n3171'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3173', _target: 'n3170'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3170', _target: 'n3175'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3164', _target: 'n3167'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3167', _target: 'n3174'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3174', _target: 'n3168'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3168', _target: 'n3172'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3174', _target: 'n3178'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3187', _target: 'n3174'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3187', _target: 'n3189'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3186', _target: 'n3187'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3186', _target: 'n3191'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3191', _target: 'n3194'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3194', _target: 'n3190'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3186', _target: 'n3181'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3181', _target: 'n3182'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3181', _target: 'n3180'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3180', _target: 'n3183'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3183', _target: 'n3192'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3183', _target: 'n3184'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3184', _target: 'n3188'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3188', _target: 'n3193'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3184', _target: 'n3185'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3185', _target: 'n3208'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3208', _target: 'n3211'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3211', _target: 'n3199'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3199', _target: 'n3209'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3209', _target: 'n3201'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3201', _target: 'n3204'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3204', _target: 'n3200'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3199', _target: 'n3195'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3195', _target: 'n3205'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3205', _target: 'n3203'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3203', _target: 'n3198'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3195', _target: 'n3196'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3196', _target: 'n3206'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3206', _target: 'n3210'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3210', _target: 'n3207'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3207', _target: 'n3202'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3202', _target: 'n3197'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3207', _target: 'n3212'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3000', _target: 'n3225'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3225', _target: 'n3217'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3217', _target: 'n3218'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3218', _target: 'n3226'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3218', _target: 'n3216'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3216', _target: 'n3213'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3213', _target: 'n3215'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3222', _target: 'n3219'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3219', _target: 'n3220'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3219', _target: 'n3214'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3222', _target: 'n3224'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3219', _target: 'n3227'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3220', _target: 'n3228'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3220', _target: 'n3221'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3221', _target: 'n3223'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3219', _target: 'n3215'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3227', _target: 'n3234'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3234', _target: 'n3230'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3230', _target: 'n3235'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3235', _target: 'n3240'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3240', _target: 'n3242'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3242', _target: 'n3239'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3230', _target: 'n3229'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3229', _target: 'n3232'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3232', _target: 'n3241'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3241', _target: 'n3237'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3237', _target: 'n3233'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3233', _target: 'n3243'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3241', _target: 'n3231'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3241', _target: 'n3238'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3238', _target: 'n3236'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3236', _target: 'n3244'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3244', _target: 'n3258'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3253', _target: 'n3249'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3249', _target: 'n3250'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3254', _target: 'n3251'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3251', _target: 'n3252'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3253', _target: 'n3255'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3249', _target: 'n3257'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3250', _target: 'n3258'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3254', _target: 'n3256'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3251', _target: 'n3259'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3252', _target: 'n3260'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3252', _target: 'n3247'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3249', _target: 'n3248'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3248', _target: 'n3245'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3245', _target: 'n3246'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3251', _target: 'n3246'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3259', _target: 'n3261'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3000', _target: 'n3275'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3275', _target: 'n3264'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3275', _target: 'n3277'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3275', _target: 'n3267'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3264', _target: 'n3265'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3265', _target: 'n3272'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3272', _target: 'n3276'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3272', _target: 'n3266'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3266', _target: 'n3270'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3264', _target: 'n3262'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3262', _target: 'n3263'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3263', _target: 'n3271'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3271', _target: 'n3269'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3269', _target: 'n3274'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3271', _target: 'n3268'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3268', _target: 'n3273'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3273', _target: 'n3292'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3283', _target: 'n3287'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3287', _target: 'n3284'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3279', _target: 'n3280'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3283', _target: 'n3291'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3287', _target: 'n3289'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3284', _target: 'n3292'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3284', _target: 'n3279'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3279', _target: 'n3278'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3280', _target: 'n3285'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3285', _target: 'n3293'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3278', _target: 'n3281'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3281', _target: 'n3286'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3286', _target: 'n3288'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3281', _target: 'n3282'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3282', _target: 'n3290'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3290', _target: 'n3309'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3309', _target: 'n3301'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3301', _target: 'n3303'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3309', _target: 'n3300'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3300', _target: 'n3305'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3305', _target: 'n3307'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3307', _target: 'n3304'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3300', _target: 'n3295'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n3295', _target: 'n3296'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3296', _target: 'n3294'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3294', _target: 'n3297'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3297', _target: 'n3299'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3297', _target: 'n3306'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3306', _target: 'n3302'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3302', _target: 'n3298'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3298', _target: 'n3308'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3308', _target: 'n3310'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3274', _target: 'n3315'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3226', _target: 'n3318'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3318', _target: 'n3323'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3323', _target: 'n3320'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3323', _target: 'n3319'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3319', _target: 'n3315'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3315', _target: 'n3325'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3315', _target: 'n3314'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3314', _target: 'n3311'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3311', _target: 'n3312'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3312', _target: 'n3317'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3317', _target: 'n3313'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3317', _target: 'n3326'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3317', _target: 'n3322'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3322', _target: 'n3324'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3324', _target: 'n3321'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3321', _target: 'n3316'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3324', _target: 'n3336'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3336', _target: 'n3332'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3332', _target: 'n3328'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3328', _target: 'n3338'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3338', _target: 'n3342'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3342', _target: 'n3339'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3339', _target: 'n3334'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3334', _target: 'n3329'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3328', _target: 'n3327'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3327', _target: 'n3330'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3330', _target: 'n3343'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3343', _target: 'n3331'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3331', _target: 'n3333'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3333', _target: 'n3341'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3343', _target: 'n3340'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3340', _target: 'n3335'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3335', _target: 'n3337'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n3337', _target: 'n3344'}}
	, {_classes: 'between', data: {open: false, hover: false, want: false, source: 'n3193', target: 'n3353'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3353', target: 'n3351'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3351', target: 'n3356'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3356', target: 'n3359'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3353', target: 'n3350'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3350', target: 'n3355'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3355', target: 'n3358'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3358', target: 'n3354'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3354', target: 'n3347'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3347', target: 'n3360'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3360', target: 'n3345'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3345', target: 'n3353'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3360', target: 'n3346'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3346', target: 'n3357'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3357', target: 'n3349'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3349', target: 'n3352'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3352', target: 'n3348'}}
	, {_classes: 'between', data: {open: false, hover: false, want: false, source: 'n3123', target: 'n3369'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3369', target: 'n3367'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3367', target: 'n3372'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3372', target: 'n3375'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3375', target: 'n3373'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3373', target: 'n3365'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3365', target: 'n3368'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3368', target: 'n3364'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3364', target: 'n3370'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3370', target: 'n3374'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3374', target: 'n3371'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3371', target: 'n3366'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3369', target: 'n3361'}}
	, {_classes: 'curve', data: {open: false, hover: false, want: false, source: 'n3361', target: 'n3362'}}
	, {_classes: 'curve', data: {open: false, hover: false, want: false, source: 'n3363', target: 'n3361'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3370', target: 'n3363'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3363', target: 'n3376'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3376', target: 'n3362'}}
	, {_classes: '', data: {open: false, hover: false, want: false, source: 'n3362', target: 'n3373'}}
	];

var godAtlas =
	{ nodes: godNodesData
	, edges: godEdgesData
	, mX: 0, mY: 0
	, scale: 1
	, sparks:
		{ red: [0, 0], green: [0, 0], blue: [0, 0], all: [0, 0]
		, god: [0, 0], book: [0, 0], secretKnowledge: [0, 0]
		}
	, stat:
		{ prestige: [0, 0]
		, power: [0, 0], vit: [0, 0]
		, str: [0, 0],  valor: [0, 0], luck: [0, 0], spirit: [0, 0]
		, dex: [0, 0]
		}
	, group: {skill: {}, stat: {}}
	};
