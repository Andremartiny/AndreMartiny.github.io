# Skriv et Python program tar inn en liste, fjerner duplikater og returnerer den modifiserte listen

# testliste = [1,2,3,4,1,2,4,1,2,56,3,2,51,1,6,12,35,6,2,12,5,2,1,154,135,151,12,15,12,124,151,5,125,1]

# def slett_duplikater(liste):
#     liste_av_unike_elementer = []
#     for i in range(len(liste)):
#         if liste[i] not in liste_av_unike_elementer:
#             liste_av_unike_elementer.append(liste[i])

#     return liste_av_unike_elementer

# print(slett_duplikater(testliste))


# Skriv et Python program som genererer alle delmengder(underlister) av en liste

# For eksempel er alle delmengdene av [1,2,3] mengdene
# [],
# [1],
# [2],
# [3],
# [1,2],
# [1,3],
# [2,3],
# [1,2,3].

def generer_alle_delmengder(liste):
    alle_delmengder = []
    if len(liste) == 0:
        alle_delmengder.append([])
        return alle_delmengder
    alle_delmengder_uten_siste = generer_alle_delmengder(liste[1:])
    alle_delmengder.extend(alle_delmengder_uten_siste)
    for subliste in alle_delmengder_uten_siste:
        dummy = subliste.copy()
        subliste.insert(0, liste[0])
        alle_delmengder.append(dummy)
    return alle_delmengder.sort()

def generer_alle_delmengder2(liste):
    alle_delmengder = [[]]
    for element in liste:
        dummy = []
        for current_elements in alle_delmengder:
            dummy.append(current_elements.copy())
        for dummyelement in dummy:
            dummyelement.append(element)
        alle_delmengder.extend(dummy)
    alle_delmengder.sort()
    return alle_delmengder




testliste2 = ["1", "2", "3", "4"]
# print(testliste2)
testliste2 = generer_alle_delmengder(testliste2)
print(testliste2)