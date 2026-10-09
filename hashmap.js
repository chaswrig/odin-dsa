//HashMap made with LinkedLists
"use strict";

// import { LinkedList } from "./linkedlist.js";

//Use this when accessing bucket to enforce out of bounds index
// if (index < 0 || index >= buckets.length) {
//   throw new Error("Index out of bounds");
// }

//Grow the hash map when (number of entries > load factor * capacity)
class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor; //recommend 0.75
    this.capacity = capacity; // recommend 16
  }

  hash(key) {
    //takes a string key and produces a hash code
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    //if key already exists in map, overwrites the value, otherwise adds the value to the correct bucket. remember collisions and load factor/bucket growth.
    return key + value;
  }

  get(key) {
    //takes a key and returns the associated value, or undefined if not found
    return key;
  }

  has(key) {
    //returns true if the key exists in the map, false otherwise
    return !key;
  }

  remove(key) {
    //removes the key and its associated value from the map
    return !key;
  }

  length() {} //returns the number of key-value pairs in the map

  clear() {} //removes all key-value pairs from the map

  keys() {} //returns an array of all keys in the map

  values() {} //returns an array of all values in the map

  entries() {} //returns an array of [key, value] pairs in the map
}

export { HashMap };
