// leetcode/medium/2622. Cache With Time Limit
// 2622-cache-with-time-limit
// URL: https://leetcode.com/problems/cache-with-time-limit/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

type CacheData = {
  key: number;
  value: number;
  duration: number;
  timeoutSpace?: any;
};

class TimeLimitedCache {
  private cache: Map<number, CacheData>;

  private cacheCount: number;

  constructor() {
    this.cache = new Map<number, CacheData>();
    this.cacheCount = 0;
  }

  set(key: number, value: number, duration: number): boolean {
    const cacheData: CacheData = this.cache.get(key);

    if (cacheData?.timeoutSpace) {
      clearTimeout(cacheData.timeoutSpace);
    } else {
      this.cacheCount += 1;
    }

    this.cache.set(key, {
      key,
      value,
      duration: Date.now() + duration,
      timeoutSpace: setTimeout(() => {
        this.cache.delete(key);
        this.cacheCount -= 1;
      }, duration),
    });

    if (cacheData?.duration > Date.now()) {
      return true;
    }

    return false;
  }

  get(key: number): number {
    const cacheData: CacheData = this.cache.get(key);

    if (cacheData?.duration > Date.now()) {
      return cacheData.value;
    }

    return -1;
  }

  count(): number {
    return this.cacheCount;
  }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
