// Implement throttle
// throttle(throttledFn, 3000);

function throttle(func, time) {
    var setTimeoutId;

    return function (arguments) {
        if(setTimeoutId) {
            return;
        }

        setTimeoutId = setTimeout(() => {
            func.apply(this, arguments);  // OR func.call(this, ...arguments);
            setTimeoutId = null;
        }, time);
    }
}