/*
901-online-stock-span
leetcode/medium/901. Online Stock Span
URL: https://leetcode.com/problems/online-stock-span/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

class StockSpanner {
  private stockList: number[];

  constructor() {
    this.stockList = [];
  }

  next(price: number): number {
    this.stockList.unshift(price);

    for (let i = 0; i < this.stockList.length; i += 1) {
      if (price < this.stockList[i]) {
        return i;
      }
    }

    return this.stockList.length;
  }
}

// Input
//   ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
//   [[], [100], [80], [60], [70], [60], [75], [85]]
// Output
//   [null, 1, 1, 1, 2, 1, 4, 6]

// Explanation
const stockSpanner: StockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4,
// because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6

const stockSpanner2: StockSpanner = new StockSpanner();
stockSpanner2.next(29); // return 1
stockSpanner2.next(91); // return 1
stockSpanner2.next(62); // return 1
stockSpanner2.next(76); // return 1
stockSpanner2.next(51); // return 1

// ["StockSpanner","next","next","next","next","next"]
//   [[],[29],[91],[62],[76],[51]]
// Output [null,1,2,2,3,2]
// Expected [null,1,2,1,2,1]
