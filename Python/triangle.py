def is_triangle(sides):
    for i in sides:
        if i == 0:
            return False
    if (sides[0] + sides[1] >= sides[2]) and (sides[2] + sides[1] >= sides[0]) and (sides[2] + sides[0] >= sides[1]):
        return True
    else:
        return False

def equilateral(sides):
    if is_triangle(sides) and sides[0] == sides[1] == sides[2]:
        return True
    else: 
        return False

def isosceles(sides):
    if is_triangle(sides) and (sides[0] == sides[1] or sides[0] == sides[2] or sides[1] == sides[2]):
        return True
    else:
        return False

def scalene(sides):
    if is_triangle(sides) and not equilateral(sides) and not isosceles(sides):
        return True
    else:
        return False
