#Name: Hoang Ho
#ID: 1001654608
#Date Turned In: April 2, 2021
#OS: Windows 10
#Python 3.9.2 used

#Lab 2 - RPN
#Only Extra Credit B is implemented
#Additional operators added for Extra Credit B: exponential ^ and modulo %

import os

#defining function(s)
    
#solves the current reverse polish notation expression from the input text file
#returns the result of the expression
#expression is assumed to already be in RPN/postfix form
def solveRPN(expression):
    operands = []
    num1 = 0
    num2 = 0
    
    #loop through the list of expressions
    for op in expression:
        if (op != '+' and op != '-' and op != '*' and  op != '/' and op != '^' and op != '%'):
            operands.append(int(op))
        else:
            #num2 will be the first pop() since the number is popped from the end of the list
            num2 = operands.pop()
            num1 = operands.pop()
            
            if op == '+':
                operands.append(num1+num2)
            elif op == '-':
                operands.append(num1-num2)
            elif op == '*':
                operands.append(num1*num2)
            elif op == '/':
                operands.append(num1/num2)
            #Extra Credit B: added exponential  ^ and modulo % below
            elif op == '%':
                quotient = int(num1/num2) #truncate the quotient
                operands.append(num1-(num2*quotient))
            elif op == '^':
                #loop to continuously multiply the base by itself num2 number of times and store into num1
                base = num1
                for i in range(1, num2):
                    num1 *= base
                operands.append(num1)

    #return the single resulting number in operands calculated after going through the entire expression
    return operands.pop()

#opens up the input file and stores each line into a list
file = open(os.getcwd() + "/input_RPN_EC.txt", "r")

#solve each RPN expression in the input file and output the results
for text in file:
    #split gets rid of all whitespace leaving only operands and operators in the list
    expression = text.split()
    result = solveRPN(expression)
    print(result)

file.close()
