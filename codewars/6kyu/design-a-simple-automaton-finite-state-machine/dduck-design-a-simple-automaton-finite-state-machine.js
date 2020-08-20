// design-a-simple automaton-finite-state-machine
// Design a Simple Automaton (Finite State Machine)
// difficulty: 6kyu
// https://www.codewars.com/kata/5268acac0d3f019add000203/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/design-a-simple-automaton-finite-state-machine

function Automaton() {
  this.stateMap = {
    '0': {
      '0': '0',
      '1': '1',
    },
    '1': {
      '0': '2',
      '1': '1',
    },
    '2': {
      '1': '1',
      '0': '1',
    }
  };
}

Automaton.prototype.readCommands = function (commands, state = '0', acceptState = '1') {
  if (commands.length === 0) {
    return acceptState === state;
  }
  
  return this.readCommands(commands.slice(1), this.stateMap[state][commands.shift()], acceptState);
};

var myAutomaton = new Automaton();



console.log(myAutomaton.readCommands(['1']), true);
console.log(myAutomaton.readCommands(['1', '0', '0', '1']), true);
