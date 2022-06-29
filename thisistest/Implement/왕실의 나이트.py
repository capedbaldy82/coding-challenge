def solution(n):
    answer = 0
    coordi = [0,0]
    dx = [-2,-1,1,2,2,-1,1,-2]
    dy = [1,2,2,1,-1,-2,-2,-1]
    alpha = ['a','b','c','d','e','f','g','h']

    for i in range(8):
        if n[0] == alpha[i]:
            coordi[0] = i+1
            coordi[1] = int(n[1])
    
    for i in range(8):
        nx = coordi[0] + dx[i]
        ny = coordi[1] + dy[i]
        if nx > 0 and ny > 0 and nx <= 8 and ny <= 8:
            answer += 1

    return answer

print(solution('d3'))