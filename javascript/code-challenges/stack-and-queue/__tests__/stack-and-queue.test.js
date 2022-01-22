'use strict';

const { Stack, Queue } = require('../stack-and-queue');

describe('Testing Stack Methods:', () => {
  it('should instantiate an empty stack', () => {
    let stack = new Stack;

    expect(stack.top).toBeNull();
    expect(stack).toBeInstanceOf(Stack);
  });

  it('should raise and exception calling pop on an empty stack', () => {
    let stack = new Stack;
    let result = stack.pop();
    expect(result).toEqual('Exception');
  });

  it('should raise and exception calling peek on an empty stack', () => {
    let stack = new Stack;
    let result = stack.peek();
    expect(result).toEqual('Exception');
  });

  it('should push onto an empty stack', () => {
    let stack = new Stack;
    stack.push('a');
    expect(stack.top.value).toEqual('a');
  });

  it('should push multiple items onto an empty stack', () => {
    let stack = new Stack;
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(JSON.stringify(stack)).toEqual('{"top":{"value":"c","next":{"value":"b","next":{"value":"a","next":null}}}}');
  });

  it('should pop off the stack', () => {
    let stack = new Stack;
    stack.push('a');
    stack.push('b');
    stack.push('c');
    let fullStack = JSON.stringify(stack);

    let result = stack.pop();
    expect(fullStack).toEqual('{"top":{"value":"c","next":{"value":"b","next":{"value":"a","next":null}}}}');
    expect(JSON.stringify(stack)).toEqual('{"top":{"value":"b","next":{"value":"a","next":null}}}');
    expect(result).toEqual('c');
  });

  it('should pop off the stack and empty a stack', () => {
    let stack = new Stack;
    stack.push('a');
    stack.push('b');
    stack.push('c');
    let fullStack = JSON.stringify(stack);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(fullStack).toEqual('{"top":{"value":"c","next":{"value":"b","next":{"value":"a","next":null}}}}');
    expect(stack.top).toBeNull();
  });
  it('should peek at the next item in the stack', () => {
    let stack = new Stack;
    stack.push('a');
    stack.push('b');
    stack.push('c');
    let result = stack.peek();

    expect(result).toEqual('c');
  });
});

