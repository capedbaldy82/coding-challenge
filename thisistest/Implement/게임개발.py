def solution(size, character, map):
    answer = 0
    temp = []
    dx = [-1,0,1,0]
    dy = [0,1,0,-1]

    def DFS(x,y):
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx >= 0 and ny >= 0 and nx < size[0] and ny < size[1] and map[nx][ny] != 1:
                map[nx][ny] = 1
                temp.append(1)
                DFS(nx, ny)

    DFS(1,1)

    answer = len(temp)

    return answer

print(solution([4,4], [1,1,0], [[1,1,1,1],[1,0,0,1],[1,1,0,1],[1,1,1,1]]))