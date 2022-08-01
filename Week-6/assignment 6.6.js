const threeSumClosest = (nums, target) => {
    if(nums.length < 3) {
        return 0;
    }
    nums.sort();
    
    let i = 0, minDiff = Number.MAX_VALUE;
    let sum;

    while( i < nums.length - 2 ){
        let left = i + 1;
        let right = nums.length - 1

        while( right > left ){
            let temp = nums[i] + nums[left] + nums[right];
            let diff = Math.abs(temp - target);

            if( diff == 0 ){
                return target;
            }

            if( diff < minDiff ){
                minDiff = diff;
                sum = temp;
            }

            if( temp < target ){
                left++;
            } else {
                right--;
            }
        }
        i++;
    }

    return sum;
};
let x = threeSumClosest([-1,2,1,-4], 1);
console.log(x);


/*Input: nums = [-1, 2, 1, -4], target = 1

Step 1: if nums.size() < 3
           4 < 3
           false

Step 2: sort(nums.start(), nums.end())
          - [-4, -1, 1, 2]

Step 3: int i = 0;
        int sum, minDiff = INT_MAX;

Step 4: loop while i < nums.size() - 2
        0 < 4 - 2
        0 < 2
        true

        left = i + 1
             = 0 + 1
             = 1
        right = nums.size() - 1
              = 4 - 1
              = 3

        loop while right > left
        3 > 1
        true

        temp = nums[i] + nums[left] + nums[right]
             = nums[0] + nums[1] + nums[3]
             = -4 + -1 + 2
             = -3

        diff = abs(temp - target)
             = abs(-3 - 1)
             = abs(-4)
             = 4

        if diff == 0
           4 == 0
           false

        if diff < minDiff
           4 < INT_MAX
           true

           minDiff = diff
                   = 4
           sum = temp
               = -3

        if temp < target
           -3 < 4
           true

           left++
           left = 2

        loop while right > left
        3 > 2
        true

        temp = nums[i] + nums[left] + nums[right]
             = nums[0] + nums[2] + nums[3]
             = -4 + 1 + 2
             = -1

        diff = abs(temp - target)
             = abs(-1 - 1)
             = abs(-2)
             = 2

        if diff == 0
           2 == 0
           false

        if diff < minDiff
           2 < 4
           true

           minDiff = diff
                   = 2
           sum = temp
               = -1

        if temp < target
           -1 < 4
           true

           left++
           left = 3

        loop while right > left
        3 > 3
        false

        i++
        i = 1

Step 5: loop while i < nums.size() - 2
        1 < 4 - 2
        1 < 2
        true

        left = i + 1
             = 1 + 1
             = 2
        right = nums.size() - 1
              = 4 - 1
              = 3

        loop while right > left
        3 > 2
        true

        temp = nums[i] + nums[left] + nums[right]
             = nums[1] + nums[2] + nums[3]
             = -1 + 1 + 2
             = 2

        diff = abs(temp - target)
             = abs(2 - 1)
             = abs(1)
             = 1

        if diff == 0
           1 == 0
           false

        if diff < minDiff
           1 < 2
           true

           minDiff = diff
                   = 1
           sum = temp
               = 2

        if temp < target
           2 < 4
           true

           left++
           left = 3

        loop while right > left
        3 > 3
        false

        i++
        i = 2

Step 6: loop while i < nums.size() - 2
        2 < 4 - 2
        2 < 2
        false

Step 7: return sum
        return 2

So the answer is 2.*/