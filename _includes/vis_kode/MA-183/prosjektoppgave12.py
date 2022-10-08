# importerer biblioteker
import matplotlib.pyplot as plt
import numpy as np

### OPPGAVE 10 ###

# definerer variabler for første utvalg
sigma1 = np.log(1.45)
my1 = np.log(80)
rho_p1 = 2500
# definerer variabler for første utvalg
sigma2 = np.log(1.55)
my2 = np.log(120)
rho_p2 = 3500
utvalgsstorrelse = 10000
bins = 100
rho = 1000


# funksjon som regner ut terminalhastighet (som funksjon av diameter, rho_p og rho) Skrevet av oppgave 4
def TerminalhastighetSomFunksjonAv(diameter, rho_p, rho):
    return np.sqrt((8 * (rho_p - rho) * 9.81 * diameter) / (3 * rho))

#tar et utvalg av paritkkel type 1 på utvalgsstørrelse = 1000
diametertilutvalg1 = np.random.lognormal(mean=my1, sigma=sigma1, size = utvalgsstorrelse)
#tar et utvalg av paritkkel type 2 på utvalgsstørrelse = 1000
diametertilutvalg2 = np.random.lognormal(mean=my2, sigma=sigma2, size = utvalgsstorrelse)
# lager liste som viser terminalhastigheten over utvalgene vi har tatt
terminalhastigheterfrautvalg1 = [TerminalhastighetSomFunksjonAv(diametertilpartikkel, rho_p1, rho) for diametertilpartikkel in diametertilutvalg1]
terminalhastigheterfrautvalg2 = [TerminalhastighetSomFunksjonAv(diametertilpartikkel, rho_p2, rho) for diametertilpartikkel in diametertilutvalg2]

#### OPPGAVE 12 ####


#definerer funksjonene 
def AndelPartiklerSomSynkerAvUtvalget(
    ListeMedTerminalhastigheterTilEtUtvalg, stromningshastighet
):
    # skal telle andelen terminalhastigheter som er større en strømningshastigheten.
    # definerer en teller som vi setter til 0
    teller = 0
    # kjører gjennom terminalhastighetene
    for terminalhastighet in ListeMedTerminalhastigheterTilEtUtvalg:
        if terminalhastighet > stromningshastighet:
            # hvis terminalhastighet er størst synker den, og vi skal derfor telle denne
            teller += 1
    # vi har nå telt alle partiklene som har større terminalhastighet enn strømningshastigheten (og dermed synker)
    # andelenen som synker er da teller/totaltantallpartikler)
    andelsomsynker = teller / len(ListeMedTerminalhastigheterTilEtUtvalg)
    return andelsomsynker


def AndelPartiklerSomStigerAvUtvalget(
    ListeMedTerminalhastigheterTilEtUtvalg, stromningshastighet
):
    return 1 - AndelPartiklerSomSynkerAvUtvalget(
        ListeMedTerminalhastigheterTilEtUtvalg, stromningshastighet
    )


# lar x være verdier for strømningshastigheter.
# Terminalhastighetene så ut til å ligge mellom 0 og 300 i oppgave 11
x = np.linspace(0, 200, 100)

# utvalg 2 er utvalget av tunge partikler. Det er disse vi se på hvor mange som synker
y = [
    AndelPartiklerSomSynkerAvUtvalget(terminalhastigheterfrautvalg2, xverdi)
    for xverdi in x
]

# utvalg1 er lette partikler, og vil se på hvor mange som
y_2 = [
    AndelPartiklerSomStigerAvUtvalget(terminalhastigheterfrautvalg1, xverdi)
    for xverdi in x
]

plt.plot(x, y)
plt.plot(x, y_2)
plt.show()
