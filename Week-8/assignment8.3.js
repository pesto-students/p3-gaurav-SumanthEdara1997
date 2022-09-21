class MyQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    enQueue(value) {
        this.inStack.push(value);
    }

    deQueue() {
        if (this.outStack.length == 0 && this.inStack.length == 0) throw 'Under flow';
        if (this.outStack.length === 0) {
            while (this.inStack.length != 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }

    get isEmpty() {
        return this.inStack.length + this.outStack.length == 0;
    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    get isEmpty() {
        return this.root == null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.isEmpty) {
            this.root = newNode;
            return;
        }
        this.#insertAt(newNode, this.root);
    }

    #insertAt(newNode, currentNode) {
        if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                this.#insertAt(newNode, currentNode.left);
            }
        } else if (newNode.value > currentNode.value) {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this.#insertAt(newNode, currentNode.right);
            }
        } else {
            throw 'Do not enter same value';
        }
    }

    lot() {
        let result = [];
        let queue = new MyQueue();
        if (!this.root) {
            return result;
        }
        queue.enQueue(this.root);
        while (!queue.isEmpty) {
            let currrentNode = queue.deQueue();
            result.push(currrentNode.value);
            if (currrentNode.left) {
                queue.enQueue(currrentNode.left);
            }
            if (currrentNode.right) {
                queue.enQueue(currrentNode.right);
            }
        }
        return result;
    }

    remove(value) {
        if (this.isEmpty) {
            return false;
        }
        let root = this.root;
        if (root.value == value && root.left === null && root.right === null) {
            this.root = null;
        } else {
            this.root = this.#removeAt(value, root);
        }
    }

    #removeAt(value, node) {
        if (value < node.value) {
            if (node.left) {
                node.left = this.#removeAt(value, node.left);
            }
        } else if (value > node.value) {
            if (node.right) {
                node.right = this.#removeAt(value, node.right)
            }
        } else {
            if (node.left == null && node.right == null) {
                // leaf node
                node = null;
            } else if (node.left == null && node.right != null) {
                // have only left child
                node = node.right;
            } else if (node.left != null && node.right == null) {
                // have only right child
                node = node.left;
            } else {
                let newValue = this.#findSmallestInSubTree(node.right);
                node.right = this.#removeAt(newValue, node.right);
                node.value = newValue;
            }
        }
        return node;
    }

    #findSmallestInSubTree(node) {
        if (node.left == null) {
            return node.value;
        } else {
            return this.#findSmallestInSubTree(node.left);
        }
    }

    maxDepth() {
        return this.#maxDepthOf(this.root);
    }

    #maxDepthOf(node) {
        if (node == null) {
            return 0;
        }
        if (node.left == null && node.right == null) {
            return 1;
        }
        return Math.max(this.#maxDepthOf(node.left) + 1, this.#maxDepthOf(node.right) + 1);
    }

    inOrder() {
        let result = [];
        this.#inOrderAt(this.root);
    }

    #inOrderAt(node, result) {
        if(node == null) {
            return result;
        } if(node.left == null && node.right == null) {
            return result.push[node.value];
        }

    }
}



try {
    let bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(6);
    bst.insert(7);
    bst.insert(3);
    bst.insert(8);

    console.log(bst.maxDepth());

    console.log(bst.lot());
    bst.remove(15);
    console.log(bst.lot());
    bst.remove(7);
    console.log(bst.lot());
    bst.remove(5);
    console.log(bst.lot());


} catch (error) {
    console.warn(error);;
}


/*class TreeNode {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }
}
var levelOrder =  (root) => {
    let output = [];
    let queue = [];
    let currentNode = root;
    queue.push(currentNode);
    let currentLevel = 1;
    let index = 0; // Add an index for increasing the output index
  
    while (queue.length) {
  
      currentNode = queue.shift();
      currentLevel--;
  
      if (!output[index]) { // Set default is an array for each output element in first time
        output[index] = [];
      }
  
      output[index].push(currentNode.val);
  
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
  
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
  
      if (currentLevel === 0) { // Use strict equality operator to compare 0
        index++; // increase index
        currentLevel = queue.length;
      }
    }
  
    return output;
  };
/*var levelOrder = function(root) {
    let result =[];
    if(!root)return result;
    if(!root.left && !root.right){
        result.push([root.val]);
        return result;
    }
    const pushIntoResult =(node, level) =>{
        if(!node) return;
        if(!result[level]){
            result.push([]);
        }
        result[level].push(node.val);
        pushIntoResult(node.left, level+1);
        pushIntoResult(node.right, level+1);
    }
    pushIntoResult(root, 0);
    return result;
};*/
/*var levelOrder = root=> {
    let output = [];
    let queue = [];
    let currentNode = root;
    queue.push(currentNode);
    let currentLevel = 1;
    while(queue.length){
        
        currentNode = queue.shift();
        currentLevel--; //this will ensure we are adding new lines only on next level
        output.push(currentNode);
        
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
        
        if(currentLevel = 0){
            output = output + '/n'; //Insert a new line
            currentLevel = queue.length; //2
        }
    }
    return output;
    };


/*class TreeNode {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }
}

const levelOrderBottom = root => {
    let visited = []
    if (!root) return visited
    let queue = [root, 's']
    let current
    let row = []

    while (queue.length > 1) {
        current = queue.shift()
        if (current === 's') {
            visited.unshift(row)
            row = []
            queue.push('s')
        } else {
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
            row.push(current.val)
        }
    }
    return visited
}*/

//example 1
//const root = new TreeNode()
/*root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.left.left = new TreeNode('null')
root.left.right = new TreeNode('null')
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)*/

//console.log(levelOrder(root))


/*var levelOrder = function(root) {
    let output = [];
    let queue = [];
    let currentNode = root;
    queue.push(currentNode);
    let currentLevel = 1;
    while(queue.length){
        
        currentNode = queue.shift();
        currentLevel--; //this will ensure we are adding new lines only on next level
        output.push(currentNode);
        
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
        
        if(currentLevel = 0){
            output = output + '/n'; //Insert a new line
            currentLevel = queue.length; //2
        }
    }
    return output;
    };
    const input = [
        3,9,20,null,null,15,7
    ]
    const x = levelOrder

/*import BinarySearchTree from '../week8assignment/assignment8_3.js';
import MyQueue from '../week8assignment/assignment8_3_2.js';

export const levelOrder = (bst) => {
    let result = [];
    let queue = new MyQueue();


    let current = bst.root;
    queue.enqueue(current);

    while (!queue.size == 0) {
        current = queue.dequeue();
        result.push(current.value);
        if (current.left) {
            queue.enqueue(current.left);
        }
        if (current.right) {
            queue.enqueue(current.right);
        }
    }
    return result;
};



try {
    let bst = new BinarySearchTree();
    bst.insert(1000);
    bst.insert(501);
    bst.insert(1501);
    bst.insert(252);
    bst.insert(752);
    bst.insert(1252);
    bst.insert(1752);
    bst.insert(303);
    bst.insert(203);
    console.log(bst);

    let x = levelOrder(bst.root);
    console.log(x);
} catch (e) {
    console.warn(e);
}*/
 
/* Class to represent Tree node */
/*class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
 
/* Class to print Level Order Traversal */
    /*
     * Given a binary tree. Print its nodes in level order using array for
     * implementing queue
     */
    /*function printLevelOrder() {
        var queue = [];
        queue.push(root);
        while (queue.length != 0) {
            /*
             * The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
             */
           // var tempNode = queue.shift();
           // console.log(tempNode.data + " ");
 
            /* Enqueue left child */
           // if (tempNode.left != null) {
          //      queue.push(tempNode.left);
            //}
 
            /* Enqueue right child */
           // if (tempNode.right != null) {
           //     queue.push(tempNode.right);
            //}
       // }
  //  }
 
  /* creating a binary tree and entering the nodes */
       /* var root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node('null');
        root.left.right = new Node('null');
        root.right.left = new Node(4);
        root.right.left = new Node(5);

        console.log("Level order traversal of binary tree is - ");
        printLevelOrder();*/