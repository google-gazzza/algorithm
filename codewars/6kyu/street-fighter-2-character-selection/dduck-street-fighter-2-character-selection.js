// street-fighter-2-character-selection
// Street Fighter 2 - Character Selection
// difficulty: 6kyu
// https://www.codewars.com/kata/5853213063adbd1b9b0000be/

const streetFighterSelection = (fighters, position, moves, result = []) => {
  if (moves.length === 0) {
    return result;
  }
  
  if (moves[0] === 'up') {
    position[1] = Math.max((position[1] - 1), 0);
  }
  if (moves[0] === 'down') {
    position[1] = Math.min(position[1] + 1, fighters.length - 1);
  }
  if (moves[0] === 'left') {
    position[0] = (position[0] - 1 + fighters[0].length) % fighters[0].length;
  }
  if (moves[0] === 'right') {
    position[0] = (position[0] + 1) % fighters[0].length;
  }
  result.push(fighters[position[1]][position[0]]);
  
  return streetFighterSelection(fighters, position, moves.slice(1), result);
};



fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

moves = ['up', 'left', 'right', 'left', 'left'];
console.log(streetFighterSelection(fighters, [0, 0], moves), ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);
