// 604-design-compressed-string-iterator
// URL: https://leetcode.com/problems/design-compressed-string-iterator/description/?envType=study-plan-v2&envId=premium-algo-100


class StringIterator {
    private complessedList: [string, number][] = [];
    currentChar: string = '';
    currentCount: number = 0;
  
    constructor(compressedString: string) {
      this.complessedList = this.parseString(compressedString);
    }
  
    parseString(str: string): [string, number][] {
      const regex = /\d+|[a-zA-Z]+/g;
      const matches = str.match(regex) || [];
      const result: [string, number][] = [];
  
      for (let i = 0; i < matches.length; i += 2) {
        const word = matches[i];
        const number = matches[i + 1] ? parseInt(matches[i + 1], 10) : NaN;
        if (!isNaN(number)) {
          result.push([word, number]);
        }
      }
  
      return result;
    }
  
    moveToNextComplessed() {
      this.currentChar = this.complessedList[0][0];
      this.currentCount = this.complessedList[0][1];
      this.complessedList.shift();
    }
  
    next(): string {
      if (this.currentCount === 0) {
        if (this.complessedList.length === 0) {
          return ' ';
        }
        this.moveToNextComplessed();
      }
      this.currentCount -= 1;
  
      return this.currentChar;
    }
  
    hasNext(): boolean {
      return this.complessedList.length > 0 || this.currentCount > 0;
    }
  }
  
  /**
   * Your StringIterator object will be instantiated and called as such:
   * var obj = new StringIterator(compressedString)
   * var param_1 = obj.next()
   * var param_2 = obj.hasNext()
   */
  