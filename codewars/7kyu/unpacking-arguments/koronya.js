// [JS][7kyu] Unpacking Arguments
// unpacking-arguments
// https://www.codewars.com/kata/540de1f0716ab384b4000828/train/javascript

function spread(func, args) {
  return func(...args)
}

spread(someFunction, [1, true, 'Foo', 'bar'])
// prettier-ignore
spread(function(x, y) { return x + y; }, [1, 2])
