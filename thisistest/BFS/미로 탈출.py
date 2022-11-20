def solution(maze):
    answer = 0
    dx = [-1,0,1,0]
    dy = [0,1,0,-1]
    n = len(maze)
    m = len(maze[0])

    for i in range(n):
        maze[i] = list(map(int, maze[i]))

    def BFS(a, b):
        queue = [[a, b]]
        while queue:
            [x, y] = queue.pop(0)
            
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if nx >= 0 and ny >= 0 and nx < n and ny < m and maze[nx][ny] == 1:
                    maze[nx][ny] = maze[x][y] + 1
                    queue.append([nx, ny])

    BFS(0, 0)

    answer = maze[n-1][m-1]

    return answer

print(solution(['101010','111111','000001','111111','111111']))