console.log("PostCSS config loaded");

module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 1,
      preserve: true,
      features: {
        'custom-properties': true,
      },
    },
  },
};
