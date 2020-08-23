// [Medium] 146. LRU Cache
// 146_lru_cache

// https://leetcode.com/problems/lru-cache
// Runtime: 228 ms, faster than 61.00% of JavaScript online submissions for LRU Cache.
// Memory Usage: 48.9 MB, less than 92.09% of JavaScript online submissions for LRU Cache.
const LRUCache = function (capacity) {
  this.cacheArr = []
  this.cacheMap = new Map()
  this.capacity = capacity
}

LRUCache.prototype.get = function (key) {
  const cacheMap = this.cacheMap
  const cacheArr = this.cacheArr
  if (!cacheMap.has(key)) {
    return -1
  }
  const index = cacheArr.indexOf(key)
  cacheArr.splice(index, 1)
  cacheArr.unshift(key)

  return cacheMap.get(key)
}

LRUCache.prototype.put = function (key, value) {
  const cacheMap = this.cacheMap
  const cacheArr = this.cacheArr
  if (cacheMap.has(key)) {
    const index = cacheArr.indexOf(key)
    cacheMap.set(key, value)
    cacheArr.splice(index, 1)
    cacheArr.unshift(key)
  } else {
    if (cacheArr.length === this.capacity) {
      const removeKey = this.cacheArr.pop()
      cacheMap.delete(removeKey)
    }
    cacheMap.set(key, value)
    cacheArr.unshift(key)
  }
}
