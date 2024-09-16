// leetcode/easy/2726. Calculator with Method Chaining
// 2726-calculator-with-method-chaining
// URL: https://leetcode.com/problems/calculator-with-method-chaining/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

class Calculator {
  #number: number;

  constructor(value: number) {
    this.#number = value;
  }

  add(value: number): Calculator {
    return new Calculator(this.#number + value);
  }

  subtract(value: number): Calculator {
    return new Calculator(this.#number - value);
  }

  multiply(value: number): Calculator {
    return new Calculator(this.#number * value);
  }

  divide(value: number): Calculator {
    if (value === 0) {
      throw new Error('Division by zero is not allowed');
    }

    return new Calculator(this.#number / value);
  }

  power(value: number): Calculator {
    return new Calculator(this.#number ** value);
  }

  getResult(): number {
    return this.#number;
  }
}
