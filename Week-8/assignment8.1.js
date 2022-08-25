class Node{
 
    constructor(){
        this.key = 0
        this.left = null
        this.right = null
    }
 
}
 
// Utility function to create a new node
function newNode(key){
 
    let temp = new Node()
    temp.key = key
    temp.left = null
    temp.right = null
    return temp
 
}
 
// Function to find the height(depth) of the tree
function height(root){
 
    // Initialising a variable to count the
    // height of tree
    let depth = 0
 
    let q = []
     
    // pushing first level element along with null
    q.push(root)
    q.push(null)
    while(q.length>0){
        let temp = q.shift()
     
        // When null encountered, increment the value
        if(temp == null)
            depth += 1
         
        // If null not encountered, keep moving
        if(temp != null){
            if(temp.left)
                q.push(temp.left)
             
            if(temp.right)
                q.push(temp.right)
        }
             
        // If queue still have elements left,
        // push null again to the queue.
        else if(q.length>0)
            q.push(null)
    }
    return depth
 
}
 
// Driver program
 
// Let us create Binary Tree shown in above example
let root = newNode(1)
root.left = newNode('null')
root.right = newNode(2)
//root.left = newNode(9)
//root.right = newNode(20)

//root.left.right = newNode('null')
//root.left.right = newNode('null')

//root.right.left = newNode(15)
//root.right.right = newNode(7)
 
//root.right.left.left = newNode(21)
//root.right.left.right = newNode(22)
//root.right.right.left = newNode(23)
//root.right.right.right = newNode(24)
 
console.log(`Max(Depth) of tree is: ${height(root)}`)
 
// This co


//Definition for a binary tree node.
 /* function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

var maxDepth = function(root) {
   //handler function since it's easier to write and think about recursive code this way. You start at a num/depth value of 1 because of the definition of depth.
   return maxDepthHandler(root,1)
    
};
var maxDepthHandler = function(root, num){
//base case -- if we get an empty root(because you definitely will at some point, just return a depth of zero because there's nothing in the tree!
if(root == null){
      return 0
  }
// this is terminating case. a leaf node doesn't have any children, and so the root at that point will have null value. at this point just return the depth/num
  if (root.right == null && root.left == null){
      return num
  }
//Math.max to get the highest between the two root depths. the rest of this code is just handling the individual root cases.
  if (root.right && root.left){
      return Math.max( maxDepthHandler(root.right, num+1), maxDepthHandler(root.left, num + 1))
  }  else if (root.right != null){
      return maxDepthHandler(root.right, num+1)
  } else {
      return maxDepthHandler(root.left, num+1)
  }
};
TreeNode(7);
let x = maxDepth();
maxDepth.maxDepthHandler[3,9,20,null,null,15,7];
console.log(x);


/*function TreeNode(val) {
       this.val = val;
       this.left = this.right = null;
}
var maxDepth = function(root) {
    if (root === null) {
    return 0;
    } else {
    return 1 + Math.max(maxDepth(root.left) , maxDepth(root.right));
    }
};
let x = maxDepth([3,9,20,null,null,15,7]);
console.log(x);*/

/*class Node
{
    constructor(item)
    {
        this.data=item;
        this.left=this.right=null;
    }
}
 
    let root;
     
     /* Compute the "maxDepth" of a tree -- the number of
       nodes along the longest path from the root node
       down to the farthest leaf node.*/
   /* function maxDepth(node)
    {
        if (node == null)
            return -1;
        else
        {
            /* compute the depth of each subtree */
           // let lDepth = maxDepth(node.left);
           // let rDepth = maxDepth(node.right);
   
            /* use the larger one */
           /* if (lDepth > rDepth)
                return (lDepth + 1);
             else
                return (rDepth + 1);
        }
    }
     
    /* Driver program to test above functions */
     
       /* root = new Node(3);
        root.left = new Node(9);
        root.right = new Node(20);
        root.left.left = new Node("null");
        root.left.right = new Node("null");
       root.right.left = new Node(15);
        root.right.right = new Node(17);
   
        console.log("depth of tree is : " +
                                      maxDepth(root));*/
 
 
 

