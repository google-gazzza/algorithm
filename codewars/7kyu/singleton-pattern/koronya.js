// [js][7kyu] Singleton Pattern
// singleton-pattern
// https://www.codewars.com/kata/534fcca5edb124cfe6000f60/train/javascript

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance
    }
    Singleton.instance = this

    return this
  }
}

const [obj1, obj2] = [new Singleton(), new Singleton()]
obj1 instanceof Singleton // => true
obj1 === obj2 // => true
obj1.test = 1
obj2.test // => 1
