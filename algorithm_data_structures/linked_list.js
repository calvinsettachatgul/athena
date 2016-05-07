  *********************************************************************************
  *                                                                                *
  *  Problem: Linked List                                                          *
  *                                                                                *
  *  Prompt: Create a Linked List class/constructor.                               *
  *          Name it LinkedList (js) or Linked_List(rb/py).                        *
  *                                                                                *
  *          Part 1: Create a node class for your LinkedList.                      *
  *                  Your node class will take an integer value and output         *
  *                  and output and object with the following properties:          *
  *                                                                                *
  *                  node.value: input value                                       *
  *                  node.next: a pointer to the next value (initiall null)        *
  *                                                                                *
  *                  Example: { value: 1, next: null }                             *
  *                                                                                *
  *          Part 2: Create the LinkedList class.                                  *
  *                  It should contain the following properties:                   *
  *                                                                                *
  *                  head: pointer to the head node                                *
  *                  tail: pointer to the tail node                                *
  *                  length: number of nodes in the linked list                    *
  *                                                                                *
  *                  The LinkedList should also contain the following properties   *
  *                                                                                *
  *                  append: function that adds a node to the tail                 *
  *                                                                                *
  *                  insert: function that takes in two values, one to be inserted *
  *                          and one to search.  It searches the list for the      *
  *                          search value, and if found, adds a new node with the  *
  *                          insert value after the node with the search value.   *
  *                                                                                *
  *                  delete: function that removes a node at a specified location, *
  *                          with a default action of deleting the head            *
  *                                                                                *
  *                  contains: function that checks to see if a value is contained *
  *                            in the list                                         *
  *                                                                                *
  *  Input:  N/A                                                                   *
  *  Output: A LinkedList instance                                                 *
  *                                                                                *
  *  What are the time and auxilliary space complexities of the various methods?   *
  *                                                                                *
  **********************************************************************************/

var Node = function(val){
  return {
    value: val,
    next: null
  };
};
var LinkedList = function(){
  this.head = null;
  this.tail = null;
  this.listLength = 0;
}




  //        append: function that adds a node to the tail                 *
LinkedList.prototype.append = function(val){
  newNode = new Node(val);

  if(this.listLength === 0){
    this.head = this.tail = newNode;
  }else{
    this.tail.next = newNode
    this.tail = newNode
    // this.tail.next = newNode;
  }
  this.listLength++;
}
  // *                  insert: function that takes in two values, one to be inserted *
    // *                          and one to search.  It searches the list for the      *
  // *                          search value, and if found, adds a new node with the  *
  // *                          insert value after the node with the search value.   *

LinkedList.prototype.insert = function(valInsert, valSearch){
  var pointerNode = this.head;
  var insertNode = new Node( valInsert);
  while (pointerNode.next !== null){
    console.log("not found");
    if(pointerNode.value === valSearch){
      console.log('valSearch found');
      //save the laterNode
        var laterNode = pointerNode.next;
      // assign the pointerNode.next to insertNode
        pointerNode.next = insertNode;
        insertNode.next = laterNode;
    }
    pointerNode = pointerNode.next;
  }
}

  // *                  delete: function that removes a node at a specified location, *
  // *                          with a default action of deleting the head            *
LinkedList.prototype.delete = function(position){

  position = position || 0;

  var counter = 0;
  nodePointer = this.head;

  if( position === 0 ){
    var newHead = this.head.next;
    this.head = newHead;

  }
  while( nodePointer !== null && counter < position ){
    if( counter === position-1){
      //nodePointer is the parent of the position
      //delete the node at the next position
      var nodeToDelete = nodePointer.next;
      nodePointer.next = nodeToDelete.next;
      return;

    }else{

      counter++;
      nodePointer = nodePointer.next;
    }
  }
}

  // *                  contains: function that checks to see if a value is contained *
  // *                            in the list
LinkedList.prototype.contains = function(val){
  var nodePointer = this.head;
  while(nodePointer !== null ){

    if( nodePointer.value === val){
      return true;
    }
    nodePointer = nodePointer.next;

  };

  return false;
}


LinkedList.prototype.print = function(){
  var pointerNode = this.head;

  resultString = "";
  while( pointerNode !== null){
    // console.log(pointerNode.value);

    resultString += "-->" + pointerNode.value;
    pointerNode = pointerNode.next;
  }

  return resultString;
}

firstNode = new Node(1);
secondNode = new Node(2);

console.log(firstNode);
console.log(secondNode);

firstLinkedList = new LinkedList();

console.log(firstLinkedList);

firstLinkedList.append(1);
console.log(firstLinkedList.head.value ===1)
console.log(firstLinkedList.tail.value ===1)
console.log(firstLinkedList.tail.next === null)
firstLinkedList.append(2);
firstLinkedList.append(3);

console.log(firstLinkedList);

firstLinkedList.insert(4, 2)
firstLinkedList.insert(.4, 1)
console.log(firstLinkedList)

console.log(firstLinkedList.print());

firstLinkedList.delete();
console.log(firstLinkedList.print());

firstLinkedList.delete(2);
console.log(firstLinkedList.print());
console.log(firstLinkedList.contains(.2));

firstLinkedList.delete();
firstLinkedList.delete();

console.log(firstLinkedList.print());
