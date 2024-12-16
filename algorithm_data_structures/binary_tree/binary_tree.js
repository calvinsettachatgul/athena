import Node from './node.js';

class BinaryTree {
    constructor(root){
        this.root = root;
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);
let node8 = new Node(8);
node4.left = node2;
node4.right = node5;
node2.left = node1;
node2.right = node3;
node5.right = node7;
node7.left = node6;
node7.right = node8;

/*

                4
              /    \
            2       5
          /    \      \
         1      3     7
                    /   \
                   6     8

*/

// let nodes = [node1, node2, node3, node4,
//             node5, node6, node7, node8
// ]

let binaryTree = new BinaryTree(node4)

// console.log("preorder");
// console.log("4 2 1 3 5 7 6 8")

// console.log("postorder");
// console.log("1 3 2 6 8 7 5 4")

console.log("inorder");
console.log("1 2 3 4 5 6 7 8")

let traverse = (root) => {
    // base case
    if(root === null){
        return;
    }

    traverse(root.left);
    console.log(root.value);
    traverse(root.right);

    // recursive cases
}

traverse(node4);

// console.log({nodes}, {binaryTree});