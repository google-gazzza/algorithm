/*문제 상세 URL(https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript#fn1)

로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다. 아래는 로또의 순위를 정하는 방식입니다.
로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 
하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다. 
당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.....


*/

function solution(lottos, win_nums) {
    let correct_num=0;
    let zero_count = lottos.filter(number=> number === 0).length; //알아볼수없는 숫자 갯수
    lottos.forEach((number,index)=>{//일치하는 숫자 개수
        if(win_nums.find((win_num)=> win_num === number)){
            correct_num++;
            
        }
    })
    let high_rank = (6-(correct_num+zero_count)) >= 5 ? 6 : 6-(correct_num+zero_count)+1; // 1개를 맞추든 0개를 맞추든 무조건 6등 처리
    let low_rank = (6-correct_num) >=5 ? 6 : (6-correct_num)+1;// 1개를 맞추든 0개를 맞추든 무조건 6등 처리
    return [high_rank,low_rank];
}
