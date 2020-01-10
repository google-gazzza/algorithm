# https://www.codewars.com/kata/5809b62808ad92e31b000031
# it's motivated from best practice of javascript solution

calculate = lambda s: str(sum(map(int, s.replace('plus', ' ').replace('minus', ' -').split(' '))))

assert (calculate('1plus2plus3plus4') == '10')
assert (calculate('1minus2minus3minus4') == '-8')
assert (calculate('1plus2plus3minus4') == '2')


# // Best practice in codewars
# //
# // function calculate(str) {
# //   return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
# // }
