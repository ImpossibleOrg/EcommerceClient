module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:react-hooks/recommended",
    "airbnb-typescript",
    "plugin:react/jsx-runtime",
    "plugin:conarti-fsd/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: ["react", "@typescript-eslint", "conarti-fsd", "import", "prettier"],
  rules: {
    "conarti-fsd/layers-slices": [
      "error",
      {
        allowTypeImports: true,
      },
    ],
    "conarti-fsd/absolute-relative": "error",
    "conarti-fsd/public-api": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "import/prefer-default-export": "off",
  },
};
