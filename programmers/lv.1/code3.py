def solution(board, moves):
    basket = []
    temp = 0
    answer = 0
    is_exist = 0

    for move in moves:
        for i in range(len(board)):
            if board[i][move-1] != 0:
                basket.append(board[i][move-1])
                board[i][move-1] = 0
                is_exist = 1
                break
            else:
                is_exist = 0
        
        if is_exist == 0:
            temp = 0

        if len(basket) != 0:
            # basket이 비어있을 경우 매개변수로 basket[-1]자체를 사용 불가능함 - 
            if temp == basket[-1]:
                basket.pop()
                basket.pop()
                if len(basket) == 0:
                    temp = 0
                else:
                    temp = basket[-1]
                answer += 2
            else:
                temp = basket[-1]


    return answer




# def solution(board, moves):
#     stacklist = []
#     answer = 0

#     for i in moves:
#         for j in range(len(board)):
#             if board[j][i-1] != 0:
#                 stacklist.append(board[j][i-1])
#                 board[j][i-1] = 0

#                 if len(stacklist) > 1:
#                     if stacklist[-1] == stacklist[-2]:
#                         stacklist.pop(-1)
#                         stacklist.pop(-1)
#                         answer += 2     
#                 break

#     return answer
