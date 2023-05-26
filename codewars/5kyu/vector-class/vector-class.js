// vector-class
// https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4

class Vector {
  constructor(initialValues) {
    this.val = initialValues;
  }
  
  compareLength(vector) {
    if (this.val.length !== vector.val.length) {
      throw Error();
    }
  }
  
  add(vector) {
    this.compareLength(vector);
    return new Vector(this.val.map((v, i) => v + vector.val[i]));
  }
  
  subtract(vector) {
    this.compareLength(vector);
    return new Vector(this.val.map((v, i) => v - vector.val[i]));
  }
  
  dot(vector) {
    this.compareLength(vector);
    return this.val.reduce((a, c, i) => a + c * vector.val[i], 0);
  }
  
  norm() {
    return Math.sqrt(this.val.reduce((a, c) => a + (c ** 2), 0));
  }
  
  equals(vector) {
    if (this.val.length !== vector.val.length) {
      return false;
    }
    
    let result = true;
    this.val.some((v, i) => {
      if (v !== vector.val[i]) {
        result = false;
      }
    });
    
    return result;
  }
  
  toString() {
    return `(${this.val.join(',')})`;
  }
};

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b);      // should return a new Vector([4, 6, 8])
//?
a.subtract(b); // should return a new Vector([-2, -2, -2])
//?
a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
//?
a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
//?
// a.add(c);      // throws an error
//?
a.toString();
//?
new Vector([1, 2, 3]).equals(new Vector([3, 4, 5]));
//?
// [ 1, 2, 3 ]
// Vector { val: [ 3, 4, 5 ] }
