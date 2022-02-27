def felles_elementer(liste1, liste2):
    felleselementer = []
    for x in liste1:
        for y in liste2:
            if x == y and x not in felleselementer:
                felleselementer.append(x)
    return felleselementer