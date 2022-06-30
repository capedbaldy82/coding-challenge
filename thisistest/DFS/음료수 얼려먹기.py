def solution(iceTray):
    answer = 0
    n = len(iceTray)
    m = len(iceTray[0])
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]

    for i in range(n):
        iceTray[i] = list(map(int, iceTray[i]))

    def DFS(x,y):
        iceTray[x][y] = 1
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx >= 0 and ny >= 0 and nx < n and ny < m and iceTray[nx][ny] == 0:
                DFS(nx, ny)

    for i in range(n):
        for j in range(m):
            if iceTray[i][j] == 0:
                DFS(i, j)
                answer += 1

    return answer

# print(solution(['00110','00011','11111','00000']))
print(solution(['00000111100000','11111101111110','11011101101110','11011101100000','11011111111111','11011111111100','11000000011111','01111111111111','00000000011111','01111111111000','00011111111000','00000001111000','11111111110011','11100011111111','11100011111111']))