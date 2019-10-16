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
Files changed를 누르면, 수정한 파일의 diff에 대해서 나오는데(처음 생성하면 diff 자체가 파일의 내용이겠지만) 여기에서 각 줄에 커서를 가져가면, 제일 왼쪽에 +버튼이 생겨서 해당 줄에 커멘트를 남길 수 있다.
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

팀 repository가 아닌 도선님이 만드신 repository이기 때문에...ㅜㅜ
master로 온 PR 요청을 도선님이 수동으로(-_-) 머지해주신다.

## 최초 설정 이후의 문제 풀이 PR 과정

처음 Fork떴을 때야, 최신 시점이 master니까 상관은 없겠지만
Fork는 한번 뜰꺼고, 시간이 지나면서 도선님의 repository가 변경되고 있으니 이를 추적해야 함.
따라서, 자신이 그 날 문제를 풀고 커밋을 하기 전에
자신의 master 브랜치를 도선님 remote의 master 브랜치와 동일하게 유지시키고 작업을 시작.
master를 현재 시점으로 오게 한 이후에
자신 문제의 feature 브랜치를 master에서 딴다.
feature/koronya-177 요론식으로.
그리고, 이후의 과정은 최초 설정 & PR 과정과 동일하게 진행한다.

## Tips - gitkraken 사용

위에서의 모든 과정들은 터미널에서 git command를 이용해서도 되지만,
복잡하신 분들은 gitkraken 무료버전 받아서, 사용하시면 매우매우 편하게 할 수 있다.
gitkraken 설치하고, preference에서 github 계정 연동한 다음에
Fork따진 repository를 gitkraken으로 열기만 하면,
그 이후부터는 git command 1도 작성할 필요 없이 클릭 클릭으로 쉽게 잘 된다!
일단, 처음 설치하면, 저 아래의 화살표 부분이 Fetch가 아니라 pull로 되어 있을거니 Fetch All로 저 동작을 바꾸어놓고
![leetcode-guide-7](https://user-images.githubusercontent.com/26019796/66944572-f45dc200-f03c-11e9-89bd-9707ae5c229c.png)
Fetch 버튼 누르면, remote에 있는 모든 최신 내용이 반영이 된다.
그리고 master에서 feature 브랜치 따고 싶다. 그러면, 그냥 master 있는 저기에서 마우스 우클릭 하고 create branch here 누른 다음에 feature/koronya-169 하면, 바로 그 브랜치가 만들어지고, 다른 브랜치로 이동하려면, 그냥 브랜치 더블 클릭하면 이동된다. 머지, rebase도 그냥 쉽게 되는데 여기서는 쓸 일이 없을 것 같아서 설명은 생략.
그렇게 feature 브랜치 따고, 자신이 문제풀이한 내용 커밋한다음(그 커밋도 gitkraken의 저 오른쪽 화면에서 가능. 아니면 그냥 자신의 에디터에서 해도 되고)
Fetch옆의 Push버튼만 눌러주면, 자신이 Fork떠놓은 github의 leetcode repository에 작업 내용이 올라오게 된다.
그러면, 이제 github의 해당 repository에 가서 Pull Request 작업을 진행하면 된다.

