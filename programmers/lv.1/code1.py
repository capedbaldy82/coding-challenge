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
        
    print("same: ", same, "zero: ", zero)
    print("typeofSame", type(same),"typeofZero", type(zero))
    print("typeoflottos", type(lottos[0]),"typeofwinnum", type(win_nums[0]))
    answer = [high,low]
    
    return answer

lottos_list = [[44,1,0,0,31,25],[1,0,0,0,0,0],[45,4,35,20,3,9]]
winner_list = [[31,10,45,1,6,19],[38,19,20,40,15,25],[20,9,3,45,4,35]]


for i in range(3):
    print("answer:", solution(lottos_list[i],winner_list[i]))