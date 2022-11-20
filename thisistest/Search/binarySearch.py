def solution(arr, target):
    answer = -1

    arr.sort()

    def binarySearch(arr, target, start, end):
        if start > end:
            return None
        
        mid = (start + end) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            return binarySearch(arr, target, start, mid-1)
        else:
            return binarySearch(arr, target, mid+1, end)


    answer = binarySearch(arr, target, arr[0], arr[-1])

    return answer

print(solution([2,4,0,6,10,8,8,16,14,12], 4))