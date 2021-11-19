def solution(lottos, win_nums):
    same = 0
    zero = 0
    for i in range(0,6):
        if lottos[i] != 0:
            for j in range(0,6):
                if lottos[i] == win_nums[j]:
                    same += 1
        if lottos[i] == 0:
            zero += 1
            
    high = 7-same-zero
    
    rank = [6,6,5,4,3,2,1]
    
    if zero == 6:
        low = 7-1
    else:
        if same == 0:
            low = 7-1
        else:
            low = 7-same
        
    answer = [high,low]
    
    return answer

# def solution(lottos, win_nums):

#     rank=[6,6,5,4,3,2,1]

#     cnt_0 = lottos.count(0)
#     ans = 0
#     for x in win_nums:
#         if x in lottos:
#             ans += 1
#     return rank[cnt_0 + ans],rank[ans]
