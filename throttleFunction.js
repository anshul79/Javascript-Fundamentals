// Implement throttle
// throttle(throttledFn, 3000);

function throttle(func, time) {
    var setTimeoutId;

    return function (arguments) {
        if(setTimeoutId) {
            return;
        }

        setTimeoutId = setTimeout(() => {
            setTimeoutId = null;
            return func.apply(this, arguments);  // OR return func.call(this, ...arguments);
        }, time);
    }
}