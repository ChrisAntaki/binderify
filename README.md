Works with classes and simple objects

```js
const binderify = require('binderify');

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
```

```js
const binderify = require('binderify');

const obj = {
    val: 64,
    ret: function() {
        return this.val;
    },
};

binderify(obj);

const method = obj.ret;
assert.equal(method(), 64);
```