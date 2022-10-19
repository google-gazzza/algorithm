/**
 * @param {number} num
 * @return {string}
 Runtime: 202 ms, faster than 70.56% of JavaScript online submissions for Integer to Roman.
Memory Usage: 47.8 MB, less than 58.86% of JavaScript online submissions for Integer to Roman.

 */
var intToRoman = function(num) {
    const divisors=[1000,100,10,1];
    let result = '';
    for(let i=0;i<divisors.length;i++){
        const divisor = divisors[i];
        const quot = Math.floor(num / divisor,0);
        let divide = divisor * quot;
        let roman = '';
        if(quot !== 0){
            switch(divisor){
               case 1000:
                roman = 'M'.repeat(quot);
                break;
               case 100:
                    if(divide === 900){
                        roman = 'CM';
                    }else if(divide >= 500 && divide < 900 ){
                        roman = `D${'C'.repeat((divide-500) / divisor )}`;
                    }else if(divide === 400 ){
                        roman = `CD`;
                    }else {
                        roman = 'C'.repeat(quot);
                    }
                break;
                case 10:
                    if(divide === 90){
                        roman = 'XC';
                    }else if(divide >= 50 && divide < 90 ){
                        roman = `L${'X'.repeat((divide-50) / divisor )}`;
                    }else if(divide === 40 ){
                        roman = `XL`;
                    }else {
                        roman = 'X'.repeat(quot);
                    }
                break;
                case 1:
                    if(divide === 9){
                        roman = 'IX';
                    }else if(divide >= 5 && divide < 9 ){
                        roman = `V${'I'.repeat(divide-5)}`;
                    }else if(divide === 4 ){
                        roman = `IV`;
                    }else {
                        roman = 'I'.repeat(quot);
                    }
                break;
            }
        }
        result += roman;
        num -= divide;
    }
    return result;
};