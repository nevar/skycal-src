/* jshint jquery: true */
/* globals Vue, base64js, cytoscape */
/* globals mainAtlas, godAtlas */
$(function() {
var vm,
	tempPath = {found: false},
	need =
		{ red: 0, green: 0, blue: 0, all: 0
		, transformation: 0, revelation: 0
		, god: 0, book: 0, secretKnowledge: 0
		, bronze: 0, silver: 0, gold: 0, core: 0
		, fitonidy: 0, fitonidyInfo: 0
		, mehanoydy: 0, mehanoydyInfo:0
		, gorgonidy: 0, gorgonidyInfo: 0
		, reaper: 0, reaperInfo: 0
		, oceanidy: 0, oceanidyInfo: 0
		, demon: 0, demonInfo: 0
		},
	recive =
		{ prestige: 0
		, power: 0, vit: 0
		, str: 0, valor: 0, luck: 0, spirit: 0
		, majesty: 0, dex: 0
		, poisonResist: 0, electricityResist: 0, hypnosisResist: 0
		},
	statName =
		{ prestige: 'Престиж'
		, power: 'Могущество'
		, vit: 'Выносливость'
		, str: 'Сила', valor: 'Отвага', luck: 'Удача', spirit: 'Дух'
		, majesty: 'Величие', dex: 'Сноровка'
		, poisonResist: 'Сопротивление яду'
		, electricityResist: 'Сопротивление электричеству'
		, hypnosisResist: 'Сопротивление гипнозу'
		},
	statDescription =
		{ vit: 'Увеличивает максимальный запас здоровья.'
		, power: 'Увеличивает базовый урон.'
		, spirit: 'Увеличивает импульсный урон.'
		, str: 'Увеличивает максимальную границу базового урона.'
		, luck: 'Увеличивает критический урон.'
		, valor: 'Увеличивает дополнительный урон.'
		, majesty:
			'Позволяет возводить величественные храмы в провинциях Элиона, '+
			'в которых распространено влияние культа.'
		};

function removeNode(atlas, id) {
	id = Number(id);
	/* jshint bitwise: false */
	var pos = id >> 3;

	atlas.plainData[pos] ^= 1 << (7 - id % 8);
	if (atlas.polish) {
		pos = id >> 2;
		atlas.plainData[atlas.polish + pos] &= ~(3 << ((3 - id % 4) * 2));
	}
	/* jshint bitwise: true */
}

function addNode(atlas, id, polish) {
	id = Number(id);
	/* jshint bitwise: false */
	var pos = id >> 3;
	var pos_polish;

	atlas.plainData[pos] |= 1 << (7 - id % 8);
	if (atlas.polish) {
		pos = id >> 2;
		pos_polish = (3 - id % 4) * 2;
		atlas.plainData[atlas.polish + pos] =
			atlas.plainData[atlas.polish + pos] &
				~(3 << pos_polish) | (polish << pos_polish);
	}
	/* jshint bitwise: true */
}

function calcTotal(atlases) {
	var atlas, nodesData, node, nodeData, nodePos;
	var polishPrestige, polishNode, isPolish;

	for (var atlasID in atlases) {
		atlas = atlases[atlasID];
		nodesData = atlases[atlasID].nodes;
		nodePos = {};
		isPolish = atlas._polish;
		polishPrestige = 0;
		polishNode = 0;
		totalPolishCost = 0;
		for (var i in nodesData) {
			node = nodesData[i];
			nodeData = node.data;
			nodePos[nodeData._id] = node._position;
			if (isPolish && node._classes === 'stat' && !nodeData._give.majesty)
			{
				polishNode++;
				polishPrestige += nodeData._give.prestige;
				polishCost = 9999;
				for (var stat in nodeData._give) {
					if (stat === 'dex') { continue; }
					polishCost = Math.min(polishCost, nodeData._give[stat]);
				}
				totalPolishCost += polishCost;
			}
			for (var stat in nodeData._give) {
				atlas.stat.total[stat] =
					(atlas.stat.total[stat] ? atlas.stat.total[stat] : 0) +
					nodeData._give[stat];
			}
			for (var spark in nodeData._need) {
				atlas.sparks.total[spark] =
					(atlas.sparks.total[spark] ? atlas.sparks.total[spark] : 0) +
					nodeData._need[spark];
			}
		}
		if (isPolish) {
			for (var stat in atlas.stat.total) {
				if (stat === 'dex' || stat === 'majesty' || stat === 'prestige')
				{ continue; }
				atlas.stat.total[stat] *= 2.5;
			}
			atlas.stat.total.prestige += polishPrestige * 1.5;
			atlas.sparks.total.bronze = totalPolishCost * 5;
			atlas.sparks.total.silver = totalPolishCost * 10;
			atlas.sparks.total.gold = totalPolishCost * 15;
			atlas.sparks.total.core = polishNode * 3;
		}
		if (atlas.sparks.red) {
			atlas.sparks.total.all =
				atlas.sparks.total.red + atlas.sparks.total.green +
				atlas.sparks.total.blue;
		}
		for (var stat in atlas.stat.total) {
			atlas.stat.got[stat] = 0;
		}
		for (var spark in atlas.sparks.total) {
			atlas.sparks.got[spark] = 0;
		}
		atlas._nodePos = nodePos;
	}
}

function groupSkill(atlases) {
	var atlas, nodesData, node, nodeData, ID, skill, stat, pos, give;

	for (var atlasID in atlases) {
		atlas = atlases[atlasID];
		nodesData = atlases[atlasID].nodes;
		skill = [];
		statGroup = {};
		pos = {};
		for (var i in nodesData) {
			node = nodesData[i];
			nodeData = node.data;
			if (node._classes === 'skill' || node._classes === 'class') {
				ID = nodeData._title;
				if (!pos[ID]) {
					pos[ID] = [];
					skill.push(
						{ title: nodeData._title
						, description: nodeData._description
						, nodeImage: nodeData._nodeImage
						, pos: 0
						, position: pos[ID]
						});
				}
				pos[ID].push(node._position);
			} else if(node._classes === 'stat') {
				for (stat in nodeData._give) {
					if (stat === 'prestige' || stat === 'dex') { continue; }
					if (!statGroup[stat]) {
						statGroup[stat] =
							{ image: ID, pos: 0, node: []
							, give: {}, cost: {}, show: false
							};
					}
					statGroup[stat].node.push(node);
					statGroup[stat].give[nodeData._give[stat]] =
						nodeData._give[stat];

				}
			}
		}
		atlas.group.skill = skill;
		atlas.group.stat = statGroup;
	}
}

function loadAtlas(atlas) {
	var dataString, val, index, nodeCount, l, len, _plainData, size, polishSize;
	var nodeData;
	var cost = ['', 'bronze', 'silver', 'gold'];
	var polishCost;

	/* jshint bitwise: false */
	nodeCount = atlas.nodes.length;
	len = l = (nodeCount >> 3) + 1;
	len += atlas._polish * 2;
	dataString = localStorage['atlas_' + atlas.name] || '';
	_plainData = base64js.toByteArray(dataString);
	if (_plainData.length !== atlas._plainData.length) {
		size = atlas._polish ? _plainData.length / 3 : _plainData.length;
		for (var i = 0; i < size; i++) {
			atlas._plainData[i] = _plainData[i];
		}
		polishSize = atlas._polish ? 2 * _plainData.length / 3 : 0;
		for (var i = 0; i < polishSize; i++) {
			atlas._plainData[l + i] = _plainData[size + i];
		}
		_plainData = atlas._plainData;
	} else {
		atlas._plainData = _plainData;
	}
	for (var i = 0; i < l; i++) {
		val = _plainData[i];
		index = i * 8 + 7;
		while (val > 0) {
			if (index < nodeCount && (val & 1)) {
				nodeData = atlas.nodes[index].data
				nodeData.open = !!(val & 1);
				for (stat in nodeData._give) {
					atlas.stat.got[stat] += nodeData._give[stat];
				}
				for (var spark in nodeData._need) {
					atlas.sparks.got[spark] += nodeData._need[spark];
				}
			}
			index--;
			val = val >> 1;
		}
	}
	for (; i < len; i++) {
		val = _plainData[i];
		index = (i - l) * 4 + 3;
		while (val > 0) {
			if (index < nodeCount) {
				nodeData = atlas.nodes[index].data;
				nodeData.polish = val & 3;
				polishCost = 9999;
				for (stat in nodeData._give) {
					if (stat === 'dex') { continue; }
					atlas.stat.got[stat] +=
						nodeData._give[stat] * 0.5 * nodeData.polish;
					polishCost = Math.min(polishCost, nodeData._give[stat]);
				}
				for (var j = 1; j <= nodeData.polish; j++) {
					atlas.sparks.got[cost[j]] += polishCost * 5 * j;
				}
				atlas.sparks.got.core += nodeData.polish;
			}
			index--;
			val = val >> 2;
		}
	}
	/* jshint bitwise: true */
	if (atlas.stat.got.red) {
		atlas.sparks.got.all =
			atlas.sparks.got.red + atlas.sparks.got.green +
				atlas.sparks.got.blue;
	}
}

function saveAtlas(atlas) {
	localStorage['atlas_' + atlas.name] =
		base64js.fromByteArray(atlas.plainData);
}

function initCy(atlases) {
	var atlas;

	for (var atlasID in atlases) {
		atlas = atlases[atlasID];
		atlas.cy = cytoscape(
			{ elements: {nodes: atlas.nodes, edges: atlas.edges}
			, layout: {name: 'preset', fit: false}
			});
		atlas.cy.elements('node[?open]').connectedEdges()
			.filter(function(i, ele) {
				return ele.source().data('open') && ele.target().data('open');
			}).data('open', true);
	}
}

function renderTitle(node) {
	var nodeData = node.data,
		title = nodeData.title,
		imageName = nodeData.nodeImage;

	if (imageName && title) {
		return '<div class="tooltip-title">' +
			'<img width="25" src="images/nodes/' + imageName + '.png"></img> ' +
				title + '</div>';
	} else {
		if (nodeData.give.vit) {
			imageName = 'vit';
			title = 'Бонус: Выносливость';
		} else if (nodeData.give.power) {
			imageName = 'power';
			title = 'Бонус: Могущество';
		} else if (nodeData.give.spirit) {
			imageName = 'spirit';
			title = 'Бонус: Дух';
		} else if (nodeData.give.str) {
			imageName = 'str';
			title = 'Бонус: Сила';
		} else if (nodeData.give.luck) {
			imageName = 'luck';
			title = 'Бонус: Удача';
		} else if (nodeData.give.valor) {
			imageName = 'valor';
			title = 'Бонус: Отвага';
		} else if (nodeData.give.majesty) {
			imageName = 'majesty';
			title = 'Бонус: Величие';
		}
		if (nodeData.need.revelation) {
			imageName = 'revelation';
		}
	}
	return '<div class="tooltip-title">' +
		'<img width="25" src="images/nodes/' + imageName + '.png"></img> ' +
			title +
		'</div>';
}

function renderText(node, isNeedCost) {
	var text = '',
		statText = '',
		nodeData = node.data,
		give = nodeData.give,
		need = nodeData.need,
		coeff = 0;

	if (node.data.polish) {
		coeff = 0.5 * (node.data.polish % 10);
	}
	if (isNeedCost && give.prestige) {
		text +=
			'<div class="stat">' +
				'<img width="25" src="images/prestige.png"></img> + ' +
				Math.ceil(give.prestige * (coeff + 1)) +
			'</div>';
	}
	if (node.classes === 'stat') {
		text += '<div class="stat">';
		polishCost = 9999;
		for (var stat in give) {
			if (stat === 'prestige' || stat === 'dex') {
				continue;
			}
			text +=
				statName[stat] + '<span>' + Math.ceil(give[stat] * (coeff + 1));
			if (coeff !== 0) {
				text += ' (' + give[stat]  + ' + ' +
					Math.ceil(give[stat] * coeff) + ')';
			}
			text += '</span><br/>';
			statText += '<p>' + statDescription[stat] + '</p>';
			polishCost = Math.min(polishCost, give[stat]);
		}
		text += '</div>';
	}
	if ((give.power || give.vit) && give.dex) {
		text += '<div class="stat">Сноровка<span>' + give.dex +'</span></div>';
	}
	text += statText;
	if (nodeData.description) {
		text += '<p>' + nodeData.description + '</p>';
	}
	if (isNeedCost) {
		text += '<br/><div class="cost">Стоймость';
		for (var key in need) {
			text += '<span>' +
				'<img width="20" src="images/spark/' + key + '.png"></img> ' +
				need[key] + '</span>';
		}
		text += '</div>';
		if (node.classes === 'stat' && nodeData.hasOwnProperty('polish') &&
			!nodeData.give.majesty)
		{
			text += '<br/><div class="polish">Полировка:<br/>';
			text += '<div class="polish_cell">+' +
				Math.ceil(give.prestige / 2) +
				'<span><img width="20" src="images/spark/core.png"></img>1</span>' +
				'<span><img width="20" src="images/spark/bronze.png"></img>' + (5 * polishCost) + '</span>'+
			'</div>';
			text += '<div class="polish_cell">+' + give.prestige +
				'<span><img width="20" src="images/spark/core.png"></img>1</span>' +
				'<span><img width="20" src="images/spark/silver.png"></img>' + (10 * polishCost) + '</span>'+
			'</div>';
			text += '<div class="polish_cell">+' +
				Math.ceil(1.5 * give.prestige) +
				'<span><img width="20" src="images/spark/core.png"></img>1</span>' +
				'<span><img width="20" src="images/spark/gold.png"></img>' + (15 * polishCost) + '</span>'+
			'</div>';
			text += '</div><br/>';
		}
	}
	return text;
}

function foundPath(cy, to, excludeNode, useNode) {
	var from, aStar;
	var helpSearch =
		[
			{ group: 'nodes'
			, data: {id: 'startSearch', need: {}}
			, position: {x: 0, y: 0}
			}
		];

	from = cy.elements(excludeNode).neighborhood('node' + useNode);
	for (var i = 0, l = from.length; i < l; i++) {
		helpSearch.push(
			{ group: 'edges'
			, data:
				{ source: 'startSearch'
				, target: from[i].id()
				}
			}
		);
	}
	helpSearch = cy.add(helpSearch);
	aStar = cy.elements(useNode).aStar(
		{ root: '#startSearch'
		, goal: to
		, weight: function (edge) {
				var sourceNeed = edge.source().data('need');
				var targetNeed = edge.target().data('need');
				var weight = 0;
				var spark;
				for (spark in sourceNeed) {
					weight += sourceNeed[spark];
				}
				for (spark in targetNeed) {
					weight += targetNeed[spark];
				}
				return weight;
			}
		});
	cy.remove(helpSearch);
	return aStar;
}

function getUnopen(cy, nodeID) {
	var node = cy.elements(nodeID),
		connected, components,
		startNode = cy.elements('[?start]'),
		removed;

	connected = node.connectedEdges('[?open]');
	connected = connected.add(node);
	removed = connected.remove();
	components = cy.elements('[?open]').components();
	removed.restore();
	for (var i = 0, l = components.length; i < l; i++) {
		if (components[i].anySame(startNode)) {
			continue;
		}
		connected = connected.union(components[i]);
	}
	return {found: true, path: connected};
}

function clearNeed() {
	for (var spark in need) {
		need[spark] = 0;
	}
	for (var stat in recive) {
		recive[stat] = 0;
	}
}

function center(atlas, point) {
	var svg = document.getElementById('atlas');

	atlas.mX = svg.clientWidth / 2 - point.x * atlas.scale;
	atlas.mY = svg.clientHeight / 2 - point.y * atlas.scale;
}

function nodeImage(node) {
	if (node.data.nodeImage) {
		if (node.data.nodeImage === 'empty') {
			return 'none';
		}
		return 'url(#' + node.data.nodeImage + ')';
	}
	if (node.data.need.revelation) {
		return 'url(#revelation)';
	} else if (node.data.give.vit) {
		return 'url(#vit)';
	} else if (node.data.give.power) {
		return 'url(#power)';
	} else if (node.data.give.str) {
		return 'url(#str)';
	} else if (node.data.give.valor) {
		return 'url(#valor)';
	} else if (node.data.give.spirit) {
		return 'url(#spirit)';
	} else if (node.data.give.luck) {
		return 'url(#luck)';
	} else if (node.data.give.majesty) {
		return 'url(#majesty)';
	}
	return '';
}

function getNewPolish(polish, isWant) {
	var wantPolish, realPolish;

	realPolish = polish % 10;
	wantPolish = Math.floor(polish / 10);
	if (isWant) {
		if (wantPolish === 0) {
			wantPolish = realPolish;
		}
		wantPolish++;
	} else {
		realPolish++;
	}
	realPolish = realPolish % 4;
	wantPolish = wantPolish % 4;
	if (realPolish >= wantPolish) {
		wantPolish = 0;
	}
	return wantPolish * 10 + realPolish;
}

	var atlasMove = false,
		svg = document.getElementById('atlas'),
		atlases =
			[ mainAtlas(), godAtlas()
			];

	calcTotal(atlases);
	for (var atlasID in atlases) {
		center(atlases[atlasID], {x: 0, y: 0});
		loadAtlas(atlases[atlasID]);
	}
	groupSkill(atlases);
	Vue.config.debug = true;
	Vue.component('skill',
		{ props: ['skill', 'atlas']
		, template: '#skill-template'
		, ready: function() {
				$(this.$el).qtip(
					{ content:
						{ title: this.skill.title
						, text: this.skill.description
						}
					, show: {delay: 250}
					, position:
						{ my: 'top center'
						, at: 'bottom center'
						, viewport: $(document)
						}
					, style:
						{ classes: 'qtip qtip-dark qtip-round'
						, tip: {corner: false}
						}
					});
			}
		, methods:
			{ findSkill: function(skill) {
					center(this.atlas, skill.position[skill.pos++]);
					skill.pos = skill.pos % skill.position.length;
				}
			}
		});
	Vue.component('node',
		{ props: ['node']
		, template: '#node-template'
		, watch:
			{ 'node.data.polish': function(newValue, oldValue) {
					var oldWantPolish, oldRealPolish;
					var newWantPolish, newRealPolish;
					var atlas = this.$parent.atlas;
					var atlasSpark = atlas.sparks.got;
					var atlasStat = atlas.stat.got;
					var nodeData = this.node.data;
					var polishCost = 9999;
					var i, cost = ['', 'bronze', 'silver', 'gold'], stat;
					var change;

					oldRealPolish = oldValue % 10;
					oldWantPolish = Math.floor(oldValue / 10);
					newRealPolish = newValue % 10;
					newWantPolish = Math.floor(newValue / 10);
					for (stat in nodeData.give) {
						if (stat === 'prestige' || stat === 'dex') { continue; }
						polishCost = Math.min(polishCost, nodeData.give[stat]);
					}
					polishCost *= 5;
					if (oldWantPolish !== 0 && newWantPolish === 0) {
						for (i = oldWantPolish; i > oldRealPolish; i--) {
							need[cost[i]] -= polishCost * i;
						}
						change = oldWantPolish - oldRealPolish;
						need.core -= change;
						for (stat in nodeData.give) {
							if (stat === 'dex') { continue; }
							recive[stat] -=
								Math.ceil(nodeData.give[stat] / 2) * change;
						}
					}
					if (newWantPolish > oldWantPolish) {
						need[cost[newWantPolish]] += polishCost * newWantPolish;
						need.core++;
						for (stat in nodeData.give) {
							if (stat === 'dex') { continue; }
							recive[stat] += Math.ceil(nodeData.give[stat] / 2);
						}
					}
					if (oldRealPolish === 3 && newRealPolish === 0) {
						for (i = 3; i > 0; i--) {
							atlasSpark[cost[i]] -= polishCost * i;
						}
						for (stat in nodeData.give) {
							if (stat === 'dex') { continue; }
							atlasStat[stat] -=
								Math.ceil(nodeData.give[stat] / 2) * 3;
						}
						atlasSpark.core -= 3;
					}
					if (newRealPolish - oldRealPolish === 1) {
						if (newWantPolish !== 0) {
							need[cost[newRealPolish]] -=
								polishCost * newRealPolish;
							need.core--;
						}
						atlasSpark[cost[newRealPolish]] +=
							polishCost * newRealPolish;
						for (stat in nodeData.give) {
							if (stat === 'dex') { continue; }
							if (newWantPolish !== 0) {
								recive[stat] -=
									Math.ceil(nodeData.give[stat] / 2);
							}
							atlasStat[stat] +=
								Math.ceil(nodeData.give[stat] / 2);
						}
						atlasSpark.core++;
					}
					$('#tooltip').qtip('api')
						.set('content.text', renderText(this.node, true));
				}
			}
		, methods:
			{ radius: function(node) {
					if (node.data.nodeImage) {
						return this.$parent.nodeSize.big;
					}
					return this.$parent.nodeSize.small;
				}
			, nodeImage: nodeImage
			, hoverNode: function(node) {
					var cy = this.$parent.atlas.cy;

					if (atlasMove) {
						return;
					}
					if (node.data.nodeImage !== 'empty') {
						$('#tooltip').qtip('api')
							.set(
								{ 'content.title': renderTitle(node)
								, 'content.text': renderText(node, true)
								, 'position.target': $(this.$el.nextElementSibling)
								})
							.toggle(true);
					}
					if (node.data.start || node.data.want) {
						return;
					}
					if (node.data.open) {
						tempPath = getUnopen(cy, '#' + node.data.id);
					} else {
						tempPath = foundPath(cy, '#' + node.data.id, 'node[?open]', '[!open]');
					}
					if (tempPath.found) {
						tempPath.path.data('hover', true);
					}
				}
			, unHoverNode: function() {
					$('#tooltip').qtip('api').toggle(false);
					if (tempPath.found) {
						tempPath.path.data('hover', false);
						tempPath.found = false;
					}
				}
			, getNode: function(node, ev) {
					var atlas = this.$parent.atlas;
					var atlasSpark = atlas.sparks.got;
					var atlasStat = atlas.stat.got;
					var cy = atlas.cy;
					var openPath, nodeData;
					var i, l, spark, stat, isFound;

					if (node.data.start || atlasMove) {
						return;
					}
					if (ev.altKey) {
						nodeData = node.data;
						if (!nodeData.open ||
							!nodeData.hasOwnProperty('polish') ||
							node.classes !== 'stat' || nodeData.give.majesty)
						{
							return;
						}
						nodeData.polish = getNewPolish(nodeData.polish, false);
						addNode(atlas,
							nodeData.id.slice(1), nodeData.polish % 4);
						saveAtlas(atlas);
						return;
					}
					if (node.data.open) {
						openPath = getUnopen(cy, '#' + node.data.id);
						if (!openPath.found) {
							return;
						}
						openPath = openPath.path;
						for (i = 0, l = openPath.length; i < l; i++) {
							if (!openPath[i].isNode()) {
								continue;
							}
							nodeData = openPath[i].data();
							for (spark in nodeData.need) {
								atlasSpark[spark] -= nodeData.need[spark];
							}
							for (stat in nodeData.give) {
								atlasStat[stat] -= nodeData.give[stat];
							}
							openPath[i].data('polish', 0);
							removeNode(atlas, openPath[i].id().slice(1));
						}
						openPath.data({open: false, want: false, hover: false});
					} else {
						openPath = foundPath(cy, '#' + node.data.id, '[?open]', '[!open]');
						if (!openPath.found) {
							return;
						}
						openPath = openPath.path;
						for (i = 0, l = openPath.length; i < l; i++) {
							if (!openPath[i].isNode() ||
								openPath[i].id() === 'startSearch')
							{
								continue;
							}
							nodeData = openPath[i].data();
							isFound = nodeData.want;
							for (spark in nodeData.need) {
								atlasSpark[spark] += nodeData.need[spark];
								if (isFound) {
									need[spark] -= nodeData.need[spark];
								}
							}
							for (stat in nodeData.give) {
								atlasStat[stat] += nodeData.give[stat];
								if (isFound) {
									recive[stat] -= nodeData.give[stat];
								}
							}
							addNode(atlas,
								openPath[i].id().slice(1), nodeData.polish);
						}
						openPath.data({open: true, want: false, hover: false});
						openPath[2].connectedEdges().filter(function(i, ele) {
							return ele.source().data('open') &&
									ele.target().data('open');
						}).data({open: true, want: false, hover: false});
					}
					saveAtlas(atlas);
					if (atlasSpark.hasOwnProperty('all')) {
						atlasSpark.all =
							atlasSpark.red + atlasSpark.green + atlasSpark.blue;
						need.all = need.red + need.green + need.blue;
					}
				}
			, findPath: function(node, ev) {
					var atlas = this.$parent.atlas;
					var cy = atlas.cy;
					var needPath, nodeData;

					nodeData = node.data;
					if (ev.altKey) {
						nodeData = node.data;
						if (!nodeData.hasOwnProperty('polish') ||
							node.classes !== 'stat' || nodeData.give.majesty)
						{
							return;
						}
						nodeData.polish = getNewPolish(nodeData.polish, true);
						return;
					}
					if (nodeData.want || nodeData.open) {
						return;
					}
					cy.elements('[?want]').data('want', false);
					needPath = foundPath(cy, '#' + node.data.id, 'node[?open]', '[!open]');
					if (needPath.found) {
						clearNeed();
						needPath = needPath.path;
						needPath.data('want', true);
						for (var i = needPath.length; i--; ) {
							if (!needPath[i].isNode()) {
								continue;
							}
							nodeData = needPath[i].data();
							for (var spark in nodeData.need) {
								need[spark] += nodeData.need[spark];
							}
							for (var stat in nodeData.give) {
								recive[stat] += nodeData.give[stat];
							}
						}
						need.all = need.red + need.green + need.blue;
						needPath[2].connectedEdges().filter(function(i, ele) {
							var source = ele.source(), target = ele.target();
							return (source.data('open') || source.data('want')) &&
								(target.data('open') || target.data('want'));
						}).data('want', true);
					}
				}
			}
		});
	Vue.component('edge',
		{ props: ['edge', 'source', 'target']
		, template: '#edge-template'
		, computed:
			{ path: function() {
					var source = this.source, target = this.target;

					if (this.edge.classes == 'curve120') {
						return "M " + source.x + " " + source.y +
							" Q " + ((target.x + source.x) / 2 - (target.y - source.y) / 2) +
							" " + ((target.y + source.y) / 2 + (target.x - source.x) / 2) +
							" " + target.x + " " + target.y;
					} else if (this.edge.classes == 'curve60' || this.edge.classes == 'curve') {
						return "M " + source.x + " " + source.y +
							" Q " + ((target.x + source.x) / 2 - (target.y - source.y) / 4) +
							" " + ((target.y + source.y) / 2 + (target.x - source.x) / 4) +
							" " + target.x + " " + target.y;
					} else {
						return "M " + source.x + " " + source.y +
							" " + target.x + " " + target.y;
					}
				}
			}
		});
	Vue.component('atlas',
		{ props: ['atlas']
		, data: function() {
				return {isBig: false, nodeSize: {big: 20, small: 12}};
			}
		, template: '#atlas-template'
		, computed:
			{ isBig: function() {
					return this.atlas.scale < 0.3;
				}
			}
		, watch:
			{ isBig: function(newValue, oldValue) {
					if (newValue === oldValue) {
						return;
					}
					if (newValue) {
						this.nodeSize.big = 150;
						this.nodeSize.small = 0;
					} else {
						this.nodeSize.big = 20;
						this.nodeSize.small = 12;
					}
				}
			}
		});
	vm = new Vue(
		{ el: '#container'
		, data:
			{ selected: 0
			, statFind: {statName: 'vit', value: -1, polish: -1, isOpen: -1}
			, statName: statName
			, atlases: atlases
			, need: need
			, recive: recive
			, images:
				[ 'krio', 'paladin', 'LK', 'alchemist', 'archer', 'berserker'
				, 'kinetic', 'monk', 'necromancer', 'rouge', 'witch', 'hero'
				, 'hedgehopper'
				, 'maneuver', 'balance', 'surprise', 'rush', 'inertia'
				, 'luck_hit', 'destroy', 'shock', 'adrenaline', 'alert'
				, 'barrier', 'break', 'concussion', 'create', 'credo_defend'
				, 'credo_warrior', 'dash', 'death', 'defence', 'dissection'
				, 'double', 'equilibrium', 'injury', 'laceration', 'life'
				, 'okulat', 'reflex', 'resistance', 'ruthlessness', 'slow'
				, 'spasm', 'timeout', 'triumph', 'wave', 'guardianship'
				, 'medicines', 'unity', 'pv'
				, 'god', 'secretKnowledge'
				, 'defend', 'hunter', 'knowledge', 'rule', 'wanderer', 'warrior'
				, 'vit', 'power', 'str', 'valor', 'spirit', 'luck', 'majesty'
				, 'revelation'
				, 'sphere', 'stat'
				// Фитониды
				, 'cultivation', 'mutation', 'poison', 'regeneration', 'root'
				// Механойды
				, 'capacity', 'eattack', 'eimpuls', 'flash', 'shield'
				// Горгониды
				, 'cobra', 'corrosive', 'slave', 'snakebite', 'trap'
				// Жнецы смерти
				// Океаниды
				// Демоны
				]
			}
		, watch:
			{ selected: function() {
					clearNeed();
					this.statFind.statName = 'vit';
					this.statFind.value = -1;
					this.statFind.polish = -1;
					this.statFind.isOpen = -1;
				}
			}
		, methods:
			{ mouseDown: function(evt) {
					if(evt.which === 1) {
						atlasMove = true;
					}
				}
			, mouseUp: function(evt) {
					if(evt.which === 1) {
						atlasMove = false;
					}
				}
			, atlasMove: function(evt) {
					if (atlasMove) {
						this.atlases[this.selected].mX += evt.movementX;
						this.atlases[this.selected].mY += evt.movementY;
					}
				}
			, atlasScale: function(event) {
					var mouseX = event.clientX - svg.offsetLeft;
					var mouseY = event.clientY - svg.offsetTop;
					var wheel =
						event.wheelDelta ?
							event.wheelDelta / 120 : event.deltaY / -3;
					var zoom =
						Math.pow(1 + Math.abs(wheel) / 2 , wheel > 0 ? 1 : -1);
					var atlas = this.atlases[this.selected];
					var newScale = atlas.scale * zoom;

					if (newScale > 1.5 || newScale < 0.08) {
						return;
					}
					atlas.mX -= (atlas.mX - mouseX) * (1 - zoom);
					atlas.mY -= (atlas.mY - mouseY) * (1 - zoom);
					atlas.scale = newScale;
				}
			, findNode: function() {
					var atlas = this.atlases[this.selected];
					var statName = this.statFind.statName;
					var stat = atlas.group.stat[statName];
					var startPos = stat.pos, pos = stat.pos, node, nodeData;
					var isOpen = this.statFind.isOpen;
					var value = this.statFind.value;
					var polish = this.statFind.polish;

					do {
						nodeData = stat.node[pos].data;
						if ((isOpen === -1 || isOpen === nodeData.open) &&
							(value === -1 || value === nodeData.give[statName]) &&
							(polish === -1 || nodeData.polish % 10 === polish))
						{
							node = stat.node[pos];
							center(this.atlases[this.selected], node.position);
							$('#tooltip').qtip('api')
								.set(
									{ 'content.title': renderTitle(node)
									, 'content.text': renderText(node, true)
									, 'position.target': false
									})
								.toggle(true);
							stat.pos = (pos + 1) % stat.node.length;
							return;
						}
						pos = (pos + 1) % stat.node.length;
					} while (startPos !== pos);
				}
			, hideTooltip: function() {
					$('#tooltip').qtip('api').toggle(false);
				}
			}
		}
	);
	initCy(atlases);
	$('#tooltip').qtip(
		{ content: {title: '', text: ''}
		, show: {delay: 250, effect: false, target: false}
		, hide: {target: false, effect: false}
		, position:
			{ my: 'left top', at: 'top right', viewport: $(window)
			, effect: false
			}
		, style: {classes: 'qtip qtip-dark qtip-round', tip: {corner: true}}
		});
	$('#tooltip').qtip('api').hide();
});
