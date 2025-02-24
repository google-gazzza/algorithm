// [JS][7kyu] FIXME: Get Full Name
// fixme-get-full-name
// https://www.codewars.com/kata/597c684822bc9388f600010f/train/javascript

class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName() {
    return this.firstName && this.lastName ? `${this.firstName} ${this.lastName}` : this.firstName || this.lastName
  }
}

const clint = new Dinglemouse('Clint', 'Eastwood')
clint.getFullName() === 'Clint Eastwood'
