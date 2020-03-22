// https://www.codewars.com/kata/53d628de83db278fb1000710

String.prototype.myNewMethod = function () {
  return this.toString().toUpperCase();
};

"abc".myNewMethod();
//?
