'use strict';

const HashTable = require('../hash-table/hash-table');

function treeIntersection(tree1, tree2) {
  const ht = new HashTable();
  const outputArr = [];

  if (!tree1.root || !tree2.root) return outputArr;

  let traversalTree1 = (node) => {
    if (node.left) traversalTree1(node.left);
    let index = ht.hash(node.value);
    let bucket = ht.keyMap[index];
    if (bucket) {
      let inBucket = false;
      for (let i = 0; i < bucket.length; i++) {
        if (node.value === bucket[i][0]) inBucket = true;
      }
      if (inBucket === false) ht.set(node.value);
    } else {
      ht.set(node.value);
    }
    if (node.right) traversalTree1(node.right);
  };
  let traversalTree2 = (node) => {
    if (node.left) traversalTree2(node.left);
    let index = ht.hash(node.value);
    let bucket = ht.keyMap[index];
    if (bucket) {
      let inBucket = false;
      for (let i = 0; i < bucket.length; i++) {
        if (node.value === bucket[i][0]) inBucket = true;
      }
      if (inBucket === true) {
        if (outputArr.length === 0) {
          outputArr.push(node.value);
        } else {
          let inOutput = false;
          for (let j = 0; j < outputArr.length; j++) {
            if (outputArr[j] === node.value) inOutput = true;
          }
          if (inOutput === false) outputArr.push(node.value);
        }
      }
    }
    if (node.right) traversalTree2(node.right);
  };

  traversalTree1(tree1.root);
  traversalTree2(tree2.root);
  return outputArr;
}
// let tree1 = {
//   root: {
//     value: 5,
//     left: { value: 2, left: null, right: null },
//     right: { value: 7, left: null, right: null }
//   }
// };
// let tree2 = {
//   root: {
//     value: 5,
//     left: { value: 2, left: null, right: null },
//     right: { value: 6, left: null, right: null }
//   }
// };

// console.log(treeIntersection(tree1, tree2));
module.exports = treeIntersection;
