// [JS][6kyu] The Lamp: Revisited
// the-lamp-revisited
// https://www.codewars.com/kata/570e6e32de4dc8a8340016dd/train/javascript

class Lamp {
  constructor(color, on = false) {
    this.color = color
    this.on = false
  }

  toggleSwitch() {
    this.on = !this.on
  }

  state() {
    return `The lamp is ${this.on ? 'on' : 'off'}.`
  }
}
