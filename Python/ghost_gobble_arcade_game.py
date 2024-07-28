"""
    Checking different character states for pac man and inevitably deciding the win condition.
"""
def eat_ghost(power_pellet_active, touching_ghost):
    return power_pellet_active and touching_ghost # If both are true, the ghost is eaten, otherwise it isn't


def score(touching_power_pellet, touching_dot):
    return touching_power_pellet or touching_dot # Pacman scores when either eating a pellet or a dot


def lose(power_pellet_active, touching_ghost):
    return not power_pellet_active and touching_ghost # Loses if touching ghost but the pellet isn't active.

def win(has_eaten_all_dots, power_pellet_active, touching_ghost):
    # We just check for the two cases where the solution can be true. The first case is if all dots are eaten, we are touching a ghost and we have the power pellet. The second case is that we've eaten all the dots but we aren't touching a ghost.
    return has_eaten_all_dots and power_pellet_active and touching_ghost or has_eaten_all_dots and not touching_ghost
