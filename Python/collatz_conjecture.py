def steps(number):
    # Raising ValueError for all nonpositive numbers. We can force the number to be an integer.
    if number < 1:
        raise ValueError("Only positive integers are allowed")
    # To count the number of steps it took
    counter = 0 
    # To perform operations for odd/even on the number
    tempnum = number
    while True:
        if tempnum == 1:
            break        
        if tempnum % 2 == 0:
            tempnum = tempnum / 2
        else:
            tempnum = (tempnum * 3) + 1
        counter += 1
    return counter