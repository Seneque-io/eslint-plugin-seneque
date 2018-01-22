/* eslint-env node */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

// Stolen from https://github.com/ember-cli/eslint-plugin-ember/blob/master/lib/utils/ember.js#L126
function isEmberObject(node) {
  return node.callee.property &&
  (
    node.callee.property.name === 'extend' ||
    node.callee.property.value === 'extend'
  );
}

module.exports = {
    meta: {
      docs: {
        description: "disallow Ember.CoreObject.extend syntax",
        category: "Project rules",
        recommended: true
      },
      fixable: "code",
      schema: [] // no options
    },
    create: function(context) {
      return {
        CallExpression: function(node) {
          if (!isEmberObject(node)) { return }
          context.report(node, 'Ember.CoreObject.extend syntax not allowedd');
        }
      };
    }
};
