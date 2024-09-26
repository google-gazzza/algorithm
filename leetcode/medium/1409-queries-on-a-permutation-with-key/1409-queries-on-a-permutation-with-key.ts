/*
1409-queries-on-a-permutation-with-key
leetcode/medium/1409. Queries on a Permutation With Key
Difficulty: medium
URL: https://leetcode.com/problems/queries-on-a-permutation-with-key/
 */

function processQueries(queries: number[], m: number): number[] {
    let sequence = [];
  
    for (let i = 0; i < m; i += 1) {
      sequence.push(i + 1);
    }
  
    let result = [];
  
    for (let query of queries) {
      const index = sequence.indexOf(query);
      result.push(index);
      sequence.splice(index, 1);
      sequence.unshift(query);
    }
  
    return result;
  }
  
  
  let queries = [3, 1, 2, 1];
  let m = 5;
  console.log(processQueries(queries, m));
  