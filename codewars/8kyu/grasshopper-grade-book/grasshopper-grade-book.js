/*
grasshopper-grade-book

# codewars/8kyu/Grasshopper - Grade book
Difficulty: 8kyu
URL: https://www.codewars.com/kata/55cbd4ba903825f7970000f5/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function getGrade(...args) {
  const average = args.reduce((acc, cur) => acc + cur) / args.length;
  
  switch (true) {
    case 90 <= average && average <= 100:
      return 'A';
    case 80 <= average && average < 90:
      return 'B';
    case 70 <= average && average < 80:
      return 'C';
    case 60 <= average && average < 70:
      return 'D';
    case 0 <= average && average < 60:
      return 'F';
  }
}


describe('grade book', function () {
  test('should return an A', function () {
    expect(getGrade(95, 90, 93)).toEqual('A');
    expect(getGrade(100, 85, 96)).toEqual('A');
    expect(getGrade(92, 93, 94)).toEqual('A');
  });
  test('should return a B', function () {
    expect(getGrade(70, 70, 100)).toEqual('B');
    expect(getGrade(82, 85, 87)).toEqual('B');
    expect(getGrade(84, 79, 85)).toEqual('B');
    expect(getGrade(89, 89, 90)).toEqual('B');
  });
  test('should return a C', function () {
    expect(getGrade(70, 70, 70)).toEqual('C');
    expect(getGrade(75, 70, 79)).toEqual('C');
    expect(getGrade(60, 82, 76)).toEqual('C');
  });
  test('should return a D', function () {
    expect(getGrade(65, 70, 59)).toEqual('D');
    expect(getGrade(66, 62, 68)).toEqual('D');
    expect(getGrade(58, 62, 70)).toEqual('D');
  });
  test('should return an F', function () {
    expect(getGrade(44, 55, 52)).toEqual('F');
    expect(getGrade(48, 55, 52)).toEqual('F');
    expect(getGrade(58, 59, 60)).toEqual('F');
  });
});
