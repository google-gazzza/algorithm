# https://www.codewars.com/kata/542c0f198e077084c0000c2e/

from unittest import TestCase


# For Beginners.

# Time: 11724ms
# it's slow because use isinstance
def divisors5(n):
    return len(list(filter(lambda e: isinstance(e, int), [x if n % x == 0 else None for x in range(1, n + 1)])))


# Time: 7546ms
# it's little fast because just directly check boolean
def divisors4(n):
    return len(list(filter(lambda e: e, [True if n % x == 0 else False for x in range(1, n + 1)])))


# Time: 4731ms
# in python True is evaluate as 1
# so when prime factorization just set True and sum will return count
def divisors3(n):
    return sum([True if n % x == 0 else False for x in range(1, n + 1)])


# Time: 3675ms
# even don't need return true, cause comparison operator will return boolean
def divisors2(n):
    return sum([n % x == 0 for x in range(1, n + 1)])


# same time with above but make short code via lambda expression
divisors = lambda n: sum([n % x == 0 for x in range(1, n + 1)])


TestCase().assertEqual(divisors(4), 3)
TestCase().assertEqual(divisors(5), 2)
TestCase().assertEqual(divisors(12), 6)
TestCase().assertEqual(divisors(30), 8)
TestCase().assertEqual(divisors(4096), 13)

# // for iterator solution
# // simple, fast
# // but not pretty, and spend lots of memory
# const getDivisorsCnt = (n) => {
#   let count = 0;
#   for (let i = 1; i <= n; i += 1) {
#     if (n % i === 0) {
#       count += 1;
#     }
#   }
#   return count;
# };
#
#
# // recursive solution
# // it will spend space complexity 1 (memory optimized)
# // but JavaScript compiler does not tail recursion optimized.
# // so will get maximum call stack error
# const getDivisorsCntRecursive = (n, step = n, count = 0) => {
#   if (step < 1) {
#     return count;
#   }
#   return getDivisorsCntRecursive(n, step - 1, n % step === 0 ? count + 1 : count);
# };
#
#
# // Array init solution.
# // it will spend a lot of memory.
# const getDivisorsCntArray = (n) => new Array(n).fill(0)
#   .map((v, i) => ((n % (i + 1)) === 0 ? i + 1 : false))
#   .filter((v) => v).length;
#
#
# console.log(getDivisorsCnt(1), 1);
# console.log(getDivisorsCnt(10), 4);
# console.log(getDivisorsCnt(11), 2);
# console.log(getDivisorsCnt(54), 8);
