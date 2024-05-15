// 311-sparse-matrix-multiplication
// URL: https://leetcode.com/problems/sparse-matrix-multiplication/description/?envType=study-plan-v2&envId=premium-algo-100

function multiply(mat1: number[][], mat2: number[][]): number[][] {
    const result = [];
  
    for (let i = 0; i < mat1.length; i++) {
      result[i] = [];
  
      for (let j = 0; j < mat2[0].length; j++) {
        let sum = 0;
  
        for (let k = 0; k < mat2.length; k++) {
          sum += mat1[i][k] * mat2[k][j];
        }
  
        result[i].push(sum);
      }
    }
  
    return result;
  };
  
  
  