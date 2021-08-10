const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        Security: resolve(__dirname, 'Security/security.html'),
        QA: resolve(__dirname, 'QA/qualityassurance.html'),
        BA: resolve(__dirname, 'BA/badexample.html'),
      }
    }
  }
}