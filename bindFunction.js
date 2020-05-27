// Implement Function.prototype.bind()

/*
    const foo = function (msg1, msg2) {
        console.log(msg1 + ' ' + msg2 + ' ' + this.bar);
    }

    let baz = foo.bind({bar: 'Anshul'}, 'hello');

    baz('world'); // hello world Anshul
*/

Function.prototype.bind = function(newContext) {
    // point 'this' to newContext's scope
    if(typeof this != 'function') {
        throw new Error(this + ' cannot be bound as it is not callable');
    }

    const fn = this;

    let args = [];
    for(let i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    return function () {
        let args2 = [];
        for(let i = 0; i < arguments.length; i++) {
            args2.push(arguments[i]);
        }

        fn.apply(newContext, args.concat(args2));
    };
};
