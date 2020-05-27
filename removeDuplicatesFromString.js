// Create a function that takes a string and returns a new string with duplicates removed

// const str = 'This is is a test test string';

// removeDuplicates(str); // This is a test string

// All duplicates need to be removed even if they are not together. Keep the first occurence.

function removeDuplicates(str) { // using Set
    let arr = str.split(' ');
    let mySet = new Set();
    for(let i = 0; i < arr.length; i++) {
        if (mySet.has(arr[i])) {
            arr.splice(i, 1);
            i--;
        } else {
            mySet.add(arr[i]);
        }
    }
    return arr.join(' ');
}

var exampleString = 'This test is is a test test string test';
// console.log(removeDuplicates(exampleString));

function removeDuplicates2(str) {
    const arr = str.split(' ');
    let mySet = new Set(arr);
    return [...mySet].join(' ');
}

// console.log(removeDuplicates2(exampleString));

function removeDuplicates3(str) { // using arrays
    const arr = str.split(' ');
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i])
        }
    }
    return newArray.join(' ');
}

// console.log(removeDuplicates3(exampleString));
