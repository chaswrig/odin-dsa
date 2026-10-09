//LinkedList made using the Node Class
"use strict";

import { Node } from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node();
    newNode.setValue(value);
    const previousTail = this.tail();
    if (previousTail) {
      previousTail.setNextNode(newNode);
    }
    this.head = this.head || newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node();
    newNode.setValue(value);
    newNode.setNextNode(this.head());
    this.head = newNode;
    this.length++;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.getNextNode();
    }
    return count;
  }

  getHead() {
    if (this.head === null) {
      return undefined;
    }
    return this.head;
  }

  tail() {
    if (this.head === null) {
      return undefined;
    }
    let current = this.head;
    while (current.getNextNode()) {
      current = current.getNextNode();
    }
    return current;
  }

  pop() {
    if (this.head === null) {
      return undefined;
    }
    const head = this.head;
    this.head = this.head.getNextNode();
    this.length--;
    return head;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.getValue() === value) {
        return true;
      } else {
        if (!current.getNextNode()) {
          return false;
        }
        current = current.getNextNode();
      }
    }
  }

  findIndex(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.getValue() === value) {
        return index;
      }
      current = current.getNextNode();
      index++;
    }
    return -1;
  }

  atIndex(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let current = this.head;
    let currentIndex = 0;
    while (current) {
      if (currentIndex === index) {
        return current;
      }
      current = current.getNextNode();
      currentIndex++;
    }
    return undefined;
  }

  toString() {
    if (!this.head) {
      return "null";
    }
    return function () {
      const nodes = [];
      let current = this.head;
      while (current) {
        nodes.push(
          `( ${current.getValue()} : ${
            current.getNextNode() ? current.getNextNode().getValue() : "null"
          } )`,
        );
        current = current.getNextNode();
      }
      return nodes.join(" -> ") + " -> null";
    }.call(this);
  }
}

export { LinkedList };
