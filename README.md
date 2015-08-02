ESLint-plugin-Deku
===================

[![Maintenance Status][status-image]][status-url] [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][deps-image]][deps-url] [![Coverage Status][coverage-image]][coverage-url] [![Code Climate][climate-image]][climate-url]

Deku specific linting rules for ESLint

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

    npm install eslint

If you installed `ESLint` globally, you have to install Deku plugin globally too. Otherwise, install it locally.

    $ npm install eslint-plugin-deku

# Configuration

Add `plugins` section and specify ESLint-plugin-Deku as a plugin.

```json
{
  "plugins": [
    "deku"
  ]
}
```

If it is not already the case you must also configure `ESLint` to support JSX.

```json
{
  "ecmaFeatures": {
    "jsx": true
  }
}
```

Finally, enable all of the rules that you would like to use.

```json
{
  "rules": {
    "deku/display-name": 1,
    "deku/jsx-boolean-value": 1,
    "deku/jsx-curly-spacing": 1,
    "deku/jsx-max-props-per-line": 1,
    "deku/jsx-no-duplicate-props": 1,
    "deku/jsx-no-undef": 1,
    "deku/jsx-quotes": 1,
    "deku/jsx-sort-prop-types": 1,
    "deku/jsx-sort-props": 1,
    "deku/jsx-uses-deku": 1,
    "deku/jsx-uses-vars": 1,
    "deku/no-danger": 1,
    "deku/no-did-mount-set-state": 1,
    "deku/no-did-update-set-state": 1,
    "deku/no-multi-comp": 1,
    "deku/no-unknown-property": 1,
    "deku/prop-types": 1,
    "deku/deku-in-jsx-scope": 1,
    "deku/require-extension": 1,
    "deku/self-closing-comp": 1,
    "deku/sort-comp": 1,
    "deku/wrap-multilines": 1
  }
}
```

# List of supported rules

* [display-name](docs/rules/display-name.md): Prevent missing displayName in a Deku component definition
* [jsx-boolean-value](docs/rules/jsx-boolean-value.md): Enforce boolean attributes notation in JSX
* [jsx-curly-spacing](docs/rules/jsx-curly-spacing.md): Enforce or disallow spaces inside of curly braces in JSX attributes
* [jsx-max-props-per-line](docs/rules/jsx-max-props-per-line.md): Limit maximum of props on a single line in JSX
* [jsx-no-duplicate-props](docs/rules/jsx-no-duplicate-props.md): Prevent duplicate props in JSX
* [jsx-no-undef](docs/rules/jsx-no-undef.md): Disallow undeclared variables in JSX
* [jsx-quotes](docs/rules/jsx-quotes.md): Enforce quote style for JSX attributes
* [jsx-sort-prop-types](docs/rules/jsx-sort-prop-types.md): Enforce propTypes declarations alphabetical sorting
* [jsx-sort-props](docs/rules/jsx-sort-props.md): Enforce props alphabetical sorting
* [jsx-uses-deku](docs/rules/jsx-uses-deku.md): Prevent Deku to be incorrectly marked as unused
* [jsx-uses-vars](docs/rules/jsx-uses-vars.md): Prevent variables used in JSX to be incorrectly marked as unused
* [no-danger](docs/rules/no-danger.md): Prevent usage of dangerous JSX properties
* [no-did-mount-set-state](docs/rules/no-did-mount-set-state.md): Prevent usage of setState in componentDidMount
* [no-did-update-set-state](docs/rules/no-did-update-set-state.md): Prevent usage of setState in componentDidUpdate
* [no-multi-comp](docs/rules/no-multi-comp.md): Prevent multiple component definition per file
* [no-unknown-property](docs/rules/no-unknown-property.md): Prevent usage of unknown DOM property
* [prop-types](docs/rules/prop-types.md): Prevent missing props validation in a Deku component definition
* [deku-in-jsx-scope](docs/rules/deku-in-jsx-scope.md): Prevent missing Deku when using JSX
* [require-extension](docs/rules/require-extension.md): Restrict file extensions that may be required
* [self-closing-comp](docs/rules/self-closing-comp.md): Prevent extra closing tags for components without children
* [sort-comp](docs/rules/sort-comp.md): Enforce component methods order
* [wrap-multilines](docs/rules/wrap-multilines.md): Prevent missing parentheses around multilines JSX

# License

ESLint-plugin-Deku is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
