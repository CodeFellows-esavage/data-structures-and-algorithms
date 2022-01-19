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

    while (current.next) {
      if (this.head.value === beforeVal) {
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
  kthFromEnd(k) {
    let current = this.head;
    let arrTracker = -1;
    let indexArr = [];

    if (k < 0) { return 'Exception'; }
    while (current) {
      arrTracker++;
      indexArr[arrTracker] = current.value;
      current = current.next;
      console.log(indexArr);
    }
    // return indexArr.length;
    if (k > (indexArr.length - 1)) {
      return 'Exception';
    } else {
      return indexArr[(indexArr.length - 1) - k];
    }
  }
}

let list = new LinkedList();
list.insert('c');
list.insert('b');
list.insert('a');
list.append('d');
// list.insertBefore('b', 'z');
// list.insertAfter('f', 'z');
// console.log(JSON.stringify(list));
// console.log(list.includes('d'));
console.log(list.toString());
console.log(list.kthFromEnd(4));

module.exports = LinkedList;
