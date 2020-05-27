// Implement debounce
// debounce(debouncedFn, 3000);

function debounce(func, time) {
    var setTimeoutId;

    return function (arguments) {
        if(setTimeoutId) {
            clearInterval(setTimeoutId);
        }

        setTimeoutId = setTimeout(() => {
            func.apply(this, arguments); // OR func.call(this, ...arguments);
            setTimeoutId = null;
        }, time);
    }
}