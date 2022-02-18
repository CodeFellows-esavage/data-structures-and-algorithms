'use strict';

const hashIt = require('hash-it');

class HashTable {
  constructor(size = 1069) {
    this.keyMap = new Array(size);
  }
  hash(key) {
    return hashIt(key) % this.keyMap.length;
  }

  set(key, value) {
    let index = this.hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this.hash(key);
    let bucket = this.keyMap[index];

    if (!bucket) return null;
    if (bucket.length === 1) {
      return bucket[0][1];
    } else {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) return bucket[i][1];
      }
    }
    return null;
  }

  keys() {
    //want to get all unique keys
    const uniqueKeys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!uniqueKeys.includes(this.keyMap[i][j][0])) {
            uniqueKeys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return uniqueKeys;
  }

  values() {
    //want to get all unique values
    const uniqueValues = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!uniqueValues.includes(this.keyMap[i][j][1])) {
            uniqueValues.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return uniqueValues;
  }
}

let ht = new HashTable(5);
console.log(ht);
ht.set('Erik', 1986);
ht.set('Duncan', 2013);
ht.set('Amy', 1986);
ht.set('Amy', 1986);
ht.set('Kiera', 2016);
ht.set('Ryan', 1983);
ht.set('Gordon', 1990);
ht.set('Josh', 1985);

console.log(JSON.stringify(ht));

console.log(ht.get('Duncan'));
console.log(ht.get('Debra'));
console.log(ht.get('Gordon'));
console.log(ht.keys());
console.log(ht.values());

module.exports = HashTable;
