import datetime


def fyller_hundre():
    navn = input("Hva er navnet ditt? \n")  # \n lagrer en ny linje.
    # Lagrer input som tall, i stedet for 'string'.
    alder = int(input("Hvor gammel er du? \n"))

    # Dette kan gjøres enklere ved å skrive 'aar = 2020'
    aar = datetime.datetime.now().year  # Lagrer året i år til en varaiabel

    svar = aar - alder + 100  # Regner ut hvilket år personen fyller 100.
    # Lagrer en tekststreng med svaret.
    svartekst = f"Du fyller 100 år i {svar}, {navn}"
    return print(svartekst)


fyller_hundre()
