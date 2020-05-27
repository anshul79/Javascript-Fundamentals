// Create a function to move an element. The function argumensts are:
// distance, duration and the element to move.

/*
    function moveElement(duration, distance, element);
*/
var start = null;

function moveElement(duration, distance, element) {

    function move(timestamp) {
        if(!start) { // OR start = performance.now();
            start = timestamp;
        }

        let elapsed = timestamp - start;
        let progress = elapsed / duration;
        let disToMove = progress * distance;

        element.style.transform = `translateX(${ disToMove }px)`;

        if(disToMove < distance) {
            requestAnimationFrame(move);
        }
    }
    requestAnimationFrame(move);
}
