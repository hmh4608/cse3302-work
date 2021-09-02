#Name: Hoang Ho
#ID: 1001654608
#Due Date: April 30, 2021 by 9:59 pm
#OS: Windows 10
#Python 3.9.2 used
#Lab 3 - Brace Depth

import os

#opens up the input file from the current working directory and stores each line into a list
file = open(os.getcwd() + "/input.txt", "r")

#to keep track of current brace depth
braceDepth = 0
multiLine = False #for the case that the brace is inside a multiline comment

#read in the input file and output the annotated version
for text in file:
    #check if the line is in a multiline comment
    if multiLine is True:
        text = str(braceDepth) + " " + text
        if "*/" in text:
            multiLine = False
    #print an error message for the existence of an unmatched { brace
    elif "//end of program" in text and braceDepth > 0:
        text = "expected '}'" + " " + text
    #the current line in the code in the input file is a comment
    elif "//" in text or "/*"  in text:
        text = str(braceDepth) + " " + text
        if "/*" in text:
            multiLine = True
    elif '{' in text:
        #make sure that the { brace is not within quotations
        if not ('"' in text) or ('"' in text and text.find('"') > text.find('{')):
            #to cover the case that there are multiple opening braces in one line
            braceDepth += text.count('{')
            #the opening and closing braces are on the same line
            if '}' in text:
                text = str(braceDepth) + " " + text
                braceDepth -= text.count('}')
            else:
                text = str(braceDepth) + " " + text
        else:
            text = str(braceDepth) + " " + text
    elif '}' in text:
        #make sure that the { brace is not within quotations
        if not ('"' in text) or ('"' in text and text.find('"') > text.find('}')):
            #accounting for the number of already resolved {} braces
            braceDepth -= text.count('}')
            if braceDepth >= 0:
                #to cover the case that there are multiple closing braces in one line
                text = str(braceDepth+1) + " " + text
            else: 
                #print an error message for the existance of an unmatched } brace who is not paired with a { brace
                text = "expected '{'" + " " + text
        else:
            text = str(braceDepth) + " " + text
    else:
        text = str(braceDepth) + " " + text
    
    print(text, end='') #print without the extra new line

file.close()
