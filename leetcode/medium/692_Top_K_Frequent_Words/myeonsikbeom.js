/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 Runtime: 155 ms, faster than 22.57% of JavaScript online submissions for Top K Frequent Words.
Memory Usage: 48.1 MB, less than 17.81% of JavaScript online submissions for Top K Frequent Words.

 */
var topKFrequent = function(words, k) {
    const wordMap = new Map();
    for(let i=0;i<words.length;i++){
        const word = words[i];
        if(!wordMap.has(word)){
            wordMap.set(word,1);    
        }else{
            wordMap.set(word,Number(wordMap.get(word)) + 1);
        }
        
    }
    
    return Array.from(wordMap, ([name, value]) => ({ name, value })).sort((a,b)=>{
        if(a['value']  > b['value']){
            return -1;
        }else if(a['value']  < b['value']){
            return 1;
        }else{
           return a['name'].localeCompare(b['name']);
        }
    }).slice(0,k).map(({name,value})=> name);
};