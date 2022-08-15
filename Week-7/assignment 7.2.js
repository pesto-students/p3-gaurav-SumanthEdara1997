// Javascript program to rotate an array
// a linked list counter clock wise
 
// Link list node
class Node
{
    constructor()
    {
        this.data = 0;
        this.next = null;
    }
}
 
var head = null;
 
// This function rotates a linked list
// counter-clockwise and updates the
// head. The function assumes that k is
// smaller than size of linked list.
function rotate(k)
{
    if (k == 0)
        return;
 
    // Let us understand the below
    // code for example k = 4 and
    // list = 10.20.30.40.50.60.
    var current = head;
 
    // Traverse till the end.
    while (current.next != null)
        current = current.next;
 
    current.next = head;
    current = head;
 
    // Traverse the linked list to
    // k-1 position which will be
    // last element for rotated array.
    for (i = 0; i < k - 1; i++)
        current = current.next;
 
    // update the head_ref and last
    // element pointer to null
    head = current.next;
    current.next = null;
}
 
// UTILITY FUNCTIONS
// Function to push a node
function push(new_data)
{
    // Allocate node
    var new_node = new Node();
 
    // Put in the data
    new_node.data = new_data;
 
    // Link the old list off the
    // new node
    new_node.next = head;
 
    // Move the head to point to the
    // new node
    head = new_node;
}
 
// Function to print linked list
function printList( node)
{
    while (node != null)
    {
        console.log(node.data + " ");
        node = node.next;
    }
}
 
// Driver code
// Start with the empty list
// Create a list 10.20.30.40.50.60

push(10);
push(20);
push(30);
push(40);
push(50);
push(60);
push(70);
//for (i = 60; i > 0; i -= 10)
//push(i);
 
console.log("Given linked list");
printList(head);
rotate(3);
 
console.log("Rotated Linked list");
printList(head);