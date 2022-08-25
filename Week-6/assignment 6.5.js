const findpairs = (nums,k) => {
    let prev = {};
    pairs = 0;
    nums.sort((a,b) => a-b);
    for(let i=0; i<nums.length; i++) {
        let key = nums[i];
        if(!prev[key]) {
            let dif = key-k;
            if(prev[dif] !== undefined) {
                pairs++;
            }
            prev[key]=1;
        } else if(k===0){
            if(prev[key]===1) {
                pairs++;
            }
            prev[key]++;
        }
    }
    return pairs;
};
let x = findpairs([5, 10, 3, 2, 50, 80,88,83,81, 76, -2], 78);
console.log(x);


//time complexity O(n)
// space complexity O(1)
