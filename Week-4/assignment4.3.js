const Fib = {
    n:7,
    [Symbol.iterator]: function() {
        let i =1;
        let old = 0, new1 = 0;
        return {
            next: () => {
                if(i++ <= this.n) {
                   [old, new1] = [new1, (old+new1) || 1];
                 // console.log(old);
                    return {value: old, done: false}
                }
                else {
                    return {done : true}
                }
            }
        }
    }
};
Fib.then
console.log(...Fib); // prints in horizontal order

for ( let num of Fib){
    console.log(num);
} // prints in vertical order