// [JS][7kyu] You're not my type
// you-re-not-my-type
// https://www.codewars.com/kata/57157a7c2ad76331360002d0/train/javascript

Object.defineProperty(Array.prototype, 'ofType', {
  value: function ofType(type) {
    return this.filter((item) => {
      if (type === Number) return typeof item === 'number'
      if (type === String) return typeof item === 'string'
      if (type === Boolean) return typeof item === 'boolean'
      return item instanceof type
    })
  },
})
