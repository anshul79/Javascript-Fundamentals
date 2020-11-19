// Create a function to turn any function into a "promisified" function
// Any function to be promisified will always have a callback argument
// The callback will always have this signature:
//        function(result){}

/* 
    const exampleFn = function(x, y, callback) {};

    const promisifiedFn = promisify(exampleFn);

    promisifiedFn.then(...).then(...)
*/

function promisify(fn) {
    return function(...args) {
        return new Promise(function (resolve, reject) {
            function cb(result) {
                resolve(result);
            }

            fn.apply(this, args.concat(cb));
        });
    }
}
