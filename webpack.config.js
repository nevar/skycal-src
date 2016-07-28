let path = require('path');
let SpritesmithPlugin = require('webpack-spritesmith');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

var svgTemplate = function (data) {
    return data.sprites.map(function (sprite) {
        return (
            '<pattern id="_ID_" height="1" width="1" viewBox="-5 -5 74 74">' +
            '<image x="_X_" y="_Y_" height="_H_" width="_W_" '+
                'xlink:href="images/_URL_"></image></pattern>')
            .replace('_URL_', sprite.image)
            .replace('_ID_', sprite.name)
            .replace('_W_', data.spritesheet.width)
            .replace('_H_', data.spritesheet.height)
            .replace('_X_', sprite.offset_x)
            .replace('_Y_', sprite.offset_y);
    }).join('\n');
};

module.exports =
    { entry: './src/javascripts/main.js'
    , output: {filename: 'javascripts/[name].[hash].js'}
    , module:
        { preLoaders:
            [ {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
            ]
        , loaders:
            [ {test: /\.html$/, exclude: /index\.html$/, loader: 'html'}
            ,
                { test: /\.css$/
                , loader: ExtractTextPlugin.extract('style-loader', 'css-loader', {publicPath: '../'})
                }
            , {test: /\.png$/, loader: 'file-loader?name=images/[name].[ext]'}
            ,
                { test: /\.js$/, exclude: /(node_modules|bower_components)/
                , loader: 'babel'
                , query: {presets: ['es2015']}
                }
            ]
        }
    , plugins:
        [ new SpritesmithPlugin(
            { src: {cwd: './src/images/nodes', glob: '*.png'}
            , target:
                { image: './_build/nodes.png'
                , css:
                    [
                        [ './_build/nodes.css'
                        ,
                            { formatOpts:
                                {cssSelector: (i) => '.icon-node-' + i.name}
                            }
                        ]
                    , ['./_build/nodes.html', {format: 'svg_template'}]
                    ]
                }
            , apiOptions: {cssImageRef: 'nodes.png'}
            , customTemplates: {'svg_template': svgTemplate}
            , spritesmithOptions: {padding: 20}
            })
        , new SpritesmithPlugin(
            { src: {cwd: './src/images/sparks', glob: '*.png'}
            , target:
                { image: './_build/sparks.png'
                , css:
                    [
                        ['./_build/sparks.css'
                        ,
                            { formatOpts:
                                {cssSelector: (i) => '.icon-spark-' + i.name}
                            }
                        ]
                    ]
                }
            , apiOptions: {cssImageRef: 'sparks.png'}
            })
        , new HtmlWebpackPlugin(
            { template: 'src/index.html', file: 'index.html'
            , inject: true
            , minify:
                { collapseWhitespace: true
                , conservativeCollapse: true
                , removeAttributeQuotes: true
                , keepClosingSlash: true
                , removeScriptTypeAttributes: true
                , removeStyleLinkTypeAttributes: true
                , useShortDoctype: true
                , processScripts: ['text/x-template']
                , customAttrCollapse: /:class/
                }
            })
        , new ExtractTextPlugin('./stylesheets/main.css')
        ]
};
