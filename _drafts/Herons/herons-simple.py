import numpy as np

def forkort(a,b) :   
    p = int(a/np.gcd(a,b))
    q = int(b/np.gcd(a,b))
    return [p, q]

def herons(p, X,Y):                      
    Xtemp = [X[-1][0]*Y[-1][1]+X[-1][1]*Y[-1][0], 2*X[-1][1]*Y[-1][1]]  # regner ut neste x-verdi
    X.append(forkort(Xtemp[0], Xtemp[1]))                               # forkorter teller og nevner i Xtemp og lagrer i X
    Ytemp = [p*X[-1][1],X[-1][0]]                                       # regner ut neste y-verdi
    Y.append(forkort(Ytemp[0],Ytemp[1]))                                # forkorter teller og nevner i Ytemp og lagrer i Y
            
def heronstext(p,n):
    X = [[p,1]] # samler x_i verdiene som [teller,nevner]
    Y = [[1,1]] # samler y_i verdiene som [teller,nevner]
    i=1
    print(f"Approksimasjonene til kvadratroten av {p} etter {n} iterasjoner er:")
    while i<=n:
        herons(p,X,Y)
        print(f"x_{i} = ({X[-2][0]}/{X[-2][1]} + {Y[-2][0]}/{Y[-2][1]})/2 = {X[-1][0]}/{X[-1][1]}")
        # print(f"y_{i} = {p} * {X[-1][1]}/{X[-1][0]} = {Y[-1][0]}/{Y[-1][1]}") # Denne linja kan av-kommenteres hvis man ønsker både x-approksimasjonene og y-approksimasjonene.
        i += 1
        
heronstext(3,4)