A = (num) => num+1;
B = (num) => num - 1;
C = (num) => num/5;
D = (num) => num*10;

/** 
create a function/class where
 const service = new Order();
 service.add(A, [D, C]);
 service.add(D, [C]);
 service.add(C, [B]);
 5 => B (4)-> C (2)-> D (4)-> A (5) => 5
 service.call(5); output = 5
*/

class Order {
    constructor() {
        this.mp = new Map();
    }
    add (func, arr) {
        if(!this.mp.get(func)) {
            this.mp.set(func, new Set());
        }
        for(let ele of arr) {
            let tempSet = this.mp.get(func);
            tempSet.add(ele);
            this.mp.set(func, tempSet);
            
            if(!this.mp.get(ele)) {
                this.mp.set(ele, new Set());
            }
        }
    }
    call (num) {
        let result = num;
        let flagOfCircularDependency = 1;
        // first pick the func having no dependency from map of sets
        while(this.mp.size !== 0) {
            for(let key of this.mp.keys()) {
                if(this.mp.get(key).size === 0) {
                    flagOfCircularDependency = 0;
                    result = key(result);
                    this.mp.delete(key); // that func has executed, so its dependencies has also executed
                    // also delete this key from other dependencies
                    for(let key2 of this.mp.keys()) {
                        this.mp.get(key2).delete(key);
                    }
                }
            }
            if(flagOfCircularDependency === 1) {
                // just execute any one function
                for(let key of this.mp.keys()) {
                    result = key(result);
                    this.mp.delete(key); // that func has executed, so its dependencies has also executed
                    // also delete this key from other dependencies
                    for(let key2 of this.mp.keys()) {
                        this.mp.get(key2).delete(key);
                    }
                    // once a function has run, again check if there is a function with no dependency
                    break;
                }
            }
        }
        return result;
    }
}

// const service = new Order();
//  service.add(A, [D, C]);
//  service.add(D, [C]);
//  service.add(C, [B]);
//  service.add(B, [C]);

//  console.log(service.call(5));
