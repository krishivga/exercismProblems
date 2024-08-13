def is_armstrong_number(number):
    # To alter and conduct operations on the number
    tempnum = number
    # In order to find the final sum of the numbers
    armstrongsum = 0
    # In order to break apart the number into its parts
    tempnum = str(tempnum)
    # To find the number of digits
    numlength = len(tempnum)
    for i in tempnum:
        i = int(i)
        armstrongsum += (i ** numlength)
    if armstrongsum == number:
        return True
    else:
        return False