import numpy as np

#######################################################
######                                           ######
#####   Denne koden skal tilnærme kvadratroten    #####
#####          av et heltall n med                #####
#####          et gitt antall desimaler           #####
######                                           ######
#######################################################

################################################
########                                ########
###### funksjonen tar inn to parametre    ######
#####     n og s som gir ut sqrt(n) med    #####
#####         1/10**s feilmargin og        #####
######  forteller hvor mange iterasjoner  ######
########                                ########
################################################

def heronsnum(p,s): # s betegner hvor mange desimaler man ønsker at skal stemme
  ref = np.sqrt(p) # bruker kvadratrota som referanse
  # lagrer sidelengdene i matriser X og Y
  X = [1]    # starter med sidelengde lik 1
  Y = [p]    # den andre sidelengden er n
  diff = 1   # definerer hvor lenge vi skal holde på
  i = 0      # teller antall iterasjoner
  while diff>10**(-s):
    x = (X[-1]+Y[-1])/2    # ny approksimasjon av n
    y = p/x                #
    X.append(x)            # tildeler nye verdier for x og y
    Y.append(y)            # i matrisene X og Y
    diff = np.abs(ref-x)   # sjekker om svaret er presist nok
    i = i+1                # i = i+1 teller hvor mange runder som trengs
  print(f"Etter å ha brukt Herons metode {i} "
        + ("gang" if i == 1 else "ganger")
        + f", har vi tilnærmet kvadratroten til {p} med minst {s} "
        + ("desimal" if s==1 else "desimaler")
        )
  print("")
  print(f"""
        Tilnærmingen er da {X[-1]}
        """)  # skriver den siste approksimasjonen for n

#heronsnum(2,3)

def forkort(a,b) : # denne funksjonen forkorter brøken a/b mest mulig    
    p = int(a/np.gcd(a,b))
    q = int(b/np.gcd(a,b))
    return [p, q]

def heronstext(p,n, feilmargin = False):
    X = [[p,1]] # samler x_i verdiene som [teller,nevner]
    Y = [[1,1]] # samler y_i verdiene som [teller,nevner]
    i=1
    def ittr():
        Xtemp = [X[-1][0]*Y[-1][1]+X[-1][1]*Y[-1][0], 2*X[-1][1]*Y[-1][1]] # regner ut neste x-verdi
        X.append(forkort(Xtemp[0], Xtemp[1]))  # forkorter teller Xtemp[0] og nevner Xtemp[1] og tildeler X
        Ytemp = [p*X[-1][1],X[-1][0]] # regner ut neste y-verdi
        Y.append(forkort(Ytemp[0],Ytemp[1])) # forkorter teller Ytemp[0] og nevner Ytemp[1] og tildeler Y
        print(f"x_{i} = {X[-2][0]}/{X[-2][1]} + {Y[-2][0]}/{Y[-2][1]}/2 = {X[-1][0]}/{X[-1][1]}")
        print(f"y_{i} = {p} * {X[-1][1]}/{X[-1][0]} = {Y[-1][0]}/{Y[-1][1]}")

    if feilmargin == False:
        print(f"Approksimasjonene til kvadratroten av {p} etter {n} iterasjoner er:")
        while i<=n:
            ittr()
            i += 1
    else:
        print(f"""
        Approksimasjonene til kvadratroten av {p} med en feilmargin på {feilmargin} er:
        """)
        while X[-1][0]/X[-1][1]-np.sqrt(p) >= feilmargin:
            ittr()
            i += 1

#heronstext(5,2,0.001)

def heronsTeX(p,n):
    X = [[p,1]] # samler x_i verdiene som [teller,nevner]
    Y = [[1,1]] # samler y_i verdiene som [teller,nevner]
    i=1
    def ittr():
        Xtemp = [X[-1][0]*Y[-1][1]+X[-1][1]*Y[-1][0], 2*X[-1][1]*Y[-1][1]] # regner ut neste x-verdi
        X.append(forkort(Xtemp[0], Xtemp[1]))  # forkorter teller Xtemp[0] og nevner Xtemp[1] og tildeler X
        Ytemp = [p*X[-1][1],X[-1][0]] # regner ut neste y-verdi
        Y.append(forkort(Ytemp[0],Ytemp[1])) # forkorter teller Ytemp[0] og nevner Ytemp[1] og tildeler Y
        print("       x_{{{}}} &= \\frac{{ \\frac{{{}}}{{{}}} + \\frac{{{}}}{{{}}} }} {{{}}} = \\frac{{{}}}{{{}}} \\\\".format(i,X[-2][0],X[-2][1],Y[-2][0],Y[-2][1],2, X[-1][0],X[-1][1]))
        #print(f"       y_{{{i}}} &= \\frac{{{p} \\cdot {X[-1][1]}}}{{{X[-1][0]}}} = \\frac {{{Y[-1][0]}}}{{{Y[-1][1]}}}\\\\")

    print(f"""Approksimasjonene til kvadratroten av {p} etter {n} iterasjoner er:""")
    print("\\begin{align*}") 
    while i<=n:
        ittr()
        i += 1
    print("\\end{align*}")

