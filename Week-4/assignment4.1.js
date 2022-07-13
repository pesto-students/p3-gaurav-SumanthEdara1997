//implemented promise using custom promise function
const CustomPromiseState = {
    PENDING : "PENDING",
    RESOLVED : "RESOLVED",
    REJECTED : "REJECTED",
};
 class CustomPromise {
    constructor(fn) {
        this.CustomPromiseState = CustomPromiseState.PENDING;
        this.resolver = this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);
        this.thenFn = null;
        this.catchFn = null;
        fn(this.resolver, this.rejector);
    }
    resolver(resolvedData) {
        if(this.CustomPromiseState = CustomPromiseState.PENDING) {
            this.thenFn && this.thenFn(resolvedData);
        }
        this.CustomPromiseState = CustomPromiseState.RESOLVED;
    }
    rejector(rejectedData) {
        if(this.CustomPromiseState = CustomPromiseState.PENDING) {
            this.catchFn && this.catchFn(rejectedData);
        }
        this.CustomPromiseState = CustomPromiseState.REJECTED;
    }
    then(thenFn) {
        this.thenFn = thenFn;
        return this;
    }
    catch(catchFn) {
        this.catchFn = catchFn;
        return this;
 }
}
 const getNumber =
 new CustomPromise((res, rej) => {
    const randomNumber = parseInt (Math.random() * 100, 10);
    setTimeout(() => {
        if (randomNumber % 5 === 0) {
          rej(`Reject with number : ${randomNumber}`);
        }
          res(`Resolve with number : ${randomNumber}`);
    }, randomNumber*10); 
});
 getNumber
 .then (
    result => {
        console.log(result);
    },
    error => {
        console.log(error);
    }
 );






//implemented using promise function
/*const getNumber =
 new Promise((resolve, reject) => {
    const randomNumber = parseInt (Math.random() * 100, 10);
    setTimeout(() => {
        if (randomNumber % 5 === 0) {
          reject(`Reject with number : ${randomNumber}`);
        }
          resolve(`Resolve with number : ${randomNumber}`);
    }, randomNumber*10);
});

 getNumber
 .then (
    result => {
        console.log(result);
    },
    error => {
        console.log(error);
    }
 );*/