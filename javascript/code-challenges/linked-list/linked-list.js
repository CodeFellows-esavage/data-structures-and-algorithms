'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    if (this.head === null) {
      return false;
    } else {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        } else {
          current = current.next;
        }
      }
    }
    return false;
  }

  toString() {
    let listString = '';
    if (this.head === null) {
      listString = 'NULL';
    } else {
      let current = this.head;
      while (current) {
        if (current.next) {
          listString = listString + `{ ${current.value} } -> `;
        } else {
          listString = listString + `{ ${current.value} } -> NULL`;
        }
        current = current.next;
      }
    }
    return listString;
  }
}

// let list = new LinkedList();
// list.insert('c');
// list.insert('b');
// list.insert('a');
// console.log(JSON.stringify(list));
// console.log(list.includes('d'));
// console.log(list.toString());

module.exports = LinkedList;
