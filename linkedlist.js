//LinkedList made using the Node Class
"use strict";

import { Node } from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value, key = null) {
    //optionial keys for hashmap project
    const newNode = new Node();
    newNode.setValue(value);
    newNode.setKey(key); //ugly, roll with it
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

  insertAt(index, ...values) {
    //Should insert new nodes with the given values at index.
    //If index exceeds list length throw a RangeError
    if (index < 0 || index >= this.length) {
      throw new RangeError("Index out of bounds");
    }

    values.forEach((value) => {
      let newNode = new Node();
      newNode.setValue(value);
      const indexNode = this.atIndex(index);
      newNode.setNextNode(indexNode);
      if (index > 0) {
        const previousNode = this.atIndex(index - 1);
        previousNode.setNextNode(newNode);
      }
      index++;
      this.length++;
    });
  }

  removeAt(index) {
    // Removes the node at the given index.
    // If the given index is out of bounds throw a RangeError
    if (index < 0 || index >= this.length) {
      throw new RangeError("Index out of bounds.");
    }
    if (index > 0) {
      const previousNode = this.atIndex(index - 1);
      const nodeToRemove = previousNode.getNextNode();
      previousNode.setNextNode(nodeToRemove.getNextNode());
      this.length--;
      console.log("removed from linked list");
    } else {
      this.pop();
    }
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
      return null;
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

  findKey(key) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.getKey() === key) {
        return index;
      }
      current = current.getNextNode();
      index++;
    }
    return -1;
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
      throw new RangeError("Index out of bounds.");
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
