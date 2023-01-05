/*문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/150370*/
function solution(today, terms, privacies) {
    const answer = [];
    for(let i=0;i<privacies.length;i++){
        const [privacyDay,privacyTerm] = privacies[i].split(' ');
        const [term,termMonth] = terms.filter(t=> t.split(' ')[0] === privacyTerm)[0].split(' ');
        let [year,month,date] = privacyDay.split('.');
        month = parseInt(month) + parseInt(termMonth);
        year = parseInt(year) + (month > 12 ? parseInt(month / 12) : 0);
        
        
        month = month < 13 ? month : parseInt(month % 12);
        
        date = parseInt(date)-1;
        
        if(date < 1){
            date = 28;
            month -= 1;
            
        }
        if(month < 1){
            month = 12;
            year -= 1;
        }
        if(new Date(today) > new Date(`${year}.${month<10 ? '0':''}${month}.${date<10 ? '0':''}${date}`)){
            answer.push(i+1);
        }
    }
    return answer;
}