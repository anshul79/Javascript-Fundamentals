// for promiseClass.js

// Test case 2:
/*
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(1), 1000);
    });
    
    promise.then(function(result) {
        alert(result); // 1
        return result * 2;
    });
    
    promise.then(function(result) {
        alert(result); // 1
        return result * 2;
    });
    
    promise.then(function(result) {
        alert(result); // 1
        return result * 2;
    });
/*

// Test Case 3:
// When the success callbacks return promises
/*
    new Promise(function(resolve, reject) {

        setTimeout(() => resolve(1), 1000);
    
    }).then(function(result) {
    
        alert(result); // 1
    
        return new Promise((resolve, reject) => { // (*)
        setTimeout(() => resolve(result * 2), 1000);
        });
    
    }).then(function(result) { // (**)
    
        alert(result); // 2
    
        return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
        });
    
    }).then(function(result) {
    
        alert(result); // 4
    
    });
*/
