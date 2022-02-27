from deleligMed import *


rundenummer = 1
antall_runder = 10
while rundenummer < antall_runder:
    if erDeleligMedTo(rundenummer):
        print("FIZZ")
    if erDeleligMedTre(rundenummer):
        print("BUZZ")
    if erDeleligMedToOgTre(rundenummer):
        print("FIZZBUZZ")
    else:
        print(rundenummer)
    rundenummer = rundenummer + 1