def response(hey_bob):
    # First, we check for question marks.
    hey_bob = hey_bob.rstrip()
    if not hey_bob: # Don't understand how this empty string returns False:
        return "Fine. Be that way!"
    if hey_bob.isupper() and hey_bob.endswith("?"):
        return "Calm down, I know what I'm doing!"
    if hey_bob.isupper(): 
        return "Whoa, chill out!"
    if hey_bob.endswith("?"):
        return "Sure."
    return "Whatever."