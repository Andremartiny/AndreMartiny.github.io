def addering(mat1, mat2):
    rad1, rad2 = len(mat1), len(mat2)
    kol1, kol2 = len(mat1[0]), len(mat2[0])
    if rad1 != rad2 and kol1 != kol2:
        return print("Matrisene har ikke samme størrelse.")
    resultat = []
    for rad in range(rad1):
        resultat.append([mat1[rad][kol]+mat2[rad][kol] for kol in range(kol1)])
    return resultat

def skalering(skalar,mat1):
    for rad in range(len(mat1)):
        for kol in range(len(mat1[0])):
            mat1[rad][kol] = skalar*mat1[rad][kol]
    return mat1

    #matrise = [ [2,3,4,5,6], [6,7,8,9,10]
#]

#matrise2 = [[11,-12], [-21,22],[-31,32],[31,-32],[41,-42], [51,-52]
#]
#matrise = [[1,2],[2,3],[4,5]]
matrise2 = [[0,0,1],[1,0,0],[0,0,1]]

matrise3 = [
    [1,0,0,1],
    [0,1,0,2],
]

matrise = [[ 1,  2,  0,  5],
 [ 2,  3,  0,  8],
 [ 4,  5,  0, 14]]

import numpy as np

print(np.matrix(matrise))

print(np.matrix(skalering(2.9,matrise)))
