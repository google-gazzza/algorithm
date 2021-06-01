/*
string-cleaning

# codewars/8kyu/String cleaning
Difficulty: 8kyu
URL: https://www.codewars.com/kata/57e1e61ba396b3727c000251/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function stringClean(s) {
  return s.replace(/\d/gi, '');
}

test('stringClean', () => {
  expect(stringClean("")).toEqual("");
  expect(stringClean("! !")).toEqual("! !");
  expect(stringClean("123456789")).toEqual("");
  expect(stringClean("(E3at m2e2!!)")).toEqual("(Eat me!!)");
  expect(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"))
    .toEqual("Dsa cdsc csa!!! I Am cool!");
  expect(stringClean("A1 A1! AAA   3J4K5L@!!!")).toEqual("A A! AAA   JKL@!!!");
  expect(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@"))
    .toEqual("Adgre Asad! AAA fvfdvJKL@");
  expect(stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 "))
    .toEqual("Addsadds A  $$sad! AAAe fKL@ ");
  expect(stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 "))
    .toEqual("Addsadds A  $$sa!d! A!A!Ae$ f## ");
  expect(stringClean("My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?"))
    .toEqual("My \"messy\" data issues! Will they ever, ever be solved?");
  expect(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"))
    .toEqual("Why can't we buy the good software? #cheapskates");
});
