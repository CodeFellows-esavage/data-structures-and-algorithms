'use strict';

// const treeify = require('treeify');

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }
}

function fizzBuzzTree(tree) {

  if (!tree.root) return 'EMPTY TREE';
  let current = tree.root;

  let traverse = (node) => {
    let value;
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      value = 'FizzBuzz';
    } else if (node.value % 3 === 0) {
      value = 'Fizz';
    } else if (node.value % 5 === 0) {
      value = 'Buzz';
    } else {
      value = `${node.value}`;
    }

    const newNode = new Node(value);

    if (node.children.length) {
      console.log(node.children.length);
      for (let i = 0; i < node.children.length; i++) {
        newNode.children[i] = traverse(node.children[i]);
      }
    }
    return newNode;
  };

  const newTree = new KaryTree(3);
  newTree.root = traverse(current);
  return newTree;
}

// let startingTree = new KaryTree(3);

// let n1 = new Node(10);
// let n2 = new Node(3);
// let n3 = new Node(5);
// let n4 = new Node(8);
// let n5 = new Node(15);
// let n6 = new Node(7);
// let n7 = new Node(25);
// let n8 = new Node(14);
// let n9 = new Node(9);
// let n10 = new Node(18);
// let n11 = new Node(30);
// let n12 = new Node(1);

// n1.children = [n2, n3];
// n2.children = [n4, n5, n6];
// n3.children = [n8, n9];
// n5.children = [n7];
// n8.children = [n10, n11, n12];

// startingTree.root = n1;
// console.log(treeify.asTree(startingTree, true));
// let newTree = fizzBuzzTree(startingTree);
// console.log(treeify.asTree(newTree, true));

module.exports = {
  Node,
  KaryTree,
  fizzBuzzTree,
};
