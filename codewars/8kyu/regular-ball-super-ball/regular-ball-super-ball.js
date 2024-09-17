// regular-ball-super-ball
// Regular Ball Super Ball
// difficulty: 8kyu
// https://www.codewars.com/kata/53f0f358b9cb376eca001079

class Ball {
  constructor(type = 'regular') {
    this.ballType = type;
  }
}


ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType;
//?
//=> "regular"
ball2.ballType;
//?
//=> "super"
