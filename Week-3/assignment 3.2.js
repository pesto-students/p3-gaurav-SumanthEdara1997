var obj = { num: 2 };

function add(a, b){
  return this.num + a + b;
}

const resultCall  = add.call(obj, 3, 5);//call accepts multiple arguments
const resultApply = add.apply(obj, [3, 5]);// apply and call both are same but the major difference call accepts argument list where as apply accepts array of arguments
const funcBind    = add.bind(obj, 3, 5)//bind is reminiscent of call() and apply(). But instead of executing a function immediately, bind() returns a function that can be executed later on.
const resultBind  = funcBind();

console.log(resultCall, resultApply, resultBind);//output is 10 10 10