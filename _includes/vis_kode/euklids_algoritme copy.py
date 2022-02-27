

# def FellesFaktorAv(a, b):
#     while a != b:
#         a, b = max(a, b), min(a, b) #Definerer x til å være den største av x og y.
#         a = a - b
#     return a

# def EuklidsMetodeForFellesFaktorAv(a, b):
#     while a!= 0:
#         a, b = max(a, b), min(a, b) #Definerer x til å være den største av x og y.
#         a = a % b
#     return b
# print(EuklidsMetodeForFellesFaktorAv(5,15))
# def EM1(a, b):
#     likninger = [] # Her lagrer vi alle likningene våre som lister
#     while True:
#         a, b= max(a, b), min(a, b)  # lar a være det største tallet
#         helltallsdivisjon = a // b
#         rest = a % b
#         if rest == 0: # Vi vil fortsette til vi har funnet felles faktor
#             break
#         # Legger til likningen a = heltallsdivisjon * b + rest
#         likninger.append([a, helltallsdivisjon, b, rest]) 
#         a = rest
#     return likninger

# def LosDiofantiskLikningMedKoeffisienter(a, b):
#     print(f"\nFelles faktor er {FellesFaktorAv(a,b)}.\n")
#     likninger = EM1(a,b)
#     for koeffisienter in likninger:
#         print(f"{koeffisienter[0]} = {koeffisienter[1]} · {koeffisienter[2]} + {koeffisienter[3]}\n")
    
#     print("Vi reverserer nå prosessen \n\n")
#     sistelikning = likninger[-1]
#     reversering = [[sistelikning[-1], 1, sistelikning[0], -sistelikning[1], sistelikning[2]]]
#     print(f"{reversering[-1][0]} = {reversering[-1][1]} · {reversering[-1][2]}"+ ("+" if reversering[-1][3]> 0 else "-") +f" {reversering[-1][3]} · {reversering[-1][4]}\n")

#     for i in range(len(likninger)-1):
#         d = reversering[-1][-2]
#         r_nminus1 = likninger[-i-2][0]
#         c = reversering[-1][1]
#         c_n = likninger[-i-2][1]
#         r_n = likninger[-i-1][0]
#         reversering.append([likninger[-1][-1], d, r_nminus1,  (c+d*(-c_n)), r_n])
#         print(f"{reversering[-1][0]} = {reversering[-1][1]} · {reversering[-1][2]} "+ ("+" if reversering[-1][3]> 0 else "") +f" {reversering[-1][3]} · {reversering[-1][4]}\n")

def RekursivLosningAvDiofantiskLikningMedKoeffisienter(a, b):
    if a < b:
        return RekursivLosningAvDiofantiskLikningMedKoeffisienter(b, a)
    if (b == 0):
        print(f"\nStørste felles faktor er {a}\n")
        # sff(a,b) = a = a * 1 + b * 0
        return a, 1, 0
    
    else:
        # Ved å finne løsning på ssf(a,b) =  b * x + (a % b) * y 
        # kan vi bruke at (a % b) = a - (a // b) * b.
        # Dermed er 
        # ssf(a,b) = a* y + b* (x - (a // b) * y )
        print(f"{a} = {b} · {a // b} + {a % b}")
        sff, x, y = RekursivLosningAvDiofantiskLikningMedKoeffisienter(b, a % b)
        # print(f"{sff} = {a} · {y} + {b} · ({x} - ({a // b}) · {y})")
        x, y = y, (x-(a // b) * y)
        print(f"{sff} = {a} · {x} + {b} · {y}")
        return sff, x, y
    
RekursivLosningAvDiofantiskLikningMedKoeffisienter(1027, 729)

# def LosningAvDiofantiskLikningMedKoeffisienter(a, b):
#     if a < b:
#         return LosningAvDiofantiskLikningMedKoeffisienter(b, a)
#     if (b == 0):
#         return a, 1, 0
#     else:
#         sff, x, y = LosningAvDiofantiskLikningMedKoeffisienter(b, a % b)
#     x, y = y, (x - (a // b) * y)
#     return sff, x, y