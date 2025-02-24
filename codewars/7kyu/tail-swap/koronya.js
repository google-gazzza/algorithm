// [JS][7kyu] Tail Swap
// tail-swap
// https://www.codewars.com/kata/5868812b15f0057e05000001/train/javascript

const tailSwap = (arr) => {
  const [head1, tail1] = arr[0].split(':')
  const [head2, tail2] = arr[1].split(':')
  return [`${head1}:${tail2}`, `${head2}:${tail1}`]
}

tailSwap(['abc:123', 'cde:456'])
tailSwap(['a:12345', '777:xyz'])
