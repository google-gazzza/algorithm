function solution(numbers, k) {
    let pitcher  = 1;
    for(let i=0;i<k;i++){
        pitcher = ((2*i) + 1) % numbers.length;
        
    }
    return pitcher;
}