// [JS][6kyu] PatternCraft - State
// pattern-craft-state
// https://www.codewars.com/kata/5682e72eb7354b2f39000021/train/javascript

class SiegeState {
  constructor() {
    this.canMove = false
    this.damage = 20
  }
}

class TankState {
  constructor() {
    this.canMove = true
    this.damage = 5
  }
}

class Tank {
  constructor() {
    this.state = new TankState()
  }

  get canMove() {
    return this.state.canMove
  }
  get damage() {
    return this.state.damage
  }
}

const tank = new Tank()
tank.canMove
tank.damage

const tank2 = new Tank()
tank2.state = new SiegeState()
tank2.canMove
tank2.damage

const tank3 = new Tank()
tank3.canMove
tank3.state = new SiegeState()
tank3.damage
