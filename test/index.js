// Modules
const assert = require('assert');
const binderify = require('../binderify');

describe('binderify', () => {
    it('should bind object methods', () => {
        const obj = {
            val: 1,
            ret: function() {
                return this.val;
            },
        };

        binderify(obj);

        const method = obj.ret;
        assert.equal(method(), 1);
    });
});
