def solution(rule, numbers):
    answer=0
    count=0

    numbers.sort(reverse=True)

    for i in range(0,8):
        if count < rule[2]:
            answer += numbers[0]
            count += 1
        else:
            answer += numbers[1]
            count=0

    return answer


def solution2(rule, numbers):
    numbers.sort(reverse=True)
    
    return (numbers[0] * rule[2] + numbers[1]) * (rule[1] // (rule[2]+1)) + numbers[0] * (rule[1] % (rule[2]+1))

print(solution2([5,8,3],[2,4,5,4,6]))