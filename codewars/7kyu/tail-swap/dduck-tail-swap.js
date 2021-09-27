// https://www.codewars.com/kata/tail-swap

const tailSwap = (arr) => [`${arr[0].split(':')[0]}:${arr[1].split(':')[1]}`,
  `${arr[1].split(':')[0]}:${arr[0].split(':')[1]}`];

tailSwap(['abc:123', 'cde:456']);
//?
//, ['abc:456', 'cde:123']);
tailSwap(['a:12345', '777:xyz']);
//?
//, ['a:xyz', '777:12345']);
