/*
strip-comments

# codewars/4kyu/Strip Comments
Difficulty: 4kyu
URL: https://www.codewars.com/kata/51c8e37cee245da6b40000bd
Tags

## Approach

### en

### kr

## Solution
### JavaScript
### TypeScript
### SQL

*/

function solution(input, markers) {
  return input.split('\n')
    .map((e) => {
      const filteredMarkers = markers.filter((marker) => e.indexOf(marker) !== -1);
      filteredMarkers.forEach((marker) => {
        if (e.indexOf(marker) !== -1) {
          e = e.slice(0, e.indexOf(marker)).trim();
        }
      });
      
      return e;
    })
    .join('\n');
}

// test
console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));
console.log("apples, plums\npears\noranges");
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]));
