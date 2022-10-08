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

# plt.hist(terminalhastigheterfrautvalg1, bins = 100, range = (0, 300))
# plt.hist(terminalhastigheterfrautvalg2, bins = 100, range = (0, 300)) ved å kjøre disse ser vi hva vi ønsker å bruke som maks-min på søylene våre
plt.hist(terminalhastigheterfrautvalg1, bins = 100, range = (30, 180))
plt.hist(terminalhastigheterfrautvalg2, bins = 100, range = (30, 180))
plt.show()
