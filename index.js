'use strict';

// Stack

function Stack() {
  this.storage = {};
  this.length = 0;
}
// length basically used like a counter;
Stack.prototype.push = function (value) {
this.storage[this.length] = value;
// [this.length] acts like the key here, and the value its value
this.length++; // increments to go to next key
return true;
};


Stack.prototype.pop = function () {
  if (this.length === 0) return null; // if empty
  this.length--;
  // goes to the last index
  let popped = this.storage[this.length];
  // stores the value of the last index in result;
  delete this.storage[this.length];
  // deletes the value & index from the stack LIFO way
  return popped;
  // return the isolated val which is popped out
};

Stack.prototype.size = function () {
return this.length;
};

function Queue() {
  this.storage = {};
  this.length = 0;
  this.lowestIndex = 0;
}

// Queues

Queue.prototype.enqueue = function (value) {
  // like "index||key : value", 
  this.storage[length] = value; 
  // then goes to next index||key
  length++;
  return true;
}


Queue.prototype.dequeue = function () { 
  // if empty, returns null
  if (this.size === 0) return null;
  // goes to the lowest index which is the first value figuring in the queue.
  // you store it in the var result so u can return it later and delete the actual stuff from the queue.
  let result = this.storage[lowestIndex];
  // you delete the value and index from the queue.
  delete this.storage[lowestIndex];
  this.lowestIndex++;
  return result;
};


Queue.prototype.size = function () {
  // because length =! size given that FIFO, need to make the diff:
  return this.length - this.lowestIndex;
};

// Linked list

function LinkedList() {
  this.storage = {}; // collection of Nodes
  this.head = null; // Node
}
// class Node:
function Node(data, next) {
  this.data = data;
  this.next = next;
}

LinkedList.prototype.addToHead = function (data) {
  newNode = new Node(data, null);
  if (this.head) newNode.next = this.head;
  // le current head devient celui derrière lequel le new head va pointer sur. donc de head,
  // à celui qui est next. 
  this.head = newNode;
  // le new head est le newNode, qui son data, et has null as next, because head.
  return true;
}

LinkedList.prototype.addToTail = function (data) {
  newNode = new Node(data, null);
  // etablie le nouveau node -parce que tail, need null
  if (!this.head) this.head = newNode;
  // if rien, tete = tail, donc this.head = aussi ce nouveau node 
  else {
    // temp va etre une var temp because traverse notre liste à partir de la tête, le début. 
    let temp = this.head;
    // tant qu'il y a qqc après, donc que ce n'est pas le dernier,
    while (temp.next !== null){
      //  on continue à monter dans la liste, jusqu'à ce qu'il n'y aie rien après, donc
      // que ce soit le dernier. Là la loop s'arrête.
      temp = temp.next;
    }
    // et du coup le newNode sera cette valeur là
    temp.next = newNode;
  }
  return true;
};

LinkedList.prototype.removeHead = function () {
  if (!this.head) return null; 
  let temp = this.head;
  // qui va traverser la liste
  if (temp.next=== null) this.head === null;
  // redefines this.head to the next value that the 
  // current this.head points to, before being replaced by it.
  else this.head = temp.next;
  return temp.data;
  //returns the value isolated and removed of the old this.head 
  // qui était stored dans temp --> qui est temp.data.
 };


LinkedList.prototype.contains = function (data) { 
  // variable temp because va voyager au traver de la linked list
  // jusqu'à ce que ça trouve la data -ou non
  let temp = this.head;
  if (this.head === null) return false;
  // if no head then there's nothing
  while (temp.next !==null){
    // temp is the iterator that basically goes through the thing until it points to nothing
    // which would mean that it's the last one in the linked list, so needs to stop 
    if (temp.data === data) return true;
    // si ça match avec la data a comparer, ça retourne true direct, sinon
    // ça va au prochain node (si il y en a un).
    temp = temp.next;
  }
  // si y a rien, ça reach la fin et sort du while, pour retourner false. 
  return false;
}


/*
function Stack () {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.length] = value;
  this.length++;
  return true;
};

Stack.prototype.pop = function () {
  if (this.length === 0) return null;
  this.length--;
  let result = this.storage[this.length];
  delete this.storage[this.length];
  return result;
};

Stack.prototype.size = function () {
  return this.length;
};




// Queue

function Queue () {
  this.storage = {};
  this.length = 0;
  this.lowestIndex = 0;
}

Queue.prototype.enqueue = function (value) {
  this.storage[this.length] = value;
  this.length++;
  return true;
};

Queue.prototype.dequeue = function () {
  if (this.size() === 0) return null;
  let result = this.storage[this.lowestIndex];
  delete this.storage[this.lowestIndex];
  this.lowestIndex++;
  return result;
};

Queue.prototype.size = function () {
  return this.length - this.lowestIndex;
};


// Linked list

function LinkedList () {
  this.storage = {}; // collection of Nodes
  this.head = null; // Node
}

function Node (data, next) {
  this.data = data;
  this.next = next;
}

LinkedList.prototype.addToHead = function (data) {
  let newNode = new Node(data, null);
  if (this.head) newNode.next = this.head;
  this.head = newNode;
  return true;
};

LinkedList.prototype.addToTail = function (data) {
  let newNode = new Node(data, null);
  if (!this.head) this.head = newNode;
  else {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }
  return true;
};

LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  let temp = this.head;
  if (temp.next === null) {
    this.head = null;
  } else {
    this.head = temp.next;
  }
  return temp.data;
};

LinkedList.prototype.contains = function (data) {
  if (this.head === null) return false;
  else {
    let temp = this.head;
    while (temp.next !== null) {
      if (temp.data === data) return true;
      temp = temp.next;
    }
    return false;
  }
};

class DoubleLinkedList extends LinkedList {
  constructor () {
    super();
    this.tail = null;
  }
  addToHead (data) {
    // let newNode = new Node(data, null);
    // if (this.head) newNode.next = this.head;
    // this.head = newNode;
    // return true;
  }
  addToTail (data) {
    // let newNode = new Node(data, null);
    // if (!this.head) this.head = newNode;
    // else {
    //   let temp = this.head;
    //   while (temp.next !== null) {
    //     temp = temp.next;
    //   }
    //   temp.next = newNode;
    // }
    // return true;
  }
  removeHead () {
    // if (!this.head) return null;
    // let temp = this.head;
    // if (temp.next === null) {
    //   this.head = null;
    // } else {
    //   this.head = temp.next;
    // }
    // return temp.data;
  }
  removeTail () {
    // tatata

    // Removes the last node from the list and return its value.
  }
  contains (data) {
    // if (this.head === null) return false;
    // else {
    //   let temp = this.head;
    //   while (temp.next !== null) {
    //     if (temp.data === data) return true;
    //     temp = temp.next;
    //   }
    //   return false;
    // }
  }
}

class dNode extends Node {
  constructor (data, next, prev) {
    super(data, next);
    this.prev = prev;
  }
}
*/
module.exports = {
  Stack,
  Queue,
  LinkedList,
  DoubleLinkedList
};
