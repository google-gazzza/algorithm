// [JS][6kyu] Meeting
// meeting
// https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript

const alphabeticalSort = (a, b) => {
  const [firstNameOfA, lastNameOfA] = a;
  const [firstNameOfB, lastNameOfB] = b;
  const result = lastNameOfA.localeCompare(lastNameOfB);
  if (result === 0) {
    return firstNameOfA.localeCompare(firstNameOfB);
  }
  return result;
};

const meeting = (s) => {
  return s
    .split(";")
    .map((item) => item.split(":"))
    .map((item) => [item[0].toUpperCase(), item[1].toUpperCase()])
    .sort(alphabeticalSort)
    .map((item) => `(${item[1].toUpperCase()}, ${item[0].toUpperCase()})`)
    .reduce((acc, cur) => acc + cur, "");
};

// meeting('Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill')
meeting(
  "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
);
