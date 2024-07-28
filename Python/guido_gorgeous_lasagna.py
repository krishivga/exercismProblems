"""
    Also, strange that the analyzer wants a docstring on a variable.
    Creating a 'constant' (even though python doesn't officially support them) that contains the expected bake time.
"""
EXPECTED_BAKE_TIME = 40

def bake_time_remaining(elapsed_bake_time):
    """
        We can find the remaining time by subtracting the time already taken to bake (elapsed time) by the total time it would take to bake (expected bake time).
    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time

def preparation_time_in_minutes(number_of_layers):
    """
        We can figure out the prep time with the number of layers and the time it takes per layer. 
    """
    return number_of_layers * 2

def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """
        The elapsed time has two parts. The time taken to prepare and the time spent baking. The former can be found using the previous function and the latter is already given as a parameter.
    """
    return  preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
