var path = require('path');
var SRC_DIR = path.join(__dirname, 'client/src');
var DIST_DIR = path.join(__dirname, 'client/dist');
const DefinePlugin = require('webpack');

const webpack = require('webpack');

module.exports = (env) => {

  const port = process.env.PORT || ${port};
  return (
    {
      plugins: [
        new webpack.DefinePlugin({
          // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
          'process.env.token': JSON.stringify(process.env.token || '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'),
          'process.env.url': JSON.stringify(process.env.url || 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp'),
          'process.env.PORT': JSON.stringify(process.env.PORT)
        })
      ],
      entry: `${SRC_DIR}/index.js`,
      output: {
        filename: 'bundle.js',
        path: DIST_DIR
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)?/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react',
                  {
                    plugins: ['@babel/plugin-transform-runtime']
                  }
                ]
              }
            }
          },
          {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|)$/i,
            use: {
              loader: 'file-loader'
            }
          }
        ]
      }
    }
  );
};


