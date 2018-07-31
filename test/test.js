'use strict';

const should = require('chai').should();

const classes = require('../index.js');

describe('Stack', function () {

  let stack;

  beforeEach(function () {
    stack = new classes.Stack();
  });

  it('the class should provide a "push()" method', function () {
    stack.should.not.have.ownProperty('push');
    stack.push.should.be.a('function');
  });

  it('the class should provide a "pop()" method', function () {
    stack.should.not.have.ownProperty('pop');
    stack.pop.should.be.a('function');
  });

  it('should push and pop elements', function () {
    should.equal(stack.pop(), null);
    stack.push('hello').should.be.true;
    stack.push('world').should.be.true;
    stack.push('today').should.be.true;
    stack.pop().should.equal('today');
    stack.pop().should.equal('world');
    stack.pop().should.equal('hello');
    should.equal(stack.pop(), null);
    should.equal(stack.pop(), null);
  });

  it('should return its size', function () {
    stack.size().should.equal(0);
    stack.push('hello');
    stack.size().should.equal(1);
    stack.push('world');
    stack.size().should.equal(2);
    stack.pop();
    stack.size().should.equal(1);
    stack.pop();
    stack.size().should.equal(0);
  });

});

describe('Queue', function () {

  let queue;

  beforeEach(function () {
    queue = new classes.Queue();
  });

  it('the class should provide an "enqueue()" method', function () {
    queue.should.not.have.ownProperty('enqueue');
    queue.enqueue.should.be.a('function');
  });

  it('the class should provide a "dequeue()" method', function () {
    queue.should.not.have.ownProperty('dequeue');
    queue.dequeue.should.be.a('function');
  });

  it('should enqueue and dequeue elements', function () {
    should.equal(queue.dequeue(), null);
    queue.enqueue('hello').should.be.true;
    queue.enqueue('world').should.be.true;
    queue.enqueue('today').should.be.true;
    queue.dequeue().should.equal('hello');
    queue.enqueue('hello').should.be.true;
    queue.dequeue().should.equal('world');
    queue.dequeue().should.equal('today');
    queue.dequeue().should.equal('hello');
    should.equal(queue.dequeue(), null);
    should.equal(queue.dequeue(), null);
  });

  it('should return its size', function () {
    queue.size().should.equal(0);
    queue.enqueue('hello');
    queue.size().should.equal(1);
    queue.enqueue('world');
    queue.size().should.equal(2);
    queue.dequeue();
    queue.size().should.equal(1);
    queue.dequeue();
    queue.size().should.equal(0);
  });

});

describe('Single Linked list', function () {

  let singleLinkedList;

  beforeEach(function () {
    singleLinkedList = new classes.LinkedList();
  });

  it('the class should provide an "addToHead()" method', function () {
    singleLinkedList.should.not.have.ownProperty('addToHead');
    singleLinkedList.addToHead.should.be.a('function');
  });

  it('the class should provide an "addToTail()" method', function () {
    singleLinkedList.should.not.have.ownProperty('addToTail');
    singleLinkedList.addToTail.should.be.a('function');
  });

  it('the class should provide an "removeHead()" method', function () {
    singleLinkedList.should.not.have.ownProperty('removeHead');
    singleLinkedList.removeHead.should.be.a('function');
  });

  it('the class should provide an "contains()" method', function () {
    singleLinkedList.should.not.have.ownProperty('contains');
    singleLinkedList.contains.should.be.a('function');
  });

  it('removeHead should return \'null\' if the list is empty', function () {
    should.equal(singleLinkedList.removeHead(), null);
  });

  it('addToHead() should add a node with the passed value to the beginning of the list and return \'true\'', function () {
    singleLinkedList.addToHead('foo').should.be.true;
    singleLinkedList.head.data.should.equal('foo');
    singleLinkedList.addToHead('bar').should.be.true;
    singleLinkedList.head.data.should.equal('bar');
    singleLinkedList.addToHead('where does this foo bar thing comes from?').should.be.true;
  });

  it('addToTail() should add a node with the passed value to the end of the list and return \'true\'', function () {
    singleLinkedList.addToTail('foo').should.be.true;
    singleLinkedList.head.data.should.equal('foo');
    singleLinkedList.addToTail('bar').should.be.true;
    singleLinkedList.head.data.should.equal('foo');
    singleLinkedList.addToTail('where does this foo bar thing comes from?').should.be.true;
  });

  it('removeHead() should remove the first node from the list and return its value', function () {
    singleLinkedList.addToHead('where does this foo bar thing comes from?').should.be.true;
    singleLinkedList.addToHead('bar').should.be.true;
    singleLinkedList.addToHead('foo').should.be.true;
    singleLinkedList.removeHead().should.equal('foo');
    singleLinkedList.removeHead().should.equal('bar');
  });

  it('contains() should return a boolean that reflects whether or not the passed value is in the linked list', function () {
    singleLinkedList.contains('bar').should.be.false;
    singleLinkedList.addToHead('foo').should.be.true;
    singleLinkedList.addToHead('bar').should.be.true;
    singleLinkedList.addToHead('where does this foo bar thing comes from?').should.be.true;
    singleLinkedList.contains('bar').should.be.true;
    singleLinkedList.contains('seriously make a framework that handles linked lists already').should.be.false;
  });

});
