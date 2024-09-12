// leetcode/easy/2833. Furthest Point From Origin
// 2833-furthest-point-from-origin
// URL: https://leetcode.com/problems/furthest-point-from-origin/description/


function furthestDistanceFromOrigin(moves: string): number {
  const map = {};
  map["_"] = 0;
  map["L"] = 0;
  map["R"] = 0;

  for (let i = 0; i < moves.length; i += 1) {
    const move = moves[i];
    map[move] = (map[move] || 0) + 1;
  }

  return Math.abs(map["L"] - map["R"]) + map["_"];
};

let moves = "L_RL__R";
console.log(furthestDistanceFromOrigin(moves));
// Output: 3
moves = "_R__LL_";
console.log(furthestDistanceFromOrigin(moves));
// Output: 5
moves = "_______";
console.log(furthestDistanceFromOrigin(moves));
// Output: 7
