/*global describe, beforeEach, it*/
'use strict';

var assert  = require('assert');

describe('Yeogurt generator and sub-generators', function() {
    it('can be imported without blowing up', function() {
        assert(require('../../app') !== undefined);
        // Sub-generators
        assert(require('../../style') !== undefined);
        assert(require('../../script') !== undefined);
        assert(require('../../react') !== undefined);
        assert(require('../../view') !== undefined);
        assert(require('../../model') !== undefined);
        assert(require('../../collection') !== undefined);
        assert(require('../../template') !== undefined);
    });
});
