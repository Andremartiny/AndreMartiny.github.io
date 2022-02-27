from numpy import linspace

def f(x) :
    return x**2 - 2 

X = linspace (-2,2,400)

Y = f(X)

for i in range(0,399) :
    if Y[i] * Y[i+1] <= 0:
        print(f"Jeg har funnet et nullpunkt. Det er når x-verdien er omtrent {X[i]}")
