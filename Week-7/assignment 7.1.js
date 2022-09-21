
class Node {
    // constructor
      constructor(element)
      {
         this.element = element;
         this.next = null
      }
    }
    class LinkedList {
       constructor()
        {
          this.head = null; 
          this.size = 10; 
        }
      add(element)
        {
        var node = new Node(element); // Create a node before adding
        var current;
        if (this.head == null) //For first element
            this.head = node; 
        else { // Iterate till the last item and add value
         current = this.head;
         while (current.next) {
             current = current.next;
         }
         current.next = node;
       }
      this.size++;
    }
     printList()
      {
       var curr = this.head;
       var str = "";
       while (curr) {
         str += curr.element + " ";
         curr = curr.next;
       }
       console.log(str);
    }
    reverseList(){
         var current = this.head, prev = null, next = null;
         while (current != null) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
          }
        // The prev will be pointing to last node, which you will point // to head now so if we start printing from head, list will be 
    // reversed
        this.head = prev;
      }
    }
    var ll = new LinkedList();
    // adding more elements to the list
    ll.add(20);
    ll.add(40);
    ll.add(20);
    ll.add(10);
    ll.add(30);
    // returns 10 20 30 40 50
    ll.printList();
    ll.reverseList();
    ll.printList(); 







    
/*let reverse = (head) => {
    constrcutor () 
    let prev = null;
    let current = head;
    let next = null;
    
    while(current !== null){
       next = current.next; 
       current.next = prev; 
       prev = current; 
       current = next;
    }
    
    head = prev; 
    return head; 
  };
  class linkedList {
    constructor()
     {
       this.head = null; 
       this.size = 0; 
     }
    };
  let ll = new linkedList();
  ll.add(10);
  ll.add(20);
  ll.add(30);
  ll.add(40);
  ll.add(50);
  // returns 10 20 30 40 50
let head = ll.getHead();
//20 -> 5 -> 30 -> 7 -> 3
console.log(reverse(head));*/





/*const reverseList = (head, previous = null) => {

    //base case
    if(!head) return previous
    //variable to store next node
    let temp = head.next
    //reverse the node
        head.next = previous
    //recursion starts 
    return reverseList(temp, head)
};
let x = reverseList([1,2,3,4,5]);
console.log(x);*/

// iterative method
/*const reverseList = (head) => {
    //initiate previous as null
    let previous = null;
    //initiate next without assigning
    let next ;
   //keep iteration while head is not null
while(head) {
    //store the current node's next node    
    next = head.next;
    //reassign head's next with previous node
    head.next = previous;
    //reassign previous with reversed current node
    previous = head;
    //reassign head with next node
    head = next;
}
//after reversing return previous list
return previous;
};
let x = reverseList([3,6,2,5,4,1,7]);
console.log(x); */



