def er_dette_et_naturlig_tall(tall):
    try:
        nat_tall = int(tall)
    except:
        return False
    if tall != str(nat_tall) or nat_tall <= 0:
        return False
    return True