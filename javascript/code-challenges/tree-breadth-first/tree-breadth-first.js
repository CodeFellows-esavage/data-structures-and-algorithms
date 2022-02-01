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
}

function breadthFirst(tree) {
  //return array of values
  const valueArr = [];
  const queue = [];

  if (!tree.root) return 'EMPTY TREE';

  queue.unshift(tree.root);

  while (queue.length) {
    let node = queue[queue.length - 1];

    if (node.left) queue.unshift(node.left);
    if (node.right) queue.unshift(node.right);
    valueArr.push(node.value);
    queue.pop();
  }
  return valueArr;
}

// let tree = new BinaryTree;
// let n1 = new Node(10);
// let n2 = new Node(8);
// let n3 = new Node(14);
// let n4 = new Node(5);
// let n5 = new Node(9);
// let n6 = new Node(12);
// let n7 = new Node(17);

// tree.root = n1;
// n1.left = n2;
// n1.right = n3;
// n2.left = n4;
// n2.right = n5;
// n3.left = n6;
// n3.right = n7;

// console.log(JSON.stringify(tree));
// console.log(breadthFirst(tree));

module.exports = {
  BinaryTree,
  Node,
  breadthFirst,
};
