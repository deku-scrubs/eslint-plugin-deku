/**
 * @fileoverview Prevent usage of setState in componentDidUpdate
 * @author Yannick Croissant
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var eslint = require('eslint').linter;
var ESLintTester = require('eslint').ESLintTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest('lib/rules/no-did-update-set-state', {

  valid: [{
    code: [
      'var Hello = React.createClass({',
      '  render: function() {',
      '    return <div>Hello {this.props.name}</div>;',
      '  }',
      '});'
    ].join('\n'),
    ecmaFeatures: {
      jsx: true
    }
  }, {
    code: [
      'var Hello = React.createClass({',
      'componentDidUpdate: function() {},',
      '  render: function() {',
      '    return <div>Hello {this.props.name}</div>;',
      '  }',
      '});'
    ].join('\n'),
    ecmaFeatures: {
      jsx: true
    }
  }, {
    code: [
      'var Hello = React.createClass({',
      '  componentDidUpdate: function() {',
      '    someNonMemberFunction(arg);',
      '    this.someHandler = this.setState;',
      '  },',
      '  render: function() {',
      '    return <div>Hello {this.props.name}</div>;',
      '  }',
      '});'
    ].join('\n'),
    ecmaFeatures: {
      jsx: true
    }
  }],

  invalid: [{
    code: [
      'var Hello = React.createClass({',
      '  componentDidUpdate: function() {',
      '    this.setState({',
      '      name: this.props.name.toUpperCase()',
      '    });',
      '  },',
      '  render: function() {',
      '    return <div>Hello {this.state.name}</div>;',
      '  }',
      '});'
    ].join('\n'),
    ecmaFeatures: {
      jsx: true
    },
    errors: [{
      message: 'Do not use setState in componentDidUpdate'
    }]
  }]
});
