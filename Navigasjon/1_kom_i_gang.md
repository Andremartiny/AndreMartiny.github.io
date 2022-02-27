---
layout: page
title: Kom i gang med Python
permalink: /kom_i_gang.html
---

Python er et tekstbasert programmeringssspråk på linje med for eksempel Java, JavaScript, C#, MATLAB og mange andre. Det finnes mange måter å komme i gang med programmering i Python på og mange velger nettbaserte løsninger som <a href="https://trinket.io/" target="_blank">Trinket</a> eller <a href="https://repl.it/repls/SmoothPreemptiveFonts#main.py" target="_blank">Repl.it</a>. 

<!-- Vi foretrekker å kjøre Python lokalt på egen datamaskin med et egnet redigeringsprogram, fordi et slikt program gir flere muligheter enn en nettbasert løsning og gjør det enklere å feilsøke i koden din. -->

# Metode 1: Mu
## Installere Mu
<a href="https://codewith.mu/en/" target="_blank">Mu</a> er et enkelt redigeringsprogram for Python som egner seg godt for nybegynnere. Mu har alle de viktigste funksjonene du trenger  for å komme i gang med programmering i Python. 

1. Først må du laste ned installasjonsfilen. Den finner du <a href="https://codewith.mu/en/download" target="_blank">her</a> til både Windows og Mac OS. 
> Hvis du er usikker på om du har 32-bit eller 64-bit versjon av Windows, finner du en fremgangsmåte for å sjekke hvilken versjon du har på <a href="https://support.microsoft.com/nb-no/windows/vanlige-sp%C3%B8rsm%C3%A5l-om-32-biters-og-64-biters-windows-c6ca9541-8dce-4d48-0415-94a3faa2e13d" target="_blank">denne</a> siden.
2. Deretter må du kjøre installasjonsfilen. Du kan enten trykke på fila nederst i nettleseren din eller finne den der den er lagret.
3. Klikk deg gjennom installasjonsveilederen.
4. Finn Mu i start-menyen og åpne programmet.
5. Du er nå klar for å programmere i Mu.


# Metode 2: Python 3.9 og VS Code
## Installere Python 3.9 for Windows
Det er veldig enkelt å installere Python på egen maskin så lenge man gjør det i riktig rekkefølge. Vi har derfor laget en liste over hvordan du går frem og i hvilken rekkefølge det er lurt å installere programmet i.

> Når du har lastet ned installasjonsfilen er det viktig at du husker å huke av der det står «Add Python to PATH». Hvis du ikke gjør det når du gjennomfører installasjonen, er det enkleste å kjøre installasjonsfilen på nytt for å avinstallere og deretter starte på nytt.

1.  Det første du må gjøre, er å laste ned installasjonsfilen. Klikk på linken som tar deg til <a href="https://www.python.org/downloads/" target="_blank">Python.org</a> og klikk på **Download Python 3.9.0**.
2.  Gå inn i mappen der du lastet ned installasjonsfilen og åpne den. Filnavnet heter «python 3.9.0-amd64.exe».\
  NB: I det første vinduet som åpner seg, er det viktig at du huker av på «Add Python 3.9 to PATH». Når du har gjort det, kan du fortsette installasjonen ved å klikke **«Install Now»**.
3.  Når installasjonen er ferdig kan du lukke installasjonsveilederen. For å sjekke at installasjonen har gått som den skal kan du:
<ol type="i" style="margin-left:3rem">
  <li>Skriv '<b>cmd</b>' i søkefeltet på oppgavelinja for å åpne programmet «Ledetekst».</li>
  <li>Skriv '<b>python</b>' i kommandolinja etter <code>C:\WINDOWS\system32>_</code> og trykk ENTER. </li>
  <li>Hvis du får følgende beskjed i terminalvinduet har du vellykket installert Python 3.9.0:</li>
</ol>


    C:\Users>python
    Python 3.9.0 (tags/v3.9.0:9cf6752, Oct  5 2020, 15:34:40) [MSC v.1927 64 bit (AMD64)] on win32
    Type "help", "copyright", "credits" or "license" for more information.

Hvis det ikke skjer noe når du skriver inn 'python' i terminalviduet, skyldes det mest sannsynlig at du ikke klikket på «Add Python 3.9.0 to PATH» i starten av installasjonen. Kjør installasjonsfilen på nytt, velg «Uninstall», avinstaller programmet og start installasjonen på nytt.

> Vi skal ikke bruke dette terminalvinduet til å jobbe med Python, men det er mulig. Hvis du har lyst til å prøve å kode i Python allerede nå, kan du for eksempel skrive inn enkle (eller kompliserte) regnestykker for å bruke Python som en kalkulator.
>
> Tips: Hvis du skal skrive en potens i Python brukes \*\* i stedet for ^. Altså hvis du vil skrive «3 opphøyd i 5», så skriver du **3\*\*5**. I terminalvinduet vil det nå se ut som dette:

    >>> 3**5
    243
    >>> _

## Installere Visual Studio Code (VS Code)

1. Nå er du klar for å installere Visual Studio Code. Klikk inn på <a href="https://code.visualstudio.com/" target="_blank">denne</a> lenken og trykk deretter på **Download for Windows**. (Hvis du har macOS eller Linux finner du egne installasjonsfiler i nedtrekksmenyen).
2. På samme måte som når du installerte Python, må du finne mappen du lastet ned installasjonsfilen i og kjøre fila.
3. Velg engelsk som installasjonsprogram og trykk OK.
4. For å komme videre, må du lese og akseptere lisensavtalen og trykke Next>.
5. Nå har du fem forskjellige valg for hva du vil installere. Det eneste som er nødvendig at du huker av på, er «Add to PATH (requires shell restart)». Hvis du vil ha et skrivebordsikon for å åpne programmet, kan du huke av på det øverste valget.
6. Klikk på 'Next>' og 'Install'. Om noen få sekunder skal programmet være ferdig installert og du kan velge å kjøre VS Code når installasjonsveilederen er ferdig.

> For å skrive Python i VS Code behøver vi en utvidelse til programmet. Trykk CTRL+SHIFT+P på tastaturet, skriv inn «Extensions», velg «Install Extensions» og søk etter 'ms-python.python' i fanen som dukker opp på venstre side. Velg Python og trykk Install.
