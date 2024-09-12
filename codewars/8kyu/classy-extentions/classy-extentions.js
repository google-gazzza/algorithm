/*
classy-extentions

# codewars/8kyu/Classy Extentions
difficulty: 8kyu
URL: https://www.codewars.com/kata/55a14aa4817efe41c20000b
tags: template-literals, class,

## Approach

### en
1.create speak method in Cat class
2.return this.name + 'meows.' string through template-literals

### kr
1. Cat class 안에 speak메소드를 만듭니다
2.this.name + 'meows.' 스트링을 template-literals를 통해 반환합니다.

## solution

*/

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}
