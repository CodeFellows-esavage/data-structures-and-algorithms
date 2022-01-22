'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let node = new Node(value);

    node.next = this.top;
    this.top = node;
  }
  pop() {
    if (this.top === null) return 'Exception';
    let value = this.top.value;
    this.top = this.top.next;
    return value;
  }
  peek() {
    if (this.top === null) return 'Exception';
    let value = this.top.value;
    return value;
  }
  isEmpty() {
    console.log(this.top === null);
    let result;
    this.top === null ? result = true : result = false;
    return result;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
}

let stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');
console.log(JSON.stringify(stack));

console.log(stack.isEmpty());
console.log(stack.peek());
stack.pop();
console.log(JSON.stringify(stack));

console.log(stack.isEmpty());
console.log(stack.peek());
stack.pop();
console.log(JSON.stringify(stack));

console.log(stack.isEmpty());
console.log(stack.peek());
stack.pop();
console.log(JSON.stringify(stack));

console.log(stack.isEmpty());
console.log(stack.peek());

module.exports = {
  Stack,
  Queue,
};
