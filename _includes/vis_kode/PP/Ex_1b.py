def oppgave1b():
    svartekst = fyller_hundre()
    sporsmål = "Skriv et valgfritt naturlig tall:\n"
    n = float(input(sporsmål))
    n_int = int(n)
    i = 0
    while n_int <= 0 or n % 1 != 0:
        print("Prøv på nytt. Et naturlig tall er et positivt heltall.")
        n = float(input(sporsmål))
        n_int = int(n)
    while i < n:
        print(svartekst)
        i += 1      # Denne linja gjør det samme som 'i = i + 1'
