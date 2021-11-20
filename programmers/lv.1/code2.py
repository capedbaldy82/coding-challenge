def solution(s):
    dic1 = {
        0:'zero',
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine'
    }
    dic2 = ['0','1','2','3','4','5','6','7','8','9']
    
    answer = ''
    char_num = ''
    count = 0

    
    for char in s:
        if char.isalpha():
            print(char)
            char_num += char
            count += 1
            print(count)
            for i in range(10):
                if char_num == dic1[i]:
                    answer += dic2[i]
                    count = 0
                    char_num = ''
        else:
            answer += char

    
    return int(answer)

# num_dic = {
#     "zero":"0",
#     "one":"1",
#     "two":"2",
#     "three":"3",
#     "four":"4",
#     "five":"5",
#     "six":"6",
#     "seven":"7",
#     "eight":"8",
#     "nine":"9"
#     }
# def solution(s):
#     answer = s
#     for key, value in num_dic.items():
#         answer = answer.replace(key, value)
#     return int(answer)