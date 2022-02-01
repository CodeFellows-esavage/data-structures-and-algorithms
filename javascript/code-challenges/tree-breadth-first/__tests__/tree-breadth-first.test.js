'use strict';

const { BinaryTree, Node, breadthFirst } = require('../tree-breadth-first');

describe('Testing breadthFirst Function', () => {
  it('should respond with an exception on an empty tree', () => {
    let emptyTree = new BinaryTree;
    let result = breadthFirst(emptyTree);
    expect(result).toEqual('EMPTY TREE');
  });
  it('should output value on a tree with one node', () => {
    let oneTree = new BinaryTree;
    oneTree.root = new Node(10);
    let result = breadthFirst(oneTree);
    expect(result).toEqual([10]);
  });
  it('should output values in an balenced tree', () => {
    let balencedTree = new BinaryTree;
    let n1 = new Node(10);
    let n2 = new Node(8);
    let n3 = new Node(14);
    let n4 = new Node(5);
    let n5 = new Node(9);
    let n6 = new Node(12);
    let n7 = new Node(17);

    balencedTree.root = n1;
    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.left = n6;
    n3.right = n7;

    let result = breadthFirst(balencedTree);
    expect(result).toEqual([10, 8, 14, 5, 9, 12, 17]);
  });
  it('should output values in an unbalenced tree', () => {
    let unbalencedTree = new BinaryTree;
    let n1 = new Node(2);
    let n2 = new Node(7);
    let n3 = new Node(5);
    let n4 = new Node(2);
    let n5 = new Node(6);
    let n6 = new Node(9);
    let n7 = new Node(5);
    let n8 = new Node(11);
    let n9 = new Node(4);

    unbalencedTree.root = n1;
    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.right = n6;
    n5.left = n7;
    n5.right = n8;
    n6.right = n9;


    let result = breadthFirst(unbalencedTree);
    console.log(result);
    expect(result).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
});

