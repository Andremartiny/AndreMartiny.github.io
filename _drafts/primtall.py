
def kandetdelespaa(i, array):                   # Sjekker om 'i' kan deles på noen av tallene i arrayen, hvis det kan, så returnerer funksjonen True. Hvis ingen deles 'i', så returneres False
    for k in array:                             # Mer at dette er det samme som å bruke innebygd any(i % k == 0 for k in array)
        if i % k == 0:      
            return True
    return False

def primtall(n):                                # Definerer funksjonen som skal lage en liste med alle primtall opp til n
    ptall = []                                  # til å begynne med er vår liste tom
    for i in range(2, n):                       # her skal vi kjøre gjennom alle tall fra 2 til n
        if kandetdelespaa(i, ptall) == False:   # kandetdelespaa sjekker om i kan deles på noe i ptall. Returnerer True hvis det finnes k i ptall som deler i, returnerer False ellers.
            ptall.append(i)                     # Legger til i til lista av primtall hvis i ikke kunne deles på noen av de mindre primtallene
    return ptall                                #vi returnerer lista med alle primtall opp til n

def faktorisering(n):
    if n >= 10**9:
        print("Velg et mindre tall er du snill...")
        return
    sqrt = n**(1/2)                               # vi vet at vi kun trenger å sjekke primtall opp til kvadratroten av n
    grense = int(sqrt//1+1)                       # //1 runder ned til nærmeste heltall
    ptall = primtall(grense)                      # her kaller vi på funksjonen som gir en array av primtall
    faktorer = []                                 # her skal vi ha alle faktorene til n
    i = 0
    while i < len(ptall)-1:
        if n % ptall[i] == 0:
            faktorer.append(ptall[i])
            n = n/ptall[i]
            i = 0
        else:
            i += 1
    if n != 1:
        faktorer.append(int(n))
    return faktorer

def gcd(a,b):
    while b % a != 0:
        a, b = b % a, a
    return a

def eulertotient(n):
    svar = n
    for i in range(n):
        if gcd(i,n) > 1:
            svar -= 1
    return svar
