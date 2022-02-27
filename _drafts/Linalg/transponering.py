import numpy as np

def transp(matrise):
    return [[matrise[rad][kol] for rad in range(len(matrise))] for kol in range(len(matrise[0]))]



def matrisemult(mat1,mat2):
    # Bør sjekke om det går å multiplisere
    mat1rad = len(mat1) # Antall rader i matrise 1
    mat2kol = len(mat2[0]) # antall kolonner i matrise 2
    if len(mat1[0]) != len(mat2): # sjekker om ant kol i mat1 == ant rader i mat2
        return print("Ikke kompatible matriser")
        
    resultat = [[] for i in range(mat1rad)]
    for k in range(mat1rad):
        for j in range(mat2kol):
            komponent = 0 
            for i in range(len(mat1[0])):
                komponent += mat1[k][i]*mat2[i][j]
            resultat[k].append(komponent)
    return resultat
    

#matrise = [ [2,3,4,5,6], [6,7,8,9,10]
#]

#matrise2 = [[11,-12], [-21,22],[-31,32],[31,-32],[41,-42], [51,-52]
#]
matrise = [[1,2],[2,3],[4,5]]
matrise2 = [[0,0,1],[1,0,0],[0,0,1]]

matrise3 = [
    [1,0,0,1],
    [0,1,0,2],
]

print(np.matrix(matrise))
print("\n")
print(np.matrix((matrise3)))
print("\n")

print(np.matrix(matrisemult(matrise,matrise3)))