/**
 * PubSub
 * let channel = new PubSub()
 * channel.subscribe("event1", () => {
 * should get called
 * })
 * 
 * channel.publish("event2")
 * channel.publish("event1")
 */

class PubSub {
  constructor() {
    this.obj = {};

  }
  subscribe = function (arg, fn) {
    if(this.obj[arg] != undefined) {
      this.obj[arg].push(fn);
      return;
    }
    this.obj[arg] = [fn];
  }
  
  publish = function (arg, data) {
    let index = 0;
    
    let nxt = next.bind(this);
    nxt();

    function next() {
      if(this.obj[arg] != undefined) {
      // for(let j = 0; j < this.obj[arg].length; j++) {
        // let nxt2 = next.bind(this);
        let i = index;
        index++;
        if(i === this.obj[arg].length - 1) {
          this.obj[arg][i](data, next2);
        } else {
          this.obj[arg][i].call(this, data, nxt);
        }
      // }
      }
    }
    
    function next2() {
      return;
    }

  }
  
  unsubscribe = function (arg, fn) {
    if(this.obj[arg] != undefined) {
      for(let j = 0; j < this.obj[arg].length; j++) {
        if(this.obj[arg][j] == fn) {
          this.obj[arg].splice(j, 1);
        }
      }
    }
  }
  
  clean = function () {
    this.obj = {};
  }
}
  
// let channel = new PubSub()
// let fn = (data, next) => {
//   setTimeout(() => {
//     console.log(data, "log 1")    
//     next()
//   }, 100)
// }
  
//   channel.subscribe("event1", fn)
//   channel.subscribe("event1", (data, next) => {
//     console.log(data, "log 2")
//     next()
//   })
//   channel.publish("event1", 1)

  
  // channel.publish("event1", 2)
  // channel.publish("event2", 3)
  // channel.unsubscribe("event1", fn)
  // channel.publish("event1", 1)
  