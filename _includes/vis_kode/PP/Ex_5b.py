import random

def tilfeldig_liste():
    liste = []
    for number in range(random.randrange(4,50)):
        liste.append(random.randrange(-50,50))
        liste.sort(reverse=False)
    return liste