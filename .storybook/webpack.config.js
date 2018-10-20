module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.ts$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: ['\\.vue$']
        }
      }
    ],
    exclude: /node_modules/
  })
  config.resolve.extensions.push('.ts')
  return config
}
