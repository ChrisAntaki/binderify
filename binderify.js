function binderify(binder) {
    let names;
    if (binder.constructor === Object) {
        names = Object.getOwnPropertyNames(binder);
    } else {
        const prototype = Object.getPrototypeOf(binder);
        names = Object.getOwnPropertyNames(prototype);
    }

    names.forEach(name => {
        let value = binder[name];
        if (value.constructor === Function) {
            binder[name] = value.bind(binder);
        }
    });
}

module.exports = binderify;
