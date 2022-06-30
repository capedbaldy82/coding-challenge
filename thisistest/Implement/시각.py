def solution(n):
    answer = 0

    for hour in range(n+1):
        if "3" in str(hour):
            answer += 3600
        else:
            for minute in range(60):
                if "3" in str(minute):
                    answer += 60
                else:
                    for second in range(60):
                        if "3" in str(second):
                            answer += 1
        
    return answer

print(solution(5))