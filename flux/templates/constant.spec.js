/* jshint newcap:false */
/* jshint -W024 */<% if (testFramework === 'mocha') { %>
/* jshint expr:true */<% } %>

'use strict';

var <%= _.classify(name) %> = require('<%= rootDir %>../<%= constantFile %>');

describe('Testing Flux Constant: <%= _.classify(name) %>', function() {

    var ReactTestUtils;
    var reactRender;

    beforeEach(function() {
        ReactTestUtils = require('react/addons').addons.TestUtils;
    });

    it('Should run a few assertions', function() {

    });
});
