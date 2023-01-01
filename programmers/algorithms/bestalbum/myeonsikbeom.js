/*문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/42579?language=javascript*/
function solution(genres, plays) {
    let answer = [];
    const genreObj = {};
    const genreSumObj = {};
    const genreSumArr=[];
    for(let i=0;i<genres.length;i++){
        if(!genreObj[genres[i]]){
            genreObj[genres[i]]=[];
        }
        genreObj[genres[i]].push(plays[i])
            
    };
    
    for(const genre in genreObj){
        genreObj[genre].sort((a,b)=>b-a);
        const totalPlay = [...genreObj[genre]].reduce((a,b)=>a+b,0);
        genreSumObj[genre]=totalPlay
        genreSumArr.push(totalPlay);
    
        const[first,second] = genreObj[genre];
        const firstIdx = plays.findIndex((play,i)=> play === first && genre === genres[i] );
        genreObj[genre] = [firstIdx];
        if(second){
            genreObj[genre].push(plays.findIndex((play,i)=> play === second && genre === genres[i] && firstIdx !== i ));    
        }
        
    }
    
    genreSumArr.sort((a,b)=>b-a);
    genreSumArr.forEach(sum=>{
        for(const genre in genreSumObj){
            if(genreSumObj[genre] === sum){
                answer = answer.concat(genreObj[genre])
            }        
        }
    })
    
    return answer;
}