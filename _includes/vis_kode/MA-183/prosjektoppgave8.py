# importerer biblioteker
import matplotlib.pyplot as plt
import numpy as np

### OPPGAVE 7 ####
# definerer variabler
sigma = np.log(1.5)
my = np.log(100)

#lager en liste med x-verdier fra 1-300
x = np.linspace(1, 300)

# lager tilhørende liste med y-verdier generert av P(d)
y =  [30*100 / (np.sqrt(np.pi * 2) * xverdi * sigma)
    * np.exp(-((np.log(xverdi) - my) ** 2) / (2 * sigma**2)) for xverdi in x]

## Skalerer opp med 30*100 fordi det er 10 stolper på intervallet 1-300. Bredde på 30. Høydene på stolpene er antall i intervallene. 
# Stabler man stolpene får man høyde på utvalgsstørrelse (som her er 100), med bredde på 30. 

### OPPGAVE 8 ###

diametertilutvalg = np.random.lognormal(mean=my, sigma=sigma, size = 100)
plt.plot(x, y)
plt.hist(diametertilutvalg, range= (1, 300))
plt.show()