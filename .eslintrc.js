module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["flowtype", "react", "react-native"],
  env: {
    "react-native/react-native": true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "no-use-before-define": ["error", { "variables": false }],

    "flowtype/boolean-style": [
        2,
        "boolean"
      ],
      "flowtype/define-flow-type": 1,
      "flowtype/delimiter-dangle": [
        2,
        "never"
      ],
      "flowtype/generic-spacing": [
        2,
        "never"
      ],
      "flowtype/no-primitive-constructor-types": 2,
      "flowtype/no-types-missing-file-annotation": 2,
      "flowtype/no-weak-types": 2,
      "flowtype/object-type-delimiter": [
        2,
        "comma"
      ],
      "flowtype/require-parameter-type": 0,
      "flowtype/require-return-type": [
        0,
        "always",
        {
          "annotateUndefined": "never",
          "excludeMatching": [
            "render"
        ]
        }
      ],
      "flowtype/require-valid-file-annotation": 2,
      "flowtype/semi": [
        2,
        "always"
      ],
      "flowtype/space-after-type-colon": [
        2,
        "always"
      ],
      "flowtype/space-before-generic-bracket": [
        2,
        "never"
      ],
      "flowtype/space-before-type-colon": [
        2,
        "never"
      ],
      
      "flowtype/union-intersection-spacing": [
        2,
        "always"
      ],
      "flowtype/use-flow-type": 1,
      "flowtype/valid-syntax": 1
  }
};
