// Implement Function.prototype.call()

/*
    const foo = function (msg1, msg2) {
        console.log(msg1 + ' ' + msg2 + ' ' + this.bar);
    }

    foo.apply({bar: 'Anshul'}, 'hello', 'world); // hello world Anshul
*/

Function.prototype.call = function(newContext) {
    // point 'this' to newContext's scope and call the function
    newContext.fn = this;

    var args = [];
    for(let i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    newContext.fn(...args);
};
