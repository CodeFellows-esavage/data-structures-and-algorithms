'use strict';

const { BST } = require('../trees');

let tree = new BST;
tree.add(10);
tree.add(8);
tree.add(14);
tree.add(5);
tree.add(9);
tree.add(12);
tree.add(17);

describe('Testing Binary Tree and Binary Search Tree Methods', () => {
  it('should successfully instantiate an empty tree', () => {
    let emptyTree = new BST;

    expect(emptyTree.root).toBeNull();
    expect(JSON.stringify(emptyTree)).toEqual('{"root":null}');
  });
  it('should successfully instantiate a tree with a single root node', () => {
    let singleNodeTree = new BST;
    singleNodeTree.add(10);

    expect(singleNodeTree.root.value).toEqual(10);
  });
  it('should successfully add a left child to a node', () => {
    let leftNodeTree = new BST;
    leftNodeTree.add(10);
    leftNodeTree.add(8);

    expect(leftNodeTree.root.left.value).toEqual(8);
  });
  it('should successfully add a right child to a node', () => {
    let rightNodeTree = new BST;
    rightNodeTree.add(10);
    rightNodeTree.add(14);

    expect(rightNodeTree.root.right.value).toEqual(14);
  });
  it('should return a collection from a preorder traversal', () => {

    let order = tree.preOrder();
    expect(order).toEqual([10, 8, 5, 9, 14, 12, 17]);

  });
  it('should return a collection from a inorder traversal', () => {

    let order = tree.inOrder();
    expect(order).toEqual([5, 8, 9, 10, 12, 14, 17]);

  });
  it('should return a collection from a postorder traversal', () => {

    let order = tree.postOrder();
    expect(order).toEqual([5, 9, 8, 12, 17, 14, 10]);

  });

  it('should return true if a value is in the tree', () => {

    let result = tree.contains(12);
    expect(result).toBeTruthy();

  });
  it('should return false if a value is not in the tree', () => {

    let result = tree.contains(13);
    expect(result).toBeFalsy();

  });
  it('should return empty if a tree is empty', () => {
    let emptyTree = new BST;

    let containsRes = emptyTree.contains(1);
    let preOrderRes = emptyTree.preOrder();
    let inOrderRes = emptyTree.inOrder();
    let postOrderRes = emptyTree.postOrder();
    expect(containsRes).toEqual('EMPTY TREE');
    expect(preOrderRes).toEqual('EMPTY TREE');
    expect(inOrderRes).toEqual('EMPTY TREE');
    expect(postOrderRes).toEqual('EMPTY TREE');
  });

  it('should return error if a value is not number', () => {

    let containsRes = tree.contains('a');
    let addRes = tree.add('a');
    expect(containsRes).toEqual('EXPECTED NUMBER');
    expect(addRes).toEqual('EXPECTED NUMBER');
  });
});
