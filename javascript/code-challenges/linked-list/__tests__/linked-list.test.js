'use strict';

const LinkedList = require('../linked-list');

describe('Testing Linked List and all methods', () => {
  it('should create a new linked list', () => {
    let list = new LinkedList;
    expect(list.head).toEqual(null);
  });
  it('should properly insert a node', () => {
    let list = new LinkedList;
    list.insert('a');
    expect(JSON.stringify(list)).toEqual('{"head":{"value":"a","next":null}}');
  });
  it('should point the head to first node', () => {
    let list = new LinkedList;
    list.insert('a');
    expect(list.head.value).toEqual('a');
  });
});
it('should properly insert a multiple nodes', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(JSON.stringify(list)).toEqual('{"head":{"value":"a","next":{"value":"b","next":{"value":"c","next":null}}}}');
});
it('should properly return true when finding a value that exists in the list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.includes('b')).toBeTruthy();
});
it('should properly return false when a value does not exist in the list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.includes('d')).toBeFalsy();
});

it('should properly return a collection of all the values that exist in the linked list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
});


