// Implement Function.prototype.bind()

/*
    const foo = function () {
        console.log(this.bar);
    }

    let baz = foo.bind({bar: 'hello'});

    baz(); // hello
*/

Function.prototype.bind = function(newContext) {
    // point 'this' to newContext's scope
    const fn = this;
    return function () {
        fn.call(newContext);
    };
};
