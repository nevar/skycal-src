var nodesData =
	[
		{ data:
			{ id: 'n1'
			, open: true
			, title: 'Класс: криомант'
			, description:
				'Повелитель людов, он способен играючи остудить пыл наседающих '+
				'врагов, направив против них стихию холода. В бою он предпочитает '+
				'сохранять дистанцию, замедляя противников или вовсе заключая '+
				'их в ледяной плен, мз которого не так-то просто выбраться. '+
				'А тех, кому всё же не посчастливилось подобраться поближе, '+
				'ждёт холодный приём: ледяной щит надежно защищает своего '+
				'носителя от атак.'
			, nodeImage: 'krio'
			, need: {}
			}
		, position: {x: 230, y: -380}
		, classes: 'class image krio start'
		}
	,
		{ data:
			{ id: 'n2'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 230, y: -320}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n3'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 282, y: -410}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n4'
			, open: false
			, prestige: 16
			, vit: 16
			, dex: 6
			, need: {green: 155}
			}
		, position: {x: 178, y: -410}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n5'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 133, y: -440}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n6'
			, open: false
			, prestige: 6
			, power: 6
			, dex: 4
			, need: {red: 95}
			}
		, position: {x: 169, y: -490}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n7'
			, open: false
			, prestige: 7
			, spirit: 7
			, need: {blue: 95}
			}
		, position: {x: 229, y: -490}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n8'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 289, y: -490}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n9'
			, open: false
			, prestige: 6
			, power: 6
			, dex: 4
			, need: {red: 95}
			}
		, position: {x: 95, y: -380}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n10'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 133, y: -320}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n11'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 169, y: -270}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n12'
			, open: false
			, prestige: 16
			, vit: 16
			, dex: 6
			, need: {green: 155}
			}
		, position: {x: 229, y: -270}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n13'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 289, y: -270}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n14'
			, open: false
			, prestige: 7
			, str: 7
			, need: {blue: 95}
			}
		, position: {x: 325, y: -440}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n15'
			, open: false
			, prestige: 16
			, vit: 16
			, dex: 6
			, need: {green: 155}
			}
		, position: {x: 363, y: -380}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n16'
			, open: false
			, prestige: 10
			, luck: 10
			, need: {blue: 125}
			}
		, position: {x: 325, y: -320}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n17'
			, open: true
			, title: 'Класс: Паладин'
			, description:
				'Бесстрашный защитник, обладающий универсальным набором '+
				'способностей, всегда находится в гуще сражения, принимая на '+
				'себя основную атаку неприяятеля. Сокрушительные удары его '+
				'меча способны нанести ощутимый урон и даже на время вывести '+
				'противников из боя, а сила света, подвластная паладину, позволит '+
				'не только даровать защиту союзникам, но и дать отпор врагу '+
				'на довольно большой дистанции.'
			, nodeImage: 'paladin'
			, need: {}
			}
		, position: {x: 0, y: 0}
		, classes: 'class image paladin start'
		}
	,
		{ data:
			{ id: 'n18'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 0, y: 60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n19'
			, open: false
			, prestige: 10
			, valor: 10
			, need: {blue: 125}
			}
		, position: {x: 52, y: -30}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n20'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: -52, y: -30}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n21'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: -95, y: -60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n22'
			, open: false
			, prestige: 16
			, power: 16
			, dex: 6
			, need: {green: 155}
			}
		, position: {x: -60, y: -110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n23'
			, open: false
			, prestige: 10
			, luck: 10
			, need: {blue: 125}
			}
		, position: {x: 0, y: -110}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n24'
			, open: false
			, prestige: 7
			, str: 7
			, need: {blue: 95}
			}
		, position: {x: 60, y: -110}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n25'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: -135, y: 0}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n26'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 155}
			}
		, position: {x: -96, y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n27'
			, open: false
			, prestige: 16
			, vit: 16
			, dex: 6
			, need: {red: 155}
			}
		, position: {x: -60, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n28'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 0, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n29'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 155}
			}
		, position: {x: 60, y: 110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n30'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 95, y: -60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n31'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 134, y: 0}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n32'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 95, y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n33'
			, open: true
			, title: 'Класс: Хранитель света'
			, description:
				'Милосердный хранитель всегда готов прийти на помощь нуждающимся. '+
				'Управляя силой света, хранитель оберегает своих союзников и '+
				'укрывает от атак неприятеля. Но его доброта не безгранична. '+
				'Обратив свой гнев на врага, он может нанести значительный урон, '+
				'находясь на безопасном расстоянии.'
			, nodeImage: 'light_keeper'
			, need: {}
			}
		, position: {x: 230, y: 380}
		, classes: 'class image light_keeper start'
		}
	,
		{ data:
			{ id: 'n34'
			, open: false
			, prestige: 7
			, str: 7
			, need: {blue: 95}
			}
		, position: {x: 230, y: 440}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n35'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 282, y: 350}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n36'
			, open: false
			, prestige: 16
			, vit: 16
			, dex: 6
			, need: {green: 155}
			}
		, position: {x: 178, y: 350}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n37'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {power: 125}
			}
		, position: {x: 133, y: 320}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n38'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 169, y: 270}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n39'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 229, y: 270}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n40'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 289, y: 270}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n41'
			, open: false
			, prestige: 7
			, spirit: 7
			, need: {blue: 95}
			}
		, position: {x: 95, y: 380}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n42'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 133, y: 440}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n43'
			, open: false
			, prestige: 16
			, vit: 16
			, dex: 6
			, need: {green: 155}
			}
		, position: {x: 169, y: 490}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n44'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 6
			, need: {red: 155}
			}
		, position: {x: 229, y: 490}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n45'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 289, y: 490}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n46'
			, open: false
			, prestige: 10
			, valor: 10
			, need: {blue: 125}
			}
		, position: {x: 325, y: 320}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n47'
			, open: false
			, prestige: 6
			, power: 6
			, dex: 4
			, need: {red: 95}
			}
		, position: {x: 363, y: 380}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n48'
			, open: false
			, prestige: 6
			, power: 6
			, dex: 4
			, need: {red: 95}
			}
		, position: {x: 325, y: 440}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n49'
			, open: false
			, title: 'Талант: Искусный маневр'
			, description:
				'Применение рывка создаёт защитный барьер, который поглощает '+
				'урон, равный 4/6% максимального здоровья персонажа в '+
				'течение 3 секунд.'
			, nodeImage: 'maneuver'
			, prestige: 40
			, need: {blue: 200}
			}
		, position: {x: 460, y: 0}
		, classes: 'skill image maneuver'
		}
	,
		{ data:
			{ id: 'n50'
			, open: false
			, prestige: 16
			, vit: 16
			, dex: 6
			, need: {green: 155}
			}
		, position: {x: 365, y: -60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n51'
			, open: false
			, prestige: 10
			, luck: 10
			, need: {blue: 125}
			}
		, position: {x: 400, y: -110}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n52'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 460, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n53'
			, open: false
			, prestige: 6
			, power: 6
			, dex: 4
			, need: {red: 95}
			}
		, position: {x: 520, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n54'
			, open: false
			, prestige: 7
			, str: 7
			, need: {blue: 95}
			}
		, position: {x: 325, y: 0}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n55'
			, open: false
			, prestige: 8
			, vit: 8
			, dex: 4
			, need: {green: 95}
			}
		, position: {x: 364, y: 60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n56'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 400, y: 110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n57'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 460, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n58'
			, open: false
			, prestige: 10
			, luck: 10
			, need: {blue: 125}
			}
		, position: {x: 520, y: 110}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n59'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 555, y: -60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n60'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 594, y: 0}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n61'
			, open: false
			, prestige: 8
			, vit: 8
			, dex: 4
			, need: {green: 95}
			}
		, position: {x: 555, y: 60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n62'
			, open: false
			, prestige: 10
			, str: 10
			, need: {blue: 125}
			}
		, position: {x: 327, y: -84}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n63'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 327, y: 84}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n64'
			, open: false
			, prestige: 13
			, spirit: 13
			, need: {blue: 155}
			}
		, position: {x: 593, y: 84}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n65'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 593, y: -84}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n66'
			, open: false
			, title: 'Вершина равновесия'
			, description: 'Может быть усилена с помощью эфирных ядер.'
			, nodeImage: 'balance'
			, need: {}
			}
		, position: {x: 920, y: 0}
		, classes: 'skill image balance'
		}
	,
		{ data:
			{ id: 'n67'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 920, y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n68'
			, open: false
			, prestige: 16
			, vit: 16
			, dex: 6
			, need: {green: 155}
			}
		, position: {x: 972, y: -30}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n69'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 868, y: -30}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n70'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 860, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n71'
			, open: false
			, prestige: 10
			, luck: 10
			, need: {blue: 125}
			}
		, position: {x: 980, y: -110}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n72'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 785, y: 0}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n73'
			, open: false
			, prestige: 8
			, vit: 8
			, dex: 4
			, need: {green: 95}
			}
		, position: {x: 860, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n74'
			, open: false
			, prestige: 7
			, valor: 7
			, need: {blue: 95}
			}
		, position: {x: 980, y: 110}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n75'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 155}
			}
		, position: {x: 1054, y: 0}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n76'
			, open: false
			, prestige: 9
			, power: 9
			, dex: 5
			, need: {red: 125}
			}
		, position: {x: 787, y: -84}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n77'
			, open: false
			, prestige: 6
			, power: 6
			, dex: 4
			, need: {red: 95}
			}
		, position: {x: 787, y: 84}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n78'
			, open: false
			, prestige: 16
			, vit: 16
			, dex: 6
			, need: {green: 155}
			}
		, position: {x: 1053, y: 84}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n79'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 1053, y: -84}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n80'
			, open: false
			, prestige: 10
			, valor: 10
			, need: {blue: 125}
			}
		, position: {x: 920, y: 157}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n81'
			, open: false
			, prestige: 16
			, vit: 16
			, dex: 6
			, need: {green: 155}
			}
		, position: {x: 920, y: -157}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n82'
			, open: false
			, title: 'Талант: Интенсивность импульса'
			, description:
				'Импульсный урон увеличен на 10% за каждый уровень этого символа.'
			, nodeImage: 'spirit'
			, prestige: 40
			, need: {blue: 200}
			}
		, position: {x: 920, y: 450}
		, classes: 'skill image impuls'
		}
	,
		{ data:
			{ id: 'n83'
			, open: false
			, prestige: 20
			, spirit: 20
			, need: {blue: 185}
			}
		, position: {x: 920, y: 510}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n84'
			, open: false
			, prestige: 15
			, spirit: 15
			, need: {blue: 150}
			}
		, position: {x: 972, y: 420}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n85'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 868, y: 420}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n86'
			, open: false
			, prestige: 24
			, power: 24
			, dex: 7
			, need: {green: 185}
			}
		, position: {x: 823, y: 390}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n87'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 115}
			}
		, position: {x: 859, y: 340}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n88'
			, open: false
			, prestige: 20
			, spirit: 20
			, need: {blue: 185}
			}
		, position: {x: 919, y: 340}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n89'
			, open: false
			, prestige: 10
			, power: 10
			, dex: 5
			, need: {red: 115}
			}
		, position: {x: 979, y: 340}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n90'
			, open: false
			, prestige: 16
			, power: 16
			, dex: 7
			, need: {red: 185}
			}
		, position: {x: 823, y: 510}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n91'
			, open: false
			, prestige: 24
			, vit: 24
			, dex: 7
			, need: {green: 185}
			}
		, position: {x: 859, y: 560}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n92'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 979, y: 560}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n93'
			, open: false
			, prestige: 20
			, spirit: 20
			, need: {blue: 185}
			}
		, position: {x: 1015, y: 390}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n94'
			, open: false
			, prestige: 15
			, spirit: 15
			, need: {blue: 150}
			}
		, position: {x: 1015, y: 510}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n95'
			, open: false
			, prestige: 18
			, vit: 18
			, dex: 8
			, need: {green: 150}
			}
		, position: {x: 920, y: 607}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n96'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 920, y: 293}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n97'
			, open: false
			, title: 'Талант: Максимальная отдача'
			, description:
				'Критический урон увеличен на 10% за каждый уровень этого '+
				'символа.'
			, nodeImage: 'luck'
			, prestige: 40
			, need: {blue: 200}
			}
		, position: {x: 920, y: -450}
		, classes: 'skill image max_return'
		}
	,
		{ data:
			{ id: 'n98'
			, open: false
			, prestige: 20
			, luck: 20
			, need: {blue: 185}
			}
		, position: {x: 920, y: -390}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n99'
			, open: false
			, prestige: 24
			, vit: 24
			, dex: 7
			, need: {green: 185}
			}
		, position: {x: 972, y: -480}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n100'
			, open: false
			, prestige: 20
			, luck: 20
			, need: {blue: 185}
			}
		, position: {x: 868, y: -480}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n101'
			, open: false
			, prestige: 18
			, vit: 18
			, dex: 6
			, need: {green: 150}
			}
		, position: {x: 823, y: -510}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n102'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 859, y: -560}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n103'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 919, y: -560}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n104'
			, open: false
			, prestige: 10
			, luck: 10
			, need: {blue: 115}
			}
		, position: {x: 979, y: -560}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n105'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 823, y: -390}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n106'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 115}
			}
		, position: {x: 859, y: -340}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n107'
			, open: false
			, prestige: 20
			, luck: 20
			, need: {blue: 185}
			}
		, position: {x: 979, y: -340}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n108'
			, open: false
			, prestige: 10
			, luck: 10
			, need: {blue: 115}
			}
		, position: {x: 1015, y: -510}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n109'
			, open: false
			, prestige: 10
			, luck: 10
			, need: {blue: 115}
			}
		, position: {x: 1015, y: -390}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n110'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 920, y: -293}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n111'
			, open: false
			, prestige: 16
			, power: 16
			, dex: 7
			, need: {red: 185}
			}
		, position: {x: 920, y: -607}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n112'
			, open: false
			, title: 'Форма бога'
			, description:
				'В божественной форме бессмертный приобретает дополнительные '+
				'способности и становится гараздо больше. Меняеться его '+
				'восприятие окружающего мира и самого себя. И даже когда он '+
				'выходит из этого состояния, отголосок этих по-настоящему '+
				'божественных, сверхъестественных ощущений, пережитых в '+
				'божественной форме, остаётся с ним навсегда. На поле боя '+
				'боги в одиночку способны переломить ход сражения.</p>'+
				'<p>Для открытия необходимо завершить сюжетное задание '+
				'"Новый бог" (для этого необходимо по меньшей мере 30500 '+
				'престижа).'
			, need: {god: 1}
			}
		, position: {x: 1380, y: 0}
		, classes: 'skill image god'
		}
	,
		{ data:
			{ id: 'n113'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1380,  y: 60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n114'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1432, y: -30}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n115'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1328, y: -30}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n116'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: 1285, y: -60}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n117'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1285, y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n118'
			, open: false
			, prestige: 35
			, spirit: 35
			, need: {blue: 325}
			}
		, position: {x: 1475, y: 60}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n119'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1475, y: -60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n120'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1319, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n121'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1441, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n122'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1319, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n123'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1441, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n124'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 1380, y: -110}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n125'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 1380, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n126'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1380, y: -157}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n127'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 1380, y: 157}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n128'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1247, y: -84}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n129'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1247, y: 84}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n130'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1513, y: 84}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n131'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1513, y: -84}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n132'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {blue: 650}
			}
		, position: {x: 1245, y: 0}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n133'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1515, y: 0}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n134'
			, open: false
			, title: 'Талант: Элемент неожиданности'
			, description:
				'В течение первых 8 секунд боя исходящий урон увеличен на 12% '+
				'за каждый уровень этого символа.'
			, nodeImage: 'surprise'
			, prestige: 40
			, need: {blue: 200}
			}
		, position: {x: 690, y: -760}
		, classes: 'skill image surprise'
		}
	,
		{ data:
			{ id: 'n135'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 115}
			}
		, position: {x: 690,  y: -700}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n136'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 115}
			}
		, position: {x: 742, y: -790}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n137'
			, open: false
			, prestige: 8
			, power: 8
			, dex: 5
			, need: {red: 115}
			}
		, position: {x: 638, y: -790}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n138'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 629, y: -870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n139'
			, open: false
			, prestige: 24
			, vit: 24
			, dex: 7
			, need: {green: 185}
			}
		, position: {x: 751, y: -870}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n141'
			, open: false
			, prestige: 20
			, valor: 20
			, need: {green: 185}
			}
		, position: {x: 629, y: -650}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n142'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 751, y: -650}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n143'
			, open: false
			, prestige: 24
			, vit: 24
			, dex: 27
			, need: {green: 185}
			}
		, position: {x: 690, y: -917}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n144'
			, open: false
			, prestige: 15
			, valor: 15
			, need: {blue: 150}
			}
		, position: {x: 690, y: -603}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n145'
			, open: false
			, prestige: 15
			, spirit: 15
			, need: {blue: 150}
			}
		, position: {x: 557, y: -844}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n146'
			, open: false
			, prestige: 15
			, luck: 15
			, need: {blue: 150}
			}
		, position: {x: 557, y: -676}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n147'
			, open: false
			, prestige: 24
			, vit: 24
			, dex: 7
			, need: {green: 185}
			}
		, position: {x: 823, y: -676}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n148'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 823, y: -844}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n149'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 555, y: -760}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n150'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 825, y: -760}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n151'
			, open: false
			, title: 'Талант: Стремительная атака'
			, description:
				'В тесение 3 секунд после применения рывка наносимый урон '+
				'увеличен на 6% за каждый уровень этого символа.'
			, nodeImage: 'rush'
			, prestige: 40
			, need: {blue: 200}
			}
		, position: {x: 230, y: -760}
		, classes: 'skill image rush'
		}
	,
		{ data:
			{ id: 'n152'
			, open: false
			, prestige: 20
			, valor: 20
			, need: {blue: 185}
			}
		, position: {x: 230,  y: -700}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n153'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 282, y: -790}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n154'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 115}
			}
		, position: {x: 178, y: -790}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n155'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 135, y: -820}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n156'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 135, y: -700}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n157'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 115}
			}
		, position: {x: 325, y: -700}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n158'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 5
			, need: {green: 115}
			}
		, position: {x: 325, y: -820}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n159'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 230, y: -870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n160'
			, open: false
			, prestige: 18
			, vit: 18
			, dex: 6
			, need: {green: 150}
			}
		, position: {x: 230, y: -650}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n161'
			, open: false
			, prestige: 20
			, valor: 20
			, need: {blue: 185}
			}
		, position: {x: 230, y: -917}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n162'
			, open: false
			, prestige: 16
			, power: 16
			, dex: 7
			, need: {red: 185}
			}
		, position: {x: 230, y: -603}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n163'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 115}
			}
		, position: {x: 97, y: -844}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n164'
			, open: false
			, prestige: 15
			, valor: 15
			, need: {blue: 150}
			}
		, position: {x: 97, y: -676}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n165'
			, open: false
			, prestige: 15
			, str: 15
			, need: {blue: 150}
			}
		, position: {x: 363, y: -676}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n166'
			, open: false
			, prestige: 16
			, power: 16
			, dex: 7
			, need: {red: 185}
			}
		, position: {x: 363, y: -844}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n167'
			, open: false
			, title: 'Талант: Инерция'
			, description:
				'В течение 3 секунд после применения рывка скорость передвижения '+
				'увеличена на 12% за каждый уровень этого символа.'
			, nodeImage: 'inertia'
			, prestige: 40
			, need: {blue: 200}
			}
		, position: {x: 690, y: 760}
		, classes: 'skill image inertia'
		}
	,
		{ data:
			{ id: 'n168'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 115}
			}
		, position: {x: 690,  y: 820}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n169'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 742, y: 730}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n170'
			, open: false
			, prestige: 8
			, power: 8
			, dex: 5
			, need: {red: 115}
			}
		, position: {x: 638, y: 730}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n171'
			, open: false
			, prestige: 16
			, power: 16
			, dex: 7
			, need: {red: 185}
			}
		, position: {x: 595, y: 700}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n172'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 595, y: 820}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n173'
			, open: false
			, prestige: 8
			, power: 8
			, dex: 5
			, need: {red: 115}
			}
		, position: {x: 785, y: 820}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n174'
			, open: false
			, prestige: 18
			, vit: 18
			, dex: 6
			, need: {green: 150}
			}
		, position: {x: 785, y: 700}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n175'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 690, y: 650}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n176'
			, open: false
			, prestige: 8
			, power: 8
			, dex: 5
			, need: {red: 115}
			}
		, position: {x: 690, y: 870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n177'
			, open: false
			, prestige: 24
			, vit: 24
			, dex: 7
			, need: {green: 185}
			}
		, position: {x: 690, y: 603}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n178'
			, open: false
			, prestige: 24
			, vit: 24
			, dex: 7
			, need: {green: 185}
			}
		, position: {x: 690, y: 917}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n179'
			, open: false
			, prestige: 24
			, vit: 24
			, dex: 7
			, need: {green: 185}
			}
		, position: {x: 557, y: 676}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n180'
			, open: false
			, prestige: 18
			, vit: 18
			, dex: 6
			, need: {green: 150}
			}
		, position: {x: 557, y: 844}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n181'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 823, y: 844}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n182'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 823, y: 676}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n183'
			, open: false
			, title: 'Талант: Удачное попадание'
			, description:
				'Раз в 2 секунды вероятность критической атаки увеличивается на '+
				'1% за каждый уровень этого символа.</p>'+
				'<p>При нанесении критической атаки эффект сбрасываеться и '+
				'начинает накапливаться заново.'
			, nodeImage: 'luck_hit'
			, prestige: 40
			, need: {blue: 200}
			}
		, position: {x: 230, y: 760}
		, classes: 'skill image luck_hit'
		}
	,
		{ data:
			{ id: 'n184'
			, open: false
			, prestige: 24
			, vit: 24
			, dex: 7
			, need: {green: 185}
			}
		, position: {x: 135, y: 700}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n185'
			, open: false
			, prestige: 18
			, vit: 18
			, dex: 6
			, need: {green: 150}
			}
		, position: {x: 135, y: 820}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n186'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 325, y: 820}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n187'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 115}
			}
		, position: {x: 325, y: 700}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n188'
			, open: false
			, prestige: 20
			, str: 20
			, need: {blue: 185}
			}
		, position: {x: 169, y: 650}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n189'
			, open: false
			, prestige: 15
			, str: 15
			, need: {blue: 150}
			}
		, position: {x: 291, y: 650}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n190'
			, open: false
			, prestige: 8
			, power: 8
			, dex: 5
			, need: {red: 115}
			}
		, position: {x: 169, y: 870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n191'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 291, y: 870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n192'
			, open: false
			, prestige: 16
			, power: 16
			, dex: 7
			, need: {red: 185}
			}
		, position: {x: 230, y: 650}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n193'
			, open: false
			, prestige: 24
			, vit: 24
			, dex: 7
			, need: {green: 185}
			}
		, position: {x: 230, y: 870}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n194'
			, open: false
			, prestige: 15
			, luck: 15
			, need: {blue: 150}
			}
		, position: {x: 97, y: 676}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n195'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 115}
			}
		, position: {x: 97, y: 844}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n196'
			, open: false
			, prestige: 18
			, vit: 18
			, dex: 6
			, need: {green: 150}
			}
		, position: {x: 363, y: 844}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n197'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 363, y: 676}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n198'
			, open: false
			, prestige: 16
			, power: 16
			, dex: 7
			, need: {red: 185}
			}
		, position: {x: 95, y: 760}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n199'
			, open: false
			, prestige: 15
			, spirit: 15
			, need: {blue: 150}
			}
		, position: {x: 365, y: 760}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n200'
			, open: false
			, title: 'Вершина разрушения'
			, description: 'Может быть усилена с помощью эфирных ядер.'
			, nodeImage: 'destroy'
			, need: {}
			}
		, position: {x: -230, y: -760}
		, classes: 'skill image destroy'
		}
	,
		{ data:
			{ id: 'n201'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: -325, y: -820}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n202'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: -325, y: -700}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n203'
			, open: false
			, prestige: 17
			, str: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: -135, y: -700}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n204'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: -135, y: -820}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n205'
			, open: false
			, prestige: 35
			, str: 35
			, need: {blue: 325}
			}
		, position: {x: -291, y: -870}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n206'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: -169, y: -870}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n207'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: -291, y: -650}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n208'
			, open: false
			, prestige: 47
			, valor: 47
			, need: {blue: 400}
			}
		, position: {x: -169, y: -650}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n209'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: -230, y: -870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n210'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: -230, y: -650}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n211'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: -363, y: -844}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n212'
			, open: false
			, prestige: 35
			, luck: 35
			, need: {blue: 325}
			}
		, position: {x: -363, y: -676}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n213'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: -97, y: -676}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n214'
			, open: false
			, prestige: 47
			, luck: 47
			, need: {blue: 400}
			}
		, position: {x: -97, y: -844}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n215'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: -365, y: -760}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n216'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: -95, y: -760}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n217'
			, open: false
			, title: 'Талант: Парализующий шок'
			, description:
				'Использование атакующих способностей позволяет применить '+
				'умение "Шок".</p>'+
				'<p>"Паралиизующий шок" оглушает выбранного противника на 3 '+
				'секунды. Время перезарядки - 25 секунд.</p>'+
				'<p>При совместном использовании с символом "Болевой шок" оба '+
				'эффекта наступают одновременно, а перезарядка ускорена на 5 '+
				'секунд.'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: -230, y: -1200}
		, classes: 'skill image shock'
		}
	,
		{ data:
			{ id: 'n218'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -230,  y: -1140}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n219'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -178, y: -1230}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n220'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -282, y: -1230}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n221'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -325, y: -1260}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n222'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -325, y: -1140}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n223'
			, open: false
			, prestige: 38
			, spirit: 38
			, need: {blue: 490}
			}
		, position: {x: -135, y: -1140}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n224'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -135, y: -1260}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n225'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -230, y: -1310}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n226'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -230, y: -1090}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n227'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -230, y: -1357}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n228'
			, open: false
			, prestige: 80
			, valor: 80
			, need: {revelation: 300}
			}
		, position: {x: -230, y: -1043}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n229'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -363, y: -1284}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n230'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -363, y: -1116}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n231'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -97, y: -1116}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n232'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -97, y: -1284}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n233'
			, open: false
			, title: 'Талант: Блистательный триумф'
			, description:
				'Применение добивающего удара увеличивает исходящий урон на 15% '+
				'и уменьшает входящий урон на 15%. Длительность эффекта - 8 '+
				'секунд за каждый уровень этого символа.'
			, nodeImage: 'triumph'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 350, y: -1260}
		, classes: 'skill image triumph'
		}
	,
		{ data:
			{ id: 'n234'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 255, y: -1320}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n235'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 255, y: -1200}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n236'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 445, y: -1200}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n237'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 445, y: -1320}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n238'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 289, y: -1370}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n239'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 411, y: -1370}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n240'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 289, y: -1150}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n241'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 411, y: -1150}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n242'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 350, y: -1370}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n243'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 350, y: -1150}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n244'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 217, y: -1344}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n245'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red:810}
			}
		, position: {x: 217, y: -1176}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n246'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 483, y: -1176}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n247'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 483, y: -1344}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n248'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 215, y: -1260}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n249'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 485, y: -1260}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n250'
			, open: false
			, title: 'Вершина разрушения'
			, description: 'Может быть усилена с помощью эфирных ядер.'
			, nodeImage: 'destroy'
			, need: {}
			}
		, position: {x: 1380, y: -600}
		, classes: 'skill image destroy'
		}
	,
		{ data:
			{ id: 'n251'
			, open: false
			, prestige: 18
			, vit: 18
			, dex: 8
			, need: {green: 150}
			}
		, position: {x: 1380,  y: -540}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n252'
			, open: false
			, prestige: 8
			, power: 8
			, dex: 5
			, need: {red: 115}
			}
		, position: {x: 1432, y: -630}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n253'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 1328, y: -630}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n254'
			, open: false
			, prestige: 8
			, power: 8
			, dex: 5
			, need: {red: 115}
			}
		, position: {x: 1285, y: -660}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n255'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 1285, y: -540}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n256'
			, open: false
			, prestige: 18
			, vit: 18
			, dex: 6
			, need: {green: 150}
			}
		, position: {x: 1475, y: -540}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n257'
			, open: false
			, prestige: 15
			, valor: 15
			, need: {blue: 150}
			}
		, position: {x: 1475, y: -660}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n258'
			, open: false
			, prestige: 18
			, vit: 18
			, dex: 6
			, need: {green: 150}
			}
		, position: {x: 1380, y: -710}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n259'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 115}
			}
		, position: {x: 1380, y: -490}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n260'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 1380, y: -757}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n261'
			, open: false
			, prestige: 16
			, power: 16
			, dex: 7
			, need: {red: 185}
			}
		, position: {x: 1380, y: -443}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n262'
			, open: false
			, prestige: 20
			, str: 20
			, need: {blue: 185}
			}
		, position: {x: 1247, y: -684}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n263'
			, open: false
			, prestige: 8
			, power: 8
			, dex: 5
			, need: {red: 115}
			}
		, position: {x: 1247, y: -516}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n264'
			, open: false
			, prestige: 24
			, vit: 24
			, dex: 7
			, need: {blue: 185}
			}
		, position: {x: 1513, y: -516}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n265'
			, open: false
			, prestige: 15
			, luck: 15
			, need: {blue: 150}
			}
		, position: {x: 1513, y: -684}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n266'
			, open: false
			, title: 'Талант: Максимальная отдача'
			, description:
				'Критический урон увеличен на 10% за каждый уровень этого '+
				'символа.'
			, nodeImage: 'luck'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 1380, y: -980}
		, classes: 'skill image max_return'
		}
	,
		{ data:
			{ id: 'n267'
			, open: false
			, prestige: 35
			, luck: 35
			, need: {blue: 325}
			}
		, position: {x: 1285, y: -1040}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n268'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 1285, y: -920}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n269'
			, open: false
			, prestige: 23
			, luck: 23
			, need: {blue: 240}
			}
		, position: {x: 1475, y: -920}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n270'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1475, y: -1040}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n271'
			, open: false
			, prestige: 47
			, luck: 47
			, need: {blue: 400}
			}
		, position: {x: 1319, y: -1090}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n272'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 1441, y: -1090}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n273'
			, open: false
			, prestige: 35
			, luck: 35
			, need: {blue: 325}
			}
		, position: {x: 1319, y: -870}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n274'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1441, y: -870}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n275'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 1380, y: -1090}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n276'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1380, y: -870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n277'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 1247, y: -1064}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n278'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1247, y: -896}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n279'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1513, y: -896}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n280'
			, open: false
			, prestige: 35
			, luck: 35
			, need: {blue: 325}
			}
		, position: {x: 1513, y: -1064}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n281'
			, open: false
			, prestige: 47
			, luck: 47
			, need: {blue: 400}
			}
		, position: {x: 1245, y: -980}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n282'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1515, y: -980}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n283'
			, open: false
			, title: 'Класс: Кинетик'
			, description:
				'Кинетик, оперируя особым типом энергии, способен навести '+
				'настоящий хаос в стройных рядах противника. Он может не только '+
				'вырывать из землт неподъёмные булыжники, чтобы импользовать их '+
				'как снаряды для етания, но и контролировать передвижения '+
				'противников по полю боя, изменяя потоки гравитационных полей. '+
				'Помимо всего этого, кинетик также способен защитить своих '+
				'союзников, укрыв из энергетическим полем.'
			, nodeImage: 'kinetic'
			, need: {transformation: 300}
			}
		, position: {x: 1380, y: -1360}
		, classes: 'skill image kinetic'
		}
	,
		{ data:
			{ id: 'n284'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1380,  y: -1300}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n285'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1432, y: -1390}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n286'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 1328, y: -1390}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n287'
			, open: false
			, prestige: 23
			, valor: 23
			, need: {blue: 240}
			}
		, position: {x: 1285, y: -1420}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n288'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1285, y: -1300}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n289'
			, open: false
			, prestige: 35
			, valor: 35
			, need: {blue: 325}
			}
		, position: {x: 1475, y: -1300}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n290'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1475, y: -1420}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n291'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 1319, y: -1470}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n292'
			, open: false
			, prestige: 47
			, valor: 47
			, need: {blue: 400}
			}
		, position: {x: 1441, y: -1470}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n293'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1319, y: -1250}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n294'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 1441, y: -1250}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n295'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 1380, y: -1470}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n296'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1380, y: -1250}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n297'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 1245, y: -1360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n298'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1515, y: -1360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n299'
			, open: false
			, title: 'Талант: Защитный рефлекс'
			, description:
				'Персонаж получает на 10% меньше урона за каждый уровень этого '+
				'символа, если находится под эффектос оглушения, страха, '+
				'ослепления или обездвиживания.</p>'+
				'Персонаж получает на 3% меньше урона за каждый уровень этого '+
				'символа, если находится под эффектом замедления.'
			, nodeImage: 'reflex'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 960, y: -980}
		, classes: 'skill image reflex'
		}
	,
		{ data:
			{ id: 'n300'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 960,  y: -920}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n301'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 1012, y: -1010}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n302'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 908, y: -1010}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n303'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 865, y: -1040}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n304'
			, open: false
			, prestige: 22
			, power: 22
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 865, y: -920}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n305'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1055, y: -920}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n306'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1055, y: -1040}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n307'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 899, y: -1090}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n308'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1021, y: -1090}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n309'
			, open: false
			, prestige: 30
			, majesty: 140
			, need: {blue: 325}
			}
		, position: {x: 899, y: -870}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n310'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1021, y: -870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n311'
			, open: false
			, prestige: 30
			, majesty: 140
			, need: {blue: 325}
			}
		, position: {x: 960, y: -1090}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n312'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 960, y: -870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n313'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 825, y: -980}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n314'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1095, y: -980}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n315'
			, open: false
			, title: 'Вершина созидания'
			, description: 'Может быть усилена с помощью эфирных ядер.'
			, nodeImage: 'create'
			, need: {}
			}
		, position: {x: 820, y: -1360}
		, classes: 'skill image create'
		}
	,
		{ data:
			{ id: 'n316'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {geen: 490}
			}
		, position: {x: 820,  y: -1300}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n317'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 872, y: -1390}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n318'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 768, y: -1390}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n319'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 725, y: -1420}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n320'
			, open: false
			, prestige: 38
			, str: 38
			, need: {blue: 490}
			}
		, position: {x: 725, y: -1300}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n321'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 915, y: -1300}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n322'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 915, y: -1420}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n323'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 759, y: -1470}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n324'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 881, y: -1470}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n325'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 759, y: -1250}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n326'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 881, y: -1250}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n327'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 820, y: -1470}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n328'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 820, y: -1517}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n329'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 820, y: -1203}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n330'
			, open: false
			, title: 'Талант: Отчаянное сопротивление'
			, description:
				'Получаемые эффекты замедления ослаблены на 15% за каждый '+
				'уровень этого символа.'
			, nodeImage: 'resistance'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 1800, y: -980}
		, classes: 'skill image resist'
		}
	,
		{ data:
			{ id: 'n331'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1800,  y: -920}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n332'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 112
			, need: {red: 325}
			}
		, position: {x: 1852, y: -1010}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n333'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 1748, y: -1010}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n334'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 1739, y: -1090}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n335'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1861, y: -1090}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n336'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1739, y: -870}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n337'
			, open: false
			, prestige: 27
			, vit: 27
			, dex:9
			, need: {green: 240}
			}
		, position: {x: 1861, y: -870}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n338'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1800, y: -1137}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n339'
			, open: false
			, prestige: 47
			, valor: 47
			, need: {blue: 400}
			}
		, position: {x: 1800, y: -823}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n340'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1667, y: -1064}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n341'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 1667, y: -896}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n342'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1933, y: -896}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n343'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1933, y: -1064}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n344'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 1665, y: -980}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n345'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1935, y: -980}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n346'
			, open: false
			, title: 'Талант: Тактическая защита'
			, description:
				'Защита в ближнем бою увеличена на 5% за каждый уровень этого '+
				'символа.</p>'+
				'<p>Защита в дальнем бою увеличена на 5% за каждый уровень '+
				'этого символа.'
			, nodeImage: 'defence'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: 1940, y: -1360}
		, classes: 'skill image defence'
		}
	,
		{ data:
			{ id: 'n347'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 1940,  y: -1300}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n348'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1992, y: -1390}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n349'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: 1888, y: -1390}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n350'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 1845, y: -1420}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n351'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 1845, y: -1300}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n352'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 2035, y: -1300}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n353'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 2035, y: -1420}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n354'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1879, y: -1470}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n355'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 2001, y: -1470}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n356'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 1879, y: -1250}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n357'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 2001, y: -1250}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n358'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1940, y: -1470}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n359'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 1940, y: -1517}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n360'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 1940, y: -1203}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n361'
			, open: false
			, title: 'Талант: Мобилизация'
			, description:
				'Дополнительный урон увеличен на 10% за каждый уровень этого '+
				'символа.'
			, nodeImage: 'valor'
			, prestige: 40
			, need: {blue: 200}
			}
		, position: {x: 1840, y: -450}
		, classes: 'skill image mobilization'
		}
	,
		{ data:
			{ id: 'n362'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1840,  y: -390}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n363'
			, open: false
			, prestige: 35
			, valor: 35
			, need: {blue: 325}
			}
		, position: {x: 1892, y: -480}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n364'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 1788, y: -480}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n365'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1745, y: -510}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n366'
			, open: false
			, prestige: 23
			, valor: 23
			, need: {blue: 240}
			}
		, position: {x: 1745, y: -390}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n367'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1935, y: -390}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n368'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 1935, y: -510}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n369'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1779, y: -560}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n370'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1901, y: -560}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n371'
			, open: false
			, prestige: 47
			, valor: 47
			, need: {blue: 400}
			}
		, position: {x: 1779, y: -340}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n372'
			, open: false
			, prestige: 47
			, valor: 47
			, need: {blue: 400}
			}
		, position: {x: 1901, y: -340}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n373'
			, open: false
			, prestige: 35
			, valor: 6
			, need: {blue: 325}
			}
		, position: {x: 1840, y: -560}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n374'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1840, y: -340}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n375'
			, open: false
			, prestige: 35
			, valor: 35
			, need: {blue: 325}
			}
		, position: {x: 1705, y: -450}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n376'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1975, y: -450}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n377'
			, open: false
			, title: 'Талант: Призыв окулата'
			, description:
				'Применение атакующих умений в бою с некоторой вероятностью '+
				'призовет окулата, который будет сражаться на стороне '+
				'персонажа в течение 18/25 секунд.'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: 1840, y: 0}
		, classes: 'skill image okulat'
		}
	,
		{ data:
			{ id: 'n378'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 1840,  y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n379'
			, open: false
			, prestige: 23
			, valor: 23
			, need: {blue: 240}
			}
		, position: {x: 1892, y: -30}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n380'
			, open: false
			, prestige: 23
			, spirit: 23
			, need: {blue: 240}
			}
		, position: {x: 1788, y: -30}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n381'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1745, y: -60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n382'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1745, y: 60}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n383'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1935, y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n384'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1935, y: -60}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n385'
			, open: false
			, prestige: 35
			, valor: 35
			, need: {blue: 325}
			}
		, position: {x: 1779, y: -110}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n386'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 1901, y: -110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n387'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 1779, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n388'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1901, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n389'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1840, y: -110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n390'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1840, y: -157}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n391'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 1840, y: 157}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n392'
			, open: false
			, title: 'Класс: Мастер теней'
			, description:
				'Этот коварный убийца, появляясь из ниоткуда и исчезая в никуда, '+
				'способен в два счета разделаться с ничего не подозревающей '+
				'жертвой. Сливаясь с тенями, он и сам становится одной из них, '+
				'проскальзывая незамесенным меж врагов и оставляя им лишь '+
				'ощущение надвигающейся опасности и холодок неминуемой смерти. '+
				'Его основное оружие - пара острых как лезвие клинков, но у '+
				'него в рукавах припрятано ещё немало козырей, которые помогут '+
				'уничтожить противника или благоразумно ретироваться, если бой '+
				'станет слишком жарким.'
			, nodeImage: 'rouge'
			, need: {transformation: 300}
			}
		, position: {x: 2070, y: -760}
		, classes: 'class image rouge'
		}
	,
		{ data:
			{ id: 'n393'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 2070,  y: -700}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n394'
			, open: false
			, prestige: 23
			, str: 23
			, need: {blue: 240}
			}
		, position: {x: 2122, y: -790}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n395'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2018, y: -790}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n396'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 1975, y: -820}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n397'
			, open: false
			, prestige: 23
			, luck: 23
			, need: {blue: 240}
			}
		, position: {x: 1975, y: -700}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n398'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2165, y: -700}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n399'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 2165, y: -820}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n400'
			, open: false
			, prestige: 47
			, spirit: 47
			, need: {blue: 400}
			}
		, position: {x: 2009, y: -870}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n401'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 2131, y: -870}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n402'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 2009, y: -650}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n403'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2131, y: -650}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n404'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 2070, y: -870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n405'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 2070, y: -650}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n406'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1935, y: -760}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n407'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2205, y: -760}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n408'
			, open: false
			, title: 'Вершина созидания'
			, description: 'Может быть усилена с помощью эфирных ядер.'
			, nodeImage: 'create'
			, need: {}
			}
		, position: {x: 1380, y: 600}
		, classes: 'skill image create'
		}
	,
		{ data:
			{ id: 'n409'
			, open: false
			, prestige: 8
			, power: 8
			, dex: 5
			, need: {red: 115}
			}
		, position: {x: 1380,  y: 660}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n410'
			, open: false
			, prestige: 24
			, vit: 24
			, dex: 7
			, need: {green: 185}
			}
		, position: {x: 1432, y: 570}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n411'
			, open: false
			, prestige: 12
			, vit: 12
			, dex: 5
			, need: {green: 125}
			}
		, position: {x: 1328, y: 570}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n412'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 1319, y: 490}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n413'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 150}
			}
		, position: {x: 1441, y: 490}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n414'
			, open: false
			, prestige: 18
			, vit: 18
			, dex: 6
			, need: {green: 150}
			}
		, position: {x: 1319, y: 710}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n415'
			, open: false
			, prestige: 8
			, power: 8
			, dex: 5
			, need: {red: 115}
			}
		, position: {x: 1441, y: 710}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n416'
			, open: false
			, prestige: 24
			, vit: 24
			, dex: 7
			, need: {green: 185}
			}
		, position: {x: 1380, y: 443}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n417'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 1380, y: 757}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n418'
			, open: false
			, prestige: 12
			, power: 12
			, dex: 6
			, need: {red: 155}
			}
		, position: {x: 1247, y: 516}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n419'
			, open: false
			, prestige: 16
			, power: 16
			, dex: 7
			, need: {red: 185}
			}
		, position: {x: 1247, y: 684}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n420'
			, open: false
			, prestige: 8
			, power: 8
			, dex: 5
			, need: {red: 115}
			}
		, position: {x: 1513, y: 684}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n421'
			, open: false
			, prestige: 18
			, vit: 18
			, dex: 6
			, need: {green: 150}
			}
		, position: {x: 1513, y: 516}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n422'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 1245, y: 600}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n423'
			, open: false
			, prestige: 24
			, vit: 24
			, dex: 7
			, need: {green: 185}
			}
		, position: {x: 1515, y: 600}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n424'
			, open: false
			, title: 'Талант: Предельная сила'
			, description:
				'Влияние показателя силы на базовый урон увеличено на 10% за '+
				'каждый уровень этого символа.'
			, nodeImage: 'str'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 1380, y: 980}
		, classes: 'skill image max_str'
		}
	,
		{ data:
			{ id: 'n425'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1380,  y: 1040}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n426'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1432, y: 950}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n427'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1328, y: 950}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n428'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1285, y: 920}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n429'
			, open: false
			, prestige: 23
			, str: 23
			, need: {blue: 240}
			}
		, position: {x: 1285, y: 1040}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n430'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1475, y: 1040}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n431'
			, open: false
			, prestige: 23
			, str: 23
			, need: {blue: 240}
			}
		, position: {x: 1475, y: 920}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n432'
			, open: false
			, prestige: 23
			, str: 23
			, need: {blue: 240}
			}
		, position: {x: 1380, y: 870}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n433'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 1380, y: 1090}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n434'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1380, y: 823}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n435'
			, open: false
			, prestige: 35
			, str: 35
			, need: {blue: 325}
			}
		, position: {x: 1380, y: 1137}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n436'
			, open: false
			, prestige: 47
			, str: 47
			, need: {blue: 400}
			}
		, position: {x: 1247, y: 896}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n437'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 1247, y: 1064}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n438'
			, open: false
			, prestige: 47
			, str: 47
			, need: {blue: 400}
			}
		, position: {x: 1513, y: 1064}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n439'
			, open: false
			, prestige: 47
			, str: 47
			, need: {blue: 400}
			}
		, position: {x: 1513, y: 896}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n440'
			, open: false
			, title: 'Талант: Тактическая защита'
			, description:
				'Защита в ближнем бою увеличена на 5% за каждый уровень этого '+
				'символа.</p>'+
				'<p>Защита в дальнем бою увеличена на 5% за каждый уровень '+
				'этого символа.'
			, nodeImage: 'defence'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 960, y: 980}
		, classes: 'skill image defence'
		}
	,
		{ data:
			{ id: 'n441'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 960,  y: 1040}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n442'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 1012, y: 950}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n443'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 908, y: 950}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n444'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 865, y: 920}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n445'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 865, y: 1040}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n446'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 1055, y: 1040}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n447'
			, open: false
			, prestige: 23
			, spirit: 23
			, need: {blue: 240}
			}
		, position: {x: 1055, y: 920}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n448'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 899, y: 870}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n449'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 1021, y: 870}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n450'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 899, y: 1090}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n451'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1021, y: 1090}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n452'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 960, y: 870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n453'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 960, y: 1090}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n454'
			, open: false
			, prestige: 35
			, luck: 35
			, need: {blue: 325}
			}
		, position: {x: 825, y: 980}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n455'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 1095, y: 980}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n456'
			, open: false
			, title: 'Вершина разрушения'
			, description: 'Может быть усилена с помощью эфирных ядер.'
			, nodeImage: 'destroy'
			, need: {}
			}
		, position: {x: 820, y: 1360}
		, classes: 'skill image destroy'
		}
	,
		{ data:
			{ id: 'n457'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 820,  y: 1420}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n458'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 872, y: 1330}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n459'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 768, y: 1330}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n460'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 725, y: 1300}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n461'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 725, y: 1420}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n462'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 915, y: 1420}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n463'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 915, y: 1300}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n464'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: 759, y: 1250}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n465'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 881, y: 1250}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n466'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 759, y: 1470}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n467'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 881, y: 1470}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n468'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 820, y: 1250}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n469'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 820, y: 1203}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n470'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 820, y: 1517}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n471'
			, open: false
			, title: 'Талант: Замедляющие атаки'
			, description:
				'Наносимые удары периодически снижают скорость передвижения '+
				'противников на 10% за каждый уровень этого символа. Эффект '+
				'длится 3 секунды.'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: 1150, y: 1740}
		, classes: 'skill image slow'
		}
	,
		{ data:
			{ id: 'n472'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 1055, y: 1680}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n473'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 1055, y: 1800}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n474'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 1245, y: 1800}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n475'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1245, y: 1680}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n476'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1089, y: 1630}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n477'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1211, y: 1630}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n478'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1089, y: 1850}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n479'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1211, y: 1850}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n480'
			, open: false
			, prestige: 30
			, majesty: 300
			, need: {blue: 575}
			}
		, position: {x: 1150, y: 1630}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n481'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 1150, y: 1850}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n482'
			, open: false
			, prestige: 120
			, vit: 120
			, need: {revelation: 300}
			}
		, position: {x: 1017, y: 1656}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n483'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1017, y: 1824}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n484'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 1283, y: 1824}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n485'
			, open: false
			, prestige: 75
			, str: 75
			, need: {blue: 810}
			}
		, position: {x: 1283, y: 1656}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n486'
			, open: false
			, prestige: 75
			, luck: 75
			, need: {blue: 810}
			}
		, position: {x: 1015, y: 1740}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n487'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 1285, y: 1740}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n488'
			, open: false
			, title: 'Талант: Компрессионная травма'
			, description:
				'При нанесении сокрущающего удара на противника накладывается '+
				'эффект, наносящий периодический урон.</p>'+
				'<p>Суммарный урон равен 140% от показателя силы персонажа.'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: 690, y: 1740}
		, classes: 'skill image injury'
		}
	,
		{ data:
			{ id: 'n489'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 690,  y: 1800}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n490'
			, open: false
			, prestige: 30
			, majesty: 300
			, need: {blue: 575}
			}
		, position: {x: 742, y: 1710}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n491'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 638, y: 1710}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n492'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 595, y: 1680}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n493'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 595, y: 1800}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n494'
			, open: false
			, prestige: 38
			, valor: 38
			, need: {blue: 490}
			}
		, position: {x: 785, y: 1800}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n495'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {gree: 650}
			}
		, position: {x: 785, y: 1680}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n496'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 690, y: 1630}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n497'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: 690, y: 1850}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n498'
			, open: false
			, prestige: 30
			, majesty: 300
			, need: {blue: 575}
			}
		, position: {x: 690, y: 1583}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n499'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 690, y: 1897}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n500'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 557, y: 1656}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n501'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 557, y: 1824}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n502'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 823, y: 1824}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n503'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 823, y: 1656}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n504'
			, open: false
			, title: 'Талант: Предельная сила'
			, description:
				'Влияние показателя силы на базовый урон увеличено на 10% за '+
				'каждый уровень этого символа.'
			, nodeImage: 'str'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: 1840, y: 450}
		, classes: 'skill image max_str'
		}
	,
		{ data:
			{ id: 'n505'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 1745, y: 390}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n506'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 1745, y: 510}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n507'
			, open: false
			, prestige: 35
			, luck: 35
			, need: {blue: 325}
			}
		, position: {x: 1935, y: 510}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n508'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 1935, y: 390}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n509'
			, open: false
			, prestige: 35
			, str: 35
			, need: {blue: 325}
			}
		, position: {x: 1779, y: 340}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n510'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1901, y: 340}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n511'
			, open: false
			, prestige: 35
			, str: 35
			, need: {blue: 325}
			}
		, position: {x: 1779, y: 560}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n512'
			, open: false
			, prestige: 23
			, str: 23
			, need: {blue: 240}
			}
		, position: {x: 1901, y: 560}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n513'
			, open: false
			, prestige: 35
			, str: 35
			, need: {blue: 325}
			}
		, position: {x: 1840, y: 340}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n514'
			, open: false
			, prestige: 47
			, strength: 47
			, need: {blue: 400}
			}
		, position: {x: 1840, y: 560}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n515'
			, open: false
			, prestige: 47
			, str: 47
			, need: {blue: 400}
			}
		, position: {x: 1707, y: 366}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n516'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1707, y: 534}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n517'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1973, y: 534}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n518'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 1973, y: 366}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n519'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1705, y: 450}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n520'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1975, y: 450}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n521'
			, open: false
			, title: 'Класс: Лучница/Лучник'
			, description:
				'Меткая лучница может поразить цели на огромной дистанции. В '+
				'её колчане, кроме обычных, припрятаны особые снаряды. '+
				'Замедляющие ловушки, электрические и огненные стрелы, кошачья '+
				'ловкость и реакция - овладеть этим не так-то просто. Опытная '+
				'лучница может осыпать неприятеля градом стрел и без труда '+
				'разорвать дистанцию, виртуозно уходя от ударов порядком '+
				'измотанного врага.'
			, nodeImage: 'archer'
			, need: {transformation: 300}
			}
		, position: {x: 2070, y: 760}
		, classes: 'class image archer'
		}
	,
		{ data:
			{ id: 'n522'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 2070,  y: 820}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n523'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 2122, y: 730}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n524'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 2018, y: 730}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n525'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1975, y: 700}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n526'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 1975, y: 820}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n527'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 2165, y: 820}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n528'
			, open: false
			, prestige: 47
			, luck: 47
			, need: {blue: 400}
			}
		, position: {x: 2165, y: 700}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n529'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 2009, y: 650}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n530'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2131, y: 650}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n531'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2009, y: 870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n532'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 2131, y: 870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n533'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2070, y: 650}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n534'
			, open: false
			, prestige: 35
			, str: 35
			, need: {blue: 325}
			}
		, position: {x: 2070, y: 870}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n535'
			, open: false
			, prestige: 47
			, str: 47
			, need: {blue: 400}
			}
		, position: {x: 1935, y: 760}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n536'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 2205, y: 760}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n537'
			, open: false
			, title: 'Класс: Некромант'
			, description:
				'Колдун, которому подвластна сама смерть. Своими зловещими '+
				'заклинаиями он может не только причинить существенный вред '+
				'противникам, но и восполнить собственное здоровье за их счёт. '+
				'Он подчиняет своей воле ужасных тварей и заставляет умерших '+
				'сражаться вместо него. А обренувшись личем, некромант открывает '+
				'особые способности, недоступные в человеческом облике.'
			, nodeImage: 'necromancer'
			, need: {transformation: 300}
			}
		, position: {x: 1380, y: 1360}
		, classes: 'skill image necromancer'
		}
	,
		{ data:
			{ id: 'n538'
			, open: false
			, prestige: 25
			, power: 25
			, luck: 12
			, need: {red: 325}
			}
		, position: {x: 1380,  y: 1420}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n539'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 1432, y: 1330}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n540'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1328, y: 1330}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n541'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 1285, y: 1300}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n542'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1285, y: 1420}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n543'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 1475, y: 1420}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n544'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1475, y: 1300}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n545'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1319, y: 1250}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n546'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 1441, y: 1250}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n547'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1319, y: 1470}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n548'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1441, y: 1470}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n549'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 1380, y: 1250}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n550'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1380, y: 1470}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n551'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 1245, y: 1360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n552'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 1515, y: 1360}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n553'
			, open: false
			, title: 'Талант: Вынужденная передышка'
			, description:
				'При получении замедляющего эффекта с вероятностью 20% '+
				'восстановится один заряд рывка.'
			, nodeImage: 'timeout'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: 1150, y: -1740}
		, classes: 'skill image timeout'
		}
	,
		{ data:
			{ id: 'n554'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1055, y: -1800}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n555'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 1055, y: -1680}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n556'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 1245, y: -1680}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n557'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 1245, y: -1800}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n558'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1089, y: -1850}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n559'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 1211, y: -1850}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n560'
			, open: false
			, prestige: 75
			, str: 75
			, need: {blue: 810}
			}
		, position: {x: 1089, y: -1630}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n561'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1211, y: -1630}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n562'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1150, y: -1850}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n563'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1150, y: -1630}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n564'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1017, y: -1824}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n565'
			, open: false
			, prestige:120
			, vit: 120
			, need: {revelation: 300}
			}
		, position: {x: 1017, y: -1656}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n566'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: 1283, y: -1656}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n567'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 1283, y: -1824}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n568'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1015, y: -1740}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n569'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 1285, y: -1740}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n570'
			, open: false
			, title: 'Талант: Замедляющие атаки'
			, description:
				'Наносимые удары периодически снижают скорость передвижения '+
				'противников на 10% за каждый уровень этого символа. Эффект '+
				'длится 3 секунды.'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: 1610, y: -1740}
		, classes: 'skill image slow'
		}
	,
		{ data:
			{ id: 'n571'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 1610,  y: -1680}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n572'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 1662, y: -1770}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n573'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 1558, y: -1770}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n574'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 1515, y: -1800}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n575'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 1515, y: -1680}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n576'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1705, y: -1680}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n577'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 1705, y: -1800}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n578'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1610, y: -1850}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n579'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1610, y: -1630}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n580'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1610, y: -1897}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n581'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 1610, y: -1583}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n582'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 1477, y: -1824}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n583'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: 1477, y: -1656}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n584'
			, open: false
			, prestige: 80
			, power: 80
			, need: {revelation: 300}
			}
		, position: {x: 1743, y: -1656}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n585'
			, open: false
			, prestige: 75
			, valor: 6
			, need: {blue: 810}
			}
		, position: {x: 1743, y: -1824}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n586'
			, open: false
			, title: 'Вершина равновесия'
			, description: 'Может быть усилена с помощью эфирных ядер.'
			, nodeImage: 'balance'
			, need: {}
			}
		, position: {x: -230, y: 760}
		, classes: 'skill image balance'
		}
	,
		{ data:
			{ id: 'n587'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: -230,  y: 820}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n588'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: -178, y: 730}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n589'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: -282, y: 730}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n590'
			, open: false
			, prestige: 23
			, luck: 23
			, need: {blue: 240}
			}
		, position: {x: -325, y: 700}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n591'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: -325, y: 820}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n592'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: -135, y: 820}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n593'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: -135, y: 700}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n594'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: -230, y: 650}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n595'
			, open: false
			, prestige: 35
			, luck: 35
			, need: {blue: 325}
			}
		, position: {x: -230, y: 870}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n596'
			, open: false
			, prestige: 35
			, spirit: 35
			, need: {blue: 325}
			}
		, position: {x: -230, y: 603}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n597'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: -230, y: 917}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n598'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: -363, y: 676}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n599'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: -363, y: 844}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n600'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: -97, y: 844}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n601'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: -97, y: 676}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n602'
			, open: false
			, prestige: 40
			, title: 'Талант: Беспозадность'
			, description:
				'Противники под эффектом оглущения, обездвиживания, страха или '+
				'ослепления получают от персонажа на 7% больше урона за каждый '+
				'уровень этого символа.</p>'+
				'<p>Противники под эффектом замедления получают на 2% больше '+
				'урона за каждый уровень этого символа.'
			, nodeImage: 'ruthlessness'
			, need: {blue: 275}
			}
		, position: {x: -360, y: 320}
		, classes: 'skill image ruthlessness'
		}
	,
		{ data:
			{ id: 'n603'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: -360,  y: 380}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n604'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: -308, y: 290}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n605'
			, open: false
			, prestige: 35
			, valor: 35
			, need: {blue: 325}
			}
		, position: {x: -412, y: 290}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n606'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: -455, y: 260}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n607'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: -455, y: 380}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n608'
			, open: false
			, prestige: 35
			, luck: 35
			, need: {blue: 325}
			}
		, position: {x: -265, y: 380}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n609'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: -265, y: 260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n610'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: -421, y: 210}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n611'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: -299, y: 210}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n612'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: -421, y: 430}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n613'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: -299, y: 430}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n614'
			, open: false
			, prestige: 23
			, valor: 23
			, need: {blue: 240}
			}
		, position: {x: -360, y: 210}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n615'
			, open: false
			, prestige: 47
			, spirit: 47
			, need: {blue: 400}
			}
		, position: {x: -360, y: 430}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n616'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: -495, y: 320}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n617'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: -225, y: 320}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n618'
			, open: false
			, prestige: 40
			, title: 'Талант: Прилив адренална'
			, description:
				'При получении урона скорость перемещения может увеличиться на '+
				'15% за каждый уровень этого символа. Длительность эффекта - 5 '+
				'секунд, а вероятность срабатывания зависит от текущего уровня '+
				'здоровья персонажа.</p>'+
				'<p>Эффект ускорения работает постоянно, если уровень здоровья '+
				'падает ниже 20%.'
			, nodeImage: 'adrenaline'
			, need: {blue: 275}
			}
		, position: {x: -360, y: -320}
		, classes: 'skill image adrenaline'
		}
	,
		{ data:
			{ id: 'n619'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: -360,  y: -260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n620'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: -308, y: -350}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n621'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: -412, y: -350}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n622'
			, open: false
			, prestige: 47
			, str: 47
			, need: {blue: 400}
			}
		, position: {x: -455, y: -380}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n623'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: -455, y: -260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n624'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: -265, y: -260}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n625'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: -265, y: -380}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n626'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: -421, y: -430}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n627'
			, open: false
			, prestige: 23
			, luck: 23
			, need: {blue: 240}
			}
		, position: {x: -299, y: -430}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n628'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: -421, y: -210}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n629'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: -299, y: -210}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n630'
			, open: false
			, prestige: 35
			, str: 35
			, need: {blue: 325}
			}
		, position: {x: -360, y: -430}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n631'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: -360, y: -210}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n632'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: -495, y: -320}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n633'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: -225, y: -320}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n634'
			, open: false
			, title: 'Талант: Защитный рефлекс'
			, description:
				'Персонаж получает на 10% меньше урона за каждый уровень этого '+
				'символа, если находится под эффектос оглушения, страха, '+
				'ослепления или обездвиживания.</p>'+
				'Персонаж получает на 3% меньше урона за каждый уровень этого '+
				'символа, если находится под эффектом замедления.'
			, nodeImage: 'reflex'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 350, y: 1200}
		, classes: 'skill image reflex'
		}
	,
		{ data:
			{ id: 'n635'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 350,  y: 1260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n636'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 402, y: 1170}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n637'
			, open: false
			, prestige: 23
			, spirit: 23
			, need: {blue: 240}
			}
		, position: {x: 298, y: 1170}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n638'
			, open: false
			, prestige: 47
			, spirit: 47
			, need: {blue: 400}
			}
		, position: {x: 289, y: 1090}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n639'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 411, y: 1090}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n640'
			, open: false
			, prestige: 35
			, luck: 35
			, need: {blue: 325}
			}
		, position: {x: 289, y: 1310}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n641'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 411, y: 1310}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n642'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 350, y: 1043}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n643'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 350, y: 1357}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n644'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 217, y: 1116}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n645'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 217, y: 1284}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n646'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 483, y: 1284}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n647'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 483, y: 1116}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n648'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 215, y: 1200}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n649'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 485, y: 1200}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n650'
			, open: false
			, title:
				'Талант: Волна: замедление'
			, description:
				'Использование атакующих способностей позволяет применить '+
				'умение "Волна".</p><p>'+
				'Волна замедляет всех противников в радиусе 8 метров на 50% в '+
				'течение 4 секунд. Время перезарядки - 25 секунд.</p><p>'+
				'При совместном использовании с символом "Волна: урон" оба '+
				'эффекта наступают одновременно, а время перезарядкм уменьшено '+
				'на 5 секунд.'
			, nodeImage: 'wave'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: -230, y: 1200}
		, classes: 'skill image wave'
		}
	,
		{ data:
			{ id: 'n651'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -230,  y: 1260}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n652'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -178, y: 1170}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n653'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -282, y: 1170}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n654'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -325, y: 1140}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n655'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -325, y: 1260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n656'
			, open: false
			, prestige: 40
			, power: 40
			, luck: 24
			, need: {red: 650}
			}
		, position: {x: -135, y: 1260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n657'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -135, y: 1140}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n658'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -291, y: 1090}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n659'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -169, y: 1090}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n660'
			, open: false
			, prestige: 75
			, spirit: 75
			, need: {blue: 810}
			}
		, position: {x: -291, y: 1310}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n661'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -169, y: 1310}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n662'
			, open: false
			, prestige: 38
			, spirit: 38
			, need: {blue: 490}
			}
		, position: {x: -230, y: 1090}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n663'
			, open: false
			, prestige: 80
			, luck: 80
			, need: {revelation: 300}
			}
		, position: {x: -230, y: 1043}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n664'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -230, y: 1357}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n665'
			, open: false
			, prestige: 40
			, title: 'Талант: Равновесие'
			, description:
				'Персонаж получает на 6% меньше урона за каждый уровень этого '+
				'символа, если он находиться в бою с тремя или более противниками.'
			, nodeImage: 'equilibrium'
			, need: {blue: 350}
			}
		, position: {x: -690, y: 1200}
		, classes: 'skill image equilibrium'
		}
	,
		{ data:
			{ id: 'n666'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -785, y: 1140}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n667'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -785, y: 1260}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n668'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -595, y: 1260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n669'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -595, y: 1140}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n670'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -751, y: 1090}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n671'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: -629, y: 1090}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n672'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: -751, y: 1310}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n673'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -629, y: 1310}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n674'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -690, y: 1090}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n675'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: -690, y: 1310}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n676'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -823, y: 1116}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n677'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -823, y: 1284}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n678'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -557, y: 1284}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n679'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -557, y: 1116}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n680'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -825, y: 1200}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n681'
			, open: false
			, prestige: 30
			, majesty: 5
			, need: {blue: 575}
			}
		, position: {x: -555, y: 1200}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n682'
			, open: false
			, title: 'Класс: Монах'
			, description:
				'Монах боевого ордена, он в совершенстве постиг дисциплину '+
				'духа и тела и отточил мастерство владения посохом. используя '+
				'особые стойки, он может проводить серии мощных ударов, '+
				'направленных на одного противника, виртуозно раскручивать '+
				'посох, нанося урон обступившим врагам, и даже совершать '+
				'головокружительные акробатические трюки.'
			, nodeImage: 'monk'
			, need: {transformation: 600}
			}
		, position: {x: -1120, y: 1200}
		, classes: 'class image monk'
		}
	,
		{ data:
			{ id: 'n683'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -1120,  y: 1260}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n684'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1068, y: 1170}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n685'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -1172, y: 1170}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n686'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -1215, y: 1140}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n687'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -1215, y: 1260}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n688'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1025, y: 1260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n689'
			, open: false
			, prestige: 38
			, str: 38
			, need: {blue: 490}
			}
		, position: {x: -1025, y: 1140}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n690'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1181, y: 1090}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n691'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1059, y: 1090}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n692'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -1181, y: 1310}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n693'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: -1059, y: 1310}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n694'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: -1120, y: 1090}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n695'
			, open: false
			, prestige: 120
			, vit: 120
			, need: {revelation: 300}
			}
		, position: {x: -1120, y: 1310}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n696'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -1255, y: 1200}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n697'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: -985, y: 1200}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n698'
			, open: false
			, prestige: 40
			, title: 'Талант: Повышенная боеготовность'
			, description:
				'Боевые расходники восстанавливаются на 15/30% быстрее.'
			, nodeImage: 'alert'
			, need: {blue: 350}
			}
		, position: {x: -690, y: -1200}
		, classes: 'skill image alert'
		}
	,
		{ data:
			{ id: 'n699'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -690,  y: -1140}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n700'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -638, y: -1230}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n701'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -742, y: -1230}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n702'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -751, y: -1310}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n703'
			, open: false
			, prestige: 38
			, str: 38
			, need: {blue: 490}
			}
		, position: {x: -629, y: -1310}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n704'
			, open: false
			, prestige: 75
			, spirit: 75
			, need: {blue: 810}
			}
		, position: {x: -751, y: -1090}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n705'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -629, y: -1090}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n706'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -690, y: -1357}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n707'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -690, y: -1043}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n708'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -823, y: -1284}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n709'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -823, y: -1116}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n710'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -557, y: -1116}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n711'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -557, y: -1284}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n712'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -825, y: -1200}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n713'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -555, y: -1200}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n714'
			, open: false
			, title: 'Класс: Алхимик'
			, description:
				'Этот неутомимый гений многим может показаться странным, а '+
				'его поступки - лишёнными здравого смысла. Ученый-экспериментатор, '+
				'отдавший душу алъимии, всегда держит наготове и едкие '+
				'химические соединения, и придающие сил эликсиры. За его '+
				'спиной не просто рюкзак со склянками: он носит с собой '+
				'портативную алхимическую лабораторию. Она оборудована '+
				'манипуляторами-щупальцами, которые могут обдать врагов едкой '+
				'кислотой или огнём, а могут и нанести ощутимый урон '+
				'установленным на концах лезвиями.'
			, nodeImage: 'alchemist'
			, need: {transformation: 600}
			}
		, position: {x: -1120, y: -1200}
		, classes: 'class image alchemist'
		}
	,
		{ data:
			{ id: 'n715'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -1120,  y: -1140}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n716'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1068, y: -1230}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n718'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -1172, y: -1230}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n719'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1215, y: -1260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n720'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -1215, y: -1140}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n721'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -1025, y: -1140}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n722'
			, open: false
			, prestige: 38
			, ste: 38
			, need: {blue: 490}
			}
		, position: {x: -1025, y: -1260}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n723'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -1181, y: -1310}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n724'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -1059, y: -1310}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n725'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -1181, y: -1090}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n726'
			, open: false
			, prestige: 80
			, spirit: 80
			, need: {revelation: 300}
			}
		, position: {x: -1059, y: -1090}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n727'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1120, y: -1310}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n728'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1120, y: -1090}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n729'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: -1255, y: -1200}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n730'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -985, y: -1200}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n731'
			, open: false
			, title: 'Вершина равновесия'
			, description: 'Может быть усилена с помощью эфирных ядер.'
			, nodeImage: 'balance'
			, need: {}
			}
		, position: {x: -790, y: 0}
		, classes: 'skill image balance'
		}
	,
		{ data:
			{ id: 'n732'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -790,  y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n733'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -738, y: -30}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n734'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -842, y: -30}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n735'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -885, y: -60}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n736'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -885, y: 60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n737'
			, open: false
			, prestige: 38
			, str: 38
			, need: {blue: 490}
			}
		, position: {x: -695, y: 60}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n738'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: -695, y: -60}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n739'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -851, y: -110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n740'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -729, y: -110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n741'
			, open: false
			, prestige: 75
			, valor: 75
			, need: {vit: 810}
			}
		, position: {x: -851, y: 110}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n742'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -729, y: 110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n743'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -790, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n744'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -790, y: -157}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n745'
			, open: false
			, prestige: 38
			, luck: 38
			, need: {blue: 490}
			}
		, position: {x: -790, y: 157}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n746'
			, open: false
			, title: 'Талант: Элемент неожиданности'
			, description:
				'В течение первых 8 секунд боя исходящий урон увеличен на 12% '+
				'за каждый уровень этого символа.'
			, nodeImage: 'surprise'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: -1220, y: 0}
		, classes: 'skill image surprise'
		}
	,
		{ data:
			{ id: 'n747'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -1315, y: -60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n748'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -1315, y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n749'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1125, y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n750'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1125, y: -60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n751'
			, open: false
			, prestige: 38
			, str: 38
			, need: {blue: 490}
			}
		, position: {x: -1281, y: -110}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n752'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1159, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n753'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -1281, y: 110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n754'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1159, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n755'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1220, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n756'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -1220, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n757'
			, open: false
			, prestige: 38
			, spirit: 38
			, need: {blue: 490}
			}
		, position: {x: -1353, y: -84}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n758'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1353, y: 84}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n759'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1087, y: 84}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n760'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1087, y: -84}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n761'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -1355, y: 0}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n762'
			, open: false
			, prestige: 75
			, luck: 75
			, need: {blue: 810}
			}
		, position: {x: -1085, y: 0}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n763'
			, open: false
			, title: 'Класс: Штурмовик'
			, description:
				'Штурмовик, боец дальней дистанции, доверяет только одному '+
				'боевому товарищу - своей пушке-трансформеру. Его не '+
				'интересует добро и зло, ему интересно лишь оружие. Безустанно '+
				'изучая инструменты уничтожения живой и неживой материи, он '+
				'совершенствует и модернизирует своё боевое снаряжение и без '+
				'лишних угрызений совести испытывает его в деле.'
			, nodeImage: 'hedgehopper'
			, need: {transformation: 600}
			}
		, position: {x: -1650, y: 0}
		, classes: 'class image hedgehopper'
		}
	,
		{ data:
			{ id: 'n764'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1650,  y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n765'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1598, y: -30}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n766'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1702, y: -30}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n767'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -1745, y: -60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n768'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: -1745, y: 60}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n769'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: -1555, y: 60}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n770'
			, open: false
			, prestige: 80
			, power: 80
			, need: {revelation: 300}
			}
		, position: {x: -1555, y: -60}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n771'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1711, y: -110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n772'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -1589, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n773'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -1711, y: 110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n774'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -1589, y: 110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n775'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -1650, y: -110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n776'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -1650, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n777'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: -1785, y: 0}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n778'
			, open: false
			, prestige: 38
			, luck: 38
			, need: {blue: 490}
			}
		, position: {x: -1515, y: 0}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n779'
			, open: false
			, title: 'Талант: Импульсный барьер'
			, description:
				'При активации импульсного разряда персонаж на 3 секунды '+
				'получает щит, который поглощает входящий урон.</p><p>'+
				'Каждый уровень этого символа увеличивает количество '+
				'поглощаемого урона на 3% от максимального здоровья персонажа.'
			, nodeImage: 'barrier'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: -850, y: -650}
		, classes: 'skill image barrier'
		}
	,
		{ data:
			{ id: 'n780'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -850,  y: -590}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n781'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -798, y: -680}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n782'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -902, y: -680}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n783'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: -945, y: -710}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n784'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -945, y: -590}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n785'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -755, y: -590}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n786'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -755, y: -710}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n787'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -850, y: -760}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n788'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: -850, y: -540}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n789'
			, open: false
			, prestige: 75
			, spirit: 75
			, need: {blue: 810}
			}
		, position: {x: -850, y: -807}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n790'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: -850, y: -493}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n791'
			, open: false
			, prestige: 120
			, vit: 120
			, need: {revelation: 300}
			}
		, position: {x: -983, y: -734}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n792'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -983, y: -566}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n793'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -717, y: -566}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n794'
			, open: false
			, prestige: 37
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: -717, y: -734}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n795'
			, open: false
			, title: 'Талант: Болезненные спазмы'
			, description:
				'Импульсный урон накладывает на противника эффект, наносящий '+
				'периодический урон.</p>'+
				'<p>Суммарный урон равен 200% от показателя духа персонажа.'
			, nodeImage: 'spasm'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: -850, y: 650}
		, classes: 'skill image spasm'
		}
	,
		{ data:
			{ id: 'n796'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -850,  y: 710}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n797'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -798, y: 620}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n798'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -902, y: 620}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n799'
			, open: false
			, prestige: 75
			, luck: 75
			, need: {blue: 810}
			}
		, position: {x: -911, y: 540}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n800'
			, open: false
			, prestige: 38
			, valor: 38
			, need: {blue: 490}
			}
		, position: {x: -789, y: 540}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n801'
			, open: false
			, prestige: 38
			, luck: 38
			, need: {blue: 490}
			}
		, position: {x: -911, y: 760}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n802'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: -789, y: 760}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n803'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -850, y: 493}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n804'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: -850, y: 807}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n805'
			, open: false
			, prestige: 80
			, power: 80
			, need: {revelation: 300}
			}
		, position: {x: -983, y: 566}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n806'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -983, y: 734}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n807'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: -717, y: 734}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n808'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: -717, y: 566}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n809'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -985, y: 650}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n810'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: -715, y: 650}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n811'
			, open: false
			, title: 'Талант: Сотрясение'
			, description:
				'Критические попадания оглушают противников на 2 секунды. '+
				'один и тот же противник может подвергнуться этому эффекту '+
				'не чаще одного раза в 12 секунд.'
			, nodeImage: 'concussion'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 2410, y: -1260}
		, classes: 'skill image concussion'
		}
	,
		{ data:
			{ id: 'n812'
			, open: false
			, prestige: 80
			, power: 80
			, need: {revelation: 300}
			}
		, position: {x: 2410,  y: -1200}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n813'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 2462, y: -1290}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n814'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 2358, y: -1290}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n815'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 2349, y: -1370}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n816'
			, open: false
			, prestige: 75
			, spirit: 75
			, need: {blue: 810}
			}
		, position: {x: 2471, y: -1370}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n817'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 2349, y: -1150}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n818'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 2471, y: -1150}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n819'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 2410, y: -1417}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n820'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 2410, y: -1103}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n821'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 2277, y: -1344}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n822'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 2277, y: -1176}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n823'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 2543, y: -1176}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n824'
			, open: false
			, prestige: 38
			, str: 38
			, need: {blue: 490}
			}
		, position: {x: 2543, y: -1344}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n825'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 2275, y: -1260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n826'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 2545, y: -1260}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n827'
			, open: false
			, title: 'Вершина созидания'
			, description: 'Может быть усилена с помощью эфирных ядер.'
			, nodeImage: 'create'
			, need: {}
			}
		, position: {x: 2870, y: -1360}
		, classes: 'skill image create'
		}
	,
		{ data:
			{ id: 'n828'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2775, y: -1420}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n829'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2775, y: -1300}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n830'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2965, y: -1300}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n831'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 2965, y: -1420}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n832'
			, open: false
			, prestige: 35
			, luck: 35
			, need: {blue: 325}
			}
		, position: {x: 2809, y: -1470}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n833'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 2931, y: -1470}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n834'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2809, y: -1250}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n835'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 2931, y: -1250}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n836'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 2870, y: -1470}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n837'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 2870, y: -1250}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n838'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2737, y: -1444}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n839'
			, open: false
			, prestige: 35
			, str: 35
			, need: {blue: 325}
			}
		, position: {x: 2737, y: -1276}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n840'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 3003, y: -1276}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n841'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 3003, y: -1444}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n842'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2735, y: -1360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n843'
			, open: false
			, prestige: 35
			, spirit: 35
			, need: {blue: 325}
			}
		, position: {x: 3005, y: -1360}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n844'
			, open: false
			, title: 'Талант: Волна: урон'
			, description:
				'Использование атакующих способностей позволяет применить '+
				'умение "Волна".</p><p>'+
				'Волня наносит урон всем противникам вокруг персонажа в '+
				'радиусе 8 метров. Время перезарядки - 25 секунд.</p><p>'+
				'При совместном использовании с символом "Волна: замедление" оба '+
				'эффекта наступают одновременно, а время перезарядкм уменьшено '+
				'на 5 секунд.'
			, nodeImage: 'wave'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 2870, y: -980}
		, classes: 'skill image wave'
		}
	,
		{ data:
			{ id: 'n845'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 2870,  y: -920}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n846'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2922, y: -1010}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n847'
			, open: false
			, prestige: 47
			, spirit: 47
			, need: {blue: 400}
			}
		, position: {x: 2818, y: -1010}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n848'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2809, y: -1090}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n849'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2931, y: -1090}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n850'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2809, y: -870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n851'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2931, y: -870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n852'
			, open: false
			, prestige: 80
			, str: 80
			, need: {revelation: 300}
			}
		, position: {x: 2870, y: -1137}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n853'
			, open: false
			, prestige: 23
			, str: 23
			, need: {blue: 240}
			}
		, position: {x: 2870, y: -823}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n854'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2737, y: -1064}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n855'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 2737, y: -896}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n856'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 3003, y: -896}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n857'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 3003, y: -1064}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n858'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 2735, y: -980}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n859'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 3005, y: -980}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n860'
			, open: false
			, title: 'Талант: Двойной разряд'
			, description:
				'"Импульсный разряд" может быть активирован два раза подряд '+
				'после своего восстановления. Шанс увеличивается на 12% за '+
				'каждый уровень этого символа.'
			, nodeImage: 'double'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: 2200, y: 0}
		, classes: 'skill image double'
		}
	,
		{ data:
			{ id: 'n861'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2200,  y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n862'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 2252, y: -30}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n863'
			, open: false
			, prestige: 23
			, valor: 23
			, need: {blue: 240}
			}
		, position: {x: 2148, y: -30}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n864'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2139, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n865'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 2261, y: -110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n866'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 2139, y: 110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n867'
			, open: false
			, prestige: 35
			, str: 35
			, need: {blue: 325}
			}
		, position: {x: 2261, y: 110}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n868'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2200, y: -157}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n869'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 2200, y: 157}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n870'
			, open: false
			, prestige: 35
			, luck: 35
			, need: {blue: 325}
			}
		, position: {x: 2067, y: -84}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n871'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 2067, y: 84}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n872'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 2333, y: 84}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n873'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2333, y: -84}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n874'
			, open: false
			, prestige: 23
			, luck: 23
			, need: {blue: 240}
			}
		, position: {x: 2065, y: 0}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n875'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 2335, y: 0}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n876'
			, open: false
			, title: 'Вершина разрушения'
			, description: 'Может быть усилена с помощью эфирных ядер.'
			, nodeImage: 'destroy'
			, need: {}
			}
		, position: {x: 2660, y: 0}
		, classes: 'skill image destroy'
		}
	,
		{ data:
			{ id: 'n877'
			, open: false
			, prestige: 23
			, spirit: 23
			, need: {blue: 240}
			}
		, position: {x: 2565, y: -60}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n878'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 2565, y: 60}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n879'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2755, y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n880'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 2755, y: -60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n881'
			, open: false
			, prestige: 47
			, valor: 47
			, need: {blue: 400}
			}
		, position: {x: 2599, y: -110}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n882'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 2721, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n883'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 2599, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n884'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2721, y: 110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n885'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2660, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n886'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 2660, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n887'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2527, y: -84}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n888'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2527, y: 84}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n889'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2793, y: 84}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n890'
			, open: false
			, prestige: 23
			, luck: 23
			, need: {blue: 240}
			}
		, position: {x: 2793, y: -84}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n891'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 2525, y: 0}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n892'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 2795, y: 0}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n893'
			, open: false
			, title: 'Вершина равновесия'
			, description: 'Может быть усилена с помощью эфирных ядер.'
			, nodeImage: 'balance'
			, need: {}
			}
		, position: {x: 3120, y: 0}
		, classes: 'skill image balance'
		}
	,
		{ data:
			{ id: 'n894'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 3120,  y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n895'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 3172, y: -30}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n896'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 3068, y: -30}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n897'
			, open: false
			, prestige: 23
			, luck: 23
			, need: {blue: 240}
			}
		, position: {x: 3025, y: -60}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n898'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 3025, y: 60}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n899'
			, open: false
			, prestige: 35
			, spirit: 35
			, need: {blue: 325}
			}
		, position: {x: 3215, y: 60}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n900'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 3215, y: -60}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n901'
			, open: false
			, prestige: 35
			, spirit: 35
			, need: {blue: 325}
			}
		, position: {x: 3120, y: -110}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n902'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 3120, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n903'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 3120, y: -157}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n904'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 3120, y: 157}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n905'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 2987, y: -84}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n906'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 2987, y: 84}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n907'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 3253, y: 84}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n908'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 3253, y: -84}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n909'
			, open: false
			, title: 'Талант: Интенсивность импульса'
			, description:
				'Импульсный урон увеличен на 10% за каждый уровень этого символа.'
			, nodeImage: 'spirit'
			, prestige: 40
			, need: {blue: 200}
			}
		, position: {x: 3330, y: -1360}
		, classes: 'skill image impuls'
		}
	,
		{ data:
			{ id: 'n910'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 3330,  y: -1300}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n911'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 3382, y: -1390}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n912'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 3278, y: -1390}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n913'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {green: 575}
			}
		, position: {x: 3235, y: -1420}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n914'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 3235, y: -1300}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n915'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 3425, y: -1300}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n916'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 3425, y: -1420}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n917'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 3330, y: -1470}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n918'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 3330, y: -1250}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n919'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3330, y: -1517}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n920'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3330, y: -1203}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n921'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 3197, y: -1444}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n922'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 3197, y: -1276}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n923'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 3463, y: -1276}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n924'
			, open: false
			, prestige: 80
			, power: 80
			, need: {revelation: 300}
			}
		, position: {x: 3463, y: -1444}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n925'
			, open: false
			, title: 'Класс: Богатырь/Воительница'
			, description:
				'Эта могучая воительница находится в гуще сражения, а верный '+
				'сокол по команду готов стремительно атоковать врагов. '+
				'Воительница способна сдерживать натиск большого количества '+
				'противников, отвлекая их внимание от менее защищённых союзников. '+
				'Вооружённая щитом и копьём, она может не только умело блокировать '+
				'атаки, но и наносить сокрушительные удары.'
			, nodeImage: 'hero'
			, need: {transformation: 600}
			}
		, position: {x: 3470, y: -980}
		, classes: 'class image hero'
		}
	,
		{ data:
			{ id: 'n926'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3470,  y: -920}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n927'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 3522, y: -1010}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n928'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3418, y: -1010}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n929'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 3375, y: -1040}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n930'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 3375, y: -920}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n931'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 3565, y: -920}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n932'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 3565, y: -1040}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n933'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: 3409, y: -1090}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n934'
			, open: false
			, prestige: 80
			, power: 80
			, need: {revelation: 300}
			}
		, position: {x: 3531, y: -1090}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n935'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 3409, y: -870}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n936'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 3531, y: -870}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n937'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 3470, y: -1090}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n938'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 3470, y: -870}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n939'
			, open: false
			, prestige: 75
			, valor: 75
			, need: {blue: 810}
			}
		, position: {x: 3335, y: -980}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n940'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 3605, y: -980}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n941'
			, open: false
			, title: 'Талант: Кредо защитника'
			, description:
				'Входящие урон уменьшен на 5% за каждый ранг этого символа.</p>'+
				'<p>Исходящий урон уменьшен на 5%.'
			, nodeImage: 'credo_defend'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 3120, y: -450}
		, classes: 'skill image credo_defend'
		}
	,
		{ data:
			{ id: 'n942'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 3120,  y: -390}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n943'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 3172, y: -480}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n944'
			, open: false
			, prestige: 47
			, str: 47
			, need: {blue: 400}
			}
		, position: {x: 3068, y: -480}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n945'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 3025, y: -510}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n946'
			, open: false
			, prestige: 35
			, str: 35
			, need: {blue: 325}
			}
		, position: {x: 3025, y: -390}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n947'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 3215, y: -390}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n948'
			, open: false
			, prestige: 23
			, spirit: 23
			, need: {blue: 240}
			}
		, position: {x: 3215, y: -510}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n949'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 3059, y: -560}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n950'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 3181, y: -560}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n951'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 3059, y: -340}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n952'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 3181, y: -340}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n953'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 3120, y: -560}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n954'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 3120, y: -607}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n955'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 3120, y: -293}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n956'
			, open: false
			, title: 'Талант: Импульсный барьер'
			, description:
				'При активации импульсного разряда персонаж на 3 секунды '+
				'получает щит, который поглощает входящий урон.</p><p>'+
				'Каждый уровень этого символа увеличивает количество '+
				'поглощаемого урона на 3% от максимального здоровья персонажа.'
			, nodeImage: 'barrier'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 1800, y: 980}
		, classes: 'skill image barrier'
		}
	,
		{ data:
			{ id: 'n957'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1705, y: 920}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n958'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1705, y: 1040}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n959'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1895, y: 1040}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n960'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 0
			, need: {green: 240}
			}
		, position: {x: 1895, y: 920}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n962'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 1739, y: 870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n963'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 1861, y: 870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n964'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 1739, y: 1090}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n965'
			, open: false
			, prestige: 23
			, valor: 23
			, need: {blue: 240}
			}
		, position: {x: 1861, y: 1090}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n966'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1800, y: 870}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n967'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 1800, y: 1090}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n968'
			, open: false
			, prestige: 35
			, valor: 35
			, need: {blue: 325}
			}
		, position: {x: 1667, y: 896}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n969'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 1667, y: 1064}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n970'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 1933, y: 1064}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n971'
			, open: false
			, prestige: 35
			, valor: 35
			, need: {blue: 325}
			}
		, position: {x: 1933, y: 896}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n972'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 1665, y: 980}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n973'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 1935, y: 980}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n974'
			, open: false
			, title: 'Талант: Отчаянное сопротивление'
			, description:
				'Получаемые эффекты замедления ослаблены на 15% за каждый '+
				'уровень этого символа.'
			, nodeImage: 'resistance'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: 1940, y: 1360}
		, classes: 'skill image resist'
		}
	,
		{ data:
			{ id: 'n975'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 1940,  y: 1420}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n976'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 1992, y: 1330}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n977'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1888, y: 1330}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n978'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 1845, y: 1300}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n979'
			, open: false
			, prestige: 38
			, str: 38
			, need: {blue: 490}
			}
		, position: {x: 1845, y: 1420}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n980'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 2035, y: 1420}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n981'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 2035, y: 1300}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n982'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 1879, y: 1250}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n983'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 2001, y: 1250}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n984'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 1879, y: 1470}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n985'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 2001, y: 1470}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n986'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 1940, y: 1250}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n987'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 1940, y: 1203}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n988'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 1940, y: 1517}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n989'
			, open: false
			, title: 'Талант: Рваная рана'
			, description:
				'Критический урон накладывает на противника эффект, наносящий '+
				'периодический урон.</p>'+
				'<p>Суммарный урон равен 100% от показателя удачи персонажа.'
			, nodeImage: 'laceration'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 2410, y: 1260}
		, classes: 'skill image laceration'
		}
	,
		{ data:
			{ id: 'n990'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2410,  y: 1320}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n991'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 2462, y: 1230}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n992'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2358, y: 1230}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n993'
			, open: false
			, prestige: 35
			, spirit: 35
			, need: {blue: 325}
			}
		, position: {x: 2315, y: 1200}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n994'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 6
			, need: {red: 240}
			}
		, position: {x: 2315, y: 1320}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n995'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 2505, y: 1320}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n996'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2505, y: 1200}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n997'
			, open: false
			, prestige: 35
			, luck: 35
			, need: {blue: 325}
			}
		, position: {x: 2410, y: 1150}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n998'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 2410, y: 1370}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n999'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 2410, y: 1103}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1000'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 2410, y: 1417}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1001'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2277, y: 1176}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1002'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 2277, y: 1344}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1003'
			, open: false
			, prestige: 47
			, spirit: 47
			, need: {blue: 400}
			}
		, position: {x: 2543, y: 1344}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n1004'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2543, y: 1176}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1005'
			, open: false
			, title: 'Вершина созидания'
			, description: 'Может быть усилена с помощью эфирных ядер.'
			, nodeImage: 'create'
			, need: {}
			}
		, position: {x: 2870, y: 1360}
		, classes: 'skill image create'
		}
	,
		{ data:
			{ id: 'n1006'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 2870,  y: 1420}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1007'
			, open: false
			, prestige: 35
			, str: 35
			, need: {blue: 325}
			}
		, position: {x: 2922, y: 1330}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n1008'
			, open: false
			, prestige: 47
			, str: 47
			, need: {blue: 400}
			}
		, position: {x: 2818, y: 1330}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n1009'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2809, y: 1250}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1010'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2931, y: 1250}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1011'
			, open: false
			, prestige: 35
			, spirit: 35
			, need: {blue: 325}
			}
		, position: {x: 2809, y: 1470}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n1012'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 2931, y: 1470}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1013'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 2870, y: 1203}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n1014'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2870, y: 1517}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1015'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2737, y: 1276}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1016'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2737, y: 1444}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1017'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 3003, y: 1444}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n1018'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 3003, y: 1276}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1019'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 2735, y: 1360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1020'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 3005, y: 1360}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1021'
			, open: false
			, title: 'Талант: Мобилизация'
			, description:
				'Дополнительный урон увеличен на 10% за каждый уровень этого '+
				'символа.'
			, nodeImage: 'valor'
			, prestige: 40
			, need: {blue: 350}
			}
		, position: {x: 3330, y: 1360}
		, classes: 'skill image mobilization'
		}
	,
		{ data:
			{ id: 'n1022'
			, open: false
			, prestige: 38
			, valor: 38
			, need: {blue: 490}
			}
		, position: {x: 3330,  y: 1420}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n1023'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 3382, y: 1330}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1024'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 3278, y: 1330}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1025'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3235, y: 1300}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1026'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: 3235, y: 1420}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n1027'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3425, y: 1420}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1028'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 3425, y: 1300}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n1029'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 3330, y: 1250}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n1030'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: 3330, y: 1470}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n1031'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3330, y: 1203}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1032'
			, open: false
			, prestige: 38
			, valor: 38
			, need: {blue: 490}
			}
		, position: {x: 3330, y: 1517}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n1033'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: 3197, y: 1276}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n1034'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: 3197, y: 1444}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n1035'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 3463, y: 1444}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1036'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 3463, y: 1276}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1037'
			, open: false
			, title: 'Класс: Колдун/Ведьма'
			, description:
				'В распоряжении ведьмы весь арсенал темных силЖ страшные '+
				'заклятья, таинственные зелья и, конечно же, верная спутница -'+
				'метла, которая исполнить роль как грозного оружия, так и '+
				'личного транспорта, позволив разорвать дистанцию с противником. '+
				'Душа ведьмы - потёмки. С уверенностью можно сказать лишь одно: '+
				'она всегда действует исключительно в своих интересах.'
			, nodeImage: 'witch'
			, need: {transformation: 600}
			}
		, position: {x: 3470, y: 980}
		, classes: 'class image witch'
		}
	,
		{ data:
			{ id: 'n1038'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 3470,  y: 1040}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1039'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 3522, y: 950}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1040'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 3418, y: 950}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1041'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 3375, y: 920}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n1042'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 3375, y: 1040}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1043'
			, open: false
			, prestige: 50
			, vit: 50
			, dex: 18
			, need: {green: 490}
			}
		, position: {x: 3565, y: 1040}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1044'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3565, y: 920}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1045'
			, open: false
			, prestige: 80
			, power: 80
			, need: {revelation: 300}
			}
		, position: {x: 3409, y: 870}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n1046'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3531, y: 870}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1047'
			, open: false
			, prestige: 75
			, spirit: 75
			, need: {blue: 810}
			}
		, position: {x: 3409, y: 1090}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n1048'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 3531, y: 1090}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1049'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 3470, y: 870}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n1050'
			, open: false
			, prestige: 56
			, luck: 56
			, need: {blue: 650}
			}
		, position: {x: 3470, y: 1090}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n1051'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3335, y: 980}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1052'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3605, y: 980}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1053'
			, open: false
			, title: 'Талант: Болевой шок'
			, description:
				'Использование атакующих способностей позволяет применить '+
				'умение "Шок".</p><p>'+
				'"Болевой шок" наносит урон выбраннному противнику. Время '+
				'перезарядки - 25 секунд.</p><p>'+
				'При совместном использовании с символом "Парализующий шок" оба '+
				'эффекта наступают одновременно, а время перезарядкм уменьшено '+
				'на 5 секунд.'
			, nodeImage: 'shock'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 2870, y: 980}
		, classes: 'skill image shock'
		}
	,
		{ data:
			{ id: 'n1054'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 2775, y: 920}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1055'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 2775, y: 1040}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1056'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 2965, y: 1040}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1057'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 2965, y: 920}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1058'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 2809, y: 870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1059'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 2931, y: 870}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n1060'
			, open: false
			, prestige: 35
			, ste: 35
			, need: {blue: 325}
			}
		, position: {x: 2809, y: 1090}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n1061'
			, open: false
			, prestige: 35
			, spirit: 35
			, need: {blue: 325}
			}
		, position: {x: 2931, y: 1090}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n1062'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 2870, y: 870}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1063'
			, open: false
			, prestige: 80
			, power: 80
			, need: {revelation: 300}
			}
		, position: {x: 2870, y: 1090}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n1064'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 2737, y: 896}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1065'
			, open: false
			, prestige: 47
			, luck: 47
			, need: {blue: 400}
			}
		, position: {x: 2737, y: 1064}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n1066'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 3003, y: 1064}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1067'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 3003, y: 896}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1068'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 2735, y: 980}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1114'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 3005, y: 980}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1069'
			, open: false
			, title: 'Талант: Кредо война'
			, description:
				'Исходящий урон увеличен на 5% за каждый ранг этого символа.</p>'+
				'<p>Входящий урон увеличен на 5%.'
			, nodeImage: 'credo_warrior'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 3120, y: 450}
		, classes: 'skill image credo_warrior'
		}
	,
		{ data:
			{ id: 'n1070'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 3120,  y: 510}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1071'
			, open: false
			, prestige: 35
			, spirit: 35
			, need: {blue: 325}
			}
		, position: {x: 3172, y: 420}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n1115'
			, open: false
			, prestige: 27
			, vit: 27
			, dex: 9
			, need: {green: 240}
			}
		, position: {x: 3068, y: 420}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1072'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 3025, y: 390}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n1073'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 3025, y: 510}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1074'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 325}
			}
		, position: {x: 3215, y: 510}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n1075'
			, open: false
			, prestige: 17
			, power: 17
			, dex: 9
			, need: {red: 240}
			}
		, position: {x: 3215, y: 390}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1076'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 3059, y: 340}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1077'
			, open: false
			, prestige: 53
			, vit: 53
			, dex: 15
			, need: {green: 400}
			}
		, position: {x: 3181, y: 340}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1078'
			, open: false
			, prestige: 23
			, luck: 23
			, need: {blue: 240}
			}
		, position: {x: 3059, y: 560}
		, classes: 'stat image luck'
		}
	,
		{ data:
			{ id: 'n1079'
			, open: false
			, prestige: 40
			, vit: 40
			, dex: 12
			, need: {green: 325}
			}
		, position: {x: 3181, y: 560}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1080'
			, open: false
			, prestige: 33
			, power: 33
			, dex: 15
			, need: {red: 400}
			}
		, position: {x: 3120, y: 340}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1081'
			, open: false
			, prestige: 35
			, valor: 35
			, need: {blue: 325}
			}
		, position: {x: 3120, y: 293}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n1082'
			, open: false
			, prestige: 25
			, power: 25
			, dex: 12
			, need: {red: 325}
			}
		, position: {x: 3120, y: 607}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1083'
			, open: false
			, title: 'Талант: Элемент неожиданности'
			, description:
				'В течение первых 8 секунд боя исходящий урон увеличен на 12% '+
				'за каждый уровень этого символа.'
			, nodeImage: 'surprise'
			, prestige: 40
			, need: {blue: 275}
			}
		, position: {x: 3530, y: 0}
		, classes: 'class image surprise'
		}
	,
		{ data:
			{ id: 'n1084'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 3530,  y: 60}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n1085'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 3582, y: -30}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1086'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3478, y: -30}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1087'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 3435, y: -60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1088'
			, open: false
			, prestige: 56
			, valor: 56
			, need: {blue: 650}
			}
		, position: {x: 3435, y: 60}
		, classes: 'stat image valor'
		}
	,
		{ data:
			{ id: 'n1089'
			, open: false
			, prestige: 27
			, power: 27
			, dex: 18
			, need: {red: 490}
			}
		, position: {x: 3625, y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1090'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3625, y: -60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1091'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 3469, y: -110}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n1092'
			, open: false
			, prestige: 30
			, majesty: 200
			, need: {blue: 150}
			}
		, position: {x: 3591, y: -110}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n1093'
			, open: false
			, prestige: 53
			, power: 53
			, dex: 30
			, need: {red: 810}
			}
		, position: {x: 3469, y: 110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1094'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3591, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1095'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 3530, y: -110}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1096'
			, open: false
			, prestige: 80
			, power: 80
			, need: {revelation: 300}
			}
		, position: {x: 3530, y: -157}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n1097'
			, open: false
			, prestige: 80
			, valor: 80
			, need: {revelation: 300}
			}
		, position: {x: 3530, y: 157}
		, classes: 'stat image revelation'
		}
	,
		{ data:
			{ id: 'n1098'
			, open: false
			, title: 'Класс: Берсерк'
			, description:
				'Безжалостный дикарь, он не мыслит ни дня без хорошей драки. '+
				'Ему не знаком страх. Охваченный безумной яростью, берсерк '+
				'может смести на своём пути орды врагов. В таком состоянии он '+
				'не чувствует боли, а его раны затягиваются сами собой. Боевой '+
				'клич берсерка способен вселить ужас в сердца неприятелей и '+
				'воодушевить союзников.'
			, nodeImage: 'berserker'
			, prestige: 40
			, need: {transformation: 300}
			}
		, position: {x: 3990, y: 0}
		, classes: 'class image berserker'
		}
	,
		{ data:
			{ id: 'n1099'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 3990,  y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1100'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 4042, y: -30}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n1101'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 3938, y: -30}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1102'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3895, y: -60}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1103'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 3895, y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1104'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 4085, y: 60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1105'
			, open: false
			, prestige: 40
			, power: 40
			, dex: 24
			, need: {red: 650}
			}
		, position: {x: 4085, y: -60}
		, classes: 'stat image power'
		}
	,
		{ data:
			{ id: 'n1106'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 3929, y: -110}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n1107'
			, open: false
			, prestige: 100
			, vit: 100
			, dex: 30
			, need: {green: 810}
			}
		, position: {x: 4051, y: -110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1108'
			, open: false
			, prestige: 56
			, spirit: 56
			, need: {blue: 650}
			}
		, position: {x: 3929, y: 110}
		, classes: 'stat image spirit'
		}
	,
		{ data:
			{ id: 'n1109'
			, open: false
			, prestige: 30
			, majesty: 250
			, need: {blue: 575}
			}
		, position: {x: 4051, y: 110}
		, classes: 'stat image majesty'
		}
	,
		{ data:
			{ id: 'n1110'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3990, y: -110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1111'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 3990, y: 110}
		, classes: 'stat image vit'
		}
	,
		{ data:
			{ id: 'n1112'
			, open: false
			, prestige: 56
			, str: 56
			, need: {blue: 650}
			}
		, position: {x: 3855, y: 0}
		, classes: 'stat image strength'
		}
	,
		{ data:
			{ id: 'n1113'
			, open: false
			, prestige: 75
			, vit: 75
			, dex: 24
			, need: {green: 650}
			}
		, position: {x: 4125, y: 0}
		, classes: 'stat image vit'
		}
	];

var edgesData =
	[ {classes: '', data: {open: false, source: 'n1', target: 'n2'}}
	, {classes: 'curve', data: {open: false, source: 'n2', target: 'n3'}}
	, {classes: 'curve', data: {open: false, source: 'n3', target: 'n4'}}
	, {classes: '', data: {open: false, source: 'n4', target: 'n5'}}
	, {classes: '', data: {open: false, source: 'n5', target: 'n6'}}
	, {classes: '', data: {open: false, source: 'n6', target: 'n7'}}
	, {classes: '', data: {open: false, source: 'n7', target: 'n8'}}
	, {classes: '', data: {open: false, source: 'n5', target: 'n9'}}
	, {classes: '', data: {open: false, source: 'n9', target: 'n10'}}
	, {classes: '', data: {open: false, source: 'n10', target: 'n11'}}
	, {classes: '', data: {open: false, source: 'n11', target: 'n12'}}
	, {classes: '', data: {open: false, source: 'n12', target: 'n13'}}
	, {classes: '', data: {open: false, source: 'n3', target: 'n14'}}
	, {classes: '', data: {open: false, source: 'n14', target: 'n15'}}
	, {classes: '', data: {open: false, source: 'n15', target: 'n16'}}
	, {classes: '', data: {open: false, source: 'n18', target: 'n17'}}
	, {classes: '', data: {open: false, source: 'n18', target: 'n32'}}
	, {classes: '', data: {open: false, source: 'n32', target: 'n31'}}
	, {classes: 'curve', data: {open: false, source: 'n20', target: 'n18'}}
	, {classes: 'curve', data: {open: false, source: 'n19', target: 'n20'}}
	, {classes: '', data: {open: false, source: 'n19', target: 'n30'}}
	, {classes: '', data: {open: false, source: 'n30', target: 'n24'}}
	, {classes: '', data: {open: false, source: 'n24', target: 'n23'}}
	, {classes: '', data: {open: false, source: 'n23', target: 'n22'}}
	, {classes: '', data: {open: false, source: 'n22', target: 'n21'}}
	, {classes: '', data: {open: false, source: 'n21', target: 'n25'}}
	, {classes: '', data: {open: false, source: 'n25', target: 'n26'}}
	, {classes: '', data: {open: false, source: 'n26', target: 'n27'}}
	, {classes: '', data: {open: false, source: 'n27', target: 'n28'}}
	, {classes: '', data: {open: false, source: 'n28', target: 'n29'}}
	, {classes: '', data: {open: false, source: 'n33', target: 'n34'}}
	, {classes: 'curve', data: {open: false, source: 'n34', target: 'n35'}}
	, {classes: 'curve', data: {open: false, source: 'n35', target: 'n36'}}
	, {classes: '', data: {open: false, source: 'n36', target: 'n42'}}
	, {classes: '', data: {open: false, source: 'n42', target: 'n43'}}
	, {classes: '', data: {open: false, source: 'n43', target: 'n44'}}
	, {classes: '', data: {open: false, source: 'n44', target: 'n45'}}
	, {classes: '', data: {open: false, source: 'n45', target: 'n48'}}
	, {classes: '', data: {open: false, source: 'n48', target: 'n47'}}
	, {classes: '', data: {open: false, source: 'n37', target: 'n38'}}
	, {classes: '', data: {open: false, source: 'n42', target: 'n41'}}
	, {classes: '', data: {open: false, source: 'n41', target: 'n37'}}
	, {classes: '', data: {open: false, source: 'n39', target: 'n40'}}
	, {classes: '', data: {open: false, source: 'n35', target: 'n39'}}
	, {classes: 'between', data: {open: false, source: 'n16', target: 'n51'}}
	, {classes: '', data: {open: false, source: 'n50', target: 'n51'}}
	, {classes: '', data: {open: false, source: 'n50', target: 'n49'}}
	, {classes: '', data: {open: false, source: 'n54', target: 'n62'}}
	, {classes: '', data: {open: false, source: 'n51', target: 'n62'}}
	, {classes: '', data: {open: false, source: 'n55', target: 'n49'}}
	, {classes: '', data: {open: false, source: 'n55', target: 'n56'}}
	, {classes: '', data: {open: false, source: 'n56', target: 'n63'}}
	, {classes: '', data: {open: false, source: 'n63', target: 'n54'}}
	, {classes: 'between', data: {open: false, source: 'n31', target: 'n54'}}
	, {classes: '', data: {open: false, source: 'n49', target: 'n57'}}
	, {classes: '', data: {open: false, source: 'n49', target: 'n52'}}
	, {classes: '', data: {open: false, source: 'n57', target: 'n58'}}
	, {classes: '', data: {open: false, source: 'n58', target: 'n61'}}
	, {classes: '', data: {open: false, source: 'n58', target: 'n64'}}
	, {classes: '', data: {open: false, source: 'n61', target: 'n60'}}
	, {classes: '', data: {open: false, source: 'n60', target: 'n59'}}
	, {classes: '', data: {open: false, source: 'n53', target: 'n59'}}
	, {classes: '', data: {open: false, source: 'n53', target: 'n52'}}
	, {classes: '', data: {open: false, source: 'n53', target: 'n65'}}
	, {classes: 'between', data: {open: false, source: 'n46', target: 'n56'}}
	, {classes: '', data: {open: false, source: 'n46', target: 'n40'}}
	, {classes: 'between', data: {open: false, source: 'n60', target: 'n72'}}
	, {classes: '', data: {open: false, source: 'n72', target: 'n76'}}
	, {classes: '', data: {open: false, source: 'n76', target: 'n69'}}
	, {classes: 'curve', data: {open: false, source: 'n69', target: 'n67'}}
	, {classes: '', data: {open: false, source: 'n67', target: 'n66'}}
	, {classes: '', data: {open: false, source: 'n66', target: 'n68'}}
	, {classes: '', data: {open: false, source: 'n68', target: 'n79'}}
	, {classes: '', data: {open: false, source: 'n79', target: 'n71'}}
	, {classes: '', data: {open: false, source: 'n71', target: 'n81'}}
	, {classes: '', data: {open: false, source: 'n81', target: 'n70'}}
	, {classes: '', data: {open: false, source: 'n79', target: 'n75'}}
	, {classes: '', data: {open: false, source: 'n75', target: 'n78'}}
	, {classes: '', data: {open: false, source: 'n78', target: 'n74'}}
	, {classes: '', data: {open: false, source: 'n74', target: 'n80'}}
	, {classes: '', data: {open: false, source: 'n80', target: 'n73'}}
	, {classes: '', data: {open: false, source: 'n73', target: 'n77'}}
	, {classes: 'between', data: {open: false, source: 'n80', target: 'n96'}}
	, {classes: '', data: {open: false, source: 'n96', target: 'n87'}}
	, {classes: '', data: {open: false, source: 'n87', target: 'n86'}}
	, {classes: '', data: {open: false, source: 'n86', target: 'n85'}}
	, {classes: '', data: {open: false, source: 'n85', target: 'n90'}}
	, {classes: '', data: {open: false, source: 'n96', target: 'n89'}}
	, {classes: '', data: {open: false, source: 'n93', target: 'n89'}}
	, {classes: '', data: {open: false, source: 'n93', target: 'n84'}}
	, {classes: '', data: {open: false, source: 'n84', target: 'n82'}}
	, {classes: '', data: {open: false, source: 'n84', target: 'n88'}}
	, {classes: 'curve', data: {open: false, source: 'n94', target: 'n93'}}
	, {classes: '', data: {open: false, source: 'n94', target: 'n83'}}
	, {classes: '', data: {open: false, source: 'n94', target: 'n92'}}
	, {classes: '', data: {open: false, source: 'n92', target: 'n95'}}
	, {classes: '', data: {open: false, source: 'n95', target: 'n91'}}
	, {classes: 'between', data: {open: false, source: 'n81', target: 'n110'}}
	, {classes: '', data: {open: false, source: 'n110', target: 'n106'}}
	, {classes: '', data: {open: false, source: 'n105', target: 'n106'}}
	, {classes: 'curve', data: {open: false, source: 'n101', target: 'n105'}}
	, {classes: '', data: {open: false, source: 'n101', target: 'n102'}}
	, {classes: '', data: {open: false, source: 'n101', target: 'n100'}}
	, {classes: '', data: {open: false, source: 'n100', target: 'n103'}}
	, {classes: '', data: {open: false, source: 'n99', target: 'n103'}}
	, {classes: 'curve', data: {open: false, source: 'n98', target: 'n99'}}
	, {classes: '', data: {open: false, source: 'n98', target: 'n97'}}
	, {classes: '', data: {open: false, source: 'n99', target: 'n108'}}
	, {classes: '', data: {open: false, source: 'n108', target: 'n104'}}
	, {classes: '', data: {open: false, source: 'n104', target: 'n111'}}
	, {classes: '', data: {open: false, source: 'n99', target: 'n109'}}
	, {classes: '', data: {open: false, source: 'n109', target: 'n107'}}
	, {classes: 'between', data: {open: false, source: 'n75', target: 'n132'}}
	, {classes: '', data: {open: false, source: 'n132', target: 'n128'}}
	, {classes: '', data: {open: false, source: 'n128', target: 'n116'}}
	, {classes: '', data: {open: false, source: 'n116', target: 'n120'}}
	, {classes: '', data: {open: false, source: 'n120', target: 'n126'}}
	, {classes: '', data: {open: false, source: 'n126', target: 'n121'}}
	, {classes: '', data: {open: false, source: 'n121', target: 'n124'}}
	, {classes: '', data: {open: false, source: 'n124', target: 'n115'}}
	, {classes: '', data: {open: false, source: 'n115', target: 'n117'}}
	, {classes: '', data: {open: false, source: 'n117', target: 'n125'}}
	, {classes: '', data: {open: false, source: 'n125', target: 'n122'}}
	, {classes: '', data: {open: false, source: 'n122', target: 'n129'}}
	, {classes: '', data: {open: false, source: 'n125', target: 'n127'}}
	, {classes: '', data: {open: false, source: 'n127', target: 'n123'}}
	, {classes: '', data: {open: false, source: 'n123', target: 'n130'}}
	, {classes: '', data: {open: false, source: 'n130', target: 'n133'}}
	, {classes: '', data: {open: false, source: 'n133', target: 'n131'}}
	, {classes: '', data: {open: false, source: 'n131', target: 'n119'}}
	, {classes: '', data: {open: false, source: 'n119', target: 'n121'}}
	, {classes: '', data: {open: false, source: 'n133', target: 'n118'}}
	, {classes: '', data: {open: false, source: 'n118', target: 'n113'}}
	, {classes: 'curve', data: {open: false, source: 'n113', target: 'n114'}}
	, {classes: '', data: {open: false, source: 'n114', target: 'n112'}}
	, {classes: 'between', data: {open: false, source: 'n102', target: 'n147'}}
	, {classes: '', data: {open: false, source: 'n147', target: 'n142'}}
	, {classes: '', data: {open: false, source: 'n142', target: 'n144'}}
	, {classes: '', data: {open: false, source: 'n144', target: 'n135'}}
	, {classes: 'curve', data: {open: false, source: 'n135', target: 'n136'}}
	, {classes: '', data: {open: false, source: 'n136', target: 'n134'}}
	, {classes: '', data: {open: false, source: 'n136', target: 'n148'}}
	, {classes: '', data: {open: false, source: 'n148', target: 'n150'}}
	, {classes: '', data: {open: false, source: 'n148', target: 'n139'}}
	, {classes: 'curve', data: {open: false, source: 'n136', target: 'n137'}}
	, {classes: '', data: {open: false, source: 'n137', target: 'n145'}}
	, {classes: '', data: {open: false, source: 'n145', target: 'n149'}}
	, {classes: '', data: {open: false, source: 'n145', target: 'n138'}}
	, {classes: '', data: {open: false, source: 'n138', target: 'n143'}}
	, {classes: '', data: {open: false, source: 'n144', target: 'n141'}}
	, {classes: '', data: {open: false, source: 'n141', target: 'n146'}}
	, {classes: 'between', data: {open: false, source: 'n146', target: 'n165'}}
	, {classes: '', data: {open: false, source: 'n157', target: 'n165'}}
	, {classes: 'curve', data: {open: false, source: 'n160', target: 'n157'}}
	, {classes: '', data: {open: false, source: 'n160', target: 'n162'}}
	, {classes: '', data: {open: false, source: 'n157', target: 'n152'}}
	, {classes: '', data: {open: false, source: 'n156', target: 'n152'}}
	, {classes: '', data: {open: false, source: 'n156', target: 'n164'}}
	, {classes: 'curve', data: {open: false, source: 'n155', target: 'n156'}}
	, {classes: '', data: {open: false, source: 'n155', target: 'n163'}}
	, {classes: '', data: {open: false, source: 'n155', target: 'n154'}}
	, {classes: '', data: {open: false, source: 'n154', target: 'n151'}}
	, {classes: '', data: {open: false, source: 'n151', target: 'n153'}}
	, {classes: '', data: {open: false, source: 'n157', target: 'n153'}}
	, {classes: '', data: {open: false, source: 'n153', target: 'n158'}}
	, {classes: '', data: {open: false, source: 'n158', target: 'n166'}}
	, {classes: 'curve', data: {open: false, source: 'n158', target: 'n159'}}
	, {classes: '', data: {open: false, source: 'n159', target: 'n161'}}
	, {classes: 'between', data: {open: false, source: 'n95', target: 'n182'}}
	, {classes: '', data: {open: false, source: 'n174', target: 'n182'}}
	, {classes: 'curve', data: {open: false, source: 'n173', target: 'n174'}}
	, {classes: '', data: {open: false, source: 'n173', target: 'n181'}}
	, {classes: '', data: {open: false, source: 'n173', target: 'n168'}}
	, {classes: '', data: {open: false, source: 'n168', target: 'n176'}}
	, {classes: '', data: {open: false, source: 'n176', target: 'n178'}}
	, {classes: 'curve', data: {open: false, source: 'n168', target: 'n169'}}
	, {classes: 'curve', data: {open: false, source: 'n169', target: 'n170'}}
	, {classes: '', data: {open: false, source: 'n170', target: 'n167'}}
	, {classes: 'curve', data: {open: false, source: 'n174', target: 'n175'}}
	, {classes: '', data: {open: false, source: 'n175', target: 'n177'}}
	, {classes: 'curve', data: {open: false, source: 'n175', target: 'n171'}}
	, {classes: '', data: {open: false, source: 'n171', target: 'n179'}}
	, {classes: 'curve', data: {open: false, source: 'n171', target: 'n172'}}
	, {classes: '', data: {open: false, source: 'n172', target: 'n180'}}
	, {classes: 'between', data: {open: false, source: 'n180', target: 'n196'}}
	, {classes: '', data: {open: false, source: 'n196', target: 'n191'}}
	, {classes: '', data: {open: false, source: 'n191', target: 'n186'}}
	, {classes: '', data: {open: false, source: 'n186', target: 'n183'}}
	, {classes: '', data: {open: false, source: 'n183', target: 'n187'}}
	, {classes: '', data: {open: false, source: 'n187', target: 'n197'}}
	, {classes: '', data: {open: false, source: 'n197', target: 'n199'}}
	, {classes: '', data: {open: false, source: 'n187', target: 'n189'}}
	, {classes: '', data: {open: false, source: 'n189', target: 'n192'}}
	, {classes: '', data: {open: false, source: 'n192', target: 'n188'}}
	, {classes: '', data: {open: false, source: 'n183', target: 'n185'}}
	, {classes: '', data: {open: false, source: 'n185', target: 'n190'}}
	, {classes: '', data: {open: false, source: 'n190', target: 'n193'}}
	, {classes: '', data: {open: false, source: 'n183', target: 'n184'}}
	, {classes: '', data: {open: false, source: 'n184', target: 'n194'}}
	, {classes: '', data: {open: false, source: 'n194', target: 'n198'}}
	, {classes: '', data: {open: false, source: 'n198', target: 'n195'}}
	, {classes: 'between', data: {open: false, source: 'n104', target: 'n263'}}
	, {classes: '', data: {open: false, source: 'n263', target: 'n255'}}
	, {classes: '', data: {open: false, source: 'n255', target: 'n251'}}
	, {classes: '', data: {open: false, source: 'n251', target: 'n250'}}
	, {classes: '', data: {open: false, source: 'n250', target: 'n253'}}
	, {classes: '', data: {open: false, source: 'n253', target: 'n254'}}
	, {classes: '', data: {open: false, source: 'n254', target: 'n262'}}
	, {classes: '', data: {open: false, source: 'n250', target: 'n252'}}
	, {classes: '', data: {open: false, source: 'n252', target: 'n258'}}
	, {classes: 'curve', data: {open: false, source: 'n257', target: 'n258'}}
	, {classes: '', data: {open: false, source: 'n257', target: 'n265'}}
	, {classes: '', data: {open: false, source: 'n256', target: 'n252'}}
	, {classes: '', data: {open: false, source: 'n256', target: 'n264'}}
	, {classes: 'curve', data: {open: false, source: 'n255', target: 'n259'}}
	, {classes: '', data: {open: false, source: 'n259', target: 'n261'}}
	, {classes: 'curve', data: {open: false, source: 'n259', target: 'n256'}}
	, {classes: '', data: {open: false, source: 'n258', target: 'n260'}}
	, {classes: 'between', data: {open: false, source: 'n260', target: 'n276'}}
	, {classes: '', data: {open: false, source: 'n276', target: 'n274'}}
	, {classes: '', data: {open: false, source: 'n274', target: 'n279'}}
	, {classes: '', data: {open: false, source: 'n279', target: 'n282'}}
	, {classes: '', data: {open: false, source: 'n282', target: 'n280'}}
	, {classes: '', data: {open: false, source: 'n280', target: 'n272'}}
	, {classes: '', data: {open: false, source: 'n272', target: 'n270'}}
	, {classes: '', data: {open: false, source: 'n270', target: 'n266'}}
	, {classes: '', data: {open: false, source: 'n266', target: 'n269'}}
	, {classes: '', data: {open: false, source: 'n272', target: 'n275'}}
	, {classes: '', data: {open: false, source: 'n275', target: 'n271'}}
	, {classes: '', data: {open: false, source: 'n271', target: 'n277'}}
	, {classes: '', data: {open: false, source: 'n277', target: 'n267'}}
	, {classes: '', data: {open: false, source: 'n267', target: 'n266'}}
	, {classes: '', data: {open: false, source: 'n266', target: 'n268'}}
	, {classes: '', data: {open: false, source: 'n268', target: 'n273'}}
	, {classes: '', data: {open: false, source: 'n273', target: 'n278'}}
	, {classes: '', data: {open: false, source: 'n278', target: 'n281'}}
	, {classes: 'between', data: {open: false, source: 'n281', target: 'n314'}}
	, {classes: '', data: {open: false, source: 'n314', target: 'n305'}}
	, {classes: '', data: {open: false, source: 'n305', target: 'n310'}}
	, {classes: '', data: {open: false, source: 'n310', target: 'n312'}}
	, {classes: '', data: {open: false, source: 'n312', target: 'n309'}}
	, {classes: '', data: {open: false, source: 'n301', target: 'n305'}}
	, {classes: 'curve', data: {open: false, source: 'n301', target: 'n302'}}
	, {classes: 'curve', data: {open: false, source: 'n300', target: 'n301'}}
	, {classes: '', data: {open: false, source: 'n300', target: 'n299'}}
	, {classes: '', data: {open: false, source: 'n300', target: 'n304'}}
	, {classes: '', data: {open: false, source: 'n304', target: 'n313'}}
	, {classes: '', data: {open: false, source: 'n313', target: 'n303'}}
	, {classes: '', data: {open: false, source: 'n302', target: 'n311'}}
	, {classes: '', data: {open: false, source: 'n311', target: 'n308'}}
	, {classes: '', data: {open: false, source: 'n308', target: 'n306'}}
	, {classes: '', data: {open: false, source: 'n306', target: 'n314'}}
	, {classes: '', data: {open: false, source: 'n311', target: 'n307'}}
	, {classes: 'between', data: {open: false, source: 'n275', target: 'n296'}}
	, {classes: '', data: {open: false, source: 'n296', target: 'n294'}}
	, {classes: '', data: {open: false, source: 'n294', target: 'n289'}}
	, {classes: '', data: {open: false, source: 'n289', target: 'n298'}}
	, {classes: '', data: {open: false, source: 'n298', target: 'n290'}}
	, {classes: '', data: {open: false, source: 'n290', target: 'n292'}}
	, {classes: '', data: {open: false, source: 'n292', target: 'n295'}}
	, {classes: '', data: {open: false, source: 'n295', target: 'n291'}}
	, {classes: '', data: {open: false, source: 'n290', target: 'n285'}}
	, {classes: 'curve', data: {open: false, source: 'n285', target: 'n286'}}
	, {classes: '', data: {open: false, source: 'n286', target: 'n287'}}
	, {classes: '', data: {open: false, source: 'n287', target: 'n297'}}
	, {classes: '', data: {open: false, source: 'n297', target: 'n288'}}
	, {classes: '', data: {open: false, source: 'n288', target: 'n293'}}
	, {classes: 'curve', data: {open: false, source: 'n286', target: 'n284'}}
	, {classes: '', data: {open: false, source: 'n284', target: 'n283'}}
	, {classes: 'between', data: {open: false, source: 'n307', target: 'n329'}}
	, {classes: '', data: {open: false, source: 'n329', target: 'n325'}}
	, {classes: '', data: {open: false, source: 'n320', target: 'n325'}}
	, {classes: '', data: {open: false, source: 'n320', target: 'n316'}}
	, {classes: '', data: {open: false, source: 'n316', target: 'n315'}}
	, {classes: '', data: {open: false, source: 'n329', target: 'n326'}}
	, {classes: '', data: {open: false, source: 'n326', target: 'n321'}}
	, {classes: '', data: {open: false, source: 'n321', target: 'n317'}}
	, {classes: '', data: {open: false, source: 'n317', target: 'n327'}}
	, {classes: '', data: {open: false, source: 'n327', target: 'n318'}}
	, {classes: 'curve', data: {open: false, source: 'n321', target: 'n322'}}
	, {classes: '', data: {open: false, source: 'n322', target: 'n324'}}
	, {classes: '', data: {open: false, source: 'n324', target: 'n328'}}
	, {classes: 'curve', data: {open: false, source: 'n319', target: 'n320'}}
	, {classes: '', data: {open: false, source: 'n319', target: 'n323'}}
	, {classes: 'between', data: {open: false, source: 'n320', target: 'n247'}}
	, {classes: '', data: {open: false, source: 'n247', target: 'n249'}}
	, {classes: '', data: {open: false, source: 'n249', target: 'n237'}}
	, {classes: '', data: {open: false, source: 'n237', target: 'n233'}}
	, {classes: '', data: {open: false, source: 'n233', target: 'n243'}}
	, {classes: '', data: {open: false, source: 'n243', target: 'n240'}}
	, {classes: '', data: {open: false, source: 'n240', target: 'n245'}}
	, {classes: '', data: {open: false, source: 'n249', target: 'n246'}}
	, {classes: '', data: {open: false, source: 'n246', target: 'n241'}}
	, {classes: '', data: {open: false, source: 'n241', target: 'n236'}}
	, {classes: '', data: {open: false, source: 'n247', target: 'n239'}}
	, {classes: '', data: {open: false, source: 'n239', target: 'n242'}}
	, {classes: '', data: {open: false, source: 'n233', target: 'n234'}}
	, {classes: '', data: {open: false, source: 'n234', target: 'n238'}}
	, {classes: '', data: {open: false, source: 'n238', target: 'n244'}}
	, {classes: '', data: {open: false, source: 'n233', target: 'n235'}}
	, {classes: '', data: {open: false, source: 'n235', target: 'n248'}}
	, {classes: 'between', data: {open: false, source: 'n248', target: 'n232'}}
	, {classes: '', data: {open: false, source: 'n224', target: 'n232'}}
	, {classes: 'curve', data: {open: false, source: 'n223', target: 'n224'}}
	, {classes: '', data: {open: false, source: 'n223', target: 'n231'}}
	, {classes: 'curve', data: {open: false, source: 'n226', target: 'n223'}}
	, {classes: '', data: {open: false, source: 'n226', target: 'n228'}}
	, {classes: 'between', data: {open: false, source: 'n228', target: 'n209'}}
	, {classes: '', data: {open: false, source: 'n226', target: 'n218'}}
	, {classes: '', data: {open: false, source: 'n223', target: 'n219'}}
	, {classes: 'curve', data: {open: false, source: 'n219', target: 'n220'}}
	, {classes: '', data: {open: false, source: 'n220', target: 'n217'}}
	, {classes: '', data: {open: false, source: 'n219', target: 'n225'}}
	, {classes: '', data: {open: false, source: 'n225', target: 'n227'}}
	, {classes: 'curve', data: {open: false, source: 'n225', target: 'n221'}}
	, {classes: '', data: {open: false, source: 'n221', target: 'n229'}}
	, {classes: 'curve', data: {open: false, source: 'n221', target: 'n222'}}
	, {classes: '', data: {open: false, source: 'n222', target: 'n230'}}
	, {classes: 'between', data: {open: false, source: 'n163', target: 'n214'}}
	, {classes: '', data: {open: false, source: 'n214', target: 'n206'}}
	, {classes: '', data: {open: false, source: 'n206', target: 'n204'}}
	, {classes: '', data: {open: false, source: 'n204', target: 'n216'}}
	, {classes: '', data: {open: false, source: 'n216', target: 'n203'}}
	, {classes: '', data: {open: false, source: 'n203', target: 'n213'}}
	, {classes: '', data: {open: false, source: 'n213', target: 'n208'}}
	, {classes: '', data: {open: false, source: 'n204', target: 'n200'}}
	, {classes: '', data: {open: false, source: 'n200', target: 'n201'}}
	, {classes: '', data: {open: false, source: 'n201', target: 'n215'}}
	, {classes: '', data: {open: false, source: 'n215', target: 'n212'}}
	, {classes: '', data: {open: false, source: 'n200', target: 'n210'}}
	, {classes: '', data: {open: false, source: 'n210', target: 'n207'}}
	, {classes: '', data: {open: false, source: 'n207', target: 'n202'}}
	, {classes: '', data: {open: false, source: 'n200', target: 'n209'}}
	, {classes: '', data: {open: false, source: 'n209', target: 'n205'}}
	, {classes: '', data: {open: false, source: 'n205', target: 'n211'}}
	, {classes: '', data: {open: false, source: 'n279', target: 'n269'}}
	, {classes: 'between', data: {open: false, source: 'n94', target: 'n418'}}
	, {classes: '', data: {open: false, source: 'n418', target: 'n422'}}
	, {classes: '', data: {open: false, source: 'n422', target: 'n419'}}
	, {classes: '', data: {open: false, source: 'n418', target: 'n412'}}
	, {classes: '', data: {open: false, source: 'n412', target: 'n416'}}
	, {classes: '', data: {open: false, source: 'n418', target: 'n411'}}
	, {classes: 'curve', data: {open: false, source: 'n411', target: 'n409'}}
	, {classes: 'curve', data: {open: false, source: 'n409', target: 'n410'}}
	, {classes: '', data: {open: false, source: 'n410', target: 'n421'}}
	, {classes: '', data: {open: false, source: 'n421', target: 'n413'}}
	, {classes: '', data: {open: false, source: 'n421', target: 'n423'}}
	, {classes: '', data: {open: false, source: 'n409', target: 'n417'}}
	, {classes: '', data: {open: false, source: 'n410', target: 'n408'}}
	, {classes: '', data: {open: false, source: 'n417', target: 'n414'}}
	, {classes: '', data: {open: false, source: 'n417', target: 'n415'}}
	, {classes: '', data: {open: false, source: 'n415', target: 'n420'}}
	, {classes: 'between', data: {open: false, source: 'n417', target: 'n434'}}
	, {classes: '', data: {open: false, source: 'n434', target: 'n432'}}
	, {classes: 'curve', data: {open: false, source: 'n432', target: 'n428'}}
	, {classes: '', data: {open: false, source: 'n428', target: 'n436'}}
	, {classes: '', data: {open: false, source: 'n428', target: 'n427'}}
	, {classes: '', data: {open: false, source: 'n427', target: 'n429'}}
	, {classes: '', data: {open: false, source: 'n429', target: 'n437'}}
	, {classes: 'curve', data: {open: false, source: 'n427', target: 'n425'}}
	, {classes: '', data: {open: false, source: 'n425', target: 'n433'}}
	, {classes: '', data: {open: false, source: 'n433', target: 'n435'}}
	, {classes: 'curve', data: {open: false, source: 'n433', target: 'n430'}}
	, {classes: '', data: {open: false, source: 'n430', target: 'n438'}}
	, {classes: 'curve', data: {open: false, source: 'n430', target: 'n431'}}
	, {classes: '', data: {open: false, source: 'n431', target: 'n439'}}
	, {classes: 'curve', data: {open: false, source: 'n425', target: 'n426'}}
	, {classes: '', data: {open: false, source: 'n426', target: 'n424'}}
	, {classes: 'between', data: {open: false, source: 'n437', target: 'n455'}}
	, {classes: '', data: {open: false, source: 'n455', target: 'n446'}}
	, {classes: '', data: {open: false, source: 'n446', target: 'n441'}}
	, {classes: 'curve', data: {open: false, source: 'n441', target: 'n442'}}
	, {classes: '', data: {open: false, source: 'n442', target: 'n440'}}
	, {classes: '', data: {open: false, source: 'n440', target: 'n443'}}
	, {classes: '', data: {open: false, source: 'n443', target: 'n452'}}
	, {classes: '', data: {open: false, source: 'n452', target: 'n449'}}
	, {classes: '', data: {open: false, source: 'n449', target: 'n447'}}
	, {classes: '', data: {open: false, source: 'n447', target: 'n455'}}
	, {classes: '', data: {open: false, source: 'n452', target: 'n448'}}
	, {classes: '', data: {open: false, source: 'n448', target: 'n444'}}
	, {classes: '', data: {open: false, source: 'n444', target: 'n454'}}
	, {classes: '', data: {open: false, source: 'n446', target: 'n451'}}
	, {classes: '', data: {open: false, source: 'n451', target: 'n453'}}
	, {classes: '', data: {open: false, source: 'n453', target: 'n450'}}
	, {classes: '', data: {open: false, source: 'n450', target: 'n445'}}
	, {classes: 'between', data: {open: false, source: 'n450', target: 'n469'}}
	, {classes: '', data: {open: false, source: 'n469', target: 'n465'}}
	, {classes: '', data: {open: false, source: 'n465', target: 'n463'}}
	, {classes: '', data: {open: false, source: 'n469', target: 'n464'}}
	, {classes: '', data: {open: false, source: 'n464', target: 'n460'}}
	, {classes: '', data: {open: false, source: 'n460', target: 'n459'}}
	, {classes: '', data: {open: false, source: 'n459', target: 'n461'}}
	, {classes: '', data: {open: false, source: 'n461', target: 'n466'}}
	, {classes: '', data: {open: false, source: 'n459', target: 'n468'}}
	, {classes: '', data: {open: false, source: 'n468', target: 'n458'}}
	, {classes: '', data: {open: false, source: 'n458', target: 'n462'}}
	, {classes: '', data: {open: false, source: 'n462', target: 'n457'}}
	, {classes: '', data: {open: false, source: 'n457', target: 'n456'}}
	, {classes: '', data: {open: false, source: 'n462', target: 'n467'}}
	, {classes: '', data: {open: false, source: 'n467', target: 'n470'}}
	, {classes: 'between', data: {open: false, source: 'n467', target: 'n482'}}
	, {classes: '', data: {open: false, source: 'n482', target: 'n472'}}
	, {classes: '', data: {open: false, source: 'n472', target: 'n486'}}
	, {classes: '', data: {open: false, source: 'n482', target: 'n476'}}
	, {classes: '', data: {open: false, source: 'n476', target: 'n480'}}
	, {classes: '', data: {open: false, source: 'n480', target: 'n477'}}
	, {classes: '', data: {open: false, source: 'n477', target: 'n475'}}
	, {classes: '', data: {open: false, source: 'n475', target: 'n485'}}
	, {classes: '', data: {open: false, source: 'n480', target: 'n471'}}
	, {classes: '', data: {open: false, source: 'n471', target: 'n481'}}
	, {classes: '', data: {open: false, source: 'n481', target: 'n479'}}
	, {classes: '', data: {open: false, source: 'n479', target: 'n484'}}
	, {classes: '', data: {open: false, source: 'n484', target: 'n474'}}
	, {classes: '', data: {open: false, source: 'n474', target: 'n487'}}
	, {classes: '', data: {open: false, source: 'n471', target: 'n473'}}
	, {classes: '', data: {open: false, source: 'n473', target: 'n478'}}
	, {classes: '', data: {open: false, source: 'n478', target: 'n483'}}
	, {classes: 'between', data: {open: false, source: 'n483', target: 'n502'}}
	, {classes: '', data: {open: false, source: 'n502', target: 'n494'}}
	, {classes: 'curve', data: {open: false, source: 'n497', target: 'n494'}}
	, {classes: '', data: {open: false, source: 'n497', target: 'n499'}}
	, {classes: '', data: {open: false, source: 'n489', target: 'n494'}}
	, {classes: '', data: {open: false, source: 'n489', target: 'n488'}}
	, {classes: '', data: {open: false, source: 'n489', target: 'n493'}}
	, {classes: '', data: {open: false, source: 'n493', target: 'n501'}}
	, {classes: 'curve', data: {open: false, source: 'n491', target: 'n489'}}
	, {classes: 'curve', data: {open: false, source: 'n490', target: 'n491'}}
	, {classes: '', data: {open: false, source: 'n490', target: 'n495'}}
	, {classes: 'curve', data: {open: false, source: 'n494', target: 'n495'}}
	, {classes: '', data: {open: false, source: 'n495', target: 'n503'}}
	, {classes: 'curve', data: {open: false, source: 'n495', target: 'n496'}}
	, {classes: '', data: {open: false, source: 'n496', target: 'n498'}}
	, {classes: 'curve', data: {open: false, source: 'n496', target: 'n492'}}
	, {classes: '', data: {open: false, source: 'n492', target: 'n500'}}
	, {classes: 'between', data: {open: false, source: 'n421', target: 'n516'}}
	, {classes: '', data: {open: false, source: 'n516', target: 'n519'}}
	, {classes: '', data: {open: false, source: 'n519', target: 'n505'}}
	, {classes: '', data: {open: false, source: 'n505', target: 'n509'}}
	, {classes: '', data: {open: false, source: 'n509', target: 'n515'}}
	, {classes: '', data: {open: false, source: 'n505', target: 'n504'}}
	, {classes: '', data: {open: false, source: 'n506', target: 'n504'}}
	, {classes: '', data: {open: false, source: 'n504', target: 'n508'}}
	, {classes: '', data: {open: false, source: 'n508', target: 'n510'}}
	, {classes: '', data: {open: false, source: 'n510', target: 'n513'}}
	, {classes: '', data: {open: false, source: 'n504', target: 'n507'}}
	, {classes: '', data: {open: false, source: 'n507', target: 'n520'}}
	, {classes: '', data: {open: false, source: 'n520', target: 'n518'}}
	, {classes: '', data: {open: false, source: 'n520', target: 'n517'}}
	, {classes: '', data: {open: false, source: 'n517', target: 'n512'}}
	, {classes: '', data: {open: false, source: 'n512', target: 'n514'}}
	, {classes: '', data: {open: false, source: 'n516', target: 'n511'}}
	, {classes: '', data: {open: false, source: 'n511', target: 'n506'}}
	, {classes: 'between', data: {open: false, source: 'n513', target: 'n391'}}
	, {classes: '', data: {open: false, source: 'n391', target: 'n387'}}
	, {classes: '', data: {open: false, source: 'n387', target: 'n382'}}
	, {classes: '', data: {open: false, source: 'n382', target: 'n380'}}
	, {classes: '', data: {open: false, source: 'n380', target: 'n377'}}
	, {classes: '', data: {open: false, source: 'n380', target: 'n381'}}
	, {classes: '', data: {open: false, source: 'n381', target: 'n385'}}
	, {classes: '', data: {open: false, source: 'n380', target: 'n389'}}
	, {classes: '', data: {open: false, source: 'n389', target: 'n379'}}
	, {classes: '', data: {open: false, source: 'n379', target: 'n383'}}
	, {classes: '', data: {open: false, source: 'n383', target: 'n378'}}
	, {classes: '', data: {open: false, source: 'n378', target: 'n377'}}
	, {classes: '', data: {open: false, source: 'n379', target: 'n384'}}
	, {classes: '', data: {open: false, source: 'n384', target: 'n386'}}
	, {classes: '', data: {open: false, source: 'n386', target: 'n390'}}
	, {classes: '', data: {open: false, source: 'n391', target: 'n388'}}
	, {classes: '', data: {open: false, source: 'n388', target: 'n383'}}
	, {classes: 'between', data: {open: false, source: 'n264', target: 'n365'}}
	, {classes: 'between', data: {open: false, source: 'n374', target: 'n390'}}
	, {classes: '', data: {open: false, source: 'n374', target: 'n371'}}
	, {classes: '', data: {open: false, source: 'n374', target: 'n362'}}
	, {classes: '', data: {open: false, source: 'n362', target: 'n366'}}
	, {classes: '', data: {open: false, source: 'n366', target: 'n375'}}
	, {classes: '', data: {open: false, source: 'n362', target: 'n361'}}
	, {classes: '', data: {open: false, source: 'n361', target: 'n363'}}
	, {classes: 'curve', data: {open: false, source: 'n363', target: 'n364'}}
	, {classes: '', data: {open: false, source: 'n364', target: 'n373'}}
	, {classes: '', data: {open: false, source: 'n373', target: 'n369'}}
	, {classes: '', data: {open: false, source: 'n369', target: 'n365'}}
	, {classes: '', data: {open: false, source: 'n373', target: 'n370'}}
	, {classes: '', data: {open: false, source: 'n370', target: 'n368'}}
	, {classes: '', data: {open: false, source: 'n368', target: 'n376'}}
	, {classes: '', data: {open: false, source: 'n376', target: 'n367'}}
	, {classes: '', data: {open: false, source: 'n367', target: 'n372'}}
	, {classes: '', data: {open: false, source: 'n367', target: 'n362'}}
	, {classes: 'between', data: {open: false, source: 'n368', target: 'n397'}}
	, {classes: '', data: {open: false, source: 'n397', target: 'n402'}}
	, {classes: '', data: {open: false, source: 'n402', target: 'n405'}}
	, {classes: '', data: {open: false, source: 'n405', target: 'n403'}}
	, {classes: '', data: {open: false, source: 'n403', target: 'n398'}}
	, {classes: '', data: {open: false, source: 'n398', target: 'n407'}}
	, {classes: '', data: {open: false, source: 'n407', target: 'n399'}}
	, {classes: '', data: {open: false, source: 'n399', target: 'n401'}}
	, {classes: '', data: {open: false, source: 'n404', target: 'n401'}}
	, {classes: '', data: {open: false, source: 'n404', target: 'n400'}}
	, {classes: '', data: {open: false, source: 'n400', target: 'n396'}}
	, {classes: '', data: {open: false, source: 'n396', target: 'n406'}}
	, {classes: '', data: {open: false, source: 'n406', target: 'n397'}}
	, {classes: '', data: {open: false, source: 'n395', target: 'n404'}}
	, {classes: 'curve', data: {open: false, source: 'n393', target: 'n394'}}
	, {classes: 'curve', data: {open: false, source: 'n394', target: 'n395'}}
	, {classes: '', data: {open: false, source: 'n392', target: 'n393'}}
	, {classes: 'between', data: {open: false, source: 'n517', target: 'n525'}}
	, {classes: '', data: {open: false, source: 'n525', target: 'n535'}}
	, {classes: '', data: {open: false, source: 'n535', target: 'n526'}}
	, {classes: '', data: {open: false, source: 'n525', target: 'n529'}}
	, {classes: '', data: {open: false, source: 'n529', target: 'n533'}}
	, {classes: '', data: {open: false, source: 'n533', target: 'n530'}}
	, {classes: '', data: {open: false, source: 'n530', target: 'n528'}}
	, {classes: '', data: {open: false, source: 'n528', target: 'n536'}}
	, {classes: '', data: {open: false, source: 'n536', target: 'n527'}}
	, {classes: '', data: {open: false, source: 'n527', target: 'n532'}}
	, {classes: '', data: {open: false, source: 'n532', target: 'n534'}}
	, {classes: '', data: {open: false, source: 'n534', target: 'n531'}}
	, {classes: '', data: {open: false, source: 'n527', target: 'n523'}}
	, {classes: 'curve', data: {open: false, source: 'n523', target: 'n524'}}
	, {classes: 'curve', data: {open: false, source: 'n524', target: 'n522'}}
	, {classes: '', data: {open: false, source: 'n522', target: 'n521'}}
	, {classes: 'between', data: {open: false, source: 'n435', target: 'n549'}}
	, {classes: '', data: {open: false, source: 'n549', target: 'n546'}}
	, {classes: '', data: {open: false, source: 'n546', target: 'n544'}}
	, {classes: '', data: {open: false, source: 'n544', target: 'n552'}}
	, {classes: '', data: {open: false, source: 'n549', target: 'n545'}}
	, {classes: '', data: {open: false, source: 'n545', target: 'n541'}}
	, {classes: '', data: {open: false, source: 'n541', target: 'n551'}}
	, {classes: '', data: {open: false, source: 'n551', target: 'n542'}}
	, {classes: '', data: {open: false, source: 'n542', target: 'n547'}}
	, {classes: '', data: {open: false, source: 'n547', target: 'n550'}}
	, {classes: '', data: {open: false, source: 'n550', target: 'n548'}}
	, {classes: '', data: {open: false, source: 'n548', target: 'n543'}}
	, {classes: '', data: {open: false, source: 'n537', target: 'n538'}}
	, {classes: 'curve', data: {open: false, source: 'n538', target: 'n539'}}
	, {classes: 'curve', data: {open: false, source: 'n539', target: 'n540'}}
	, {classes: '', data: {open: false, source: 'n540', target: 'n542'}}
	, {classes: 'between', data: {open: false, source: 'n282', target: 'n344'}}
	, {classes: '', data: {open: false, source: 'n344', target: 'n340'}}
	, {classes: '', data: {open: false, source: 'n340', target: 'n333'}}
	, {classes: '', data: {open: false, source: 'n333', target: 'n330'}}
	, {classes: '', data: {open: false, source: 'n330', target: 'n331'}}
	, {classes: 'curve', data: {open: false, source: 'n331', target: 'n332'}}
	, {classes: '', data: {open: false, source: 'n332', target: 'n343'}}
	, {classes: '', data: {open: false, source: 'n343', target: 'n345'}}
	, {classes: '', data: {open: false, source: 'n345', target: 'n342'}}
	, {classes: '', data: {open: false, source: 'n342', target: 'n337'}}
	, {classes: '', data: {open: false, source: 'n344', target: 'n341'}}
	, {classes: '', data: {open: false, source: 'n341', target: 'n336'}}
	, {classes: '', data: {open: false, source: 'n336', target: 'n339'}}
	, {classes: '', data: {open: false, source: 'n343', target: 'n335'}}
	, {classes: '', data: {open: false, source: 'n335', target: 'n338'}}
	, {classes: '', data: {open: false, source: 'n338', target: 'n334'}}
	, {classes: 'between', data: {open: false, source: 'n335', target: 'n360'}}
	, {classes: '', data: {open: false, source: 'n360', target: 'n357'}}
	, {classes: '', data: {open: false, source: 'n360', target: 'n356'}}
	, {classes: '', data: {open: false, source: 'n351', target: 'n356'}}
	, {classes: 'curve', data: {open: false, source: 'n350', target: 'n351'}}
	, {classes: '', data: {open: false, source: 'n350', target: 'n354'}}
	, {classes: '', data: {open: false, source: 'n351', target: 'n347'}}
	, {classes: '', data: {open: false, source: 'n347', target: 'n346'}}
	, {classes: 'curve', data: {open: false, source: 'n348', target: 'n349'}}
	, {classes: 'curve', data: {open: false, source: 'n349', target: 'n347'}}
	, {classes: '', data: {open: false, source: 'n348', target: 'n358'}}
	, {classes: '', data: {open: false, source: 'n358', target: 'n359'}}
	, {classes: '', data: {open: false, source: 'n359', target: 'n355'}}
	, {classes: '', data: {open: false, source: 'n353', target: 'n355'}}
	, {classes: 'curve', data: {open: false, source: 'n352', target: 'n353'}}
	, {classes: 'between', data: {open: false, source: 'n359', target: 'n584'}}
	, {classes: '', data: {open: false, source: 'n581', target: 'n579'}}
	, {classes: 'curve', data: {open: false, source: 'n579', target: 'n576'}}
	, {classes: 'curve', data: {open: false, source: 'n576', target: 'n577'}}
	, {classes: 'curve', data: {open: false, source: 'n577', target: 'n578'}}
	, {classes: 'curve', data: {open: false, source: 'n578', target: 'n574'}}
	, {classes: '', data: {open: false, source: 'n574', target: 'n573'}}
	, {classes: '', data: {open: false, source: 'n573', target: 'n575'}}
	, {classes: '', data: {open: false, source: 'n575', target: 'n583'}}
	, {classes: '', data: {open: false, source: 'n574', target: 'n582'}}
	, {classes: '', data: {open: false, source: 'n578', target: 'n580'}}
	, {classes: '', data: {open: false, source: 'n577', target: 'n585'}}
	, {classes: '', data: {open: false, source: 'n576', target: 'n571'}}
	, {classes: 'curve', data: {open: false, source: 'n571', target: 'n572'}}
	, {classes: '', data: {open: false, source: 'n572', target: 'n570'}}
	, {classes: '', data: {open: false, source: 'n576', target: 'n584'}}
	, {classes: 'between', data: {open: false, source: 'n582', target: 'n567'}}
	, {classes: '', data: {open: false, source: 'n567', target: 'n557'}}
	, {classes: '', data: {open: false, source: 'n557', target: 'n559'}}
	, {classes: '', data: {open: false, source: 'n559', target: 'n562'}}
	, {classes: '', data: {open: false, source: 'n562', target: 'n553'}}
	, {classes: '', data: {open: false, source: 'n553', target: 'n556'}}
	, {classes: '', data: {open: false, source: 'n556', target: 'n569'}}
	, {classes: '', data: {open: false, source: 'n569', target: 'n566'}}
	, {classes: '', data: {open: false, source: 'n566', target: 'n561'}}
	, {classes: '', data: {open: false, source: 'n561', target: 'n563'}}
	, {classes: '', data: {open: false, source: 'n563', target: 'n560'}}
	, {classes: '', data: {open: false, source: 'n553', target: 'n555'}}
	, {classes: '', data: {open: false, source: 'n555', target: 'n568'}}
	, {classes: '', data: {open: false, source: 'n568', target: 'n565'}}
	, {classes: 'between', data: {open: false, source: 'n565', target: 'n328'}}
	, {classes: '', data: {open: false, source: 'n553', target: 'n554'}}
	, {classes: '', data: {open: false, source: 'n554', target: 'n558'}}
	, {classes: '', data: {open: false, source: 'n558', target: 'n564'}}
	, {classes: 'between', data: {open: false, source: 'n210', target: 'n627'}}
	, {classes: '', data: {open: false, source: 'n627', target: 'n630'}}
	, {classes: '', data: {open: false, source: 'n630', target: 'n626'}}
	, {classes: 'curve', data: {open: false, source: 'n621', target: 'n619'}}
	, {classes: 'curve', data: {open: false, source: 'n619', target: 'n620'}}
	, {classes: '', data: {open: false, source: 'n620', target: 'n630'}}
	, {classes: '', data: {open: false, source: 'n620', target: 'n625'}}
	, {classes: '', data: {open: false, source: 'n625', target: 'n633'}}
	, {classes: '', data: {open: false, source: 'n633', target: 'n624'}}
	, {classes: '', data: {open: false, source: 'n624', target: 'n629'}}
	, {classes: '', data: {open: false, source: 'n621', target: 'n622'}}
	, {classes: '', data: {open: false, source: 'n621', target: 'n623'}}
	, {classes: '', data: {open: false, source: 'n623', target: 'n632'}}
	, {classes: '', data: {open: false, source: 'n623', target: 'n628'}}
	, {classes: '', data: {open: false, source: 'n628', target: 'n631'}}
	, {classes: '', data: {open: false, source: 'n619', target: 'n618'}}
	, {classes: 'between', data: {open: false, source: 'n628', target: 'n610'}}
	, {classes: '', data: {open: false, source: 'n610', target: 'n614'}}
	, {classes: '', data: {open: false, source: 'n614', target: 'n611'}}
	, {classes: '', data: {open: false, source: 'n611', target: 'n609'}}
	, {classes: '', data: {open: false, source: 'n609', target: 'n617'}}
	, {classes: '', data: {open: false, source: 'n617', target: 'n608'}}
	, {classes: '', data: {open: false, source: 'n608', target: 'n613'}}
	, {classes: '', data: {open: false, source: 'n613', target: 'n615'}}
	, {classes: '', data: {open: false, source: 'n615', target: 'n612'}}
	, {classes: '', data: {open: false, source: 'n612', target: 'n607'}}
	, {classes: '', data: {open: false, source: 'n607', target: 'n616'}}
	, {classes: '', data: {open: false, source: 'n616', target: 'n606'}}
	, {classes: '', data: {open: false, source: 'n606', target: 'n610'}}
	, {classes: 'between', data: {open: false, source: 'n615', target: 'n596'}}
	, {classes: '', data: {open: false, source: 'n602', target: 'n605'}}
	, {classes: 'curve', data: {open: false, source: 'n605', target: 'n603'}}
	, {classes: 'curve', data: {open: false, source: 'n603', target: 'n604'}}
	, {classes: '', data: {open: false, source: 'n604', target: 'n608'}}
	, {classes: '', data: {open: false, source: 'n596', target: 'n594'}}
	, {classes: '', data: {open: false, source: 'n594', target: 'n589'}}
	, {classes: '', data: {open: false, source: 'n589', target: 'n590'}}
	, {classes: '', data: {open: false, source: 'n590', target: 'n598'}}
	, {classes: 'curve', data: {open: false, source: 'n591', target: 'n595'}}
	, {classes: 'curve', data: {open: false, source: 'n595', target: 'n592'}}
	, {classes: 'curve', data: {open: false, source: 'n592', target: 'n593'}}
	, {classes: 'curve', data: {open: false, source: 'n587', target: 'n588'}}
	, {classes: '', data: {open: false, source: 'n588', target: 'n586'}}
	, {classes: '', data: {open: false, source: 'n586', target: 'n589'}}
	, {classes: '', data: {open: false, source: 'n592', target: 'n587'}}
	, {classes: '', data: {open: false, source: 'n593', target: 'n601'}}
	, {classes: '', data: {open: false, source: 'n592', target: 'n600'}}
	, {classes: '', data: {open: false, source: 'n595', target: 'n597'}}
	, {classes: '', data: {open: false, source: 'n591', target: 'n599'}}
	, {classes: 'between', data: {open: false, source: 'n600', target: 'n195'}}
	, {classes: 'between', data: {open: false, source: 'n460', target: 'n649'}}
	, {classes: '', data: {open: false, source: 'n649', target: 'n647'}}
	, {classes: '', data: {open: false, source: 'n647', target: 'n639'}}
	, {classes: '', data: {open: false, source: 'n639', target: 'n642'}}
	, {classes: '', data: {open: false, source: 'n647', target: 'n636'}}
	, {classes: '', data: {open: false, source: 'n636', target: 'n634'}}
	, {classes: '', data: {open: false, source: 'n634', target: 'n635'}}
	, {classes: '', data: {open: false, source: 'n635', target: 'n643'}}
	, {classes: '', data: {open: false, source: 'n643', target: 'n640'}}
	, {classes: '', data: {open: false, source: 'n643', target: 'n641'}}
	, {classes: '', data: {open: false, source: 'n641', target: 'n646'}}
	, {classes: '', data: {open: false, source: 'n634', target: 'n637'}}
	, {classes: '', data: {open: false, source: 'n637', target: 'n644'}}
	, {classes: '', data: {open: false, source: 'n644', target: 'n638'}}
	, {classes: '', data: {open: false, source: 'n644', target: 'n648'}}
	, {classes: '', data: {open: false, source: 'n648', target: 'n645'}}
	, {classes: 'between', data: {open: false, source: 'n645', target: 'n656'}}
	, {classes: 'between', data: {open: false, source: 'n597', target: 'n663'}}
	, {classes: '', data: {open: false, source: 'n663', target: 'n658'}}
	, {classes: '', data: {open: false, source: 'n658', target: 'n654'}}
	, {classes: '', data: {open: false, source: 'n654', target: 'n653'}}
	, {classes: '', data: {open: false, source: 'n653', target: 'n655'}}
	, {classes: '', data: {open: false, source: 'n653', target: 'n662'}}
	, {classes: '', data: {open: false, source: 'n662', target: 'n652'}}
	, {classes: '', data: {open: false, source: 'n652', target: 'n657'}}
	, {classes: '', data: {open: false, source: 'n657', target: 'n659'}}
	, {classes: '', data: {open: false, source: 'n652', target: 'n656'}}
	, {classes: '', data: {open: false, source: 'n656', target: 'n651'}}
	, {classes: '', data: {open: false, source: 'n651', target: 'n650'}}
	, {classes: '', data: {open: false, source: 'n656', target: 'n661'}}
	, {classes: '', data: {open: false, source: 'n661', target: 'n664'}}
	, {classes: '', data: {open: false, source: 'n664', target: 'n660'}}
	, {classes: 'between', data: {open: false, source: 'n655', target: 'n678'}}
	, {classes: '', data: {open: false, source: 'n678', target: 'n673'}}
	, {classes: '', data: {open: false, source: 'n673', target: 'n675'}}
	, {classes: '', data: {open: false, source: 'n675', target: 'n672'}}
	, {classes: '', data: {open: false, source: 'n672', target: 'n677'}}
	, {classes: '', data: {open: false, source: 'n673', target: 'n668'}}
	, {classes: '', data: {open: false, source: 'n668', target: 'n681'}}
	, {classes: '', data: {open: false, source: 'n681', target: 'n679'}}
	, {classes: '', data: {open: false, source: 'n679', target: 'n669'}}
	, {classes: '', data: {open: false, source: 'n669', target: 'n665'}}
	, {classes: '', data: {open: false, source: 'n665', target: 'n667'}}
	, {classes: '', data: {open: false, source: 'n667', target: 'n680'}}
	, {classes: '', data: {open: false, source: 'n669', target: 'n671'}}
	, {classes: '', data: {open: false, source: 'n671', target: 'n674'}}
	, {classes: '', data: {open: false, source: 'n674', target: 'n670'}}
	, {classes: '', data: {open: false, source: 'n670', target: 'n676'}}
	, {classes: '', data: {open: false, source: 'n676', target: 'n666'}}
	, {classes: 'between', data: {open: false, source: 'n677', target: 'n693'}}
	, {classes: '', data: {open: false, source: 'n693', target: 'n695'}}
	, {classes: '', data: {open: false, source: 'n695', target: 'n692'}}
	, {classes: '', data: {open: false, source: 'n692', target: 'n687'}}
	, {classes: '', data: {open: false, source: 'n687', target: 'n696'}}
	, {classes: '', data: {open: false, source: 'n696', target: 'n686'}}
	, {classes: '', data: {open: false, source: 'n686', target: 'n690'}}
	, {classes: '', data: {open: false, source: 'n690', target: 'n694'}}
	, {classes: '', data: {open: false, source: 'n694', target: 'n691'}}
	, {classes: '', data: {open: false, source: 'n693', target: 'n688'}}
	, {classes: '', data: {open: false, source: 'n688', target: 'n697'}}
	, {classes: '', data: {open: false, source: 'n697', target: 'n689'}}
	, {classes: '', data: {open: false, source: 'n689', target: 'n684'}}
	, {classes: 'curve', data: {open: false, source: 'n684', target: 'n685'}}
	, {classes: 'curve', data: {open: false, source: 'n685', target: 'n683'}}
	, {classes: '', data: {open: false, source: 'n683', target: 'n682'}}
	, {classes: 'between', data: {open: false, source: 'n674', target: 'n804'}}
	, {classes: '', data: {open: false, source: 'n804', target: 'n801'}}
	, {classes: '', data: {open: false, source: 'n801', target: 'n806'}}
	, {classes: '', data: {open: false, source: 'n806', target: 'n809'}}
	, {classes: '', data: {open: false, source: 'n804', target: 'n796'}}
	, {classes: '', data: {open: false, source: 'n796', target: 'n795'}}
	, {classes: '', data: {open: false, source: 'n795', target: 'n797'}}
	, {classes: 'curve', data: {open: false, source: 'n797', target: 'n798'}}
	, {classes: '', data: {open: false, source: 'n798', target: 'n805'}}
	, {classes: '', data: {open: false, source: 'n805', target: 'n799'}}
	, {classes: '', data: {open: false, source: 'n797', target: 'n808'}}
	, {classes: '', data: {open: false, source: 'n808', target: 'n810'}}
	, {classes: '', data: {open: false, source: 'n810', target: 'n807'}}
	, {classes: '', data: {open: false, source: 'n807', target: 'n802'}}
	, {classes: '', data: {open: false, source: 'n808', target: 'n800'}}
	, {classes: '', data: {open: false, source: 'n800', target: 'n803'}}
	, {classes: 'between', data: {open: false, source: 'n803', target: 'n745'}}
	, {classes: '', data: {open: false, source: 'n745', target: 'n742'}}
	, {classes: '', data: {open: false, source: 'n742', target: 'n737'}}
	, {classes: '', data: {open: false, source: 'n737', target: 'n732'}}
	, {classes: '', data: {open: false, source: 'n733', target: 'n731'}}
	, {classes: 'curve', data: {open: false, source: 'n737', target: 'n738'}}
	, {classes: '', data: {open: false, source: 'n737', target: 'n733'}}
	, {classes: 'curve', data: {open: false, source: 'n733', target: 'n734'}}
	, {classes: '', data: {open: false, source: 'n734', target: 'n736'}}
	, {classes: '', data: {open: false, source: 'n736', target: 'n741'}}
	, {classes: '', data: {open: false, source: 'n734', target: 'n735'}}
	, {classes: '', data: {open: false, source: 'n735', target: 'n739'}}
	, {classes: '', data: {open: false, source: 'n734', target: 'n743'}}
	, {classes: '', data: {open: false, source: 'n738', target: 'n740'}}
	, {classes: '', data: {open: false, source: 'n740', target: 'n744'}}
	, {classes: 'between', data: {open: false, source: 'n735', target: 'n760'}}
	, {classes: '', data: {open: false, source: 'n760', target: 'n750'}}
	, {classes: '', data: {open: false, source: 'n750', target: 'n752'}}
	, {classes: '', data: {open: false, source: 'n752', target: 'n755'}}
	, {classes: '', data: {open: false, source: 'n755', target: 'n746'}}
	, {classes: '', data: {open: false, source: 'n746', target: 'n756'}}
	, {classes: '', data: {open: false, source: 'n756', target: 'n753'}}
	, {classes: '', data: {open: false, source: 'n753', target: 'n758'}}
	, {classes: '', data: {open: false, source: 'n756', target: 'n754'}}
	, {classes: '', data: {open: false, source: 'n754', target: 'n759'}}
	, {classes: '', data: {open: false, source: 'n759', target: 'n762'}}
	, {classes: '', data: {open: false, source: 'n762', target: 'n749'}}
	, {classes: '', data: {open: false, source: 'n755', target: 'n751'}}
	, {classes: '', data: {open: false, source: 'n751', target: 'n757'}}
	, {classes: '', data: {open: false, source: 'n757', target: 'n747'}}
	, {classes: '', data: {open: false, source: 'n747', target: 'n761'}}
	, {classes: 'between', data: {open: false, source: 'n761', target: 'n778'}}
	, {classes: '', data: {open: false, source: 'n778', target: 'n769'}}
	, {classes: '', data: {open: false, source: 'n769', target: 'n765'}}
	, {classes: 'curve', data: {open: false, source: 'n765', target: 'n766'}}
	, {classes: 'curve', data: {open: false, source: 'n766', target: 'n764'}}
	, {classes: '', data: {open: false, source: 'n764', target: 'n763'}}
	, {classes: '', data: {open: false, source: 'n778', target: 'n770'}}
	, {classes: '', data: {open: false, source: 'n770', target: 'n772'}}
	, {classes: '', data: {open: false, source: 'n772', target: 'n775'}}
	, {classes: '', data: {open: false, source: 'n775', target: 'n771'}}
	, {classes: '', data: {open: false, source: 'n771', target: 'n767'}}
	, {classes: '', data: {open: false, source: 'n767', target: 'n777'}}
	, {classes: '', data: {open: false, source: 'n777', target: 'n768'}}
	, {classes: '', data: {open: false, source: 'n768', target: 'n773'}}
	, {classes: '', data: {open: false, source: 'n773', target: 'n776'}}
	, {classes: '', data: {open: false, source: 'n776', target: 'n774'}}
	, {classes: 'between', data: {open: false, source: 'n744', target: 'n790'}}
	, {classes: '', data: {open: false, source: 'n790', target: 'n788'}}
	, {classes: 'curve', data: {open: false, source: 'n788', target: 'n785'}}
	, {classes: 'curve', data: {open: false, source: 'n785', target: 'n786'}}
	, {classes: '', data: {open: false, source: 'n786', target: 'n794'}}
	, {classes: '', data: {open: false, source: 'n785', target: 'n793'}}
	, {classes: '', data: {open: false, source: 'n780', target: 'n788'}}
	, {classes: 'curve', data: {open: false, source: 'n782', target: 'n780'}}
	, {classes: '', data: {open: false, source: 'n782', target: 'n784'}}
	, {classes: '', data: {open: false, source: 'n784', target: 'n792'}}
	, {classes: '', data: {open: false, source: 'n782', target: 'n787'}}
	, {classes: '', data: {open: false, source: 'n787', target: 'n789'}}
	, {classes: '', data: {open: false, source: 'n782', target: 'n783'}}
	, {classes: '', data: {open: false, source: 'n783', target: 'n791'}}
	, {classes: '', data: {open: false, source: 'n786', target: 'n781'}}
	, {classes: '', data: {open: false, source: 'n781', target: 'n779'}}
	, {classes: 'between', data: {open: false, source: 'n794', target: 'n707'}}
	, {classes: '', data: {open: false, source: 'n707', target: 'n704'}}
	, {classes: '', data: {open: false, source: 'n707', target: 'n705'}}
	, {classes: '', data: {open: false, source: 'n699', target: 'n707'}}
	, {classes: '', data: {open: false, source: 'n698', target: 'n701'}}
	, {classes: 'curve', data: {open: false, source: 'n701', target: 'n699'}}
	, {classes: 'curve', data: {open: false, source: 'n699', target: 'n700'}}
	, {classes: '', data: {open: false, source: 'n700', target: 'n711'}}
	, {classes: '', data: {open: false, source: 'n711', target: 'n713'}}
	, {classes: '', data: {open: false, source: 'n713', target: 'n710'}}
	, {classes: '', data: {open: false, source: 'n711', target: 'n703'}}
	, {classes: '', data: {open: false, source: 'n703', target: 'n706'}}
	, {classes: '', data: {open: false, source: 'n706', target: 'n702'}}
	, {classes: '', data: {open: false, source: 'n702', target: 'n708'}}
	, {classes: '', data: {open: false, source: 'n708', target: 'n712'}}
	, {classes: '', data: {open: false, source: 'n712', target: 'n709'}}
	, {classes: 'between', data: {open: false, source: 'n710', target: 'n230'}}
	, {classes: 'between', data: {open: false, source: 'n709', target: 'n730'}}
	, {classes: '', data: {open: false, source: 'n730', target: 'n721'}}
	, {classes: '', data: {open: false, source: 'n721', target: 'n726'}}
	, {classes: '', data: {open: false, source: 'n726', target: 'n728'}}
	, {classes: '', data: {open: false, source: 'n728', target: 'n725'}}
	, {classes: '', data: {open: false, source: 'n725', target: 'n720'}}
	, {classes: '', data: {open: false, source: 'n720', target: 'n729'}}
	, {classes: '', data: {open: false, source: 'n729', target: 'n719'}}
	, {classes: '', data: {open: false, source: 'n719', target: 'n723'}}
	, {classes: 'curve', data: {open: false, source: 'n721', target: 'n722'}}
	, {classes: '', data: {open: false, source: 'n722', target: 'n724'}}
	, {classes: '', data: {open: false, source: 'n724', target: 'n727'}}
	, {classes: '', data: {open: false, source: 'n718', target: 'n727'}}
	, {classes: '', data: {open: false, source: 'n714', target: 'n715'}}
	, {classes: 'curve', data: {open: false, source: 'n715', target: 'n716'}}
	, {classes: 'curve', data: {open: false, source: 'n716', target: 'n718'}}
	, {classes: 'between', data: {open: false, source: 'n352', target: 'n821'}}
	, {classes: '', data: {open: false, source: 'n821', target: 'n814'}}
	, {classes: '', data: {open: false, source: 'n814', target: 'n811'}}
	, {classes: '', data: {open: false, source: 'n811', target: 'n812'}}
	, {classes: '', data: {open: false, source: 'n812', target: 'n820'}}
	, {classes: '', data: {open: false, source: 'n820', target: 'n817'}}
	, {classes: '', data: {open: false, source: 'n817', target: 'n822'}}
	, {classes: '', data: {open: false, source: 'n822', target: 'n825'}}
	, {classes: '', data: {open: false, source: 'n820', target: 'n818'}}
	, {classes: '', data: {open: false, source: 'n818', target: 'n823'}}
	, {classes: '', data: {open: false, source: 'n823', target: 'n826'}}
	, {classes: '', data: {open: false, source: 'n811', target: 'n813'}}
	, {classes: '', data: {open: false, source: 'n813', target: 'n824'}}
	, {classes: '', data: {open: false, source: 'n824', target: 'n816'}}
	, {classes: '', data: {open: false, source: 'n816', target: 'n819'}}
	, {classes: '', data: {open: false, source: 'n819', target: 'n815'}}
	, {classes: 'between', data: {open: false, source: 'n824', target: 'n838'}}
	, {classes: '', data: {open: false, source: 'n838', target: 'n832'}}
	, {classes: '', data: {open: false, source: 'n832', target: 'n836'}}
	, {classes: '', data: {open: false, source: 'n838', target: 'n828'}}
	, {classes: '', data: {open: false, source: 'n828', target: 'n827'}}
	, {classes: '', data: {open: false, source: 'n827', target: 'n837'}}
	, {classes: '', data: {open: false, source: 'n837', target: 'n834'}}
	, {classes: '', data: {open: false, source: 'n834', target: 'n839'}}
	, {classes: '', data: {open: false, source: 'n839', target: 'n842'}}
	, {classes: '', data: {open: false, source: 'n842', target: 'n829'}}
	, {classes: '', data: {open: false, source: 'n837', target: 'n835'}}
	, {classes: '', data: {open: false, source: 'n835', target: 'n830'}}
	, {classes: '', data: {open: false, source: 'n830', target: 'n843'}}
	, {classes: '', data: {open: false, source: 'n843', target: 'n840'}}
	, {classes: '', data: {open: false, source: 'n843', target: 'n841'}}
	, {classes: '', data: {open: false, source: 'n841', target: 'n833'}}
	, {classes: '', data: {open: false, source: 'n833', target: 'n831'}}
	, {classes: 'between', data: {open: false, source: 'n837', target: 'n852'}}
	, {classes: 'curve', data: {open: false, source: 'n845', target: 'n846'}}
	, {classes: 'curve', data: {open: false, source: 'n846', target: 'n847'}}
	, {classes: '', data: {open: false, source: 'n847', target: 'n844'}}
	, {classes: '', data: {open: false, source: 'n847', target: 'n854'}}
	, {classes: '', data: {open: false, source: 'n854', target: 'n858'}}
	, {classes: '', data: {open: false, source: 'n852', target: 'n848'}}
	, {classes: '', data: {open: false, source: 'n852', target: 'n849'}}
	, {classes: '', data: {open: false, source: 'n849', target: 'n857'}}
	, {classes: '', data: {open: false, source: 'n857', target: 'n859'}}
	, {classes: '', data: {open: false, source: 'n846', target: 'n857'}}
	, {classes: '', data: {open: false, source: 'n845', target: 'n853'}}
	, {classes: '', data: {open: false, source: 'n853', target: 'n850'}}
	, {classes: '', data: {open: false, source: 'n850', target: 'n855'}}
	, {classes: '', data: {open: false, source: 'n853', target: 'n851'}}
	, {classes: '', data: {open: false, source: 'n851', target: 'n856'}}
	, {classes: 'between', data: {open: false, source: 'n840', target: 'n921'}}
	, {classes: '', data: {open: false, source: 'n913', target: 'n921'}}
	, {classes: 'curve', data: {open: false, source: 'n917', target: 'n913'}}
	, {classes: '', data: {open: false, source: 'n917', target: 'n919'}}
	, {classes: '', data: {open: false, source: 'n917', target: 'n911'}}
	, {classes: '', data: {open: false, source: 'n911', target: 'n916'}}
	, {classes: '', data: {open: false, source: 'n916', target: 'n924'}}
	, {classes: '', data: {open: false, source: 'n915', target: 'n911'}}
	, {classes: '', data: {open: false, source: 'n915', target: 'n923'}}
	, {classes: 'curve', data: {open: false, source: 'n918', target: 'n915'}}
	, {classes: '', data: {open: false, source: 'n918', target: 'n920'}}
	, {classes: 'curve', data: {open: false, source: 'n912', target: 'n910'}}
	, {classes: '', data: {open: false, source: 'n910', target: 'n915'}}
	, {classes: '', data: {open: false, source: 'n912', target: 'n914'}}
	, {classes: '', data: {open: false, source: 'n914', target: 'n922'}}
	, {classes: '', data: {open: false, source: 'n910', target: 'n909'}}
	, {classes: 'between', data: {open: false, source: 'n920', target: 'n933'}}
	, {classes: '', data: {open: false, source: 'n933', target: 'n937'}}
	, {classes: '', data: {open: false, source: 'n937', target: 'n934'}}
	, {classes: '', data: {open: false, source: 'n934', target: 'n932'}}
	, {classes: '', data: {open: false, source: 'n932', target: 'n940'}}
	, {classes: '', data: {open: false, source: 'n940', target: 'n931'}}
	, {classes: '', data: {open: false, source: 'n931', target: 'n936'}}
	, {classes: '', data: {open: false, source: 'n936', target: 'n938'}}
	, {classes: '', data: {open: false, source: 'n938', target: 'n935'}}
	, {classes: '', data: {open: false, source: 'n925', target: 'n926'}}
	, {classes: 'curve', data: {open: false, source: 'n926', target: 'n927'}}
	, {classes: 'curve', data: {open: false, source: 'n927', target: 'n928'}}
	, {classes: '', data: {open: false, source: 'n928', target: 'n930'}}
	, {classes: '', data: {open: false, source: 'n930', target: 'n939'}}
	, {classes: '', data: {open: false, source: 'n939', target: 'n929'}}
	, {classes: '', data: {open: false, source: 'n929', target: 'n937'}}
	, {classes: 'between', data: {open: false, source: 'n853', target: 'n954'}}
	, {classes: '', data: {open: false, source: 'n954', target: 'n949'}}
	, {classes: '', data: {open: false, source: 'n949', target: 'n945'}}
	, {classes: 'curve', data: {open: false, source: 'n945', target: 'n946'}}
	, {classes: '', data: {open: false, source: 'n946', target: 'n951'}}
	, {classes: '', data: {open: false, source: 'n951', target: 'n955'}}
	, {classes: '', data: {open: false, source: 'n955', target: 'n952'}}
	, {classes: '', data: {open: false, source: 'n952', target: 'n947'}}
	, {classes: 'curve', data: {open: false, source: 'n947', target: 'n948'}}
	, {classes: '', data: {open: false, source: 'n948', target: 'n950'}}
	, {classes: '', data: {open: false, source: 'n948', target: 'n943'}}
	, {classes: '', data: {open: false, source: 'n943', target: 'n953'}}
	, {classes: '', data: {open: false, source: 'n946', target: 'n942'}}
	, {classes: '', data: {open: false, source: 'n942', target: 'n947'}}
	, {classes: '', data: {open: false, source: 'n942', target: 'n941'}}
	, {classes: '', data: {open: false, source: 'n945', target: 'n944'}}
	, {classes: 'between', data: {open: false, source: 'n955', target: 'n903'}}
	, {classes: '', data: {open: false, source: 'n903', target: 'n901'}}
	, {classes: 'curve', data: {open: false, source: 'n901', target: 'n897'}}
	, {classes: 'curve', data: {open: false, source: 'n900', target: 'n901'}}
	, {classes: '', data: {open: false, source: 'n900', target: 'n908'}}
	, {classes: '', data: {open: false, source: 'n900', target: 'n895'}}
	, {classes: 'curve', data: {open: false, source: 'n896', target: 'n894'}}
	, {classes: 'curve', data: {open: false, source: 'n894', target: 'n895'}}
	, {classes: '', data: {open: false, source: 'n895', target: 'n893'}}
	, {classes: '', data: {open: false, source: 'n896', target: 'n897'}}
	, {classes: '', data: {open: false, source: 'n897', target: 'n905'}}
	, {classes: '', data: {open: false, source: 'n896', target: 'n898'}}
	, {classes: '', data: {open: false, source: 'n898', target: 'n906'}}
	, {classes: '', data: {open: false, source: 'n895', target: 'n899'}}
	, {classes: '', data: {open: false, source: 'n899', target: 'n907'}}
	, {classes: '', data: {open: false, source: 'n894', target: 'n902'}}
	, {classes: '', data: {open: false, source: 'n902', target: 'n904'}}
	, {classes: 'between', data: {open: false, source: 'n905', target: 'n889'}}
	, {classes: '', data: {open: false, source: 'n889', target: 'n879'}}
	, {classes: '', data: {open: false, source: 'n879', target: 'n892'}}
	, {classes: '', data: {open: false, source: 'n892', target: 'n880'}}
	, {classes: '', data: {open: false, source: 'n880', target: 'n890'}}
	, {classes: '', data: {open: false, source: 'n879', target: 'n876'}}
	, {classes: '', data: {open: false, source: 'n876', target: 'n886'}}
	, {classes: '', data: {open: false, source: 'n886', target: 'n884'}}
	, {classes: '', data: {open: false, source: 'n876', target: 'n878'}}
	, {classes: '', data: {open: false, source: 'n878', target: 'n883'}}
	, {classes: '', data: {open: false, source: 'n883', target: 'n888'}}
	, {classes: '', data: {open: false, source: 'n876', target: 'n877'}}
	, {classes: '', data: {open: false, source: 'n877', target: 'n891'}}
	, {classes: '', data: {open: false, source: 'n877', target: 'n887'}}
	, {classes: '', data: {open: false, source: 'n877', target: 'n881'}}
	, {classes: '', data: {open: false, source: 'n881', target: 'n885'}}
	, {classes: '', data: {open: false, source: 'n885', target: 'n882'}}
	, {classes: 'between', data: {open: false, source: 'n891', target: 'n875'}}
	, {classes: '', data: {open: false, source: 'n875', target: 'n872'}}
	, {classes: '', data: {open: false, source: 'n872', target: 'n867'}}
	, {classes: '', data: {open: false, source: 'n867', target: 'n869'}}
	, {classes: '', data: {open: false, source: 'n869', target: 'n866'}}
	, {classes: '', data: {open: false, source: 'n866', target: 'n871'}}
	, {classes: '', data: {open: false, source: 'n869', target: 'n861'}}
	, {classes: 'curve', data: {open: false, source: 'n863', target: 'n861'}}
	, {classes: 'curve', data: {open: false, source: 'n861', target: 'n862'}}
	, {classes: '', data: {open: false, source: 'n862', target: 'n860'}}
	, {classes: '', data: {open: false, source: 'n862', target: 'n873'}}
	, {classes: '', data: {open: false, source: 'n873', target: 'n865'}}
	, {classes: '', data: {open: false, source: 'n863', target: 'n870'}}
	, {classes: '', data: {open: false, source: 'n870', target: 'n874'}}
	, {classes: 'between', data: {open: false, source: 'n874', target: 'n384'}}
	, {classes: '', data: {open: false, source: 'n870', target: 'n864'}}
	, {classes: '', data: {open: false, source: 'n864', target: 'n868'}}
	, {classes: 'between', data: {open: false, source: 'n438', target: 'n972'}}
	, {classes: '', data: {open: false, source: 'n972', target: 'n969'}}
	, {classes: '', data: {open: false, source: 'n969', target: 'n958'}}
	, {classes: '', data: {open: false, source: 'n958', target: 'n956'}}
	, {classes: '', data: {open: false, source: 'n972', target: 'n968'}}
	, {classes: '', data: {open: false, source: 'n968', target: 'n957'}}
	, {classes: '', data: {open: false, source: 'n957', target: 'n956'}}
	, {classes: '', data: {open: false, source: 'n958', target: 'n964'}}
	, {classes: '', data: {open: false, source: 'n964', target: 'n967'}}
	, {classes: '', data: {open: false, source: 'n957', target: 'n962'}}
	, {classes: '', data: {open: false, source: 'n962', target: 'n966'}}
	, {classes: '', data: {open: false, source: 'n966', target: 'n963'}}
	, {classes: '', data: {open: false, source: 'n956', target: 'n959'}}
	, {classes: '', data: {open: false, source: 'n959', target: 'n973'}}
	, {classes: '', data: {open: false, source: 'n973', target: 'n960'}}
	, {classes: '', data: {open: false, source: 'n960', target: 'n971'}}
	, {classes: '', data: {open: false, source: 'n973', target: 'n970'}}
	, {classes: '', data: {open: false, source: 'n970', target: 'n965'}}
	, {classes: 'between', data: {open: false, source: 'n965', target: 'n987'}}
	, {classes: '', data: {open: false, source: 'n987', target: 'n982'}}
	, {classes: '', data: {open: false, source: 'n982', target: 'n978'}}
	, {classes: '', data: {open: false, source: 'n978', target: 'n977'}}
	, {classes: '', data: {open: false, source: 'n977', target: 'n986'}}
	, {classes: 'curve', data: {open: false, source: 'n977', target: 'n975'}}
	, {classes: '', data: {open: false, source: 'n975', target: 'n974'}}
	, {classes: '', data: {open: false, source: 'n975', target: 'n980'}}
	, {classes: '', data: {open: false, source: 'n980', target: 'n976'}}
	, {classes: '', data: {open: false, source: 'n976', target: 'n981'}}
	, {classes: '', data: {open: false, source: 'n981', target: 'n983'}}
	, {classes: '', data: {open: false, source: 'n980', target: 'n985'}}
	, {classes: '', data: {open: false, source: 'n985', target: 'n988'}}
	, {classes: '', data: {open: false, source: 'n975', target: 'n979'}}
	, {classes: '', data: {open: false, source: 'n979', target: 'n984'}}
	, {classes: 'between', data: {open: false, source: 'n981', target: 'n1002'}}
	, {classes: '', data: {open: false, source: 'n1002', target: 'n994'}}
	, {classes: 'curve', data: {open: false, source: 'n994', target: 'n998'}}
	, {classes: '', data: {open: false, source: 'n998', target: 'n1000'}}
	, {classes: 'curve', data: {open: false, source: 'n998', target: 'n995'}}
	, {classes: '', data: {open: false, source: 'n995', target: 'n1003'}}
	, {classes: 'curve', data: {open: false, source: 'n995', target: 'n996'}}
	, {classes: '', data: {open: false, source: 'n996', target: 'n1004'}}
	, {classes: '', data: {open: false, source: 'n996', target: 'n991'}}
	, {classes: '', data: {open: false, source: 'n991', target: 'n989'}}
	, {classes: '', data: {open: false, source: 'n989', target: 'n990'}}
	, {classes: '', data: {open: false, source: 'n990', target: 'n998'}}
	, {classes: '', data: {open: false, source: 'n994', target: 'n992'}}
	, {classes: '', data: {open: false, source: 'n992', target: 'n993'}}
	, {classes: '', data: {open: false, source: 'n993', target: 'n1001'}}
	, {classes: 'curve', data: {open: false, source: 'n997', target: 'n993'}}
	, {classes: '', data: {open: false, source: 'n997', target: 'n999'}}
	, {classes: '', data: {open: false, source: 'n997', target: 'n991'}}
	, {classes: 'between', data: {open: false, source: 'n1004', target: 'n1019'}}
	, {classes: '', data: {open: false, source: 'n1019', target: 'n1016'}}
	, {classes: '', data: {open: false, source: 'n1016', target: 'n1011'}}
	, {classes: '', data: {open: false, source: 'n1011', target: 'n1014'}}
	, {classes: '', data: {open: false, source: 'n1014', target: 'n1006'}}
	, {classes: '', data: {open: false, source: 'n1006', target: 'n1005'}}
	, {classes: '', data: {open: false, source: 'n1005', target: 'n1008'}}
	, {classes: '', data: {open: false, source: 'n1008', target: 'n1015'}}
	, {classes: '', data: {open: false, source: 'n1015', target: 'n1009'}}
	, {classes: '', data: {open: false, source: 'n1009', target: 'n1013'}}
	, {classes: '', data: {open: false, source: 'n1013', target: 'n1010'}}
	, {classes: '', data: {open: false, source: 'n1010', target: 'n1018'}}
	, {classes: '', data: {open: false, source: 'n1018', target: 'n1007'}}
	, {classes: '', data: {open: false, source: 'n1007', target: 'n1005'}}
	, {classes: '', data: {open: false, source: 'n1018', target: 'n1020'}}
	, {classes: '', data: {open: false, source: 'n1020', target: 'n1017'}}
	, {classes: '', data: {open: false, source: 'n1017', target: 'n1012'}}
	, {classes: 'between', data: {open: false, source: 'n1017', target: 'n1033'}}
	, {classes: '', data: {open: false, source: 'n1033', target: 'n1025'}}
	, {classes: '', data: {open: false, source: 'n1025', target: 'n1024'}}
	, {classes: '', data: {open: false, source: 'n1024', target: 'n1026'}}
	, {classes: '', data: {open: false, source: 'n1026', target: 'n1034'}}
	, {classes: 'curve', data: {open: false, source: 'n1023', target: 'n1024'}}
	, {classes: '', data: {open: false, source: 'n1023', target: 'n1028'}}
	, {classes: '', data: {open: false, source: 'n1028', target: 'n1036'}}
	, {classes: '', data: {open: false, source: 'n1023', target: 'n1029'}}
	, {classes: '', data: {open: false, source: 'n1029', target: 'n1031'}}
	, {classes: '', data: {open: false, source: 'n1023', target: 'n1027'}}
	, {classes: '', data: {open: false, source: 'n1027', target: 'n1035'}}
	, {classes: '', data: {open: false, source: 'n1027', target: 'n1022'}}
	, {classes: '', data: {open: false, source: 'n1022', target: 'n1021'}}
	, {classes: '', data: {open: false, source: 'n1022', target: 'n1030'}}
	, {classes: '', data: {open: false, source: 'n1030', target: 'n1032'}}
	, {classes: 'between', data: {open: false, source: 'n1031', target: 'n1047'}}
	, {classes: '', data: {open: false, source: 'n1047', target: 'n1042'}}
	, {classes: '', data: {open: false, source: 'n1042', target: 'n1051'}}
	, {classes: '', data: {open: false, source: 'n1051', target: 'n1041'}}
	, {classes: '', data: {open: false, source: 'n1041', target: 'n1040'}}
	, {classes: '', data: {open: false, source: 'n1037', target: 'n1038'}}
	, {classes: 'curve', data: {open: false, source: 'n1038', target: 'n1039'}}
	, {classes: 'curve', data: {open: false, source: 'n1039', target: 'n1040'}}
	, {classes: '', data: {open: false, source: 'n1041', target: 'n1045'}}
	, {classes: '', data: {open: false, source: 'n1045', target: 'n1049'}}
	, {classes: '', data: {open: false, source: 'n1049', target: 'n1046'}}
	, {classes: '', data: {open: false, source: 'n1046', target: 'n1044'}}
	, {classes: '', data: {open: false, source: 'n1044', target: 'n1052'}}
	, {classes: '', data: {open: false, source: 'n1052', target: 'n1043'}}
	, {classes: '', data: {open: false, source: 'n1043', target: 'n1048'}}
	, {classes: '', data: {open: false, source: 'n1048', target: 'n1050'}}
	, {classes: 'between', data: {open: false, source: 'n1013', target: 'n1063'}}
	, {classes: '', data: {open: false, source: 'n1063', target: 'n1060'}}
	, {classes: '', data: {open: false, source: 'n1060', target: 'n1055'}}
	, {classes: '', data: {open: false, source: 'n1055', target: 'n1065'}}
	, {classes: '', data: {open: false, source: 'n1063', target: 'n1061'}}
	, {classes: '', data: {open: false, source: 'n1061', target: 'n1066'}}
	, {classes: '', data: {open: false, source: 'n1066', target: 'n1114'}}
	, {classes: '', data: {open: false, source: 'n1114', target: 'n1056'}}
	, {classes: '', data: {open: false, source: 'n1063', target: 'n1053'}}
	, {classes: '', data: {open: false, source: 'n1053', target: 'n1054'}}
	, {classes: '', data: {open: false, source: 'n1054', target: 'n1068'}}
	, {classes: '', data: {open: false, source: 'n1068', target: 'n1064'}}
	, {classes: '', data: {open: false, source: 'n1064', target: 'n1058'}}
	, {classes: '', data: {open: false, source: 'n1053', target: 'n1057'}}
	, {classes: '', data: {open: false, source: 'n1057', target: 'n1067'}}
	, {classes: '', data: {open: false, source: 'n1067', target: 'n1059'}}
	, {classes: '', data: {open: false, source: 'n1059', target: 'n1062'}}
	, {classes: 'between', data: {open: false, source: 'n1067', target: 'n1078'}}
	, {classes: '', data: {open: false, source: 'n1078', target: 'n1082'}}
	, {classes: '', data: {open: false, source: 'n1082', target: 'n1079'}}
	, {classes: '', data: {open: false, source: 'n1079', target: 'n1074'}}
	, {classes: '', data: {open: false, source: 'n1074', target: 'n1070'}}
	, {classes: 'curve', data: {open: false, source: 'n1115', target: 'n1070'}}
	, {classes: '', data: {open: false, source: 'n1070', target: 'n1069'}}
	, {classes: '', data: {open: false, source: 'n1074', target: 'n1071'}}
	, {classes: '', data: {open: false, source: 'n1071', target: 'n1080'}}
	, {classes: '', data: {open: false, source: 'n1080', target: 'n1115'}}
	, {classes: '', data: {open: false, source: 'n1071', target: 'n1075'}}
	, {classes: '', data: {open: false, source: 'n1075', target: 'n1077'}}
	, {classes: '', data: {open: false, source: 'n1115', target: 'n1072'}}
	, {classes: 'curve', data: {open: false, source: 'n1072', target: 'n1073'}}
	, {classes: '', data: {open: false, source: 'n1072', target: 'n1076'}}
	, {classes: '', data: {open: false, source: 'n1076', target: 'n1081'}}
	, {classes: 'between', data: {open: false, source: 'n1081', target: 'n904'}}
	, {classes: 'between', data: {open: false, source: 'n908', target: 'n1088'}}
	, {classes: '', data: {open: false, source: 'n1088', target: 'n1084'}}
	, {classes: '', data: {open: false, source: 'n1084', target: 'n1083'}}
	, {classes: '', data: {open: false, source: 'n1084', target: 'n1089'}}
	, {classes: 'curve', data: {open: false, source: 'n1089', target: 'n1090'}}
	, {classes: '', data: {open: false, source: 'n1090', target: 'n1085'}}
	, {classes: 'curve', data: {open: false, source: 'n1085', target: 'n1086'}}
	, {classes: '', data: {open: false, source: 'n1086', target: 'n1088'}}
	, {classes: '', data: {open: false, source: 'n1086', target: 'n1095'}}
	, {classes: '', data: {open: false, source: 'n1095', target: 'n1091'}}
	, {classes: '', data: {open: false, source: 'n1091', target: 'n1087'}}
	, {classes: '', data: {open: false, source: 'n1090', target: 'n1092'}}
	, {classes: '', data: {open: false, source: 'n1092', target: 'n1096'}}
	, {classes: '', data: {open: false, source: 'n1089', target: 'n1094'}}
	, {classes: '', data: {open: false, source: 'n1094', target: 'n1097'}}
	, {classes: '', data: {open: false, source: 'n1097', target: 'n1093'}}
	];
