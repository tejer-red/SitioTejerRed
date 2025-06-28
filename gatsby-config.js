module.exports = {
    siteMetadata: {
      title: "Tejer.Red",
    },
    plugins: [
      {
        resolve: "gatsby-plugin-webfonts",
        options: {
          fonts: {
            google: [
              {
                family: "Bebas Neue",
                variants: ["400"], // Solo tiene una variante
                fontDisplay: "swap",
              },
              {
                family: "Hanken Grotesk",
                variants: ["300", "400", "500", "700"], // Elige las que usarás
                fontDisplay: "swap",
              },
            ],
          },
          useMinify: true,
          usePreload: true,
          usePreconnect: true,
        },
      },
      'gatsby-plugin-postcss', // postcss.config.js
      
    ],
  };
  