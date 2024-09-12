/*
error-correction-1-hamming-code

# codewars/6kyu/Error correction #1 - Hamming Code
Difficulty: 6kyu
URL: https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e/

## Approach

### en
Encode
1.split as array and iterate
1-1 while iterate parses char code(ASCII) and convert to binary.
Also don’t forget padding with 0!(cause binary will omit start 0)

2.iterate process-1-1 and repeat all character 3times

3.join process-2 and return

Decode
1.convert input characters as an array

2.iterate while process-1 result exist
2-1 pick first 3 values and find major(most frequent) character and put that in ‘binary’ variable
2-2 remove first 3 values of process-1

3. Define result(array)

4. Iterate until ‘binary’ variable not null
4-1 push first 8 characters to ‘result’
4-2 re-assign to ‘binary’ to next 8 binary

5. Iterate process-4 and parse binary code to the character and join and return

### kr
Encode
1.array형태로 split한후 이터레이션 합니다.
1-1 이터레이션 하는동안 ASCII코드를 추출후 바이너리로 변경합니다.
또한 padding처리 하는것으 ㄹ잊지 마세요(왜냐면 바이너리로 변경시 0은 생략 되기 때문입니다.)

2.process-1-1 을 이터레이션 하며 이터레이션 하는동안 모든 캐릭터를 3번 반환합니다.

3.process-2결과를 join후 리턴합니다.

Decode
1. 입력된 문자들을 어레이로 변환합니다.

2.process-1결과물이 존재하는동안 이터레이션 합니다.
2-1 처음 3개의 값에서 가장 빈번하게 등장하는 값을 ‘binary’변수에 할당합니다.
2-2 proces-1의 처음 3개의 값을 삭제합니다.

3. result변수를 정의합니다.

4. ‘binary’변수가 null이 아닐때까지 이터레이션합니다.
4-1 처음 8글자를 ‘result’로  할당합니다.
4-2 ‘binary’변수를 8번 이후의 문자로 재 할당 합니다.

5. process-4를 이터레이션 하고, binary code를 문자로 파싱한후, join하고 리턴합니다.

## Solution
### JavaScript
*/

function encode(text) {
  return [...text].map((e) => e.charCodeAt(0).toString(2).padStart(8, 0))
    .map((e) => [...e].map((char) => char.repeat(3)).join(''))
    .join('');
}

function decode(bits) {
  let binary = '';
  const tripledBinary = [...(bits.slice(0))];
  
  while (tripledBinary.length) {
    const [a, b, c] = [...tripledBinary.slice(0, 3)];
    
    if (a === b || a === c) {
      binary += a;
    } else {
      binary += b;
    }
    
    tripledBinary.splice(0, 3);
  }
  
  const result = [];
  
  while (binary.length) {
    result.push(binary.slice(0, 8));
    binary = binary.slice(8);
  }
  
  return result.map((e) => String.fromCharCode(parseInt(e, 2)))
    .join('');
}

// test
console.log(encode('hey'), '000111111000111000000000000111111000000111000111000111111111111000000111');
console.log(decode('100111111000111001000010000111111000000111001111000111110110111000010111'), 'hey');
