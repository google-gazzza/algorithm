
* [README.md](../README.md)

# github를 이용한 leetcode 문제 풀이 process 정리

## 문제 풀이 순서

자신이 풀고 싶은 문제를 고른다.  
문제 번호와 문제 이름을 포함해서 폴더를 하나 만든다.  
ex> 70_climbing_stairs  
leetcode가 아닌 다른 곳의 문제인 경우, 다르게 생성  
ex> codewars_sum_of_odd_numbers,  codility_blah_blah  
자신의 github ID나 닉넴 등 자신을 나타낼 수 있는 이름으로 파일을 만든다.  
ex> dosun.py,     koronya.js,    etcetc.cpp,   blahblah~~~  
단, 이미 다른 사람이 해당 문제를 풀어서 폴더가 만들어져 있으면, 그 폴더 안에 자신의 파일만 추가 생성한다.  
문제를 풀이하되,  
파일의 제일 위 주석에 아래와 같이 문제의 URL, 해당 풀이가 걸린 시간, 메모리에 대해서 leetcode가 보여주는 결과를 붙여넣기 한다.  


```
// https://leetcode.com/problems/climbing-stairs/
// Runtime: 72 ms, faster than 31.65% of JavaScript online submissions for Majority Element
// Memory Usage: 37.5 MB, less than 57.14% of JavaScript online submissions for Majority Element
```

## 최초 설정 & PR 과정

일단, github 계정 만들기(기존 계정 사용해도 되고, 새로 파셔도 되고)  
[https://github.com/googler-gazzzza/leetcode](https://github.com/googler-gazzzza/leetcode) 주소로 들어가서 Fork를 눌러서 자신의 계정에 해당 repository를 Fork 뜨기  
문제를 풀기 전에, 자신의 id/닉네임을 딴 feature 브랜치를 만들기.  
ex> feature/koronya-70  
자신이 푼 문제를 일단 자신의 로컬에 commit 하고, 자시닝 Fork떠놓은 자신의 repository까지 push하기  
github에서 자신의 repository에 들어와서 Pull request 메뉴에 들어가서, New pull request를 누르면,   
![leetcode-guide-1](https://user-images.githubusercontent.com/26019796/66944553-ec9e1d80-f03c-11e9-9383-7413f1c7b5b1.png)  

오른쪽의 respository에 자신의 repository / 오른쪽의 compare: 에 위에서 만든 feature 브랜치  
왼쪽의 repository에 googler-gazzzza/leetcode / 왼쪽의 base: 에 master를 선택하고  
Create pull request를 누르면, PR 생성!  

## 리뷰 단계

[https://github.com/googler-gazzzza/leetcode/pulls](https://github.com/googler-gazzzza/leetcode/pulls)
여기에서 현재 올라와있는 PR들을 볼 수 있다.  
그리고, 이미 머지가 되었다고 하더라도,   
![leetcode-guide-2](https://user-images.githubusercontent.com/26019796/66944560-ef007780-f03c-11e9-97a4-202e07670e0f.png)
위 그림처럼 Closed 버튼을 누르면, 이미 머지된 파일들도 다 볼 수 있고, 그거에 대한 코드 리뷰도 진행할 수 있다.  
리뷰를 하기 위해서는 Open되었거나 Closes되었거나 상관없이 PR 올라온 건에 대해서 클릭을 하면  
해당 커밋 내역이 나온다.  
Files changed를 누르면, 수정한 파일의 diff에 대해서 나오는데(처음 생성하면 diff 자체가 파일의 내용이겠지만)  
여기에서 각 줄에 커서를 가져가면, 제일 왼쪽에 +버튼이 생겨서 해당 줄에 커멘트를 남길 수 있다.  
그 나오는 +버튼을 누른 상태로 위/아래로 끌면 여러 줄에 대한 커멘트도 남길 수 있다.  
![leetcode-guide-3](https://user-images.githubusercontent.com/26019796/66944562-f031a480-f03c-11e9-8731-e58b5e10dc59.png)
커멘트들을 남기고, Finish your review 버튼을 눌러야 커멘트가 올라오고, 그 전까지는 pending 상태이다.  
![leetcode-guide-4](https://user-images.githubusercontent.com/26019796/66944564-f0ca3b00-f03c-11e9-8bbd-afa77a63a5c5.png)
![leetcode-guide-5](https://user-images.githubusercontent.com/26019796/66944571-f3c52b80-f03c-11e9-9777-aa4fa5a4dc4e.png)
위 처럼 Finish your review 버튼을 누르고 아래에 간단히 메시지를 작성한 다음에  
Submit review를 누르면 리뷰 작성 완료!  
위 처럼 리뷰를 작성하면, 해당 PR을 눌렀을 때에 리뷰가 보이게 되고, 아래 처럼 해당 리뷰의 reply에 각종 답변도 가능하다.  
![leetcode-guide-6](https://user-images.githubusercontent.com/26019796/66944569-f32c9500-f03c-11e9-9b80-ed63d7796d7b.png)

## Master에 머지

googler-gazzzza는 팀 repository로, 관리자 계정을 가지고 있는 사람들은 머지 권한이 있다.  
PR로 올라온 것들에 대해서, 머지를 할 수 있다.  
누군가의 PR이 올라오면, 관리자 계정을 가진 누구나라도,  
조금의 코드를 보고 머지를 눌러주자.(실무에서는 안 이러겠지만 여기서는 편의를 위해 -_-)  
리뷰는 머지 하고 나서도, 가능하고, 머지 전에도 가능하다.  


## 최초 설정 이후의 문제 풀이 PR 과정  

처음 Fork떴을 때야, 최신 시점이 master니까 상관은 없겠지만  
Fork는 한번 뜰꺼고, 시간이 지나면서 팀의 repository가 변경되고 있으니 이를 추적해야 함.  
따라서, 자신이 그 날 문제를 풀고 커밋을 하기 전에  
자신의 master 브랜치를 팀 remote의 master 브랜치와 동일하게 유지시키고 작업을 시작.  
master를 현재 시점으로 오게 한 이후에  
자신 문제의 feature 브랜치를 master에서 딴다.  
feature/koronya-177 요론식으로.  
그리고, 이후의 과정은 최초 설정 & PR 과정과 동일하게 진행한다.  


## 문제 풀이 이후, 카톡으로 공유

위의 과정을 통해서 PR을 보냈으면, 카카오톡에  
문제의 URL과, PR의 URL을 같이 보내서 문제 풀었다 라는 것을 알리자!  


## 잡다구리 정리

### 특정 repository에서 내 자신의 repository로 Fork 따기!

보통, 오픈소스 작업을 할 때, 해당 repository에 직접 push를 하기보다는(전혀 모르는 사람한테 권한을 줄리가 없음)  
해당 repository를 자신의 repository에 그대로 복사한 후에(이를 Fork 딴다고 함)  
내 자신의 repository에서 뭔가 작업을 하고, 로컬에서 커밋 & 내 repository에 push를 한 다음에  
해당 repository에 PR을 날린다.
내가 이 작업 했으니, 너의 repository에 합쳐줘~, 땡겨줘~  
그래서 Pull Request  
그럼 어떻게 Fork를 따느냐...  
그냥, 따고자 하는 repository에 들어가서  
지금 우리 같은 경우는 https://github.com/googler-gazzzza/leetcode 에 들어가서
제일 오른쪽에 있는 Fork를 누르면 된다!
![2019-10-19 at 12 32 AM](https://user-images.githubusercontent.com/26019796/67107768-9bb53300-f1bc-11e9-9c7d-3e756397c42a.png)


### 내가 Fork한 repository를 원본 repository와 동기화 시키기
원본 repository가 업데이트 되었다고, 내가 Fork한 repository가 자동으로 업데이트 되지는 않는다.
master 브랜치 기준으로 이를 동기화 시키기 위한 방법을 알아보면
먼저, 자신의 repository에 가서 아래 그림 처럼 Pull Request 메뉴를 누른다.
![](https://user-images.githubusercontent.com/26019796/67108003-0ebea980-f1bd-11e9-88f4-9e62d70e7166.png)
![](https://user-images.githubusercontent.com/26019796/67108333-d1a6e700-f1bd-11e9-9637-d3d5a5b5ebdf.png)
![](https://user-images.githubusercontent.com/26019796/67108374-eaaf9800-f1bd-11e9-927a-1dc1b76a318b.png)
![](https://user-images.githubusercontent.com/26019796/67108615-6c9fc100-f1be-11e9-9643-4ebf1e57e2b6.png)

위 그림의 순서를 거치면, 원본 repository의 master가 내가 Fork한 repository의 master와 동기화가 된다!
이제, 로컬에서의 master를 이 master와 맞춰주고, 여기에서 feature를 따서 작업하고
원본 repository에 PR을 날리면 된다!


## Tips - gitkraken 사용  

위에서의 모든 과정들은 터미널에서 git command를 이용해서도 되지만,  
복잡하신 분들은 gitkraken 무료버전 받아서, 사용하시면 매우매우 편하게 할 수 있다.  
gitkraken 설치하고, preference에서 github 계정 연동한 다음에  
Fork따진 repository를 gitkraken으로 열기만 하면,  
그 이후부터는 git command 1도 작성할 필요 없이 클릭 클릭으로 쉽게 잘 된다!  
일단, 처음 설치하면, 저 아래의 화살표 부분이 Fetch가 아니라 pull로 되어 있을거니 Fetch All로 저 동작을 바꾸어놓고  
![leetcode-guide-7](https://user-images.githubusercontent.com/26019796/66944572-f45dc200-f03c-11e9-89bd-9707ae5c229c.png)
Fetch 버튼 누르면, remote에 있는 모든 최신 내용이 반영이 된다.  
그리고 master에서 feature 브랜치 따고 싶다.  
그러면, 그냥 master 있는 저기에서 마우스 우클릭 하고 create branch here 누른 다음에 feature/koronya-169 하면, 바로 그 브랜치가 만들어지고,  
다른 브랜치로 이동하려면, 그냥 브랜치 더블 클릭하면 이동된다.  
머지, rebase도 그냥 쉽게 되는데 여기서는 쓸 일이 없을 것 같아서 설명은 생략.  
그렇게 feature 브랜치 따고, 자신이 문제풀이한 내용 커밋한 다음(그 커밋도 gitkraken의 저 오른쪽 화면에서 가능. 아니면 그냥 자신의 에디터에서 해도 되고)  
Fetch옆의 Push버튼만 눌러주면, 자신이 Fork떠놓은 github의 leetcode repository에 작업 내용이 올라오게 된다.  
그러면, 이제 github의 해당 repository에 가서 Pull Request 작업을 진행하면 된다.  

