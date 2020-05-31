// Create an iterator function that iterates over an array

function iterator(array) {
    let i = 0;
    const inner = {
        next: function() {
            const element = array[i];
            i++;
            return {
                done: (i > array.length),
                value: element
            };
        }
    }
    return inner;
}
    
const returnNextElement = iterator([4,5,6]);
const element1 = returnNextElement.next().value;
const element2 = returnNextElement.next().value;
const element3 = returnNextElement.next().value;
const element4 = returnNextElement.next().value;

console.log(element1);
console.log(element2);
console.log(element3);
console.log(element4);

// we are able to access 'array' and the index 'i' because when inner object is returned
// and assigned to the returnNextElement, it's functions have the surrounding environment's properties
// attached to it.
// So, it will look for 'array' and 'i' in the local execution context, then in the backpack of data 
// that is associated with the current execution context / function, and then the global scope

// Output
// 4
// 5
// 6
// undefined
    