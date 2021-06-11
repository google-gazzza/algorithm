/*
simple-fun-48-higher-version

# codewars/7kyu/Simple Fun #48: Higher Version
Difficulty: 7kyu
URL: https://www.codewars.com/kata/58884e352ffea6d2f8000082/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function higherVersion(ver1, ver2) {
  const a = ver1.split('.');
  const b = ver2.split('.');
  
  for (let i = 0; i < a.length; i += 1) {
    if (Number(a[i]) > Number(b[i])) {
      return true;
    }
    if (Number(a[i]) < Number(b[i])) {
      return false;
    }
  }
  
  return false;
}

describe("higherVersion Tests", function () {
  it("It should works for basic tests.", function () {
    expect(higherVersion("1.2.2", "1.2.0")).toEqual(true);
    expect(higherVersion("1.0.5", "1.1.0")).toEqual(false);
    expect(higherVersion("1.1.0", "1.1.5")).toEqual(false);
    expect(higherVersion("10", "9")).toEqual(true);
    expect(higherVersion("1.0.10", "1.1.5")).toEqual(false);
    expect(higherVersion("1.1.10", "1.2.0")).toEqual(false);
    expect(higherVersion("1.2.2", "1.2.10")).toEqual(false);
    expect(higherVersion("1.10.2", "1.2.10")).toEqual(true);
    expect(higherVersion("4.3.22.1", "4.3.22.1")).toEqual(false);
  });
});
