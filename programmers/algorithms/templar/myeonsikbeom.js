/*문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/136798*/
function solution(number, limit, power) {
    const weaponArr=[];
  const yaksu = n=>{
      let end = parseInt(n/2);
      const result = [];
      if(n===1) return [1];
      for(let i=1;i<=end;i++){
          if(n%i === 0){
              result.push(i);
          }
      }
      result.push(n);
      return result;
  }
  for(let i=1;i<=number;i++){
      weaponArr.push(yaksu(i).length);

  }
  return weaponArr.map(weapon=>weapon > limit ? power : weapon).reduce((a,b)=>a+b);
}