'use strict';

const { BinaryTree, Node } = require('../tree-max');

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

describe('Testing findMax method on BinaryTree', () => {
  it('should return the max value in the tree at root', () => {
    n1.value = 20;
    let result = tree.findMax();
    expect(result).toEqual(20);
  });
  it('should return the max value in the tree at far left', () => {
    n4.value = 20;
    let result = tree.findMax();
    expect(result).toEqual(20);
  });
  it('should return the max value in the tree at far right', () => {
    n7.value = 20;
    let result = tree.findMax();
    expect(result).toEqual(20);
  });
  it('should return exception if tree is empty', () => {
    let emptyTree = new BinaryTree;
    let result = emptyTree.findMax();
    expect(result).toEqual('EMPTY TREE');
  });
});
