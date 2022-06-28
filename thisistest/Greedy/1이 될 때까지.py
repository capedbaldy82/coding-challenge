def solution(n, m):
    answer = 0

    while n > 1:
        if n % m == 0:
            n = n / m
            answer += 1
        else:
            n = n - 1
            answer += 1

    return answer

print(solution(17,4))