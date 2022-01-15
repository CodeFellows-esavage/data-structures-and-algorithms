'use strict';

const LinkedList = require('../linked-list');

describe('Testing Linked List and all methods', () => {
  it('should create a new linked list', () => {
    let list = new LinkedList;
    expect(list.head).toEqual(null);
  });
  it('should properly insert into the linked list', () => {
    let list = new LinkedList;
    list.includes('a');
    expect(list.head.value).toEqual('a');
  });
});
