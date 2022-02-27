def mindre_enn_n(liste):
    grense = int(input("Hvilket tall skal være grensen?\n"))
    svar = []
    for objekt in liste:
        if objekt < grense:
            svar.append(objekt)
    print(
        f"Alle tallene fra lista {liste} som er mindre enn {grense} er: {svar}")