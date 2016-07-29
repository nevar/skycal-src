import {pNode, edge} from '../util/graph.js';
import {notObserve} from '../util/notObserve.js';

const nodesData =
    [ pNode('n0',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 230, -320, 'stat')
    , pNode('n1',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 282, -410, 'stat')
    , pNode('n2',
        {green: 155}, {prestige: 16, vit: 16, dex: 6}, 178, -410, 'stat')
    , pNode('n3',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 133, -440, 'stat')
    , pNode('n4',
        {red: 95}, {prestige: 6, power: 6, dex: 4}, 169, -490, 'stat')
    , pNode('n5',
        {blue: 95}, {prestige: 7, spirit: 7}, 229, -490, 'stat')
    , pNode('n6',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 289, -490, 'stat')
    , pNode('n7',
        {red: 95}, {prestige: 6, power: 6, dex: 4}, 95, -380, 'stat')
    , pNode('n8',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 133, -320, 'stat')
    , pNode('n9',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 169, -270, 'stat')
    , pNode('n10',
        {green: 155}, {prestige: 16, vit: 16, dex: 6}, 229, -270, 'stat')
    , pNode('n11',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 289, -270, 'stat')
    , pNode('n12',
        {blue: 95}, {prestige: 7, str: 7}, 325, -440, 'stat')
    , pNode('n13',
        {green: 155}, {prestige: 16, vit: 16, dex: 6}, 363, -380, 'stat')
    , pNode('n14',
        {blue: 125}, {prestige: 10, luck: 10}, 325, -320, 'stat')
    , pNode('n15', {}, {}, 230, -380, 'class', 'Класс: криомант',
        'Повелитель льдов, он способен играючи остудить пыл наседающих '+
        'врагов, направив против них стихию холода. В бою он предпочитает '+
        'сохранять дистанцию, замедляя противников или вовсе заключая их в '+
        'ледяной плен, из которого не так-то просто выбраться. А тех, кому '+
        'всё же не посчастливилось подобраться поближе, ждёт холодный приём: '+
        'ледяной щит надежно защищает своего носителя от атак.',
        'krio')
    , pNode('n16',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 0, 60, 'stat')
    , pNode('n17',
        {blue: 125}, {prestige: 10, valor: 10}, 52, -30, 'stat')
    , pNode('n18',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, -52, -30, 'stat')
    , pNode('n19',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, -95, -60, 'stat')
    , pNode('n20',
        {green: 155}, {prestige: 16, vit: 16, dex: 6}, -60, -110, 'stat')
    , pNode('n21',
        {blue: 125}, {prestige: 10, luck: 10}, 0, -110, 'stat')
    , pNode('n22',
        {blue: 95}, {prestige: 7, str: 7}, 60, -110, 'stat')
    , pNode('n23',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, -135, 0, 'stat')
    , pNode('n24',
        {red: 155}, {prestige: 12, power: 12, dex: 6}, -96, 60, 'stat')
    , pNode('n25',
        {green: 155}, {prestige: 16, vit: 16, dex: 6}, -60, 110, 'stat')
    , pNode('n26',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 0, 110, 'stat')
    , pNode('n27',
        {red: 155}, {prestige: 12, power: 12, dex: 6}, 60, 110, 'stat')
    , pNode('n28',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 95, -60, 'stat')
    , pNode('n29',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 134, 0, 'stat')
    , pNode('n30',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 95, 60, 'stat')
    , pNode('n31', {}, {}, 0, 0, 'class', 'Класс: Паладин',
        'Бесстрашный защитник, обладающий универсальным набором способностей, '+
        'всегда находится в гуще сражения, принимая на себя основную атаку '+
        'неприяятеля. Сокрушительные удары его меча способны нанести ощутимый '+
        'урон и даже на время вывести противников из боя, а сила света, '+
        'подвластная паладину, позволит не только даровать защиту союзникам, '+
        'но и дать отпор врагу на довольно большой дистанции.',
        'paladin')
    , pNode('n32',
        {blue: 95}, {prestige: 7, str: 7}, 230, 440, 'stat')
    , pNode('n33',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 282, 350, 'stat')
    , pNode('n34',
        {green: 155}, {prestige: 16, vit: 16, dex: 6}, 178, 350, 'stat')
    , pNode('n35',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 133, 320, 'stat')
    , pNode('n36',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 169, 270, 'stat')
    , pNode('n37',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 229, 270, 'stat')
    , pNode('n38',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 289, 270, 'stat')
    , pNode('n39',
        {blue: 95}, {prestige: 7, spirit: 7}, 95, 380, 'stat')
    , pNode('n40',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 133, 440, 'stat')
    , pNode('n41',
        {green: 155}, {prestige: 16, vit: 16, dex: 6}, 169, 490, 'stat')
    , pNode('n42',
        {red: 155}, {prestige: 12, power: 12, dex: 6}, 229, 490, 'stat')
    , pNode('n43',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 289, 490, 'stat')
    , pNode('n44',
        {blue: 125}, {prestige: 10, valor: 10}, 325, 320, 'stat')
    , pNode('n45',
        {red: 95}, {prestige: 6, power: 6, dex: 4}, 363, 380, 'stat')
    , pNode('n46',
        {red: 95}, {prestige: 6, power: 6, dex: 4}, 325, 440, 'stat')
    , pNode('n47', {}, {}, 230, 380, 'class', 'Класс: Хранитель света',
        'Милосердный хранитель всегда готов прийти на помощь нуждающимся. '+
        'Управляя силой света, хранитель оберегает своих союзников и укрывает '+
        'от атак неприятеля. Но его доброта не безгранична. Обратив свой гнев '+
        'на врага, он может нанести значительный урон, находясь на безопасном '+
        'расстоянии.',
        'LK')
    , pNode('n48',
        {green: 155}, {prestige: 16, vit: 16, dex: 6}, 365, -60, 'stat')
    , pNode('n49',
        {blue: 125}, {prestige: 10, luck: 10}, 400, -110, 'stat')
    , pNode('n50',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 460, -110, 'stat')
    , pNode('n51',
        {red: 95}, {prestige: 6, power: 6, dex: 4}, 520, -110, 'stat')
    , pNode('n52',
        {blue: 95}, {prestige: 7, str: 7}, 325, 0, 'stat')
    , pNode('n53',
        {green: 95}, {prestige: 8, vit: 8, dex: 4}, 364, 60, 'stat')
    , pNode('n54',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 400, 110, 'stat')
    , pNode('n55',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 460, 110, 'stat')
    , pNode('n56',
        {blue: 125}, {prestige: 10, luck: 10}, 520, 110, 'stat')
    , pNode('n57',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 555, -60, 'stat')
    , pNode('n58',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 594, 0, 'stat')
    , pNode('n59',
        {green: 95}, {prestige: 8, vit: 8, dex: 4}, 555, 60, 'stat')
    , pNode('n60',
        {blue: 125}, {prestige: 10, str: 10}, 327, -84, 'stat')
    , pNode('n61',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 327, 84, 'stat')
    , pNode('n62',
        {blue: 155}, {prestige: 13, spirit: 13}, 593, 84, 'stat')
    , pNode('n63',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 593, -84, 'stat')
    , pNode('n64', {blue: 200} , {prestige: 40}, 460, 0, 'skill',
        'Талант: Искусный маневр',
        'Применение рывка создаёт защитный барьер, который поглощает урон, '+
        'равный 4/6% максимального здоровья персонажа в течение 3 секунд.',
        'maneuver')
    , pNode('n65',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 920, 60, 'stat')
    , pNode('n66',
        {green: 155}, {prestige: 16, vit: 16, dex: 6}, 972, -30, 'stat')
    , pNode('n67',
        {blue: 150}, {prestige: 30, majesty: 200}, 868, -30, 'stat')
    , pNode('n68',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 860, -110, 'stat')
    , pNode('n69',
        {blue: 125}, {prestige: 10, luck: 10}, 980, -110, 'stat')
    , pNode('n70',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 785, 0, 'stat')
    , pNode('n71',
        {green: 95}, {prestige: 8, vit: 8, dex: 4}, 860, 110, 'stat')
    , pNode('n72',
        {blue: 95}, {prestige: 7, valor: 7}, 980, 110, 'stat')
    , pNode('n73',
        {red: 155}, {prestige: 12, power: 12, dex: 6}, 1054, 0, 'stat')
    , pNode('n74',
        {red: 125}, {prestige: 9, power: 9, dex: 5}, 787, -84, 'stat')
    , pNode('n75',
        {red: 95}, {prestige: 6, power: 6, dex: 4}, 787, 84, 'stat')
    , pNode('n76',
        {green: 155}, {prestige: 16, vit: 16, dex: 6}, 1053, 84, 'stat')
    , pNode('n77',
        {blue: 150}, {prestige: 30, majesty: 200}, 1053, -84, 'stat')
    , pNode('n78',
        {blue: 125}, {prestige: 10, valor: 10}, 920, 157, 'stat')
    , pNode('n79',
        {green: 155}, {prestige: 16, vit: 16, dex: 6}, 920, -157, 'stat')
    , pNode('n80', {}, {}, 920, 0, 'skill', 'Вершина равновесия',
        'Может быть усилена с помощью эфирных ядер.', 'balance')
    , pNode('n81',
        {blue: 185}, {prestige: 20, spirit: 20}, 920, 510, 'stat')
    , pNode('n82',
        {blue: 150}, {prestige: 15, spirit: 15}, 972, 420, 'stat')
    , pNode('n83',
        {blue: 150}, {prestige: 30, majesty: 200}, 868, 420, 'stat')
    , pNode('n84',
        {green: 185}, {prestige: 24, vit: 24, dex: 7}, 823, 390, 'stat')
    , pNode('n85',
        {green: 115}, {prestige: 12, vit: 12, dex: 5}, 859, 340, 'stat')
    , pNode('n86',
        {blue: 185}, {prestige: 20, spirit: 20}, 919, 340, 'stat')
    , pNode('n87',
        {red: 115}, {prestige: 10, power: 10, dex: 5}, 979, 340, 'stat')
    , pNode('n88',
        {red: 185}, {prestige: 16, power: 16, dex: 7}, 823, 510, 'stat')
    , pNode('n89',
        {green: 185}, {prestige: 24, vit: 24, dex: 7}, 859, 560, 'stat')
    , pNode('n90',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 979, 560, 'stat')
    , pNode('n91',
        {blue: 185}, {prestige: 20, spirit: 20}, 1015, 390, 'stat')
    , pNode('n92',
        {blue: 150}, {prestige: 15, spirit: 15}, 1015, 510, 'stat')
    , pNode('n93',
        {green: 150}, {prestige: 18, vit: 18, dex: 8}, 920, 607, 'stat')
    , pNode('n94',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 920, 293, 'stat')
    , pNode('n95', {blue: 200}, {prestige: 40}, 920, 450, 'skill',
        'Талант: Интенсивность импульса',
        'Импульсный урон увеличен на 10% за каждый уровень этого символа.',
        'spirit')
    , pNode('n96',
        {blue: 185}, {prestige: 20, luck: 20}, 920, -390, 'stat')
    , pNode('n97',
        {green: 185}, {prestige: 24, vit: 24, dex: 7}, 972, -480, 'stat')
    , pNode('n98',
        {blue: 185}, {prestige: 20, luck: 20}, 868, -480, 'stat')
    , pNode('n99',
        {green: 150}, {prestige: 18, vit: 18, dex: 6}, 823, -510, 'stat')
    , pNode('n100',
        {blue: 150}, {prestige: 30, majesty: 200}, 859, -560, 'stat')
    , pNode('n101',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 919, -560, 'stat')
    , pNode('n102',
        {blue: 115}, {prestige: 10, luck: 10}, 979, -560, 'stat')
    , pNode('n103',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 823, -390, 'stat')
    , pNode('n104',
        {green: 115}, {prestige: 12, vit: 12, dex: 5}, 859, -340, 'stat')
    , pNode('n105',
        {blue: 185}, {prestige: 20, luck: 20}, 979, -340, 'stat')
    , pNode('n106',
        {blue: 115}, {prestige: 10, luck: 10}, 1015, -510, 'stat')
    , pNode('n107',
        {blue: 115}, {prestige: 10, luck: 10}, 1015, -390, 'stat')
    , pNode('n108',
        {blue: 150}, {prestige: 30, majesty: 200}, 920, -293, 'stat')
    , pNode('n109',
        {red: 185}, {prestige: 16, power: 16, dex: 7}, 920, -607, 'stat')
    , pNode('n110', {blue: 200} , {prestige: 40}, 920, -450, 'skill',
        'Талант: Максимальная отдача',
        'Критический урон увеличен на 10% за каждый уровень этого символа.',
        'luck')
    , pNode('n111',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1380, 60, 'stat')
    , pNode('n112',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1432, -30, 'stat')
    , pNode('n113',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1328, -30, 'stat')
    , pNode('n114',
        {blue: 650}, {prestige: 56, valor: 56}, 1285, -60, 'stat')
    , pNode('n115',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1285, 60, 'stat')
    , pNode('n116',
        {blue: 325}, {prestige: 35, spirit: 35}, 1475, 60, 'stat')
    , pNode('n117',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1475, -60, 'stat')
    , pNode('n118',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1319, -110, 'stat')
    , pNode('n119',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1441, -110, 'stat')
    , pNode('n120',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1319, 110, 'stat')
    , pNode('n121',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1441, 110, 'stat')
    , pNode('n122',
        {blue: 650}, {prestige: 56, spirit: 56}, 1380, -110, 'stat')
    , pNode('n123',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 1380, 110, 'stat')
    , pNode('n124',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1380, -157, 'stat')
    , pNode('n125',
        {blue: 650}, {prestige: 56, str: 56}, 1380, 157, 'stat')
    , pNode('n126',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1247, -84, 'stat')
    , pNode('n127',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1247, 84, 'stat')
    , pNode('n128',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1513, 84, 'stat')
    , pNode('n129',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1513, -84, 'stat')
    , pNode('n130',
        {blue: 650}, {prestige: 40, power: 40, dex: 24}, 1245, 0, 'stat')
    , pNode('n131',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1515, 0, 'stat')
    , pNode('n132', {god: 1}, {}, 1380, 0, 'skill', 'Форма бога',
        'В божественной форме бессмертный приобретает дополнительные '+
        'способности и становится гараздо больше. Меняеться его восприятие '+
        'окружающего мира и самого себя. И даже когда он выходит из этого '+
        'состояния, отголосок этих по-настоящему божественных, '+
        'сверхъестественных ощущений, пережитых в божественной форме, '+
        'остаётся с ним навсегда. На поле боя боги в одиночку способны '+
        'переломить ход сражения.</p>'+
        '<p>Для открытия необходимо завершить сюжетное задание "Новый бог" '+
        '(для этого необходимо по меньшей мере 30500 престижа).',
        'god')
    , pNode('n133',
        {green: 115}, {prestige: 12, vit: 12, dex: 5}, 690, -700, 'stat')
    , pNode('n134',
        {green: 115}, {prestige: 12, vit: 12, dex: 5}, 742, -790, 'stat')
    , pNode('n135',
        {red: 115}, {prestige: 8, power: 8, dex: 5}, 638, -790, 'stat')
    , pNode('n136',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 629, -870, 'stat')
    , pNode('n137',
        {green: 185}, {prestige: 24, vit: 24, dex: 7}, 751, -870, 'stat')
    , pNode('n138',
        {green: 185}, {prestige: 20, valor: 20}, 629, -650, 'stat')
    , pNode('n139',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 751, -650, 'stat')
    , pNode('n140',
        {green: 185}, {prestige: 24, vit: 24, dex: 27}, 690, -917, 'stat')
    , pNode('n141',
        {blue: 150}, {prestige: 15, valor: 15}, 690, -603, 'stat')
    , pNode('n142',
        {blue: 150}, {prestige: 15, spirit: 15}, 557, -844, 'stat')
    , pNode('n143',
        {blue: 150}, {prestige: 15, luck: 15}, 557, -676, 'stat')
    , pNode('n144',
        {green: 185}, {prestige: 24, vit: 24, dex: 7}, 823, -676, 'stat')
    , pNode('n145',
        {blue: 150}, {prestige: 30, majesty: 200}, 823, -844, 'stat')
    , pNode('n146',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 555, -760, 'stat')
    , pNode('n147',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 825, -760, 'stat')
    , pNode('n148', {blue: 200}, {prestige: 40}, 690, -760, 'skill',
        'Талант: Элемент неожиданности',
        'В течение первых 8 секунд боя исходящий урон увеличен на 12% за '+
        'каждый уровень этого символа.',
        'surprise')
    , pNode('n149',
        {blue: 185}, {prestige: 20, valor: 20}, 230, -700, 'stat')
    , pNode('n150',
        {blue: 150}, {prestige: 30, majesty: 200}, 282, -790, 'stat')
    , pNode('n151',
        {green: 115}, {prestige: 12, vit: 12, dex: 5}, 178, -790, 'stat')
    , pNode('n152',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 135, -820, 'stat')
    , pNode('n153',
        {blue: 150}, {prestige: 30, majesty: 200}, 135, -700, 'stat')
    , pNode('n154',
        {green: 115}, {prestige: 12, vit: 12, dex: 5}, 325, -700, 'stat')
    , pNode('n155',
        {green: 115}, {prestige: 12, vit: 12, dex: 5}, 325, -820, 'stat')
    , pNode('n156',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 230, -870, 'stat')
    , pNode('n157',
        {green: 150}, {prestige: 18, vit: 18, dex: 6}, 230, -650, 'stat')
    , pNode('n158',
        {blue: 185}, {prestige: 20, valor: 20}, 230, -917, 'stat')
    , pNode('n159',
        {red: 185}, {prestige: 16, power: 16, dex: 7}, 230, -603, 'stat')
    , pNode('n160',
        {green: 115}, {prestige: 12, vit: 12, dex: 5}, 97, -844, 'stat')
    , pNode('n161',
        {blue: 150}, {prestige: 15, valor: 15}, 97, -676, 'stat')
    , pNode('n162',
        {blue: 150}, {prestige: 15, str: 15}, 363, -676, 'stat')
    , pNode('n163',
        {red: 185}, {prestige: 16, power: 16, dex: 7}, 363, -844, 'stat')
    , pNode('n164', {blue: 200}, {prestige: 40}, 230, -760, 'skill',
        'Талант: Стремительная атака',
        'В тесение 3 секунд после применения рывка наносимый урон увеличен на '+
        '6% за каждый уровень этого символа.',
        'rush')
    , pNode('n165',
        {green: 115}, {prestige: 12, vit: 12, dex: 5}, 690, 820, 'stat')
    , pNode('n166',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 742, 730, 'stat')
    , pNode('n167',
        {red: 115}, {prestige: 8, power: 8, dex: 5}, 638, 730, 'stat')
    , pNode('n168',
        {red: 185}, {prestige: 16, power: 16, dex: 7}, 595, 700, 'stat')
    , pNode('n169',
        {blue: 150}, {prestige: 30, majesty: 200}, 595, 820, 'stat')
    , pNode('n170',
        {red: 115}, {prestige: 8, power: 8, dex: 5}, 785, 820, 'stat')
    , pNode('n171',
        {green: 150}, {prestige: 18, vit: 18, dex: 6}, 785, 700, 'stat')
    , pNode('n172',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 690, 650, 'stat')
    , pNode('n173',
        {red: 115}, {prestige: 8, power: 8, dex: 5}, 690, 870, 'stat')
    , pNode('n174',
        {green: 185}, {prestige: 24, vit: 24, dex: 7}, 690, 603, 'stat')
    , pNode('n175',
        {green: 185}, {prestige: 24, vit: 24, dex: 7}, 690, 917, 'stat')
    , pNode('n176',
        {green: 185}, {prestige: 24, vit: 24, dex: 7}, 557, 676, 'stat')
    , pNode('n177',
        {green: 150}, {prestige: 18, vit: 18, dex: 6}, 557, 844, 'stat')
    , pNode('n178',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 823, 844, 'stat')
    , pNode('n179',
        {blue: 150}, {prestige: 30, majesty: 200}, 823, 676, 'stat')
    , pNode('n180', {blue: 200}, {prestige: 40}, 690, 760, 'skill',
        'Талант: Инерция',
        'В течение 3 секунд после применения рывка скорость передвижения '+
        'увеличена на 12% за каждый уровень этого символа.',
        'inertia')
    , pNode('n181',
        {green: 185}, {prestige: 24, vit: 24, dex: 7}, 135, 700, 'stat')
    , pNode('n182',
        {green: 150}, {prestige: 18, vit: 18, dex: 6}, 135, 820, 'stat')
    , pNode('n183',
        {blue: 150}, {prestige: 30, majesty: 200}, 325, 820, 'stat')
    , pNode('n184',
        {green: 115}, {prestige: 12, vit: 12, dex: 5}, 325, 700, 'stat')
    , pNode('n185',
        {blue: 185}, {prestige: 20, str: 20}, 169, 650, 'stat')
    , pNode('n186',
        {blue: 150}, {prestige: 15, str: 15}, 291, 650, 'stat')
    , pNode('n187',
        {red: 115}, {prestige: 8, power: 8, dex: 5}, 169, 870, 'stat')
    , pNode('n188',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 291, 870, 'stat')
    , pNode('n189',
        {red: 185}, {prestige: 16, power: 16, dex: 7}, 230, 650, 'stat')
    , pNode('n190',
        {green: 185}, {prestige: 24, vit: 24, dex: 7}, 230, 870, 'stat')
    , pNode('n191',
        {blue: 150}, {prestige: 15, luck: 15}, 97, 676, 'stat')
    , pNode('n192',
        {green: 115}, {prestige: 12, vit: 12, dex: 5}, 97, 844, 'stat')
    , pNode('n193',
        {green: 150}, {prestige: 18, vit: 18, dex: 6}, 363, 844, 'stat')
    , pNode('n194',
        {blue: 150}, {prestige: 30, majesty: 200}, 363, 676, 'stat')
    , pNode('n195',
        {red: 185}, {prestige: 16, power: 16, dex: 7}, 95, 760, 'stat')
    , pNode('n196',
        {blue: 150}, {prestige: 15, spirit: 15}, 365, 760, 'stat')
    , pNode('n197', {blue: 200}, {prestige: 40}, 230, 760, 'skill',
        'Талант: Удачное попадание',
        'Раз в 2 секунды вероятность критической атаки увеличивается на 1% за '+
        'каждый уровень этого символа.</p>'+
        '<p>При нанесении критической атаки эффект сбрасываеться и начинает '+
        'накапливаться заново.',
        'luck_hit')
    , pNode('n198',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, -325, -820, 'stat')
    , pNode('n199',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, -325, -700, 'stat')
    , pNode('n200',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, -135, -700, 'stat')
    , pNode('n201',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, -135, -820, 'stat')
    , pNode('n202',
        {blue: 325}, {prestige: 35, str: 35}, -291, -870, 'stat')
    , pNode('n203',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, -169, -870, 'stat')
    , pNode('n204',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, -291, -650, 'stat')
    , pNode('n205',
        {blue: 400}, {prestige: 47, valor: 47}, -169, -650, 'stat')
    , pNode('n206',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, -230, -870, 'stat')
    , pNode('n207',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, -230, -650, 'stat')
    , pNode('n208',
        {blue: 325}, {prestige: 30, majesty: 200}, -363, -844, 'stat')
    , pNode('n209',
        {blue: 325}, {prestige: 35, luck: 35}, -363, -676, 'stat')
    , pNode('n210',
        {blue: 325}, {prestige: 30, majesty: 200}, -97, -676, 'stat')
    , pNode('n211',
        {blue: 400}, {prestige: 47, luck: 47}, -97, -844, 'stat')
    , pNode('n212',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, -365, -760, 'stat')
    , pNode('n213',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, -95, -760, 'stat')
    , pNode('n214', {}, {}, -230, -760, 'skill', 'Вершина разрушения',
        'Может быть усилена с помощью эфирных ядер.', 'destroy')
    , pNode('n215',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -230, -1140, 'stat')
    , pNode('n216',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -178, -1230, 'stat')
    , pNode('n217',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -282, -1230, 'stat')
    , pNode('n218',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -325, -1260, 'stat')
    , pNode('n219',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -325, -1140, 'stat')
    , pNode('n220',
        {blue: 490}, {prestige: 38, spirit: 38}, -135, -1140, 'stat')
    , pNode('n221',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -135, -1260, 'stat')
    , pNode('n222',
        {blue: 575}, {prestige: 30, majesty: 250}, -230, -1310, 'stat')
    , pNode('n223',
        {blue: 575}, {prestige: 30, majesty: 250}, -230, -1090, 'stat')
    , pNode('n224',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -230, -1357, 'stat')
    , pNode('n225',
        {revelation: 300}, {prestige: 80, valor: 80}, -230, -1043, 'stat')
    , pNode('n226',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -363, -1284, 'stat')
    , pNode('n227',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -363, -1116, 'stat')
    , pNode('n228',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -97, -1116, 'stat')
    , pNode('n229',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -97, -1284, 'stat')
    , pNode('n230', {blue: 350}, {prestige: 40}, -230, -1200, 'skill',
        'Талант: Парализующий шок',
        'Использование атакующих способностей позволяет применить умение '+
        '"Шок".</p>'+
        '<p>"Паралиизующий шок" оглушает выбранного противника на 3 секунды. '+
        'Время перезарядки - 25 секунд.</p>'+
        '<p>При совместном использовании с символом "Болевой шок" оба эффекта '+
        'наступают одновременно, а перезарядка ускорена на 5 секунд.',
        'shock')
    , pNode('n231',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 255, -1320, 'stat')
    , pNode('n232',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 255, -1200, 'stat')
    , pNode('n233',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 445, -1200, 'stat')
    , pNode('n234',
        {blue: 650}, {prestige: 56, str: 56}, 445, -1320, 'stat')
    , pNode('n235',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 289, -1370, 'stat')
    , pNode('n236',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 411, -1370, 'stat')
    , pNode('n237',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 289, -1150, 'stat')
    , pNode('n238',
        {blue: 650}, {prestige: 56, str: 56}, 411, -1150, 'stat')
    , pNode('n239',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 350, -1370, 'stat')
    , pNode('n240',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 350, -1150, 'stat')
    , pNode('n241',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 217, -1344, 'stat')
    , pNode('n242',
        {red:810}, {prestige: 53, power: 53, dex: 30}, 217, -1176, 'stat')
    , pNode('n243',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 483, -1176, 'stat')
    , pNode('n244',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 483, -1344, 'stat')
    , pNode('n245',
        {blue: 650}, {prestige: 56, spirit: 56}, 215, -1260, 'stat')
    , pNode('n246',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 485, -1260, 'stat')
    , pNode('n247', {blue: 275}, {prestige: 40}, 350, -1260, 'skill',
        'Талант: Блистательный триумф',
        'Применение добивающего удара увеличивает исходящий урон на 15% и '+
        'уменьшает входящий урон на 15%. Длительность эффекта - 8 секунд за '+
        'каждый уровень этого символа.',
        'triumph')
    , pNode('n248',
        {green: 150}, {prestige: 18, vit: 18, dex: 8}, 1380, -690, 'stat')
    , pNode('n249',
        {red: 115}, {prestige: 8, power: 8, dex: 5}, 1432, -780, 'stat')
    , pNode('n250',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 1328, -780, 'stat')
    , pNode('n251',
        {red: 115}, {prestige: 8, power: 8, dex: 5}, 1285, -810, 'stat')
    , pNode('n252',
        {blue: 150}, {prestige: 30, majesty: 200}, 1285, -690, 'stat')
    , pNode('n253',
        {green: 150}, {prestige: 18, vit: 18, dex: 6}, 1475, -690, 'stat')
    , pNode('n254',
        {blue: 150}, {prestige: 15, valor: 15}, 1475, -810, 'stat')
    , pNode('n255',
        {green: 150}, {prestige: 18, vit: 18, dex: 6}, 1380, -860, 'stat')
    , pNode('n256',
        {green: 115}, {prestige: 12, vit: 12, dex: 5}, 1380, -640, 'stat')
    , pNode('n257',
        {blue: 150}, {prestige: 30, majesty: 200}, 1380, -907, 'stat')
    , pNode('n258',
        {red: 185}, {prestige: 16, power: 16, dex: 7}, 1380, -593, 'stat')
    , pNode('n259',
        {blue: 185}, {prestige: 20, str: 20}, 1247, -834, 'stat')
    , pNode('n260',
        {red: 115}, {prestige: 8, power: 8, dex: 5}, 1247, -666, 'stat')
    , pNode('n261',
        {blue: 185}, {prestige: 24, vit: 24, dex: 7}, 1513, -666, 'stat')
    , pNode('n262',
        {blue: 150}, {prestige: 15, luck: 15}, 1513, -834, 'stat')
    , pNode('n263', {}, {}, 1380, -750, 'skill', 'Вершина разрушения',
        'Может быть усилена с помощью эфирных ядер.', 'destroy')
    , pNode('n264',
        {blue: 325}, {prestige: 35, luck: 35}, 1285, -1420, 'stat')
    , pNode('n265',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 1285, -1300, 'stat')
    , pNode('n266',
        {blue: 240}, {prestige: 23, luck: 23}, 1475, -1300, 'stat')
    , pNode('n267',
        {blue: 325}, {prestige: 30, majesty: 200}, 1475, -1420, 'stat')
    , pNode('n268',
        {blue: 400}, {prestige: 47, luck: 47}, 1319, -1470, 'stat')
    , pNode('n269',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 1441, -1470, 'stat')
    , pNode('n270',
        {blue: 325}, {prestige: 35, luck: 35}, 1319, -1250, 'stat')
    , pNode('n271',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1441, -1250, 'stat')
    , pNode('n272',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 1380, -1470, 'stat')
    , pNode('n273',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1380, -1250, 'stat')
    , pNode('n274',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 1247, -1444, 'stat')
    , pNode('n275',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1247, -1276, 'stat')
    , pNode('n276',
        {blue: 325}, {prestige: 30, majesty: 200}, 1513, -1276, 'stat')
    , pNode('n277',
        {blue: 325}, {prestige: 35, luck: 35}, 1513, -1444, 'stat')
    , pNode('n278',
        {blue: 400}, {prestige: 47, luck: 47}, 1245, -1360, 'stat')
    , pNode('n279',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1515, -1360, 'stat')
    , pNode('n280', {blue: 275}, {prestige: 40}, 1380, -1360, 'skill',
        'Талант: Максимальная отдача',
        'Критический урон увеличен на 10% за каждый уровень этого символа.',
        'luck')
    , pNode('n281',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1380, -1680, 'stat')
    , pNode('n282',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1432, -1770, 'stat')
    , pNode('n283',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 1328, -1770, 'stat')
    , pNode('n284',
        {blue: 240}, {prestige: 23, valor: 23}, 1285, -1800, 'stat')
    , pNode('n285',
        {blue: 325}, {prestige: 30, majesty: 200}, 1285, -1680, 'stat')
    , pNode('n286',
        {blue: 325}, {prestige: 35, valor: 35}, 1475, -1680, 'stat')
    , pNode('n287',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1475, -1800, 'stat')
    , pNode('n288',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 1319, -1850, 'stat')
    , pNode('n289',
        {blue: 400}, {prestige: 47, valor: 47}, 1441, -1850, 'stat')
    , pNode('n290',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1319, -1630, 'stat')
    , pNode('n291',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 1441, -1630, 'stat')
    , pNode('n292',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 1380, -1850, 'stat')
    , pNode('n293',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1380, -1630, 'stat')
    , pNode('n294',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 1245, -1740, 'stat')
    , pNode('n295',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1515, -1740, 'stat')
    , pNode('n296', {transformation: 300}, {}, 1380, -1740, 'class',
        'Класс: Кинетик',
        'Кинетик, оперируя особым типом энергии, способен навести настоящий '+
        'хаос в стройных рядах противника. Он может не только вырывать из '+
        'земли неподъёмные булыжники, чтобы импользовать их как снаряды для '+
        'метания, но и контролировать передвижения противников по полю боя, '+
        'изменяя потоки гравитационных полей. Помимо всего этого, кинетик '+
        'также способен защитить своих союзников, укрыв их энергетическим '+
        'полем.',
        'kinetic')
    , pNode('n297',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 960, -1300, 'stat')
    , pNode('n298',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 1012, -1390, 'stat')
    , pNode('n299',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 908, -1390, 'stat')
    , pNode('n300',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 865, -1420, 'stat')
    , pNode('n301',
        {red: 325}, {prestige: 22, power: 22, dex: 12}, 865, -1300, 'stat')
    , pNode('n302',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1055, -1300, 'stat')
    , pNode('n303',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1055, -1420, 'stat')
    , pNode('n304',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 899, -1470, 'stat')
    , pNode('n305',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1021, -1470, 'stat')
    , pNode('n306',
        {blue: 325}, {prestige: 30, majesty: 200}, 899, -1250, 'stat')
    , pNode('n307',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1021, -1250, 'stat')
    , pNode('n308',
        {blue: 325}, {prestige: 30, majesty: 200}, 960, -1470, 'stat')
    , pNode('n309',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 960, -1250, 'stat')
    , pNode('n310',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 825, -1360, 'stat')
    , pNode('n311',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1095, -1360, 'stat')
    , pNode('n312', {blue: 275}, {prestige: 40}, 960, -1360, 'skill',
        'Талант: Защитный рефлекс',
        'Персонаж получает на 10% меньше урона за каждый уровень этого '+
        'символа, если находится под эффектос оглушения, страха, ослепления '+
        'или обездвиживания.</p>'+
        'Персонаж получает на 3% меньше урона за каждый уровень этого '+
        'символа, если находится под эффектом замедления.',
        'reflex')
    , pNode('n313',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 820, -1680, 'stat')
    , pNode('n314',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 872, -1770, 'stat')
    , pNode('n315',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 768, -1770, 'stat')
    , pNode('n316',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 725, -1800, 'stat')
    , pNode('n317',
        {blue: 490}, {prestige: 38, str: 38}, 725, -1680, 'stat')
    , pNode('n318',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 915, -1680, 'stat')
    , pNode('n319',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 915, -1800, 'stat')
    , pNode('n320',
        {blue: 575}, {prestige: 30, majesty: 250}, 759, -1850, 'stat')
    , pNode('n321',
        {blue: 650}, {prestige: 56, spirit: 56}, 881, -1850, 'stat')
    , pNode('n322',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 759, -1630, 'stat')
    , pNode('n323',
        {blue: 575}, {prestige: 30, majesty: 250}, 881, -1630, 'stat')
    , pNode('n324',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 820, -1850, 'stat')
    , pNode('n325',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 820, -1897, 'stat')
    , pNode('n326',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 820, -1583, 'stat')
    , pNode('n327', {}, {}, 820, -1740, 'skill', 'Вершина созидания',
        'Может быть усилена с помощью эфирных ядер.', 'create')
    , pNode('n328',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1800, -1300, 'stat')
    , pNode('n329',
        {red: 325}, {prestige: 25, power: 25, dex: 112}, 1852, -1390, 'stat')
    , pNode('n330',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 1748, -1390, 'stat')
    , pNode('n331',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 1739, -1470, 'stat')
    , pNode('n332',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1861, -1470, 'stat')
    , pNode('n333',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1739, -1250, 'stat')
    , pNode('n334',
        {green: 240}, {prestige: 27, vit: 27, dex:9}, 1861, -1250, 'stat')
    , pNode('n335',
        {blue: 325}, {prestige: 30, majesty: 200}, 1800, -1517, 'stat')
    , pNode('n336',
        {blue: 400}, {prestige: 47, valor: 47}, 1800, -1203, 'stat')
    , pNode('n337',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1667, -1444, 'stat')
    , pNode('n338',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 1667, -1276, 'stat')
    , pNode('n339',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1933, -1276, 'stat')
    , pNode('n340',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1933, -1444, 'stat')
    , pNode('n341',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 1665, -1360, 'stat')
    , pNode('n342',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1935, -1360, 'stat')
    , pNode('n343', {blue: 275}, {prestige: 40}, 1800, -1360, 'skill',
        'Талант: Отчаянное сопротивление',
        'Получаемые эффекты замедления ослаблены на 15% за каждый уровень '+
        'этого символа.',
        'resistance')
    , pNode('n344',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 1940, -1680, 'stat')
    , pNode('n345',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1992, -1770, 'stat')
    , pNode('n346',
        {blue: 650}, {prestige: 56, valor: 56}, 1888, -1770, 'stat')
    , pNode('n347',
        {blue: 650}, {prestige: 56, str: 56}, 1845, -1800, 'stat')
    , pNode('n348',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 1845, -1680, 'stat')
    , pNode('n349',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 2035, -1680, 'stat')
    , pNode('n350',
        {blue: 575}, {prestige: 30, majesty: 250}, 2035, -1800, 'stat')
    , pNode('n351',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1879, -1850, 'stat')
    , pNode('n352',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 2001, -1850, 'stat')
    , pNode('n353',
        {blue: 650}, {prestige: 56, str: 56}, 1879, -1630, 'stat')
    , pNode('n354',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 2001, -1630, 'stat')
    , pNode('n355',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1940, -1850, 'stat')
    , pNode('n356',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 1940, -1897, 'stat')
    , pNode('n357',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 1940, -1583, 'stat')
    , pNode('n358', {blue: 350}, {prestige: 40}, 1940, -1740, 'skill',
        'Талант: Тактическая защита',
        'Защита в ближнем бою увеличена на 5% за каждый уровень этого '+
        'символа.</p>'+
        '<p>Защита в дальнем бою увеличена на 5% за каждый уровень этого '+
        'символа.',
        'defence')
    , pNode('n359',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1840, -390, 'stat')
    , pNode('n360',
        {blue: 325}, {prestige: 35, valor: 35}, 1892, -480, 'stat')
    , pNode('n361',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 1788, -480, 'stat')
    , pNode('n362',
        {blue: 325}, {prestige: 30, majesty: 200}, 1745, -510, 'stat')
    , pNode('n363',
        {blue: 240}, {prestige: 23, valor: 23}, 1745, -390, 'stat')
    , pNode('n364',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1935, -390, 'stat')
    , pNode('n365',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 1935, -510, 'stat')
    , pNode('n366',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1779, -560, 'stat')
    , pNode('n367',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1901, -560, 'stat')
    , pNode('n368',
        {blue: 400}, {prestige: 47, valor: 47}, 1779, -340, 'stat')
    , pNode('n369',
        {blue: 400}, {prestige: 47, valor: 47}, 1901, -340, 'stat')
    , pNode('n370',
        {blue: 325}, {prestige: 35, valor: 35}, 1840, -560, 'stat')
    , pNode('n371',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1840, -340, 'stat')
    , pNode('n372',
        {blue: 325}, {prestige: 35, valor: 35}, 1705, -450, 'stat')
    , pNode('n373',
        {blue: 325}, {prestige: 30, majesty: 200}, 1975, -450, 'stat')
    , pNode('n374', {blue: 200}, {prestige: 40}, 1840, -450, 'skill',
        'Талант: Мобилизация',
        'Дополнительный урон увеличен на 10% за каждый уровень этого символа.',
        'valor')
    , pNode('n375',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 1840, 60, 'stat')
    , pNode('n376',
        {blue: 240}, {prestige: 23, valor: 23}, 1892, -30, 'stat')
    , pNode('n377',
        {blue: 240}, {prestige: 23, spirit: 23}, 1788, -30, 'stat')
    , pNode('n378',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1745, -60, 'stat')
    , pNode('n379',
        {blue: 325}, {prestige: 30, majesty: 200}, 1745, 60, 'stat')
    , pNode('n380',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1935, 60, 'stat')
    , pNode('n381',
        {blue: 325}, {prestige: 30, majesty: 200}, 1935, -60, 'stat')
    , pNode('n382',
        {blue: 325}, {prestige: 35, valor: 35}, 1779, -110, 'stat')
    , pNode('n383',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 1901, -110, 'stat')
    , pNode('n384',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 1779, 110, 'stat')
    , pNode('n385',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1901, 110, 'stat')
    , pNode('n386',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1840, -110, 'stat')
    , pNode('n387',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1840, -157, 'stat')
    , pNode('n388',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 1840, 157, 'stat')
    , pNode('n389', {blue: 350}, {prestige: 40}, 1840, 0, 'skill',
        'Талант: Компаньон: особый боевой режим',
        'Применение атакующих умений в бою с некоторой вероятностью позволит '+
        'компаньону начать самостоятельно атаковать противника персонажа в '+
        'течение 18/25 секунд и отвлекать огонь противников на себя.',
        'okulat')
    , pNode('n390',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 2070, -700, 'stat')
    , pNode('n391',
        {blue: 240}, {prestige: 23, str: 23}, 2122, -790, 'stat')
    , pNode('n392',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2018, -790, 'stat')
    , pNode('n393',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 1975, -820, 'stat')
    , pNode('n394',
        {blue: 240}, {prestige: 23, luck: 23}, 1975, -700, 'stat')
    , pNode('n395',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2165, -700, 'stat')
    , pNode('n396',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 2165, -820, 'stat')
    , pNode('n397',
        {blue: 400}, {prestige: 47, spirit: 47}, 2009, -870, 'stat')
    , pNode('n398',
        {blue: 325}, {prestige: 30, majesty: 200}, 2131, -870, 'stat')
    , pNode('n399',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 2009, -650, 'stat')
    , pNode('n400',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2131, -650, 'stat')
    , pNode('n401',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 2070, -870, 'stat')
    , pNode('n402',
        {blue: 325}, {prestige: 30, majesty: 200}, 2070, -650, 'stat')
    , pNode('n403',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1935, -760, 'stat')
    , pNode('n404',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2205, -760, 'stat')
    , pNode('n405', {transformation: 300}, {}, 2070, -760, 'class',
        'Класс: Мастер теней',
        'Этот коварный убийца, появляясь из ниоткуда и исчезая в никуда, '+
        'способен в два счета разделаться с ничего не подозревающей жертвой. '+
        'Сливаясь с тенями, он и сам становится одной из них, проскальзывая '+
        'незамесенным меж врагов и оставляя им лишь ощущение надвигающейся '+
        'опасности и холодок неминуемой смерти. Его основное оружие - пара '+
        'острых как лезвие клинков, но у него в рукавах припрятано ещё немало '+
        'козырей, которые помогут уничтожить противника или благоразумно '+
        'ретироваться, если бой станет слишком жарким.',
        'rouge')
    , pNode('n406',
        {red: 115}, {prestige: 8, power: 8, dex: 5}, 1380, 810, 'stat')
    , pNode('n407',
        {green: 185}, {prestige: 24, vit: 24, dex: 7}, 1432, 720, 'stat')
    , pNode('n408',
        {green: 125}, {prestige: 12, vit: 12, dex: 5}, 1328, 720, 'stat')
    , pNode('n409',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 1319, 640, 'stat')
    , pNode('n410',
        {red: 150}, {prestige: 12, power: 12, dex: 6}, 1441, 640, 'stat')
    , pNode('n411',
        {green: 150}, {prestige: 18, vit: 18, dex: 6}, 1319, 860, 'stat')
    , pNode('n412',
        {red: 115}, {prestige: 8, power: 8, dex: 5}, 1441, 860, 'stat')
    , pNode('n413',
        {green: 185}, {prestige: 24, vit: 24, dex: 7}, 1380, 593, 'stat')
    , pNode('n414',
        {blue: 150}, {prestige: 30, majesty: 200}, 1380, 907, 'stat')
    , pNode('n415',
        {red: 155}, {prestige: 12, power: 12, dex: 6}, 1247, 666, 'stat')
    , pNode('n416',
        {red: 185}, {prestige: 16, power: 16, dex: 7}, 1247, 834, 'stat')
    , pNode('n417',
        {red: 115}, {prestige: 8, power: 8, dex: 5}, 1513, 834, 'stat')
    , pNode('n418',
        {green: 150}, {prestige: 18, vit: 18, dex: 6}, 1513, 666, 'stat')
    , pNode('n419',
        {blue: 150}, {prestige: 30, majesty: 200}, 1245, 750, 'stat')
    , pNode('n420',
        {green: 185}, {prestige: 24, vit: 24, dex: 7}, 1515, 750, 'stat')
    , pNode('n421', {}, {}, 1380, 750, 'skill', 'Вершина созидания',
        'Может быть усилена с помощью эфирных ядер.', 'create')
    , pNode('n422',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1380, 1420, 'stat')
    , pNode('n423',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1432, 1330, 'stat')
    , pNode('n424',
        {blue: 325}, {prestige: 30, majesty: 200}, 1328, 1330, 'stat')
    , pNode('n425',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1285, 1300, 'stat')
    , pNode('n426',
        {blue: 240}, {prestige: 23, str: 23}, 1285, 1420, 'stat')
    , pNode('n427',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1475, 1420, 'stat')
    , pNode('n428',
        {blue: 240}, {prestige: 23, str: 23}, 1475, 1300, 'stat')
    , pNode('n429',
        {blue: 240}, {prestige: 23, str: 23}, 1380, 1250, 'stat')
    , pNode('n430',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 1380, 1470, 'stat')
    , pNode('n431',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1380, 1203, 'stat')
    , pNode('n432',
        {blue: 325}, {prestige: 35, str: 35}, 1380, 1517, 'stat')
    , pNode('n433',
        {blue: 400}, {prestige: 47, str: 47}, 1247, 1276, 'stat')
    , pNode('n434',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 1247, 1444, 'stat')
    , pNode('n435',
        {blue: 400}, {prestige: 47, str: 47}, 1513, 1444, 'stat')
    , pNode('n436',
        {blue: 400}, {prestige: 47, str: 47}, 1513, 1276, 'stat')
    , pNode('n437', {blue: 275}, {prestige: 40}, 1380, 1360, 'skill',
        'Талант: Предельная сила',
        'Влияние показателя силы на базовый урон увеличено на 10% за каждый '+
        'уровень этого символа.',
        'str')
    , pNode('n438',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 960, 1420, 'stat')
    , pNode('n439',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 1012, 1330, 'stat')
    , pNode('n440',
        {blue: 325}, {prestige: 30, majesty: 200}, 908, 1330, 'stat')
    , pNode('n441',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 865, 1300, 'stat')
    , pNode('n442',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 865, 1420, 'stat')
    , pNode('n443',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 1055, 1420, 'stat')
    , pNode('n444',
        {blue: 240}, {prestige: 23, spirit: 23}, 1055, 1300, 'stat')
    , pNode('n445',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 899, 1250, 'stat')
    , pNode('n446',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 1021, 1250, 'stat')
    , pNode('n447',
        {blue: 325}, {prestige: 30, majesty: 200}, 899, 1470, 'stat')
    , pNode('n448',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1021, 1470, 'stat')
    , pNode('n449',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 960, 1250, 'stat')
    , pNode('n450',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 960, 1470, 'stat')
    , pNode('n451',
        {blue: 325}, {prestige: 35, luck: 35}, 825, 1360, 'stat')
    , pNode('n452',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 1095, 1360, 'stat')
    , pNode('n453', {blue: 275}, {prestige: 40}, 960, 1360, 'skill',
        'Талант: Тактическая защита',
        'Защита в ближнем бою увеличена на 5% за каждый уровень этого '+
        'символа.</p>'+
        '<p>Защита в дальнем бою увеличена на 5% за каждый уровень этого '+
        'символа.',
        'defence')
    , pNode('n454',
        {blue: 650}, {prestige: 56, spirit: 56}, 820, 1800, 'stat')
    , pNode('n455',
        {blue: 575}, {prestige: 30, majesty: 250}, 872, 1710, 'stat')
    , pNode('n456',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 768, 1710, 'stat')
    , pNode('n457',
        {blue: 650}, {prestige: 56, spirit: 56}, 725, 1680, 'stat')
    , pNode('n458',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 725, 1800, 'stat')
    , pNode('n459',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 915, 1800, 'stat')
    , pNode('n460',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 915, 1680, 'stat')
    , pNode('n461',
        {blue: 650}, {prestige: 56, luck: 56}, 759, 1630, 'stat')
    , pNode('n462',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 881, 1630, 'stat')
    , pNode('n463',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 759, 1850, 'stat')
    , pNode('n464',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 881, 1850, 'stat')
    , pNode('n465',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 820, 1630, 'stat')
    , pNode('n466',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 820, 1583, 'stat')
    , pNode('n467',
        {blue: 575}, {prestige: 30, majesty: 250}, 820, 1897, 'stat')
    , pNode('n468', {}, {}, 820, 1740, 'skill', 'Вершина разрушения',
        'Может быть усилена с помощью эфирных ядер.', 'destroy')
    , pNode('n469',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 1055, 2060, 'stat')
    , pNode('n470',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 1055, 2180, 'stat')
    , pNode('n471',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 1245, 2180, 'stat')
    , pNode('n472',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1245, 2060, 'stat')
    , pNode('n473',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1089, 2010, 'stat')
    , pNode('n474',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1211, 2010, 'stat')
    , pNode('n475',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1089, 2230, 'stat')
    , pNode('n476',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1211, 2230, 'stat')
    , pNode('n477',
        {blue: 575}, {prestige: 30, majesty: 250}, 1150, 2010, 'stat')
    , pNode('n478',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 1150, 2230, 'stat')
    , pNode('n479',
        {revelation: 300}, {prestige: 120, vit: 120}, 1017, 2036, 'stat')
    , pNode('n480',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1017, 2204, 'stat')
    , pNode('n481',
        {blue: 650}, {prestige: 56, spirit: 56}, 1283, 2204, 'stat')
    , pNode('n482',
        {blue: 810}, {prestige: 75, str: 75}, 1283, 2036, 'stat')
    , pNode('n483',
        {blue: 810}, {prestige: 75, luck: 75}, 1015, 2120, 'stat')
    , pNode('n484',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 1285, 2120, 'stat')
    , pNode('n485', {blue: 350}, {prestige: 40}, 1150, 2120, 'skill',
        'Талант: Замедляющие атаки',
        'Наносимые удары периодически снижают скорость передвижения '+
        'противников на 10% за каждый уровень этого символа. Эффект длится 3 '+
        'секунды.',
        'slow')
    , pNode('n486',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 690, 2180, 'stat')
    , pNode('n487',
        {blue: 575}, {prestige: 30, majesty: 250}, 742, 2090, 'stat')
    , pNode('n488',
        {blue: 650}, {prestige: 56, str: 56}, 638, 2090, 'stat')
    , pNode('n489',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 595, 2060, 'stat')
    , pNode('n490',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 595, 2180, 'stat')
    , pNode('n491',
        {blue: 490}, {prestige: 38, valor: 38}, 785, 2180, 'stat')
    , pNode('n492',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 785, 2060, 'stat')
    , pNode('n493',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 690, 2010, 'stat')
    , pNode('n494',
        {blue: 650}, {prestige: 56, luck: 56}, 690, 2230, 'stat')
    , pNode('n495',
        {blue: 575}, {prestige: 30, majesty: 250}, 690, 1963, 'stat')
    , pNode('n496',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 690, 2277, 'stat')
    , pNode('n497',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 557, 2036, 'stat')
    , pNode('n498',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 557, 2204, 'stat')
    , pNode('n499',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 823, 2204, 'stat')
    , pNode('n500',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 823, 2036, 'stat')
    , pNode('n501', {blue: 350}, {prestige: 40}, 690, 2120, 'skill',
        'Талант: Компрессионная травма',
        'При нанесении сокрушающего удара следующая атака компаньона нанесёт '+
        'дополнительный урон в размере 140% от показателя силы персонажа</p>'+
        '<p>Эффект символа не работает, если умение компаньона '+
        '"Базовая атака" выключено.',
        'injury')
    , pNode('n502',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 1745, 390, 'stat')
    , pNode('n503',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 1745, 510, 'stat')
    , pNode('n504',
        {blue: 325}, {prestige: 35, str: 35}, 1935, 510, 'stat')
    , pNode('n505',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 1935, 390, 'stat')
    , pNode('n506',
        {blue: 325}, {prestige: 35, str: 35}, 1779, 340, 'stat')
    , pNode('n507',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1901, 340, 'stat')
    , pNode('n508',
        {blue: 325}, {prestige: 35, str: 35}, 1779, 560, 'stat')
    , pNode('n509',
        {blue: 240}, {prestige: 23, str: 23}, 1901, 560, 'stat')
    , pNode('n510',
        {blue: 325}, {prestige: 35, str: 35}, 1840, 340, 'stat')
    , pNode('n511',
        {blue: 400}, {prestige: 47, str: 47}, 1840, 560, 'stat')
    , pNode('n512',
        {blue: 400}, {prestige: 47, str: 47}, 1707, 366, 'stat')
    , pNode('n513',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1707, 534, 'stat')
    , pNode('n514',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1973, 534, 'stat')
    , pNode('n515',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 1973, 366, 'stat')
    , pNode('n516',
        {blue: 325}, {prestige: 30, majesty: 200}, 1705, 450, 'stat')
    , pNode('n517',
        {blue: 325}, {prestige: 30, majesty: 200}, 1975, 450, 'stat')
    , pNode('n518', {blue: 350}, {prestige: 40}, 1840, 450, 'skill',
        'Талант: Предельная сила',
        'Влияние показателя силы на базовый урон увеличено на 10% за каждый '+
        'уровень этого символа.',
        'str')
    , pNode('n519',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 2070, 820, 'stat')
    , pNode('n520',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 2122, 730, 'stat')
    , pNode('n521',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 2018, 730, 'stat')
    , pNode('n522',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1975, 700, 'stat')
    , pNode('n523',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 1975, 820, 'stat')
    , pNode('n524',
        {blue: 325}, {prestige: 30, majesty: 200}, 2165, 820, 'stat')
    , pNode('n525',
        {blue: 400}, {prestige: 47, luck: 47}, 2165, 700, 'stat')
    , pNode('n526',
        {blue: 325}, {prestige: 30, majesty: 200}, 2009, 650, 'stat')
    , pNode('n527',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2131, 650, 'stat')
    , pNode('n528',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2009, 870, 'stat')
    , pNode('n529',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 2131, 870, 'stat')
    , pNode('n530',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2070, 650, 'stat')
    , pNode('n531',
        {blue: 325}, {prestige: 35, str: 35}, 2070, 870, 'stat')
    , pNode('n532',
        {blue: 400}, {prestige: 47, str: 47}, 1935, 760, 'stat')
    , pNode('n533',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 2205, 760, 'stat')
    , pNode('n534', {transformation: 300}, {}, 2070, 760, 'class',
        'Класс: Лучница/Лучник',
        'Меткая лучница может поразить цели на огромной дистанции. В её '+
        'колчане, кроме обычных, припрятаны особые снаряды. Замедляющие '+
        'ловушки, электрические и огненные стрелы, кошачья ловкость и реакция '+
        '- овладеть этим не так-то просто. Опытная лучница может осыпать '+
        'неприятеля градом стрел и без труда разорвать дистанцию, виртуозно '+
        'уходя от ударов порядком измотанного врага.',
        'archer')
    , pNode('n535',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1380, 1800, 'stat')
    , pNode('n536',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 1432, 1710, 'stat')
    , pNode('n537',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1328, 1710, 'stat')
    , pNode('n538',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 1285, 1680, 'stat')
    , pNode('n539',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1285, 1800, 'stat')
    , pNode('n540',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 1475, 1800, 'stat')
    , pNode('n541',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1475, 1680, 'stat')
    , pNode('n542',
        {blue: 325}, {prestige: 30, majesty: 200}, 1319, 1630, 'stat')
    , pNode('n543',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 1441, 1630, 'stat')
    , pNode('n544',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1319, 1850, 'stat')
    , pNode('n545',
        {blue: 325}, {prestige: 30, majesty: 200}, 1441, 1850, 'stat')
    , pNode('n546',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 1380, 1630, 'stat')
    , pNode('n547',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1380, 1850, 'stat')
    , pNode('n548',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 1245, 1740, 'stat')
    , pNode('n549',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 1515, 1740, 'stat')
    , pNode('n550', {transformation: 300}, {}, 1380, 1740, 'class',
        'Класс: Некромант',
        'Колдун, которому подвластна сама смерть. Своими зловещими '+
        'заклинаиями он может не только причинить существенный вред '+
        'противникам, но и восполнить собственное здоровье за их счёт. Он '+
        'подчиняет своей воле ужасных тварей и заставляет умерших сражаться '+
        'вместо него. А обренувшись личем, некромант открывает особые '+
        'способности, недоступные в человеческом облике.',
        'necromancer')
    , pNode('n551',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1055, -2180, 'stat')
    , pNode('n552',
        {blue: 575}, {prestige: 30, majesty: 250}, 1055, -2060, 'stat')
    , pNode('n553',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 1245, -2060, 'stat')
    , pNode('n554',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 1245, -2180, 'stat')
    , pNode('n555',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1089, -2230, 'stat')
    , pNode('n556',
        {blue: 575}, {prestige: 30, majesty: 250}, 1211, -2230, 'stat')
    , pNode('n557',
        {blue: 810}, {prestige: 75, str: 75}, 1089, -2010, 'stat')
    , pNode('n558',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1211, -2010, 'stat')
    , pNode('n559',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1150, -2230, 'stat')
    , pNode('n560',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1150, -2010, 'stat')
    , pNode('n561',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1017, -2204, 'stat')
    , pNode('n562',
        {revelation: 300}, {prestige: 120, vit: 120}, 1017, -2036, 'stat')
    , pNode('n563',
        {blue: 650}, {prestige: 56, luck: 56}, 1283, -2036, 'stat')
    , pNode('n564',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 1283, -2204, 'stat')
    , pNode('n565',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1015, -2120, 'stat')
    , pNode('n566',
        {blue: 650}, {prestige: 56, str: 56}, 1285, -2120, 'stat')
    , pNode('n567', {blue: 350}, {prestige: 40}, 1150, -2120, 'skill',
        'Талант: Вынужденная передышка',
        'При получении замедляющего эффекта с вероятностью 20% восстановится '+
        'один заряд рывка.',
        'timeout')
    , pNode('n568',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 1610, -2060, 'stat')
    , pNode('n569',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 1662, -2150, 'stat')
    , pNode('n570',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 1558, -2150, 'stat')
    , pNode('n571',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 1515, -2180, 'stat')
    , pNode('n572',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 1515, -2060, 'stat')
    , pNode('n573',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1705, -2060, 'stat')
    , pNode('n574',
        {blue: 650}, {prestige: 56, spirit: 56}, 1705, -2180, 'stat')
    , pNode('n575',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1610, -2230, 'stat')
    , pNode('n576',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1610, -2010, 'stat')
    , pNode('n577',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1610, -2277, 'stat')
    , pNode('n578',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 1610, -1963, 'stat')
    , pNode('n579',
        {blue: 575}, {prestige: 30, majesty: 250}, 1477, -2204, 'stat')
    , pNode('n580',
        {blue: 650}, {prestige: 56, valor: 56}, 1477, -2036, 'stat')
    , pNode('n581',
        {revelation: 300}, {prestige: 80, power: 80}, 1743, -2036, 'stat')
    , pNode('n582',
        {blue: 810}, {prestige: 75, valor: 75}, 1743, -2204, 'stat')
    , pNode('n583', {blue: 350}, {prestige: 40}, 1610, -2120, 'skill',
        'Талант: Замедляющие атаки',
        'Наносимые удары периодически снижают скорость передвижения '+
        'противников на 10% за каждый уровень этого символа. Эффект длится 3 '+
        'секунды.',
        'slow')
    , pNode('n584',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, -230, 820, 'stat')
    , pNode('n585',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, -178, 730, 'stat')
    , pNode('n586',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, -282, 730, 'stat')
    , pNode('n587',
        {blue: 240}, {prestige: 23, luck: 23}, -325, 700, 'stat')
    , pNode('n588',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, -325, 820, 'stat')
    , pNode('n589',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, -135, 820, 'stat')
    , pNode('n590',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, -135, 700, 'stat')
    , pNode('n591',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, -230, 650, 'stat')
    , pNode('n592',
        {blue: 325}, {prestige: 35, luck: 35}, -230, 870, 'stat')
    , pNode('n593',
        {blue: 325}, {prestige: 35, spirit: 35}, -230, 603, 'stat')
    , pNode('n594',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, -230, 917, 'stat')
    , pNode('n595',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, -363, 676, 'stat')
    , pNode('n596',
        {blue: 325}, {prestige: 30, majesty: 200}, -363, 844, 'stat')
    , pNode('n597',
        {blue: 325}, {prestige: 30, majesty: 200}, -97, 844, 'stat')
    , pNode('n598',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, -97, 676, 'stat')
    , pNode('n599', {}, {}, -230, 760, 'skill', 'Вершина равновесия',
        'Может быть усилена с помощью эфирных ядер.', 'balance')
    , pNode('n600',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, -360, 380, 'stat')
    , pNode('n601',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, -308, 290, 'stat')
    , pNode('n602',
        {blue: 325}, {prestige: 35, valor: 35}, -412, 290, 'stat')
    , pNode('n603',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, -455, 260, 'stat')
    , pNode('n604',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, -455, 380, 'stat')
    , pNode('n605',
        {blue: 325}, {prestige: 35, luck: 35}, -265, 380, 'stat')
    , pNode('n606',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, -265, 260, 'stat')
    , pNode('n607',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, -421, 210, 'stat')
    , pNode('n608',
        {blue: 325}, {prestige: 30, majesty: 200}, -299, 210, 'stat')
    , pNode('n609',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, -421, 430, 'stat')
    , pNode('n610',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, -299, 430, 'stat')
    , pNode('n611',
        {blue: 240}, {prestige: 23, valor: 23}, -360, 210, 'stat')
    , pNode('n612',
        {blue: 400}, {prestige: 47, spirit: 47}, -360, 430, 'stat')
    , pNode('n613',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, -495, 320, 'stat')
    , pNode('n614',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, -225, 320, 'stat')
    , pNode('n615', {blue: 275}, {prestige: 40}, -360, 320, 'skill',
        'Талант: Беспощадность',
        'Противники под эффектом оглущения, обездвиживания, страха или '+
        'ослепления получают от персонажа на 7% больше урона за каждый '+
        'уровень этого символа.</p>'+
        '<p>Противники под эффектом замедления получают на 2% больше урона за '+
        'каждый уровень этого символа.',
        'ruthlessness')
    , pNode('n616',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, -360, -260, 'stat')
    , pNode('n617',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, -308, -350, 'stat')
    , pNode('n618',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, -412, -350, 'stat')
    , pNode('n619',
        {blue: 400}, {prestige: 47, str: 47}, -455, -380, 'stat')
    , pNode('n620',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, -455, -260, 'stat')
    , pNode('n621',
        {blue: 325}, {prestige: 30, majesty: 200}, -265, -260, 'stat')
    , pNode('n622',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, -265, -380, 'stat')
    , pNode('n623',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, -421, -430, 'stat')
    , pNode('n624',
        {blue: 240}, {prestige: 23, luck: 23}, -299, -430, 'stat')
    , pNode('n625',
        {blue: 325}, {prestige: 30, majesty: 200}, -421, -210, 'stat')
    , pNode('n626',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, -299, -210, 'stat')
    , pNode('n627',
        {blue: 325}, {prestige: 35, str: 35}, -360, -430, 'stat')
    , pNode('n628',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, -360, -210, 'stat')
    , pNode('n629',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, -495, -320, 'stat')
    , pNode('n630',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, -225, -320, 'stat')
    , pNode('n631', {blue: 275}, {prestige: 40}, -360, -320, 'skill',
        'Талант: Прилив адренална',
        'При получении урона скорость перемещения может увеличиться на 15% за '+
        'каждый уровень этого символа. Длительность эффекта - 5 секунд, а '+
        'вероятность срабатывания зависит от текущего уровня здоровья '+
        'персонажа.</p>'+
        '<p>Эффект ускорения работает постоянно, если уровень здоровья падает '+
        'ниже 20%.',
        'adrenaline')
    , pNode('n632',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 350, 1260, 'stat')
    , pNode('n633',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 402, 1170, 'stat')
    , pNode('n634',
        {blue: 240}, {prestige: 23, spirit: 23}, 298, 1170, 'stat')
    , pNode('n635',
        {blue: 400}, {prestige: 47, spirit: 47}, 289, 1090, 'stat')
    , pNode('n636',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 411, 1090, 'stat')
    , pNode('n637',
        {blue: 325}, {prestige: 35, luck: 35}, 289, 1310, 'stat')
    , pNode('n638',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 411, 1310, 'stat')
    , pNode('n639',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 350, 1043, 'stat')
    , pNode('n640',
        {blue: 325}, {prestige: 30, majesty: 200}, 350, 1357, 'stat')
    , pNode('n641',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 217, 1116, 'stat')
    , pNode('n642',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 217, 1284, 'stat')
    , pNode('n643',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 483, 1284, 'stat')
    , pNode('n644',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 483, 1116, 'stat')
    , pNode('n645',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 215, 1200, 'stat')
    , pNode('n646',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 485, 1200, 'stat')
    , pNode('n647', {blue: 275}, {prestige: 40}, 350, 1200, 'skill',
        'Талант: Защитный рефлекс',
        'Персонаж получает на 10% меньше урона за каждый уровень этого '+
        'символа, если находится под эффектос оглушения, страха, ослепления '+
        'или обездвиживания.</p>'+
        'Персонаж получает на 3% меньше урона за каждый уровень этого '+
        'символа, если находится под эффектом замедления.',
        'reflex')
    , pNode('n648',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -230, 1260, 'stat')
    , pNode('n649',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -178, 1170, 'stat')
    , pNode('n650',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -282, 1170, 'stat')
    , pNode('n651',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -325, 1140, 'stat')
    , pNode('n652',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -325, 1260, 'stat')
    , pNode('n653',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -135, 1260, 'stat')
    , pNode('n654',
        {blue: 575}, {prestige: 30, majesty: 250}, -135, 1140, 'stat')
    , pNode('n655',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -291, 1090, 'stat')
    , pNode('n656',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -169, 1090, 'stat')
    , pNode('n657',
        {blue: 810}, {prestige: 75, spirit: 75}, -291, 1310, 'stat')
    , pNode('n658',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -169, 1310, 'stat')
    , pNode('n659',
        {blue: 490}, {prestige: 38, spirit: 38}, -230, 1090, 'stat')
    , pNode('n660',
        {revelation: 300}, {prestige: 80, luck: 80}, -230, 1043, 'stat')
    , pNode('n661',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -230, 1357, 'stat')
    , pNode('n662', {blue: 350}, {prestige: 40}, -230, 1200, 'skill',
        'Талант: Волна: замедление',
        'Использование атакующих способностей позволяет применить умение '+
        '"Волна".</p>'+
        '<p>Волна замедляет всех противников в радиусе 8 метров на 50% в '+
        'течение 4 секунд. Время перезарядки - 25 секунд.</p>'+
        '<p>При совместном использовании с символом "Волна: урон" оба эффекта '+
        'наступают одновременно, а время перезарядкм уменьшено на 5 секунд.',
        'wave')
    , pNode('n663',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -785, 1140, 'stat')
    , pNode('n664',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -785, 1260, 'stat')
    , pNode('n665',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -595, 1260, 'stat')
    , pNode('n666',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -595, 1140, 'stat')
    , pNode('n667',
        {blue: 575}, {prestige: 30, majesty: 250}, -751, 1090, 'stat')
    , pNode('n668',
        {blue: 650}, {prestige: 56, str: 56}, -629, 1090, 'stat')
    , pNode('n669',
        {blue: 650}, {prestige: 56, valor: 56}, -751, 1310, 'stat')
    , pNode('n670',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -629, 1310, 'stat')
    , pNode('n671',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -690, 1090, 'stat')
    , pNode('n672',
        {blue: 650}, {prestige: 56, spirit: 56}, -690, 1310, 'stat')
    , pNode('n673',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -823, 1116, 'stat')
    , pNode('n674',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -823, 1284, 'stat')
    , pNode('n675',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -557, 1284, 'stat')
    , pNode('n676',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -557, 1116, 'stat')
    , pNode('n677',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -825, 1200, 'stat')
    , pNode('n678',
        {blue: 575}, {prestige: 30, majesty: 250}, -555, 1200, 'stat')
    , pNode('n679', {blue: 350}, {prestige: 40}, -690, 1200, 'skill',
        'Талант: Равновесие',
        'Персонаж получает на 6% меньше урона за каждый уровень этого '+
        'символа, если он находиться в бою с тремя или более противниками.',
        'equilibrium')
    , pNode('n680',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1120, 1260, 'stat')
    , pNode('n681',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1068, 1170, 'stat')
    , pNode('n682',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1172, 1170, 'stat')
    , pNode('n683',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1215, 1140, 'stat')
    , pNode('n684',
        {blue: 575}, {prestige: 30, majesty: 250}, -1215, 1260, 'stat')
    , pNode('n685',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1025, 1260, 'stat')
    , pNode('n686',
        {blue: 490}, {prestige: 38, str: 38}, -1025, 1140, 'stat')
    , pNode('n687',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1181, 1090, 'stat')
    , pNode('n688',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1059, 1090, 'stat')
    , pNode('n689',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1181, 1310, 'stat')
    , pNode('n690',
        {blue: 650}, {prestige: 56, str: 56}, -1059, 1310, 'stat')
    , pNode('n691',
        {blue: 650}, {prestige: 56, luck: 56}, -1120, 1090, 'stat')
    , pNode('n692',
        {revelation: 300}, {prestige: 120, vit: 120}, -1120, 1310, 'stat')
    , pNode('n693',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1255, 1200, 'stat')
    , pNode('n694',
        {blue: 650}, {prestige: 56, valor: 56}, -985, 1200, 'stat')
    , pNode('n695', {transformation: 600}, {}, -1120, 1200, 'class',
        'Класс: Монах',
        'Монах боевого ордена, он в совершенстве постиг дисциплину духа и '+
        'тела и отточил мастерство владения посохом. используя особые стойки, '+
        'он может проводить серии мощных ударов, направленных на одного '+
        'противника, виртуозно раскручивать посох, нанося урон обступившим '+
        'врагам, и даже совершать головокружительные акробатические трюки.',
        'monk')
    , pNode('n696',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -690, -1140, 'stat')
    , pNode('n697',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -638, -1230, 'stat')
    , pNode('n698',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -742, -1230, 'stat')
    , pNode('n699',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -751, -1310, 'stat')
    , pNode('n700',
        {blue: 490}, {prestige: 38, str: 38}, -629, -1310, 'stat')
    , pNode('n701',
        {blue: 810}, {prestige: 75, spirit: 75}, -751, -1090, 'stat')
    , pNode('n702',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -629, -1090, 'stat')
    , pNode('n703',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -690, -1357, 'stat')
    , pNode('n704',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -690, -1043, 'stat')
    , pNode('n705',
        {blue: 575}, {prestige: 30, majesty: 250}, -823, -1284, 'stat')
    , pNode('n706',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -823, -1116, 'stat')
    , pNode('n707',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -557, -1116, 'stat')
    , pNode('n708',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -557, -1284, 'stat')
    , pNode('n709',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -825, -1200, 'stat')
    , pNode('n710',
        {blue: 575}, {prestige: 30, majesty: 250}, -555, -1200, 'stat')
    , pNode('n711', {blue: 350}, {prestige: 40}, -690, -1200, 'skill',
        'Талант: Повышенная боеготовность',
        'Боевые расходники восстанавливаются на 15/30% быстрее.',
        'alert')
    , pNode('n712',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1120, -1140, 'stat')
    , pNode('n713',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1068, -1230, 'stat')
    , pNode('n714',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1172, -1230, 'stat')
    , pNode('n715',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1215, -1260, 'stat')
    , pNode('n716',
        {blue: 575}, {prestige: 30, majesty: 250}, -1215, -1140, 'stat')
    , pNode('n717',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1025, -1140, 'stat')
    , pNode('n718',
        {blue: 490}, {prestige: 38, str: 38}, -1025, -1260, 'stat')
    , pNode('n719',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1181, -1310, 'stat')
    , pNode('n720',
        {blue: 575}, {prestige: 30, majesty: 250}, -1059, -1310, 'stat')
    , pNode('n721',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1181, -1090, 'stat')
    , pNode('n722',
        {revelation: 300}, {prestige: 80, spirit: 80}, -1059, -1090, 'stat')
    , pNode('n723',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1120, -1310, 'stat')
    , pNode('n724',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1120, -1090, 'stat')
    , pNode('n725',
        {blue: 650}, {prestige: 56, luck: 56}, -1255, -1200, 'stat')
    , pNode('n726',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -985, -1200, 'stat')
    , pNode('n727', {transformation: 600}, {}, -1120, -1200, 'class',
        'Класс: Алхимик',
        'Этот неутомимый гений многим может показаться странным, а его '+
        'поступки - лишёнными здравого смысла. Ученый-экспериментатор, '+
        'отдавший душу алъимии, всегда держит наготове и едкие химические '+
        'соединения, и придающие сил эликсиры. За его спиной не просто рюкзак '+
        'со склянками: он носит с собой портативную алхимическую лабораторию. '+
        'Она оборудована манипуляторами-щупальцами, которые могут обдать '+
        'врагов едкой кислотой или огнём, а могут и нанести ощутимый урон '+
        'установленным на концах лезвиями.',
        'alchemist')
    , pNode('n728',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -790, 60, 'stat')
    , pNode('n729',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -738, -30, 'stat')
    , pNode('n730',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -842, -30, 'stat')
    , pNode('n731',
        {blue: 575}, {prestige: 30, majesty: 250}, -885, -60, 'stat')
    , pNode('n732',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -885, 60, 'stat')
    , pNode('n733',
        {blue: 490}, {prestige: 38, str: 38}, -695, 60, 'stat')
    , pNode('n734',
        {blue: 650}, {prestige: 56, str: 56}, -695, -60, 'stat')
    , pNode('n735',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -851, -110, 'stat')
    , pNode('n736',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -729, -110, 'stat')
    , pNode('n737',
        {blue: 810}, {prestige: 75, valor: 75}, -851, 110, 'stat')
    , pNode('n738',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -729, 110, 'stat')
    , pNode('n739',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -790, -110, 'stat')
    , pNode('n740',
        {blue: 575}, {prestige: 30, majesty: 250}, -790, -157, 'stat')
    , pNode('n741',
        {blue: 490}, {prestige: 38, luck: 38}, -790, 157, 'stat')
    , pNode('n742', {}, {}, -790, 0, 'skill', 'Вершина равновесия',
        'Может быть усилена с помощью эфирных ядер.', 'balance')
    , pNode('n743',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1315, -60, 'stat')
    , pNode('n744',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1315, 60, 'stat')
    , pNode('n745',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1125, 60, 'stat')
    , pNode('n746',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1125, -60, 'stat')
    , pNode('n747',
        {blue: 490}, {prestige: 38, str: 38}, -1281, -110, 'stat')
    , pNode('n748',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1159, -110, 'stat')
    , pNode('n749',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1281, 110, 'stat')
    , pNode('n750',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1159, 110, 'stat')
    , pNode('n751',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1220, -110, 'stat')
    , pNode('n752',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1220, 110, 'stat')
    , pNode('n753',
        {blue: 490}, {prestige: 38, spirit: 38}, -1353, -84, 'stat')
    , pNode('n754',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1353, 84, 'stat')
    , pNode('n755',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1087, 84, 'stat')
    , pNode('n756',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1087, -84, 'stat')
    , pNode('n757',
        {blue: 575}, {prestige: 30, majesty: 250}, -1355, 0, 'stat')
    , pNode('n758',
        {blue: 810}, {prestige: 75, luck: 75}, -1085, 0, 'stat')
    , pNode('n759', {blue: 350}, {prestige: 40}, -1220, 0, 'skill',
        'Талант: Элемент неожиданности',
        'В течение первых 8 секунд боя исходящий урон увеличен на 12% за '+
        'каждый уровень этого символа.',
        'surprise')
    , pNode('n760',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1650, 60, 'stat')
    , pNode('n761',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1598, -30, 'stat')
    , pNode('n762',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1702, -30, 'stat')
    , pNode('n763',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1745, -60, 'stat')
    , pNode('n764',
        {blue: 150}, {prestige: 30, majesty: 200}, -1745, 60, 'stat')
    , pNode('n765',
        {blue: 650}, {prestige: 56, str: 56}, -1555, 60, 'stat')
    , pNode('n766',
        {revelation: 300}, {prestige: 80, power: 80}, -1555, -60, 'stat')
    , pNode('n767',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1711, -110, 'stat')
    , pNode('n768',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1589, -110, 'stat')
    , pNode('n769',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1711, 110, 'stat')
    , pNode('n770',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1589, 110, 'stat')
    , pNode('n771',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1650, -110, 'stat')
    , pNode('n772',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1650, 110, 'stat')
    , pNode('n773',
        {blue: 650}, {prestige: 56, valor: 56}, -1785, 0, 'stat')
    , pNode('n774',
        {blue: 490}, {prestige: 38, luck: 38}, -1515, 0, 'stat')
    , pNode('n775', {transformation: 600}, {}, -1650, 0, 'class',
        'Класс: Штурмовик',
        'Штурмовик, боец дальней дистанции, доверяет только одному боевому '+
        'товарищу - своей пушке-трансформеру. Его не интересует добро и зло, '+
        'ему интересно лишь оружие. Безустанно изучая инструменты уничтожения '+
        'живой и неживой материи, он совершенствует и модернизирует своё '+
        'боевое снаряжение и без лишних угрызений совести испытывает его в '+
        'деле.',
        'hedgehopper')
    , pNode('n776',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -850, -590, 'stat')
    , pNode('n777',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -798, -680, 'stat')
    , pNode('n778',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -902, -680, 'stat')
    , pNode('n779',
        {blue: 650}, {prestige: 56, valor: 56}, -945, -710, 'stat')
    , pNode('n780',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -945, -590, 'stat')
    , pNode('n781',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -755, -590, 'stat')
    , pNode('n782',
        {blue: 575}, {prestige: 30, majesty: 250}, -755, -710, 'stat')
    , pNode('n783',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -850, -760, 'stat')
    , pNode('n784',
        {blue: 650}, {prestige: 56, spirit: 56}, -850, -540, 'stat')
    , pNode('n785',
        {blue: 810}, {prestige: 75, spirit: 75}, -850, -807, 'stat')
    , pNode('n786',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -850, -493, 'stat')
    , pNode('n787',
        {revelation: 300}, {prestige: 120, vit: 120}, -983, -734, 'stat')
    , pNode('n788',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -983, -566, 'stat')
    , pNode('n789',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -717, -566, 'stat')
    , pNode('n790',
        {red: 490}, {prestige: 37, power: 27, dex: 18}, -717, -734, 'stat')
    , pNode('n791', {blue: 350}, {prestige: 40}, -850, -650, 'skill',
        'Талант: Импульсный барьер',
        'При активации импульсного разряда персонаж на 3 секунды получает '+
        'щит, который поглощает входящий урон.</p>'+
        '<p>Каждый уровень этого символа увеличивает количество поглощаемого '+
        'урона на 3% от максимального здоровья персонажа.',
        'barrier')
    , pNode('n792',
        {blue: 575}, {prestige: 30, majesty: 250}, -850, 710, 'stat')
    , pNode('n793',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -798, 620, 'stat')
    , pNode('n794',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -902, 620, 'stat')
    , pNode('n795',
        {blue: 810}, {prestige: 75, luck: 75}, -911, 540, 'stat')
    , pNode('n796',
        {blue: 490}, {prestige: 38, valor: 38}, -789, 540, 'stat')
    , pNode('n797',
        {blue: 490}, {prestige: 38, luck: 38}, -911, 760, 'stat')
    , pNode('n798',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -789, 760, 'stat')
    , pNode('n799',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -850, 493, 'stat')
    , pNode('n800',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -850, 807, 'stat')
    , pNode('n801',
        {revelation: 300}, {prestige: 80, power: 80}, -983, 566, 'stat')
    , pNode('n802',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -983, 734, 'stat')
    , pNode('n803',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -717, 734, 'stat')
    , pNode('n804',
        {blue: 575}, {prestige: 30, majesty: 250}, -717, 566, 'stat')
    , pNode('n805',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -985, 650, 'stat')
    , pNode('n806',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -715, 650, 'stat')
    , pNode('n807', {blue: 350}, {prestige: 40}, -850, 650, 'skill',
        'Талант: Болезненные спазмы',
        'При нанесении импульсного урона следующая атака компаньона нанесёт '+
        'дополнительный урон в размере 200% от показателя духа персонажа</p>'+
        '<p>Эффект символа не работает, если умение компаньона '+
        '"Базовая атака" выключено.',
        'spasm')
    , pNode('n808',
        {revelation: 300}, {prestige: 80, power: 80}, 2410, -1200, 'stat')
    , pNode('n809',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2462, -1290, 'stat')
    , pNode('n810',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2358, -1290, 'stat')
    , pNode('n811',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 2349, -1370, 'stat')
    , pNode('n812',
        {blue: 810}, {prestige: 75, spirit: 75}, 2471, -1370, 'stat')
    , pNode('n813',
        {blue: 650}, {prestige: 56, str: 56}, 2349, -1150, 'stat')
    , pNode('n814',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 2471, -1150, 'stat')
    , pNode('n815',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2410, -1417, 'stat')
    , pNode('n816',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2410, -1103, 'stat')
    , pNode('n817',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2277, -1344, 'stat')
    , pNode('n818',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2277, -1176, 'stat')
    , pNode('n819',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 2543, -1176, 'stat')
    , pNode('n820',
        {blue: 490}, {prestige: 38, str: 38}, 2543, -1344, 'stat')
    , pNode('n821',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 2275, -1260, 'stat')
    , pNode('n822',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 2545, -1260, 'stat')
    , pNode('n823', {blue: 275}, {prestige: 40}, 2410, -1260, 'skill',
        'Талант: Сотрясение',
        'Критические попадания оглушают противников на 2 секунды. Один и тот '+
        'же противник может подвергнуться этому эффекту не чаще одного раза в '+
        '12 секунд.',
        'concussion')
    , pNode('n824',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2775, -1420, 'stat')
    , pNode('n825',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2775, -1300, 'stat')
    , pNode('n826',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2965, -1300, 'stat')
    , pNode('n827',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 2965, -1420, 'stat')
    , pNode('n828',
        {blue: 325}, {prestige: 35, luck: 35}, 2809, -1470, 'stat')
    , pNode('n829',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 2931, -1470, 'stat')
    , pNode('n830',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2809, -1250, 'stat')
    , pNode('n831',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 2931, -1250, 'stat')
    , pNode('n832',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 2870, -1470, 'stat')
    , pNode('n833',
        {blue: 325}, {prestige: 30, majesty: 200}, 2870, -1250, 'stat')
    , pNode('n834',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2737, -1444, 'stat')
    , pNode('n835',
        {blue: 325}, {prestige: 35, str: 35}, 2737, -1276, 'stat')
    , pNode('n836',
        {blue: 325}, {prestige: 30, majesty: 200}, 3003, -1276, 'stat')
    , pNode('n837',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 3003, -1444, 'stat')
    , pNode('n838',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2735, -1360, 'stat')
    , pNode('n839',
        {blue: 325}, {prestige: 35, spirit: 35}, 3005, -1360, 'stat')
    , pNode('n840', {}, {}, 2870, -1360, 'skill', 'Вершина созидания',
        'Может быть усилена с помощью эфирных ядер.', 'create')
    , pNode('n841',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 2870, -920, 'stat')
    , pNode('n842',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2922, -1010, 'stat')
    , pNode('n843',
        {blue: 400}, {prestige: 47, spirit: 47}, 2818, -1010, 'stat')
    , pNode('n844',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2809, -1090, 'stat')
    , pNode('n845',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2931, -1090, 'stat')
    , pNode('n846',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2809, -870, 'stat')
    , pNode('n847',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2931, -870, 'stat')
    , pNode('n848',
        {revelation: 300}, {prestige: 80, str: 80}, 2870, -1137, 'stat')
    , pNode('n849',
        {blue: 240}, {prestige: 23, str: 23}, 2870, -823, 'stat')
    , pNode('n850',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2737, -1064, 'stat')
    , pNode('n851',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 2737, -896, 'stat')
    , pNode('n852',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 3003, -896, 'stat')
    , pNode('n853',
        {blue: 325}, {prestige: 30, majesty: 200}, 3003, -1064, 'stat')
    , pNode('n854',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 2735, -980, 'stat')
    , pNode('n855',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 3005, -980, 'stat')
    , pNode('n856', {blue: 275}, {prestige: 40}, 2870, -980, 'skill',
        'Талант: Волна: урон',
        'Использование атакующих способностей позволяет применить умение '+
        '"Волна".</p>'+
        '<p>Волня наносит урон всем противникам вокруг персонажа в радиусе 8 '+
        'метров. Время перезарядки - 25 секунд.</p>'+
        '<p>При совместном использовании с символом "Волна: замедление" оба '+
        'эффекта наступают одновременно, а время перезарядкм уменьшено на 5 '+
        'секунд.',
        'wave')
    , pNode('n857',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2200, 60, 'stat')
    , pNode('n858',
        {blue: 325}, {prestige: 30, majesty: 200}, 2252, -30, 'stat')
    , pNode('n859',
        {blue: 240}, {prestige: 23, valor: 23}, 2148, -30, 'stat')
    , pNode('n860',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2139, -110, 'stat')
    , pNode('n861',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 2261, -110, 'stat')
    , pNode('n862',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 2139, 110, 'stat')
    , pNode('n863',
        {blue: 325}, {prestige: 35, str: 35}, 2261, 110, 'stat')
    , pNode('n864',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2200, -157, 'stat')
    , pNode('n865',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 2200, 157, 'stat')
    , pNode('n866',
        {blue: 325}, {prestige: 35, luck: 35}, 2067, -84, 'stat')
    , pNode('n867',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 2067, 84, 'stat')
    , pNode('n868',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 2333, 84, 'stat')
    , pNode('n869',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2333, -84, 'stat')
    , pNode('n870',
        {blue: 240}, {prestige: 23, luck: 23}, 2065, 0, 'stat')
    , pNode('n871',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 2335, 0, 'stat')
    , pNode('n872', {blue: 350}, {prestige: 40}, 2200, 0, 'skill',
        'Талант: Двойной разряд',
        '"Импульсный разряд" может быть активирован два раза подряд после '+
        'своего восстановления. Шанс увеличивается на 12% за каждый уровень '+
        'этого символа.',
        'double')
    , pNode('n873',
        {blue: 240}, {prestige: 23, spirit: 23}, 2565, -60, 'stat')
    , pNode('n874',
        {blue: 325}, {prestige: 30, majesty: 200}, 2565, 60, 'stat')
    , pNode('n875',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2755, 60, 'stat')
    , pNode('n876',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 2755, -60, 'stat')
    , pNode('n877',
        {blue: 400}, {prestige: 47, valor: 47}, 2599, -110, 'stat')
    , pNode('n878',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 2721, -110, 'stat')
    , pNode('n879',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 2599, 110, 'stat')
    , pNode('n880',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2721, 110, 'stat')
    , pNode('n881',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2660, -110, 'stat')
    , pNode('n882',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 2660, 110, 'stat')
    , pNode('n883',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2527, -84, 'stat')
    , pNode('n884',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2527, 84, 'stat')
    , pNode('n885',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2793, 84, 'stat')
    , pNode('n886',
        {blue: 240}, {prestige: 23, luck: 23}, 2793, -84, 'stat')
    , pNode('n887',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 2525, 0, 'stat')
    , pNode('n888',
        {blue: 325}, {prestige: 30, majesty: 200}, 2795, 0, 'stat')
    , pNode('n889', {}, {}, 2660, 0, 'skill', 'Вершина разрушения',
        'Может быть усилена с помощью эфирных ядер.', 'destroy')
    , pNode('n890',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 3120, 60, 'stat')
    , pNode('n891',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 3172, -30, 'stat')
    , pNode('n892',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 3068, -30, 'stat')
    , pNode('n893',
        {blue: 240}, {prestige: 23, luck: 23}, 3025, -60, 'stat')
    , pNode('n894',
        {blue: 325}, {prestige: 30, majesty: 200}, 3025, 60, 'stat')
    , pNode('n895',
        {blue: 325}, {prestige: 35, spirit: 35}, 3215, 60, 'stat')
    , pNode('n896',
        {blue: 325}, {prestige: 30, majesty: 200}, 3215, -60, 'stat')
    , pNode('n897',
        {blue: 325}, {prestige: 35, spirit: 35}, 3120, -110, 'stat')
    , pNode('n898',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 3120, 110, 'stat')
    , pNode('n899',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 3120, -157, 'stat')
    , pNode('n900',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 3120, 157, 'stat')
    , pNode('n901',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 2987, -84, 'stat')
    , pNode('n902',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 2987, 84, 'stat')
    , pNode('n903',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 3253, 84, 'stat')
    , pNode('n904',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 3253, -84, 'stat')
    , pNode('n905', {}, {}, 3120, 0, 'skill', 'Вершина равновесия',
        'Может быть усилена с помощью эфирных ядер.', 'balance')
    , pNode('n906',
        {blue: 650}, {prestige: 56, spirit: 56}, 3330, -1300, 'stat')
    , pNode('n907',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3382, -1390, 'stat')
    , pNode('n908',
        {blue: 575}, {prestige: 30, majesty: 250}, 3278, -1390, 'stat')
    , pNode('n909',
        {green: 575}, {prestige: 30, majesty: 250}, 3235, -1420, 'stat')
    , pNode('n910',
        {blue: 650}, {prestige: 56, spirit: 56}, 3235, -1300, 'stat')
    , pNode('n911',
        {blue: 650}, {prestige: 56, spirit: 56}, 3425, -1300, 'stat')
    , pNode('n912',
        {blue: 650}, {prestige: 56, spirit: 56}, 3425, -1420, 'stat')
    , pNode('n913',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3330, -1470, 'stat')
    , pNode('n914',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3330, -1250, 'stat')
    , pNode('n915',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3330, -1517, 'stat')
    , pNode('n916',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3330, -1203, 'stat')
    , pNode('n917',
        {blue: 650}, {prestige: 56, spirit: 56}, 3197, -1444, 'stat')
    , pNode('n918',
        {blue: 650}, {prestige: 56, spirit: 56}, 3197, -1276, 'stat')
    , pNode('n919',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3463, -1276, 'stat')
    , pNode('n920',
        {revelation: 300}, {prestige: 80, power: 80}, 3463, -1444, 'stat')
    , pNode('n921', {blue: 200}, {prestige: 40}, 3330, -1360, 'skill',
        'Талант: Интенсивность импульса',
        'Импульсный урон увеличен на 10% за каждый уровень этого символа.',
        'spirit')
    , pNode('n922',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3470, -920, 'stat')
    , pNode('n923',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3522, -1010, 'stat')
    , pNode('n924',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3418, -1010, 'stat')
    , pNode('n925',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3375, -1040, 'stat')
    , pNode('n926',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3375, -920, 'stat')
    , pNode('n927',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3565, -920, 'stat')
    , pNode('n928',
        {blue: 650}, {prestige: 56, spirit: 56}, 3565, -1040, 'stat')
    , pNode('n929',
        {blue: 650}, {prestige: 56, luck: 56}, 3409, -1090, 'stat')
    , pNode('n930',
        {revelation: 300}, {prestige: 80, power: 80}, 3531, -1090, 'stat')
    , pNode('n931',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3409, -870, 'stat')
    , pNode('n932',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3531, -870, 'stat')
    , pNode('n933',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3470, -1090, 'stat')
    , pNode('n934',
        {blue: 575}, {prestige: 30, majesty: 250}, 3470, -870, 'stat')
    , pNode('n935',
        {blue: 810}, {prestige: 75, valor: 75}, 3335, -980, 'stat')
    , pNode('n936',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3605, -980, 'stat')
    , pNode('n937', {transformation: 600}, {}, 3470, -980, 'class',
        'Класс: Богатырь/Воительница',
        'Эта могучая воительница находится в гуще сражения, а верный сокол по '+
        'команду готов стремительно атоковать врагов. Воительница способна '+
        'сдерживать натиск большого количества противников, отвлекая их '+
        'внимание от менее защищённых союзников. Вооружённая щитом и копьём, '+
        'она может не только умело блокировать атаки, но и наносить '+
        'сокрушительные удары.',
        'hero')
    , pNode('n938',
        {blue: 325}, {prestige: 30, majesty: 200}, 3120, -390, 'stat')
    , pNode('n939',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 3172, -480, 'stat')
    , pNode('n940',
        {blue: 400}, {prestige: 47, str: 47}, 3068, -480, 'stat')
    , pNode('n941',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 3025, -510, 'stat')
    , pNode('n942',
        {blue: 325}, {prestige: 35, str: 35}, 3025, -390, 'stat')
    , pNode('n943',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 3215, -390, 'stat')
    , pNode('n944',
        {blue: 240}, {prestige: 23, spirit: 23}, 3215, -510, 'stat')
    , pNode('n945',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 3059, -560, 'stat')
    , pNode('n946',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 3181, -560, 'stat')
    , pNode('n947',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 3059, -340, 'stat')
    , pNode('n948',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 3181, -340, 'stat')
    , pNode('n949',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 3120, -560, 'stat')
    , pNode('n950',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 3120, -607, 'stat')
    , pNode('n951',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 3120, -293, 'stat')
    , pNode('n952', {blue: 275}, {prestige: 40}, 3120, -450, 'skill',
        'Талант: Кредо защитника',
        'Входящие урон уменьшен на 5% за каждый ранг этого символа.</p>'+
        '<p>Исходящий урон уменьшен на 5%.',
        'credo_defend')
    , pNode('n953',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1705, 1300, 'stat')
    , pNode('n954',
        {blue: 325}, {prestige: 30, majesty: 200}, 1705, 1420, 'stat')
    , pNode('n955',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1895, 1420, 'stat')
    , pNode('n956',
        {green: 240}, {prestige: 27, vit: 27, dex: 0}, 1895, 1300, 'stat')
    , pNode('n957',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 1739, 1250, 'stat')
    , pNode('n958',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 1861, 1250, 'stat')
    , pNode('n959',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 1739, 1470, 'stat')
    , pNode('n960',
        {blue: 240}, {prestige: 23, valor: 23}, 1861, 1470, 'stat')
    , pNode('n961',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1800, 1250, 'stat')
    , pNode('n962',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 1800, 1470, 'stat')
    , pNode('n963',
        {blue: 325}, {prestige: 35, valor: 35}, 1667, 1276, 'stat')
    , pNode('n964',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 1667, 1444, 'stat')
    , pNode('n965',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 1933, 1444, 'stat')
    , pNode('n966',
        {blue: 325}, {prestige: 35, valor: 35}, 1933, 1276, 'stat')
    , pNode('n967',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 1665, 1360, 'stat')
    , pNode('n968',
        {blue: 325}, {prestige: 30, majesty: 200}, 1935, 1360, 'stat')
    , pNode('n969', {blue: 275}, {prestige: 40}, 1800, 1360, 'skill',
        'Талант: Импульсный барьер',
        'При активации импульсного разряда персонаж на 3 секунды получает '+
        'щит, который поглощает входящий урон.</p>'+
        '<p>Каждый уровень этого символа увеличивает количество поглощаемого '+
        'урона на 3% от максимального здоровья персонажа.',
        'barrier')
    , pNode('n970',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 1940, 1800, 'stat')
    , pNode('n971',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 1992, 1710, 'stat')
    , pNode('n972',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1888, 1710, 'stat')
    , pNode('n973',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 1845, 1680, 'stat')
    , pNode('n974',
        {blue: 490}, {prestige: 38, str: 38}, 1845, 1800, 'stat')
    , pNode('n975',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2035, 1800, 'stat')
    , pNode('n976',
        {blue: 650}, {prestige: 56, spirit: 56}, 2035, 1680, 'stat')
    , pNode('n977',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1879, 1630, 'stat')
    , pNode('n978',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 2001, 1630, 'stat')
    , pNode('n979',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 1879, 1850, 'stat')
    , pNode('n980',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 2001, 1850, 'stat')
    , pNode('n981',
        {blue: 575}, {prestige: 30, majesty: 250}, 1940, 1630, 'stat')
    , pNode('n982',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1940, 1583, 'stat')
    , pNode('n983',
        {blue: 575}, {prestige: 30, majesty: 250}, 1940, 1897, 'stat')
    , pNode('n984', {blue: 350}, {prestige: 40}, 1940, 1740, 'skill',
        'Талант: Отчаянное сопротивление',
        'Получаемые эффекты замедления ослаблены на 15% за каждый уровень '+
        'этого символа.',
        'resistance')
    , pNode('n985',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2410, 1320, 'stat')
    , pNode('n986',
        {blue: 325}, {prestige: 30, majesty: 200}, 2462, 1230, 'stat')
    , pNode('n987',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2358, 1230, 'stat')
    , pNode('n988',
        {blue: 325}, {prestige: 35, spirit: 35}, 2315, 1200, 'stat')
    , pNode('n989',
        {red: 240}, {prestige: 17, power: 17, dex: 6}, 2315, 1320, 'stat')
    , pNode('n990',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 2505, 1320, 'stat')
    , pNode('n991',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2505, 1200, 'stat')
    , pNode('n992',
        {blue: 325}, {prestige: 35, luck: 35}, 2410, 1150, 'stat')
    , pNode('n993',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 2410, 1370, 'stat')
    , pNode('n994',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 2410, 1103, 'stat')
    , pNode('n995',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 2410, 1417, 'stat')
    , pNode('n996',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2277, 1176, 'stat')
    , pNode('n997',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 2277, 1344, 'stat')
    , pNode('n998',
        {blue: 400}, {prestige: 47, spirit: 47}, 2543, 1344, 'stat')
    , pNode('n999',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2543, 1176, 'stat')
    , pNode('n1000', {blue: 275}, {prestige: 40}, 2410, 1260, 'skill',
        'Талант: Рваная рана',
        'При нанесении критического урона следующая атака компаньона нанесёт '+
        'дополнительный урон в размере 100% от показателя удачи персонажа</p>'+
        '<p>Эффект символа не работает, если умение компаньона '+
        '"Базовая атака" выключено.',
        'laceration')
    , pNode('n1001',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 2870, 1420, 'stat')
    , pNode('n1002',
        {blue: 325}, {prestige: 35, str: 35}, 2922, 1330, 'stat')
    , pNode('n1003',
        {blue: 400}, {prestige: 47, str: 47}, 2818, 1330, 'stat')
    , pNode('n1004',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2809, 1250, 'stat')
    , pNode('n1005',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2931, 1250, 'stat')
    , pNode('n1006',
        {blue: 325}, {prestige: 35, spirit: 35}, 2809, 1470, 'stat')
    , pNode('n1007',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 2931, 1470, 'stat')
    , pNode('n1008',
        {blue: 325}, {prestige: 30, majesty: 200}, 2870, 1203, 'stat')
    , pNode('n1009',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2870, 1517, 'stat')
    , pNode('n1010',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2737, 1276, 'stat')
    , pNode('n1011',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2737, 1444, 'stat')
    , pNode('n1012',
        {blue: 325}, {prestige: 30, majesty: 200}, 3003, 1444, 'stat')
    , pNode('n1013',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 3003, 1276, 'stat')
    , pNode('n1014',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 2735, 1360, 'stat')
    , pNode('n1015',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 3005, 1360, 'stat')
    , pNode('n1016', {}, {}, 2870, 1360, 'skill', 'Вершина созидания',
        'Может быть усилена с помощью эфирных ядер.', 'create')
    , pNode('n1017',
        {blue: 490}, {prestige: 38, valor: 38}, 3330, 1420, 'stat')
    , pNode('n1018',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3382, 1330, 'stat')
    , pNode('n1019',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3278, 1330, 'stat')
    , pNode('n1020',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3235, 1300, 'stat')
    , pNode('n1021',
        {blue: 650}, {prestige: 56, valor: 56}, 3235, 1420, 'stat')
    , pNode('n1022',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3425, 1420, 'stat')
    , pNode('n1023',
        {blue: 575}, {prestige: 30, majesty: 250}, 3425, 1300, 'stat')
    , pNode('n1024',
        {blue: 575}, {prestige: 30, majesty: 250}, 3330, 1250, 'stat')
    , pNode('n1025',
        {blue: 650}, {prestige: 56, valor: 56}, 3330, 1470, 'stat')
    , pNode('n1026',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3330, 1203, 'stat')
    , pNode('n1027',
        {blue: 490}, {prestige: 38, valor: 38}, 3330, 1517, 'stat')
    , pNode('n1028',
        {blue: 650}, {prestige: 56, valor: 56}, 3197, 1276, 'stat')
    , pNode('n1029',
        {blue: 650}, {prestige: 56, valor: 56}, 3197, 1444, 'stat')
    , pNode('n1030',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3463, 1444, 'stat')
    , pNode('n1031',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 3463, 1276, 'stat')
    , pNode('n1032', {blue: 350}, {prestige: 40}, 3330, 1360, 'skill',
        'Талант: Мобилизация',
        'Дополнительный урон увеличен на 10% за каждый уровень этого символа.',
        'valor')
    , pNode('n1033',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3470, 1040, 'stat')
    , pNode('n1034',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3522, 950, 'stat')
    , pNode('n1035',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3418, 950, 'stat')
    , pNode('n1036',
        {blue: 650}, {prestige: 56, spirit: 56}, 3375, 920, 'stat')
    , pNode('n1037',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3375, 1040, 'stat')
    , pNode('n1038',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3565, 1040, 'stat')
    , pNode('n1039',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3565, 920, 'stat')
    , pNode('n1040',
        {revelation: 300}, {prestige: 80, power: 80}, 3409, 870, 'stat')
    , pNode('n1041',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3531, 870, 'stat')
    , pNode('n1042',
        {blue: 810}, {prestige: 75, spirit: 75}, 3409, 1090, 'stat')
    , pNode('n1043',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3531, 1090, 'stat')
    , pNode('n1044',
        {blue: 575}, {prestige: 30, majesty: 250}, 3470, 870, 'stat')
    , pNode('n1045',
        {blue: 650}, {prestige: 56, luck: 56}, 3470, 1090, 'stat')
    , pNode('n1046',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3335, 980, 'stat')
    , pNode('n1047',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3605, 980, 'stat')
    , pNode('n1048', {transformation: 600}, {}, 3470, 980, 'class',
        'Класс: Колдун/Ведьма',
        'В распоряжении ведьмы весь арсенал темных сил: страшные заклятья, '+
        'таинственные зелья и, конечно же, верная спутница - метла, которая '+
        'исполнить роль как грозного оружия, так и личного транспорта, '+
        'позволив разорвать дистанцию с противником. Душа ведьмы - потёмки. '+
        'С уверенностью можно сказать лишь одно: она всегда действует '+
        'исключительно в своих интересах.',
        'witch')
    , pNode('n1049',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 2775, 920, 'stat')
    , pNode('n1050',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 2775, 1040, 'stat')
    , pNode('n1051',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 2965, 1040, 'stat')
    , pNode('n1052',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 2965, 920, 'stat')
    , pNode('n1053',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 2809, 870, 'stat')
    , pNode('n1054',
        {blue: 325}, {prestige: 30, majesty: 200}, 2931, 870, 'stat')
    , pNode('n1055',
        {blue: 325}, {prestige: 35, str: 35}, 2809, 1090, 'stat')
    , pNode('n1056',
        {blue: 325}, {prestige: 35, spirit: 35}, 2931, 1090, 'stat')
    , pNode('n1057',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 2870, 870, 'stat')
    , pNode('n1058',
        {revelation: 300}, {prestige: 80, power: 80}, 2870, 1090, 'stat')
    , pNode('n1059',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 2737, 896, 'stat')
    , pNode('n1060',
        {blue: 400}, {prestige: 47, luck: 47}, 2737, 1064, 'stat')
    , pNode('n1061',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 3003, 1064, 'stat')
    , pNode('n1062',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 3003, 896, 'stat')
    , pNode('n1063',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 2735, 980, 'stat')
    , pNode('n1064',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 3005, 980, 'stat')
    , pNode('n1065', {blue: 275}, {prestige: 40}, 2870, 980, 'skill',
        'Талант: Болевой шок',
        'Использование атакующих способностей позволяет применить умение '+
        '"Шок".</p>'+
        '<p>"Болевой шок" наносит урон выбраннному противнику. Время '+
        'перезарядки - 25 секунд.</p>'+
        '<p>При совместном использовании с символом "Парализующий шок" оба '+
        'эффекта наступают одновременно, а время перезарядкм уменьшено на 5 '+
        'секунд.',
        'shock')
    , pNode('n1066',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 3120, 510, 'stat')
    , pNode('n1067',
        {blue: 325}, {prestige: 35, spirit: 35}, 3172, 420, 'stat')
    , pNode('n1068',
        {green: 240}, {prestige: 27, vit: 27, dex: 9}, 3068, 420, 'stat')
    , pNode('n1069',
        {blue: 325}, {prestige: 30, majesty: 200}, 3025, 390, 'stat')
    , pNode('n1070',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 3025, 510, 'stat')
    , pNode('n1071',
        {blue: 325}, {prestige: 30, majesty: 200}, 3215, 510, 'stat')
    , pNode('n1072',
        {red: 240}, {prestige: 17, power: 17, dex: 9}, 3215, 390, 'stat')
    , pNode('n1073',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 3059, 340, 'stat')
    , pNode('n1074',
        {green: 400}, {prestige: 53, vit: 53, dex: 15}, 3181, 340, 'stat')
    , pNode('n1075',
        {blue: 240}, {prestige: 23, luck: 23}, 3059, 560, 'stat')
    , pNode('n1076',
        {green: 325}, {prestige: 40, vit: 40, dex: 12}, 3181, 560, 'stat')
    , pNode('n1077',
        {red: 400}, {prestige: 33, power: 33, dex: 15}, 3120, 340, 'stat')
    , pNode('n1078',
        {blue: 325}, {prestige: 35, valor: 35}, 3120, 293, 'stat')
    , pNode('n1079',
        {red: 325}, {prestige: 25, power: 25, dex: 12}, 3120, 607, 'stat')
    , pNode('n1080', {blue: 275}, {prestige: 40}, 3120, 450, 'skill',
        'Талант: Кредо война',
        'Исходящий урон увеличен на 5% за каждый ранг этого символа.</p>'+
        '<p>Входящий урон увеличен на 5%.',
        'credo_warrior')
    , pNode('n1081',
        {blue: 150}, {prestige: 30, majesty: 200}, 3530, 60, 'stat')
    , pNode('n1082',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 3582, -30, 'stat')
    , pNode('n1083',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3478, -30, 'stat')
    , pNode('n1084',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3435, -60, 'stat')
    , pNode('n1085',
        {blue: 650}, {prestige: 56, valor: 56}, 3435, 60, 'stat')
    , pNode('n1086',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3625, 60, 'stat')
    , pNode('n1087',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3625, -60, 'stat')
    , pNode('n1088',
        {blue: 650}, {prestige: 56, spirit: 56}, 3469, -110, 'stat')
    , pNode('n1089',
        {blue: 150}, {prestige: 30, majesty: 200}, 3591, -110, 'stat')
    , pNode('n1090',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 3469, 110, 'stat')
    , pNode('n1091',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3591, 110, 'stat')
    , pNode('n1092',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3530, -110, 'stat')
    , pNode('n1093',
        {revelation: 300}, {prestige: 80, power: 80}, 3530, -157, 'stat')
    , pNode('n1094',
        {revelation: 300}, {prestige: 80, valor: 80}, 3530, 157, 'stat')
    , pNode('n1095', {blue: 275}, {prestige: 40}, 3530, 0, 'class',
        'Талант: Элемент неожиданности',
        'В течение первых 8 секунд боя исходящий урон увеличен на 12% за '+
        'каждый уровень этого символа.',
        'surprise')
    , pNode('n1096',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3990, 60, 'stat')
    , pNode('n1097',
        {blue: 650}, {prestige: 56, spirit: 56}, 4042, -30, 'stat')
    , pNode('n1098',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3938, -30, 'stat')
    , pNode('n1099',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3895, -60, 'stat')
    , pNode('n1100',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3895, 60, 'stat')
    , pNode('n1101',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4085, 60, 'stat')
    , pNode('n1102',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4085, -60, 'stat')
    , pNode('n1103',
        {blue: 575}, {prestige: 30, majesty: 250}, 3929, -110, 'stat')
    , pNode('n1104',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4051, -110, 'stat')
    , pNode('n1105',
        {blue: 650}, {prestige: 56, spirit: 56}, 3929, 110, 'stat')
    , pNode('n1106',
        {blue: 575}, {prestige: 30, majesty: 250}, 4051, 110, 'stat')
    , pNode('n1107',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3990, -110, 'stat')
    , pNode('n1108',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3990, 110, 'stat')
    , pNode('n1109',
        {blue: 650}, {prestige: 56, str: 56}, 3855, 0, 'stat')
    , pNode('n1110',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4125, 0, 'stat')
    , pNode('n1111', {transformation: 300}, {prestige: 40}, 3990, 0, 'class',
        'Класс: Берсерк',
        'Безжалостный дикарь, он не мыслит ни дня без хорошей драки. Ему не '+
        'знаком страх. Охваченный безумной яростью, берсерк может смести на '+
        'своём пути орды врагов. В таком состоянии он не чувствует боли, а '+
        'его раны затягиваются сами собой. Боевой клич берсерка способен '+
        'вселить ужас в сердца неприятелей и воодушевить союзников.',
        'berserker')
    , pNode('n1112',
        {blue: 490}, {prestige: 38, str: 38}, 690, -2060, 'stat')
    , pNode('n1113',
        {blue: 490}, {prestige: 38, spirit: 38}, 742, -2150, 'stat')
    , pNode('n1114',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 638, -2150, 'stat')
    , pNode('n1115',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 595, -2180, 'stat')
    , pNode('n1116',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 595, -2060, 'stat')
    , pNode('n1117',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 785, -2060, 'stat')
    , pNode('n1118',
        {blue: 575}, {prestige: 30, majesty: 250}, 785, -2180, 'stat')
    , pNode('n1119',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 690, -2230, 'stat')
    , pNode('n1120',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 690, -2010, 'stat')
    , pNode('n1121',
        {blue: 810}, {prestige: 75, spirit: 75}, 690, -2277, 'stat')
    , pNode('n1122',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 690, -1963, 'stat')
    , pNode('n1123',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 557, -2204, 'stat')
    , pNode('n1124',
        {revelation: 300}, {prestige: 80, power: 80}, 557, -2036, 'stat')
    , pNode('n1125',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 823, -2036, 'stat')
    , pNode('n1126',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 823, -2204, 'stat')
    , pNode('n1127', {blue: 350}, {prestige: 40}, 690, -2120, 'skill',
        'Талант: Мобилизация',
        'Дополнительный урон увеличен на 10% за каждый уровень этого символа.',
        'valor')
    , pNode('n1128',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 780, -2520, 'stat')
    , pNode('n1129',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 832, -2610, 'stat')
    , pNode('n1130',
        {blue: 650}, {prestige: 56, str: 56}, 728, -2610, 'stat')
    , pNode('n1131',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 685, -2640, 'stat')
    , pNode('n1132',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 685, -2520, 'stat')
    , pNode('n1133',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 875, -2520, 'stat')
    , pNode('n1134',
        {blue: 650}, {prestige: 56, str: 56}, 875, -2640, 'stat')
    , pNode('n1135',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 719, -2690, 'stat')
    , pNode('n1136',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 841, -2690, 'stat')
    , pNode('n1137',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 719, -2470, 'stat')
    , pNode('n1138',
        {blue: 575}, {prestige: 30, majesty: 250}, 841, -2470, 'stat')
    , pNode('n1139',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 780, -2690, 'stat')
    , pNode('n1140',
        {blue: 490}, {prestige: 38, luck: 38}, 780, -2737, 'stat')
    , pNode('n1141',
        {revelation: 300}, {prestige: 120, vit: 120}, 780, -2423, 'stat')
    , pNode('n1142', {blue: 350}, {prestige: 40}, 780, -2580, 'skill',
        'Талант: Кредо защитника',
        'Входящие урон уменьшен на 5% за каждый ранг этого символа.</p>'+
        '<p>Исходящий урон уменьшен на 5%.',
        'credo_defend')
    , pNode('n1143',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 1150, -2720, 'stat')
    , pNode('n1144',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 1202, -2810, 'stat')
    , pNode('n1145',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 1098, -2810, 'stat')
    , pNode('n1146',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 1089, -2890, 'stat')
    , pNode('n1147',
        {blue: 575}, {prestige: 30, majesty: 250}, 1211, -2890, 'stat')
    , pNode('n1148',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, 1089, -2670, 'stat')
    , pNode('n1149',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 1211, -2670, 'stat')
    , pNode('n1150',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 1150, -2937, 'stat')
    , pNode('n1151',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 1150, -2623, 'stat')
    , pNode('n1152',
        {revelation: 300}, {prestige: 120, vit: 120}, 1017, -2864, 'stat')
    , pNode('n1153',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 1017, -2696, 'stat')
    , pNode('n1154',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, 1283, -2696, 'stat')
    , pNode('n1155',
        {blue: 775}, {prestige: 56, str: 56}, 1283, -2864, 'stat')
    , pNode('n1156',
        {blue: 585}, {prestige: 38, str: 38}, 1015, -2780, 'stat')
    , pNode('n1157',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, 1285, -2780, 'stat')
    , pNode('n1158', {blue: 350}, {prestige: 40}, 1150, -2780, 'skill',
        'Талант: Прорыв',
        'Применение рывка оглушает противников вокруг конечной позиции на 1,5 '+
        'секунды.</p>'+
        '<p>Эффект накладывается не чаще одного раза в 21/14 секунд.',
        'break')
    , pNode('n1159',
        {blue: 575}, {prestige: 30, majesty: 250}, 1610, -2720, 'stat')
    , pNode('n1160',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, 1662, -2810, 'stat')
    , pNode('n1161',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, 1558, -2810, 'stat')
    , pNode('n1162',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 1515, -2840, 'stat')
    , pNode('n1163',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 1515, -2720, 'stat')
    , pNode('n1164',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 1705, -2720, 'stat')
    , pNode('n1165',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 1705, -2840, 'stat')
    , pNode('n1166',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 1549, -2890, 'stat')
    , pNode('n1167',
        {blue: 965}, {prestige: 75, str: 75}, 1671, -2890, 'stat')
    , pNode('n1168',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, 1549, -2670, 'stat')
    , pNode('n1169',
        {blue: 775}, {prestige: 56, luck: 56}, 1671, -2670, 'stat')
    , pNode('n1170',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 1610, -2890, 'stat')
    , pNode('n1171',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 1610, -2670, 'stat')
    , pNode('n1172',
        {blue: 775}, {prestige: 56, valor: 56}, 1475, -2780, 'stat')
    , pNode('n1173',
        {revelation: 300}, {prestige: 120, vit: 120}, 1745, -2780, 'stat')
    , pNode('n1174', {blue: 350}, {prestige: 40}, 1610, -2780, 'skill',
        'Талант: Предельная сила',
        'Влияние показателя силы на базовый урон увеличено на 10% за '+
        'каждый уровень этого символа.',
        'str')
    , pNode('n1175',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 1980, -2520, 'stat')
    , pNode('n1176',
        {blue: 650}, {prestige: 56, spirit: 56}, 2032, -2610, 'stat')
    , pNode('n1177',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1928, -2610, 'stat')
    , pNode('n1178',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1885, -2640, 'stat')
    , pNode('n1179',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1885, -2520, 'stat')
    , pNode('n1180',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 2075, -2520, 'stat')
    , pNode('n1181',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2075, -2640, 'stat')
    , pNode('n1182',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 1919, -2690, 'stat')
    , pNode('n1183',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 2041, -2690, 'stat')
    , pNode('n1184',
        {blue: 575}, {prestige: 30, majesty: 250}, 1919, -2470, 'stat')
    , pNode('n1185',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 2041, -2470, 'stat')
    , pNode('n1186',
        {blue: 490}, {prestige: 38, spirit: 38}, 1980, -2690, 'stat')
    , pNode('n1187',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1980, -2737, 'stat')
    , pNode('n1188',
        {revelation: 300}, {prestige: 120, vit: 120}, 1980, -2423, 'stat')
    , pNode('n1189', {blue: 350}, {prestige: 40}, 1980, -2580, 'skill',
        'Талант: Кредо война',
        'Исходящий урон увеличен на 5% за каждый ранг этого символа.</p>'+
        '<p>Входящий урон увеличен на 5%.',
        'credo_warrior')
    , pNode('n1190',
        {blue: 575}, {prestige: 30, majesty: 250}, 2070, -2060, 'stat')
    , pNode('n1191',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2122, -2150, 'stat')
    , pNode('n1192',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 2018, -2150, 'stat')
    , pNode('n1193',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1975, -2180, 'stat')
    , pNode('n1194',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1975, -2060, 'stat')
    , pNode('n1195',
        {revelation: 300}, {prestige: 80, power: 80}, 2165, -2060, 'stat')
    , pNode('n1196',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2165, -2180, 'stat')
    , pNode('n1197',
        {blue: 575}, {prestige: 30, majesty: 250}, 2009, -2230, 'stat')
    , pNode('n1198',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 2131, -2230, 'stat')
    , pNode('n1199',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 2009, -2010, 'stat')
    , pNode('n1200',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2131, -2010, 'stat')
    , pNode('n1201',
        {blue: 810}, {prestige: 75, spirit: 75}, 2070, -2230, 'stat')
    , pNode('n1202',
        {blue: 490}, {prestige: 38, valor: 38}, 2070, -2010, 'stat')
    , pNode('n1203',
        {blue: 650}, {prestige: 56, spirit: 56}, 1935, -2120, 'stat')
    , pNode('n1204',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2205, -2120, 'stat')
    , pNode('n1205', {blue: 350}, {prestige: 40}, 2070, -2120, 'skill',
        'Талант: Интенсивность импульса',
        'Импульсный урон увеличен на 10% за каждый уровень этого символа.',
        'spirit')
    , pNode('n1206',
        {blue: 575}, {prestige: 30, majesty: 250}, 2775, -1800, 'stat')
    , pNode('n1207',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2775, -1680, 'stat')
    , pNode('n1208',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 2965, -1680, 'stat')
    , pNode('n1209',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 2965, -1800, 'stat')
    , pNode('n1210',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 2809, -1850, 'stat')
    , pNode('n1211',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2931, -1850, 'stat')
    , pNode('n1212',
        {blue: 490}, {prestige: 38, str: 38}, 2809, -1630, 'stat')
    , pNode('n1213',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 2931, -1630, 'stat')
    , pNode('n1214',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2870, -1850, 'stat')
    , pNode('n1215',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 2870, -1630, 'stat')
    , pNode('n1216',
        {blue: 490}, {prestige: 38, valor: 38}, 2737, -1824, 'stat')
    , pNode('n1217',
        {blue: 650}, {prestige: 56, str: 56}, 2737, -1656, 'stat')
    , pNode('n1218',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3003, -1656, 'stat')
    , pNode('n1219',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3003, -1824, 'stat')
    , pNode('n1220',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2735, -1740, 'stat')
    , pNode('n1221',
        {blue: 575}, {prestige: 30, majesty: 250}, 3005, -1740, 'stat')
    , pNode('n1222', {blue: 350}, {prestige: 40}, 2870, -1740, 'skill',
        'Талант: Удачное попадание',
        'Раз в 2 секунды вероятность критической атаки увеличивается на 1% за '+
        'каждый уровень этого символа.</p>'+
        '<p>При нанесении критической атаки эффект сбрасываеться и начинает '+
        'накапливаться заново.',
        'luck_hit')
    , pNode('n1223',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3405, -1800, 'stat')
    , pNode('n1224',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3405, -1680, 'stat')
    , pNode('n1225',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 3595, -1680, 'stat')
    , pNode('n1226',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3595, -1800, 'stat')
    , pNode('n1227',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3439, -1850, 'stat')
    , pNode('n1228',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3561, -1850, 'stat')
    , pNode('n1229',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3439, -1630, 'stat')
    , pNode('n1230',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3561, -1630, 'stat')
    , pNode('n1231',
        {blue: 810}, {prestige: 75, luck: 75}, 3500, -1850, 'stat')
    , pNode('n1232',
        {blue: 490}, {prestige: 38, spirit: 38}, 3500, -1630, 'stat')
    , pNode('n1233',
        {revelation: 300}, {prestige: 80, power: 80}, 3367, -1824, 'stat')
    , pNode('n1234',
        {blue: 575}, {prestige: 30, majesty: 250}, 3367, -1656, 'stat')
    , pNode('n1235',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3633, -1656, 'stat')
    , pNode('n1236',
        {blue: 810}, {prestige: 75, valor: 75}, 3633, -1824, 'stat')
    , pNode('n1237',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3365, -1740, 'stat')
    , pNode('n1238',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3635, -1740, 'stat')
    , pNode('n1239', {blue: 350}, {prestige: 40}, 3500, -1740, 'skill',
        'Талант: Метка смерти',
        'Наносимые атаки могут оставить на противнике метку смерти. Метка '+
        'существует 6 секунд, по истечении которых нанесёт противнику '+
        '15/22/30% урона, полученного от создателя за это время.',
        'death')
    , pNode('n1240',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3865, -1800, 'stat')
    , pNode('n1241',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 3865, -1680, 'stat')
    , pNode('n1242',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4055, -1680, 'stat')
    , pNode('n1243',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4055, -1800, 'stat')
    , pNode('n1244',
        {blue: 575}, {prestige: 30, majesty: 250}, 3899, -1850, 'stat')
    , pNode('n1245',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4021, -1850, 'stat')
    , pNode('n1246',
        {revelation: 300}, {prestige: 80, valor: 80}, 3899, -1630, 'stat')
    , pNode('n1247',
        {blue: 490}, {prestige: 38, luck: 38}, 4021, -1630, 'stat')
    , pNode('n1248',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3960, -1850, 'stat')
    , pNode('n1249',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3960, -1630, 'stat')
    , pNode('n1250',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3827, -1824, 'stat')
    , pNode('n1251',
        {blue: 650}, {prestige: 56, spirit: 56}, 3827, -1656, 'stat')
    , pNode('n1252',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4093, -1656, 'stat')
    , pNode('n1253',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4093, -1824, 'stat')
    , pNode('n1254',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3825, -1740, 'stat')
    , pNode('n1255',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4095, -1740, 'stat')
    , pNode('n1256', {blue: 350}, {}, 3960, -1740, 'skill', 'Талант: Опека',
        'Длительность накладываемых на союзников щтов увеличена на 25%/50% от '+
        'вашей характеристики "Эффективность щитов".</p>'+
        '<p>Этот эффект не действует на щиты накладываемые на себя.',
        'guardianship')
    , pNode('n1257',
        {blue: 575}, {prestige: 30, majesty: 250}, 3960, -1210, 'stat')
    , pNode('n1258',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4012, -1300, 'stat')
    , pNode('n1259',
        {blue: 650}, {prestige: 56, valor: 56}, 3908, -1300, 'stat')
    , pNode('n1260',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3899, -1380, 'stat')
    , pNode('n1261',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4021, -1380, 'stat')
    , pNode('n1262',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3899, -1160, 'stat')
    , pNode('n1263',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4021, -1160, 'stat')
    , pNode('n1264',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3960, -1427, 'stat')
    , pNode('n1265',
        {revelation: 300}, {prestige: 120, vit: 120}, 3960, -1113, 'stat')
    , pNode('n1266',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3827, -1354, 'stat')
    , pNode('n1267',
        {blue: 490}, {prestige: 38, valor: 38}, 3827, -1186, 'stat')
    , pNode('n1268',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4093, -1186, 'stat')
    , pNode('n1269',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4093, -1354, 'stat')
    , pNode('n1270',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3825, -1270, 'stat')
    , pNode('n1271',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4095, -1270, 'stat')
    , pNode('n1272', {blue: 350}, {prestige: 40}, 3960, -1270, 'skill',
        'Талант: Глубокое рассечение',
        'При нанесении максимального дополнительного урона следующая атака '+
        'компаньона нанесёт дополнительный урон в размере 100% от показателя '+
        'отваги персонажа</p>'+
        '<p>Эффект символа не работает, если умение компаньона '+
        '"Базовая атака" выключено.',
        'dissection')
    , pNode('n1273',
        {blue: 575}, {prestige: 30, majesty: 250}, 3805, -510, 'stat')
    , pNode('n1274',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3805, -390, 'stat')
    , pNode('n1275',
        {blue: 490}, {prestige: 38, luck: 38}, 3995, -390, 'stat')
    , pNode('n1276',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3995, -510, 'stat')
    , pNode('n1277',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3839, -560, 'stat')
    , pNode('n1278',
        {blue: 490}, {prestige: 38, luck: 38}, 3961, -560, 'stat')
    , pNode('n1279',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3839, -340, 'stat')
    , pNode('n1280',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3961, -340, 'stat')
    , pNode('n1281',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3900, -560, 'stat')
    , pNode('n1282',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3900, -340, 'stat')
    , pNode('n1283',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3767, -534, 'stat')
    , pNode('n1284',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3767, -366, 'stat')
    , pNode('n1285',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4033, -366, 'stat')
    , pNode('n1286',
        {blue: 650}, {prestige: 56, spirit: 56}, 4033, -534, 'stat')
    , pNode('n1287',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3765, -450, 'stat')
    , pNode('n1288',
        {red: 650}, {prestige: 40, power: 40, dex: 244}, 4035, -450, 'stat')
    , pNode('n1289', {blue: 350}, {prestige: 40}, 3900, -450, 'skill',
        'Талант: Предельная сила',
        'Влияние показателя силы на базовый урон увеличено на 10% за '+
        'каждый уровень этого символа.',
        'str')
    , pNode('n1290',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4270, -790, 'stat')
    , pNode('n1291',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4322, -880, 'stat')
    , pNode('n1292',
        {blue: 490}, {prestige: 38, valor: 38}, 4218, -880, 'stat')
    , pNode('n1293',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4175, -910, 'stat')
    , pNode('n1294',
        {blue: 650}, {prestige: 56, str: 56}, 4175, -790, 'stat')
    , pNode('n1295',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4365, -790, 'stat')
    , pNode('n1296',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4365, -910, 'stat')
    , pNode('n1297',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4270, -960, 'stat')
    , pNode('n1298',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4270, -740, 'stat')
    , pNode('n1299',
        {blue: 490}, {prestige: 38, str: 38}, 4270, -1007, 'stat')
    , pNode('n1300',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4270, -693, 'stat')
    , pNode('n1301',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4137, -934, 'stat')
    , pNode('n1302',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4137, -766, 'stat')
    , pNode('n1303',
        {blue: 575}, {prestige: 30, majesty: 250}, 4403, -766, 'stat')
    , pNode('n1304',
        {blue: 575}, {prestige: 30, majesty: 250}, 4403, -934, 'stat')
    , pNode('n1305', {}, {}, 4270, -850, 'skill', 'Вершина созидания',
        'Может быть усилена с помощью эфирных ядер.', 'create')
    , pNode('n1306',
        {blue: 650}, {prestige: 56, valor: 56}, 4325, -1330, 'stat')
    , pNode('n1307',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4325, -1210, 'stat')
    , pNode('n1308',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4515, -1210, 'stat')
    , pNode('n1309',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4515, -1330, 'stat')
    , pNode('n1310',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4359, -1380, 'stat')
    , pNode('n1311',
        {blue: 650}, {prestige: 56, luck: 56}, 4481, -1380, 'stat')
    , pNode('n1312',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4359, -1160, 'stat')
    , pNode('n1313',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4481, -1160, 'stat')
    , pNode('n1314',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4420, -1380, 'stat')
    , pNode('n1315',
        {blue: 575}, {prestige: 30, majesty: 250}, 4420, -1160, 'stat')
    , pNode('n1316',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4287, -1354, 'stat')
    , pNode('n1317',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4287, -1186, 'stat')
    , pNode('n1318',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4553, -1186, 'stat')
    , pNode('n1319',
        {blue: 650}, {prestige: 56, str: 56}, 4553, -1354, 'stat')
    , pNode('n1320',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4285, -1270, 'stat')
    , pNode('n1321',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4555, -1270, 'stat')
    , pNode('n1322', {blue: 350}, {prestige: 40}, 4420, -1270, 'skill',
        'Талант: Максимальная отдача',
        'Критический урон увеличен на 10% за каждый уровень этого символа.',
        'luck')
    , pNode('n1323',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4880, -1210, 'stat')
    , pNode('n1324',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4932, -1300, 'stat')
    , pNode('n1325',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4828, -1300, 'stat')
    , pNode('n1326',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4785, -1330, 'stat')
    , pNode('n1327',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4785, -1210, 'stat')
    , pNode('n1328',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4975, -1210, 'stat')
    , pNode('n1329',
        {blue: 650}, {prestige: 56, valor: 56}, 4975, -1330, 'stat')
    , pNode('n1330',
        {blue: 490}, {prestige: 38, spirit: 38}, 4880, -1380, 'stat')
    , pNode('n1331',
        {blue: 650}, {prestige: 56, str: 56}, 4880, -1160, 'stat')
    , pNode('n1332',
        {blue: 575}, {prestige: 30, majesty: 250}, 4880, -1427, 'stat')
    , pNode('n1333',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4880, -1113, 'stat')
    , pNode('n1334',
        {revelation: 300}, {prestige: 80, power: 80}, 4747, -1354, 'stat')
    , pNode('n1335',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4747, -1186, 'stat')
    , pNode('n1336',
        {blue: 575}, {prestige: 30, majesty: 250}, 5013, -1186, 'stat')
    , pNode('n1337',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 5013, -1354, 'stat')
    , pNode('n1338', {}, {}, 4880, -1270, 'skill', 'Вершина разрушения',
        'Может быть усилена с помощью эфирных ядер.', 'destroy')
    , pNode('n1339',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3805, 390, 'stat')
    , pNode('n1340',
        {blue: 575}, {prestige: 30, majesty: 250}, 3805, 510, 'stat')
    , pNode('n1341',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3995, 510, 'stat')
    , pNode('n1342',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3995, 390, 'stat')
    , pNode('n1343',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 3839, 340, 'stat')
    , pNode('n1344',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3961, 340, 'stat')
    , pNode('n1345',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3839, 560, 'stat')
    , pNode('n1346',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3961, 560, 'stat')
    , pNode('n1347',
        {blue: 650}, {prestige: 56, spirit: 56}, 3900, 340, 'stat')
    , pNode('n1348',
        {blue: 810}, {prestige: 75, valor: 75}, 3900, 560, 'stat')
    , pNode('n1349',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3767, 366, 'stat')
    , pNode('n1350',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3767, 534, 'stat')
    , pNode('n1351',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4033, 534, 'stat')
    , pNode('n1352',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4033, 366, 'stat')
    , pNode('n1353',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3765, 450, 'stat')
    , pNode('n1354',
        {blue: 490}, {prestige: 38, luck: 38}, 4035, 450, 'stat')
    , pNode('n1355', {blue: 350}, {prestige: 40}, 3900, 450, 'skill',
        'Талант: Максимальная отдача',
        'Критический урон увеличен на 10% за каждый уровень этого символа.',
        'luck')
    , pNode('n1356',
        {blue: 490}, {prestige: 38, valor: 38}, 4270, 910, 'stat')
    , pNode('n1357',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4322, 820, 'stat')
    , pNode('n1358',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4218, 820, 'stat')
    , pNode('n1359',
        {blue: 650}, {prestige: 56, luck: 56}, 4175, 790, 'stat')
    , pNode('n1360',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4175, 910, 'stat')
    , pNode('n1361',
        {blue: 575}, {prestige: 30, majesty: 250}, 4365, 910, 'stat')
    , pNode('n1362',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4365, 790, 'stat')
    , pNode('n1363',
        {blue: 650}, {prestige: 56, valor: 56}, 4270, 740, 'stat')
    , pNode('n1364',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4270, 960, 'stat')
    , pNode('n1365',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4270, 693, 'stat')
    , pNode('n1366',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4270, 1007, 'stat')
    , pNode('n1367',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4137, 766, 'stat')
    , pNode('n1368',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4137, 934, 'stat')
    , pNode('n1369',
        {revelation: 300}, {prestige: 120, vit: 120}, 4403, 934, 'stat')
    , pNode('n1370',
        {blue: 575}, {prestige: 30, majesty: 250}, 4403, 766, 'stat')
    , pNode('n1371', {}, {}, 4270, 850, 'skill', 'Вершина равновесия',
        'Может быть усилена с помощью эфирных ядер.', 'balance')
    , pNode('n1372',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4420, -390, 'stat')
    , pNode('n1373',
        {blue: 810}, {prestige: 75, spirit: 75}, 4472, -480, 'stat')
    , pNode('n1374',
        {blue: 575}, {prestige: 30, majesty: 250}, 4368, -480, 'stat')
    , pNode('n1375',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4325, -510, 'stat')
    , pNode('n1376',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4325, -390, 'stat')
    , pNode('n1377',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4515, -390, 'stat')
    , pNode('n1378',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4515, -510, 'stat')
    , pNode('n1379',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4359, -560, 'stat')
    , pNode('n1380',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4481, -560, 'stat')
    , pNode('n1381',
        {blue: 650}, {prestige: 56, valor: 56}, 4359, -340, 'stat')
    , pNode('n1382',
        {blue: 490}, {prestige: 38, str: 38}, 4481, -340, 'stat')
    , pNode('n1383',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4420, -560, 'stat')
    , pNode('n1384',
        {revelation: 300}, {prestige: 120, vit: 120}, 4420, -607, 'stat')
    , pNode('n1385',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4420, -293, 'stat')
    , pNode('n1386', {blue: 350}, {prestige: 40}, 4420, -450, 'skill',
        'Талант: Интенсивность импульса',
        'Импульсный урон увеличен на 10% за каждый уровень этого символа.',
        'spirit')
    , pNode('n1387',
        {blue: 490}, {prestige: 38, spirit: 38}, 4420, 510, 'stat')
    , pNode('n1388',
        {blue: 650}, {prestige: 56, spirit: 56}, 4472, 420, 'stat')
    , pNode('n1389',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4368, 420, 'stat')
    , pNode('n1390',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4325, 390, 'stat')
    , pNode('n1391',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4325, 510, 'stat')
    , pNode('n1392',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4515, 510, 'stat')
    , pNode('n1393',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4515, 390, 'stat')
    , pNode('n1394',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4359, 340, 'stat')
    , pNode('n1395',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4481, 340, 'stat')
    , pNode('n1396',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4359, 560, 'stat')
    , pNode('n1397',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4481, 560, 'stat')
    , pNode('n1398',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4420, 340, 'stat')
    , pNode('n1399',
        {blue: 575}, {prestige: 30, majesty: 250}, 4420, 293, 'stat')
    , pNode('n1400',
        {revelation: 300}, {prestige: 120, vit: 120}, 4420, 607, 'stat')
    , pNode('n1401', {blue: 350}, {prestige: 40}, 4420, 450, 'skill',
        'Талант: Мобилизация',
        'Дополнительный урон увеличен на 10% за каждый уровень этого символа.',
        'valor')
    , pNode('n1402',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4730, -790, 'stat')
    , pNode('n1403',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4782, -880, 'stat')
    , pNode('n1404',
        {blue: 575}, {prestige: 30, majesty: 250}, 4678, -880, 'stat')
    , pNode('n1405',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4669, -960, 'stat')
    , pNode('n1406',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4791, -960, 'stat')
    , pNode('n1407',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4669, -740, 'stat')
    , pNode('n1408',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4791, -740, 'stat')
    , pNode('n1409',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4730, -1007, 'stat')
    , pNode('n1410',
        {blue: 810}, {prestige: 75, spirit: 75}, 4730, -693, 'stat')
    , pNode('n1411',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4597, -934, 'stat')
    , pNode('n1412',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4597, -766, 'stat')
    , pNode('n1413',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4863, -766, 'stat')
    , pNode('n1414',
        {blue: 650}, {prestige: 56, spirit: 56}, 4863, -934, 'stat')
    , pNode('n1415',
        {blue: 490}, {prestige: 38, luck: 38}, 4595, -850, 'stat')
    , pNode('n1416',
        {revelation: 300}, {prestige: 80, power: 80}, 4865, -850, 'stat')
    , pNode('n1417', {blue: 350}, {prestige: 40}, 4730, -850, 'skill',
        'Талант: Стремительная атака',
        'В тесение 3 секунд после применения рывка наносимый урон увеличен на '+
        '6% за каждый уровень этого символа.',
        'rush')
    , pNode('n1418',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 5190, -790, 'stat')
    , pNode('n1419',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 5242, -880, 'stat')
    , pNode('n1420',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 5138, -880, 'stat')
    , pNode('n1421',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 5095, -910, 'stat')
    , pNode('n1422',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 5095, -790, 'stat')
    , pNode('n1423',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 5285, -790, 'stat')
    , pNode('n1424',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 5285, -910, 'stat')
    , pNode('n1425',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 5190, -960, 'stat')
    , pNode('n1426',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 5190, -740, 'stat')
    , pNode('n1427',
        {blue: 650}, {prestige: 56, spirit: 56}, 5190, -1007, 'stat')
    , pNode('n1428',
        {revelation: 300}, {prestige: 120, vit: 120}, 5190, -693, 'stat')
    , pNode('n1429',
        {blue: 575}, {prestige: 30, majesty: 250}, 5057, -934, 'stat')
    , pNode('n1430',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 5057, -766, 'stat')
    , pNode('n1431',
        {blue: 810}, {prestige: 75, valor: 75}, 5323, -766, 'stat')
    , pNode('n1432',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 5323, -934, 'stat')
    , pNode('n1433', {blue: 350}, {prestige: 40}, 5190, -850, 'skill',
        'Талант: Повышенная боеготовность',
        'Боевые расходники восстанавливаются на 15/30% быстрее.',
        'alert')
    , pNode('n1434',
        {blue: 575}, {prestige: 30, majesty: 250}, 4870, 60, 'stat')
    , pNode('n1435',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4922, -30, 'stat')
    , pNode('n1436',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4818, -30, 'stat')
    , pNode('n1437',
        {blue: 650}, {prestige: 56, spirit: 56}, 4775, -60, 'stat')
    , pNode('n1438',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4775, 60, 'stat')
    , pNode('n1439',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4965, 60, 'stat')
    , pNode('n1440',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4965, -60, 'stat')
    , pNode('n1441',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4809, -110, 'stat')
    , pNode('n1442',
        {blue: 810}, {prestige: 75, spirit: 75}, 4931, -110, 'stat')
    , pNode('n1443',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4809, 110, 'stat')
    , pNode('n1444',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4931, 110, 'stat')
    , pNode('n1445',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4870, -110, 'stat')
    , pNode('n1446',
        {revelation: 300}, {prestige: 80, power: 80}, 4870, 110, 'stat')
    , pNode('n1447',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4735, 0, 'stat')
    , pNode('n1448',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 5005, 0, 'stat')
    , pNode('n1449', {blue: 350}, {prestige: 40}, 4870, 0, 'skill',
        'Талант: Замедляющие атаки',
        'Наносимые удары периодически снижают скорость передвижения '+
        'противников на 10% за каждый уровень этого символа. Эффект длится 3 '+
        'секунды.',
        'slow')
    , pNode('n1450',
        {blue: 575}, {prestige: 30, majesty: 250}, 4730, 910, 'stat')
    , pNode('n1451',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4782, 820, 'stat')
    , pNode('n1452',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4678, 820, 'stat')
    , pNode('n1453',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4669, 740, 'stat')
    , pNode('n1454',
        {blue: 490}, {prestige: 38, spirit: 38}, 4791, 740, 'stat')
    , pNode('n1455',
        {blue: 650}, {prestige: 56, spirit: 56}, 4669, 960, 'stat')
    , pNode('n1456',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4791, 960, 'stat')
    , pNode('n1457',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4730, 693, 'stat')
    , pNode('n1458',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4730, 1007, 'stat')
    , pNode('n1459',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4597, 766, 'stat')
    , pNode('n1460',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4597, 934, 'stat')
    , pNode('n1461',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4863, 934, 'stat')
    , pNode('n1462',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4863, 766, 'stat')
    , pNode('n1463',
        {blue: 810}, {prestige: 75, str: 75}, 4595, 850, 'stat')
    , pNode('n1464',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4865, 850, 'stat')
    , pNode('n1465', {blue: 350}, {prestige: 40}, 4730, 850, 'skill',
        'Талант: Инерция',
        'В течение 3 секунд после применения рывка скорость передвижения '+
        'увеличена на 12% за каждый уровень этого символа.',
        'inertia')
    , pNode('n1466',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 5330, 60, 'stat')
    , pNode('n1467',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 5382, -30, 'stat')
    , pNode('n1468',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 5278, -30, 'stat')
    , pNode('n1469',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 5235, -60, 'stat')
    , pNode('n1470',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 5235, 60, 'stat')
    , pNode('n1471',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 5425, 60, 'stat')
    , pNode('n1472',
        {blue: 650}, {prestige: 56, luck: 56}, 5425, -60, 'stat')
    , pNode('n1473',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 5269, -110, 'stat')
    , pNode('n1474',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 5391, -110, 'stat')
    , pNode('n1475',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 5269, 110, 'stat')
    , pNode('n1476',
        {blue: 490}, {prestige: 38, spirit: 38}, 5391, 110, 'stat')
    , pNode('n1477',
        {blue: 650}, {prestige: 56, luck: 56}, 5330, -110, 'stat')
    , pNode('n1478',
        {blue: 575}, {prestige: 30, majesty: 250}, 5330, -157, 'stat')
    , pNode('n1479',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 5330, 157, 'stat')
    , pNode('n1480', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        5330, 0,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n1481',
        {blue: 575}, {prestige: 30, majesty: 250}, 5190, 910, 'stat')
    , pNode('n1482',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 5242, 820, 'stat')
    , pNode('n1483',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 5138, 820, 'stat')
    , pNode('n1484',
        {blue: 650}, {prestige: 56, valor: 56}, 5095, 790, 'stat')
    , pNode('n1485',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 5095, 910, 'stat')
    , pNode('n1486',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 5285, 910, 'stat')
    , pNode('n1487',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 5285, 790, 'stat')
    , pNode('n1488',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 5129, 740, 'stat')
    , pNode('n1489',
        {blue: 490}, {prestige: 38, valor: 38}, 5251, 740, 'stat')
    , pNode('n1490',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 5129, 960, 'stat')
    , pNode('n1491',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 5251, 960, 'stat')
    , pNode('n1492',
        {revelation: 300}, {prestige: 120, vit: 120}, 5190, 740, 'stat')
    , pNode('n1493',
        {blue: 810}, {prestige: 75, valor: 75}, 5190, 960, 'stat')
    , pNode('n1494',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 5055, 850, 'stat')
    , pNode('n1495',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 5325, 850, 'stat')
    , pNode('n1496', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, 5190, 850,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n1497',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3960, 1330, 'stat')
    , pNode('n1498',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4012, 1240, 'stat')
    , pNode('n1499',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3908, 1240, 'stat')
    , pNode('n1500',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3899, 1160, 'stat')
    , pNode('n1501',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4021, 1160, 'stat')
    , pNode('n1502',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3899, 1380, 'stat')
    , pNode('n1503',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4021, 1380, 'stat')
    , pNode('n1504',
        {blue: 575}, {prestige: 30, majesty: 250}, 3960, 1113, 'stat')
    , pNode('n1505',
        {blue: 490}, {prestige: 38, str: 38}, 3960, 1427, 'stat')
    , pNode('n1506',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3827, 1186, 'stat')
    , pNode('n1507',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3827, 1354, 'stat')
    , pNode('n1508',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4093, 1354, 'stat')
    , pNode('n1509',
        {revelation: 300}, {prestige: 120, vit: 120}, 4093, 1186, 'stat')
    , pNode('n1510',
        {blue: 810}, {prestige: 75, luck: 75}, 3825, 1270, 'stat')
    , pNode('n1511',
        {blue: 650}, {prestige: 56, valor: 56}, 4095, 1270, 'stat')
    , pNode('n1512', {blue: 350}, {prestige: 40}, 3960, 1270, 'skill',
        'Талант: Жизненная энергия',
        'Использование сфер здоровья увеличивает скорость передвижения на 30% '+
        'и уменьшает входящий урон на 40%. Длительность эффекта - 3 секунды '+
        'за каждый уровень этого символа.',
        'life')
    , pNode('n1513',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1610, 2180, 'stat')
    , pNode('n1514',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1662, 2090, 'stat')
    , pNode('n1515',
        {blue: 650}, {prestige: 56, valor: 56}, 1558, 2090, 'stat')
    , pNode('n1516',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1549, 2010, 'stat')
    , pNode('n1517',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 1671, 2010, 'stat')
    , pNode('n1518',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1549, 2230, 'stat')
    , pNode('n1519',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 1671, 2230, 'stat')
    , pNode('n1520',
        {blue: 650}, {prestige: 56, luck: 56}, 1610, 1963, 'stat')
    , pNode('n1521',
        {blue: 575}, {prestige: 30, majesty: 250}, 1610, 2277, 'stat')
    , pNode('n1522',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 1477, 2036, 'stat')
    , pNode('n1523',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1477, 2204, 'stat')
    , pNode('n1524',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 1743, 2204, 'stat')
    , pNode('n1525',
        {revelation: 300}, {prestige: 80, str: 80}, 1743, 2036, 'stat')
    , pNode('n1526',
        {blue: 575}, {prestige: 30, majesty: 250}, 1475, 2120, 'stat')
    , pNode('n1527',
        {blue: 490}, {prestige: 38, luck: 38}, 1745, 2120, 'stat')
    , pNode('n1528', {blue: 350}, {prestige: 40}, 1610, 2120, 'skill',
        'Талант: Мобилизация',
        'Дополнительный урон увеличен на 10% за каждый уровень этого символа.',
        'valor')
    , pNode('n1529',
        {blue: 575}, {prestige: 30, majesty: 250}, 2070, 2180, 'stat')
    , pNode('n1530',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2122, 2090, 'stat')
    , pNode('n1531',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2018, 2090, 'stat')
    , pNode('n1532',
        {blue: 650}, {prestige: 56, valor: 56}, 1975, 2060, 'stat')
    , pNode('n1533',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1975, 2180, 'stat')
    , pNode('n1534',
        {blue: 575}, {prestige: 30, majesty: 250}, 2165, 2180, 'stat')
    , pNode('n1535',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 2165, 2060, 'stat')
    , pNode('n1536',
        {blue: 650}, {prestige: 56, spirit: 56}, 2070, 2010, 'stat')
    , pNode('n1537',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 2070, 2230, 'stat')
    , pNode('n1538',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 2070, 1963, 'stat')
    , pNode('n1539',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 2070, 2277, 'stat')
    , pNode('n1540',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 1937, 2036, 'stat')
    , pNode('n1541',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 1937, 2204, 'stat')
    , pNode('n1542',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2203, 2204, 'stat')
    , pNode('n1543',
        {blue: 650}, {prestige: 56, spirit: 56}, 2203, 2036, 'stat')
    , pNode('n1544', {blue: 350}, {prestige: 40}, 2070, 2120, 'skill',
        'Талант: Максимальная отдача',
        'Критический урон увеличен на 10% за каждый уровень этого символа.',
        'luck')
    , pNode('n1545',
        {blue: 650}, {prestige: 56, valor: 56}, 2775, 1680, 'stat')
    , pNode('n1546',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 2775, 1800, 'stat')
    , pNode('n1547',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2965, 1800, 'stat')
    , pNode('n1548',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2965, 1680, 'stat')
    , pNode('n1549',
        {blue: 575}, {prestige: 30, majesty: 250}, 2809, 1630, 'stat')
    , pNode('n1550',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2931, 1630, 'stat')
    , pNode('n1551',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 2809, 1850, 'stat')
    , pNode('n1552',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 2931, 1850, 'stat')
    , pNode('n1553',
        {blue: 490}, {prestige: 38, spirit: 38}, 2870, 1630, 'stat')
    , pNode('n1554',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2870, 1850, 'stat')
    , pNode('n1555',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2737, 1656, 'stat')
    , pNode('n1556',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2737, 1824, 'stat')
    , pNode('n1557',
        {blue: 490}, {prestige: 38, luck: 38}, 3003, 1824, 'stat')
    , pNode('n1558',
        {revelation: 300}, {prestige: 80, power: 80}, 3003, 1656, 'stat')
    , pNode('n1559',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2735, 1740, 'stat')
    , pNode('n1560',
        {blue: 575}, {prestige: 30, majesty: 250}, 3005, 1740, 'stat')
    , pNode('n1561', {blue: 350}, {prestige: 40}, 2870, 1740, 'skill',
        'Талант: Равновесие',
        'Персонаж получает на 6% меньше урона за каждый уровень этого '+
        'символа, если он находиться в бою с тремя или более противниками.',
        'equilibrium')
    , pNode('n1562',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3405, 1680, 'stat')
    , pNode('n1563',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3405, 1800, 'stat')
    , pNode('n1564',
        {blue: 575}, {prestige: 30, majesty: 250}, 3595, 1800, 'stat')
    , pNode('n1565',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3595, 1680, 'stat')
    , pNode('n1566',
        {blue: 575}, {prestige: 30, majesty: 250}, 3439, 1630, 'stat')
    , pNode('n1567',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3561, 1630, 'stat')
    , pNode('n1568',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3439, 1850, 'stat')
    , pNode('n1569',
        {blue: 650}, {prestige: 56, spirit: 56}, 3561, 1850, 'stat')
    , pNode('n1570',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3500, 1630, 'stat')
    , pNode('n1571',
        {green: 165}, {prestige: 32, vit: 32}, 3500, 1850, 'stat')
    , pNode('n1572',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3367, 1656, 'stat')
    , pNode('n1573',
        {blue: 650}, {prestige: 56, valor: 56}, 3367, 1824, 'stat')
    , pNode('n1574',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3633, 1824, 'stat')
    , pNode('n1575',
        {revelation: 300}, {prestige: 120, vit: 120}, 3633, 1656, 'stat')
    , pNode('n1576',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3365, 1740, 'stat')
    , pNode('n1577',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3635, 1740, 'stat')
    , pNode('n1578', {blue: 350}, {prestige: 40}, 3500, 1740, 'skill',
        'Талант: Метка смерти',
        'Наносимые атаки могут оставить на противнике метку смерти. Метка '+
        'существует 6 секунд, по истечении которых нанесёт противнику '+
        '15/22/30% урона, полученного от создателя за это время.',
        'death')
    , pNode('n1579',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 135, -1800, 'stat')
    , pNode('n1580',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 135, -1680, 'stat')
    , pNode('n1581',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 325, -1680, 'stat')
    , pNode('n1582',
        {blue: 575}, {prestige: 30, majesty: 250}, 325, -1800, 'stat')
    , pNode('n1583',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 169, -1850, 'stat')
    , pNode('n1584',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 291, -1850, 'stat')
    , pNode('n1585',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 169, -1630, 'stat')
    , pNode('n1586',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 291, -1630, 'stat')
    , pNode('n1587',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 230, -1850, 'stat')
    , pNode('n1588',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 230, -1630, 'stat')
    , pNode('n1589',
        {revelation: 300}, {prestige: 80, power: 80}, 97, -1824, 'stat')
    , pNode('n1590',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 97, -1656, 'stat')
    , pNode('n1591',
        {blue: 810}, {prestige: 75, str: 75}, 363, -1656, 'stat')
    , pNode('n1592',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 363, -1824, 'stat')
    , pNode('n1593',
        {blue: 650}, {prestige: 56, luck: 56}, 95, -1740, 'stat')
    , pNode('n1594',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 365, -1740, 'stat')
    , pNode('n1595', {blue: 275}, {prestige: 40}, 230, -1740, 'skill',
        'Талант: Прилив адренална',
        'При получении урона скорость перемещения может увеличиться на 15% за '+
        'каждый уровень этого символа. Длительность эффекта - 5 секунд, а '+
        'вероятность срабатывания зависит от текущего уровня здоровья '+
        'персонажа.</p>'+
        '<p>Эффект ускорения работает постоянно, если уровень здоровья падает '+
        'ниже 20%.',
        'adrenaline')
    , pNode('n1596',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1310, -590, 'stat')
    , pNode('n1597',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1258, -680, 'stat')
    , pNode('n1598',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1362, -680, 'stat')
    , pNode('n1599',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1405, -710, 'stat')
    , pNode('n1600',
        {blue: 490}, {prestige: 38, luck: 38}, -1405, -590, 'stat')
    , pNode('n1601',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1215, -590, 'stat')
    , pNode('n1602',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1215, -710, 'stat')
    , pNode('n1603',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1371, -760, 'stat')
    , pNode('n1604',
        {blue: 575}, {prestige: 30, majesty: 250}, -1249, -760, 'stat')
    , pNode('n1605',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1371, -540, 'stat')
    , pNode('n1606',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1249, -540, 'stat')
    , pNode('n1607',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1310, -760, 'stat')
    , pNode('n1608',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1310, -540, 'stat')
    , pNode('n1609',
        {blue: 810}, {prestige: 75, str: 75}, -1445, -650, 'stat')
    , pNode('n1610',
        {blue: 650}, {prestige: 56, valor: 56}, -1175, -650, 'stat')
    , pNode('n1611', {blue: 350}, {prestige: 40}, -1310, -650, 'skill',
        'Талант: Максимальная отдача',
        'Критический урон увеличен на 10% за каждый уровень этого символа.',
        'luck')
    , pNode('n1612',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1740, -590, 'stat')
    , pNode('n1613',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1688, -680, 'stat')
    , pNode('n1614',
        {blue: 575}, {prestige: 30, majesty: 250}, -1792, -680, 'stat')
    , pNode('n1615',
        {blue: 490}, {prestige: 38, str: 38}, -1835, -710, 'stat')
    , pNode('n1616',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1835, -590, 'stat')
    , pNode('n1617',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1645, -590, 'stat')
    , pNode('n1618',
        {revelation: 300}, {prestige: 80, power: 80}, -1645, -710, 'stat')
    , pNode('n1619',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1801, -760, 'stat')
    , pNode('n1620',
        {blue: 650}, {prestige: 56, spirit: 56}, -1679, -760, 'stat')
    , pNode('n1621',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1801, -540, 'stat')
    , pNode('n1622',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1679, -540, 'stat')
    , pNode('n1623',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1740, -760, 'stat')
    , pNode('n1624',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1740, -807, 'stat')
    , pNode('n1625',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1740, -493, 'stat')
    , pNode('n1626', {blue: 350}, {prestige: 40}, -1740, -650, 'skill',
        'Талант: Интенсивность импульса',
        'Импульсный урон увеличен на 10% за каждый уровень этого символа.',
        'spirit')
    , pNode('n1627',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2110, 60, 'stat')
    , pNode('n1628',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2058, -30, 'stat')
    , pNode('n1629',
        {blue: 810}, {prestige: 75, str: 75}, -2162, -30, 'stat')
    , pNode('n1630',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -2171, -110, 'stat')
    , pNode('n1631',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2049, -110, 'stat')
    , pNode('n1632',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2171, 110, 'stat')
    , pNode('n1633',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2049, 110, 'stat')
    , pNode('n1634',
        {blue: 810}, {prestige: 75, luck: 75}, -2110, -157, 'stat')
    , pNode('n1635',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2110, 157, 'stat')
    , pNode('n1636',
        {blue: 575}, {prestige: 30, majesty: 250}, -2243, -84, 'stat')
    , pNode('n1637',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -2243, 84, 'stat')
    , pNode('n1638',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1977, 84, 'stat')
    , pNode('n1639',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1977, -84, 'stat')
    , pNode('n1640',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -2245, 0, 'stat')
    , pNode('n1641',
        {blue: 490}, {prestige: 38, str: 38}, -1975, 0, 'stat')
    , pNode('n1642', {}, {}, -2110, 0, 'skill', 'Вершина разрушения',
        'Может быть усилена с помощью эфирных ядер.', 'destroy')
    , pNode('n1643',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2570, 60, 'stat')
    , pNode('n1644',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -2518, -30, 'stat')
    , pNode('n1645',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2622, -30, 'stat')
    , pNode('n1646',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2665, -60, 'stat')
    , pNode('n1647',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -2665, 60, 'stat')
    , pNode('n1648',
        {blue: 650}, {prestige: 56, str: 56}, -2475, 60, 'stat')
    , pNode('n1649',
        {blue: 490}, {prestige: 38, spirit: 38}, -2475, -60, 'stat')
    , pNode('n1650',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2570, -110, 'stat')
    , pNode('n1651',
        {blue: 490}, {prestige: 38, spirit: 38}, -2570, 110, 'stat')
    , pNode('n1652',
        {blue: 575}, {prestige: 30, majesty: 250}, -2570, -157, 'stat')
    , pNode('n1653',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -2570, 157, 'stat')
    , pNode('n1654',
        {blue: 575}, {prestige: 30, majesty: 250}, -2703, -84, 'stat')
    , pNode('n1655',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -2703, 84, 'stat')
    , pNode('n1656',
        {revelation: 300}, {prestige: 120, vit: 120}, -2437, 84, 'stat')
    , pNode('n1657',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -2437, -84, 'stat')
    , pNode('n1658', {blue: 350}, {prestige: 40}, -2570, 0, 'skill',
        'Талант: Метка смерти',
        'Наносимые атаки могут оставить на противнике метку смерти. Метка '+
        'существует 6 секунд, по истечении которых нанесёт противнику '+
        '15/22/30% урона, полученного от создателя за это время.',
        'death')
    , pNode('n1659',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2200, -590, 'stat')
    , pNode('n1660',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2148, -680, 'stat')
    , pNode('n1661',
        {blue: 650}, {prestige: 56, luck: 56}, -2252, -680, 'stat')
    , pNode('n1662',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -2295, -710, 'stat')
    , pNode('n1663',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2295, -590, 'stat')
    , pNode('n1664',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2105, -590, 'stat')
    , pNode('n1665',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -2105, -710, 'stat')
    , pNode('n1666',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2261, -760, 'stat')
    , pNode('n1667',
        {blue: 575}, {prestige: 30, majesty: 250}, -2139, -760, 'stat')
    , pNode('n1668',
        {revelation: 300}, {prestige: 120, vit: 120}, -2261, -540, 'stat')
    , pNode('n1669',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -2139, -540, 'stat')
    , pNode('n1670',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -2200, -760, 'stat')
    , pNode('n1671',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -2200, -540, 'stat')
    , pNode('n1672',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -2335, -650, 'stat')
    , pNode('n1673',
        {blue: 810}, {prestige: 75, luck: 75}, -2065, -650, 'stat')
    , pNode('n1674', {blue: 350}, {prestige: 40}, -2200, -650, 'skill',
        'Талант: Двойной разряд',
        '"Импульсный разряд" может быть активирован два раза подряд после '+
        'своего восстановления. Шанс увеличивается на 12% за каждый уровень '+
        'этого символа.',
        'double')
    , pNode('n1675',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -2200, 710, 'stat')
    , pNode('n1676',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -2148, 620, 'stat')
    , pNode('n1677',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2252, 620, 'stat')
    , pNode('n1678',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2295, 590, 'stat')
    , pNode('n1679',
        {blue: 650}, {prestige: 56, valor: 56}, -2295, 710, 'stat')
    , pNode('n1680',
        {blue: 810}, {prestige: 75, valor: 75}, -2105, 710, 'stat')
    , pNode('n1681',
        {blue: 490}, {prestige: 38, valor: 38}, -2105, 590, 'stat')
    , pNode('n1682',
        {revelation: 300}, {prestige: 120, vit: 120}, -2261, 540, 'stat')
    , pNode('n1683',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2139, 540, 'stat')
    , pNode('n1684',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2261, 760, 'stat')
    , pNode('n1685',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2139, 760, 'stat')
    , pNode('n1686',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -2200, 540, 'stat')
    , pNode('n1687',
        {blue: 575}, {prestige: 30, majesty: 250}, -2200, 760, 'stat')
    , pNode('n1688',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -2335, 650, 'stat')
    , pNode('n1689',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2065, 650, 'stat')
    , pNode('n1690', {blue: 350}, {prestige: 40}, -2200, 650, 'skill',
        'Талант: Компаньон: особый боевой режим',
        'Применение атакующих умений в бою с некоторой вероятностью позволит '+
        'компаньону начать самостоятельно атаковать противника персонажа в '+
        'течение 18/25 секунд и отвлекать огонь противников на себя.',
        'okulat')
    , pNode('n1691',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1740, 710, 'stat')
    , pNode('n1692',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1688, 620, 'stat')
    , pNode('n1693',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1792, 620, 'stat')
    , pNode('n1694',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1835, 590, 'stat')
    , pNode('n1695',
        {blue: 575}, {prestige: 30, majesty: 250}, -1835, 710, 'stat')
    , pNode('n1696',
        {revelation: 300}, {prestige: 120, vit: 120}, -1645, 710, 'stat')
    , pNode('n1697',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1645, 590, 'stat')
    , pNode('n1698',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1801, 540, 'stat')
    , pNode('n1699',
        {blue: 490}, {prestige: 38, spirit: 38}, -1679, 540, 'stat')
    , pNode('n1700',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1801, 760, 'stat')
    , pNode('n1701',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1679, 760, 'stat')
    , pNode('n1702',
        {blue: 575}, {prestige: 30, majesty: 250}, -1740, 540, 'stat')
    , pNode('n1703',
        {blue: 810}, {prestige: 75, spirit: 75}, -1740, 493, 'stat')
    , pNode('n1704',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1740, 807, 'stat')
    , pNode('n1705', {blue: 350}, {prestige: 40}, -1740, 650, 'skill',
        'Талант: Мобилизация',
        'Дополнительный урон увеличен на 10% за каждый уровень этого символа.',
        'valor')
    , pNode('n1706',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1310, 710, 'stat')
    , pNode('n1707',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1258, 620, 'stat')
    , pNode('n1708',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1362, 620, 'stat')
    , pNode('n1709',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1405, 590, 'stat')
    , pNode('n1710',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1405, 710, 'stat')
    , pNode('n1711',
        {blue: 575}, {prestige: 30, majesty: 250}, -1215, 710, 'stat')
    , pNode('n1712',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1215, 590, 'stat')
    , pNode('n1713',
        {blue: 650}, {prestige: 56, spirit: 56}, -1310, 540, 'stat')
    , pNode('n1714',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1310, 760, 'stat')
    , pNode('n1715',
        {blue: 650}, {prestige: 56, luck: 56}, -1310, 493, 'stat')
    , pNode('n1716',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1310, 807, 'stat')
    , pNode('n1717',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1443, 566, 'stat')
    , pNode('n1718',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1443, 734, 'stat')
    , pNode('n1719',
        {blue: 650}, {prestige: 56, valor: 56}, -1177, 734, 'stat')
    , pNode('n1720',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1177, 566, 'stat')
    , pNode('n1721', {blue: 350}, {prestige: 40}, -1310, 650, 'skill',
        'Талант: Предельная сила',
        'Влияние показателя силы на базовый урон увеличено на 10% за '+
        'каждый уровень этого символа.',
        'str')
    , pNode('n1722',
        {blue: 650}, {prestige: 56, valor: 56}, -1580, -1140, 'stat')
    , pNode('n1723',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1528, -1230, 'stat')
    , pNode('n1724',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1632, -1230, 'stat')
    , pNode('n1725',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1641, -1310, 'stat')
    , pNode('n1726',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1519, -1310, 'stat')
    , pNode('n1727',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1641, -1090, 'stat')
    , pNode('n1728',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1519, -1090, 'stat')
    , pNode('n1729',
        {blue: 575}, {prestige: 30, majesty: 250}, -1580, -1357, 'stat')
    , pNode('n1730',
        {revelation: 300}, {prestige: 120, vit: 120}, -1580, -1043, 'stat')
    , pNode('n1731',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1713, -1284, 'stat')
    , pNode('n1732',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1713, -1116, 'stat')
    , pNode('n1733',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1447, -1116, 'stat')
    , pNode('n1734',
        {blue: 575}, {prestige: 30, majesty: 250}, -1447, -1284, 'stat')
    , pNode('n1735',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1715, -1200, 'stat')
    , pNode('n1736',
        {blue: 650}, {prestige: 56, str: 56}, -1445, -1200, 'stat')
    , pNode('n1737', {blue: 350}, {prestige: 40}, -1580, -1200, 'skill',
        'Талант: Беспощадность',
        'Противники под эффектом оглущения, обездвиживания, страха или '+
        'ослепления получают от персонажа на 7% больше урона за каждый '+
        'уровень этого символа.</p>'+
        '<p>Противники под эффектом замедления получают на 2% больше урона за '+
        'каждый уровень этого символа.',
        'ruthlessness')
    , pNode('n1738',
        {blue: 650}, {prestige: 56, luck: 56}, -1705, -1800, 'stat')
    , pNode('n1739',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1705, -1680, 'stat')
    , pNode('n1740',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1515, -1680, 'stat')
    , pNode('n1741',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1515, -1800, 'stat')
    , pNode('n1742',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1671, -1850, 'stat')
    , pNode('n1743',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1549, -1850, 'stat')
    , pNode('n1744',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1671, -1630, 'stat')
    , pNode('n1745',
        {blue: 650}, {prestige: 56, luck: 56}, -1549, -1630, 'stat')
    , pNode('n1746',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1610, -1850, 'stat')
    , pNode('n1747',
        {blue: 575}, {prestige: 30, majesty: 250}, -1610, -1630, 'stat')
    , pNode('n1748',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1743, -1824, 'stat')
    , pNode('n1749',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1743, -1656, 'stat')
    , pNode('n1750',
        {blue: 650}, {prestige: 56, valor: 56}, -1477, -1656, 'stat')
    , pNode('n1751',
        {green: 650}, {prestige: 175, vit: 75, dex: 24}, -1477, -1824, 'stat')
    , pNode('n1752',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1745, -1740, 'stat')
    , pNode('n1753',
        {revelation: 300}, {prestige: 120, vit: 120}, -1475, -1740, 'stat')
    , pNode('n1754', {}, {}, -1610, -1740, 'skill', 'Вершина разрушения',
        'Может быть усилена с помощью эфирных ядер.', 'destroy')
    , pNode('n1755',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -3030, 60, 'stat')
    , pNode('n1756',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -2978, -30, 'stat')
    , pNode('n1757',
        {blue: 775}, {prestige: 56, str: 56}, -3082, -30, 'stat')
    , pNode('n1758',
        {blue: 775}, {prestige: 56, valor: 56}, -3125, -60, 'stat')
    , pNode('n1759',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, -3125, 60, 'stat')
    , pNode('n1760',
        {revelation: 300}, {prestige: 80, power: 80}, -2935, 60, 'stat')
    , pNode('n1761',
        {blue: 575}, {prestige: 30, majesty: 250}, -2935, -60, 'stat')
    , pNode('n1762',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, -3091, -110, 'stat')
    , pNode('n1763',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, -2969, -110, 'stat')
    , pNode('n1764',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, -3091, 110, 'stat')
    , pNode('n1765',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -2969, 110, 'stat')
    , pNode('n1766',
        {blue: 585}, {prestige: 38, valor: 38}, -3030, -110, 'stat')
    , pNode('n1767',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -3030, -157, 'stat')
    , pNode('n1768',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, -3030, 157, 'stat')
    , pNode('n1769', {}, {}, -3030, 0, 'skill', 'Вершина равновесия',
        'Может быть усилена с помощью эфирных ядер.', 'balance')
    , pNode('n1770',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 780, 2640, 'stat')
    , pNode('n1771',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 832, 2550, 'stat')
    , pNode('n1772',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 728, 2550, 'stat')
    , pNode('n1773',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 685, 2520, 'stat')
    , pNode('n1774',
        {blue: 650}, {prestige: 56, spirit: 56}, 685, 2640, 'stat')
    , pNode('n1775',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 875, 2640, 'stat')
    , pNode('n1776',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 875, 2520, 'stat')
    , pNode('n1777',
        {blue: 490}, {prestige: 38, valor: 38}, 719, 2470, 'stat')
    , pNode('n1778',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 841, 2470, 'stat')
    , pNode('n1779',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 719, 2690, 'stat')
    , pNode('n1780',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 841, 2690, 'stat')
    , pNode('n1781',
        {revelation: 300}, {prestige: 120, vit: 120}, 780, 2470, 'stat')
    , pNode('n1782',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 780, 2690, 'stat')
    , pNode('n1783',
        {blue: 575}, {prestige: 50, majesty: 250}, 645, 2580, 'stat')
    , pNode('n1784',
        {blue: 490}, {prestige: 38, spirit: 38}, 915, 2580, 'stat')
    , pNode('n1785', {blue: 350}, {prestige: 40}, 780, 2580, 'skill',
        'Талант: Интенсивность импульса',
        'Импульсный урон увеличен на 10% за каждый уровень этого символа.',
        'spirit')
    , pNode('n1786',
        {blue: 490}, {prestige: 38, str: 38}, 1980, 2640, 'stat')
    , pNode('n1787',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 2032, 2550, 'stat')
    , pNode('n1788',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 1928, 2550, 'stat')
    , pNode('n1789',
        {blue: 650}, {prestige: 56, str: 56}, 1885, 2520, 'stat')
    , pNode('n1790',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 1885, 2640, 'stat')
    , pNode('n1791',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2075, 2640, 'stat')
    , pNode('n1792',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 2075, 2520, 'stat')
    , pNode('n1793',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1919, 2470, 'stat')
    , pNode('n1794',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2041, 2470, 'stat')
    , pNode('n1795',
        {blue: 575}, {prestige: 30, majesty: 250}, 1919, 2690, 'stat')
    , pNode('n1796',
        {blue: 810}, {prestige: 75, str: 75}, 2041, 2690, 'stat')
    , pNode('n1797',
        {revelation: 300}, {prestige: 120, vit: 120}, 1980, 2470, 'stat')
    , pNode('n1798',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1980, 2690, 'stat')
    , pNode('n1799',
        {blue: 575}, {prestige: 30, majesty: 250}, 1845, 2580, 'stat')
    , pNode('n1800',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2115, 2580, 'stat')
    , pNode('n1801', {blue: 350}, {prestige: 40}, 1980, 2580, 'skill',
        'Талант: Прорыв',
        'Применение рывка оглушает противников вокруг конечной позиции на 1,5 '+
        'секунды.</p>'+
        '<p>Эффект накладывается не чаще одного раза в 21/14 секунд.',
        'break')
    , pNode('n1802',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1380, 2540, 'stat')
    , pNode('n1803',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1432, 2450, 'stat')
    , pNode('n1804',
        {blue: 650}, {prestige: 56, spirit: 56}, 1328, 2450, 'stat')
    , pNode('n1805',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 1319, 2370, 'stat')
    , pNode('n1806',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 1441, 2370, 'stat')
    , pNode('n1807',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 1319, 2590, 'stat')
    , pNode('n1808',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1441, 2590, 'stat')
    , pNode('n1809',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 1380, 2323, 'stat')
    , pNode('n1810',
        {revelation: 300}, {prestige: 80, power: 80}, 1380, 2637, 'stat')
    , pNode('n1811',
        {blue: 125}, {prestige: 30, majesty: 250}, 1247, 2396, 'stat')
    , pNode('n1812',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1247, 2564, 'stat')
    , pNode('n1813',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1513, 2564, 'stat')
    , pNode('n1814',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 1513, 2396, 'stat')
    , pNode('n1815',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1245, 2480, 'stat')
    , pNode('n1816',
        {blue: 575}, {prestige: 30, majesty: 250}, 1515, 2480, 'stat')
    , pNode('n1817', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        1380, 2480,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n1818',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1285, 2870, 'stat')
    , pNode('n1819',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1285, 2990, 'stat')
    , pNode('n1820',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1475, 2990, 'stat')
    , pNode('n1821',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1475, 2870, 'stat')
    , pNode('n1822',
        {blue: 575}, {prestige: 30, majesty: 250}, 1319, 2820, 'stat')
    , pNode('n1823',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 1441, 2820, 'stat')
    , pNode('n1824',
        {blue: 490}, {prestige: 38, luck: 38}, 1319, 3040, 'stat')
    , pNode('n1825',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 1441, 3040, 'stat')
    , pNode('n1826',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1380, 2820, 'stat')
    , pNode('n1827',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 1380, 3040, 'stat')
    , pNode('n1828',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1247, 2846, 'stat')
    , pNode('n1829',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1247, 3014, 'stat')
    , pNode('n1830',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 1513, 3014, 'stat')
    , pNode('n1831',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 1513, 2846, 'stat')
    , pNode('n1832',
        {blue: 810}, {prestige: 75, spirit: 75}, 1245, 2930, 'stat')
    , pNode('n1833',
        {blue: 650}, {prestige: 56, str: 56}, 1515, 2930, 'stat')
    , pNode('n1834', {blue: 350}, {prestige: 40}, 1380, 2930, 'skill',
        'Талант: Блистательный триумф',
        'Применение добивающего удара увеличивает исходящий урон на 15% и '+
        'уменьшает входящий урон на 15%. Длительность эффекта - 8 секунд за '+
        'каждый уровень этого символа.',
        'triumph')
    , pNode('n1835',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1580, 1260, 'stat')
    , pNode('n1836',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1528, 1170, 'stat')
    , pNode('n1837',
        {blue: 575}, {prestige: 30, majesty: 250}, -1632, 1170, 'stat')
    , pNode('n1838',
        {blue: 650}, {prestige: 56, valor: 56}, -1675, 1140, 'stat')
    , pNode('n1839',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1675, 1260, 'stat')
    , pNode('n1840',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1485, 1260, 'stat')
    , pNode('n1841',
        {blue: 650}, {prestige: 56, valor: 56}, -1485, 1140, 'stat')
    , pNode('n1842',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1641, 1090, 'stat')
    , pNode('n1843',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1519, 1090, 'stat')
    , pNode('n1844',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1641, 1310, 'stat')
    , pNode('n1845',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1519, 1310, 'stat')
    , pNode('n1846',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1580, 1090, 'stat')
    , pNode('n1847',
        {blue: 650}, {prestige: 56, spirit: 56}, -1580, 1043, 'stat')
    , pNode('n1848',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1580, 1357, 'stat')
    , pNode('n1849', {blue: 350}, {prestige: 40}, -1580, 1200, 'skill',
        'Талант: Дополнительный рывок',
        'Количество зарядов рывка увеличено на 1 за каждый уровень этого '+
        'символа.',
        'dash')
    , pNode('n1850',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1610, 1800, 'stat')
    , pNode('n1851',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1558, 1710, 'stat')
    , pNode('n1852',
        {blue: 650}, {prestige: 56, spirit: 56}, -1662, 1710, 'stat')
    , pNode('n1853',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1671, 1630, 'stat')
    , pNode('n1854',
        {blue: 490}, {prestige: 38, luck: 38}, -1549, 1630, 'stat')
    , pNode('n1855',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1671, 1850, 'stat')
    , pNode('n1856',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1549, 1850, 'stat')
    , pNode('n1857',
        {revelation: 300}, {prestige: 80, power: 80}, -1610, 1583, 'stat')
    , pNode('n1858',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1610, 1897, 'stat')
    , pNode('n1859',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1743, 1656, 'stat')
    , pNode('n1860',
        {blue: 575}, {prestige: 30, majesty: 250}, -1743, 1824, 'stat')
    , pNode('n1861',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1477, 1824, 'stat')
    , pNode('n1862',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1477, 1656, 'stat')
    , pNode('n1863',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1745, 1740, 'stat')
    , pNode('n1864',
        {blue: 650}, {prestige: 56, spirit: 56}, -1475, 1740, 'stat')
    , pNode('n1865', {blue: 350}, {prestige: 40}, -1610, 1740, 'skill',
        'Талант: Предельная сила',
        'Влияние показателя силы на базовый урон увеличено на 10% за '+
        'каждый уровень этого символа.',
        'str')
    , pNode('n1866',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1145, 1680, 'stat')
    , pNode('n1867',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1145, 1800, 'stat')
    , pNode('n1868',
        {blue: 490}, {prestige: 38, valor: 38}, -955, 1800, 'stat')
    , pNode('n1869',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -955, 1680, 'stat')
    , pNode('n1870',
        {blue: 650}, {prestige: 56, valor: 56}, -1111, 1630, 'stat')
    , pNode('n1871',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -989, 1630, 'stat')
    , pNode('n1872',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1111, 1850, 'stat')
    , pNode('n1873',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -989, 1850, 'stat')
    , pNode('n1874',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1050, 1630, 'stat')
    , pNode('n1875',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1050, 1850, 'stat')
    , pNode('n1876',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1183, 1656, 'stat')
    , pNode('n1877',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1183, 1824, 'stat')
    , pNode('n1878',
        {revelation: 300}, {prestige: 120, vit: 120}, -917, 1824, 'stat')
    , pNode('n1879',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -917, 1656, 'stat')
    , pNode('n1880',
        {blue: 575}, {prestige: 30, majesty: 250}, -1185, 1740, 'stat')
    , pNode('n1881',
        {blue: 490}, {prestige: 38, spirit: 38}, -915, 1740, 'stat')
    , pNode('n1882', {}, {}, -1050, 1740, 'skill', 'Вершина созидания',
        'Может быть усилена с помощью эфирных ядер.', 'create')
    , pNode('n1883',
        {blue: 650}, {prestige: 56, valor: 56}, -500, 1800, 'stat')
    , pNode('n1884',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -448, 1710, 'stat')
    , pNode('n1885',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -552, 1710, 'stat')
    , pNode('n1886',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -595, 1680, 'stat')
    , pNode('n1887',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -595, 1800, 'stat')
    , pNode('n1888',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -405, 1800, 'stat')
    , pNode('n1889',
        {blue: 490}, {prestige: 38, spirit: 38}, -405, 1680, 'stat')
    , pNode('n1890',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -500, 1630, 'stat')
    , pNode('n1891',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -500, 1850, 'stat')
    , pNode('n1892',
        {blue: 575}, {prestige: 30, majesty: 250}, -500, 1583, 'stat')
    , pNode('n1893',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -500, 1897, 'stat')
    , pNode('n1894',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -633, 1656, 'stat')
    , pNode('n1895',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -633, 1824, 'stat')
    , pNode('n1896',
        {revelation: 300}, {prestige: 120, vit: 120}, -367, 1824, 'stat')
    , pNode('n1897',
        {blue: 575}, {prestige: 30, majesty: 250}, -367, 1656, 'stat')
    , pNode('n1898', {blue: 350}, {prestige: 40}, -500, 1740, 'skill',
        'Талант: Беспощадность',
        'Противники под эффектом оглущения, обездвиживания, страха или '+
        'ослепления получают от персонажа на 7% больше урона за каждый '+
        'уровень этого символа.</p>'+
        '<p>Противники под эффектом замедления получают на 2% больше урона за '+
        'каждый уровень этого символа.',
        'ruthlessness')
    , pNode('n1899',
        {blue: 650}, {prestige: 56, spirit: 56}, 230, 1800, 'stat')
    , pNode('n1900',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 282, 1710, 'stat')
    , pNode('n1901',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 178, 1710, 'stat')
    , pNode('n1902',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 169, 1630, 'stat')
    , pNode('n1903',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 291, 1630, 'stat')
    , pNode('n1904',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 169, 1850, 'stat')
    , pNode('n1905',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 291, 1850, 'stat')
    , pNode('n1906',
        {blue: 650}, {prestige: 56, str: 56}, 230, 1583, 'stat')
    , pNode('n1907',
        {blue: 575}, {prestige: 30, majesty: 250}, 230, 1897, 'stat')
    , pNode('n1908',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 97, 1656, 'stat')
    , pNode('n1909',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 97, 1824, 'stat')
    , pNode('n1910',
        {blue: 650}, {prestige: 56, luck: 56}, 363, 1824, 'stat')
    , pNode('n1911',
        {revelation: 300}, {prestige: 80, power: 80}, 363, 1656, 'stat')
    , pNode('n1912',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 95, 1740, 'stat')
    , pNode('n1913',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 365, 1740, 'stat')
    , pNode('n1914', {blue: 350}, {prestige: 40}, 230, 1740, 'skill',
        'Талант: Жизненная энергия',
        'Использование сфер здоровья увеличивает скорость передвижения на 30% '+
        'и уменьшает входящий урон на 40%. Длительность эффекта - 3 секунды '+
        'за каждый уровень этого символа.',
        'life')
    , pNode('n1915',
        {blue: 650}, {prestige: 56, spirit: 56}, -1050, 2260, 'stat')
    , pNode('n1916',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -998, 2170, 'stat')
    , pNode('n1917',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1102, 2170, 'stat')
    , pNode('n1918',
        {blue: 575}, {prestige: 30, majesty: 250}, -1145, 2140, 'stat')
    , pNode('n1919',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1145, 2260, 'stat')
    , pNode('n1920',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -955, 2260, 'stat')
    , pNode('n1921',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -955, 2140, 'stat')
    , pNode('n1922',
        {blue: 650}, {prestige: 56, str: 56}, -1111, 2090, 'stat')
    , pNode('n1923',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -989, 2090, 'stat')
    , pNode('n1924',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1111, 2310, 'stat')
    , pNode('n1925',
        {blue: 650}, {prestige: 56, spirit: 56}, -989, 2310, 'stat')
    , pNode('n1926',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1050, 2090, 'stat')
    , pNode('n1927',
        {revelation: 300}, {prestige: 120, vit: 120}, -1050, 2043, 'stat')
    , pNode('n1928',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1050, 2357, 'stat')
    , pNode('n1929', {blue: 350}, {prestige: 40}, -1050, 2200, 'skill',
        'Талант: Искусный маневр',
        'Применение рывка создаёт защитный барьер, который поглощает урон, '+
        'равный 4/6% максимального здоровья персонажа в течение 3 секунд.',
        'maneuver')
    , pNode('n1930',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -2660, -590, 'stat')
    , pNode('n1931',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -2608, -680, 'stat')
    , pNode('n1932',
        {blue: 575}, {prestige: 30, majesty: 250}, -2712, -680, 'stat')
    , pNode('n1933',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, -2721, -760, 'stat')
    , pNode('n1934',
        {blue: 775}, {prestige: 56, str: 56}, -2599, -760, 'stat')
    , pNode('n1935',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, -2721, -540, 'stat')
    , pNode('n1936',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, -2599, -540, 'stat')
    , pNode('n1937',
        {revelation: 300}, {prestige: 120, vit: 120}, -2660, -807, 'stat')
    , pNode('n1938',
        {blue: 575}, {prestige: 30, majesty: 250}, -2660, -493, 'stat')
    , pNode('n1939',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -2793, -734, 'stat')
    , pNode('n1940',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -2793, -566, 'stat')
    , pNode('n1941',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -2527, -566, 'stat')
    , pNode('n1942',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -2527, -734, 'stat')
    , pNode('n1943',
        {blue: 775}, {prestige: 56, valor: 56}, -2795, -650, 'stat')
    , pNode('n1944',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -2525, -650, 'stat')
    , pNode('n1945', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        -2660, -650,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n1946',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2135, -1260, 'stat')
    , pNode('n1947',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2135, -1140, 'stat')
    , pNode('n1948',
        {blue: 575}, {prestige: 30, majesty: 250}, -1945, -1140, 'stat')
    , pNode('n1949',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1945, -1260, 'stat')
    , pNode('n1950',
        {blue: 490}, {prestige: 38, luck: 38}, -2101, -1310, 'stat')
    , pNode('n1951',
        {blue: 650}, {prestige: 56, str: 56}, -1979, -1310, 'stat')
    , pNode('n1952',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -2101, -1090, 'stat')
    , pNode('n1953',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1979, -1090, 'stat')
    , pNode('n1954',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2040, -1310, 'stat')
    , pNode('n1955',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -2040, -1090, 'stat')
    , pNode('n1956',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2173, -1284, 'stat')
    , pNode('n1957',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -2173, -1116, 'stat')
    , pNode('n1958',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1907, -1116, 'stat')
    , pNode('n1959',
        {revelation: 300}, {prestige: 80, luck: 80}, -1907, -1284, 'stat')
    , pNode('n1960',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2175, -1200, 'stat')
    , pNode('n1961',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1905, -1200, 'stat')
    , pNode('n1962', {blue: 4500}, {majesty: 2000}, -2040, -1200, 'bigStat',
        'Бонус: Величие', '', 'majesty')
    , pNode('n1963',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2500, -1140, 'stat')
    , pNode('n1964',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2448, -1230, 'stat')
    , pNode('n1965',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2552, -1230, 'stat')
    , pNode('n1966',
        {blue: 575}, {prestige: 30, majesty: 250}, -2595, -1260, 'stat')
    , pNode('n1967',
        {blue: 585}, {prestige: 38, valor: 38}, -2595, -1140, 'stat')
    , pNode('n1968',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -2405, -1140, 'stat')
    , pNode('n1969',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2405, -1260, 'stat')
    , pNode('n1970',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -2500, -1310, 'stat')
    , pNode('n1971',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -2500, -1090, 'stat')
    , pNode('n1972',
        {blue: 810}, {prestige: 75, luck: 75}, -2500, -1357, 'stat')
    , pNode('n1973',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2500, -1043, 'stat')
    , pNode('n1974',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -2633, -1284, 'stat')
    , pNode('n1975',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2633, -1116, 'stat')
    , pNode('n1976',
        {revelation: 300}, {prestige: 80, power: 80}, -2367, -1116, 'stat')
    , pNode('n1977',
        {blue: 575}, {prestige: 30, majesty: 250}, -2367, -1284, 'stat')
    , pNode('n1978', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, -2500, -1200,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n1979',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1150, -1680, 'stat')
    , pNode('n1980',
        {blue: 490}, {prestige: 38, spirit: 38}, -1098, -1770, 'stat')
    , pNode('n1981',
        {blue: 575}, {prestige: 30, majesty: 250}, -1202, -1770, 'stat')
    , pNode('n1982',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1245, -1800, 'stat')
    , pNode('n1983',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -1245, -1680, 'stat')
    , pNode('n1984',
        {revelation: 300}, {prestige: 120, vit: 120}, -1055, -1680, 'stat')
    , pNode('n1985',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1055, -1800, 'stat')
    , pNode('n1986',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1211, -1850, 'stat')
    , pNode('n1987',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -1089, -1850, 'stat')
    , pNode('n1988',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -1211, -1630, 'stat')
    , pNode('n1989',
        {blue: 490}, {prestige: 38, luck: 38}, -1089, -1630, 'stat')
    , pNode('n1990',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1150, -1850, 'stat')
    , pNode('n1991',
        {blue: 575}, {prestige: 30, majesty: 250}, -1150, -1897, 'stat')
    , pNode('n1992',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1150, -1583, 'stat')
    , pNode('n1993', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        -1150, -1740,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n1994',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -690, -1680, 'stat')
    , pNode('n1995',
        {blue: 650}, {prestige: 56, valor: 56}, -638, -1770, 'stat')
    , pNode('n1996',
        {blue: 490}, {prestige: 38, str: 38}, -742, -1770, 'stat')
    , pNode('n1997',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -751, -1850, 'stat')
    , pNode('n1998',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -629, -1850, 'stat')
    , pNode('n1999',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -751, -1630, 'stat')
    , pNode('n2000',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -629, -1630, 'stat')
    , pNode('n2001',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -690, -1897, 'stat')
    , pNode('n2002',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -690, -1583, 'stat')
    , pNode('n2003',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -823, -1824, 'stat')
    , pNode('n2004',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -823, -1656, 'stat')
    , pNode('n2005',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -557, -1656, 'stat')
    , pNode('n2006',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -557, -1824, 'stat')
    , pNode('n2007',
        {blue: 575}, {prestige: 30, majesty: 250}, -825, -1740, 'stat')
    , pNode('n2008',
        {revelation: 300}, {prestige: 80, luck: 80}, -555, -1740, 'stat')
    , pNode('n2009', {blue: 350}, {}, -690, -1740, 'skill', 'Талант: Опека',
        'Длительность накладываемых на союзников щтов увеличена на 25%/50% от '+
        'вашей характеристики "Эффективность щитов".</p>'+
        '<p>Этот эффект не действует на щиты накладываемые на себя.',
        'guardianship')
    , pNode('n2010',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -230, -1680, 'stat')
    , pNode('n2011',
        {blue: 575}, {prestige: 30, majesty: 250}, -178, -1770, 'stat')
    , pNode('n2012',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -282, -1770, 'stat')
    , pNode('n2013',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -325, -1800, 'stat')
    , pNode('n2014',
        {blue: 490}, {prestige: 38, valor: 38}, -325, -1680, 'stat')
    , pNode('n2015',
        {blue: 490}, {prestige: 38, str: 38}, -135, -1680, 'stat')
    , pNode('n2016',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -135, -1800, 'stat')
    , pNode('n2017',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -230, -1850, 'stat')
    , pNode('n2018',
        {blue: 490}, {prestige: 38, valor: 38}, -230, -1630, 'stat')
    , pNode('n2019',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -230, -1897, 'stat')
    , pNode('n2020',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -230, -1583, 'stat')
    , pNode('n2021',
        {blue: 575}, {prestige: 30, majesty: 250}, -363, -1824, 'stat')
    , pNode('n2022',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -363, -1656, 'stat')
    , pNode('n2023',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -97, -1656, 'stat')
    , pNode('n2024',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -97, -1824, 'stat')
    , pNode('n2025', {blue: 350}, {}, -230, -1740, 'skill',
        'Талант: Эффективные препараты',
        'Длительность положтьельных эффектов от расходников, количество '+
        'восстанавливаемого ими здоровья, а также наносимый расходниками урон '+
        'увеличиваются на 12% за каждый уровень этого символа.',
        'medicines')
    , pNode('n2026',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, -1610, -2220, 'stat')
    , pNode('n2027',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, -1558, -2310, 'stat')
    , pNode('n2028',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -1662, -2310, 'stat')
    , pNode('n2029',
        {blue: 575}, {prestige: 30, majesty: 250}, -1705, -2340, 'stat')
    , pNode('n2030',
        {blue: 585}, {prestige: 38, str: 38}, -1705, -2220, 'stat')
    , pNode('n2031',
        {blue: 775}, {prestige: 56, spirit: 56}, -1515, -2220, 'stat')
    , pNode('n2032',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -1515, -2340, 'stat')
    , pNode('n2033',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -1671, -2390, 'stat')
    , pNode('n2034',
        {blue: 575}, {prestige: 30, majesty: 250}, -1549, -2390, 'stat')
    , pNode('n2035',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, -1671, -2170, 'stat')
    , pNode('n2036',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -1549, -2170, 'stat')
    , pNode('n2037',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -1610, -2390, 'stat')
    , pNode('n2038',
        {revelation: 300}, {prestige: 120, vit: 120}, -1610, -2170, 'stat')
    , pNode('n2039',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -1745, -2280, 'stat')
    , pNode('n2040',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, -1475, -2280, 'stat')
    , pNode('n2041', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        -1610, -2280,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n2042',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -1150, -2220, 'stat')
    , pNode('n2043',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -1098, -2310, 'stat')
    , pNode('n2044',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, -1202, -2310, 'stat')
    , pNode('n2045',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -1245, -2340, 'stat')
    , pNode('n2046',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -1245, -2220, 'stat')
    , pNode('n2047',
        {blue: 775}, {prestige: 56, spirit: 56}, -1055, -2220, 'stat')
    , pNode('n2048',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -1055, -2340, 'stat')
    , pNode('n2049',
        {blue: 575}, {prestige: 30, majesty: 250}, -1211, -2390, 'stat')
    , pNode('n2050',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, -1089, -2390, 'stat')
    , pNode('n2051',
        {blue: 585}, {prestige: 38, luck: 38}, -1211, -2170, 'stat')
    , pNode('n2052',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -1089, -2170, 'stat')
    , pNode('n2053',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -1150, -2390, 'stat')
    , pNode('n2054',
        {revelation: 300}, {prestige: 80, power: 80}, -1150, -2170, 'stat')
    , pNode('n2055',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, -1285, -2280, 'stat')
    , pNode('n2056',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, -1015, -2280, 'stat')
    , pNode('n2057', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, -1150, -2280,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n2058',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, -690, -2220, 'stat')
    , pNode('n2059',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -638, -2310, 'stat')
    , pNode('n2060',
        {blue: 585}, {prestige: 38, valor: 38}, -742, -2310, 'stat')
    , pNode('n2061',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -785, -2340, 'stat')
    , pNode('n2062',
        {blue: 585}, {prestige: 38, luck: 38}, -785, -2220, 'stat')
    , pNode('n2063',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, -595, -2220, 'stat')
    , pNode('n2064',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -595, -2340, 'stat')
    , pNode('n2065',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -751, -2390, 'stat')
    , pNode('n2066',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, -629, -2390, 'stat')
    , pNode('n2067',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -751, -2170, 'stat')
    , pNode('n2068',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -629, -2170, 'stat')
    , pNode('n2069',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -690, -2390, 'stat')
    , pNode('n2070',
        {revelation: 300}, {prestige: 80, luck: 80}, -690, -2170, 'stat')
    , pNode('n2071',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -825, -2280, 'stat')
    , pNode('n2072',
        {blue: 575}, {prestige: 30, majesty: 250}, -555, -2280, 'stat')
    , pNode('n2073', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        -690, -2280,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n2074',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -230, -2220, 'stat')
    , pNode('n2075',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -178, -2310, 'stat')
    , pNode('n2076',
        {blue: 585}, {prestige: 38, valor: 38}, -282, -2310, 'stat')
    , pNode('n2077',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -325, -2340, 'stat')
    , pNode('n2078',
        {blue: 585}, {prestige: 38, str: 38}, -325, -2220, 'stat')
    , pNode('n2079',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, -135, -2220, 'stat')
    , pNode('n2080',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -135, -2340, 'stat')
    , pNode('n2081',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -291, -2390, 'stat')
    , pNode('n2082',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -169, -2390, 'stat')
    , pNode('n2083',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, -291, -2170, 'stat')
    , pNode('n2084',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, -169, -2170, 'stat')
    , pNode('n2085',
        {blue: 775}, {prestige: 56, spirit: 56}, -230, -2390, 'stat')
    , pNode('n2086',
        {revelation: 300}, {prestige: 80, power: 80}, -230, -2170, 'stat')
    , pNode('n2087',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -365, -2280, 'stat')
    , pNode('n2088',
        {blue: 575}, {prestige: 30, majesty: 250}, -95, -2280, 'stat')
    , pNode('n2089', {blue: 4500}, {majesty: 2000}, -230, -2280, 'bigStat',
        'Бонус: Величие', '', 'majesty')
    , pNode('n2090',
        {blue: 775}, {prestige: 56, str: 56}, -2660, 710, 'stat')
    , pNode('n2091',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -2608, 620, 'stat')
    , pNode('n2092',
        {blue: 575}, {majesty: 250}, -2712, 620, 'stat')
    , pNode('n2093',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, -2721, 540, 'stat')
    , pNode('n2094',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, -2599, 540, 'stat')
    , pNode('n2095',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -2721, 760, 'stat')
    , pNode('n2096',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, -2599, 760, 'stat')
    , pNode('n2097',
        {blue: 775}, {prestige: 56, spirit: 56}, -2660, 493, 'stat')
    , pNode('n2098',
        {revelation: 300}, {prestige: 80, power: 80}, -2660, 807, 'stat')
    , pNode('n2099',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -2793, 566, 'stat')
    , pNode('n2100',
        {blue: 965}, {prestige: 75, spirit: 75}, -2793, 734, 'stat')
    , pNode('n2101',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -2527, 734, 'stat')
    , pNode('n2102',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -2527, 566, 'stat')
    , pNode('n2103',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -2795, 650, 'stat')
    , pNode('n2104',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -2525, 650, 'stat')
    , pNode('n2105', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        -2660, 650,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n2106',
        {blue: 650}, {prestige: 56, spirit: 56}, -2500, 1260, 'stat')
    , pNode('n2107',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -2448, 1170, 'stat')
    , pNode('n2108',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2552, 1170, 'stat')
    , pNode('n2109',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2595, 1140, 'stat')
    , pNode('n2110',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2595, 1260, 'stat')
    , pNode('n2111',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -2405, 1260, 'stat')
    , pNode('n2112',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2405, 1140, 'stat')
    , pNode('n2113',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -2500, 1090, 'stat')
    , pNode('n2114',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -2500, 1310, 'stat')
    , pNode('n2115',
        {blue: 575}, {prestige: 30, majesty: 250}, -2500, 1043, 'stat')
    , pNode('n2116',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -2500, 1357, 'stat')
    , pNode('n2117',
        {blue: 650}, {prestige: 56, str: 56}, -2633, 1116, 'stat')
    , pNode('n2118',
        {blue: 810}, {prestige: 75, spirit: 75}, -2633, 1284, 'stat')
    , pNode('n2119',
        {revelation: 300}, {prestige: 80, power: 80}, -2367, 1284, 'stat')
    , pNode('n2120',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -2367, 1116, 'stat')
    , pNode('n2121', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, -2500, 1200,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n2122',
        {blue: 575}, {prestige: 30, majesty: 250}, -2135, 1140, 'stat')
    , pNode('n2123',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2135, 1260, 'stat')
    , pNode('n2124',
        {blue: 650}, {prestige: 56, valor: 56}, -1945, 1260, 'stat')
    , pNode('n2125',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -1945, 1140, 'stat')
    , pNode('n2126',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2101, 1090, 'stat')
    , pNode('n2127',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1979, 1090, 'stat')
    , pNode('n2128',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -2101, 1310, 'stat')
    , pNode('n2129',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1979, 1310, 'stat')
    , pNode('n2130',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -2040, 1090, 'stat')
    , pNode('n2131',
        {blue: 810}, {prestige: 75, valor: 75}, -2040, 1310, 'stat')
    , pNode('n2132',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -2173, 1116, 'stat')
    , pNode('n2133',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -2173, 1284, 'stat')
    , pNode('n2134',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -1907, 1284, 'stat')
    , pNode('n2135',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -1907, 1116, 'stat')
    , pNode('n2136',
        {blue: 810}, {prestige: 75, valor: 75}, -2175, 1200, 'stat')
    , pNode('n2137',
        {revelation: 300}, {prestige: 120, vit: 120}, -1905, 1200, 'stat')
    , pNode('n2138', {blue: 4500}, {majesty: 2000}, -2040, 1200, 'bigStat',
        'Бонус: Величие', '', 'majesty')
    , pNode('n2139',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, -2070, 1800, 'stat')
    , pNode('n2140',
        {blue: 575}, {majesty: 250}, -2018, 1710, 'stat')
    , pNode('n2141',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -2122, 1710, 'stat')
    , pNode('n2142',
        {blue: 575}, {prestige: 30, majesty: 250}, -2165, 1680, 'stat')
    , pNode('n2143',
        {blue: 775}, {prestige: 56, luck: 56}, -2165, 1800, 'stat')
    , pNode('n2144',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -1975, 1800, 'stat')
    , pNode('n2145',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -1975, 1680, 'stat')
    , pNode('n2146',
        {blue: 965}, {prestige: 75, str: 75}, -2131, 1630, 'stat')
    , pNode('n2147',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, -2009, 1630, 'stat')
    , pNode('n2148',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -2131, 1850, 'stat')
    , pNode('n2149',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -2009, 1850, 'stat')
    , pNode('n2150',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -2070, 1630, 'stat')
    , pNode('n2151',
        {blue: 775}, {prestige: 56, str: 56}, -2070, 1850, 'stat')
    , pNode('n2152',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -2205, 1740, 'stat')
    , pNode('n2153',
        {revelation: 300}, {prestige: 120, vit: 120}, -1935, 1740, 'stat')
    , pNode('n2154', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, -2070, 1740,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n2155',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -1705, 2140, 'stat')
    , pNode('n2156',
        {blue: 585}, {prestige: 38, luck: 38}, -1705, 2260, 'stat')
    , pNode('n2157',
        {blue: 775}, {prestige: 56, valor: 56}, -1515, 2260, 'stat')
    , pNode('n2158',
        {blue: 585}, {prestige: 38, luck: 38}, -1515, 2140, 'stat')
    , pNode('n2159',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -1671, 2090, 'stat')
    , pNode('n2160',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, -1549, 2090, 'stat')
    , pNode('n2161',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, -1671, 2310, 'stat')
    , pNode('n2162',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -1549, 2310, 'stat')
    , pNode('n2163',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -1610, 2090, 'stat')
    , pNode('n2164',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -1610, 2310, 'stat')
    , pNode('n2165',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -1743, 2116, 'stat')
    , pNode('n2166',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, -1743, 2284, 'stat')
    , pNode('n2167',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, -1477, 2284, 'stat')
    , pNode('n2168',
        {blue: 575}, {prestige: 30, majesty: 250}, -1477, 2116, 'stat')
    , pNode('n2169',
        {blue: 575}, {prestige: 30, majesty: 250}, -1745, 2200, 'stat')
    , pNode('n2170',
        {revelation: 300}, {prestige: 80, spirit: 80}, -1475, 2200, 'stat')
    , pNode('n2171', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        -1610, 2200,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n2172',
        {blue: 775}, {prestige: 56, luck: 56}, -2070, 2260, 'stat')
    , pNode('n2173',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, -2018, 2170, 'stat')
    , pNode('n2174',
        {blue: 585}, {prestige: 38, str: 38}, -2122, 2170, 'stat')
    , pNode('n2175',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, -2165, 2140, 'stat')
    , pNode('n2176',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -2165, 2260, 'stat')
    , pNode('n2177',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, -1975, 2260, 'stat')
    , pNode('n2178',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -1975, 2140, 'stat')
    , pNode('n2179',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, -2131, 2090, 'stat')
    , pNode('n2180',
        {blue: 775}, {prestige: 56, luck: 56}, -2009, 2090, 'stat')
    , pNode('n2181',
        {blue: 575}, {prestige: 30, majesty: 250}, -2131, 2310, 'stat')
    , pNode('n2182',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, -2009, 2310, 'stat')
    , pNode('n2183',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, -2070, 2090, 'stat')
    , pNode('n2184',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, -2070, 2310, 'stat')
    , pNode('n2185',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, -2205, 2200, 'stat')
    , pNode('n2186',
        {revelation: 300}, {prestige: 120, vit: 120}, -1935, 2200, 'stat')
    , pNode('n2187', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, -2070, 2200,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n2188',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -500, 2260, 'stat')
    , pNode('n2189',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -448, 2170, 'stat')
    , pNode('n2190',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -552, 2170, 'stat')
    , pNode('n2191',
        {blue: 810}, {prestige: 75, luck: 75}, -595, 2140, 'stat')
    , pNode('n2192',
        {blue: 490}, {prestige: 38, luck: 38}, -595, 2260, 'stat')
    , pNode('n2193',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, -405, 2260, 'stat')
    , pNode('n2194',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -405, 2140, 'stat')
    , pNode('n2195',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -561, 2090, 'stat')
    , pNode('n2196',
        {blue: 650}, {prestige: 56, valor: 56}, -439, 2090, 'stat')
    , pNode('n2197',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -561, 2310, 'stat')
    , pNode('n2198',
        {blue: 575}, {prestige: 30, majesty: 250}, -439, 2310, 'stat')
    , pNode('n2199',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -500, 2090, 'stat')
    , pNode('n2200',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -500, 2310, 'stat')
    , pNode('n2201',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, -635, 2200, 'stat')
    , pNode('n2202',
        {revelation: 300}, {prestige: 80, power: 80}, -365, 2200, 'stat')
    , pNode('n2203', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        -500, 2200,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n2204',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -135, 2140, 'stat')
    , pNode('n2205',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -135, 2260, 'stat')
    , pNode('n2206',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 55, 2260, 'stat')
    , pNode('n2207',
        {blue: 650}, {prestige: 56, valor: 56}, 55, 2140, 'stat')
    , pNode('n2208',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, -101, 2090, 'stat')
    , pNode('n2209',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 21, 2090, 'stat')
    , pNode('n2210',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, -101, 2310, 'stat')
    , pNode('n2211',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 21, 2310, 'stat')
    , pNode('n2212',
        {blue: 575}, {prestige: 30, majesty: 250}, -40, 2090, 'stat')
    , pNode('n2213',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, -40, 2310, 'stat')
    , pNode('n2214',
        {blue: 650}, {prestige: 56, valor: 56}, -173, 2116, 'stat')
    , pNode('n2215',
        {blue: 650}, {prestige: 56, luck: 56}, -173, 2284, 'stat')
    , pNode('n2216',
        {blue: 575}, {prestige: 30, majesty: 250}, 93, 2284, 'stat')
    , pNode('n2217',
        {revelation: 300}, {prestige: 120, vit: 120}, 93, 2116, 'stat')
    , pNode('n2218',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, -175, 2200, 'stat')
    , pNode('n2219',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 95, 2200, 'stat')
    , pNode('n2220', {blue: 4500}, {majesty: 2000}, -40, 2200, 'bigStat',
        'Бонус: Величие', '', 'majesty')
    , pNode('n2221',
        {green: 150}, {prestige: 18, vit: 18}, 1060, 1040, 'stat')
    , pNode('n2222',
        {green: 185}, {prestige: 24, vit: 24}, 1112, 950, 'stat')
    , pNode('n2223',
        {green: 185}, {prestige: 24, vit: 24}, 1008, 950, 'stat')
    , pNode('n2224',
        {red: 150}, {prestige: 12, power: 12}, 999, 870, 'stat')
    , pNode('n2225',
        {blue: 185}, {prestige: 20, spirit: 20}, 1121, 870, 'stat')
    , pNode('n2226',
        {blue: 185}, {prestige: 20, str: 20}, 999, 1090, 'stat')
    , pNode('n2227',
        {blue: 185}, {prestige: 20, luck: 20}, 1121, 1090, 'stat')
    , pNode('n2228',
        {blue: 150}, {prestige: 15, spirit: 15}, 1060, 823, 'stat')
    , pNode('n2229',
        {blue: 150}, {prestige: 15, luck: 15}, 1060, 1137, 'stat')
    , pNode('n2230',
        {green: 150}, {prestige: 18, vit: 18}, 927, 896, 'stat')
    , pNode('n2231',
        {blue: 150}, {prestige: 15, str: 15}, 927, 1064, 'stat')
    , pNode('n2232',
        {blue: 150}, {prestige: 15, valor: 15}, 1193, 1064, 'stat')
    , pNode('n2233',
        {red: 150}, {prestige: 12, power: 12}, 1193, 896, 'stat')
    , pNode('n2234',
        {red: 150}, {prestige: 12, power: 12}, 925, 980, 'stat')
    , pNode('n2235',
        {blue: 150}, {prestige: 15, valor: 15}, 1195, 980, 'stat')
    , pNode('n2236', {blue: 200}, {}, 1060, 980, 'skill',
        'Талант: Тактическая защита',
        'Защита в ближнем бою увеличена на 5% за каждый уровень этого '+
        'символа.</p>'+
        '<p>Защита в дальнем бою увеличена на 5% за каждый уровень этого '+
        'символа.',
        'defence')
    , pNode('n2237',
        {blue: 150}, {prestige: 15, valor: 15}, 1060, -920, 'stat')
    , pNode('n2238',
        {green: 185}, {prestige: 24, vit: 24}, 1112, -1010, 'stat')
    , pNode('n2239',
        {green: 185}, {prestige: 24, vit: 24}, 1008, -1010, 'stat')
    , pNode('n2240',
        {red: 150}, {prestige: 12, power: 12}, 999, -1090, 'stat')
    , pNode('n2241',
        {blue: 185}, {prestige: 20, spirit: 20}, 1121, -1090, 'stat')
    , pNode('n2242',
        {blue: 185}, {prestige: 20, str: 20}, 999, -870, 'stat')
    , pNode('n2243',
        {red: 150}, {prestige: 12, power: 12}, 1121, -870, 'stat')
    , pNode('n2244',
        {blue: 150}, {prestige: 15, spirit: 15}, 1060, -1137, 'stat')
    , pNode('n2245',
        {blue: 150}, {prestige: 15, valor: 15}, 1060, -823, 'stat')
    , pNode('n2246',
        {green: 150}, {prestige: 18, vit: 18}, 927, -1064, 'stat')
    , pNode('n2247',
        {blue: 150}, {prestige: 15, str: 15}, 927, -896, 'stat')
    , pNode('n2248',
        {green: 150}, {prestige: 18, vit: 18}, 1193, -896, 'stat')
    , pNode('n2249',
        {blue: 185}, {prestige: 20, luck: 20}, 1193, -1064, 'stat')
    , pNode('n2250',
        {red: 150}, {prestige: 12, power: 12}, 925, -980, 'stat')
    , pNode('n2251',
        {blue: 150}, {prestige: 15, luck: 15}, 1195, -980, 'stat')
    , pNode('n2252', {blue: 200}, {}, 1060, -980, 'skill',
        'Талант: Тактическая защита',
        'Защита в ближнем бою увеличена на 5% за каждый уровень этого '+
        'символа.</p>'+
        '<p>Защита в дальнем бою увеличена на 5% за каждый уровень этого '+
        'символа.',
        'defence')
    , pNode('n2253',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2660, 510, 'stat')
    , pNode('n2254',
        {blue: 490}, {prestige: 38, str: 38}, 2712, 420, 'stat')
    , pNode('n2255',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2608, 420, 'stat')
    , pNode('n2256',
        {blue: 575}, {prestige: 30, majesty: 250}, 2565, 390, 'stat')
    , pNode('n2257',
        {blue: 490}, {prestige: 38, spirit: 38}, 2565, 510, 'stat')
    , pNode('n2258',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 2755, 510, 'stat')
    , pNode('n2259',
        {blue: 650}, {prestige: 56, spirit: 56}, 2755, 390, 'stat')
    , pNode('n2260',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2599, 340, 'stat')
    , pNode('n2261',
        {revelation: 300}, {prestige: 120, vit: 120}, 2721, 340, 'stat')
    , pNode('n2262',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2599, 560, 'stat')
    , pNode('n2263',
        {blue: 490}, {prestige: 38, luck: 38}, 2721, 560, 'stat')
    , pNode('n2264',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 2660, 340, 'stat')
    , pNode('n2265',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 2660, 560, 'stat')
    , pNode('n2266',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2525, 450, 'stat')
    , pNode('n2267',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2795, 450, 'stat')
    , pNode('n2268', {blue: 350}, {prestige: 40}, 2660, 450, 'skill',
        'Талант: Эффективные препараты',
        'Длительность положтьельных эффектов от расходников, количество '+
        'восстанавливаемого ими здоровья, а также наносимый расходниками урон '+
        'увеличиваются на 12% за каждый уровень этого символа.',
        'medicines')
    , pNode('n2269',
        {blue: 575}, {prestige: 30, majesty: 250}, 2660, -390, 'stat')
    , pNode('n2270',
        {blue: 650}, {prestige: 56, luck: 56}, 2712, -480, 'stat')
    , pNode('n2271',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2608, -480, 'stat')
    , pNode('n2272',
        {blue: 490}, {prestige: 38, valor: 38}, 2565, -510, 'stat')
    , pNode('n2273',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 2565, -390, 'stat')
    , pNode('n2274',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2755, -390, 'stat')
    , pNode('n2275',
        {blue: 490}, {prestige: 38, spirit: 38}, 2755, -510, 'stat')
    , pNode('n2276',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2599, -560, 'stat')
    , pNode('n2277',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 2721, -560, 'stat')
    , pNode('n2278',
        {revelation: 300}, {prestige: 80, power: 80}, 2599, -340, 'stat')
    , pNode('n2279',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 2721, -340, 'stat')
    , pNode('n2280',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 2660, -560, 'stat')
    , pNode('n2281',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 2660, -340, 'stat')
    , pNode('n2282',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2525, -450, 'stat')
    , pNode('n2283',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 2795, -450, 'stat')
    , pNode('n2284', {blue: 350}, {prestige: 40}, 2660, -450, 'skill',
        'Талант: Дополнительный рывок',
        'Количество зарядов рывка увеличено на 1 за каждый уровень этого '+
        'символа.',
        'dash')
    , pNode('n2285',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3900, -2140, 'stat')
    , pNode('n2286',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3952, -2230, 'stat')
    , pNode('n2287',
        {blue: 650}, {prestige: 56, luck: 56}, 3848, -2230, 'stat')
    , pNode('n2288',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3805, -2260, 'stat')
    , pNode('n2289',
        {blue: 650}, {prestige: 56, str: 56}, 3805, -2140, 'stat')
    , pNode('n2290',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3995, -2140, 'stat')
    , pNode('n2291',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3995, -2260, 'stat')
    , pNode('n2292',
        {blue: 810}, {prestige: 75, valor: 75}, 3839, -2310, 'stat')
    , pNode('n2293',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3961, -2310, 'stat')
    , pNode('n2294',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 3839, -2090, 'stat')
    , pNode('n2295',
        {blue: 575}, {prestige: 30, majesty: 250}, 3961, -2090, 'stat')
    , pNode('n2296',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3900, -2310, 'stat')
    , pNode('n2297',
        {blue: 575}, {prestige: 30, majesty: 250}, 3900, -2357, 'stat')
    , pNode('n2298',
        {revelation: 300}, {prestige: 80, power: 80}, 3900, -2043, 'stat')
    , pNode('n2299', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        3900, -2200,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n2300',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3500, -2140, 'stat')
    , pNode('n2301',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 3552, -2230, 'stat')
    , pNode('n2302',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3448, -2230, 'stat')
    , pNode('n2303',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3405, -2260, 'stat')
    , pNode('n2304',
        {blue: 490}, {prestige: 38, valor: 38}, 3405, -2140, 'stat')
    , pNode('n2305',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3595, -2140, 'stat')
    , pNode('n2306',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3595, -2260, 'stat')
    , pNode('n2307',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3500, -2310, 'stat')
    , pNode('n2308',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3500, -2090, 'stat')
    , pNode('n2309',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 3500, -2357, 'stat')
    , pNode('n2310',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3500, -2043, 'stat')
    , pNode('n2311',
        {blue: 650}, {prestige: 56, str: 56}, 3367, -2284, 'stat')
    , pNode('n2312',
        {blue: 575}, {prestige: 30, majesty: 250}, 3367, -2116, 'stat')
    , pNode('n2313',
        {revelation: 300}, {prestige: 80, power: 80}, 3633, -2116, 'stat')
    , pNode('n2314',
        {blue: 575}, {prestige: 30, majesty: 250}, 3633, -2284, 'stat')
    , pNode('n2315', {}, {}, 3500, -2200, 'skill', 'Вершина равновесия',
            'Может быть усилена с помощью эфирных ядер.', 'balance')
    , pNode('n2316',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 3040, -2140, 'stat')
    , pNode('n2317',
        {blue: 965}, {prestige: 75, spirit: 75}, 3092, -2230, 'stat')
    , pNode('n2318',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 2988, -2230, 'stat')
    , pNode('n2319',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 2945, -2260, 'stat')
    , pNode('n2320',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 2945, -2140, 'stat')
    , pNode('n2321',
        {blue: 585}, {prestige: 38, spirit: 38}, 3135, -2140, 'stat')
    , pNode('n2322',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, 3135, -2260, 'stat')
    , pNode('n2323',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 2979, -2310, 'stat')
    , pNode('n2324',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 3101, -2310, 'stat')
    , pNode('n2325',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, 2979, -2090, 'stat')
    , pNode('n2326',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, 3101, -2090, 'stat')
    , pNode('n2327',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 3040, -2310, 'stat')
    , pNode('n2328',
        {blue: 575}, {prestige: 30, majesty: 250}, 3040, -2090, 'stat')
    , pNode('n2329',
        {blue: 575}, {prestige: 30, majesty: 250}, 2905, -2200, 'stat')
    , pNode('n2330',
        {revelation: 300}, {prestige: 80, power: 80}, 3175, -2200, 'stat')
    , pNode('n2331', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, 3040, -2200,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n2332',
        {blue: 810}, {prestige: 75, str: 75}, 4420, -1680, 'stat')
    , pNode('n2333',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4472, -1770, 'stat')
    , pNode('n2334',
        {blue: 650}, {prestige: 56, luck: 56}, 4368, -1770, 'stat')
    , pNode('n2335',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4325, -1800, 'stat')
    , pNode('n2336',
        {blue: 490}, {prestige: 38, valor: 38}, 4325, -1680, 'stat')
    , pNode('n2337',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4515, -1680, 'stat')
    , pNode('n2338',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4515, -1800, 'stat')
    , pNode('n2339',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4420, -1850, 'stat')
    , pNode('n2340',
        {green: 490}, {prestige: 50, vit: 50, dex: 10}, 4420, -1630, 'stat')
    , pNode('n2341',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4420, -1897, 'stat')
    , pNode('n2342',
        {blue: 575}, {prestige: 30, majesty: 250}, 4420, -1583, 'stat')
    , pNode('n2343',
        {blue: 575}, {prestige: 30, majesty: 250}, 4287, -1824, 'stat')
    , pNode('n2344',
        {revelation: 300}, {prestige: 80, power: 80}, 4287, -1656, 'stat')
    , pNode('n2345',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4553, -1656, 'stat')
    , pNode('n2346',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4553, -1824, 'stat')
    , pNode('n2347', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, 4420, -1740,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n2348',
        {blue: 490}, {prestige: 38, valor: 38}, 4880, -1680, 'stat')
    , pNode('n2349',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4932, -1770, 'stat')
    , pNode('n2350',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4828, -1770, 'stat')
    , pNode('n2351',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4819, -1850, 'stat')
    , pNode('n2352',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4941, -1850, 'stat')
    , pNode('n2353',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4819, -1630, 'stat')
    , pNode('n2354',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4941, -1630, 'stat')
    , pNode('n2355',
        {red: 810}, {prestige: 50, power: 50, dex: 30}, 4880, -1897, 'stat')
    , pNode('n2356',
        {revelation: 300}, {prestige: 80, power: 80}, 4880, -1583, 'stat')
    , pNode('n2357',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4747, -1824, 'stat')
    , pNode('n2358',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4747, -1656, 'stat')
    , pNode('n2359',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 5013, -1656, 'stat')
    , pNode('n2360',
        {blue: 650}, {prestige: 56, luck: 56}, 5013, -1824, 'stat')
    , pNode('n2361',
        {blue: 810}, {prestige: 75, spirit: 75}, 4745, -1740, 'stat')
    , pNode('n2362',
        {blue: 575}, {prestige: 30, majesty: 250}, 5015, -1740, 'stat')
    , pNode('n2363', {blue: 4500}, {majesty: 2000}, 4880, -1740, 'bigStat',
        'Бонус: Величие', '', 'majesty')
    , pNode('n2364',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 4785, -2260, 'stat')
    , pNode('n2365',
        {blue: 585}, {prestige: 38, str: 38}, 4785, -2140, 'stat')
    , pNode('n2366',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 4975, -2140, 'stat')
    , pNode('n2367',
        {blue: 775}, {prestige: 56, valor: 56}, 4975, -2260, 'stat')
    , pNode('n2368',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 4819, -2310, 'stat')
    , pNode('n2369',
        {blue: 575}, {prestige: 30, majesty: 250}, 4941, -2310, 'stat')
    , pNode('n2370',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, 4819, -2090, 'stat')
    , pNode('n2371',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 4941, -2090, 'stat')
    , pNode('n2372',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 4880, -2310, 'stat')
    , pNode('n2373',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, 4880, -2090, 'stat')
    , pNode('n2374',
        {blue: 965}, {prestige: 75, valor: 75}, 4747, -2284, 'stat')
    , pNode('n2375',
        {blue: 575}, {prestige: 30, majesty: 250}, 4747, -2116, 'stat')
    , pNode('n2376',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, 5013, -2116, 'stat')
    , pNode('n2377',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 5013, -2284, 'stat')
    , pNode('n2378',
        {revelation: 300}, {prestige: 80, power: 80}, 4745, -2200, 'stat')
    , pNode('n2379',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 5015, -2200, 'stat')
    , pNode('n2380', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        4880, -2200,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n2381',
        {blue: 650}, {prestige: 56, str: 56}, 4420, -2140, 'stat')
    , pNode('n2382',
        {blue: 650}, {prestige: 56, luck: 56}, 4472, -2230, 'stat')
    , pNode('n2383',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4368, -2230, 'stat')
    , pNode('n2384',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4359, -2310, 'stat')
    , pNode('n2385',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4481, -2310, 'stat')
    , pNode('n2386',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4359, -2090, 'stat')
    , pNode('n2387',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4481, -2090, 'stat')
    , pNode('n2388',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4420, -2357, 'stat')
    , pNode('n2389',
        {blue: 575}, {prestige: 30, majesty: 250}, 4420, -2043, 'stat')
    , pNode('n2390',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4287, -2284, 'stat')
    , pNode('n2391',
        {revelation: 300}, {prestige: 80, power: 80}, 4287, -2116, 'stat')
    , pNode('n2392',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4553, -2116, 'stat')
    , pNode('n2393',
        {blue: 650}, {prestige: 56, valor: 56}, 4553, -2284, 'stat')
    , pNode('n2394',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4285, -2200, 'stat')
    , pNode('n2395',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4555, -2200, 'stat')
    , pNode('n2396', {blue: 4500}, {majesty: 2000}, 4420, -2200, 'bigStat',
        'Бонус: Величие', '', 'majesty')
    , pNode('n2397',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, 5340, -1210, 'stat')
    , pNode('n2398',
        {blue: 775}, {prestige: 56, luck: 56}, 5392, -1300, 'stat')
    , pNode('n2399',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, 5288, -1300, 'stat')
    , pNode('n2400',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, 5245, -1330, 'stat')
    , pNode('n2401',
        {revelation: 300}, {prestige: 80, power: 80}, 5245, -1210, 'stat')
    , pNode('n2402',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 5435, -1210, 'stat')
    , pNode('n2403',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 5435, -1330, 'stat')
    , pNode('n2404',
        {blue: 585}, {prestige: 38, valor: 38}, 5279, -1380, 'stat')
    , pNode('n2405',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, 5401, -1380, 'stat')
    , pNode('n2406',
        {blue: 775}, {prestige: 56, luck: 56}, 5279, -1160, 'stat')
    , pNode('n2407',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, 5401, -1160, 'stat')
    , pNode('n2408',
        {blue: 575}, {prestige: 30, majesty: 250}, 5340, -1380, 'stat')
    , pNode('n2409',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 5340, -1427, 'stat')
    , pNode('n2410',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, 5340, -1113, 'stat')
    , pNode('n2411', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        5340, -1270,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n2412',
        {blue: 585}, {prestige: 38, valor: 38}, 5340, -1680, 'stat')
    , pNode('n2413',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 5392, -1770, 'stat')
    , pNode('n2414',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 5288, -1770, 'stat')
    , pNode('n2415',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, 5245, -1800, 'stat')
    , pNode('n2416',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, 5245, -1680, 'stat')
    , pNode('n2417',
        {blue: 575}, {prestige: 30, majesty: 250}, 5435, -1680, 'stat')
    , pNode('n2418',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, 5435, -1800, 'stat')
    , pNode('n2419',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 5279, -1850, 'stat')
    , pNode('n2420',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 5401, -1850, 'stat')
    , pNode('n2421',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, 5279, -1630, 'stat')
    , pNode('n2422',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 5401, -1630, 'stat')
    , pNode('n2423',
        {blue: 775}, {prestige: 56, valor: 56}, 5340, -1850, 'stat')
    , pNode('n2424',
        {revelation: 300}, {prestige: 120, vit: 120}, 5340, -1630, 'stat')
    , pNode('n2425',
        {blue: 575}, {prestige: 30, majesty: 250}, 5205, -1740, 'stat')
    , pNode('n2426',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, 5475, -1740, 'stat')
    , pNode('n2427', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, 5340, -1740,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n2428',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3500, 2260, 'stat')
    , pNode('n2429',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3552, 2170, 'stat')
    , pNode('n2430',
        {blue: 490}, {prestige: 38, spirit: 38}, 3448, 2170, 'stat')
    , pNode('n2431',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3405, 2140, 'stat')
    , pNode('n2432',
        {blue: 490}, {prestige: 38, valor: 38}, 3405, 2260, 'stat')
    , pNode('n2433',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3595, 2260, 'stat')
    , pNode('n2434',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3595, 2140, 'stat')
    , pNode('n2435',
        {blue: 575}, {prestige: 30, majesty: 250}, 3500, 2090, 'stat')
    , pNode('n2436',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3500, 2310, 'stat')
    , pNode('n2437',
        {revelation: 300}, {prestige: 80, power: 80}, 3500, 2043, 'stat')
    , pNode('n2438',
        {blue: 650}, {prestige: 56, valor: 56}, 3500, 2357, 'stat')
    , pNode('n2439',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 3367, 2116, 'stat')
    , pNode('n2440',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3367, 2284, 'stat')
    , pNode('n2441',
        {blue: 575}, {prestige: 30, majesty: 250}, 3633, 2284, 'stat')
    , pNode('n2442',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3633, 2116, 'stat')
    , pNode('n2443', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, 3500, 2200,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n2444',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3040, 2260, 'stat')
    , pNode('n2445',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3092, 2170, 'stat')
    , pNode('n2446',
        {blue: 650}, {prestige: 56, luck: 56}, 2988, 2170, 'stat')
    , pNode('n2447',
        {blue: 650}, {prestige: 56, valor: 56}, 2945, 2140, 'stat')
    , pNode('n2448',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 2945, 2260, 'stat')
    , pNode('n2449',
        {revelation: 300}, {prestige: 80, power: 80}, 3135, 2260, 'stat')
    , pNode('n2450',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3135, 2140, 'stat')
    , pNode('n2451',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 2979, 2090, 'stat')
    , pNode('n2452',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3101, 2090, 'stat')
    , pNode('n2453',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 2979, 2310, 'stat')
    , pNode('n2454',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3101, 2310, 'stat')
    , pNode('n2455',
        {blue: 575}, {prestige: 30, majesty: 250}, 3040, 2090, 'stat')
    , pNode('n2456',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 3040, 2310, 'stat')
    , pNode('n2457',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 2905, 2200, 'stat')
    , pNode('n2458',
        {blue: 650}, {prestige: 56, luck: 56}, 3175, 2200, 'stat')
    , pNode('n2459', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, 3040, 2200,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n2460',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3500, 2720, 'stat')
    , pNode('n2461',
        {blue: 575}, {prestige: 30, majesty: 250}, 3552, 2630, 'stat')
    , pNode('n2462',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3448, 2630, 'stat')
    , pNode('n2463',
        {blue: 650}, {prestige: 56, str: 56}, 3405, 2600, 'stat')
    , pNode('n2464',
        {blue: 810}, {prestige: 75, valor: 75}, 3405, 2720, 'stat')
    , pNode('n2465',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3595, 2720, 'stat')
    , pNode('n2466',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3595, 2600, 'stat')
    , pNode('n2467',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 3439, 2550, 'stat')
    , pNode('n2468',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3561, 2550, 'stat')
    , pNode('n2469',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3439, 2770, 'stat')
    , pNode('n2470',
        {blue: 650}, {prestige: 56, luck: 56}, 3561, 2770, 'stat')
    , pNode('n2471',
        {revelation: 300}, {prestige: 80, power: 80}, 3500, 2550, 'stat')
    , pNode('n2472',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3500, 2770, 'stat')
    , pNode('n2473',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3365, 2660, 'stat')
    , pNode('n2474',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3635, 2660, 'stat')
    , pNode('n2475', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        3500, 2660,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n2476',
        {blue: 490}, {prestige: 38, str: 38}, 3960, 1800, 'stat')
    , pNode('n2477',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4012, 1710, 'stat')
    , pNode('n2478',
        {blue: 650}, {prestige: 56, luck: 56}, 3908, 1710, 'stat')
    , pNode('n2479',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 3865, 1680, 'stat')
    , pNode('n2480',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 3865, 1800, 'stat')
    , pNode('n2481',
        {blue: 650}, {prestige: 56, spirit: 56}, 4055, 1800, 'stat')
    , pNode('n2482',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4055, 1680, 'stat')
    , pNode('n2483',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 3899, 1630, 'stat')
    , pNode('n2484',
        {revelation: 300}, {prestige: 80, power: 80, dex: 24}, 4021, 1630, 'stat')
    , pNode('n2485',
        {blue: 575}, {prestige: 30, majesty: 250}, 3899, 1850, 'stat')
    , pNode('n2486',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4021, 1850, 'stat')
    , pNode('n2487',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3960, 1630, 'stat')
    , pNode('n2488',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3960, 1583, 'stat')
    , pNode('n2489',
        {blue: 575}, {prestige: 30, majesty: 250}, 3960, 1897, 'stat')
    , pNode('n2490', {blue: 4500}, {majesty: 2000}, 3960, 1740, 'bigStat',
        'Бонус: Величие', '', 'majesty')
    , pNode('n2491',
        {blue: 490}, {prestige: 38, spirit: 38}, 3960, 2260, 'stat')
    , pNode('n2492',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4012, 2170, 'stat')
    , pNode('n2493',
        {blue: 490}, {prestige: 38, spirit: 38}, 3908, 2170, 'stat')
    , pNode('n2494',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 3865, 2140, 'stat')
    , pNode('n2495',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3865, 2260, 'stat')
    , pNode('n2496',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4055, 2260, 'stat')
    , pNode('n2497',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4055, 2140, 'stat')
    , pNode('n2498',
        {blue: 490}, {prestige: 38, luck: 38}, 3899, 2090, 'stat')
    , pNode('n2499',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4021, 2090, 'stat')
    , pNode('n2500',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 3899, 2310, 'stat')
    , pNode('n2501',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4021, 2310, 'stat')
    , pNode('n2502',
        {revelation: 300}, {prestige: 120, vit: 120}, 3960, 2090, 'stat')
    , pNode('n2503',
        {blue: 575}, {prestige: 30, majesty: 250}, 3960, 2310, 'stat')
    , pNode('n2504',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 3825, 2200, 'stat')
    , pNode('n2505',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4095, 2200, 'stat')
    , pNode('n2506', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, 3960, 2200,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n2507',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4420, 1800, 'stat')
    , pNode('n2508',
        {blue: 490}, {prestige: 38, valor: 38}, 4472, 1710, 'stat')
    , pNode('n2509',
        {blue: 810}, {prestige: 75, spirit: 75}, 4368, 1710, 'stat')
    , pNode('n2510',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4359, 1630, 'stat')
    , pNode('n2511',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4481, 1630, 'stat')
    , pNode('n2512',
        {blue: 575}, {prestige: 30, majesty: 250}, 4359, 1850, 'stat')
    , pNode('n2513',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4481, 1850, 'stat')
    , pNode('n2514',
        {blue: 650}, {prestige: 56, luck: 56}, 4420, 1583, 'stat')
    , pNode('n2515',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4420, 1897, 'stat')
    , pNode('n2516',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4287, 1656, 'stat')
    , pNode('n2517',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4287, 1824, 'stat')
    , pNode('n2518',
        {blue: 575}, {prestige: 30, majesty: 250}, 4553, 1824, 'stat')
    , pNode('n2519',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4553, 1656, 'stat')
    , pNode('n2520',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4285, 1740, 'stat')
    , pNode('n2521',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4555, 1740, 'stat')
    , pNode('n2522', {}, {}, 4420, 1740, 'skill', 'Вершина созидания',
            'Может быть усилена с помощью эфирных ядер.', 'create')
    , pNode('n2523',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 4420, 2260, 'stat')
    , pNode('n2524',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 4472, 2170, 'stat')
    , pNode('n2525',
        {blue: 575}, {prestige: 30, majesty: 250}, 4368, 2170, 'stat')
    , pNode('n2526',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 4325, 2140, 'stat')
    , pNode('n2527',
        {blue: 775}, {prestige: 56, spirit: 56}, 4325, 2260, 'stat')
    , pNode('n2528',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, 4515, 2260, 'stat')
    , pNode('n2529',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 4515, 2140, 'stat')
    , pNode('n2530',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 4359, 2090, 'stat')
    , pNode('n2531',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, 4481, 2090, 'stat')
    , pNode('n2532',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 4359, 2310, 'stat')
    , pNode('n2533',
        {blue: 965}, {prestige: 75, spirit: 75}, 4481, 2310, 'stat')
    , pNode('n2534',
        {revelation: 300}, {prestige: 80, power: 80}, 4420, 2090, 'stat')
    , pNode('n2535',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 4420, 2310, 'stat')
    , pNode('n2536',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 4285, 2200, 'stat')
    , pNode('n2537',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, 4555, 2200, 'stat')
    , pNode('n2538', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        4420, 2200,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n2539',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4785, 1680, 'stat')
    , pNode('n2540',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4785, 1800, 'stat')
    , pNode('n2541',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4975, 1800, 'stat')
    , pNode('n2542',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4975, 1680, 'stat')
    , pNode('n2543',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4819, 1630, 'stat')
    , pNode('n2544',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4941, 1630, 'stat')
    , pNode('n2545',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4819, 1850, 'stat')
    , pNode('n2546',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4941, 1850, 'stat')
    , pNode('n2547',
        {blue: 650}, {prestige: 56, spirit: 56}, 4880, 1630, 'stat')
    , pNode('n2548',
        {blue: 575}, {prestige: 30, majesty: 250}, 4880, 1850, 'stat')
    , pNode('n2549',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4747, 1656, 'stat')
    , pNode('n2550',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4747, 1824, 'stat')
    , pNode('n2551',
        {blue: 650}, {prestige: 56, str: 56}, 5013, 1824, 'stat')
    , pNode('n2552',
        {blue: 810}, {prestige: 75, valor: 75}, 5013, 1656, 'stat')
    , pNode('n2553',
        {revelation: 300}, {prestige: 80, power: 80}, 4745, 1740, 'stat')
    , pNode('n2554',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 5015, 1740, 'stat')
    , pNode('n2555', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        4880, 1740,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n2556',
        {blue: 575}, {prestige: 30, majesty: 250}, 4880, 2260, 'stat')
    , pNode('n2557',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 4932, 2170, 'stat')
    , pNode('n2558',
        {blue: 585}, {prestige: 38, luck: 38}, 4828, 2170, 'stat')
    , pNode('n2559',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, 4785, 2140, 'stat')
    , pNode('n2560',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 4785, 2260, 'stat')
    , pNode('n2561',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 4975, 2260, 'stat')
    , pNode('n2562',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 4975, 2140, 'stat')
    , pNode('n2563',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 4819, 2090, 'stat')
    , pNode('n2564',
        {blue: 575}, {prestige: 30, majesty: 250}, 4941, 2090, 'stat')
    , pNode('n2565',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, 4819, 2310, 'stat')
    , pNode('n2566',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 4941, 2310, 'stat')
    , pNode('n2567',
        {revelation: 300}, {prestige: 120, vit: 120}, 4880, 2090, 'stat')
    , pNode('n2568',
        {blue: 585}, {prestige: 38, valor: 38}, 4880, 2310, 'stat')
    , pNode('n2569',
        {blue: 965}, {prestige: 75, str: 75}, 4745, 2200, 'stat')
    , pNode('n2570',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 5015, 2200, 'stat')
    , pNode('n2571', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, 4880, 2200,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n2572',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4420, 1330, 'stat')
    , pNode('n2573',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4472, 1240, 'stat')
    , pNode('n2574',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4368, 1240, 'stat')
    , pNode('n2575',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4325, 1210, 'stat')
    , pNode('n2576',
        {blue: 650}, {prestige: 56, str: 56}, 4325, 1330, 'stat')
    , pNode('n2577',
        {blue: 490}, {prestige: 38, valor: 38}, 4515, 1330, 'stat')
    , pNode('n2578',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4515, 1210, 'stat')
    , pNode('n2579',
        {blue: 650}, {prestige: 56, valor: 56}, 4420, 1160, 'stat')
    , pNode('n2580',
        {green: 490}, {prestige: 50, vit: 50, dex: 18}, 4420, 1380, 'stat')
    , pNode('n2581',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4420, 1113, 'stat')
    , pNode('n2582',
        {revelation: 300}, {prestige: 80, power: 80}, 4420, 1427, 'stat')
    , pNode('n2583',
        {blue: 575}, {prestige: 30, majesty: 250}, 4287, 1186, 'stat')
    , pNode('n2584',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4287, 1354, 'stat')
    , pNode('n2585',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4553, 1354, 'stat')
    , pNode('n2586',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4553, 1186, 'stat')
    , pNode('n2587', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, 4420, 1270,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n2588',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 4785, 1210, 'stat')
    , pNode('n2589',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4785, 1330, 'stat')
    , pNode('n2590',
        {blue: 490}, {prestige: 38, str: 38}, 4975, 1330, 'stat')
    , pNode('n2591',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4975, 1210, 'stat')
    , pNode('n2592',
        {red: 810}, {prestige: 53, power: 53, dex: 30}, 4819, 1160, 'stat')
    , pNode('n2593',
        {blue: 650}, {prestige: 56, spirit: 56}, 4941, 1160, 'stat')
    , pNode('n2594',
        {blue: 650}, {prestige: 56, luck: 56}, 4819, 1380, 'stat')
    , pNode('n2595',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4941, 1380, 'stat')
    , pNode('n2596',
        {green: 810}, {prestige: 100, vit: 100, dex: 30}, 4880, 1160, 'stat')
    , pNode('n2597',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 4880, 1380, 'stat')
    , pNode('n2598',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 4747, 1186, 'stat')
    , pNode('n2599',
        {blue: 575}, {prestige: 30, majesty: 250}, 4747, 1354, 'stat')
    , pNode('n2600',
        {blue: 575}, {prestige: 30, majesty: 250}, 5013, 1354, 'stat')
    , pNode('n2601',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 5013, 1186, 'stat')
    , pNode('n2602',
        {revelation: 300}, {prestige: 120, vit: 120}, 4745, 1270, 'stat')
    , pNode('n2603',
        {red: 490}, {prestige: 27, power: 27, dex: 18}, 5015, 1270, 'stat')
    , pNode('n2604', {blue: 4500}, {majesty: 2000}, 4880, 1270, 'bigStat',
        'Бонус: Величие', '', 'majesty')
    , pNode('n2605',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 5340, 1330, 'stat')
    , pNode('n2606',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, 5392, 1240, 'stat')
    , pNode('n2607',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, 5288, 1240, 'stat')
    , pNode('n2608',
        {revelation: 300}, {prestige: 80, power: 80}, 5245, 1210, 'stat')
    , pNode('n2609',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, 5245, 1330, 'stat')
    , pNode('n2610',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 5435, 1330, 'stat')
    , pNode('n2611',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, 5435, 1210, 'stat')
    , pNode('n2612',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 5279, 1160, 'stat')
    , pNode('n2613',
        {blue: 775}, {prestige: 56, spirit: 56}, 5401, 1160, 'stat')
    , pNode('n2614',
        {blue: 575}, {prestige: 30, majesty: 250}, 5279, 1380, 'stat')
    , pNode('n2615',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 5401, 1380, 'stat')
    , pNode('n2616',
        {blue: 775}, {prestige: 56, str: 56}, 5340, 1160, 'stat')
    , pNode('n2617',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 5340, 1113, 'stat')
    , pNode('n2618',
        {blue: 775}, {prestige: 56, str: 56}, 5340, 1427, 'stat')
    , pNode('n2619', {blue: 4500},
        {prestige: 400, str: 100, valor: 100, luck: 100, spirit: 100},
        5340, 1270,
        'bigStat', 'Бонус: Сила, Отвага, Удача, Дух', '', 'stat')
    , pNode('n2620',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 5340, 1800, 'stat')
    , pNode('n2621',
        {green: 775}, {prestige: 90, vit: 90, dex: 29}, 5392, 1710, 'stat')
    , pNode('n2622',
        {blue: 775}, {prestige: 56, str: 56}, 5288, 1710, 'stat')
    , pNode('n2623',
        {red: 585}, {prestige: 27, power: 27, dex: 18}, 5245, 1680, 'stat')
    , pNode('n2624',
        {red: 965}, {prestige: 53, power: 53, dex: 30}, 5245, 1800, 'stat')
    , pNode('n2625',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 5435, 1800, 'stat')
    , pNode('n2626',
        {blue: 585}, {prestige: 38, spirit: 38}, 5435, 1680, 'stat')
    , pNode('n2627',
        {blue: 775}, {prestige: 56, spirit: 56}, 5279, 1630, 'stat')
    , pNode('n2628',
        {revelation: 300}, {prestige: 120, vit: 120}, 5401, 1630, 'stat')
    , pNode('n2629',
        {blue: 575}, {prestige: 30, majesty: 250}, 5279, 1850, 'stat')
    , pNode('n2630',
        {blue: 575}, {prestige: 30, majesty: 250}, 5401, 1850, 'stat')
    , pNode('n2631',
        {red: 775}, {prestige: 48, power: 48, dex: 29}, 5340, 1630, 'stat')
    , pNode('n2632',
        {green: 585}, {prestige: 50, vit: 50, dex: 18}, 5340, 1850, 'stat')
    , pNode('n2633',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, 5205, 1740, 'stat')
    , pNode('n2634',
        {green: 965}, {prestige: 100, vit: 100, dex: 30}, 5475, 1740, 'stat')
    , pNode('n2635', {red: 4500, green: 4500},
        {prestige: 750, power: 250, vit: 500, dex: 300}, 5340, 1740,
        'bigStat', 'Бонус: Могущество, Выносливость', '', 'pv')
    , pNode('n2636',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1380, -330, 'stat')
    , pNode('n2637',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1432, -420, 'stat')
    , pNode('n2638',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1328, -420, 'stat')
    , pNode('n2639',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1285, -450, 'stat')
    , pNode('n2640',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1285, -330, 'stat')
    , pNode('n2641',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1475, -330, 'stat')
    , pNode('n2642',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1475, -450, 'stat')
    , pNode('n2643',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1380, -500, 'stat')
    , pNode('n2644',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1380, -280, 'stat')
    , pNode('n2645',
        {blue: 650}, {prestige: 56, spirit: 56}, 1380, -547, 'stat')
    , pNode('n2646',
        {red: 650}, {prestige: 40, power: 40, dex: 24}, 1380, -233, 'stat')
    , pNode('n2647',
        {blue: 650}, {prestige: 56, valor: 56}, 1247, -474, 'stat')
    , pNode('n2648',
        {green: 650}, {prestige: 75, vit: 75, dex: 24}, 1247, -306, 'stat')
    , pNode('n2649',
        {blue: 650}, {prestige: 56, luck: 56}, 1513, -306, 'stat')
    , pNode('n2650',
        {blue: 650}, {prestige: 56, str: 56}, 1513, -474, 'stat')
    , pNode('n2651', {blue: 350}, {prestige: 40}, 1380, -390, 'skill',
        'Талант: Сила единства',
        'При игре за класс роли "Атака" могущество увеличивается на 25% '+
        'за каждого союзника другого класса этой роли, находящегося в '+
        'радиусе 40 метров.',
        'unity')
    ];

const edgesData =
    [ edge('n15', 'n0')
    , edge('n0', 'n1', 'curve')
    , edge('n1', 'n2', 'curve')
    , edge('n2', 'n3')
    , edge('n3', 'n4')
    , edge('n4', 'n5')
    , edge('n5', 'n6')
    , edge('n3', 'n7')
    , edge('n7', 'n8')
    , edge('n8', 'n9')
    , edge('n9', 'n10')
    , edge('n10', 'n11')
    , edge('n1', 'n12')
    , edge('n12', 'n13')
    , edge('n13', 'n14')
    , edge('n16', 'n31')
    , edge('n16', 'n30')
    , edge('n30', 'n29')
    , edge('n18', 'n16', 'curve')
    , edge('n17', 'n18', 'curve')
    , edge('n17', 'n28')
    , edge('n28', 'n22')
    , edge('n22', 'n21')
    , edge('n21', 'n20')
    , edge('n20', 'n19')
    , edge('n19', 'n23')
    , edge('n23', 'n24')
    , edge('n24', 'n25')
    , edge('n25', 'n26')
    , edge('n26', 'n27')
    , edge('n47', 'n32')
    , edge('n32', 'n33', 'curve')
    , edge('n33', 'n34', 'curve')
    , edge('n34', 'n40')
    , edge('n40', 'n41')
    , edge('n41', 'n42')
    , edge('n42', 'n43')
    , edge('n43', 'n46')
    , edge('n46', 'n45')
    , edge('n35', 'n36')
    , edge('n40', 'n39')
    , edge('n39', 'n35')
    , edge('n37', 'n38')
    , edge('n33', 'n37')
    , edge('n14', 'n49', 'between')
    , edge('n48', 'n49')
    , edge('n48', 'n64')
    , edge('n52', 'n60')
    , edge('n49', 'n60')
    , edge('n53', 'n64')
    , edge('n53', 'n54')
    , edge('n54', 'n61')
    , edge('n61', 'n52')
    , edge('n29', 'n52', 'between')
    , edge('n64', 'n55')
    , edge('n64', 'n50')
    , edge('n55', 'n56')
    , edge('n56', 'n59')
    , edge('n56', 'n62')
    , edge('n59', 'n58')
    , edge('n58', 'n57')
    , edge('n51', 'n57')
    , edge('n51', 'n50')
    , edge('n51', 'n63')
    , edge('n44', 'n54', 'between')
    , edge('n44', 'n38')
    , edge('n58', 'n70', 'between')
    , edge('n70', 'n74')
    , edge('n74', 'n67')
    , edge('n67', 'n65', 'curve')
    , edge('n65', 'n80')
    , edge('n80', 'n66')
    , edge('n66', 'n77')
    , edge('n77', 'n69')
    , edge('n69', 'n79')
    , edge('n79', 'n68')
    , edge('n77', 'n73')
    , edge('n73', 'n76')
    , edge('n76', 'n72')
    , edge('n72', 'n78')
    , edge('n78', 'n71')
    , edge('n71', 'n75')
    , edge('n78', 'n94', 'between')
    , edge('n94', 'n85')
    , edge('n85', 'n84')
    , edge('n84', 'n83')
    , edge('n83', 'n88')
    , edge('n94', 'n87')
    , edge('n91', 'n87')
    , edge('n91', 'n82')
    , edge('n82', 'n95')
    , edge('n82', 'n86')
    , edge('n92', 'n91', 'curve')
    , edge('n92', 'n81')
    , edge('n92', 'n90')
    , edge('n90', 'n93')
    , edge('n93', 'n89')
    , edge('n79', 'n108', 'between')
    , edge('n108', 'n104')
    , edge('n103', 'n104')
    , edge('n99', 'n103', 'curve')
    , edge('n99', 'n100')
    , edge('n99', 'n98')
    , edge('n98', 'n101')
    , edge('n97', 'n101')
    , edge('n96', 'n97', 'curve')
    , edge('n96', 'n110')
    , edge('n97', 'n106')
    , edge('n106', 'n102')
    , edge('n102', 'n109')
    , edge('n97', 'n107')
    , edge('n107', 'n105')
    , edge('n73', 'n130', 'between')
    , edge('n130', 'n126')
    , edge('n126', 'n114')
    , edge('n114', 'n118')
    , edge('n118', 'n124')
    , edge('n124', 'n119')
    , edge('n119', 'n122')
    , edge('n122', 'n113')
    , edge('n113', 'n115')
    , edge('n115', 'n123')
    , edge('n123', 'n120')
    , edge('n120', 'n127')
    , edge('n123', 'n125')
    , edge('n125', 'n121')
    , edge('n121', 'n128')
    , edge('n128', 'n131')
    , edge('n131', 'n129')
    , edge('n129', 'n117')
    , edge('n117', 'n119')
    , edge('n131', 'n116')
    , edge('n116', 'n111')
    , edge('n111', 'n112', 'curve')
    , edge('n112', 'n132')
    , edge('n100', 'n144', 'between')
    , edge('n144', 'n139')
    , edge('n139', 'n141')
    , edge('n141', 'n133')
    , edge('n133', 'n134', 'curve')
    , edge('n134', 'n148')
    , edge('n134', 'n145')
    , edge('n145', 'n147')
    , edge('n145', 'n137')
    , edge('n134', 'n135', 'curve')
    , edge('n135', 'n142')
    , edge('n142', 'n146')
    , edge('n142', 'n136')
    , edge('n136', 'n140')
    , edge('n141', 'n138')
    , edge('n138', 'n143')
    , edge('n143', 'n162', 'between')
    , edge('n154', 'n162')
    , edge('n157', 'n154', 'curve')
    , edge('n157', 'n159')
    , edge('n154', 'n149')
    , edge('n153', 'n149')
    , edge('n153', 'n161')
    , edge('n152', 'n153', 'curve')
    , edge('n152', 'n160')
    , edge('n152', 'n151')
    , edge('n151', 'n164')
    , edge('n164', 'n150')
    , edge('n154', 'n150')
    , edge('n150', 'n155')
    , edge('n155', 'n163')
    , edge('n155', 'n156', 'curve')
    , edge('n156', 'n158')
    , edge('n93', 'n179', 'between')
    , edge('n171', 'n179')
    , edge('n170', 'n171', 'curve')
    , edge('n170', 'n178')
    , edge('n170', 'n165')
    , edge('n165', 'n173')
    , edge('n173', 'n175')
    , edge('n165', 'n166', 'curve')
    , edge('n166', 'n167', 'curve')
    , edge('n167', 'n180')
    , edge('n171', 'n172', 'curve')
    , edge('n172', 'n174')
    , edge('n172', 'n168', 'curve')
    , edge('n168', 'n176')
    , edge('n168', 'n169', 'curve')
    , edge('n169', 'n177')
    , edge('n177', 'n193', 'between')
    , edge('n193', 'n188')
    , edge('n188', 'n183')
    , edge('n183', 'n197')
    , edge('n197', 'n184')
    , edge('n184', 'n194')
    , edge('n194', 'n196')
    , edge('n184', 'n186')
    , edge('n186', 'n189')
    , edge('n189', 'n185')
    , edge('n197', 'n182')
    , edge('n182', 'n187')
    , edge('n187', 'n190')
    , edge('n197', 'n181')
    , edge('n181', 'n191')
    , edge('n191', 'n195')
    , edge('n195', 'n192')
    , edge('n102', 'n260', 'between')
    , edge('n260', 'n252')
    , edge('n252', 'n248')
    , edge('n248', 'n263')
    , edge('n263', 'n250')
    , edge('n250', 'n251')
    , edge('n251', 'n259')
    , edge('n263', 'n249')
    , edge('n249', 'n255')
    , edge('n254', 'n255', 'curve')
    , edge('n254', 'n262')
    , edge('n253', 'n249')
    , edge('n253', 'n261')
    , edge('n252', 'n256', 'curve')
    , edge('n256', 'n258')
    , edge('n256', 'n253', 'curve')
    , edge('n255', 'n257')
    , edge('n257', 'n273', 'between')
    , edge('n273', 'n271')
    , edge('n271', 'n276')
    , edge('n276', 'n279')
    , edge('n279', 'n277')
    , edge('n277', 'n269')
    , edge('n269', 'n267')
    , edge('n267', 'n280')
    , edge('n280', 'n266')
    , edge('n269', 'n272')
    , edge('n272', 'n268')
    , edge('n268', 'n274')
    , edge('n274', 'n264')
    , edge('n264', 'n280')
    , edge('n280', 'n265')
    , edge('n265', 'n270')
    , edge('n270', 'n275')
    , edge('n275', 'n278')
    , edge('n278', 'n311', 'between')
    , edge('n311', 'n302')
    , edge('n302', 'n307')
    , edge('n307', 'n309')
    , edge('n309', 'n306')
    , edge('n298', 'n302')
    , edge('n298', 'n299', 'curve')
    , edge('n297', 'n298', 'curve')
    , edge('n297', 'n312')
    , edge('n297', 'n301')
    , edge('n301', 'n310')
    , edge('n310', 'n300')
    , edge('n299', 'n308')
    , edge('n308', 'n305')
    , edge('n305', 'n303')
    , edge('n303', 'n311')
    , edge('n308', 'n304')
    , edge('n272', 'n293', 'between')
    , edge('n293', 'n291')
    , edge('n291', 'n286')
    , edge('n286', 'n295')
    , edge('n295', 'n287')
    , edge('n287', 'n289')
    , edge('n289', 'n292')
    , edge('n292', 'n288')
    , edge('n287', 'n282')
    , edge('n282', 'n283', 'curve')
    , edge('n283', 'n284')
    , edge('n284', 'n294')
    , edge('n294', 'n285')
    , edge('n285', 'n290')
    , edge('n283', 'n281', 'curve')
    , edge('n281', 'n296')
    , edge('n304', 'n326', 'between')
    , edge('n326', 'n322')
    , edge('n317', 'n322')
    , edge('n317', 'n313')
    , edge('n313', 'n327')
    , edge('n326', 'n323')
    , edge('n323', 'n318')
    , edge('n318', 'n314')
    , edge('n314', 'n324')
    , edge('n324', 'n315')
    , edge('n318', 'n319', 'curve')
    , edge('n319', 'n321')
    , edge('n321', 'n325')
    , edge('n316', 'n317', 'curve')
    , edge('n316', 'n320')
    , edge('n317', 'n244', 'between')
    , edge('n244', 'n246')
    , edge('n246', 'n234')
    , edge('n234', 'n247')
    , edge('n247', 'n240')
    , edge('n240', 'n237')
    , edge('n237', 'n242')
    , edge('n246', 'n243')
    , edge('n243', 'n238')
    , edge('n238', 'n233')
    , edge('n244', 'n236')
    , edge('n236', 'n239')
    , edge('n247', 'n231')
    , edge('n231', 'n235')
    , edge('n235', 'n241')
    , edge('n247', 'n232')
    , edge('n232', 'n245')
    , edge('n245', 'n229', 'between')
    , edge('n221', 'n229')
    , edge('n220', 'n221', 'curve')
    , edge('n220', 'n228')
    , edge('n223', 'n220', 'curve')
    , edge('n223', 'n225')
    , edge('n225', 'n206', 'between')
    , edge('n223', 'n215')
    , edge('n220', 'n216')
    , edge('n216', 'n217', 'curve')
    , edge('n217', 'n230')
    , edge('n216', 'n222')
    , edge('n222', 'n224')
    , edge('n222', 'n218', 'curve')
    , edge('n218', 'n226')
    , edge('n218', 'n219', 'curve')
    , edge('n219', 'n227')
    , edge('n160', 'n211', 'between')
    , edge('n211', 'n203')
    , edge('n203', 'n201')
    , edge('n201', 'n213')
    , edge('n213', 'n200')
    , edge('n200', 'n210')
    , edge('n210', 'n205')
    , edge('n201', 'n214')
    , edge('n214', 'n198')
    , edge('n198', 'n212')
    , edge('n212', 'n209')
    , edge('n214', 'n207')
    , edge('n207', 'n204')
    , edge('n204', 'n199')
    , edge('n214', 'n206')
    , edge('n206', 'n202')
    , edge('n202', 'n208')
    , edge('n276', 'n266')
    , edge('n92', 'n415', 'between')
    , edge('n415', 'n419')
    , edge('n419', 'n416')
    , edge('n415', 'n409')
    , edge('n409', 'n413')
    , edge('n415', 'n408')
    , edge('n408', 'n406', 'curve')
    , edge('n406', 'n407', 'curve')
    , edge('n407', 'n418')
    , edge('n418', 'n410')
    , edge('n418', 'n420')
    , edge('n406', 'n414')
    , edge('n407', 'n421')
    , edge('n414', 'n411')
    , edge('n414', 'n412')
    , edge('n412', 'n417')
    , edge('n414', 'n431', 'between')
    , edge('n431', 'n429')
    , edge('n429', 'n425', 'curve')
    , edge('n425', 'n433')
    , edge('n425', 'n424')
    , edge('n424', 'n426')
    , edge('n426', 'n434')
    , edge('n424', 'n422', 'curve')
    , edge('n422', 'n430')
    , edge('n430', 'n432')
    , edge('n430', 'n427', 'curve')
    , edge('n427', 'n435')
    , edge('n427', 'n428', 'curve')
    , edge('n428', 'n436')
    , edge('n422', 'n423', 'curve')
    , edge('n423', 'n437')
    , edge('n434', 'n452', 'between')
    , edge('n452', 'n443')
    , edge('n443', 'n438')
    , edge('n438', 'n439', 'curve')
    , edge('n439', 'n453')
    , edge('n453', 'n440')
    , edge('n440', 'n449')
    , edge('n449', 'n446')
    , edge('n446', 'n444')
    , edge('n444', 'n452')
    , edge('n449', 'n445')
    , edge('n445', 'n441')
    , edge('n441', 'n451')
    , edge('n443', 'n448')
    , edge('n448', 'n450')
    , edge('n450', 'n447')
    , edge('n447', 'n442')
    , edge('n447', 'n466', 'between')
    , edge('n466', 'n462')
    , edge('n462', 'n460')
    , edge('n466', 'n461')
    , edge('n461', 'n457')
    , edge('n457', 'n456')
    , edge('n456', 'n458')
    , edge('n458', 'n463')
    , edge('n456', 'n465')
    , edge('n465', 'n455')
    , edge('n455', 'n459')
    , edge('n459', 'n454')
    , edge('n454', 'n468')
    , edge('n459', 'n464')
    , edge('n464', 'n467')
    , edge('n464', 'n479', 'between')
    , edge('n479', 'n469')
    , edge('n469', 'n483')
    , edge('n479', 'n473')
    , edge('n473', 'n477')
    , edge('n477', 'n474')
    , edge('n474', 'n472')
    , edge('n472', 'n482')
    , edge('n477', 'n485')
    , edge('n485', 'n478')
    , edge('n478', 'n476')
    , edge('n476', 'n481')
    , edge('n481', 'n471')
    , edge('n471', 'n484')
    , edge('n485', 'n470')
    , edge('n470', 'n475')
    , edge('n475', 'n480')
    , edge('n480', 'n499', 'between')
    , edge('n499', 'n491')
    , edge('n494', 'n491', 'curve')
    , edge('n494', 'n496')
    , edge('n486', 'n491')
    , edge('n486', 'n501')
    , edge('n486', 'n490')
    , edge('n490', 'n498')
    , edge('n488', 'n486', 'curve')
    , edge('n487', 'n488', 'curve')
    , edge('n487', 'n492')
    , edge('n491', 'n492', 'curve')
    , edge('n492', 'n500')
    , edge('n492', 'n493', 'curve')
    , edge('n493', 'n495')
    , edge('n493', 'n489', 'curve')
    , edge('n489', 'n497')
    , edge('n418', 'n513', 'between')
    , edge('n513', 'n516')
    , edge('n516', 'n502')
    , edge('n502', 'n506')
    , edge('n506', 'n512')
    , edge('n502', 'n518')
    , edge('n503', 'n518')
    , edge('n518', 'n505')
    , edge('n505', 'n507')
    , edge('n507', 'n510')
    , edge('n518', 'n504')
    , edge('n504', 'n517')
    , edge('n517', 'n515')
    , edge('n517', 'n514')
    , edge('n514', 'n509')
    , edge('n509', 'n511')
    , edge('n513', 'n508')
    , edge('n508', 'n503')
    , edge('n510', 'n388', 'between')
    , edge('n388', 'n384')
    , edge('n384', 'n379')
    , edge('n379', 'n377')
    , edge('n377', 'n389')
    , edge('n377', 'n378')
    , edge('n378', 'n382')
    , edge('n377', 'n386')
    , edge('n386', 'n376')
    , edge('n376', 'n380')
    , edge('n380', 'n375')
    , edge('n375', 'n389')
    , edge('n376', 'n381')
    , edge('n381', 'n383')
    , edge('n383', 'n387')
    , edge('n388', 'n385')
    , edge('n385', 'n380')
    , edge('n261', 'n362', 'between')
    , edge('n371', 'n387', 'between')
    , edge('n371', 'n368')
    , edge('n371', 'n359')
    , edge('n359', 'n363')
    , edge('n363', 'n372')
    , edge('n359', 'n374')
    , edge('n374', 'n360')
    , edge('n360', 'n361', 'curve')
    , edge('n361', 'n370')
    , edge('n370', 'n366')
    , edge('n366', 'n362')
    , edge('n370', 'n367')
    , edge('n367', 'n365')
    , edge('n365', 'n373')
    , edge('n373', 'n364')
    , edge('n364', 'n369')
    , edge('n364', 'n359')
    , edge('n365', 'n394', 'between')
    , edge('n394', 'n399')
    , edge('n399', 'n402')
    , edge('n402', 'n400')
    , edge('n400', 'n395')
    , edge('n395', 'n404')
    , edge('n404', 'n396')
    , edge('n396', 'n398')
    , edge('n401', 'n398')
    , edge('n401', 'n397')
    , edge('n397', 'n393')
    , edge('n393', 'n403')
    , edge('n403', 'n394')
    , edge('n392', 'n401')
    , edge('n390', 'n391', 'curve')
    , edge('n391', 'n392', 'curve')
    , edge('n405', 'n390')
    , edge('n514', 'n522', 'between')
    , edge('n522', 'n532')
    , edge('n532', 'n523')
    , edge('n522', 'n526')
    , edge('n526', 'n530')
    , edge('n530', 'n527')
    , edge('n527', 'n525')
    , edge('n525', 'n533')
    , edge('n533', 'n524')
    , edge('n524', 'n529')
    , edge('n529', 'n531')
    , edge('n531', 'n528')
    , edge('n524', 'n520')
    , edge('n520', 'n521', 'curve')
    , edge('n521', 'n519', 'curve')
    , edge('n519', 'n534')
    , edge('n432', 'n546', 'between')
    , edge('n546', 'n543')
    , edge('n543', 'n541')
    , edge('n541', 'n549')
    , edge('n546', 'n542')
    , edge('n542', 'n538')
    , edge('n538', 'n548')
    , edge('n548', 'n539')
    , edge('n539', 'n544')
    , edge('n544', 'n547')
    , edge('n547', 'n545')
    , edge('n545', 'n540')
    , edge('n550', 'n535')
    , edge('n535', 'n536', 'curve')
    , edge('n536', 'n537', 'curve')
    , edge('n537', 'n539')
    , edge('n279', 'n341', 'between')
    , edge('n341', 'n337')
    , edge('n337', 'n330')
    , edge('n330', 'n343')
    , edge('n343', 'n328')
    , edge('n328', 'n329', 'curve')
    , edge('n329', 'n340')
    , edge('n340', 'n342')
    , edge('n342', 'n339')
    , edge('n339', 'n334')
    , edge('n341', 'n338')
    , edge('n338', 'n333')
    , edge('n333', 'n336')
    , edge('n340', 'n332')
    , edge('n332', 'n335')
    , edge('n335', 'n331')
    , edge('n332', 'n357', 'between')
    , edge('n357', 'n354')
    , edge('n357', 'n353')
    , edge('n348', 'n353')
    , edge('n347', 'n348', 'curve')
    , edge('n347', 'n351')
    , edge('n348', 'n344')
    , edge('n344', 'n358')
    , edge('n345', 'n346', 'curve')
    , edge('n346', 'n344', 'curve')
    , edge('n345', 'n355')
    , edge('n355', 'n356')
    , edge('n356', 'n352')
    , edge('n350', 'n352')
    , edge('n349', 'n350', 'curve')
    , edge('n356', 'n581', 'between')
    , edge('n578', 'n576')
    , edge('n576', 'n573', 'curve')
    , edge('n573', 'n574', 'curve')
    , edge('n574', 'n575', 'curve')
    , edge('n575', 'n571', 'curve')
    , edge('n571', 'n570')
    , edge('n570', 'n572')
    , edge('n572', 'n580')
    , edge('n571', 'n579')
    , edge('n575', 'n577')
    , edge('n574', 'n582')
    , edge('n573', 'n568')
    , edge('n568', 'n569', 'curve')
    , edge('n569', 'n583')
    , edge('n573', 'n581')
    , edge('n579', 'n564', 'between')
    , edge('n564', 'n554')
    , edge('n554', 'n556')
    , edge('n556', 'n559')
    , edge('n559', 'n567')
    , edge('n567', 'n553')
    , edge('n553', 'n566')
    , edge('n566', 'n563')
    , edge('n563', 'n558')
    , edge('n558', 'n560')
    , edge('n560', 'n557')
    , edge('n567', 'n552')
    , edge('n552', 'n565')
    , edge('n565', 'n562')
    , edge('n562', 'n325', 'between')
    , edge('n567', 'n551')
    , edge('n551', 'n555')
    , edge('n555', 'n561')
    , edge('n207', 'n624', 'between')
    , edge('n624', 'n627')
    , edge('n627', 'n623')
    , edge('n618', 'n616', 'curve')
    , edge('n616', 'n617', 'curve')
    , edge('n617', 'n627')
    , edge('n617', 'n622')
    , edge('n622', 'n630')
    , edge('n630', 'n621')
    , edge('n621', 'n626')
    , edge('n618', 'n619')
    , edge('n618', 'n620')
    , edge('n620', 'n629')
    , edge('n620', 'n625')
    , edge('n625', 'n628')
    , edge('n616', 'n631')
    , edge('n625', 'n607', 'between')
    , edge('n607', 'n611')
    , edge('n611', 'n608')
    , edge('n608', 'n606')
    , edge('n606', 'n614')
    , edge('n614', 'n605')
    , edge('n605', 'n610')
    , edge('n610', 'n612')
    , edge('n612', 'n609')
    , edge('n609', 'n604')
    , edge('n604', 'n613')
    , edge('n613', 'n603')
    , edge('n603', 'n607')
    , edge('n612', 'n593', 'between')
    , edge('n615', 'n602')
    , edge('n602', 'n600', 'curve')
    , edge('n600', 'n601', 'curve')
    , edge('n601', 'n605')
    , edge('n593', 'n591')
    , edge('n591', 'n586')
    , edge('n586', 'n587')
    , edge('n587', 'n595')
    , edge('n588', 'n592', 'curve')
    , edge('n592', 'n589', 'curve')
    , edge('n589', 'n590', 'curve')
    , edge('n584', 'n585', 'curve')
    , edge('n585', 'n599')
    , edge('n599', 'n586')
    , edge('n589', 'n584')
    , edge('n590', 'n598')
    , edge('n589', 'n597')
    , edge('n592', 'n594')
    , edge('n588', 'n596')
    , edge('n597', 'n192', 'between')
    , edge('n457', 'n646', 'between')
    , edge('n646', 'n644')
    , edge('n644', 'n636')
    , edge('n636', 'n639')
    , edge('n644', 'n633')
    , edge('n633', 'n647')
    , edge('n647', 'n632')
    , edge('n632', 'n640')
    , edge('n640', 'n637')
    , edge('n640', 'n638')
    , edge('n638', 'n643')
    , edge('n647', 'n634')
    , edge('n634', 'n641')
    , edge('n641', 'n635')
    , edge('n641', 'n645')
    , edge('n645', 'n642')
    , edge('n642', 'n653', 'between')
    , edge('n594', 'n660', 'between')
    , edge('n660', 'n655')
    , edge('n655', 'n651')
    , edge('n651', 'n650')
    , edge('n650', 'n652')
    , edge('n650', 'n659')
    , edge('n659', 'n649')
    , edge('n649', 'n654')
    , edge('n654', 'n656')
    , edge('n649', 'n653')
    , edge('n653', 'n648')
    , edge('n648', 'n662')
    , edge('n653', 'n658')
    , edge('n658', 'n661')
    , edge('n661', 'n657')
    , edge('n652', 'n675', 'between')
    , edge('n675', 'n670')
    , edge('n670', 'n672')
    , edge('n672', 'n669')
    , edge('n669', 'n674')
    , edge('n670', 'n665')
    , edge('n665', 'n678')
    , edge('n678', 'n676')
    , edge('n676', 'n666')
    , edge('n666', 'n679')
    , edge('n679', 'n664')
    , edge('n664', 'n677')
    , edge('n666', 'n668')
    , edge('n668', 'n671')
    , edge('n671', 'n667')
    , edge('n667', 'n673')
    , edge('n673', 'n663')
    , edge('n674', 'n690', 'between')
    , edge('n690', 'n692')
    , edge('n692', 'n689')
    , edge('n689', 'n684')
    , edge('n684', 'n693')
    , edge('n693', 'n683')
    , edge('n683', 'n687')
    , edge('n687', 'n691')
    , edge('n691', 'n688')
    , edge('n690', 'n685')
    , edge('n685', 'n694')
    , edge('n694', 'n686')
    , edge('n686', 'n681')
    , edge('n681', 'n682', 'curve')
    , edge('n682', 'n680', 'curve')
    , edge('n680', 'n695')
    , edge('n671', 'n800', 'between')
    , edge('n800', 'n797')
    , edge('n797', 'n802')
    , edge('n802', 'n805')
    , edge('n800', 'n792')
    , edge('n792', 'n807')
    , edge('n807', 'n793')
    , edge('n793', 'n794', 'curve')
    , edge('n794', 'n801')
    , edge('n801', 'n795')
    , edge('n793', 'n804')
    , edge('n804', 'n806')
    , edge('n806', 'n803')
    , edge('n803', 'n798')
    , edge('n804', 'n796')
    , edge('n796', 'n799')
    , edge('n799', 'n741', 'between')
    , edge('n741', 'n738')
    , edge('n738', 'n733')
    , edge('n733', 'n728')
    , edge('n729', 'n742')
    , edge('n733', 'n734', 'curve')
    , edge('n733', 'n729')
    , edge('n729', 'n730', 'curve')
    , edge('n730', 'n732')
    , edge('n732', 'n737')
    , edge('n730', 'n731')
    , edge('n731', 'n735')
    , edge('n730', 'n739')
    , edge('n734', 'n736')
    , edge('n736', 'n740')
    , edge('n731', 'n756', 'between')
    , edge('n756', 'n746')
    , edge('n746', 'n748')
    , edge('n748', 'n751')
    , edge('n751', 'n759')
    , edge('n759', 'n752')
    , edge('n752', 'n749')
    , edge('n749', 'n754')
    , edge('n757', 'n744')
    , edge('n752', 'n750')
    , edge('n750', 'n755')
    , edge('n755', 'n758')
    , edge('n758', 'n745')
    , edge('n751', 'n747')
    , edge('n747', 'n753')
    , edge('n753', 'n743')
    , edge('n743', 'n757')
    , edge('n757', 'n774', 'between')
    , edge('n774', 'n765')
    , edge('n765', 'n761')
    , edge('n761', 'n762', 'curve')
    , edge('n762', 'n760', 'curve')
    , edge('n760', 'n775')
    , edge('n774', 'n766')
    , edge('n766', 'n768')
    , edge('n768', 'n771')
    , edge('n771', 'n767')
    , edge('n767', 'n763')
    , edge('n763', 'n773')
    , edge('n773', 'n764')
    , edge('n764', 'n769')
    , edge('n769', 'n772')
    , edge('n772', 'n770')
    , edge('n740', 'n786', 'between')
    , edge('n786', 'n784')
    , edge('n784', 'n781', 'curve')
    , edge('n781', 'n782', 'curve')
    , edge('n782', 'n790')
    , edge('n781', 'n789')
    , edge('n776', 'n784')
    , edge('n778', 'n776', 'curve')
    , edge('n778', 'n780')
    , edge('n780', 'n788')
    , edge('n778', 'n783')
    , edge('n783', 'n785')
    , edge('n778', 'n779')
    , edge('n779', 'n787')
    , edge('n782', 'n777')
    , edge('n777', 'n791')
    , edge('n790', 'n704', 'between')
    , edge('n704', 'n701')
    , edge('n704', 'n702')
    , edge('n696', 'n704')
    , edge('n711', 'n698')
    , edge('n698', 'n696', 'curve')
    , edge('n696', 'n697', 'curve')
    , edge('n697', 'n708')
    , edge('n708', 'n710')
    , edge('n710', 'n707')
    , edge('n708', 'n700')
    , edge('n700', 'n703')
    , edge('n703', 'n699')
    , edge('n699', 'n705')
    , edge('n705', 'n709')
    , edge('n709', 'n706')
    , edge('n707', 'n227', 'between')
    , edge('n706', 'n726', 'between')
    , edge('n726', 'n717')
    , edge('n717', 'n722')
    , edge('n722', 'n724')
    , edge('n724', 'n721')
    , edge('n721', 'n716')
    , edge('n716', 'n725')
    , edge('n725', 'n715')
    , edge('n715', 'n719')
    , edge('n717', 'n718', 'curve')
    , edge('n718', 'n720')
    , edge('n720', 'n723')
    , edge('n714', 'n723')
    , edge('n727', 'n712')
    , edge('n712', 'n713', 'curve')
    , edge('n713', 'n714', 'curve')
    , edge('n349', 'n817', 'between')
    , edge('n817', 'n810')
    , edge('n810', 'n823')
    , edge('n823', 'n808')
    , edge('n808', 'n816')
    , edge('n816', 'n813')
    , edge('n813', 'n818')
    , edge('n818', 'n821')
    , edge('n816', 'n814')
    , edge('n814', 'n819')
    , edge('n819', 'n822')
    , edge('n823', 'n809')
    , edge('n809', 'n820')
    , edge('n820', 'n812')
    , edge('n812', 'n815')
    , edge('n815', 'n811')
    , edge('n820', 'n834', 'between')
    , edge('n834', 'n828')
    , edge('n828', 'n832')
    , edge('n834', 'n824')
    , edge('n824', 'n840')
    , edge('n840', 'n833')
    , edge('n833', 'n830')
    , edge('n830', 'n835')
    , edge('n835', 'n838')
    , edge('n838', 'n825')
    , edge('n833', 'n831')
    , edge('n831', 'n826')
    , edge('n826', 'n839')
    , edge('n839', 'n836')
    , edge('n839', 'n837')
    , edge('n837', 'n829')
    , edge('n829', 'n827')
    , edge('n833', 'n848', 'between')
    , edge('n841', 'n842', 'curve')
    , edge('n842', 'n843', 'curve')
    , edge('n843', 'n856')
    , edge('n843', 'n850')
    , edge('n850', 'n854')
    , edge('n848', 'n844')
    , edge('n848', 'n845')
    , edge('n845', 'n853')
    , edge('n853', 'n855')
    , edge('n842', 'n853')
    , edge('n841', 'n849')
    , edge('n849', 'n846')
    , edge('n846', 'n851')
    , edge('n849', 'n847')
    , edge('n847', 'n852')
    , edge('n836', 'n917', 'between')
    , edge('n909', 'n917')
    , edge('n913', 'n909', 'curve')
    , edge('n913', 'n915')
    , edge('n913', 'n907')
    , edge('n907', 'n912')
    , edge('n912', 'n920')
    , edge('n911', 'n907')
    , edge('n911', 'n919')
    , edge('n914', 'n911', 'curve')
    , edge('n914', 'n916')
    , edge('n908', 'n906', 'curve')
    , edge('n906', 'n911')
    , edge('n908', 'n910')
    , edge('n910', 'n918')
    , edge('n906', 'n921')
    , edge('n916', 'n929', 'between')
    , edge('n929', 'n933')
    , edge('n933', 'n930')
    , edge('n930', 'n928')
    , edge('n928', 'n936')
    , edge('n936', 'n927')
    , edge('n927', 'n932')
    , edge('n932', 'n934')
    , edge('n934', 'n931')
    , edge('n937', 'n922')
    , edge('n922', 'n923', 'curve')
    , edge('n923', 'n924', 'curve')
    , edge('n924', 'n926')
    , edge('n926', 'n935')
    , edge('n935', 'n925')
    , edge('n925', 'n933')
    , edge('n849', 'n950', 'between')
    , edge('n950', 'n945')
    , edge('n945', 'n941')
    , edge('n941', 'n942', 'curve')
    , edge('n942', 'n947')
    , edge('n947', 'n951')
    , edge('n951', 'n948')
    , edge('n948', 'n943')
    , edge('n943', 'n944', 'curve')
    , edge('n944', 'n946')
    , edge('n944', 'n939')
    , edge('n939', 'n949')
    , edge('n942', 'n938')
    , edge('n938', 'n943')
    , edge('n938', 'n952')
    , edge('n941', 'n940')
    , edge('n951', 'n899', 'between')
    , edge('n899', 'n897')
    , edge('n897', 'n893', 'curve')
    , edge('n896', 'n897', 'curve')
    , edge('n896', 'n904')
    , edge('n896', 'n891')
    , edge('n892', 'n890', 'curve')
    , edge('n890', 'n891', 'curve')
    , edge('n891', 'n905')
    , edge('n892', 'n893')
    , edge('n893', 'n901')
    , edge('n892', 'n894')
    , edge('n894', 'n902')
    , edge('n891', 'n895')
    , edge('n895', 'n903')
    , edge('n890', 'n898')
    , edge('n898', 'n900')
    , edge('n901', 'n885', 'between')
    , edge('n885', 'n875')
    , edge('n875', 'n888')
    , edge('n888', 'n876')
    , edge('n876', 'n886')
    , edge('n875', 'n889')
    , edge('n889', 'n882')
    , edge('n882', 'n880')
    , edge('n889', 'n874')
    , edge('n874', 'n879')
    , edge('n879', 'n884')
    , edge('n889', 'n873')
    , edge('n873', 'n887')
    , edge('n873', 'n883')
    , edge('n873', 'n877')
    , edge('n877', 'n881')
    , edge('n881', 'n878')
    , edge('n887', 'n871', 'between')
    , edge('n871', 'n868')
    , edge('n868', 'n863')
    , edge('n863', 'n865')
    , edge('n865', 'n862')
    , edge('n862', 'n867')
    , edge('n865', 'n857')
    , edge('n859', 'n857', 'curve')
    , edge('n857', 'n858', 'curve')
    , edge('n858', 'n872')
    , edge('n858', 'n869')
    , edge('n869', 'n861')
    , edge('n859', 'n866')
    , edge('n866', 'n870')
    , edge('n870', 'n381', 'between')
    , edge('n866', 'n860')
    , edge('n860', 'n864')
    , edge('n435', 'n967', 'between')
    , edge('n967', 'n964')
    , edge('n964', 'n954')
    , edge('n954', 'n969')
    , edge('n967', 'n963')
    , edge('n963', 'n953')
    , edge('n953', 'n969')
    , edge('n954', 'n959')
    , edge('n959', 'n962')
    , edge('n953', 'n957')
    , edge('n957', 'n961')
    , edge('n961', 'n958')
    , edge('n969', 'n955')
    , edge('n955', 'n968')
    , edge('n968', 'n956')
    , edge('n956', 'n966')
    , edge('n968', 'n965')
    , edge('n965', 'n960')
    , edge('n960', 'n982', 'between')
    , edge('n982', 'n977')
    , edge('n977', 'n973')
    , edge('n973', 'n972')
    , edge('n972', 'n981')
    , edge('n972', 'n970', 'curve')
    , edge('n970', 'n984')
    , edge('n970', 'n975')
    , edge('n975', 'n971')
    , edge('n971', 'n976')
    , edge('n976', 'n978')
    , edge('n975', 'n980')
    , edge('n980', 'n983')
    , edge('n970', 'n974')
    , edge('n974', 'n979')
    , edge('n976', 'n997', 'between')
    , edge('n997', 'n989')
    , edge('n989', 'n993', 'curve')
    , edge('n993', 'n995')
    , edge('n993', 'n990', 'curve')
    , edge('n990', 'n998')
    , edge('n990', 'n991', 'curve')
    , edge('n991', 'n999')
    , edge('n991', 'n986')
    , edge('n986', 'n1000')
    , edge('n1000', 'n985')
    , edge('n985', 'n993')
    , edge('n989', 'n987')
    , edge('n987', 'n988')
    , edge('n988', 'n996')
    , edge('n992', 'n988', 'curve')
    , edge('n992', 'n994')
    , edge('n992', 'n986')
    , edge('n999', 'n1014', 'between')
    , edge('n1014', 'n1011')
    , edge('n1011', 'n1006')
    , edge('n1006', 'n1009')
    , edge('n1009', 'n1001')
    , edge('n1001', 'n1016')
    , edge('n1016', 'n1003')
    , edge('n1003', 'n1010')
    , edge('n1010', 'n1004')
    , edge('n1004', 'n1008')
    , edge('n1008', 'n1005')
    , edge('n1005', 'n1013')
    , edge('n1013', 'n1002')
    , edge('n1002', 'n1016')
    , edge('n1013', 'n1015')
    , edge('n1015', 'n1012')
    , edge('n1012', 'n1007')
    , edge('n1012', 'n1028', 'between')
    , edge('n1028', 'n1020')
    , edge('n1020', 'n1019')
    , edge('n1019', 'n1021')
    , edge('n1021', 'n1029')
    , edge('n1018', 'n1019', 'curve')
    , edge('n1018', 'n1023')
    , edge('n1023', 'n1031')
    , edge('n1018', 'n1024')
    , edge('n1024', 'n1026')
    , edge('n1018', 'n1022')
    , edge('n1022', 'n1030')
    , edge('n1022', 'n1017')
    , edge('n1017', 'n1032')
    , edge('n1017', 'n1025')
    , edge('n1025', 'n1027')
    , edge('n1026', 'n1042', 'between')
    , edge('n1042', 'n1037')
    , edge('n1037', 'n1046')
    , edge('n1046', 'n1036')
    , edge('n1036', 'n1035')
    , edge('n1048', 'n1033')
    , edge('n1033', 'n1034', 'curve')
    , edge('n1034', 'n1035', 'curve')
    , edge('n1036', 'n1040')
    , edge('n1040', 'n1044')
    , edge('n1044', 'n1041')
    , edge('n1041', 'n1039')
    , edge('n1039', 'n1047')
    , edge('n1047', 'n1038')
    , edge('n1038', 'n1043')
    , edge('n1043', 'n1045')
    , edge('n1008', 'n1058', 'between')
    , edge('n1058', 'n1055')
    , edge('n1055', 'n1050')
    , edge('n1050', 'n1060')
    , edge('n1058', 'n1056')
    , edge('n1056', 'n1061')
    , edge('n1061', 'n1064')
    , edge('n1064', 'n1051')
    , edge('n1058', 'n1065')
    , edge('n1065', 'n1049')
    , edge('n1049', 'n1063')
    , edge('n1063', 'n1059')
    , edge('n1059', 'n1053')
    , edge('n1065', 'n1052')
    , edge('n1052', 'n1062')
    , edge('n1062', 'n1054')
    , edge('n1054', 'n1057')
    , edge('n1062', 'n1075', 'between')
    , edge('n1075', 'n1079')
    , edge('n1079', 'n1076')
    , edge('n1076', 'n1071')
    , edge('n1071', 'n1066')
    , edge('n1068', 'n1066', 'curve')
    , edge('n1066', 'n1080')
    , edge('n1071', 'n1067')
    , edge('n1067', 'n1077')
    , edge('n1077', 'n1068')
    , edge('n1067', 'n1072')
    , edge('n1072', 'n1074')
    , edge('n1068', 'n1069')
    , edge('n1069', 'n1070', 'curve')
    , edge('n1069', 'n1073')
    , edge('n1073', 'n1078')
    , edge('n1078', 'n900', 'between')
    , edge('n904', 'n1085', 'between')
    , edge('n1085', 'n1081')
    , edge('n1081', 'n1095')
    , edge('n1081', 'n1086')
    , edge('n1086', 'n1087', 'curve')
    , edge('n1087', 'n1082')
    , edge('n1082', 'n1083', 'curve')
    , edge('n1083', 'n1085')
    , edge('n1083', 'n1092')
    , edge('n1092', 'n1088')
    , edge('n1088', 'n1084')
    , edge('n1087', 'n1089')
    , edge('n1089', 'n1093')
    , edge('n1086', 'n1091')
    , edge('n1091', 'n1094')
    , edge('n1094', 'n1090')
    , edge('n1087', 'n1109', 'between')
    , edge('n1109', 'n1099')
    , edge('n1099', 'n1103')
    , edge('n1103', 'n1107')
    , edge('n1109', 'n1100')
    , edge('n1100', 'n1105')
    , edge('n1105', 'n1108')
    , edge('n1108', 'n1106')
    , edge('n1106', 'n1101')
    , edge('n1101', 'n1110')
    , edge('n1110', 'n1102')
    , edge('n1102', 'n1104')
    , edge('n1101', 'n1097')
    , edge('n1097', 'n1098', 'curve')
    , edge('n1098', 'n1096', 'curve')
    , edge('n1096', 'n1111')
    , edge('n561', 'n1126', 'between')
    , edge('n1126', 'n1118')
    , edge('n1118', 'n1119', 'curve')
    , edge('n1119', 'n1121')
    , edge('n1119', 'n1114')
    , edge('n1114', 'n1115')
    , edge('n1115', 'n1123')
    , edge('n1114', 'n1127')
    , edge('n1127', 'n1113')
    , edge('n1113', 'n1117')
    , edge('n1117', 'n1125')
    , edge('n1117', 'n1112')
    , edge('n1120', 'n1117', 'curve')
    , edge('n1122', 'n1120')
    , edge('n1112', 'n1116')
    , edge('n1116', 'n1124')
    , edge('n1115', 'n1116', 'curve')
    , edge('n1121', 'n1141', 'between')
    , edge('n1141', 'n1137')
    , edge('n1137', 'n1132')
    , edge('n1132', 'n1130')
    , edge('n1130', 'n1139')
    , edge('n1130', 'n1131')
    , edge('n1131', 'n1135')
    , edge('n1142', 'n1128')
    , edge('n1128', 'n1129', 'curve')
    , edge('n1129', 'n1130', 'curve')
    , edge('n1129', 'n1133')
    , edge('n1133', 'n1138')
    , edge('n1129', 'n1134')
    , edge('n1134', 'n1136')
    , edge('n1136', 'n1140')
    , edge('n1140', 'n1152', 'between')
    , edge('n1152', 'n1156')
    , edge('n1156', 'n1153')
    , edge('n1153', 'n1148')
    , edge('n1152', 'n1146')
    , edge('n1146', 'n1150')
    , edge('n1150', 'n1147')
    , edge('n1152', 'n1145')
    , edge('n1145', 'n1158')
    , edge('n1145', 'n1143', 'curve')
    , edge('n1143', 'n1144', 'curve')
    , edge('n1144', 'n1155')
    , edge('n1155', 'n1157')
    , edge('n1143', 'n1151')
    , edge('n1151', 'n1149')
    , edge('n1149', 'n1154')
    , edge('n1172', 'n1163')
    , edge('n1163', 'n1161')
    , edge('n1161', 'n1159', 'curve')
    , edge('n1159', 'n1174')
    , edge('n1174', 'n1160')
    , edge('n1160', 'n1170')
    , edge('n1170', 'n1166')
    , edge('n1166', 'n1162')
    , edge('n1160', 'n1164')
    , edge('n1164', 'n1165', 'curve')
    , edge('n1165', 'n1167')
    , edge('n1164', 'n1169')
    , edge('n1169', 'n1171')
    , edge('n1171', 'n1168')
    , edge('n1164', 'n1173')
    , edge('n1173', 'n1178', 'between')
    , edge('n1178', 'n1182')
    , edge('n1182', 'n1187')
    , edge('n1178', 'n1177')
    , edge('n1177', 'n1179')
    , edge('n1179', 'n1184')
    , edge('n1177', 'n1186')
    , edge('n1186', 'n1176')
    , edge('n1176', 'n1181')
    , edge('n1181', 'n1183')
    , edge('n1189', 'n1175')
    , edge('n1175', 'n1176', 'curve')
    , edge('n1176', 'n1180')
    , edge('n1180', 'n1185')
    , edge('n1185', 'n1188')
    , edge('n1188', 'n1201', 'between')
    , edge('n1201', 'n1198')
    , edge('n1198', 'n1196')
    , edge('n1196', 'n1191')
    , edge('n1192', 'n1190', 'curve')
    , edge('n1190', 'n1205')
    , edge('n1190', 'n1191', 'curve')
    , edge('n1192', 'n1193')
    , edge('n1193', 'n1197')
    , edge('n1196', 'n1204')
    , edge('n1204', 'n1195')
    , edge('n1195', 'n1190')
    , edge('n1190', 'n1194')
    , edge('n1194', 'n1203')
    , edge('n582', 'n1203', 'between')
    , edge('n1195', 'n1200')
    , edge('n1200', 'n1202')
    , edge('n1202', 'n1199')
    , edge('n1195', 'n1220', 'between')
    , edge('n1220', 'n1216')
    , edge('n1216', 'n1206')
    , edge('n1216', 'n1210')
    , edge('n1210', 'n1214')
    , edge('n1214', 'n1211')
    , edge('n1211', 'n1209')
    , edge('n1209', 'n1222')
    , edge('n1222', 'n1215')
    , edge('n1215', 'n1212')
    , edge('n1212', 'n1207')
    , edge('n1207', 'n1217')
    , edge('n1217', 'n1220')
    , edge('n1215', 'n1213')
    , edge('n1213', 'n1208')
    , edge('n1208', 'n1221')
    , edge('n1221', 'n1219')
    , edge('n1219', 'n1209')
    , edge('n1221', 'n1218')
    , edge('n1218', 'n1233', 'between')
    , edge('n1233', 'n1227')
    , edge('n1227', 'n1223')
    , edge('n1223', 'n1237')
    , edge('n1237', 'n1224')
    , edge('n1224', 'n1234')
    , edge('n1234', 'n1229')
    , edge('n1229', 'n1232')
    , edge('n1232', 'n1230')
    , edge('n1230', 'n1235')
    , edge('n1235', 'n1238')
    , edge('n1238', 'n1225')
    , edge('n1225', 'n1239')
    , edge('n1238', 'n1226')
    , edge('n1226', 'n1228')
    , edge('n1228', 'n1231')
    , edge('n1226', 'n1236')
    , edge('n1223', 'n1239')
    , edge('n1236', 'n1254', 'between')
    , edge('n1254', 'n1250')
    , edge('n1250', 'n1240')
    , edge('n1240', 'n1244')
    , edge('n1244', 'n1248')
    , edge('n1248', 'n1245')
    , edge('n1254', 'n1251')
    , edge('n1251', 'n1241')
    , edge('n1241', 'n1246')
    , edge('n1246', 'n1249')
    , edge('n1249', 'n1247')
    , edge('n1247', 'n1242')
    , edge('n1242', 'n1255')
    , edge('n1255', 'n1253')
    , edge('n1253', 'n1243')
    , edge('n1243', 'n1256')
    , edge('n1247', 'n1252')
    , edge('n1246', 'n1264', 'between')
    , edge('n1264', 'n1260')
    , edge('n1260', 'n1266')
    , edge('n1266', 'n920', 'between')
    , edge('n1266', 'n1259')
    , edge('n1257', 'n1258', 'curve')
    , edge('n1258', 'n1259', 'curve')
    , edge('n1258', 'n1272')
    , edge('n1258', 'n1269')
    , edge('n1269', 'n1261')
    , edge('n1261', 'n1264')
    , edge('n1269', 'n1271')
    , edge('n1257', 'n1265')
    , edge('n1265', 'n1262')
    , edge('n1262', 'n1267')
    , edge('n1267', 'n1270')
    , edge('n1265', 'n1263')
    , edge('n1263', 'n1268')
    , edge('n1265', 'n1299', 'between')
    , edge('n1299', 'n1297')
    , edge('n1297', 'n1292')
    , edge('n1292', 'n1293')
    , edge('n1293', 'n1301')
    , edge('n1292', 'n1290', 'curve')
    , edge('n1290', 'n1305')
    , edge('n1290', 'n1295')
    , edge('n1295', 'n1296', 'curve')
    , edge('n1296', 'n1291')
    , edge('n1291', 'n1297')
    , edge('n1296', 'n1304')
    , edge('n1295', 'n1303')
    , edge('n1290', 'n1298')
    , edge('n1298', 'n1300')
    , edge('n1290', 'n1294')
    , edge('n1294', 'n1302')
    , edge('n1302', 'n1286', 'between')
    , edge('n1286', 'n1288')
    , edge('n1288', 'n1285')
    , edge('n1285', 'n1280')
    , edge('n1280', 'n1282')
    , edge('n1282', 'n1279')
    , edge('n1280', 'n1275')
    , edge('n1275', 'n1289')
    , edge('n1289', 'n1276')
    , edge('n1276', 'n1278')
    , edge('n1278', 'n1286')
    , edge('n1289', 'n1274')
    , edge('n1289', 'n1273')
    , edge('n1273', 'n1283')
    , edge('n1283', 'n1277')
    , edge('n1277', 'n1281')
    , edge('n1273', 'n1287')
    , edge('n1287', 'n1284')
    , edge('n1284', 'n1093', 'between')
    , edge('n979', 'n1525', 'between')
    , edge('n1525', 'n1517')
    , edge('n1517', 'n1520')
    , edge('n1525', 'n1514')
    , edge('n1514', 'n1515', 'curve')
    , edge('n1515', 'n1513', 'curve')
    , edge('n1513', 'n1528')
    , edge('n1525', 'n1527')
    , edge('n1527', 'n1524')
    , edge('n1524', 'n1519')
    , edge('n481', 'n1523', 'between')
    , edge('n1523', 'n1518')
    , edge('n1518', 'n1521')
    , edge('n1523', 'n1526')
    , edge('n1526', 'n1522')
    , edge('n1522', 'n1516')
    , edge('n1524', 'n1541', 'between')
    , edge('n1540', 'n1532')
    , edge('n1532', 'n1533', 'curve')
    , edge('n1533', 'n1541')
    , edge('n1533', 'n1537', 'curve')
    , edge('n1537', 'n1539')
    , edge('n1537', 'n1534', 'curve')
    , edge('n1534', 'n1542')
    , edge('n1542', 'n1535', 'curve')
    , edge('n1535', 'n1543')
    , edge('n1535', 'n1530')
    , edge('n1530', 'n1544')
    , edge('n1530', 'n1536')
    , edge('n1536', 'n1538')
    , edge('n1544', 'n1531')
    , edge('n1531', 'n1529', 'curve')
    , edge('n1529', 'n1537')
    , edge('n1543', 'n1559', 'between')
    , edge('n1559', 'n1545')
    , edge('n1545', 'n1555')
    , edge('n1555', 'n1549')
    , edge('n1549', 'n1553')
    , edge('n1553', 'n1550')
    , edge('n1550', 'n1548')
    , edge('n1548', 'n1558')
    , edge('n1558', 'n1560')
    , edge('n1560', 'n1547')
    , edge('n1547', 'n1557')
    , edge('n1557', 'n1552')
    , edge('n1552', 'n1554')
    , edge('n1554', 'n1561')
    , edge('n1561', 'n1546')
    , edge('n1546', 'n1559')
    , edge('n1546', 'n1551')
    , edge('n1551', 'n1556')
    , edge('n1558', 'n1576', 'between')
    , edge('n1576', 'n1563')
    , edge('n1563', 'n1568')
    , edge('n1568', 'n1573')
    , edge('n1568', 'n1571')
    , edge('n1571', 'n1569')
    , edge('n1569', 'n1564')
    , edge('n1564', 'n1574')
    , edge('n1574', 'n1577')
    , edge('n1577', 'n1565')
    , edge('n1565', 'n1575')
    , edge('n1575', 'n1567')
    , edge('n1567', 'n1570')
    , edge('n1570', 'n1566')
    , edge('n1566', 'n1572')
    , edge('n1572', 'n1562')
    , edge('n1563', 'n1578')
    , edge('n1578', 'n1565')
    , edge('n1575', 'n1502', 'between')
    , edge('n1030', 'n1506', 'between')
    , edge('n1506', 'n1510')
    , edge('n1502', 'n1507')
    , edge('n1502', 'n1505')
    , edge('n1505', 'n1497')
    , edge('n1497', 'n1498', 'curve')
    , edge('n1498', 'n1512')
    , edge('n1498', 'n1499', 'curve')
    , edge('n1499', 'n1506')
    , edge('n1498', 'n1509')
    , edge('n1509', 'n1501')
    , edge('n1501', 'n1504')
    , edge('n1504', 'n1500')
    , edge('n1509', 'n1511')
    , edge('n1511', 'n1508')
    , edge('n1508', 'n1503')
    , edge('n1509', 'n1366', 'between')
    , edge('n1366', 'n1364')
    , edge('n1364', 'n1361', 'curve')
    , edge('n1361', 'n1369')
    , edge('n1361', 'n1357')
    , edge('n1357', 'n1371')
    , edge('n1371', 'n1358')
    , edge('n1358', 'n1359')
    , edge('n1359', 'n1367')
    , edge('n1359', 'n1360', 'curve')
    , edge('n1360', 'n1368')
    , edge('n1360', 'n1356')
    , edge('n1367', 'n1351', 'between')
    , edge('n1362', 'n1363', 'curve')
    , edge('n1363', 'n1365')
    , edge('n1362', 'n1370')
    , edge('n1362', 'n1357')
    , edge('n1351', 'n1354')
    , edge('n1354', 'n1342')
    , edge('n1342', 'n1352')
    , edge('n1352', 'n1344')
    , edge('n1351', 'n1346')
    , edge('n1346', 'n1348')
    , edge('n1346', 'n1341')
    , edge('n1341', 'n1355')
    , edge('n1355', 'n1347')
    , edge('n1347', 'n1343')
    , edge('n1343', 'n1339')
    , edge('n1339', 'n1353')
    , edge('n1353', 'n1340')
    , edge('n1340', 'n1345')
    , edge('n1345', 'n1350')
    , edge('n1343', 'n1349')
    , edge('n1349', 'n1094', 'between')
    , edge('n1370', 'n1400', 'between')
    , edge('n1400', 'n1396')
    , edge('n1396', 'n1391')
    , edge('n1400', 'n1397')
    , edge('n1397', 'n1392')
    , edge('n1392', 'n1388')
    , edge('n1388', 'n1401')
    , edge('n1388', 'n1398')
    , edge('n1398', 'n1389')
    , edge('n1389', 'n1387', 'curve')
    , edge('n1387', 'n1392')
    , edge('n1389', 'n1390')
    , edge('n1390', 'n1394')
    , edge('n1394', 'n1399')
    , edge('n1399', 'n1395')
    , edge('n1395', 'n1393')
    , edge('n1399', 'n1385', 'between')
    , edge('n1385', 'n1382')
    , edge('n1382', 'n1377')
    , edge('n1377', 'n1373')
    , edge('n1373', 'n1374', 'curve')
    , edge('n1374', 'n1386')
    , edge('n1374', 'n1372', 'curve')
    , edge('n1372', 'n1376')
    , edge('n1376', 'n1381')
    , edge('n1374', 'n1383')
    , edge('n1374', 'n1375')
    , edge('n1375', 'n1379')
    , edge('n1379', 'n1384')
    , edge('n1373', 'n1378')
    , edge('n1378', 'n1380')
    , edge('n1380', 'n1384')
    , edge('n1384', 'n1303', 'between')
    , edge('n1271', 'n1320', 'between')
    , edge('n1320', 'n1317')
    , edge('n1317', 'n1312')
    , edge('n1312', 'n1307')
    , edge('n1307', 'n1322')
    , edge('n1322', 'n1315')
    , edge('n1322', 'n1306')
    , edge('n1306', 'n1310')
    , edge('n1310', 'n1316')
    , edge('n1322', 'n1308')
    , edge('n1308', 'n1321')
    , edge('n1321', 'n1318')
    , edge('n1318', 'n1313')
    , edge('n1322', 'n1309')
    , edge('n1309', 'n1319')
    , edge('n1319', 'n1311')
    , edge('n1311', 'n1314')
    , edge('n1319', 'n1334', 'between')
    , edge('n1334', 'n1326')
    , edge('n1326', 'n1325')
    , edge('n1325', 'n1327')
    , edge('n1327', 'n1335')
    , edge('n1327', 'n1331', 'curve')
    , edge('n1331', 'n1333')
    , edge('n1331', 'n1323')
    , edge('n1323', 'n1338')
    , edge('n1323', 'n1328')
    , edge('n1328', 'n1324')
    , edge('n1324', 'n1325', 'curve')
    , edge('n1332', 'n1330')
    , edge('n1330', 'n1326', 'curve')
    , edge('n1324', 'n1329')
    , edge('n1329', 'n1337')
    , edge('n1328', 'n1336')
    , edge('n1333', 'n1427', 'between')
    , edge('n1427', 'n1425')
    , edge('n1424', 'n1425', 'curve')
    , edge('n1424', 'n1432')
    , edge('n1425', 'n1421', 'curve')
    , edge('n1421', 'n1429')
    , edge('n1421', 'n1420')
    , edge('n1420', 'n1418', 'curve')
    , edge('n1420', 'n1433')
    , edge('n1418', 'n1419', 'curve')
    , edge('n1419', 'n1424')
    , edge('n1418', 'n1426')
    , edge('n1430', 'n1422')
    , edge('n1422', 'n1426', 'curve')
    , edge('n1426', 'n1428')
    , edge('n1426', 'n1423', 'curve')
    , edge('n1423', 'n1431')
    , edge('n1304', 'n1411', 'between')
    , edge('n1411', 'n1415')
    , edge('n1415', 'n1412')
    , edge('n1412', 'n1407')
    , edge('n1411', 'n1404')
    , edge('n1404', 'n1417')
    , edge('n1417', 'n1403')
    , edge('n1403', 'n1414')
    , edge('n1414', 'n1406')
    , edge('n1406', 'n1409')
    , edge('n1409', 'n1405')
    , edge('n1417', 'n1402')
    , edge('n1402', 'n1410')
    , edge('n1410', 'n1408')
    , edge('n1408', 'n1413')
    , edge('n1413', 'n1416')
    , edge('n1416', 'n1430', 'between')
    , edge('n1410', 'n1445', 'between')
    , edge('n1445', 'n1441')
    , edge('n1441', 'n1437')
    , edge('n1445', 'n1436')
    , edge('n1436', 'n1449')
    , edge('n1434', 'n1435', 'curve')
    , edge('n1435', 'n1436', 'curve')
    , edge('n1435', 'n1440')
    , edge('n1440', 'n1442')
    , edge('n1434', 'n1446')
    , edge('n1447', 'n1438')
    , edge('n1438', 'n1443')
    , edge('n1443', 'n1446')
    , edge('n1446', 'n1444')
    , edge('n1444', 'n1439')
    , edge('n1439', 'n1448')
    , edge('n1448', 'n1470', 'between')
    , edge('n1470', 'n1468')
    , edge('n1468', 'n1469')
    , edge('n1469', 'n1473')
    , edge('n1473', 'n1478')
    , edge('n1478', 'n1474')
    , edge('n1474', 'n1472')
    , edge('n1472', 'n1467')
    , edge('n1467', 'n1477')
    , edge('n1477', 'n1468')
    , edge('n1475', 'n1479')
    , edge('n1479', 'n1476')
    , edge('n1476', 'n1471')
    , edge('n1466', 'n1471')
    , edge('n1466', 'n1480')
    , edge('n1471', 'n1472', 'curve')
    , edge('n1478', 'n1428', 'between')
    , edge('n1479', 'n1492', 'between')
    , edge('n1492', 'n1489')
    , edge('n1489', 'n1487')
    , edge('n1487', 'n1495')
    , edge('n1492', 'n1482')
    , edge('n1482', 'n1486')
    , edge('n1486', 'n1491')
    , edge('n1482', 'n1483', 'curve')
    , edge('n1483', 'n1481', 'curve')
    , edge('n1481', 'n1485')
    , edge('n1481', 'n1496')
    , edge('n1485', 'n1490')
    , edge('n1490', 'n1493')
    , edge('n1485', 'n1494')
    , edge('n1494', 'n1484')
    , edge('n1484', 'n1488')
    , edge('n1446', 'n1457', 'between')
    , edge('n1457', 'n1454')
    , edge('n1454', 'n1462')
    , edge('n1462', 'n1464')
    , edge('n1464', 'n1461')
    , edge('n1461', 'n1456')
    , edge('n1462', 'n1451')
    , edge('n1451', 'n1465')
    , edge('n1465', 'n1452')
    , edge('n1452', 'n1459')
    , edge('n1459', 'n1453')
    , edge('n1465', 'n1450')
    , edge('n1450', 'n1458')
    , edge('n1458', 'n1455')
    , edge('n1455', 'n1460')
    , edge('n1460', 'n1463')
    , edge('n1460', 'n1369', 'between')
    , edge('n1124', 'n1592', 'between')
    , edge('n1592', 'n1594')
    , edge('n1594', 'n1581')
    , edge('n1581', 'n1591')
    , edge('n1591', 'n1586')
    , edge('n1586', 'n1588')
    , edge('n1588', 'n1595')
    , edge('n1595', 'n1580')
    , edge('n1580', 'n1585')
    , edge('n1585', 'n1590')
    , edge('n1580', 'n1593')
    , edge('n1593', 'n1579')
    , edge('n1579', 'n1589')
    , edge('n1579', 'n1583')
    , edge('n1583', 'n1587')
    , edge('n1587', 'n1584')
    , edge('n1584', 'n1582')
    , edge('n1582', 'n1592')
    , edge('n787', 'n1604', 'between')
    , edge('n1604', 'n1607')
    , edge('n1607', 'n1597')
    , edge('n1597', 'n1602')
    , edge('n1602', 'n1610')
    , edge('n1610', 'n1601')
    , edge('n1601', 'n1606')
    , edge('n1606', 'n1608')
    , edge('n1608', 'n1605')
    , edge('n1605', 'n1600')
    , edge('n1600', 'n1596')
    , edge('n1596', 'n1611')
    , edge('n1611', 'n1598')
    , edge('n1607', 'n1603')
    , edge('n1603', 'n1599')
    , edge('n1599', 'n1609')
    , edge('n1609', 'n1618', 'between')
    , edge('n1618', 'n1620')
    , edge('n1620', 'n1623')
    , edge('n1618', 'n1613')
    , edge('n1613', 'n1614', 'curve')
    , edge('n1614', 'n1626')
    , edge('n1614', 'n1615')
    , edge('n1615', 'n1619')
    , edge('n1619', 'n1624')
    , edge('n1617', 'n1618', 'curve')
    , edge('n1617', 'n1612')
    , edge('n1612', 'n1616')
    , edge('n1617', 'n1622')
    , edge('n1622', 'n1625')
    , edge('n1625', 'n1621')
    , edge('n1621', 'n1634', 'between')
    , edge('n1634', 'n1630')
    , edge('n1634', 'n1631')
    , edge('n1631', 'n1639')
    , edge('n1639', 'n1641')
    , edge('n1641', 'n1638')
    , edge('n1638', 'n1633')
    , edge('n1639', 'n1628')
    , edge('n1628', 'n1642')
    , edge('n1627', 'n1628', 'curve')
    , edge('n1628', 'n1629', 'curve')
    , edge('n1627', 'n1635')
    , edge('n1629', 'n1636')
    , edge('n1636', 'n1640')
    , edge('n1640', 'n1637')
    , edge('n1637', 'n1632')
    , edge('n1640', 'n1656', 'between')
    , edge('n1656', 'n1648')
    , edge('n1648', 'n1644')
    , edge('n1644', 'n1649')
    , edge('n1649', 'n1657')
    , edge('n1649', 'n1650', 'curve')
    , edge('n1650', 'n1652')
    , edge('n1650', 'n1645')
    , edge('n1645', 'n1658')
    , edge('n1645', 'n1647')
    , edge('n1647', 'n1655')
    , edge('n1647', 'n1643')
    , edge('n1643', 'n1651')
    , edge('n1651', 'n1653')
    , edge('n1645', 'n1646')
    , edge('n1646', 'n1654')
    , edge('n1644', 'n1658')
    , edge('n1654', 'n1760', 'between')
    , edge('n1760', 'n1765')
    , edge('n1765', 'n1768')
    , edge('n1760', 'n1755')
    , edge('n1755', 'n1759')
    , edge('n1759', 'n1764')
    , edge('n1759', 'n1757')
    , edge('n1757', 'n1769')
    , edge('n1757', 'n1766')
    , edge('n1766', 'n1756')
    , edge('n1756', 'n1761')
    , edge('n1757', 'n1758')
    , edge('n1758', 'n1762')
    , edge('n1762', 'n1767')
    , edge('n1767', 'n1763')
    , edge('n1652', 'n1668', 'between')
    , edge('n1668', 'n1663')
    , edge('n1663', 'n1672')
    , edge('n1672', 'n1662')
    , edge('n1662', 'n1666')
    , edge('n1663', 'n1659')
    , edge('n1659', 'n1671')
    , edge('n1671', 'n1669')
    , edge('n1660', 'n1661', 'curve')
    , edge('n1661', 'n1659', 'curve')
    , edge('n1659', 'n1674')
    , edge('n1659', 'n1664')
    , edge('n1664', 'n1673')
    , edge('n1673', 'n1665')
    , edge('n1665', 'n1667')
    , edge('n1667', 'n1670')
    , edge('n1653', 'n1682', 'between')
    , edge('n1682', 'n1678')
    , edge('n1678', 'n1688')
    , edge('n1678', 'n1677')
    , edge('n1677', 'n1675', 'curve')
    , edge('n1675', 'n1690')
    , edge('n1690', 'n1676')
    , edge('n1676', 'n1681')
    , edge('n1681', 'n1683')
    , edge('n1683', 'n1686')
    , edge('n1675', 'n1687')
    , edge('n1687', 'n1684')
    , edge('n1684', 'n1679')
    , edge('n1687', 'n1685')
    , edge('n1685', 'n1680')
    , edge('n1680', 'n1689')
    , edge('n1635', 'n1698', 'between')
    , edge('n1698', 'n1694')
    , edge('n1694', 'n1693')
    , edge('n1693', 'n1702')
    , edge('n1702', 'n1692')
    , edge('n1692', 'n1697')
    , edge('n1697', 'n1699')
    , edge('n1699', 'n1703')
    , edge('n1696', 'n1697', 'curve')
    , edge('n1693', 'n1705')
    , edge('n1705', 'n1691')
    , edge('n1691', 'n1695')
    , edge('n1696', 'n1701')
    , edge('n1701', 'n1704')
    , edge('n1704', 'n1700')
    , edge('n1696', 'n1718', 'between')
    , edge('n1718', 'n1710')
    , edge('n1717', 'n1709')
    , edge('n1709', 'n1710', 'curve')
    , edge('n1710', 'n1708')
    , edge('n1708', 'n1706', 'curve')
    , edge('n1706', 'n1721')
    , edge('n1706', 'n1714')
    , edge('n1714', 'n1716')
    , edge('n1706', 'n1711')
    , edge('n1711', 'n1707')
    , edge('n1707', 'n1712')
    , edge('n1712', 'n1720')
    , edge('n1712', 'n1713', 'curve')
    , edge('n1713', 'n1715')
    , edge('n1711', 'n1719')
    , edge('n1719', 'n801', 'between')
    , edge('n1624', 'n1730', 'between')
    , edge('n1730', 'n1727')
    , edge('n1727', 'n1732')
    , edge('n1730', 'n1728')
    , edge('n1728', 'n1733')
    , edge('n1733', 'n1736')
    , edge('n1736', 'n1734')
    , edge('n1734', 'n1723')
    , edge('n1724', 'n1722', 'curve')
    , edge('n1722', 'n1723', 'curve')
    , edge('n1722', 'n1737')
    , edge('n1724', 'n1731')
    , edge('n1731', 'n1735')
    , edge('n1731', 'n1725')
    , edge('n1725', 'n1729')
    , edge('n1729', 'n1726')
    , edge('n1726', 'n1734')
    , edge('n1729', 'n1750', 'between')
    , edge('n1750', 'n1753')
    , edge('n1753', 'n1741')
    , edge('n1741', 'n1751')
    , edge('n1751', 'n1743')
    , edge('n1741', 'n1754')
    , edge('n1754', 'n1746')
    , edge('n1754', 'n1739')
    , edge('n1739', 'n1752')
    , edge('n1752', 'n1749')
    , edge('n1752', 'n1748')
    , edge('n1748', 'n1742')
    , edge('n1742', 'n1738')
    , edge('n1753', 'n1740')
    , edge('n1740', 'n1745')
    , edge('n1745', 'n1747')
    , edge('n1747', 'n1744')
    , edge('n496', 'n1781', 'between')
    , edge('n1781', 'n1777')
    , edge('n1777', 'n1773')
    , edge('n1781', 'n1778')
    , edge('n1778', 'n1776')
    , edge('n1776', 'n1771')
    , edge('n1771', 'n1785')
    , edge('n1785', 'n1772')
    , edge('n1772', 'n1774')
    , edge('n1774', 'n1783')
    , edge('n1785', 'n1770')
    , edge('n1770', 'n1775')
    , edge('n1775', 'n1780')
    , edge('n1780', 'n1782')
    , edge('n1782', 'n1779')
    , edge('n1775', 'n1776', 'curve')
    , edge('n1775', 'n1784')
    , edge('n1784', 'n1828', 'between')
    , edge('n1828', 'n1832')
    , edge('n1832', 'n1819')
    , edge('n1819', 'n1829')
    , edge('n1819', 'n1834')
    , edge('n1834', 'n1820')
    , edge('n1820', 'n1825')
    , edge('n1825', 'n1827')
    , edge('n1827', 'n1824')
    , edge('n1820', 'n1830')
    , edge('n1830', 'n1833')
    , edge('n1833', 'n1831')
    , edge('n1831', 'n1821')
    , edge('n1821', 'n1823')
    , edge('n1823', 'n1826')
    , edge('n1826', 'n1822')
    , edge('n1822', 'n1818')
    , edge('n1818', 'n1828')
    , edge('n1826', 'n1810', 'between')
    , edge('n1810', 'n1807')
    , edge('n1807', 'n1812')
    , edge('n1812', 'n1815')
    , edge('n1810', 'n1802')
    , edge('n1803', 'n1804', 'curve')
    , edge('n1804', 'n1802', 'curve')
    , edge('n1804', 'n1817')
    , edge('n1803', 'n1814')
    , edge('n1814', 'n1816')
    , edge('n1816', 'n1813')
    , edge('n1813', 'n1808')
    , edge('n1814', 'n1806')
    , edge('n1806', 'n1809')
    , edge('n1809', 'n1805')
    , edge('n1805', 'n1811')
    , edge('n1831', 'n1799', 'between')
    , edge('n1799', 'n1790')
    , edge('n1790', 'n1795')
    , edge('n1795', 'n1798')
    , edge('n1798', 'n1796')
    , edge('n1790', 'n1786')
    , edge('n1786', 'n1801')
    , edge('n1801', 'n1787')
    , edge('n1787', 'n1788', 'curve')
    , edge('n1788', 'n1789')
    , edge('n1789', 'n1793')
    , edge('n1793', 'n1797')
    , edge('n1797', 'n1794')
    , edge('n1794', 'n1792')
    , edge('n1792', 'n1787')
    , edge('n1792', 'n1800')
    , edge('n1800', 'n1791')
    , edge('n1791', 'n1786')
    , edge('n1539', 'n1797', 'between')
    , edge('n1704', 'n1847', 'between')
    , edge('n1847', 'n1843')
    , edge('n1843', 'n1841')
    , edge('n1840', 'n1841', 'curve')
    , edge('n1840', 'n1835')
    , edge('n1835', 'n1839')
    , edge('n1839', 'n1844')
    , edge('n1844', 'n1848')
    , edge('n1848', 'n1845')
    , edge('n1838', 'n1839', 'curve')
    , edge('n1838', 'n1842')
    , edge('n1835', 'n1849')
    , edge('n1849', 'n1836')
    , edge('n1836', 'n1846')
    , edge('n1846', 'n1837')
    , edge('n1848', 'n1857', 'between')
    , edge('n1857', 'n1853')
    , edge('n1853', 'n1859')
    , edge('n1859', 'n1852')
    , edge('n1852', 'n1865')
    , edge('n1865', 'n1851')
    , edge('n1851', 'n1862')
    , edge('n1862', 'n1854')
    , edge('n1854', 'n1857')
    , edge('n1859', 'n1863')
    , edge('n1863', 'n1860')
    , edge('n1865', 'n1850')
    , edge('n1850', 'n1858')
    , edge('n1858', 'n1855')
    , edge('n1858', 'n1856')
    , edge('n1862', 'n1864')
    , edge('n1864', 'n1861')
    , edge('n1864', 'n1876', 'between')
    , edge('n1876', 'n1870')
    , edge('n1870', 'n1866')
    , edge('n1866', 'n1882')
    , edge('n1882', 'n1874')
    , edge('n1874', 'n1871')
    , edge('n1871', 'n1879')
    , edge('n1876', 'n1880')
    , edge('n1880', 'n1877')
    , edge('n1882', 'n1868')
    , edge('n1868', 'n1873')
    , edge('n1873', 'n1875')
    , edge('n1875', 'n1872')
    , edge('n1872', 'n1867')
    , edge('n1873', 'n1878')
    , edge('n1878', 'n1881')
    , edge('n1881', 'n1869')
    , edge('n1875', 'n1927', 'between')
    , edge('n1927', 'n1923')
    , edge('n1923', 'n1921')
    , edge('n1927', 'n1922')
    , edge('n1922', 'n1918')
    , edge('n1918', 'n1917')
    , edge('n1917', 'n1926')
    , edge('n1926', 'n1916')
    , edge('n1916', 'n1920')
    , edge('n1920', 'n1925')
    , edge('n1925', 'n1928')
    , edge('n1915', 'n1929')
    , edge('n1915', 'n1916', 'curve')
    , edge('n1915', 'n1919')
    , edge('n1919', 'n1924')
    , edge('n1878', 'n1895', 'between')
    , edge('n1886', 'n1887', 'curve')
    , edge('n1887', 'n1895')
    , edge('n1886', 'n1894')
    , edge('n1886', 'n1885')
    , edge('n1884', 'n1885', 'curve')
    , edge('n1885', 'n1883', 'curve')
    , edge('n1883', 'n1898')
    , edge('n1883', 'n1891')
    , edge('n1891', 'n1893')
    , edge('n1891', 'n1888', 'curve')
    , edge('n1888', 'n1884')
    , edge('n1884', 'n1890')
    , edge('n1890', 'n1892')
    , edge('n1884', 'n1889')
    , edge('n1889', 'n1897')
    , edge('n1888', 'n1896')
    , edge('n1896', 'n1909', 'between')
    , edge('n1909', 'n1912')
    , edge('n1912', 'n1908')
    , edge('n1908', 'n1902')
    , edge('n1908', 'n1901')
    , edge('n1901', 'n1899', 'curve')
    , edge('n1899', 'n1900', 'curve')
    , edge('n1899', 'n1914')
    , edge('n1900', 'n1911')
    , edge('n1911', 'n1903')
    , edge('n1903', 'n1906')
    , edge('n1911', 'n1913')
    , edge('n1913', 'n1910')
    , edge('n1899', 'n1907')
    , edge('n1907', 'n1904')
    , edge('n1907', 'n1905')
    , edge('n1911', 'n497', 'between')
    , edge('n1767', 'n1938', 'between')
    , edge('n1938', 'n1936')
    , edge('n1936', 'n1941')
    , edge('n1941', 'n1944')
    , edge('n1938', 'n1930')
    , edge('n1932', 'n1930', 'curve')
    , edge('n1931', 'n1932', 'curve')
    , edge('n1932', 'n1939')
    , edge('n1932', 'n1945')
    , edge('n1939', 'n1933')
    , edge('n1939', 'n1943')
    , edge('n1943', 'n1940')
    , edge('n1940', 'n1935')
    , edge('n1931', 'n1942')
    , edge('n1942', 'n1934')
    , edge('n1934', 'n1937')
    , edge('n1937', 'n1975', 'between')
    , edge('n1975', 'n1967')
    , edge('n1967', 'n1965')
    , edge('n1965', 'n1966')
    , edge('n1965', 'n1978')
    , edge('n1966', 'n1974')
    , edge('n1967', 'n1971', 'curve')
    , edge('n1971', 'n1973')
    , edge('n1971', 'n1968', 'curve')
    , edge('n1968', 'n1976')
    , edge('n1968', 'n1969', 'curve')
    , edge('n1969', 'n1977')
    , edge('n1969', 'n1964')
    , edge('n1964', 'n1970')
    , edge('n1970', 'n1972')
    , edge('n1963', 'n1968')
    , edge('n1965', 'n1963', 'curve')
    , edge('n1963', 'n1964', 'curve')
    , edge('n1976', 'n1956', 'between')
    , edge('n1956', 'n1946')
    , edge('n1946', 'n1950')
    , edge('n1950', 'n1954')
    , edge('n1954', 'n1951')
    , edge('n1951', 'n1949')
    , edge('n1949', 'n1959')
    , edge('n1949', 'n1961')
    , edge('n1949', 'n1962')
    , edge('n1962', 'n1947')
    , edge('n1961', 'n1958')
    , edge('n1958', 'n1948')
    , edge('n1948', 'n1953')
    , edge('n1953', 'n1955')
    , edge('n1955', 'n1952')
    , edge('n1952', 'n1947')
    , edge('n1947', 'n1957')
    , edge('n1957', 'n1960')
    , edge('n1960', 'n1956')
    , edge('n1959', 'n1735', 'between')
    , edge('n1751', 'n1982', 'between')
    , edge('n1982', 'n1981')
    , edge('n1982', 'n1986')
    , edge('n1986', 'n1990')
    , edge('n1990', 'n1980')
    , edge('n1980', 'n1985')
    , edge('n1980', 'n1993')
    , edge('n1985', 'n1987')
    , edge('n1987', 'n1991')
    , edge('n1984', 'n1985', 'curve')
    , edge('n1984', 'n1979')
    , edge('n1979', 'n1983')
    , edge('n1984', 'n1989')
    , edge('n1989', 'n1992')
    , edge('n1992', 'n1988')
    , edge('n1984', 'n2004', 'between')
    , edge('n2004', 'n1999')
    , edge('n1999', 'n2002')
    , edge('n2002', 'n2000')
    , edge('n2000', 'n2005')
    , edge('n2005', 'n2008')
    , edge('n2008', 'n2006')
    , edge('n2006', 'n1998')
    , edge('n1998', 'n2001')
    , edge('n2001', 'n1997')
    , edge('n2006', 'n1995')
    , edge('n1994', 'n1995', 'curve')
    , edge('n1995', 'n1996', 'curve')
    , edge('n1994', 'n2009')
    , edge('n1996', 'n2003')
    , edge('n2003', 'n2007')
    , edge('n2008', 'n2022', 'between')
    , edge('n2022', 'n2014')
    , edge('n2014', 'n2018', 'curve')
    , edge('n2018', 'n2020')
    , edge('n2018', 'n2010')
    , edge('n2010', 'n2011', 'curve')
    , edge('n2011', 'n2012', 'curve')
    , edge('n2012', 'n2025')
    , edge('n2012', 'n2013')
    , edge('n2013', 'n2021')
    , edge('n2010', 'n2015')
    , edge('n2015', 'n2023')
    , edge('n2015', 'n2016', 'curve')
    , edge('n2016', 'n2017', 'curve')
    , edge('n2017', 'n2019')
    , edge('n2016', 'n2024')
    , edge('n2024', 'n1589', 'between')
    , edge('n1746', 'n2038', 'between')
    , edge('n2038', 'n2035')
    , edge('n2038', 'n2036')
    , edge('n2036', 'n2031')
    , edge('n2031', 'n2040')
    , edge('n2038', 'n2026')
    , edge('n2027', 'n2028', 'curve')
    , edge('n2028', 'n2026', 'curve')
    , edge('n2028', 'n2029')
    , edge('n2028', 'n2041')
    , edge('n2029', 'n2030', 'curve')
    , edge('n2030', 'n2039')
    , edge('n2027', 'n2032')
    , edge('n2032', 'n2034')
    , edge('n2034', 'n2037')
    , edge('n2037', 'n2033')
    , edge('n1991', 'n2054', 'between')
    , edge('n2054', 'n2052')
    , edge('n2052', 'n2047')
    , edge('n2047', 'n2056')
    , edge('n2056', 'n2048')
    , edge('n2048', 'n2050')
    , edge('n2050', 'n2053')
    , edge('n2053', 'n2049')
    , edge('n2054', 'n2042')
    , edge('n2042', 'n2046')
    , edge('n2046', 'n2051')
    , edge('n2042', 'n2043', 'curve')
    , edge('n2043', 'n2044', 'curve')
    , edge('n2044', 'n2045')
    , edge('n2045', 'n2055')
    , edge('n2043', 'n2047')
    , edge('n2043', 'n2057')
    , edge('n2001', 'n2070', 'between')
    , edge('n2070', 'n2067')
    , edge('n2067', 'n2062')
    , edge('n2062', 'n2071')
    , edge('n2070', 'n2068')
    , edge('n2068', 'n2063')
    , edge('n2063', 'n2059')
    , edge('n2059', 'n2064')
    , edge('n2059', 'n2073')
    , edge('n2064', 'n2072')
    , edge('n2063', 'n2058')
    , edge('n2060', 'n2058', 'curve')
    , edge('n2060', 'n2061')
    , edge('n2061', 'n2065')
    , edge('n2065', 'n2069')
    , edge('n2069', 'n2066')
    , edge('n2019', 'n2086', 'between')
    , edge('n2086', 'n2074')
    , edge('n2074', 'n2078')
    , edge('n2078', 'n2083')
    , edge('n2078', 'n2087')
    , edge('n2087', 'n2077')
    , edge('n2077', 'n2081')
    , edge('n2077', 'n2076')
    , edge('n2075', 'n2076', 'curve')
    , edge('n2076', 'n2089')
    , edge('n2086', 'n2084')
    , edge('n2084', 'n2079')
    , edge('n2079', 'n2080', 'curve')
    , edge('n2080', 'n2088')
    , edge('n2080', 'n2082')
    , edge('n2082', 'n2085')
    , edge('n1768', 'n2097', 'between')
    , edge('n2097', 'n2094')
    , edge('n2097', 'n2093')
    , edge('n2093', 'n2099')
    , edge('n2099', 'n2103')
    , edge('n2103', 'n2100')
    , edge('n2099', 'n2092')
    , edge('n2092', 'n2090', 'curve')
    , edge('n2090', 'n2091', 'curve')
    , edge('n2091', 'n2102')
    , edge('n2091', 'n2105')
    , edge('n2105', 'n2092')
    , edge('n2102', 'n2104')
    , edge('n2104', 'n2101')
    , edge('n2090', 'n2098')
    , edge('n2098', 'n2095')
    , edge('n2098', 'n2096')
    , edge('n2098', 'n2117', 'between')
    , edge('n2117', 'n2109')
    , edge('n2113', 'n2109', 'curve')
    , edge('n2115', 'n2113')
    , edge('n2109', 'n2110', 'curve')
    , edge('n2110', 'n2118')
    , edge('n2109', 'n2108')
    , edge('n2107', 'n2108', 'curve')
    , edge('n2106', 'n2107', 'curve')
    , edge('n2110', 'n2106')
    , edge('n2107', 'n2112')
    , edge('n2107', 'n2121')
    , edge('n2112', 'n2120')
    , edge('n2106', 'n2114')
    , edge('n2114', 'n2116')
    , edge('n2114', 'n2111', 'curve')
    , edge('n2111', 'n2119')
    , edge('n2119', 'n2132', 'between')
    , edge('n2132', 'n2126')
    , edge('n2126', 'n2122')
    , edge('n2122', 'n2136')
    , edge('n2136', 'n2133')
    , edge('n2133', 'n2123')
    , edge('n2123', 'n2128')
    , edge('n2128', 'n2131')
    , edge('n2131', 'n2129')
    , edge('n2129', 'n2124')
    , edge('n2124', 'n2134')
    , edge('n2134', 'n2137')
    , edge('n2137', 'n1839', 'between')
    , edge('n2137', 'n2125')
    , edge('n2125', 'n2135')
    , edge('n2125', 'n2138')
    , edge('n2138', 'n2123')
    , edge('n2135', 'n2127')
    , edge('n2127', 'n2130')
    , edge('n1863', 'n2153', 'between')
    , edge('n2153', 'n2144')
    , edge('n2144', 'n2149')
    , edge('n2149', 'n2151')
    , edge('n2151', 'n2148')
    , edge('n2144', 'n2139')
    , edge('n2139', 'n2143')
    , edge('n2143', 'n2152')
    , edge('n2152', 'n2142')
    , edge('n2144', 'n2140')
    , edge('n2140', 'n2141', 'curve')
    , edge('n2140', 'n2154')
    , edge('n2141', 'n2150')
    , edge('n2150', 'n2146')
    , edge('n2150', 'n2147')
    , edge('n2147', 'n2145')
    , edge('n1919', 'n2170', 'between')
    , edge('n2170', 'n2171')
    , edge('n2171', 'n2169')
    , edge('n2170', 'n2168')
    , edge('n2170', 'n2157')
    , edge('n2157', 'n2162')
    , edge('n2162', 'n2167')
    , edge('n2162', 'n2164')
    , edge('n2164', 'n2161')
    , edge('n2161', 'n2156')
    , edge('n2156', 'n2169')
    , edge('n2169', 'n2166')
    , edge('n2169', 'n2165')
    , edge('n2165', 'n2155')
    , edge('n2155', 'n2159')
    , edge('n2159', 'n2163')
    , edge('n2170', 'n2158')
    , edge('n2158', 'n2160')
    , edge('n2169', 'n2186', 'between')
    , edge('n2186', 'n2178')
    , edge('n2178', 'n2180')
    , edge('n2186', 'n2177')
    , edge('n2177', 'n2182')
    , edge('n2182', 'n2184')
    , edge('n2177', 'n2173')
    , edge('n2172', 'n2173', 'curve')
    , edge('n2173', 'n2174', 'curve')
    , edge('n2174', 'n2187')
    , edge('n2187', 'n2172')
    , edge('n2174', 'n2175')
    , edge('n2175', 'n2179')
    , edge('n2179', 'n2183')
    , edge('n2172', 'n2176')
    , edge('n2176', 'n2181')
    , edge('n2176', 'n2185')
    , edge('n1907', 'n2217', 'between')
    , edge('n2217', 'n2207')
    , edge('n2207', 'n2219')
    , edge('n2219', 'n2216')
    , edge('n2216', 'n2206')
    , edge('n2206', 'n2211')
    , edge('n2211', 'n2213')
    , edge('n2213', 'n2210')
    , edge('n2210', 'n2215')
    , edge('n2215', 'n2205')
    , edge('n2205', 'n2218')
    , edge('n2218', 'n2204')
    , edge('n2204', 'n2214')
    , edge('n2214', 'n2208')
    , edge('n2208', 'n2212')
    , edge('n2212', 'n2209')
    , edge('n2212', 'n2220')
    , edge('n2220', 'n2213')
    , edge('n2209', 'n2207')
    , edge('n2218', 'n2202', 'between')
    , edge('n2202', 'n2193')
    , edge('n2193', 'n2198')
    , edge('n2202', 'n2194')
    , edge('n2194', 'n2196')
    , edge('n2196', 'n2199')
    , edge('n2199', 'n2195')
    , edge('n2194', 'n2189')
    , edge('n2189', 'n2203')
    , edge('n2188', 'n2189', 'curve')
    , edge('n2189', 'n2190', 'curve')
    , edge('n2190', 'n2191')
    , edge('n2191', 'n2201')
    , edge('n2188', 'n2192')
    , edge('n2192', 'n2197')
    , edge('n2197', 'n2200')
    , edge('n416', 'n2233', 'between')
    , edge('n2233', 'n2235')
    , edge('n2235', 'n2232')
    , edge('n2233', 'n2222')
    , edge('n2222', 'n2236')
    , edge('n2236', 'n2221')
    , edge('n2221', 'n2229')
    , edge('n2229', 'n2227')
    , edge('n2236', 'n2223')
    , edge('n2223', 'n2230')
    , edge('n2230', 'n2224')
    , edge('n2224', 'n2228')
    , edge('n2228', 'n2225')
    , edge('n2230', 'n2234')
    , edge('n2234', 'n2231')
    , edge('n2231', 'n2226')
    , edge('n259', 'n2248', 'between')
    , edge('n2248', 'n2251')
    , edge('n2251', 'n2249')
    , edge('n2248', 'n2243')
    , edge('n2243', 'n2245')
    , edge('n2245', 'n2237')
    , edge('n2237', 'n2252')
    , edge('n2252', 'n2238')
    , edge('n2238', 'n2239', 'curve')
    , edge('n2239', 'n2246')
    , edge('n2246', 'n2240')
    , edge('n2240', 'n2244')
    , edge('n2244', 'n2241')
    , edge('n2246', 'n2250')
    , edge('n2250', 'n2247')
    , edge('n2247', 'n2242')
    , edge('n880', 'n2261', 'between')
    , edge('n2261', 'n2259')
    , edge('n2259', 'n2254')
    , edge('n2254', 'n2255', 'curve')
    , edge('n2255', 'n2268')
    , edge('n2259', 'n2267')
    , edge('n2267', 'n2258')
    , edge('n2258', 'n2263')
    , edge('n2263', 'n2265')
    , edge('n2258', 'n2253')
    , edge('n2253', 'n2257')
    , edge('n2257', 'n2262')
    , edge('n2257', 'n2266')
    , edge('n2266', 'n2256')
    , edge('n2256', 'n2260')
    , edge('n2260', 'n2264')
    , edge('n877', 'n2278', 'between')
    , edge('n2278', 'n2273')
    , edge('n2273', 'n2282')
    , edge('n2282', 'n2272')
    , edge('n2272', 'n2276')
    , edge('n2276', 'n2280')
    , edge('n2280', 'n2277')
    , edge('n2280', 'n2271')
    , edge('n2271', 'n2284')
    , edge('n2273', 'n2269')
    , edge('n2269', 'n2274')
    , edge('n2274', 'n2270')
    , edge('n2270', 'n2275')
    , edge('n2275', 'n2283')
    , edge('n2274', 'n2279')
    , edge('n2279', 'n2281')
    , edge('n1248', 'n2298', 'between')
    , edge('n2298', 'n2294')
    , edge('n2298', 'n2295')
    , edge('n2295', 'n2290')
    , edge('n2290', 'n2285')
    , edge('n2285', 'n2286', 'curve')
    , edge('n2286', 'n2296')
    , edge('n2296', 'n2287')
    , edge('n2287', 'n2299')
    , edge('n2286', 'n2291')
    , edge('n2291', 'n2293')
    , edge('n2293', 'n2297')
    , edge('n2285', 'n2289')
    , edge('n2288', 'n2289', 'curve')
    , edge('n2288', 'n2292')
    , edge('n2289', 'n2313', 'between')
    , edge('n2313', 'n2305')
    , edge('n2305', 'n2306', 'curve')
    , edge('n2306', 'n2301')
    , edge('n2306', 'n2314')
    , edge('n2309', 'n2307')
    , edge('n2307', 'n2303', 'curve')
    , edge('n2303', 'n2304', 'curve')
    , edge('n2304', 'n2308', 'curve')
    , edge('n2308', 'n2305', 'curve')
    , edge('n2310', 'n2308')
    , edge('n2312', 'n2304')
    , edge('n2311', 'n2303')
    , edge('n2305', 'n2300')
    , edge('n2302', 'n2300', 'curve')
    , edge('n2302', 'n2315')
    , edge('n2311', 'n2330', 'between')
    , edge('n2330', 'n2322')
    , edge('n2322', 'n2324')
    , edge('n2330', 'n2321')
    , edge('n2321', 'n2326')
    , edge('n2321', 'n2316')
    , edge('n2316', 'n2328')
    , edge('n2316', 'n2320')
    , edge('n2320', 'n2325')
    , edge('n2318', 'n2316', 'curve')
    , edge('n2316', 'n2317', 'curve')
    , edge('n2317', 'n2331')
    , edge('n2331', 'n2318')
    , edge('n2318', 'n2319')
    , edge('n2319', 'n2329')
    , edge('n2319', 'n2323')
    , edge('n2323', 'n2327')
    , edge('n1252', 'n2344', 'between')
    , edge('n2344', 'n2336')
    , edge('n2335', 'n2336', 'curve')
    , edge('n2343', 'n2335')
    , edge('n2336', 'n2332')
    , edge('n2332', 'n2340')
    , edge('n2332', 'n2347')
    , edge('n2340', 'n2342')
    , edge('n2340', 'n2337', 'curve')
    , edge('n2337', 'n2333')
    , edge('n2337', 'n2345')
    , edge('n2333', 'n2334', 'curve')
    , edge('n2334', 'n2339')
    , edge('n2339', 'n2341')
    , edge('n2333', 'n2338')
    , edge('n2338', 'n2346')
    , edge('n2345', 'n2358', 'between')
    , edge('n2358', 'n2353')
    , edge('n2353', 'n2356')
    , edge('n2356', 'n2354')
    , edge('n2354', 'n2359')
    , edge('n2356', 'n2348')
    , edge('n2350', 'n2348', 'curve')
    , edge('n2350', 'n2357')
    , edge('n2350', 'n2363')
    , edge('n2357', 'n2361')
    , edge('n2357', 'n2351')
    , edge('n2348', 'n2349', 'curve')
    , edge('n2349', 'n2360')
    , edge('n2360', 'n2362')
    , edge('n2360', 'n2352')
    , edge('n2352', 'n2355')
    , edge('n2355', 'n2370', 'between')
    , edge('n2370', 'n2373')
    , edge('n2373', 'n2371')
    , edge('n2371', 'n2366')
    , edge('n2366', 'n2376')
    , edge('n2376', 'n2379')
    , edge('n2379', 'n2367')
    , edge('n2367', 'n2377')
    , edge('n2377', 'n2369')
    , edge('n2369', 'n2372')
    , edge('n2372', 'n2368')
    , edge('n2368', 'n2374')
    , edge('n2374', 'n2364')
    , edge('n2364', 'n2378')
    , edge('n2378', 'n2375')
    , edge('n2379', 'n2380')
    , edge('n2380', 'n2378')
    , edge('n2375', 'n2365')
    , edge('n2365', 'n2370')
    , edge('n2378', 'n2395', 'between')
    , edge('n2395', 'n2392')
    , edge('n2392', 'n2387')
    , edge('n2395', 'n2393')
    , edge('n2393', 'n2385')
    , edge('n2393', 'n2382')
    , edge('n2381', 'n2382', 'curve')
    , edge('n2381', 'n2389')
    , edge('n2389', 'n2386')
    , edge('n2382', 'n2383', 'curve')
    , edge('n2382', 'n2396')
    , edge('n2383', 'n2390')
    , edge('n2390', 'n2384')
    , edge('n2384', 'n2388')
    , edge('n2390', 'n2394')
    , edge('n2394', 'n2391')
    , edge('n2391', 'n2290', 'between')
    , edge('n2356', 'n1332', 'between')
    , edge('n1336', 'n2401', 'between')
    , edge('n2401', 'n2399')
    , edge('n2399', 'n2408')
    , edge('n2399', 'n2400')
    , edge('n2400', 'n2404')
    , edge('n2404', 'n2409')
    , edge('n2409', 'n2405')
    , edge('n2405', 'n2403')
    , edge('n2403', 'n2398')
    , edge('n2397', 'n2398', 'curve')
    , edge('n2397', 'n2411')
    , edge('n2398', 'n2402')
    , edge('n2402', 'n2407')
    , edge('n2407', 'n2410')
    , edge('n2410', 'n2406')
    , edge('n2409', 'n2424', 'between')
    , edge('n2424', 'n2421')
    , edge('n2421', 'n2416')
    , edge('n2424', 'n2422')
    , edge('n2422', 'n2417')
    , edge('n2424', 'n2412')
    , edge('n2412', 'n2413', 'curve')
    , edge('n2413', 'n2418')
    , edge('n2418', 'n2426')
    , edge('n2418', 'n2420')
    , edge('n2420', 'n2423')
    , edge('n2423', 'n2419')
    , edge('n2414', 'n2412', 'curve')
    , edge('n2414', 'n2415')
    , edge('n2414', 'n2427')
    , edge('n2427', 'n2413')
    , edge('n2415', 'n2425')
    , edge('n1571', 'n2437', 'between')
    , edge('n2437', 'n2435')
    , edge('n2435', 'n2430')
    , edge('n2430', 'n2431')
    , edge('n2431', 'n2439')
    , edge('n2429', 'n2430', 'curve')
    , edge('n2429', 'n2434')
    , edge('n2434', 'n2442')
    , edge('n2429', 'n2433')
    , edge('n2433', 'n2441')
    , edge('n2433', 'n2428')
    , edge('n2428', 'n2436')
    , edge('n2428', 'n2443')
    , edge('n2436', 'n2438')
    , edge('n2428', 'n2432')
    , edge('n2432', 'n2440')
    , edge('n2440', 'n2449', 'between')
    , edge('n2449', 'n2454')
    , edge('n2454', 'n2456')
    , edge('n2449', 'n2458')
    , edge('n2458', 'n2450')
    , edge('n2450', 'n2452')
    , edge('n2450', 'n2445')
    , edge('n2444', 'n2445', 'curve')
    , edge('n2444', 'n2448')
    , edge('n2448', 'n2453')
    , edge('n2445', 'n2446', 'curve')
    , edge('n2446', 'n2447')
    , edge('n2446', 'n2459')
    , edge('n2459', 'n2444')
    , edge('n2447', 'n2457')
    , edge('n2447', 'n2451')
    , edge('n2451', 'n2455')
    , edge('n2438', 'n2471', 'between')
    , edge('n2471', 'n2468')
    , edge('n2468', 'n2466')
    , edge('n2466', 'n2474')
    , edge('n2474', 'n2465')
    , edge('n2465', 'n2470')
    , edge('n2470', 'n2472')
    , edge('n2472', 'n2469')
    , edge('n2472', 'n2460')
    , edge('n2460', 'n2461', 'curve')
    , edge('n2461', 'n2471')
    , edge('n2461', 'n2475')
    , edge('n2462', 'n2460', 'curve')
    , edge('n2462', 'n2463')
    , edge('n2463', 'n2467')
    , edge('n2463', 'n2473')
    , edge('n2473', 'n2464')
    , edge('n1508', 'n2484', 'between')
    , edge('n2484', 'n2488')
    , edge('n2488', 'n2483')
    , edge('n2483', 'n2479')
    , edge('n2484', 'n2482')
    , edge('n2481', 'n2482', 'curve')
    , edge('n2482', 'n2477')
    , edge('n2477', 'n2487')
    , edge('n2487', 'n2478')
    , edge('n2481', 'n2476')
    , edge('n2476', 'n2480')
    , edge('n2476', 'n2490')
    , edge('n2480', 'n2485')
    , edge('n2480', 'n2442', 'between')
    , edge('n2481', 'n2486')
    , edge('n2486', 'n2489')
    , edge('n2489', 'n2502', 'between')
    , edge('n2502', 'n2498')
    , edge('n2498', 'n2494')
    , edge('n2494', 'n2504')
    , edge('n2502', 'n2499')
    , edge('n2499', 'n2497')
    , edge('n2497', 'n2505')
    , edge('n2502', 'n2493')
    , edge('n2492', 'n2493', 'curve')
    , edge('n2493', 'n2495')
    , edge('n2495', 'n2500')
    , edge('n2492', 'n2496')
    , edge('n2496', 'n2491')
    , edge('n2491', 'n2506')
    , edge('n2496', 'n2501')
    , edge('n2501', 'n2503')
    , edge('n2481', 'n2520', 'between')
    , edge('n2520', 'n2517')
    , edge('n2517', 'n2512')
    , edge('n2520', 'n2516')
    , edge('n2516', 'n2510')
    , edge('n2510', 'n2514')
    , edge('n2516', 'n2509')
    , edge('n2509', 'n2522')
    , edge('n2522', 'n2508')
    , edge('n2508', 'n2519')
    , edge('n2519', 'n2511')
    , edge('n2519', 'n2521')
    , edge('n2522', 'n2507')
    , edge('n2507', 'n2515')
    , edge('n2515', 'n2513')
    , edge('n2513', 'n2518')
    , edge('n2515', 'n2534', 'between')
    , edge('n2534', 'n2525')
    , edge('n2534', 'n2530')
    , edge('n2530', 'n2526')
    , edge('n2526', 'n2536')
    , edge('n2536', 'n2527')
    , edge('n2527', 'n2532')
    , edge('n2532', 'n2535')
    , edge('n2535', 'n2533')
    , edge('n2527', 'n2523')
    , edge('n2523', 'n2524', 'curve')
    , edge('n2524', 'n2529')
    , edge('n2524', 'n2538')
    , edge('n2529', 'n2531')
    , edge('n2529', 'n2537')
    , edge('n2537', 'n2528')
    , edge('n2521', 'n2553', 'between')
    , edge('n2553', 'n2539')
    , edge('n2553', 'n2555')
    , edge('n2555', 'n2554')
    , edge('n2539', 'n2549')
    , edge('n2549', 'n2543')
    , edge('n2543', 'n2547')
    , edge('n2553', 'n2540')
    , edge('n2540', 'n2550')
    , edge('n2550', 'n2545')
    , edge('n2545', 'n2548')
    , edge('n2548', 'n2546')
    , edge('n2546', 'n2551')
    , edge('n2551', 'n2541')
    , edge('n2541', 'n2554')
    , edge('n2554', 'n2542')
    , edge('n2542', 'n2544')
    , edge('n2544', 'n2552')
    , edge('n2548', 'n2567', 'between')
    , edge('n2567', 'n2563')
    , edge('n2563', 'n2559')
    , edge('n2559', 'n2569')
    , edge('n2567', 'n2557')
    , edge('n2557', 'n2561')
    , edge('n2561', 'n2570')
    , edge('n2570', 'n2562')
    , edge('n2562', 'n2564')
    , edge('n2561', 'n2556')
    , edge('n2558', 'n2556', 'curve')
    , edge('n2558', 'n2560')
    , edge('n2558', 'n2571')
    , edge('n2561', 'n2566')
    , edge('n2566', 'n2568')
    , edge('n2568', 'n2565')
    , edge('n2514', 'n2582', 'between')
    , edge('n2582', 'n2580')
    , edge('n2580', 'n2572')
    , edge('n2572', 'n2576')
    , edge('n2572', 'n2587')
    , edge('n2587', 'n2574')
    , edge('n2576', 'n2584')
    , edge('n2572', 'n2573', 'curve')
    , edge('n2573', 'n2574', 'curve')
    , edge('n2574', 'n2575')
    , edge('n2575', 'n2583')
    , edge('n2581', 'n2579')
    , edge('n2579', 'n2575', 'curve')
    , edge('n2573', 'n2578')
    , edge('n2578', 'n2586')
    , edge('n2573', 'n2577')
    , edge('n2577', 'n2585')
    , edge('n2585', 'n2602', 'between')
    , edge('n2602', 'n2599')
    , edge('n2602', 'n2598')
    , edge('n2598', 'n2588')
    , edge('n2588', 'n2592')
    , edge('n2592', 'n2596')
    , edge('n2596', 'n2593')
    , edge('n2596', 'n2604')
    , edge('n2604', 'n2597')
    , edge('n2593', 'n2601')
    , edge('n2601', 'n2591')
    , edge('n2591', 'n2603')
    , edge('n2603', 'n2600')
    , edge('n2603', 'n2590')
    , edge('n2590', 'n2595')
    , edge('n2595', 'n2597')
    , edge('n2597', 'n2594')
    , edge('n2594', 'n2589')
    , edge('n2601', 'n2608', 'between')
    , edge('n2608', 'n2612')
    , edge('n2612', 'n2617')
    , edge('n2617', 'n2613')
    , edge('n2613', 'n2611')
    , edge('n2608', 'n2607')
    , edge('n2607', 'n2616')
    , edge('n2607', 'n2619')
    , edge('n2616', 'n2606')
    , edge('n2607', 'n2605', 'curve')
    , edge('n2605', 'n2609')
    , edge('n2609', 'n2614')
    , edge('n2605', 'n2610')
    , edge('n2610', 'n2615')
    , edge('n2615', 'n2618')
    , edge('n2618', 'n2628', 'between')
    , edge('n2628', 'n2626')
    , edge('n2626', 'n2634')
    , edge('n2628', 'n2631')
    , edge('n2631', 'n2627')
    , edge('n2627', 'n2623')
    , edge('n2623', 'n2633')
    , edge('n2631', 'n2622')
    , edge('n2620', 'n2621', 'curve')
    , edge('n2621', 'n2622', 'curve')
    , edge('n2622', 'n2635')
    , edge('n2635', 'n2620')
    , edge('n2621', 'n2625')
    , edge('n2625', 'n2630')
    , edge('n2620', 'n2632')
    , edge('n2632', 'n2629')
    , edge('n2629', 'n2624')
    , edge('n124', 'n2646', 'between')
    , edge('n2646', 'n2644')
    , edge('n2641', 'n2642', 'curve')
    , edge('n2642', 'n2643', 'curve')
    , edge('n2643', 'n2639', 'curve')
    , edge('n2639', 'n2640', 'curve')
    , edge('n2640', 'n2644', 'curve')
    , edge('n2640', 'n2648')
    , edge('n2639', 'n2647')
    , edge('n2643', 'n2645')
    , edge('n2642', 'n2650')
    , edge('n2641', 'n2649')
    , edge('n2641', 'n2636')
    , edge('n2637', 'n2638', 'curve')
    , edge('n2638', 'n2636', 'curve')
    , edge('n2637', 'n2651')
    ];

const atlas =
    { name: 'main'
    , nodes: nodesData
    , edges: edgesData
    , mX: 0, mY: 0
    , scale: 1
    , sparks: {got: {}, total: {}}
    , stat: {got: {}, total: {}}
    , group: {skill: {}, stat: {}}
    };

notObserve(atlas, 'polish', (nodesData.length >> 3) + 1);
notObserve(atlas, 'plainData',
    new Array(((nodesData.length >> 3) + 1) * 3), true);
for (let index of [15, 31, 47]) {
    atlas.nodes[index].data.start = true;
    atlas.nodes[index].data.open = true;
    atlas.plainData[index >> 3] = 1 << (8 - (index % 8) - 1);
}
module.exports = atlas;
