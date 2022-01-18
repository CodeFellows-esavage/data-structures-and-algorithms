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

  append(value) {
    let node = new Node(value);
    let current = this.head;

    if (this.head === null) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  insertBefore(beforeVal, valToInsert) {
    let node = new Node(valToInsert);
    let current = this.head;
    let temp;

    console.log(this.head);
    while (current.next) {
      if (this.head.value === beforeVal) {
        console.log(true);
        temp = this.head;
        this.head = node;
        node.next = temp;
        return;
      } else if (current.next.value === beforeVal) {
        temp = current.next;
        current.next = node;
        node.next = temp;
        return;
      } else {
        current = current.next;
      }
    }
    return;
  }
  insertAfter(afterVal, valToInsert) {
    let node = new Node(valToInsert);
    let current = this.head;
    let temp;

    while (current) {
      if (current.value === afterVal) {
        temp = current.next;
        current.next = node;
        node.next = temp;
        return;
      } else {
        current = current.next;
      }
    }
  }
}

let list = new LinkedList();
list.insert('c');
list.insert('b');
list.insert('a');
list.append('d');
// list.insertBefore('b', 'z');
list.insertAfter('f', 'z');
// console.log(JSON.stringify(list));
// console.log(list.includes('d'));
console.log(list.toString());

module.exports = LinkedList;
