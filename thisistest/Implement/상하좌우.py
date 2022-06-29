def solution(n, keydown):
    answer = [1,1]
    dx = [-1,0,1,0]
    dy = [0,1,0,-1]
    move = ['U','R','D','L']

    for key in keydown:
        for i in range(len(move)):
            if key == move[i]:
                nx = answer[0] + dx[i]
                ny = answer[1] + dy[i]
                break
        
        if nx > 0 and ny > 0 and nx <= n and ny <= n:
            answer[0] = nx
            answer[1] = ny

    return answer

print(solution(5, ['R','R','R','U','D','D']))