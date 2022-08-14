const foo = function() {
    console.log(this.bar);
}

Function.prototype.myBind = function(context, ...args) {
    const self = this;

    return function() {
        self.apply(context, args);
    }
}
let baz = foo.myBind({bar: 'hello'});

console.log(baz());