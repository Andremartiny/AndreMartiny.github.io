from radredusering import *


# Tar inn en matrise A og lager en ny matrise (AI) hvor I er identitesmatrisen
def sammensetting(mat):
    rad = len(mat)
    kol = len(mat[0])
    if rad != kol:
        return print("Matrisen er ikke en n x n matrise")
    for r in range(rad):
        for k in range(kol):
            if r != k:
                mat[r].append(0)
            else:
                mat[r].append(1)
    return mat


def matrinv(mat):
    temp = radred(sammensetting(mat))
    for i in range(len(mat)):
        temp[i] = temp[i][len(mat):]
    return temp


matrise = [[0, 1, 2],
           [1, 0, 3],
           [4, -3, 8]]
print(np.matrix(matrise))
# matrise = sammensetting(matrise)
# print(np.matrix(matrise))
# matrise = radred(matrise)
# print(np.matrix(matrise))
# print(np.matrix(radred(matrise)))
print(np.matrix(matrinv(matrise)))
