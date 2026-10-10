//HashMap made with LinkedLists
"use strict";

import { LinkedList } from "./linkedlist.js";

//Grow the hash map when (number of entries > load factor * capacity)
class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor; //recommend 0.75
    this.capacity = capacity; // recommend 16
    this.numberEntries = 0;
    this.buckets = new Array(capacity);
    for (let i = 0; i < capacity; i++) {
      let bucket = new LinkedList();
      this.buckets[i] = bucket;
    }
  }

  addBuckets() {}

  hash(key) {
    //takes a string key and produces a hash code
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  expandMap() {}

  set(key, value) {
    //if key already exists in map, overwrites the value, otherwise adds the value to the correct bucket.
    // remember collisions and load factor/bucket growth.
    if (this.has(key)) {
      this.remove(key);
      this.numberEntries--;
    }

    let hashedKey = this.hash(key);
    let bucketNumber = hashedKey % this.capacity;
    let bucketList = this.buckets[bucketNumber];
    bucketList.append(value, key);
    this.numberEntries++;

    //TODO: Bucket growth.
    if (this.length() >= this.capacity * this.loadFactor) {
      const newHashMap = new HashMap(this.loadFactor, this.capacity * 2);
      const currentMapEntries = this.entries();
      for (let i = 0; i < currentMapEntries.length; i++) {
        newHashMap.set(currentMapEntries[i][0], currentMapEntries[i][1]);
      }

      this.loadFactor = newHashMap.loadFactor;
      this.capacity = newHashMap.capacity;
      this.numberEntries = newHashMap.numberEntries;
      this.buckets = newHashMap.buckets;
    }
  }

  get(key) {
    let hashedKey = this.hash(key);
    let bucketNumber = hashedKey % this.capacity;
    let bucketList = this.buckets[bucketNumber];
    let foundNodeIndex;
    foundNodeIndex = bucketList.findKey(key);
    if (foundNodeIndex != -1) {
      return bucketList.atIndex(foundNodeIndex).getValue();
    }
  }

  has(key) {
    //returns true if the key exists in the map, false otherwise
    let hashedKey = this.hash(key);
    let bucketNumber = hashedKey % this.capacity;
    let bucketList = this.buckets[bucketNumber];
    let foundNodeIndex;
    foundNodeIndex = bucketList.findKey(key);
    return foundNodeIndex != -1 ? true : false;
  }

  remove(key) {
    if (this.has(key)) {
      let hashedKey = this.hash(key);
      let bucketNumber = hashedKey % this.capacity;
      let bucketList = this.buckets[bucketNumber];
      let foundNodeIndex;
      foundNodeIndex = bucketList.findKey(key);
      bucketList.removeAt(foundNodeIndex);
    }
  }

  length() {
    let length = 0;
    this.buckets.forEach((list) => {
      length += list.size();
    });
    return length;
  } //returns the number of key-value pairs in the map

  clear() {
    this.buckets.forEach((list) => {
      let length = list.size();
      for (let i = 0; i < length; i++) {
        list.pop();
      }

      if (!list.getHead()) {
        list.head = null; // This violiates open/close principle, but whatever.
      }
    });
  }

  keys() {
    //returns an array of all keys in the map
    const keys = [];

    this.buckets.forEach((list) => {
      let length = list.size();
      for (let i = 0; i < length; i++) {
        keys.push(list.atIndex(i).getKey());
      }
    });
    return keys;
  }

  values() {
    //returns an array of all values in the map
    const values = [];

    this.buckets.forEach((list) => {
      let length = list.size();
      for (let i = 0; i < length; i++) {
        values.push(list.atIndex(i).getValue());
      }
    });
    return values;
  }

  entries() {
    //returns an array of [key, value] pairs in the map
    const keyValuePairs = [];
    const keys = this.keys();
    const values = this.values();

    for (let i = 0; i < keys.length; i++) {
      keyValuePairs.push([keys[i], values[i]]);
    }

    return keyValuePairs;
  }
}

export { HashMap };
