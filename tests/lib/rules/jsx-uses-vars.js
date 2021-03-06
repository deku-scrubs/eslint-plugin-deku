/**
 * @fileoverview Tests for jsx-uses-vars
 * @author Yannick Croissant
 */

'use strict';

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

var eslint = require('eslint').linter;
var ESLintTester = require('eslint').ESLintTester;

require('babel-eslint');

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslint.defineRule('jsx-uses-vars', require('../../../lib/rules/jsx-uses-vars'));
eslintTester.addRuleTest('node_modules/eslint/lib/rules/no-unused-vars', {
  valid: [
    {
      code: '\
        /*eslint jsx-uses-vars:1*/\
        function foo() {\
          var App;\
          var bar = React.render(<App/>);\
          return bar;\
        };\
        foo()',
      ecmaFeatures: {
        jsx: true
      }
    }, {
      code: '\
        /*eslint jsx-uses-vars:1*/\
        var App;\
        React.render(<App/>);',
      ecmaFeatures: {
        jsx: true
      }
    }, {
      code: '\
        /*eslint jsx-uses-vars:1*/\
        var App;\
        React.render(<App/>);',
      parser: 'babel-eslint',
      ecmaFeatures: {
        jsx: true
      }
    }, {
      code: '\
        /*eslint jsx-uses-vars:1*/\
          var a=1;\
          React.render(<img src={a} />);',
      ecmaFeatures: {
        jsx: true
      }
    }, {
      code: '\
        /*eslint jsx-uses-vars:1*/\
        var App;\
        function f() {\
          return <App />;\
        }\
        f();',
      ecmaFeatures: {
        jsx: true
      }
    }, {
      code: '\
        /*eslint jsx-uses-vars:1*/\
        var App;\
        <App.Hello />',
      ecmaFeatures: {
        jsx: true
      }
    }, {
      code: '\
        /*eslint jsx-uses-vars:1*/\
        class HelloMessage {}\
        <HelloMessage />',
      ecmaFeatures: {
        classes: true,
        jsx: true
      }
    }, {
      code: '\
        /*eslint jsx-uses-vars:1*/\
        class HelloMessage {\
          render() {\
            var HelloMessage = <div>Hello</div>;\
            return HelloMessage;\
          }\
        }\
        <HelloMessage />',
      ecmaFeatures: {
        classes: true,
        jsx: true
      }
    }
  ],
  invalid: [
    {
      code: '/*eslint jsx-uses-vars:1*/ var App;',
      errors: [{message: 'App is defined but never used'}],
      ecmaFeatures: {jsx: true}
    }, {
      code: '\
        /*eslint jsx-uses-vars:1*/\
        var App;\
        var unused;\
        React.render(<App unused=""/>);',
      errors: [{message: 'unused is defined but never used'}],
      ecmaFeatures: {
        jsx: true
      }
    }, {
      code: '\
        /*eslint jsx-uses-vars:1*/\
        class unused {}',
      errors: [{message: 'unused is defined but never used'}],
      ecmaFeatures: {
        classes: true,
        jsx: true
      }
    }, {
      code: '\
        /*eslint jsx-uses-vars:1*/\
        class HelloMessage {\
          render() {\
            var HelloMessage = <div>Hello</div>;\
            return HelloMessage;\
          }\
        }',
      errors: [{
        message: 'HelloMessage is defined but never used',
        line: 1
      }],
      ecmaFeatures: {
        classes: true,
        jsx: true
      }
    }, {
      code: '\
        /*eslint jsx-uses-vars:1*/\
        class HelloMessage {\
          render() {\
            var HelloMessage = <div>Hello</div>;\
            return HelloMessage;\
          }\
        }',
      errors: [{
        message: 'HelloMessage is defined but never used',
        line: 1
      }],
      parser: 'babel-eslint',
      ecmaFeatures: {
        classes: true,
        jsx: true
      }
    }
  ]
});
