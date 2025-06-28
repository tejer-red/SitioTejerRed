// gatsby-node.js
exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
    const config = getConfig();
  
    // Encuentra la regla que ya maneja SVGs como archivos
    const fileLoader = config.module.rules.find(rule =>
      String(rule.test).includes('svg')
    );
  
    if (fileLoader) {
      // Evita que esa regla también procese .svg
      fileLoader.exclude = /\.svg$/;
    }
  
    // Añade SVGR para que los SVGs se procesen como componentes
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
        ],
      },
    });
  };
  