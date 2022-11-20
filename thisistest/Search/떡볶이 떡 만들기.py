def solution(n, m, arr):
    answer = 0
    num = max(arr)
    lenList = []

    for i in range(1, max(arr)+1):
        lenList.append(i)

    def binarySearch(array, target, start, end):
        for i in range(8):
            mid = (start + end) // 2
            cut = 0
            for i in arr:
                if i >= mid:
                    cut += (i-mid)

            # print(mid, cut)

            if cut == target:
                return mid
            elif cut > target:
                start = mid + 1
            else:
                end = mid - 1

    answer = binarySearch(lenList, m, 0, len(lenList) - 1)

    return answer

print(solution(4, 6, [19, 15, 10, 17]))