// [JS][7kyu] Simple elevator
// simple-elevator
// https://www.codewars.com/kata/52ed326b8df6540e06000029/train/javascript

const goto = (level, button) => {
  if (typeof level !== 'number' || typeof button !== 'string') {
    return 0
  }
  const buttonNumber = Number(button)
  if (buttonNumber < 0 || buttonNumber > 3 || level < 0 || level > 3 || level % 1 !== 0) {
    return 0
  }

  return buttonNumber - level
}

goto(1.5, '3')
goto(4, '2')
goto(0, '2') === 2
3 + goto(3, '1') === 1
2 + goto(2, '2') === 2
