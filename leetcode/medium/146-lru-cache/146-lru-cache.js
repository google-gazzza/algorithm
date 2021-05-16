/*
146-lru-cache

# leetcode/medium/146. LRU Cache
Difficulty: medium
URL: https://leetcode.com/problems/lru-cache/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/


/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.cacheSize = capacity;
  this.cache = new Map();
  this.cacheStack = [];
  
  this.setCacheStack = (key) => {
    this.cacheStack.push(key);
    
    const leftIndex = this.cacheStack.indexOf(key);
    const rightIndex = this.cacheStack.lastIndexOf(key);
    
    if (leftIndex !== rightIndex) {
      this.cacheStack.splice(leftIndex, 1);
    }
  }
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    this.setCacheStack(key);
    
    return this.cache.get(key);
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.setCacheStack(key);
  this.cache.set(key, value);
  
  while (this.cache.size > this.cacheSize) {
    this.cache.delete(this.cacheStack.shift());
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
