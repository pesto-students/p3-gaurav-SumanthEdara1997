
function createStack() 
{  
    let items = [];// we have declared the items before return 
    return {
        push: function (element) // created a push function
        {
          return items.push(element);
        },
      pop: function (element)  // created a pop function
    {
       if (items.length > 0) {
       return items.pop(element);
         }
     }
         }
}
   const stack=createStack();
    stack.push(10);
    stack.push(5);
    console.log(stack.pop());// => 5
    console.log(stack.items);// => undefined 
