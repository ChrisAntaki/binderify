// Modules
const assert = require('assert');
const binderify = require('../binderify');

describe('binderify', () => {
    it('should bind class methods', () => {
        class Node {
            constructor(data) {
                binderify(this);

                this.data = data;
            }

            report() {
                return this.data;
            }
        }

        const node = new Node(128);
        const method = node.report;
        assert.equal(method(), 128);
    });

    it('should bind object methods', () => {
        const object = {
            value: 1,
            return: function() {
                return this.value;
            },
        };

        binderify(object);

        const method = object.return;
        assert.equal(method(), 1);
    });
});
