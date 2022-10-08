# importerer biblioteker
import matplotlib.pyplot as plt
import numpy as np

### OPPGAVE 10 ###

# definerer variabler
sigma = np.log(1.5)
my = np.log(100)
utvalgsstorrelse = 10000
bins = 100
rho = 1000
rho_p = 3000

# funksjon som regner ut terminalhastighet (som funksjon av diameter, rho_p og rho) Skrevet av oppgave 4
def TerminalhastighetSomFunksjonAv(diameter, rho_p, rho):
    return np.sqrt((8 * (rho_p - rho) * 9.81 * diameter) / (3 * rho))

#tar et utvalg på utvalgsstørrelse = 1000
diametertilutvalg = np.random.lognormal(mean=my, sigma=sigma, size = utvalgsstorrelse)
# lager liste som viser terminalhastigheten over utvalgene vi har tatt
terminalhastigheter = [TerminalhastighetSomFunksjonAv(diametertilpartikkel, rho_p, rho) for diametertilpartikkel in diametertilutvalg]

# plt.hist(terminalhastigheter, bins = 100) Etter å ha kjørt denne ser vi at det er naturlig å begrense oss fra 30 til 140
plt.hist(terminalhastigheter, bins = 100, range = (30, 140))
plt.show()
