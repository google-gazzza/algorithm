/*행렬의 덧셈을 같은행과 같은 열을 더하면 됨.
즉 2차원 배열을 O(n^2)를 돌면서 더하는 행위를 반복.
*/

function solution(arr1, arr2) {
    var answer = [[]];
    return arr1.map((row,idx)=>{ 
        return row.map((num,idx2)=>{
            return num+arr2[idx][idx2];
        })
    });
}
