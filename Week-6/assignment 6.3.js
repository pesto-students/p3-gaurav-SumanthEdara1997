const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

// Sort array function
const sortArr = arr => {
    let start = 0, mid = 0; end = arr.length - 1;

    while(mid <= end) {
        switch(arr[mid]) {
            case 0:
                swap(arr, start, mid);
                start++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(arr, mid, end);
                end--;
                break;
        }
    }

    return arr;
}
let x = sortArr([1,0,1,2,1,2,2,1,0,1,0,0]);
  console.log(x);

//time complexity O(n)
//space complexity O(1)  

  /*Using three-pointers

Make three-pointers start, mid and end where the start and mid are equal to 0 and end is equal to the index of the last element of the array.
2. Initializes pivot to 1

3. Traverse the array condition being mid <= end

If arr[mid] is less than pivot — swap, increment start and mid by 1
If arr[mid] is greater than pivot — swap, decrement end by 1
If none of the conditions is true then increment mid by 1
7. Return the sorted arr.*/










/*const sortArr = arr => {
    // step 1
      let c0 = 0, c1 = 0, c2 = 0, i;
    
    // step2
      for(i = 0; i < arr.length; i++) {
          switch(arr[i]) {
              case 0:
                  c0++;
                  break;
              case 1:
                  c1++;
                  break;
              case 2:
                  c2++;
                  break;
          }
      }
      
      // step 3
      i = 0;
      while(c0 > 0) {
          arr[i++] = 0;
          c0--;
      }
  
      while(c1 > 0) {
          arr[i++] = 1;
          c1--;
      }
  
      while(c2 > 0) {
          arr[i++] = 2;
          c2--;
      }
  
      return arr;
  };
  let x = sortArr([1,0,1,2,1,2,2,1,0]);
  console.log(x);*/