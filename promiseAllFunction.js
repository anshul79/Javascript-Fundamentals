// Implement Promise.all function

/*
    const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
        resolutionFunc("Yayyy");
    });
    const promiseB = Promise.resolve(3);
    const promiseC = new Promise( (resolutionFunc,rejectionFunc) => {
        for(let i = 0; i < 50000; i++) {}
        resolutionFunc("I have completed last");
    });
    promiseAll([promiseA, promiseB, promiseC]).then(function (values) {
        console.log(values); // ["Yayyy", 3, "I have completed last"]
    });
    console.log("immediate logging");
*/

function promiseAll (promises) {
    let results = [];
    let completedPromises = 0;
    return new Promise(function(resolve, reject) {
        promises.forEach((promise) => {
            promise.then(function(promiseResult) {
                results.push(promiseResult);
                completedPromises++;
                if(completedPromises === promises.length) {
                    resolve(results);
                }
            })
            .catch(function(error) {
                reject(error);
            });
        });
    });
};
