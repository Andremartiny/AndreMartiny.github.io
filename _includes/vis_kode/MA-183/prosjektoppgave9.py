# importerer biblioteker
import matplotlib.pyplot as plt
import numpy as np

### OPPGAVE 7 ####
# definerer variabler
sigma = np.log(1.5)
my = np.log(100)
utvalgsstorrelse = 10000
bins = 100
#lager en liste med x-verdier fra 1-300
x = np.linspace(1, 300)

# lager tilhørende liste med y-verdier generert av P(d)
y =  [3*10000 / (np.sqrt(np.pi * 2) * xverdi * sigma)
    * np.exp(-((np.log(xverdi) - my) ** 2) / (2 * sigma**2)) for xverdi in x]

## Skalerer opp med 30*utvalgsstørrelse fordi det er 100 stolper på intervallet 1-300. Bredde på 3. Høydene på stolpene er antall i intervallene. 
# Stabler man stolpene får man høyde på utvalgsstørrelse (som her er 1000), med bredde på 3. 

### OPPGAVE 9 ###

diametertilutvalg = np.random.lognormal(mean=my, sigma=sigma, size = utvalgsstorrelse)
plt.plot(x, y)
plt.hist(diametertilutvalg, bins = 100, range= (1, 300))
plt.show()

### MED LITT TRIAL AND ERROR SER VI AT 10000 utvalg og 100 bøtter gir et bra bilde