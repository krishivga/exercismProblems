def leap_year(year):
    if year % 4 == 0 and year % 100 == 0 and year % 400 == 0:
        return True
    if year % 4 == 0 and year % 100 == 0 and year % 400 != 0:
        return False
    if year % 4 == 0:
        return True
    else:
        return False