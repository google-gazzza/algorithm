// [JS][7kyu] Operator overload ?
// operator-overload
// https://www.codewars.com/kata/52a0849a852a854d050005f4/train/javascript

class Foo {
  constructor(value) {
    this.val = value
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.val
    }
    if (hint === 'string') {
      return String(this.val)
    }
    return this.val
  }
}

// const Foo = function (value) {
//   this.val = value
// }

// Foo.prototype[Symbol.toPrimitive] = function (hint) {
//   if (hint === 'number') {
//     return this.val
//   }
//   if (hint === 'string') {
//     return String(this.val)
//   }
//   return this.val
// }

new Foo(2) + new Foo(3) === 5
new Foo(-2) + new Foo(3) === 1
new Foo(-21) + new Foo(-7) === -28
new Foo(1.5) + new Foo(0.2) === 1.7
