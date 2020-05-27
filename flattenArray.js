// Withour using .flat(), create a function to flatten an array

// const exampleArray = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10]
// flatten(exampleArray); // [1, 2, 3, 4, 5, 6, 7, 8, 8, 10];

function flatten(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            newArray = newArray.concat(flatten(array[i]));
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

var exampleArray = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];
// console.log(flatten(exampleArray));

function flatten2(array) {
    let newArray = [];
    newArray = array.reduce((acc, item) => {
        if(Array.isArray(item)) {
            acc = acc.concat(flatten2(item));
        } else {
            acc.push(item);
        }
        return acc;
    }, []);
    return newArray;
}

// console.log(flatten2(exampleArray));
