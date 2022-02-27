
navn = input("Hva heter du? \n")

navnBaklengs = "" # Lager en tom "string" hvor vi skal legge til bokstavene bakfra.

for bokstav in navn:
    navnBaklengs = bokstav + navnBaklengs  # Her er rekkefølgen viktig!

print(f"Navnet ditt baklengs er {navnBaklengs}.")