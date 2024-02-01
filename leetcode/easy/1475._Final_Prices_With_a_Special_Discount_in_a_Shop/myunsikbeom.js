/**
 * @param {number[]} prices
 * @return {number[]}
 */
//Runtime: 76 ms, faster than 82.55% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
//Memory Usage: 37.4 MB, less than 100.00% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
var finalPrices = function(prices) {
    let result = [];
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            if(prices[i]>=prices[j]){
                result.push(Math.abs(prices[i]-prices[j]));
                break;
            }
            if(j===prices.length-1 && prices[i]<prices[j]){
                result.push(prices[i]);
            }
        }    
        if(i===prices.length-1){
            result.push(prices[i]);
        }
    }
    return result;
};
