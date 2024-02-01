/**
 * @param {string} S
 * @return {string}
 */
//Runtime: 60 ms, faster than 70.70% of JavaScript online submissions for Remove Outermost Parentheses.
//Memory Usage: 36.4 MB, less than 33.33% of JavaScript online submissions for Remove Outermost Parentheses.
var removeOuterParentheses = function(S) {
    
    let splitparentheses = S.split(''),output= "",parent="",open=0,close=0;
    for(let i=0;i<splitparentheses.length;i++){
        let parentheses = splitparentheses[i];
        parent +=parentheses;
        if(parentheses === ')'){
            close+=1;
            if(open === 1 && close === 1){
                parent = '',open=0,close=0;
            }
            if(open > 1 && close > 1 && (open === close)){
                output += parent.substring(1,parent.length-1);
                parent = '',open=0,close=0;
            }
        }else{
            open +=1;
        }
    }
    return output;
};
