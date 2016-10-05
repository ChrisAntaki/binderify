function binderify(binder) {
    for (var page in binder) {
        var value = binder[page];
        if (typeof value === 'function') {
            binder[page] = value.bind(binder);
        }
    }
}

module.exports = binderify;
