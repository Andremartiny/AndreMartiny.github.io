---
layout: post
title:  "Prosjektoppgave MA-183"
mathjax: true
permalink: ma-183/prosjektoppgave
---

# Tyngdekraftseparator: 
Mineralindustrien benytter seg av mange separasjonsteknikker for å skille mellom malm og gråstein eller sortere mineralkorn basert på størrelse. En av disse teknikkene er tyngdekraftseparasjon. Denne oppgaven er inspirert av en separasjonsprosess som brukes i ilmenittgruven til Titania AS på Tellnes i Hauge i Dalane. Forekomsten på Tellnes er en av verdens største forekomster av ilmenittmalm og Titania står for 5 % av verdens ilmenittproduksjon. Ilmenittmalm brukes blant annet til å produsere titanhvitt (TiO₂) som brukes til fargestoff.

Steinen som brytes knuses først ned til fint støv før den sendes inn i en separator. I en tyngdekraftseparator utnytter man at balansen mellom tyngdekraften og luftmotstanden (eller «vannmotstanden») til en partikkel i fritt fall er forskjellig for partikler med forskjellig størrelse og tetthet.

Denne type separasjon er illustrert i animasjonen under. De grå og gule partiklene som kommer ut av røret trekkes nedover av tyngdekraften. Farten bremses av friksjonen mot væsken, men om det ikke pumpes inn noe vann fra bunnen av separatoren faller likevel alle partikler nedover. Hvis partiklene derimot møter en vannstrøm fra bunnen av separatoren vil noen av partiklene føres opp til toppen av separatoren, mens noen fortsetter å falle nedover.

<p><iframe src="https://kodelaben.github.io/animasjoner/separator/" width="720" height="505"></iframe></p>

Utforsk animasjonen av tyngekraftseparatoren over ved å justere glideren til du mener du forstår og kan svare på følgende spørsmål:

- Hva gjør glideren? 
- Hvilke partikler er de første som blir tatt av vannstrømmen?
    - Hva kan være grunnen til dette?
- Hvorfor klarer vi ikke gjøre en fullstendig seperasjon av ilmenittmalmen i animasjonen?

I dette prosjektet skal vi ta utgangspunkt i tyngekraftseparatoren som brukes i Titania AS. Målet er å gjøre beregninger og modellere tyngdekraftseparatoren, slik at vi kan vurdere hvilken hastighet for vannstrømmen som bør velges. 

# Nødvendige beregninger: 
1. Gitt en kuleformet partikkel med diameter \\(d\ \\) og tetthet \\(\rho_p\\), hva er massen til partikkelen, og hvor stor er gravitasjonskraften som virker på partikkelen? Her kan det være nyttig å bruke formlene \\(G=mg\\)  for tyngdekraften og \\(m = (\rho_p - \rho )V\ \\) for massen. \\(g = 9.81 \ \\) m/s2 er tyngdens akselerasjon, \\(\rho \ \\) er tettheten til væsken/gassen og \\( V\ \\) er volumet til partikkelen.

    Hvis partikkelen faller ganske raskt eller væsken eller gassen den beveger seg gjennom er ganske tyntflytende kan friksjonskraften den opplever skrives som
    $$ F = \frac{1}{4} \cdot\rho v^2 \cdot A, $$
    der \\(A \\) er tverrsnittsarealet og \\(v \\) er hastigheten til partikkelen.

2. Finn et uttrykk for friksjonskraften for partikkelen med diameter \\(d \\) fra oppgaven over.

3. Regn ut grenseverdien til \\(G/F \\) når \\(d\\rightarrow 0 \\) og \\(d\\rightarrow \\infty\\). Hvorfor blir steinen knust før den sendes inn i tyngdekraftseparatoren?

    Når partikkelen slippes vil den falle raskere og raskere helt til friksjonskraften er like stor som tyngdekraften. Da slutter partikkelen å akselerere og den har nådd terminalhastigheten sin.

4. Finn et uttrykk for terminalhastigheten.

    Anta nå at du har to typer partikler, en type med tetthet 2,5 g/cm³ og diameter 80 µm, og en type med tetthet 3,5 g/cm³ og diameter 120 µm.

5. Hva er terminalhastighetene til de to partikkeltypene i vann?

    I en tyngdekraftseparator separeres partiklene ved at de møter en vertikal gass- eller væskestrøm med en hastighet \\(u\\), som vist i animasjonen i toppen av oppgaven. De partiklene som har en terminalhastighet, \\(v_t\\), som er større enn hastigheten \\(u \\) til gassen eller væsken faller ned, mens resten av partiklene følger med ut av toppen av separatoren.

    FIXMEBILDE

6. Hva må hastigheten til vannstrømmen være for å separere de to partikkeltypene i forrige oppgave?


# Modellering og programmering
I virkeligheten vil knuseprosessen gi partikler med mange forskjellige størrelser. Det er vanlig at partikkelstørrelsen fordeler seg lognormalt, det vil si at sannsynligheten for å finne en partikkel med diameter \\(d \\) er

\\[ P(d) = \\frac{1}{\\sqrt{2\\pi} d\\sigma} e^{\\left[ -\\frac{(\\ln d - \\mu)^2}{2\\sigma^2} \\right]} \\]

der \\(e^\\mu \\) er mediandiameteren til fordelingen og \\(e^\\sigma \\) (stemmer dette? Wikipedia ser ut til å si noe annet om spredningen) beskriver spredningen rundt medianverdien. Det vil si at \\(P(d) \\) med  \\(\\mu = \\ln 50 \\) beskriver en lognormal sannsynlighetsfordeling med mediandiameter lik \\(50\\). Har endret definisjon til å samsvare med numpy-definisjonen. Kan hende jeg tenker noe feil her, så dette må kikkes gjennom.

* Bruk Python til å tegne grafen til \\(P(d) \\) for \\(\\mu \\) lik \\(\\ln 100  \\) µm og \\(\\sigma \\) lik \\(\\ln 1,5\\). Biblioteket matplotlib.pyplot og funksjonen matplotlib.pyplot.plot kan være nyttige.

<details>
<summary>Løsningsforslag </summary>
<p>
{% highlight python linenos %}
{% include vis_kode/MA-183/prosjektoppgave7.py %}
{% endhighlight %}
</p>

</details>


* Bruk Python til å trekke et utvalg på 100 partikler fra denne størrelsesfordelingen og lag et histogram som viser resultatet ditt sammen med grafen til \\(P(d)\\). Biblioteket numpy og funksjonene numpy.random.lognormal og matplotlib.pyplot.hist kan være nyttige.

    (Tips: Det kan være en fordel å skalere grafen til \\(P(d) \\) med antallet partikler i utvalget ditt.)

<details>
<summary>Løsningsforslag </summary>
<p>
{% highlight python linenos %}
{% include vis_kode/MA-183/prosjektoppgave8.py %}
{% endhighlight %}
</p>

</details>


* Hvor mange partikler må du trekke for at histogrammet og grafen skal bli passelig like? 10, 100, 1000?

    (Tips: pyplot.hist deler histogrammet inn i 10 søyler med lik bredde. Når du trekker mange partikler kan du øke antallet søyler for å få bedre overensstemmelse med grafen til \\(P(d) \\) ved å gi bins=n som argument til funksjonen. n er her antallet søyler du ønsker.)


<details>
<summary>Løsningsforslag </summary>
<p>
{% highlight python linenos %}
{% include vis_kode/MA-183/prosjektoppgave9.py %}
{% endhighlight %}
</p>

</details>


* Ta et nytt utvalg på 1000 partikler og regn ut terminalhastighetene i vann for disse partiklene. Anta at partiklene har en tetthet på 3,0 g/cm³. Strukturer utvelgelsen av partikler og utregningen av terminalhastigheten som to funksjoner. Presenter resultatene som et histogram.

    Vi skal nå anta at de to partikkeltypene med tetthet 2,5 g/cm³ og 3,5 g/cm³ vi møtte i oppgave 5 har \\(\\mu \\) lik \\(\\ln 80 \\) µm og \\(\\ln 120 \ \\) µm og \\(\\sigma \\) lik \\(\\ln 1,45  \\) og \\( \\ln 1,55\\).

<details>
<summary>Løsningsforslag </summary>
<p>
{% highlight python linenos %}
{% include vis_kode/MA-183/prosjektoppgave10.py %}
{% endhighlight %}
</p>

</details>


* Skriv om koden slik at du får én graf med to histogrammer, et for terminalhastigheten til hver av partikkeltypene. Vurder ut fra grafen hvilken hastighet som bør velges for vannstrømmen for at antallet tunge partikler som kommer ut i bunnen av separatoren skal være så stort som mulig samtidig som antallet lette partikler er så lite som mulig. Er det samsvar mellom dette svaret og svaret i oppgave 6?

    (Tips: pyplot.hist med parameteren bins=n deler histogrammet inn i n søyler med lik bredde. Når du skal lage to histogrammer kan det hende at du ønsker å ha lik bredde på søylene. Med parameteren range = (a, b) kan du bestemme nedre og øvre grense til søylene til histogrammet. Er parameterne bins og range lik for begge histogrammene får du like mange søyler, med samme bredde.)

<details>
<summary>Løsningsforslag </summary>
<p>
{% highlight python linenos %}
{% include vis_kode/MA-183/prosjektoppgave11.py %}
{% endhighlight %}
</p>

</details>

For å få best mulig seperasjon ønsker vi at flest mulig tunge partikler skal komme ut i bunnen, samtidig som flest mulig lette partikler går ut i toppen. 

* Lag to funksjoner,
en funksjon som tar inn en liste med terminalhastigheter og en strømningshastighet og returnerer andelen partikler av denne typen som kommer ut i toppen av separatoren;
en funksjon som tar inn en liste med terminalhastigheter og en strømningshastighet og returnerer andelen partikler av denne typen som kommer ut i bunnen av separatoren.

    - Bruk funksjonene til å tegne grafene til andelen tunge partikler som kommer ut i bunnen som en funksjon av strømningshastigheten og til å tegne andelen lette partikler som kommer ut i toppen som funksjon av strømningshastigheten. 
    - Stemmer resultatene overens med strømningshastigheten du fant i forrige oppgave?


<details>
<summary>Løsningsforslag </summary>
<p>
{% highlight python linenos %}
{% include vis_kode/MA-183/prosjektoppgave12.py %}
{% endhighlight %}
</p>

</details>