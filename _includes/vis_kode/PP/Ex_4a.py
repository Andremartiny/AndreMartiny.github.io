def faktorer_til_et_tall():
    nat_tall = int(input("Skriv inn et naturlig tall: \n"))
    print("Alle faktorene til tallet", int(nat_tall), "er")
    for n in range(1, nat_tall+1):
        if nat_tall % n == 0:
            print(n)