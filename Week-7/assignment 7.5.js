 
    /* prints element
    elements of arr[] of size n */
    function printN(arr, n)
    {
        var s = [];
        let res = new Array(n);
  
        // iterate for rest of the elements
        for (let i = n - 1; i >= 0; i--)
        {
            /* if stack is not empty, then
            pop an element from stack.
            If the popped element is smaller
            than next, then
            a) print the pair
            b) keep popping while elements are
            smaller and stack is not empty */
            if (s.length != 0)
            {
                while (s.length != 0 && s[s.length-1] <= arr[i])
                {
                    s.pop();
                }
            }
            res[i] = s.length == 0 ? -1 : s[s.length-1];
            s.push(arr[i]);
        }
        for (let i = 0; i < arr.length; i++)
            console.log(arr[i] + " --> " + res[i]);
    }
  
       let arr = [ 11, 13, 3, 21 ];
    let n = arr.length;
  
    // Function call
    printN(arr, n);