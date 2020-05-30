// Implement Function.prototype.apply()

/*
    const foo = function (msg1, msg2) {
        console.log(msg1 + ' ' + msg2 + ' ' + this.bar);
    }

    foo.myapply({bar: 'Anshul'}, ['hello', 'world']); // hello world Anshul
*/

Function.prototype.myapply = function(newContext) {
    // point 'this' to newContext's scope and call the function
    newContext.fn = this;

    var args = arguments[1];

    return newContext.fn(...args);
};
