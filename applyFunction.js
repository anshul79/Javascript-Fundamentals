// Implement Function.prototype.apply()

/*
    const foo = function (msg1, msg2) {
        console.log(msg1 + ' ' + msg2 + ' ' + this.bar);
    }

    foo.apply({bar: 'Anshul'}, ['hello', 'world']); // hello world Anshul
*/

Function.prototype.apply = function(newContext) {
    // point 'this' to newContext's scope and call the function
    newContext.fn = this;

    var args = arguments[1];

    return newContext.fn(...args);
};
