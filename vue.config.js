module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/burger' //Informe aqui o caminho da raiz do app
      : '/'
  }