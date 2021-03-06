/**
*   Signup Component Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

var React = require('react');
var SignupComponent = React.createFactory(require('../../../../client/scripts/components/account/signup<% if (useJsx) { %>.jsx<% } %>'));

describe('Signup Component', function() {

    var ReactTestUtils;
    var reactRender;

    beforeEach(function() {
        ReactTestUtils = require('react/addons').addons.TestUtils;
        reactRender = ReactTestUtils.renderIntoDocument;
        this.signupComponent = new SignupComponent();
    });

    it('provides the "Signup Component" instance', function() {
        // Expect it to exist
        expect(this.signupComponent)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
