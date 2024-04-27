// 1055-shortest-way-to-form-string
// URL: https://leetcode.com/problems/shortest-way-to-form-string/description/?envType=study-plan-v2&envId=premium-algo-100


function shortestWay(source: string, target: string): number {
    let repeatCount = 0;
    let sourceIndex = 0;
    let sourceLength = source.length;
  
    for (let i = 0; i < target.length; i++) {
      let targetChar = target[i];
      let found = false;
  
      for (let j = sourceIndex; j < sourceIndex + sourceLength; j++) {
        if (j % sourceLength === 0) {
          repeatCount++;
        }
  
        if (source[j % sourceLength] === targetChar) {
          found = true;
          sourceIndex = j + 1;
          break;
        }
      }
  
      if (!found) {
        return -1;
      }
    }
  
    return repeatCount;
  };
  
  let source = "xyz";
  let target = "xzyxz";
  // Output: 3
  // Explanation: The target string can be constructed as follows "xz" + "y" + "xz".
  