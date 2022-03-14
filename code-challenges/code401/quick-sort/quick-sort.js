'use strict';

function swap(arr, i, low) {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let low = left - 1;
  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low = low + 1;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
}

function quickSort(arr, left, right) {
  if (left < right) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
}

let arr = [8, 4, 23, 42, 16, 15];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

module.exports = quickSort;
