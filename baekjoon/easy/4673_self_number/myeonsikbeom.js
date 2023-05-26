const dnArr = [] //셀프넘버가 아닌 숫자를 담은 배열 목록

//양의 정수 n에 대해서  n과 n의 각 자리수를 더하는 함수
const dn = (n) =>
  n +
  String(n)
    .split('')
    .reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0)
for (let i = 1; i <= 10000; i++) {
  dnArr.push(dn(i)) //i와 i의 각 자리수를 더하는값을 배열에 담는다.(즉, 해당 숫자는 )
  const isNotSelfNumber = dnArr.find((d) => d === i) //i가 i의 각 자리수를 더하여 만들어질 수 없는 숫자인지 확인하는 배열
  if (!isNotSelfNumber) {
    //생성자가 없는 숫자는 console 출력!
    console.log(i)
  }
}
