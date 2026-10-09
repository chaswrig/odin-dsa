//Node Class for future data structures
"use strict";

class Node {
  constructor() {}
  key;
  value;
  nextNode;
  previousNode;

  getKey() {
    return this.key;
  }

  setKey(key) {
    this.key = key;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }

  getNextNode() {
    return this.nextNode;
  }

  setNextNode(nextNode) {
    this.nextNode = nextNode;
  }

  getPreviousNode() {
    return this.previousNode;
  }

  setPreviousNode(previousNode) {
    this.previousNode = previousNode;
  }
}

export { Node };
