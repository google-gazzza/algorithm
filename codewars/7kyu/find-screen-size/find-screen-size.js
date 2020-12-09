/*
find-screen-size

# Find Screen Size
dificculty: 7kyu
URL: https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/

<br><br><br><br>

## Approach

<br>
### En
it's just simple equation. omit explain

### KR
단순한 방정식이므로 설명을 생략합니다.

 */

function findScreenHeight(width, ratio) {
  const [widthRatio, heightRatio] = ratio.split(':').map(Number);
  return `${width}x${(width / widthRatio) * heightRatio}`;
}

console.log(findScreenHeight(1024, '4:3'), '1024x768');
console.log(findScreenHeight(1280, '16:9'), '1280x720');
console.log(findScreenHeight(3840, '32:9'), '3840x1080');
