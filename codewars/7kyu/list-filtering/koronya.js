// [JS][7kyu] List Filtering
// list-filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

const filter_list = (l) =>
  l.filter((item) => typeof item === "number" && item >= 0);

filter_list([1, 2, "a", "b"]) === [1, 2];
filter_list([1, "a", "b", 0, 15]) === [1, 0, 15];
filter_list([1, 2, "aasf", "1", "123", 123]) === [1, 2, 123];
