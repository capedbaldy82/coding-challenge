def setting(data):
    return data[1]

def solution(scores):
    for i in range(len(scores)):
        scores[i] = scores[i].split(' ')

    return sorted(scores, key=lambda student:student[1])

print(solution(['홍길동 96', '이순신 77']))