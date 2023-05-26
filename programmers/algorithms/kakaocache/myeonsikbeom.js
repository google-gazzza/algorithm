/*문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/17680*/
function solution(cacheSize, cities) {
    if(cacheSize === 0 ){ //캐시가 없는 경우,
        return cities.length * 5;
    }
    let time = 0;
    const caches=[];
    for(let i=0;i<cities.length;i++){
        if(caches.size === 0){ //빈캐시는 push
            caches.push(cities);
            time+=5;
        }else{ //캐시 hit ,miss 확인
            let findIndex = caches.findIndex(cache=> cache.toLowerCase() === cities[i].toLowerCase());
            if(findIndex > -1){//hit
                time += 1;
                caches.splice(findIndex,1);//hit한 캐시는 제거
                caches.unshift(cities[i]);//제일 최근에 참조했으니 unshift
            }else{
                if(caches.length === cacheSize){ //캐시가 가득찼을 경우 
                    caches.pop();
                }
                caches.unshift(cities[i]);
                time += 5;
            }
        }
    }
    return time;
}