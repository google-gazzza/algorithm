// 249-group-shifted-strings
// URL: https://leetcode.com/problems/group-shifted-strings/description/?envType=study-plan-v2&envId=premium-algo-100


function getSequenceFromString(str: string): string {
    const sequence = [];
  
    for (let i = 1; i < str.length; i++) {
      const diff = str.charCodeAt(i) - str.charCodeAt(i - 1);
      sequence.push(diff < 0 ? diff + 26 : diff);
    }
  
    return sequence.join(',');
  }
  
  function groupStrings(strings: string[]): string[][] {
    const hash: Map<string, string[]> = new Map();
  
    strings.forEach((str) => {
      const sequence: string = getSequenceFromString(str);
  
      if (hash.has(sequence)) {
        hash.get(sequence).push(str);
      } else {
        hash.set(sequence, [str]);
      }
  
    });
  
    return [...hash.values()];
  };
  