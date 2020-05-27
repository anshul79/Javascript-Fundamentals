// Implement throttle
// throttle(throttledFn, 3000);

function throttle(func, time) {
    let setTimeoutId;

    return function () {
        if(setTimeoutId) {
            return;
        }

        setTimeoutId = setTimeout(() => {
            func.apply(this, arguments);
            setTimeoutId = null;
        }, time);
    }
}