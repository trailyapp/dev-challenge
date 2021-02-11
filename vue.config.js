module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Dev Challenge - Traily.ch";
        return args;
      })
  }
}