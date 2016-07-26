function godAtlas() {
var nodesData =
	[
		{ data:
			{ _id: 'n0'
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
			{ _id: 'n1'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 100}
			}
		, _position: {x: 0,  y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n2'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: 52, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n3'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -52, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n4'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -95, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n5'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, spirit: 75}
			}
		, _position: {x: -95, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n6'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 95, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n7'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 95, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n8'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 0, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n9'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 0, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n10'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: 0, y: -457}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n11'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 0, y: -143}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n12'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: -133, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n13'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -133, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n14'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 133, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n15'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 133, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n16'
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
			{ _id: 'n17'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -95, y: -810}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n18'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -95, y: -690}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n19'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 95, y: -690}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n20'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 95, y: -810}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n21'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -61, y: -860}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n22'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 61, y: -860}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n23'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -61, y: -640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n24'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 61, y: -640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n25'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 0, y: -860}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n26'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 0, y: -640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n27'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: -133, y: -834}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n28'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -133, y: -666}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n29'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: 133, y: -666}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n30'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 133, y: -834}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n31'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -135, y: -750}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n32'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: 135, y: -750}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n33'
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
			{ _id: 'n34'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -400,  y: -790}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n35'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -348, y: -880}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n36'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -452, y: -880}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n37'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -495, y: -910}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n38'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -495, y: -790}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n39'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -305, y: -790}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n40'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -305, y: -910}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n41'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -461, y: -960}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n42'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -339, y: -960}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n43'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: -461, y: -740}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n44'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -339, y: -740}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n45'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -400, y: -960}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n46'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -400, y: -740}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n47'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -535, y: -850}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n48'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, str: 38}
			}
		, _position: {x: -265, y: -850}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n49'
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
			{ _id: 'n50'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 400,  y: -790}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n51'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 452, y: -880}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n52'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: 348, y: -880}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n53'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 305, y: -910}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n54'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 305, y: -790}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n55'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 495, y: -790}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n56'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 495, y: -910}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n57'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 400, y: -960}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n58'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 400, y: -740}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n59'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: 400, y: -1007}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n60'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 400, y: -693}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n61'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 267, y: -934}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n62'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 267, y: -766}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n63'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: 533, y: -766}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n64'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: 533, y: -934}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n65'
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
			{ _id: 'n66'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 0,  y: -1140}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n67'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 52, y: -1230}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n68'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -52, y: -1230}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n69'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -95, y: -1260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n70'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -95, y: -1140}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n71'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: 95, y: -1140}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n72'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 95, y: -1260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n73'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -61, y: -1310}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n74'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 61, y: -1310}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n75'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -61, y: -1090}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n76'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 61, y: -1090}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n77'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: 0, y: -1310}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n78'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 0, y: -1357}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n79'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: 0, y: -1043}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n80'
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
			{ _id: 'n81'
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
			{ _id: 'n82'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 460,  y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n83'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 512, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n84'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: 408, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n85'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 365, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n86'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 365, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n87'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 555, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n88'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 555, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n89'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 460, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n90'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 460, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n91'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 460, y: -457}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n92'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: 460, y: -143}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n93'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 327, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n94'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, valor: 38}
			}
		, _position: {x: 327, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n95'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 593, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n96'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: 593, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n97'
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
			{ _id: 'n98'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 920,  y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n99'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 972, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n100'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 868, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n101'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 825, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n102'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 825, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n103'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: 1015, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n104'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1015, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n105'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 859, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n106'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: 981, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n107'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 859, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n108'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 981, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n109'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, power: 100, dex: 30}
			}
		, _position: {x: 920, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n110'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 920, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n111'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, valor: 75}
			}
		, _position: {x: 785, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n112'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1055, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n113'
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
			{ _id: 'n114'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1380,  y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n115'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1432, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n116'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, str: 38}
			}
		, _position: {x: 1328, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n117'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: 1285, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n118'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1285, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n119'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: 1475, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n120'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 1475, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n121'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1380, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n122'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 1380, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n123'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1380, y: -457}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n124'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1380, y: -143}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n125'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 1247, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n126'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 1247, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n127'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, spirit: 75}
			}
		, _position: {x: 1513, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n128'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 1513, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n129'
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
			{ _id: 'n130'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, valor: 38}
			}
		, _position: {x: 1840,  y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n131'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1892, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n132'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 1788, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n133'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1745, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n134'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1745, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n135'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1935, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n136'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: 1935, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n137'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, str: 38}
			}
		, _position: {x: 1840, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n138'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1840, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n139'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, str: 38}
			}
		, _position: {x: 1840, y: -457}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n140'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 1840, y: -143}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n141'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 1707, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n142'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1707, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n143'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1973, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n144'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 1973, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n145'
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
			{ _id: 'n146'
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
			{ _id: 'n147'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -555, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n148'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -555, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n149'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -365, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n150'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -365, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n151'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -521, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n152'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -399, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n153'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -521, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n154'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -399, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n155'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -460, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n156'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -460, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n157'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -593, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n158'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, luck: 38}
			}
		, _position: {x: -593, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n159'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -327, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n160'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -327, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n161'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: -595, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n162'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: -325, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n163'
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
			{ _id: 'n164'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -920,  y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n165'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -868, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n166'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -972, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n167'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -981, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n168'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -859, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n169'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -981, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n170'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -859, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n171'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -920, y: -457}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n172'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -920, y: -143}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n173'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1053, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n174'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -1053, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n175'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -787, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n176'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -787, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n177'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1055, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n178'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -785, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n179'
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
			{ _id: 'n180'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, luck: 75}
			}
		, _position: {x: -1380,  y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n181'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1328, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n182'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1432, y: -330}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n183'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -1475, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n184'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -1475, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n185'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1285, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n186'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -1285, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n187'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1441, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n188'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -1319, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n189'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -1441, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n190'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1319, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n191'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: -1380, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n192'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1380, y: -457}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n193'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1380, y: -143}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n194'
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
			{ _id: 'n195'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1935, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n196'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1935, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n197'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1745, y: -240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n198'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1745, y: -360}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n199'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1901, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n200'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1779, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n201'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -1901, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n202'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1779, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n203'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1840, y: -410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n204'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1840, y: -190}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n205'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, valor: 75}
			}
		, _position: {x: -1973, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n206'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1973, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n207'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1707, y: -216}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n208'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1707, y: -384}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n209'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: -1975, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n210'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, spirit: 75}
			}
		, _position: {x: -1705, y: -300}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n211'
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
			{ _id: 'n212'
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
			{ _id: 'n213'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 460,  y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n214'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 512, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n215'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 408, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n216'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 365, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n217'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 365, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n218'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 555, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n219'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, spirit: 75}
			}
		, _position: {x: 555, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n220'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 460, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n221'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: 460, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n222'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 460, y: -7}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n223'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 460, y: 307}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n224'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: 327, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n225'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 327, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n226'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, spirit: 75}
			}
		, _position: {x: 593, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n227'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 593, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n228'
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
			{ _id: 'n229'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, luck: 75}
			}
		, _position: {x: 920,  y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n230'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 972, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n231'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, luck: 75}
			}
		, _position: {x: 868, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n232'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 825, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n233'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 825, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n234'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, luck: 38}
			}
		, _position: {x: 1015, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n235'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 1015, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n236'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 859, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n237'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 981, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n238'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: 859, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n239'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 981, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n240'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 920, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n241'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 920, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n242'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 785, y: 150}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n243'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1055, y: 150}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n244'
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
			{ _id: 'n245'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1380,  y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n246'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 20}
			}
		, _position: {x: 1432, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n247'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1328, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n248'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 1285, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n249'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1285, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n250'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: 1475, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n251'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, str: 38}
			}
		, _position: {x: 1475, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n252'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 1380, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n253'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, valor: 75}
			}
		, _position: {x: 1380, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n254'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1380, y: -7}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n255'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1380, y: 307}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n256'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: 1247, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n257'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1247, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n258'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1513, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n259'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 1513, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n260'
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
			{ _id: 'n261'
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
			{ _id: 'n262'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -460,  y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n263'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -408, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n264'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -512, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n265'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -521, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n266'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -399, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n267'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -521, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n268'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -399, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n269'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -460, y: -7}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n270'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, luck: 38}
			}
		, _position: {x: -460, y: 307}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n271'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -593, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n272'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -593, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n273'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -327, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n274'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -327, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n275'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -595, y: 150}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n276'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -325, y: 150}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n277'
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
			{ _id: 'n278'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -920,  y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n279'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -868, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n280'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -972, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n281'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 20}
			}
		, _position: {x: -1015, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n282'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1015, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n283'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -825, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n284'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -825, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n285'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -920, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n286'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -920, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n287'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -920, y: -7}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n288'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, luck: 75}
			}
		, _position: {x: -920, y: 307}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n289'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1053, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n290'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1053, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n291'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -787, y: 234}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n292'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -787, y: 66}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n293'
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
			{ _id: 'n294'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: -1380,  y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n295'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -1328, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n296'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1432, y: 120}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n297'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: -1475, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n298'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1475, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n299'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, valor: 38}
			}
		, _position: {x: -1285, y: 210}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n300'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1285, y: 90}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n301'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -1441, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n302'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1319, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n303'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1441, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n304'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: -1319, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n305'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -1380, y: 40}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n306'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: -1380, y: 260}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n307'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1515, y: 150}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n308'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1245, y: 150}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n309'
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
			{ _id: 'n310'
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
			{ _id: 'n311'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 0,  y: 410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n312'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 52, y: 320}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n313'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -52, y: 320}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n314'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -95, y: 290}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n315'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -95, y: 410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n316'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: 95, y: 410}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n317'
			, open: false, hover: false, want: false
			, _need: {red: 490}
			, _give: {prestige: 27, power: 27, dex: 18}
			}
		, _position: {x: 95, y: 290}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n318'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, str: 38}
			}
		, _position: {x: -61, y: 240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n319'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, spirit: 38}
			}
		, _position: {x: 61, y: 240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n320'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -61, y: 460}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n321'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 61, y: 460}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n322'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 0, y: 240}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n323'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 0, y: 460}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n324'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, luck: 38}
			}
		, _position: {x: -135, y: 350}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n325'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 135, y: 350}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n326'
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
			{ _id: 'n327'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -95, y: 640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n328'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: -95, y: 760}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n329'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 95, y: 760}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n330'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: 95, y: 640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n331'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -61, y: 590}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n332'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 61, y: 590}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n333'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -61, y: 810}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n334'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 61, y: 810}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n335'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: 0, y: 590}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n336'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: 0, y: 810}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n337'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -133, y: 616}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n338'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, valor: 38}
			}
		, _position: {x: -133, y: 784}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n339'
			, open: false, hover: false, want: false
			, _need: {green: 490}
			, _give: {prestige: 50, vit: 50, dex: 18}
			}
		, _position: {x: 133, y: 784}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n340'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, luck: 38}
			}
		, _position: {x: 133, y: 616}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n341'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: -135, y: 700}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n342'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 135, y: 700}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n343'
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
			{ _id: 'n344'
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
			{ _id: 'n345'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, luck: 38}
			}
		, _position: {x: -1380,  y: -690}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n346'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1328, y: -780}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n347'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1432, y: -780}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n348'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: -1441, y: -860}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n349'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, spirit: 56}
			}
		, _position: {x: -1319, y: -860}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n350'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, str: 56}
			}
		, _position: {x: -1441, y: -640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n351'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1319, y: -640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n352'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1380, y: -907}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n353'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1380, y: -593}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n354'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1513, y: -834}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n355'
			, open: false, hover: false, want: false
			, _need: {red: 810}
			, _give: {prestige: 53, power: 53, dex: 30}
			}
		, _position: {x: -1513, y: -666}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n356'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1247, y: -666}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n357'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: -1247, y: -834}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n358'
			, open: false, hover: false, want: false
			, _need: {green: 810}
			, _give: {prestige: 100, vit: 100, dex: 30}
			}
		, _position: {x: -1515, y: -750}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n359'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, luck: 38}
			}
		, _position: {x: -1245, y: -750}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n360'
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
			{ _id: 'n361'
			, open: false, hover: false, want: false
			, _need: {blue: 810}
			, _give: {prestige: 75, spirit: 75}
			}
		, _position: {x: 1380,  y: -690}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n362'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1432, y: -780}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n363'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1328, y: -780}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n364'
			, open: false, hover: false, want: false
			, _need: {blue: 490}
			, _give: {prestige: 38, str: 38}
			}
		, _position: {x: 1319, y: -860}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n365'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1441, y: -860}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n366'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: 1319, y: -640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n367'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1441, y: -640}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n368'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1380, y: -907}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n369'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1380, y: -593}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n370'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1247, y: -834}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n371'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, valor: 56}
			}
		, _position: {x: 1247, y: -666}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n372'
			, open: false, hover: false, want: false
			, _need: {red: 650}
			, _give: {prestige: 40, power: 40, dex: 24}
			}
		, _position: {x: 1513, y: -666}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n373'
			, open: false, hover: false, want: false
			, _need: {blue: 650}
			, _give: {prestige: 56, luck: 56}
			}
		, _position: {x: 1513, y: -834}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n374'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1245, y: -750}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n375'
			, open: false, hover: false, want: false
			, _need: {green: 650}
			, _give: {prestige: 75, vit: 75, dex: 24}
			}
		, _position: {x: 1515, y: -750}
		, _classes: 'stat'
		}
	,
		{ data:
			{ _id: 'n376'
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

var edgesData =
	[ {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n0', _target: 'n11'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n11', _target: 'n9'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n9', _target: 'n6'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n6', _target: 'n14'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n6', _target: 'n1'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n1', _target: 'n16'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n16', _target: 'n2'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n2', _target: 'n7'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n7', _target: 'n15'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n16', _target: 'n3'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3', _target: 'n4'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n4', _target: 'n5'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n5', _target: 'n13'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n4', _target: 'n12'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n3', _target: 'n8'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n8', _target: 'n10'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n10', _target: 'n26'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n26', _target: 'n24'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n24', _target: 'n29'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n24', _target: 'n19'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n19', _target: 'n33'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n33', _target: 'n18'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n18', _target: 'n31'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n31', _target: 'n28'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n28', _target: 'n23'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n33', _target: 'n20'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n20', _target: 'n22'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n22', _target: 'n30'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n30', _target: 'n32'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n33', _target: 'n17'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n17', _target: 'n27'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n27', _target: 'n21'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n21', _target: 'n25'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n27', _target: 'n48'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n48', _target: 'n39'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n39', _target: 'n34'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n34', _target: 'n38'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n38', _target: 'n43'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n43', _target: 'n46'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n46', _target: 'n44'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n38', _target: 'n47'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n47', _target: 'n37'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n37', _target: 'n41'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n34', _target: 'n49'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n49', _target: 'n35'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n35', _target: 'n45'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n45', _target: 'n36'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n45', _target: 'n42'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n42', _target: 'n40'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n32', _target: 'n62'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n54', _target: 'n62'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n54', _target: 'n58'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n58', _target: 'n60'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n54', _target: 'n50'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n50', _target: 'n65'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n65', _target: 'n51'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n51', _target: 'n55'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n55', _target: 'n63'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n51', _target: 'n56'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n56', _target: 'n64'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n56', _target: 'n57'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n57', _target: 'n53'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n53', _target: 'n52'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n53', _target: 'n61'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n57', _target: 'n59'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n42', _target: 'n70'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n70', _target: 'n75'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n70', _target: 'n66'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n66', _target: 'n67'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n67', _target: 'n72'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n71', _target: 'n72'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n71', _target: 'n76'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n76', _target: 'n79'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n71', _target: 'n61'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n66', _target: 'n80'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n80', _target: 'n68'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n68', _target: 'n77'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n68', _target: 'n69'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n69', _target: 'n73'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n73', _target: 'n78'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n78', _target: 'n74'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n78', _target: 'n81'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n14', _target: 'n94'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n94', _target: 'n86'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n97', _target: 'n83'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n83', _target: 'n84'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n84', _target: 'n86'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n83', _target: 'n89'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n89', _target: 'n85'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n85', _target: 'n93'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n89', _target: 'n91'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n97', _target: 'n82'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n82', _target: 'n90'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n90', _target: 'n92'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n90', _target: 'n87'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n87', _target: 'n88'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n88', _target: 'n96'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n87', _target: 'n95'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n95', _target: 'n111'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n111', _target: 'n101'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n101', _target: 'n105'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n105', _target: 'n109'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n109', _target: 'n106'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n106', _target: 'n104'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n104', _target: 'n112'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n112', _target: 'n103'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n103', _target: 'n108'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n108', _target: 'n110'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n110', _target: 'n107'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n107', _target: 'n102'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n103', _target: 'n98'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n98', _target: 'n99'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n99', _target: 'n100'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n100', _target: 'n113'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n112', _target: 'n125'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n125', _target: 'n117'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n117', _target: 'n116'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n116', _target: 'n129'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n129', _target: 'n115'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n119', _target: 'n120'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n120', _target: 'n121'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n121', _target: 'n123'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n120', _target: 'n128'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n119', _target: 'n127'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n129', _target: 'n114'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n126', _target: 'n118'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n118', _target: 'n122'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n122', _target: 'n114'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n122', _target: 'n124'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n120', _target: 'n115'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n127', _target: 'n142'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n134', _target: 'n142'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n141', _target: 'n133'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n133', _target: 'n132'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n133', _target: 'n134'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n134', _target: 'n138'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n138', _target: 'n140'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n134', _target: 'n130'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n130', _target: 'n145'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n145', _target: 'n131'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n131', _target: 'n137'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n137', _target: 'n139'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n131', _target: 'n135'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n135', _target: 'n143'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n135', _target: 'n136'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n136', _target: 'n144'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n143', _target: 'n146'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n12', _target: 'n160'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n160', _target: 'n150'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n150', _target: 'n152'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n152', _target: 'n155'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n155', _target: 'n163'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n163', _target: 'n149'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n149', _target: 'n162'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n162', _target: 'n160'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n162', _target: 'n159'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n159', _target: 'n154'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n154', _target: 'n156'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n156', _target: 'n153'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n163', _target: 'n148'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n148', _target: 'n161'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n161', _target: 'n147'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n147', _target: 'n157'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n157', _target: 'n151'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n161', _target: 'n158'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n158', _target: 'n175'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n175', _target: 'n178'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n178', _target: 'n176'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n176', _target: 'n168'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n176', _target: 'n165'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n165', _target: 'n179'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n179', _target: 'n164'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n164', _target: 'n172'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n172', _target: 'n170'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n172', _target: 'n169'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n169', _target: 'n174'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n179', _target: 'n166'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n166', _target: 'n173'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n173', _target: 'n167'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n167', _target: 'n171'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n173', _target: 'n177'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n186', _target: 'n173'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n186', _target: 'n188'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n185', _target: 'n186'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n185', _target: 'n190'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n190', _target: 'n193'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n193', _target: 'n189'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n185', _target: 'n180'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n180', _target: 'n181'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n180', _target: 'n194'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n194', _target: 'n182'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n182', _target: 'n191'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n182', _target: 'n183'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n183', _target: 'n187'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n187', _target: 'n192'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n183', _target: 'n184'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n184', _target: 'n207'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n207', _target: 'n210'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n210', _target: 'n198'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n198', _target: 'n208'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n208', _target: 'n200'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n200', _target: 'n203'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n203', _target: 'n199'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n198', _target: 'n211'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n211', _target: 'n204'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n204', _target: 'n202'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n202', _target: 'n197'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n211', _target: 'n195'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n195', _target: 'n205'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n205', _target: 'n209'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n209', _target: 'n206'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n206', _target: 'n201'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n201', _target: 'n196'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n206', _target: 'n212'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n0', _target: 'n224'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n224', _target: 'n216'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n216', _target: 'n217'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n217', _target: 'n225'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n217', _target: 'n215'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n215', _target: 'n228'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n228', _target: 'n214'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n221', _target: 'n218'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n218', _target: 'n219'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n218', _target: 'n213'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n221', _target: 'n223'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n218', _target: 'n226'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n219', _target: 'n227'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n219', _target: 'n220'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n220', _target: 'n222'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n218', _target: 'n214'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n226', _target: 'n233'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n233', _target: 'n229'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n229', _target: 'n234'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n234', _target: 'n239'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n239', _target: 'n241'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n241', _target: 'n238'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n229', _target: 'n244'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n244', _target: 'n231'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n231', _target: 'n240'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n240', _target: 'n236'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n236', _target: 'n232'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n232', _target: 'n242'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n240', _target: 'n230'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n240', _target: 'n237'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n237', _target: 'n235'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n235', _target: 'n243'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n243', _target: 'n257'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n252', _target: 'n248'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n248', _target: 'n249'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n253', _target: 'n250'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n250', _target: 'n251'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n252', _target: 'n254'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n248', _target: 'n256'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n249', _target: 'n257'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n253', _target: 'n255'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n250', _target: 'n258'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n251', _target: 'n259'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n251', _target: 'n246'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n248', _target: 'n247'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n247', _target: 'n260'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n260', _target: 'n245'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n250', _target: 'n245'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n258', _target: 'n261'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n0', _target: 'n274'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n274', _target: 'n263'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n274', _target: 'n276'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n274', _target: 'n266'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n263', _target: 'n264'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n264', _target: 'n271'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n271', _target: 'n275'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n271', _target: 'n265'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n265', _target: 'n269'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n263', _target: 'n277'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n277', _target: 'n262'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n262', _target: 'n270'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n270', _target: 'n268'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n268', _target: 'n273'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n270', _target: 'n267'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n267', _target: 'n272'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n272', _target: 'n291'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n282', _target: 'n286'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n286', _target: 'n283'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n278', _target: 'n279'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n282', _target: 'n290'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n286', _target: 'n288'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n283', _target: 'n291'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n283', _target: 'n278'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n278', _target: 'n293'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n279', _target: 'n284'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n284', _target: 'n292'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n293', _target: 'n280'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n280', _target: 'n285'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n285', _target: 'n287'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n280', _target: 'n281'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n281', _target: 'n289'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n289', _target: 'n308'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n308', _target: 'n300'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n300', _target: 'n302'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n308', _target: 'n299'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n299', _target: 'n304'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n304', _target: 'n306'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n306', _target: 'n303'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n299', _target: 'n294'}}
	, {_classes: 'curve', data: {open: false, want: false, hover: false, _source: 'n294', _target: 'n295'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n295', _target: 'n309'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n309', _target: 'n296'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n296', _target: 'n298'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n296', _target: 'n305'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n305', _target: 'n301'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n301', _target: 'n297'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n297', _target: 'n307'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n307', _target: 'n310'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n273', _target: 'n314'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n225', _target: 'n317'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n317', _target: 'n322'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n322', _target: 'n319'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n322', _target: 'n318'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n318', _target: 'n314'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n314', _target: 'n324'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n314', _target: 'n313'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n313', _target: 'n326'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n326', _target: 'n311'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n311', _target: 'n316'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n316', _target: 'n312'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n316', _target: 'n325'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n316', _target: 'n321'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n321', _target: 'n323'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n323', _target: 'n320'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n320', _target: 'n315'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n323', _target: 'n335'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n335', _target: 'n331'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n331', _target: 'n327'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n327', _target: 'n337'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n337', _target: 'n341'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n341', _target: 'n338'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n338', _target: 'n333'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n333', _target: 'n328'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n327', _target: 'n343'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n343', _target: 'n329'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n329', _target: 'n342'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n342', _target: 'n330'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n330', _target: 'n332'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n332', _target: 'n340'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n342', _target: 'n339'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n339', _target: 'n334'}}
	, {_classes: '', data: {open: false, want: false, hover: false, _source: 'n334', _target: 'n336'}}
	, {_classes: 'between', data: {open: false, want: false, hover: false, _source: 'n336', _target: 'n344'}}
	, {_classes: 'between', data: {open: false, hover: false, want: false, _source: 'n192', _target: 'n353'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n353', _target: 'n351'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n351', _target: 'n356'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n356', _target: 'n359'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n353', _target: 'n350'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n350', _target: 'n355'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n355', _target: 'n358'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n358', _target: 'n354'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n354', _target: 'n347'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n347', _target: 'n360'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n360', _target: 'n345'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n345', _target: 'n353'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n360', _target: 'n346'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n346', _target: 'n357'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n357', _target: 'n349'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n349', _target: 'n352'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n352', _target: 'n348'}}
	, {_classes: 'between', data: {open: false, hover: false, want: false, _source: 'n123', _target: 'n369'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n369', _target: 'n367'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n367', _target: 'n372'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n372', _target: 'n375'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n375', _target: 'n373'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n373', _target: 'n365'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n365', _target: 'n368'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n368', _target: 'n364'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n364', _target: 'n370'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n370', _target: 'n374'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n374', _target: 'n371'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n371', _target: 'n366'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n369', _target: 'n361'}}
	, {_classes: 'curve', data: {open: false, hover: false, want: false, _source: 'n361', _target: 'n362'}}
	, {_classes: 'curve', data: {open: false, hover: false, want: false, _source: 'n363', _target: 'n361'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n370', _target: 'n363'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n363', _target: 'n376'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n376', _target: 'n362'}}
	, {_classes: '', data: {open: false, hover: false, want: false, _source: 'n362', _target: 'n373'}}
	];

var atlas =
	{ name: 'god'
	, nodes: nodesData
	, edges: edgesData
	, mX: 0, mY: 0
	, scale: 1
	, sparks: {got: {}, total: {}}
	, stat: {got: {}, total: {}}
	, group: {skill: {}, stat: {}}
	/* jshint bitwise: false */
	, _polish: 0
	, _plainData: new Array((nodesData.length >> 3) + 1)
	/* jshint bitwise: true */
	};

	atlas._plainData[0] = 128;
	return atlas;
}
