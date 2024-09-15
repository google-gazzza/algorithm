/*
sum-of-a-beach

# codewars/7kyu/Sum of a Beach
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5b37a50642b27ebf2e000010/

## Approach

### en
1.generate regular expression for find keyword
2.find predefined word in the input
2-1 if there match, call process-1 again with replacing one value with an increased count
(for preventing overwrapping process one by one)
3.if not match. Then return count;

### kr

## Solution
### JavaScript
1.키워드를 찾는 정규표현식을 준비합니다.
2.input으로부터 사전에 정의된 키워드가 매치되는지 확인합니다.
2-1 만약 매치된다면, 한개의 값을 리플레이스(제거)한 값과, count를 1 증가시키 값으로 process-1을 다시 호출합니다.
(오버랩핑된 값을 방지하기 위해 하나씩 제거합니다)
3.만약 매치된 값이 없다면 count를 리턴합니다.
*/

function sumOfABeach(beach, count = 0) {
  const regexp = new RegExp(/(sand)|(water)|(fish)|(sun)/, 'i');
  
  if (beach.match(regexp)) {
    return sumOfABeach(beach.replace(regexp, ''), count + 1);
  }
  
  return count;
}

// test
sumOfABeach('WAtErSlIde');
// ?
// ==>  1
sumOfABeach('GolDeNSanDyWateRyBeaChSuNN');
// ?
// ==>  3
sumOfABeach('gOfIshsunesunFiSh');
// ?
// ==>  4
sumOfABeach('cItYTowNcARShoW');
// ?
// ==>  0

// best practice by [SavagePixie, Synthetx, asdfasdf850]
// const sumOfABeach = beach => (beach.match(/sand|water|fish|sun/ig) || []).length
