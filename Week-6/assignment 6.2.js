const spiralOrder = (matrix) => {
    let top = 0;
    let left = 0;
    let bottom = matrix.length-1;
    let right = matrix[0].length-1;
    const result = [];
    const size = matrix.length*matrix[0].length;
    while(result.length<size) {
        for(let i=left; i<=right && result.length < size; i++){
            result.push(matrix[top][i]);
        }
        top++;
        for(let i=top; i<=bottom && result.length < size; i++){
            result.push(matrix[i][right]);
        }
        right--;
        for(let i=right; i>= left && result.length < size; i--){
            result.push(matrix[bottom][i]);
        }
        bottom--;  
        for(let i=bottom; i>=top && result.length < size; i--){
            result.push(matrix[i][left]); 
        }
        left++;     
}
return result;
};
let x = spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);
console.log(x);

// time complexity is O(n)
// space complexity is O(1)


/** Given a 2D array, print it in spiral form. */
/*const matrix = [
    [1, 2 ,3],
    [4, 5, 6],
    [7, 8, 9],
  ];

const walkMatrix = matrix => {
    const result = [];
  
    // Initialize the upper and lower bounds indexes
    const rowCount = matrix.length;
    const columnCount = matrix[0].length;
    let startRow = 0;
    let endRow = rowCount - 1;
    let startColumn = 0;
    let endColumn = columnCount - 1;
  
    // We will keep walking as long as rows or columns remain.
    // That happens as long as the end is greater or equal to the start.
    while (endRow >= startRow && endColumn >= startColumn) {
      // Walk across the top starting row for each column from beginning to end
      // This is left-right across the top
      for (let column = startColumn; column <= endColumn; column++) {
        // Add the item to result in order
        result.push(matrix[startRow][column]);
      }
  
      // Increment our start row since we visited each value
      startRow++;
  
      // Walk top-bottom for the end column
      for (let row = startRow; row <= endRow; row++) {
        result.push(matrix[row][endColumn]);
      }
      endColumn--;
  
      // Since we increment startRow, we need to make sure we are still in bounds
      if (endRow >= startRow) {
        //  Walk right-left on the bottom row
        for (let column = endColumn; column >= startColumn; column--) {
          result.push(matrix[endRow][column]);
        }
      }
      endRow--;
  
      // Since we increment startRow, we need to make sure we are still in bounds
      if (endColumn >= startColumn) {
        // walk bottom-top for the start column
        for (let row = endRow; row >= startRow; row--) {
          result.push(matrix[row][startColumn]);
        }
      }
      startColumn++;
    }
  
    return result;
  };

  console.log(walkMatrix(matrix))*/


  /*var spiralOrder = (matrix) => {
    let m = matrix.length, n = matrix[0].length;
    let result = [];
    let k = 0, l = 0, i;

    while(k < m && l < n) {
        for(i = l; i < n; i++) {
            result.push(matrix[k][i]);
        }
        k++;

        for(i = k; i < m; i++) {
            result.push(matrix[i][n - 1]);
        }
        n--;

        if(k < m) {
            for(i = n - 1; i >= l; i--) {
                result.push(matrix[m - 1][i]);
            }
            m--;
        }

        if(l < n) {
            for(i = m - 1; i >= k; i--) {
                result.push(matrix[i][l]);
            }
            l++;
        }
    }

    return result;
};
let x = spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);
console.log(x);*/

//dry run for the above code
/*Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

Step 1: k = 0, l = 0, i
        m = matrix.size()
          = 3
        n = matrix[0].size()
          = 3
        initialize vector<int> result

Step 2: loop while k < m && l < n
        0 < 3 && 0 < 3
        true

          loop for i = l; i < n; i++
            result.push_back(matrix[k][i])

            // the for loop iterates for i = 0 to 2
            // we fetch matrix[0][0], matrix[0][1] and matrix[0][2]
            result = [1, 2, 3]
            k++
            k = 1

          loop for i = k; i < m; i++
            result.push_back(matrix[i][n - 1])

            // the for loop iterates for i = 1 to 2
            // we fetch matrix[1][2] and matrix[2][2]
            result = [1, 2, 3, 6, 9]
            n--
            n = 2

          if k < m
            1 < 3
            true

            loop for i = n - 1; i >= l; i--
              result.push_back(matrix[m - 1][i])

              // the for loop iterates for i = 2 to 0
              // we fetch matrix[2][1] and matrix[2][0]
              result = [1, 2, 3, 6, 9, 8, 7]
              m--
              m = 2

          if l < n
            0 < 2
            true

            loop for i = m - 1; i >= k; i--
              result.push_back(matrix[i][l])

              // the for loop iterates for i = 1 to 1
              // we fetch matrix[1][0]
              result = [1, 2, 3, 6, 9, 8, 7, 4]
              l++
              l = 1

Step 3: loop while k < m && l < n
        1 < 2 && 1 < 2
        true

          loop for i = l; i < n; i++
            result.push_back(matrix[k][i])

            // the for loop iterates for i = 1 to 1
            // we fetch matrix[1][1]
            result = [1, 2, 3, 6, 9, 8, 7, 4, 5]
            k++
            k = 2

          loop for i = k; i < m; i++
            result.push_back(matrix[i][n - 1])

            // no iteration as k is 2 and m is 2
            // i = k; i = 2 and 2 < 2 false
            n--
            n = 1

          if k < m
            2 < 3
            true

            loop for i = n - 1; i >= l; i--
              result.push_back(matrix[m - 1][i])

            // no iteration as n is 1 and l is 1
            // i = n - 1; i = 0 and 0 >= 1 false
            m--
            m = 1

          if l < n
            1 < 1
            false

            l++
            l = 2

Step 4: loop while k < m && l < n
        2 < 1 && 2 < 1
        false

Step 5: return result

So we return the answer as [1, 2, 3, 6, 9, 8, 7, 4, 5].*/


/*var spiralOrder1 = (matrix) => {
    var n = matrix.length;
    var m = (matrix[0] || []).length;
    var res = [];
    var x1 = 0;
    var x2 = m - 1;
    var y1 = 0;
    var y2 = n - 1;
    while (x1 <= x2 && y1 <= y2) {
      for (var x = x1; x <= x2; x++) 
      res.push(matrix[y1][x]);
      for (var y = y1 + 1; y <= y2; y++) 
      res.push(matrix[y][x2]);
      if (x1 < x2 && y1 < y2) {
        for (var x = x2 - 1; x > x1; x--) 
        res.push(matrix[y2][x]);
        for (var y = y2; y > y1; y--) 
        res.push(matrix[y][x1]);
      }
      x1++;
      x2--;
      y1++;
      y2--;
    }
    return res;
  };
let y=spiralOrder1([[1,2,3],[4,5,6],[7,8,9]]);
console.log(y);*/