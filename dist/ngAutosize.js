/*
 * ngDialog - easy modals and popup windows
 * http://github.com/likeastore/ngDialog
 * (c) 2013-2015 MIT License, https://likeastore.com
 */

(function(root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    // CommonJS
    if (typeof angular === 'undefined') {
      module.exports = factory(require('angular'));
    } else {
      module.exports = factory(angular);
    }
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['ngAutosize'], function(angular) {
      factory(root.angular);
    });
  } else {
    // Global Variables
    factory(root.angular);
  }
}(this, function(angular) {
  'use strict';
  return angular.module('ngAutosize', [])
    .directive('autosize', function() {
      return {
        scope: {
          'submit': '&autosizeSubmit'
        },
        link: function(scope, element) {
          autosize(element);
          $(element)
            .keypress(function(e) {
              if (e.which == 13 && !e.shiftKey) {
                if (scope.submit) {
                  scope.submit();
                }

                e.preventDefault();
              }
            });
        }
      };
    });
}));