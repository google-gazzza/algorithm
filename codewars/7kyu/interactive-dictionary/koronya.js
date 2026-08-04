// [JS][7kyu] Interactive Dictionary
// interactive-dictionary
// https://www.codewars.com/kata/57a93f93bb9944516d0000c1/train/javascript

class Dictionary {
  constructor() {
    this.map = new Map()
  }

  newEntry(key, value) {
    this.map.set(key, value)
  }

  look(key) {
    if (this.map.has(key)) {
      return this.map.get(key)
    }
    return `Can't find entry for ${key}`
  }
}

const d = new Dictionary()
d.newEntry('Apple', 'A fruit')
d.newEntry('Soccer', 'A sport')

d.look('Hi')
d.look('Ball')

d.look('soccer')
d.newEntry('soccer', 'a sport')
d.look('soccer')

