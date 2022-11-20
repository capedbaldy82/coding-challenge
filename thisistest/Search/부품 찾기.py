def solution(n):
    answer = []
    parts = [8,3,7,9,2]

    parts.sort()

    def binarySearch(array, target, start, end):
        
        while start <= end:
            mid = (start + end) // 2
            if array[mid] == target:
                return mid
            elif array[mid] > target:
                end = mid -1
            else:
                start = mid +1

        return None

    for i in n:
        temp = binarySearch(parts, i, 0, len(parts)-1)
        if temp == None:
            answer.append('no')
        else:
            answer.append('yes')
    
    return answer

print(solution([5,7,9]))