module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-rem-to-responsive-pixel": {
      rootValue: 16,
      propList: ["*"],
      transformUnit: "px",
    },
  },
};
