module.exports = {
  extends: ["airbnb", "airbnb/hooks", "plugin:@next/next/recommended"],
  plugins: ["@next/next"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["next/babel"],
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx"],
      },
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".jsx"] }],
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.spec.jsx",
          "**/*.test.jsx",
          "**/*.spec.js",
          "**/*.test.js",
          "**/__tests__/**",
          "**/test/**",
          "vitest.config.js",
          "vitest.integration.config.js",
        ],
      },
    ],
    "@next/next/no-img-element": "error",
  },
  overrides: [
    {
      files: [
        "**/*.spec.jsx",
        "**/*.test.jsx",
        "**/__tests__/**",
        "**/test/**",
      ],
      rules: {
        "@next/next/no-img-element": "off",
        "react/jsx-props-no-spreading": "off",
        "react/button-has-type": "off",
      },
    },
    {
      files: ["src/components/ui/**/*"],
      rules: {
        "react/jsx-props-no-spreading": "off",
      },
    },
    {
      files: ["**/__tests__/**", "**/test/**"],
      rules: {
        "react/jsx-props-no-spreading": "off",
        "@next/next/no-img-element": "off",
        "import/no-extraneous-dependencies": "off",
        "react/button-has-type": "off",
      },
    },
  ],
};
