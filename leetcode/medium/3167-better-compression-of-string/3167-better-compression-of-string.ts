// 3167-better-compression-of-string
// URL: https://leetcode.com/problems/better-compression-of-string/description/

function betterCompression(compressed: string): string {
    const map = new Map<string, number>();
  
    compressed.match(/([a-z]\d+)/g)
      .forEach((keyAndValue) => {
        const key = keyAndValue[0];
        const value = parseInt(keyAndValue.slice(1));
  
        map.set(key, (map.get(key) || 0) + value);
      });
  
    const result = Array.from(map)
      .sort((a, b) => a[0].localeCompare(b[0]));
  
    return result.map(([key, value]) => key + value).join('');
  };
  