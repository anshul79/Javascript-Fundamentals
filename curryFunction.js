/*  Write an implementation for currying a function like:

    function fun(a,b,c) {
        console.log(a + b + c);
    }
    curriedFn = curry(fun);

    The following should give same result:
    fun(10,20,30);
    curriedFn(10,20,30);
    curriedFn(10)(20,30);
    curriedFn(10,20)(30);
    curriedFn(10)(20)(30);

    var partial = curriedFn(10);
    partial(20, 30);

    var partial2 = curriedFn(10, 20);
    partial2(30);
*/

function curry (func) {
    return function curried (...args) {
        if(args.length >= func.length) {
            // we run the function in the last step when we get all the arguments
            return func.apply(this, args);
        } else {
            // recursive step - receives additional arguments
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}
