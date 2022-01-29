'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    //READ: current value -> left value -> right value
    const order = [];
    let current = this.root;

    if (!current) return 'Tree is empty';

    let traverse = (node) => {
      order.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return order;

  }

  inOrder() {
    //READ: left value -> current value -> right value
    const order = [];
    let current = this.root;

    if (!current) return 'Tree is empty';

    let traverse = (node) => {
      if (node.left) traverse(node.left);
      order.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return order;

  }

  postOrder() {
    //READ: left value -> right value -> current value
    const order = [];
    let current = this.root;

    if (!current) return 'Tree is empty';

    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      order.push(node.value);
    };

    traverse(current);
    return order;

  }
}

class BST extends BinaryTree {
  // constructor(){

  // }
  add(value) {
    //allow for duplicates on the right
    if (typeof (value) !== 'number') return 'Value must be a number';

    let node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      let traverse = true;
      while (traverse) {
        if (node.value < current.value && current.left) {
          current = current.left;
        } else if (node.value < current.value) {
          //put our new node here
          current.left = node;
          traverse = false;
        }
        if (node.value >= current.value && current.right) {
          current = current.right;
        } else if (node.value >= current.value) {
          //put our new node here
          current.right = node;
          traverse = false;
        }
      }
    }
  }

  contains(value) {
    //return true or false if the value is in the tree
  }
}

let tree = new BinaryTree;
let n1 = new Node(10);
let n2 = new Node(8);
let n3 = new Node(14);
let n4 = new Node(5);
let n5 = new Node(9);
let n6 = new Node(12);
let n7 = new Node(17);

tree.root = n1;
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

console.log(JSON.stringify(tree));
console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());

let bsTree = new BST;

console.log(bsTree);
bsTree.add(10);
bsTree.add(8);
bsTree.add(14);
bsTree.add(5);
bsTree.add(9);
bsTree.add(12);
bsTree.add(17);
console.log(JSON.stringify(bsTree));



