# https://www.codewars.com/kata/factorial-1/train/javascript

factorial = lambda n, sum=1: factorial(n - 1, sum * n) if n else sum

print(factorial(0), 1);
print(factorial(1), 1);
print(factorial(4), 24);
print(factorial(7), 5040);
print(factorial(17), 355687428096000);
