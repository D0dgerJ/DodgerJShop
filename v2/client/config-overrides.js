const { override, addWebpackModuleRule } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackModuleRule({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, 'src/components/account/CardForm.scss'),
  }),
  addWebpackModuleRule({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  })
);
