// prize-draw
// Prize Draw
// https://www.codewars.com/kata/5616868c81a0f281e500005c/
// difficulty: 6kyu
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/prize-draw

const rank = (st, we, n) => {
  if (st.length === 0) {
    return 'No participants';
  }
  if (st.split(',').length < n) {
    return 'Not enough participants';
  }
  
  const names = st.split(',');
  const weightedNameList = names.map((name, i) => {
    return [
      names[i],
      (name.length + name.toLowerCase()
        .split('')
        .reduce((acc, cur) => acc + cur.charCodeAt(0) - 96, 0)) * we[i],
    ];
  });
  
  weightedNameList.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0].localeCompare(b[0]);
    }
    return b[1] - a[1];
  });
  
  return weightedNameList[n - 1][0];
};



console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4), "Benjamin");
console.log(rank("Lagon,Lily", [1, 5], 2), "Lagon");
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants");
console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants");
console.log(rank("Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden", [1, 3, 5, 5, 3, 6], 2));
