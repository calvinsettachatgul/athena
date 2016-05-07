/*Problem: Binary Search Tree                                                   *
  *                                                                                *
  *  Prompt: Create a BinarySearchTree class/constructor.                          *
  *          Name it binarySearchTree (js) or binary_search_tree (rb/py).          *
  *                                                                                *
  *          Part 1: Create a node class for your binarySearchTree.                *
  *                  Your node class will take an integer value and output         *
  *                  an object with the following properties:                      *
  *                                                                                *
  *                  node.value: input value                                       *
  *                  node.leftChild: a pointer to the left child Node              *
  *                  node.rightChild: a pointer to the right child Node            *
  *                                                                                *
  *                  Example: { value: 1, leftChild: null, rightChild: null }      *
  *                                                                                *
  *          Part 2: Create the BinarySearchTree class.                            *
  *                  It should contain the following properties:                   *
  *                                                                                *
  *                  root: pointer to the root node                                *
  *                  size: number of nodes in the BinarySearchTree                 *
  *                                                                                *
  *                  The BinarySearchTree will also have the following properties: *
  *                                                                                *
  *                  insert: method that takes takes an input value, and creates a *
  *                          new node with the given input.  The method will then  *
  *                          find the correct place to add the new node. (Remember *
  *                          that nodes with values larger than the parent node go *
  *                          to the right, and smaller values go to the left.)     *
  *                                                                                *
  *                  search: method that will search to see if a node with a       *
  *                          specified value exists.  If present returns true,     *
  *                          else returns false.                                   *
  *                                                                                *
  *  Input:  N/A                                                                   *
  *  Output: A BinarySearchTree instance                                           *
  *                                                                                *
  *  What are the time and auxilliary space complexities of the various methods?   *
  *                                                                                *
  **********************************************************************************/


 /**
  *  Extra Credit: Remove
  *
  *  Prompt: Create a remove method on your BinarySearchTree that will remove and
  *          return a given value from the tree and retie the tree so it remains
  *          properly sorted.
  **/



// //
//  *          Part 2: Create the BinarySearchTree class.                            *
//   *                  It should contain the following properties:                   *
//   *                                                                                *
//   *                  root: pointer to the root node                                *
//   *                  size: number of nodes in the BinarySearchTree                 *
//   *                                                                                *
//   *                  The BinarySearchTree will also have the following properties: *
//   *                                                                                *
//   *                  insert: method that takes takes an input value, and creates a *
//   *                          new node with the given input.  The method will then  *
//   *                          find the correct place to add the new node. (Remember *
//   *                          that nodes with values larger than the parent node go *
//   *                          to the right, and smaller values go to the left.)     *
//   *                                                                                *
//   *                  search: method that will search to see if a node with a       *
//   *                          specified value exists.  If present returns true,     *
//   *                          else returns false.                                   *
//   *                                                                                *

  var BinarySearchTree = function(val){
    rootNode = new NodeBST(val);
    this.root = rootNode;
    this.size = 1;
  }

  BinarySearchTree.prototype.insert = function(insertVal){

    var insertNode = new NodeBST(insertVal);

    // console.log(insertNode);

    var pointer = this.root;
    console.log("root is");


    console.log(pointer)

    var foundSpot = false;

    while(!foundSpot){

      var parentPointer = pointer;
      // if insertVal > pointer.value => go right
        if(insertNode.value > pointer.value){

          if( pointer.rightChild === null){
            pointer.rightChild = insertNode;
            foundSpot = true;
          }else{
            pointer = pointer.rightChild;
          }

      // if insertVal < pointer.value => go left
        }else if(insertNode.value < pointer.value){
          if( pointer.leftChild === null){
            pointer.leftChild = insertNode;
            foundSpot = true;
          }else{
            pointer = pointer.leftChild;
          }

        }

    }

    this.size++;
  }

  BinarySearchTree.prototype.search = function(val){
    pointer = this.root;

    while(pointer.value !== val){
      if(val > pointer.value && pointer.rightChild !== null){
        pointer = pointer.rightChild;
        if(pointer.value === val){
          return true;
        }
      }else if(val < pointer.value && pointer.leftChild !== null){

        console.log(val)
        pointer = pointer.leftChild;
        if(pointer.value === val){
          return true;
        }
      }
    }

    return false;


  }

  var NodeBST = function(val){
    return {
      value: val,
      leftChild: null,
      rightChild: null,
    }
  }

// var firstNode = new NodeBST(4);

// console.log(firstNode);

// console.log( firstNode.value === 4);
// console.log( firstNode.rightChild === null);
// console.log( firstNode.leftChild === null);


var firstTree = new BinarySearchTree(4)
console.log( firstTree);
firstTree.insert(5)
firstTree.insert(3)
console.log( firstTree);
console.log( firstTree.search(3));
