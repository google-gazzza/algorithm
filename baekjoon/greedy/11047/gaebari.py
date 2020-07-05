# https://www.acmicpc.net/problem/11047
# 메모리       시간
# 29380KB     64ms
input_data = input().split(' ')
coinNumber = int(input_data[0])
targetMoney = int(input_data[1])
coins = [int(input()) for i in range(coinNumber)]

result = 0
idx = 0
count = 0
quotient = 0
while targetMoney > 0:
    if targetMoney <= 0:
        break
    quotient = targetMoney // coins[-(idx + 1)]
    targetMoney %= coins[-(idx + 1)]
    idx += 1
    count += quotient

print(count)



