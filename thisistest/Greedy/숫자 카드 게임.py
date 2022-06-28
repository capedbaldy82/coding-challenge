def solution(size, numbers):
    answer = 0
    temp = []

    for i in range(size[1]):
        temp.append(min(numbers[i]))

    answer = max(temp)

    return answer

print(solution([3, 3], [[3, 1, 2], [4, 1, 4], [3, 3, 3]]))