import numpy as np


def radred(matr) :                                                          # Funksjon rom radreduserer en matrise
    shift = 0                                                               # Variabel som teller antall kolonner som har 0 på hver relevante entry i kolonnen. Hvis en kolonne består av bare 0, ønsker vi å hoppe over den i algoritmen
    for kol in range(len(matr[0])):                                         # Vi skal kjøre gjennom alle kolonnene i matrisen og radredusere
        if all(matr[rad][kol] == 0 for rad in range(kol-shift,len(matr))):  # Vi må sjekke om alle entriene i kolonnen fra diagonalen og nedover er 0. Hvis shift != 0, betyr det at vi har "hoppet over" en kolonne, kol-shift kompanserer for dette hoppet.
            shift += 1                                                      # Hvis alt var 0, så skal vi hoppe over denne kolonne. Shift variabelen teller antallet slike kolonner, derfor øker vi shift med 1
            continue                                                        # continue hopper over resten av loopen. Dette ønsker vi fordi kolonnen består av 0, så vi vil radredusere neste rad
        matr = sortere(matr,kol-shift, kol)                                 # sortere() setter første ikke-0 rad opp til riktig høyde
        matr = dele(matr, kol-shift, kol)                                   # dele()  deler ned alle variablene i den valge raden slik at entrien på [kol-shift][kol] blir 1
        matr = redu(matr,kol-shift, kol)                                    # redu() reduserer alle entryene i kol kolonnen til 0

    return (matr)                                                           # Vi er nå ute av loopen, og radreduksjonen er ferdig. Vi returnerer den radreduserte matrisen.

def sortere(matr, h, b) :                                                   # Funksjon som finner første rad med ikkenull entry i kolonne b, fra og med rad h. Denne raden byttes med rad h.
    for rad in range(h,len(matr)):                                          # Vi looper gjennom alle radene fra og med h
        if matr[rad][b] != 0:                                               # Tester om entry b i raden er ikke-0
            matr[rad],matr[h] = matr[h], matr[rad]                          # Hvis sant, så bytter vi raden med rad h
            return matr                                                     # når vi har byttet raden ønsker vi å returnere den sorterte matrisen.

def redu(matr, h, b):                                                       # Funksjon som reduserer alle entriene til 0, i en kolonne b, fra og med nivå h+1
    for rad in range(len(matr)):                                            # Looper gjennom alle radene fra og med rad h+1
        skalar = matr[rad][b]/matr[h][b]                                               # Sjekker verdien til matrisen i entrien på en gitt rad i kolonne b, denne skal vi nulle ut. # MERK VIKTIG AT DENNE IKKE ER INNE I LOOPEN, DA VIL DEN BLI REDEFINERT HVER LOOP!!
        if skalar == 0 or rad == h:                                                     # Hvis denne allerede er 0, så er vi ferdig
            continue                                                        # Continue hopper da til neste runde i loopen
        for kol in range(b, len(matr[0])):                                  # Vi ønsker å ta matr[rad]-skalar*matr[h], slik at vi får 0 på entry matr[rad][b]. Vi gjør dette komponentvis ved å loope gjennom alle
            matr[rad][kol] = matr[rad][kol]-skalar*matr[h][kol]             
    return matr                                                             # Loopen er slutt, og reduksjonen er ferdig. Returnerer den reduserte matrisen



def dele(matr, h, b):                                                       # Denne matrisen delen skalerer ned rad h, slik at entry b i rad h blir 1
    skalar = 1/matr[h][b]                                                   # Sjekker verdien til matrisen i entrien på rad h kolonne b, denne skal vi skalere med. # MERK VIKTIG AT DENNE IKKE ER INNE I LOOPEN, DA VIL DEN BLI REDEFINERT HVER LOOP!!
    for k in range(len(matr[h])):                                           # Looper over alle kolonnene i raden
        matr[h][k] = skalar* matr[h][k]                                     # Skalerer ned entriene
    return matr                                                             # Returnerer den modifiserte matrisen

matrise = [ [6,(22),3,-5,120], 
            [3,1,(13),8,1],
            [0,1,-3,0, 2], 
            [0,1,-3,3, 2]]
print(matrise)
print(np.matrix(radred(matrise)))