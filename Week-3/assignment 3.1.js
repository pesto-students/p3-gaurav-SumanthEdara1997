
//creating memoize function
const memoize = (fn) => {
  let cache = {}
  return (...args) => {  //the return function now accepts an unspecified number of parameters which can be accessed by using the array args or the arguments object.
      let cacheKey = args.map(n => n.toString() + '+').join('') // line 6,7,8,11 - we declared a variable called “cacheKey” which represents the name of the key (previously “n”) that will be used to either access the cache or declare a new cache property. This change is made in order to keep track of multiple inputs. We form cacheKey by mapping over the “args” array and returning a string of “n” and a “+”. For example, when calling memoizeAdd(10, 20, 30) the cacheKey will be “10+20+30+”.
      if (cacheKey in cache) {
          return cache[cacheKey]
      } else {
          let result = args.reduce((acc, curr) => fn(acc, curr), 0); //due to the fact that memoizeAdd can accept any unspecified number of parameters, in order to find the sum of all parameters we can use Array.prototype.reduce.
          cache[cacheKey] = result;
          return result;
      }
  }
}
// display the time that is taken to execute
function time(fn){
  console.time();
  fn();
  console.timeEnd();
}
// returned function from memoizedAdd
const add = (a, b) => a + b
const memoizeAdd = memoize(add);
console.time();
console.log(memoizeAdd(100, 200, 300, 400, 500, 600)); // calculated
console.timeEnd();
console.time();
console.log(memoizeAdd(700, 800, 900, 1000, 1100)); // cached
console.timeEnd();
