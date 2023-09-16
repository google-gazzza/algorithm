// leetcode/medium/2777. Date Range Generator
// 2777-date-range-generator
// URL: https://leetcode.com/problems/date-range-generator/

function* dateRangeGenerator(start: string, end: string, step: number): Generator<string> {
  this.start = new Date(start);
  this.end = new Date(end);

  while (this.start <= this.end) {
    yield this.start.toISOString().slice(0, 10);
    this.start.setDate(this.start.getDate() + step);
  }
}

const g = dateRangeGenerator('2023-04-01', '2023-04-04', 1);
g.next().value; // '2023-04-01'
g.next().value; // '2023-04-02'
g.next().value; // '2023-04-03'
g.next().value; // '2023-04-04'
g.next().done; // true
