tall = int(input("Skriv inn et heltall:\n"))
if tall % 4 == 0:
    print(f"{tall} er et multiplum av 4.")
elif tall % 2 == 0:
    print(f"{tall} er et partall.")
else:
    print(f"{tall} er et oddetall.")