module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "tailwindcss/no-custom-classname": [
      "error",
      {
        callees: ["classnames", "clsx"],
        config: "./tailwind.config.js", // Path to your Tailwind CSS configuration file
        cssFiles: ["**/*.css"],
        cssFilesRefreshRate: 5000, // Optional: refresh rate for CSS files in milliseconds
        skipClassAttribute: false,
        tags: ["tw"],
        whitelist: ["hover:bg-primary-90"],
      },
    ],
    "react/prop-types": "off",
  },
};
