class Node
{
    constructor(d)
    {
        this.data = d;
        this.next = null;
    }
}
 
// Head of list
let head;
 
/* Inserts a new Node at front of the list. */
function push(new_data)
{
    /* 1 & 2: Allocate the Node &
              Put in the data*/
   let new_node = new Node(new_data);
  
    /* 3. Make next of new Node as head */
   new_node.next = head;
  
    /* 4. Move the head to point to new Node */
 head = new_node;
}
 
// Function to detect first node of loop
// in a linked list that may contain loop
 function detectLoop(h)
{
    // If the head is null we will return false
    if (head == null)
        return false;
    else
    {
          
        // Traversing the linked list
        // for detecting loop
        while (head != null)
        {
              
            // If loop found
            if (head.data == -1)
            {
                return true;
            }
  
            // Changing the data of visited node to any
            // value which is outside the given range
            // here it is supposed the given range is (1
            // <= Data on Node <= 10^3)
            else
            {
                head.data = -1;
                head = head.next;
            }
        }
          
        // If loop not found return false
        return false;
    }
}
 
// Driver Code
//let x1 = loopfinding();
push(1);
push(2);
push(3);
push(4);
push(5);
//push(6);
//push(7);
 //let x = detectLoop(5);
/* Create a loop for testing */
head.next.next.next.next.next = head.next.next.next.next;
// if we are adding .next to head that will be asking for the next loop to find but we have until five only so after adding .next to head there doesn't exist any loop it returns false.
 
if (detectLoop())
    console.log("true");
else
    console.log("false");






// reference
    /*class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.maxSize = 10;
    }

    get isEmpty() {
        // return !this.head;
        return this.size === 0;
    }

    getNode(index) {
        if (!Number.isInteger(index)) throw 'Invalid index';
        if (index >= this.size) throw 'Index too high';
        if (index < 0) throw 'Index too low';
        if (index < 0 || index >= this.size) return null;

        //index starts from 0
        let counter = 0;
        let current = this.head;

        //traverse till index is reached
        while (counter !== index) {
            console.log(counter, current);
            current = current.next;
            counter++;
        }

        return current;
    }

    setNode(index, value) {
        let node = this.getNode(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    push(value) {
        if (this.size == this.maxSize) throw 'List overflow';

        let newNode = new Node(value);

        if (this.isEmpty) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }

    pop() {
        if (this.isEmpty) throw 'List Underflow';


        let current = this.head;
        let newTail = current;

        //keep traversing till 2nd last item
        while (current.next) {
            console.log('before', current);
            newTail = current;
            current = current.next;
            console.log('after', current);
        }

        // set tail to the 2nd last item
        this.tail = newTail;

        //sever connection
        this.tail.next = null;
        this.size--;
        if (this.isEmpty) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // add before head
    unshift(value) {
        if (this.size == this.maxSize) throw 'List overflow';

        let newNode = new Node(value);
        if (this.isEmpty) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
        return this;
    }

    // remove head
    shift() {
        if (this.isEmpty) throw 'List Underflow';

        let currentHead = this.head;

        this.head = currentHead.next;
        this.size--;
        if (this.isEmpty) {
            this.tail = null;
        }
        return currentHead;
    }

    insert(index, value) {
        if (this.size == this.maxSize) throw "List overflow"
        if (!Number.isInteger(index)) throw 'Invalid index';
        if (index > this.size) throw 'Index too high';
        if (index < 0) throw 'Index too low';

        if (index == this.size) {
            this.push(value);
            return true;
        }

        if (index == 0) {
            this.unshift(value);
            return true;
        }

        let previous = this.getNode(index - 1);
        let oldNode = previous.next;
        let newNode = new Node(value);

        newNode.next = oldNode;
        previous.next = newNode;

        oldNode.next = null;

        this.size++;
        return true;

    }

    remove(index) {
        if (this.isEmpty) throw "List underflow"
        if (!Number.isInteger(index)) throw 'Invalid index';
        if (index >= this.size) throw 'Index too high';
        if (index < 0) throw 'Index too low';

        if (index == this.size - 1) {
            this.pop();
            return true;
        }

        if (index == 0) {
            this.shift();
            return true;
        }

        let previous = this.getNode(index - 1);
        let oldNode = previous.next;
        let newNext = oldNode.next;

        previous.next = newNext;

        this.size--;
        return oldNode;

    }

    // reverse() {
    //     if (this.size <= 1) return this;

    //     //swap head and tail
    //     let tempNode = this.head;
    //     this.head = this.tail;
    //     this.tail = tempNode;

    //     let nextNode;
    //     let previousNode = null;

    //     for (let i = 0; i < this.size; i++) {
    //         nextNode = tempNode.next;
    //         tempNode.next = previousNode;
    //         previousNode = tempNode;
    //         tempNode = nextNode;
    //     }

    //     return this;
    // }



    log() {
        let aux = [];
        if (this.isEmpty) {
            console.log('---empty---');
            return;
        }
        aux.push(this.head.value);
        let current = this.head;
        while (current.next) {
            let nextNode = current.next;
            aux.push(nextNode.value);
            current = nextNode;
        }
        console.log(aux.join(' -> '));
        return;
    }
    detectLoop()
    {
        //console.log(_head);
    // If the head is null we will return false
    if (this.head == null){
        console.log('false');
        
        return false;
    }
    else
    {
          
        // Traversing the linked list
        // for detecting loop
        while (this.head != null)
        {
              
            // If loop found
            if (this.head.data == -1)
            {
                console.log('true');
                return true;
            }
  
            // Changing the data of visited node to any
            // value which is outside th given range
            // here it is supposed the given range is (1
            // <= Data on Node <= 10^3)
            else
            {
                this.head.data = -1;
                this.head = this.head.next;
            }
        }
          
        // If loop not found return false
        console.log('false');
        return false;
    }

}
};

//export default SinglyLinkedList;

 try {
     let list = new SinglyLinkedList();
     list.push(11);
     list.push(22);
     list.push(33);
     list.push(44);
     list.push(55);
     list.push(77);


  console.log(list)
  list.log();
  list.detectLoop();
  /*if (list.detectLoop(2))
    console.log("true");
else
    console.log("false");
  //list.detectLoop(8);*/
// } catch (e) {
   // console.warn(e)
//}*/




// Javascript program to return first node of loop
// Linked list Node
//const loopfinding = () => {
   // let x = detectLoop(1);
   // console.log(x);
   