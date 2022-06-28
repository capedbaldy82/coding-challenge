import math

def solution(money):
    answer = 0
    coins = [500,100,50,10]

    for coin in coins:
        answer += money // coin
        money = money % coin


    return answer

print(solution(1280))