// filter-out-the-geese
// Filter out the geese
// difficulty: 8kyu
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/

const GEESE = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

const gooseFilter = (birds) => birds.filter((e) => !GEESE.includes(e));


console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]), ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]), ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]), []);
