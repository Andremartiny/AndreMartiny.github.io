# Hentet fra https://www.practicepython.org/exercise/2014/03/05/05-list-overlap.html
# Oppgaven er oversatt av Henrik L. Njølstad under CC-BY-4.0 (https://creativecommons.org/licenses/by/4.0/).

# Oppgave 5.
# Ta to lister, f.eks. a og b under:
# a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
# b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
# og skriv et program som returnerer en liste som bare inneholder de felles elementene.
# Sørg for at programmet fungerer med to lister som har forskjellig størrelse.


def finne_felles_elementer(liste1, liste2):
    svarliste = []
    for x in liste1:
        for y in liste2:
            if x == y and x not in svarliste:
                svarliste.append(x)
    return svarliste


# print(finne_felles_elementer(a, b))



# Ekstraoppgave 1.
# Generer to tilfeldige lister for å teste funksjonen.

import random

def tilfeldig_liste():
    liste = []
    for item in range(random.randrange(4,50)):
        liste.append(random.randrange(-50,50))
        liste.sort(reverse=False)
    return liste

# x = tilfeldig_liste()
# y = tilfeldig_liste()

# print("x = ",x)
# print("y = ",y)


# print("Felleselementene i x og y er ", finne_felles_elementer(x,y))

# Ekstraoppgave 2.
# Skriv funksjonen ved hjelp av bare én kodelinje.
