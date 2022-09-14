/**문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/82612 */
/** 본인이 푼 문제 */
function solution(price, money, count) {
    const totalPrice = new Array(count).fill(price).map((_price,i)=> _price * (i+1))
    .reduce((prev,curr)=>prev+curr);
    
    return money-totalPrice < 0 ? Math.abs(money-totalPrice) : 0;
}
