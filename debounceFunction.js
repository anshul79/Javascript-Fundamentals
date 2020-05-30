// Implement debounce
// debounce(debouncedFn, 3000);

function debounce(func, time) {
    var setTimeoutId;

    return function (arguments) {
        if(setTimeoutId) {
            clearInterval(setTimeoutId);
        }

        setTimeoutId = setTimeout(() => {
            setTimeoutId = null;
            return func.apply(this, arguments); // OR return func.call(this, ...arguments);
        }, time);
    }
}
