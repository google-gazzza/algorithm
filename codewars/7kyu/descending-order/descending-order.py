# https://www.codewars.com/kata/5467e4d82edf8bbf40000155

descending_order = lambda n: int("".join([str(num) for num in sorted([int(x) for x in list(str(n))], reverse=True)]))
# => parseInt(`${n}`.split('').map(Number).sort().reverse().join(''), 10);

print(descending_order(12335))
# , 987654321
