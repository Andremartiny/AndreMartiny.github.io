def erDeleligMedTo(x):
    # TODO: Fullfør funksjonen slik at den returnerer 'True' hvis x er delelig med to.
    return 


def erDeleligMedTre(x):
    # TODO: Fullfør funksjonen slik at den returnerer 'True' hvis x er delelig med tre.
    return 


def erDeleligMedToOgTre(x):
    # TODO: Fullfør funksjonen slik at den returnerer 'True' hvis x er delelig med to og tre.
    return 


rundenummer = 1
antall_runder = 10
while rundenummer < antall_runder:
    if erDeleligMedToOgTre(rundenummer):
        print("FIZZBUZZ")
    elif erDeleligMedTo(rundenummer):
        print("FIZZ")
    elif erDeleligMedTre(rundenummer):
        print("BUZZ")
    else:
        print(rundenummer)
    rundenummer = rundenummer + 1
