# importerer biblioteker
import matplotlib.pyplot as plt
import numpy as np


# definerer variabler
sigma = np.log(1.5)
my = np.log(100)

#lager en liste med x-verdier fra 1-300
x = np.linspace(1, 300)

# lager tilhørende liste med y-verdier generert av P(d)
y =  [1 / (np.sqrt(np.pi * 2) * xverdi * sigma)
    * np.exp(-((np.log(xverdi) - my) ** 2) / (2 * sigma**2)) for xverdi in x]
plt.plot(x, y)
plt.show()