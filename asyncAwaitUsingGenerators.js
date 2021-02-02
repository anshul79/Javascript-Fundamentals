// Implement the functionality of async and await without using async and await keywords

function doWhenDataReceived (value) {
    returnNextElement.next(value);
}
function* createFlow() {
    const data = yield fetch('http://twitter.com/');
    console.log(data);
}
    
const returnNextElement = createFlow();
const futureData = returnNextElement.next();

futureData.value.then(doWhenDataReceived);
