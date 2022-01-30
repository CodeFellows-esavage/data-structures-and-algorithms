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

    if (!current) return 'EMPTY TREE';

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

    if (!current) return 'EMPTY TREE';

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

    if (!current) return 'EMPTY TREE';

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
    if (typeof (value) !== 'number') return 'EXPECTED NUMBER';

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
    if (typeof (value) !== 'number') return 'EXPECTED NUMBER';
    if (this.root === null) return 'EMPTY TREE';

    let current = this.root;
    let traverse = true;
    while (traverse) {
      if (value === current.value) return true;
      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
      }
      if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      }
    }
  }
}

module.exports = {
  BinaryTree,
  BST,
};




