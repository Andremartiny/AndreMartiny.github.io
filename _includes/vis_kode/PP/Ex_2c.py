tall = int(input("Skriv inn et naturlig tall:\n"))
div = int(input(f"Skriv inn et tall jeg skal sjekke om går opp i {tall}."))
if tall % div == 0:
    print(div, "er en faktor i ", tall)
else:
    print(div, "er ikke en faktor i", tall)