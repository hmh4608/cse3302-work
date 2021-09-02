#Name: Hoang Ho
#ID: 1001654608
#Date Turned In: April 2, 2021
#OS: Windows 10
#Python 3.9.2 used
#Lab 2 - RPN

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

    #return the single resulting number in operands calculated after going through the entire expression
    return operands.pop()

#opens up the input file from the current working directory and stores each line into a list
file = open(os.getcwd() + "/input_RPN.txt", "r")

#solve each RPN expression in the input file and output the results
for text in file:
    #split gets rid of all whitespace leaving only operands and operators in the list
    expression = text.split()
    result = solveRPN(expression)
    print(result)

file.close()
