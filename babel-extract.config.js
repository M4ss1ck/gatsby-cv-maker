module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "i18next-extract",
      {
        keySeparator: null,
        nsSeparator: null,
        keyAsDefaultValue: ["es"],
        useI18nextDefaultValue: ["es"],
        discardOldKeys: true,
        outputPath: "locales/{{locale}}/{{ns}}.json",
        customTransComponents: [["gatsby-plugin-react-i18next", "Trans"]],
      },
    ],
  ],
  overrides: [
    {
      test: [`**/*.ts`, `**/*.tsx`],
      plugins: [[`@babel/plugin-transform-typescript`, { isTSX: true }]],
    },
  ],
}
