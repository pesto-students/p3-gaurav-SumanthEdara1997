function createIncrement() 
{
    let count = 0;
    // let message; if we are declaring the message here - solution
    function increment() 
    {
      count++;
    }//message is declared outside the function - problem
    //before closing this below message declaration should be written with in the function increment() - solution

       let message =`Count is ${count}`;// after delclaring the message on the top of increment function we can remove let here just we can use message - solution
    
       function log() 
    {
        console.log(message);//if we are placing count in place of message we will get the log as 3 example: console.log(count) and the log() will be 3
    }
    return[increment,log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();//Count is 0 (here we are getting 0 beacuse we incrementing the count but message remains same)
//solution for this is 
/*function createIncrement() 
{
    let count = 0;
    let message;
    function increment() 
    {
      count++;
      message =`Count is ${count}`;
    }
       function log() 
    {
        console.log(message);
    }
    return[increment,log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // the output will be Count is 3*/