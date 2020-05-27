// Implement debounce
// debounce(debouncedFn, 3000);

function debounce(func, time) {
    let setTimeoutId;

    return function (arguments) {
        if(setTimeoutId) {
            clearInterval(setTimeoutId);
        }

        setTimeoutId = setTimeout(() => {
            func.apply(this, arguments);
            setTimeoutId = null;
        }, time);
    }
}