/**
 * @fileoverview Tests for no-unknown-property
 * @author Yannick Croissant
 */

'use strict';

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

var eslint = require('eslint').linter;
var ESLintTester = require('eslint').ESLintTester;

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest('lib/rules/no-unknown-property', {
  valid: [
    {code: '<App class="bar" />;', ecmaFeatures: {jsx: true}},
    {code: '<App for="bar" />;', ecmaFeatures: {jsx: true}},
    {code: '<App accept-charset="bar" />;', ecmaFeatures: {jsx: true}},
    {code: '<App http-equiv="bar" />;', ecmaFeatures: {jsx: true}},
    {code: '<div className="bar"></div>;', ecmaFeatures: {jsx: true}},
    {code: '<div data-foo="bar"></div>;', ecmaFeatures: {jsx: true}}
  ],
  invalid: [{
    code: '<div class="bar"></div>;',
    errors: [{message: 'Unknown property \'class\' found, use \'className\' instead'}],
    ecmaFeatures: {jsx: true}
  }, {
    code: '<div for="bar"></div>;',
    errors: [{message: 'Unknown property \'for\' found, use \'htmlFor\' instead'}],
    ecmaFeatures: {jsx: true}
  }, {
    code: '<div accept-charset="bar"></div>;',
    errors: [{message: 'Unknown property \'accept-charset\' found, use \'acceptCharset\' instead'}],
    ecmaFeatures: {jsx: true}
  }, {
    code: '<div http-equiv="bar"></div>;',
    errors: [{message: 'Unknown property \'http-equiv\' found, use \'httpEquiv\' instead'}],
    ecmaFeatures: {jsx: true}
  }, {
    code: '<div accesskey="bar"></div>;',
    errors: [{message: 'Unknown property \'accesskey\' found, use \'accessKey\' instead'}],
    ecmaFeatures: {jsx: true}
  }, {
    code: '<div onclick="bar"></div>;',
    errors: [{message: 'Unknown property \'onclick\' found, use \'onClick\' instead'}],
    ecmaFeatures: {jsx: true}
  }, {
    code: '<div onmousedown="bar"></div>;',
    errors: [{message: 'Unknown property \'onmousedown\' found, use \'onMouseDown\' instead'}],
    ecmaFeatures: {jsx: true}}
  ]
});
