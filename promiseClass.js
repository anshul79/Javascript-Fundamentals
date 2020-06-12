/* Implement Promise class */

// Test case 1:
/*
    const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
        // a long for loop can be put here
        resolutionFunc("Yayyy");
    });
    // At this point, "promiseA" is already settled.
    promiseA.then(function (val) {
        for(let i = 0; i < 1000000000; i++) {
            // do nothing
        }
        console.log("asynchronous logging has val:",val);
        return val;
    })
    .then(function (val2) {
        val2 += ", promise chaining is done";
        console.log(val2);
        return val2;
    })
    .then(function (val3) {
        console.log(val3 + "! I am now happy");
    });
    console.log("immediate logging");
*/

class Promise {
    statuses = {
        pending: 'Pending',
        resolved: 'Resolved',
        rejected: 'Rejected'
    }
    constructor(func) {
        this.value = undefined;
        this.status = this.statuses.pending;
        this.onFulfillment = [];
        this.onRejection = [];

        var futureData = {
            value: this.value,
            status: this.status,
            onFulfillment: this.onFulfillment,
            onRejection: this.onRejection,
            then: this.then,
            catch: this.catch
        };

        // func will call resolve or reject
        const resolve = (value) => {
            this.status = this.statuses.resolved;
            this.value = value;
            this.callOnResolution();
        };

        const reject = (value) => {
            this.status = this.statuses.rejected;
            this.value = value;
            this.callOnRejection();
        };

        // invoke functions in onFulfillment after func has run with success
        // but how do we know that 'then' is going to be called
        // so we delay the execution of func by 0 sec and check that
        setTimeout(() => {
            func(resolve, reject);
        }, 0);

        return futureData;
    }
    
    then = (onFulfilled, onRejected) => {
        this.onFulfillment.push(onFulfilled);
        this.onRejection.push(onRejected);
        // return another promise for chaining
        return new Promise((resolve, reject) => {
            resolve(this.value);
        });
    }

    catch = (onRejected) => {
        this.onRejection.push(onRejected);
    }

    // run onFulfillment functions with argument value
    callOnResolution = () => {
        try {
            this.onFulfillment.forEach(onFulfilled => {
                this.value = onFulfilled(this.value);
            })
            this.onFulfillment.length = 0;
        } catch (error) {
            this.value = error;
            this.callOnRejection();
        }
    }

    callOnRejection = () => {
        this.onRejection.forEach(onRejected => {
            this.value = onRejected(this.value);
        })
        this.onRejection.length = 0;
    }
}
