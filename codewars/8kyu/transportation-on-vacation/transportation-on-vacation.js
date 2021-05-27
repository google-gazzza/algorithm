/*
transportation-on-vacation

# codewars/8kyu/Transportation on vacation
Difficulty: 8kyu
URL: https://www.codewars.com/kata/568d0dd208ee69389d000016/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function rentalCarCost(d) {
  let discount = 0;
  
  if (d >= 3) {
    discount += 20;
  }
  if (d >= 7) {
    discount += 30;
  }
  
  return (d * 40) - discount;
}

describe("Regular Tests:", function () {
  test("Should work for under 3 days:", function () {
    expect(rentalCarCost(1)).toEqual(40);
    expect(rentalCarCost(2)).toEqual(80);
  });
  test("Should work for under 7 days:", function () {
    expect(rentalCarCost(3)).toEqual(100);
    expect(rentalCarCost(4)).toEqual(140);
    expect(rentalCarCost(5)).toEqual(180);
    expect(rentalCarCost(6)).toEqual(220);
  });
  test("Should work for 7 or more days:", function () {
    expect(rentalCarCost(7)).toEqual(230);
    expect(rentalCarCost(8)).toEqual(270);
    expect(rentalCarCost(9)).toEqual(310);
    expect(rentalCarCost(10)).toEqual(350);
  });
});
