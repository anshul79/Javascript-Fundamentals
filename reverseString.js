// Create a function to reverse a string

/*
    reverse("Hello, World!"); // !dlroW ,olleH
*/

function reverse (str) {
    var arr = str.split(""); // split in characters
    return arr.reverse().join("");
}

var exampleString = "Anshul, hi!";
// console.log(reverse(exampleString));

function reverse2 (str) {
    var arr = str.split("");
    for(let i = 0, j = arr.length - 1; i < j; i++, j--) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr.join("");
}

// console.log(reverse2(exampleString));

function reverse3 (str) {
    var newString = "";
    for(let i = str.length - 1; i >= 0; i--) {
        newString += str.charAt(i);
    }
    return newString;
}

// console.log(reverse3(exampleString));

// function reverse4 (str) {
//     for(let i = 0, j = str.length - 1; i < j; i++, j--) {
//         var temp = str.charAt(j);
//         str.charAt(j) = str.charAt(i); // DOES NOT WORK
//         str.charAt(i) = temp;
//     }
//     return str;
// }

// console.log(reverse4(exampleString));
