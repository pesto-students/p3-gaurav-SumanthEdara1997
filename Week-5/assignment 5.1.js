//async await implemetation
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('promise resolved')}, 1000);
    });

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('promise resolved')}, 2000);
    });

let promise3 = new Promise(function (resolve, reject) {
   setTimeout(function () {
      resolve('promise resolved')}, 3000);
     });  

async function asyncFunc(){
        let result1 = await promise1;
        console.log(result1);
        console.log('promise 1 resolved');
        
        let result2 = await promise2;
        console.log(result2);
        console.log('promise 2 resolved');

        let result3 = await promise3;
        console.log(result3);
        console.log('promise 3 resolved');
    }
    asyncFunc();
// generator function implementation
function* gen(){
        yield Promise.resolve('promise resolved');
        console.log('promise 1 resolved');
        
        yield Promise.resolve('promise resolved');
        console.log('promise 2 resolved');

        yield Promise.resolve('promise resolved');
        console.log('promise 3 resolved');
        return 'completed';
    }
    const iter = gen();
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
  


