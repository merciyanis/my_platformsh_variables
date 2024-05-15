var webpack = require('webpack');
var path = require('path');

var libraryName = 'my_platformsh_variables';
function createConfig(appRoot, platformBuildFolder) {
  return {
    mode: 'production',
    entry: __dirname + '/src/index.js',
    output: {
      path: appRoot + '/' + platformBuildFolder,
      filename: 'platformvar.js',
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    resolve: {
      modules: [
        path.resolve(__dirname + '/src')
      ],
      extensions: ['.js']
    },
    plugins: [
      new webpack.DefinePlugin({
        'APP_ROOT': JSON.stringify(appRoot),
        __DEV__: false
      })
    ]
  };
}

module.exports = createConfig;
