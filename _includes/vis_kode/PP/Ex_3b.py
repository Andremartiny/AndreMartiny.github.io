def mindre_enn_5_bonus(liste):
    svar = []
    for objekt in liste:
        if objekt < 5:
            svar.append(objekt)
    print(svar)