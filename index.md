---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

Her finner du en samling av prosjekter gjennomført av André Martiny og Henrik Njølstad. Alle prosjektene er utført ved hjelp av Python.  

For øyeblikket er de delt inn i to kategorier. Den ene kategorien er bruk av Python for å løse matematiske problemer. I alle eksemplene vil koden som er brukt være tilgjengelig. Vi har også gjort det mulig å teste koden som er skrevet. Se eksempel under. 



<details>

<summary>Eksempel: Euklids algoritme </summary>

Under kan du se, og prøve, en algoritme som produserer et løsningsforslag for diofantiske likninger. Løsningen er laget ved hjelp av Euklids algoritme. 

<details>
<summary>Vis kode</summary>

<p>
{% highlight python %}
    import numpy as np

    # Først vil vi ta input x,y,
    # deretter kjøre Euklids algoritme
    # Den skal returnere en matrise med alle liknignene, hvor siste input er gcd(x,y)
    def EM1(x,y):
        r_0 = np.maximum(x,y)  # Vi sorterer
        r_1 = np.minimum(x,y)  # Største tallet av x,y

         ############################################
         ### Algoritmen vil gi oss noe som dette ####
         ####        r_0 = c_1 · r_1  + r_2      ####
         ####        r_1 = c_2 · r_2  + r_3      ####
         #                     .                    #
         #                     .                    #
         #                     .                    #
         #                     .                    #
         ####   r_10 = c_11 · r_11 + gcd(x,y)    ####
         #### hvis algoritmen bruker 10 steg     ####
         ############################################

        # Lager første entry r_0, c_1, r_1, r_2, som tilsvarer første likning
        # merk at r_0 og r_1 er x og y etter sortering.
        c_1 = int(np.floor(r_0/r_1)) # c_1 finner vi ved å dele r_0 på r_1 og runde ned til nærmeste heltall. Dette kan vi gjøre med numpy.floor funksjonen
        # rest etter divisjon kan vi nå finne ved å ta r_0-c_1*r_1
        r_2 = int(r_0-c_1*r_1) # rest etter divisjon får vi ved r_0-c_1r_1
        likninger = [[r_0, c_1, r_1, r_2]] # Nå legger vi alle fire verdiene inn i matrisen vår

        # Vi ønsker nå å skrive
        # r_1 = c_2 · r_2 + r_3
        # r_2 = c_3 · r_3 + r_4 osv
        # Dette ønsker vi å gjøre til restverdien til slutt er gcd(x,y)
        # Vi kan finne alle verdiene på samme måte som over
        # Ettersom vi ønsker å gjøre samme prosedyre gjentatte ganger
        # fram til vi oppnår ønsket resultat, er en while loop naturlig
        # Vi ønsker altså å kjøre prosedyren til siste entry i vår matrise er gcd(x,y).
        while likninger[-1][-1] != np.gcd(x,y): # Første [-1] sier at vi ser på siste likning i likninger, andre [-1] sier at vi ser på siste entry i likningen
            # Vi skal nå skrive a = c · b + r, hvor a er neste siste entry i forrige tuppel.
            a = likninger[-1][-2]
            b = likninger[-1][-1] # b er resten fra forrige liking, altså siste entry i forrige tuppel.
            c = int(np.floor(a/b)) # Vi finner nå c på samme måte som siste
            r = int(a-c*b) # rest etter divisjon kan vi nå finne ved å ta a-c · b
            likninger.append([a,c,b,r]) # Vi har nå alle verdiene til neste likning og vil legge de til matrisen vår
            # Nå har vi nådd slutten, hvis r == gcd(x,y), vil utsagnet være sant, og loopen brytes
            # Hvis r != gcd(x,y), så kjøres den på nytt
        # Nå som loopen er ferdig og vi har funnet resten har vi en matrise som består av alle likningene vi ville fått ved å gjøre algoritmen manuelt
        # Funksjonen skal nå returnere alle likningene
        return likninger

    ### Her ønsker vi å bruke likningene fra EM1 til å finne en løsning på a*x+b*y = 1
    ### Funksjonen Losning skal gjøre dette
    def Losning(a,b):

        print(" ")
        print("Felles faktor er " + str(np.gcd(a,b)) + ".")
        print(" ")
        matrise = EM1(a,b)
        for tuppel in matrise:
            print(str(tuppel[0]) + " = " + str(tuppel[1]) + " · " + str(tuppel[2]) + " + " + str(tuppel[3]))
            print(" ")
        print("Vi reverserer nå prosessen:")
        print(" ")
        print(" ")
        ############################################
        ####  Funksjonen tar inn noe som dette  ####
        ####        r_0 = c_1 · r_1  + r_2      ####
        ####        r_1 = c_2 · r_2  + r_3      ####
        #                     .                    #
        #                     .                    #
        #                     .                    #
        #                     .                    #
        ####      r_9 = c_10 · r_10 + r_11      ####
        ####      r_10 = c_11 · r_11 + 1        ####
        ####      hvis EM1 bruker 10 steg       ####
        ############################################
        ############################################
        ####       Vi begynner fra bunnen       ####
        ####     1 = 1 · r_10 - c_11 · r_11     ####
        ## 1 = - c_11 · r_9 + (1+c_11*c_10)*r_10  ##
        #                     .                    #  Generell plass i reversering
        #                     .                    #  Bruker likningen,
        ####  1 = c · r_(n) + d · r_(n+1)         ####  r_(n-1) = c_n* r_n + r_(n+1) <==> r_(n+1) = r_(n-1) -c_n* r_n
        ####  1 = d* r_(n-1) + (c+d*(-c_n))*r_n    #  til å finne neste del i reversering
        #                     .                    #
        #                     .                    #
        ####            1 = a* x + b* y         ####
        ############################################
        # Vi ser at første likning kommer direkte fra EM1
        # Vi legger inn dette

        reversering = [[matrise[-1][-1], 1 , matrise[-1][0], -matrise[-1][1], matrise[-1][2]]]
        print(str(reversering[-1][0])
                + " = "
                + str(reversering[-1][1])
                + "·"
                + str(reversering[-1][2])
                + plussminus(reversering[-1][3])
                + str(int(reversering[-1][3]/np.sign(reversering[-1][3])))
                # + " + "
                # + str(reversering[-1][3])
                + "·"
                + str(reversering[-1][4])
                )
        # Ved å se på den generelle overgangen i skissen over, ser vi at vi kan generalisere dette
        for i in range(len(matrise)-1): # Antall ganger vi skal kjøre algoritmen
            # Ønsker nå å legge til nye koeffisientene til matrisen, som vi ser over, skal dette være
            # 1 = d · r_(n-1) + (d+c*(-c_n)) · r_n # Vi ser at
            # 1 = gcd(a,b)
            d           = reversering[-1][-2]
            r_nminus1   = matrise[-i-2][0]
            c           = reversering[-1][1]
            c_n         = matrise[-i-2][1]
            r_n         = matrise[-i-1][0]
            # Dette gir
            reversering.append([matrise[-1][-1], d, r_nminus1,  (c+d*(-c_n)) , r_n])
            # Vi printer dette til terminal for å vise utregningene
            print(str(reversering[-1][0])
                    + " = "
                    + str(c)
                    + "·"
                    + str(r_n)
                    + plussminus(d)
                    + str(int(d/np.sign(d)))
                    + "·("
                    + str(r_nminus1)
                    + " - "
                    + str(c_n)
                    + "·"
                    + str(int(r_n))
                    + ")"
                    )
            print(" ")
            print(str(reversering[-1][0])
                    + " = "
                    + str(int(d))
                    + "·"
                    + str(r_nminus1)
                    + plussminus((c+d*(-c_n)))
                    + str(int((c+d*(-c_n))/np.sign((c+d*(-c_n)))))
                    + "·"
                    + str(int(r_n))
                    )
    while True == True:
        a = input("Skriv inn første tall: ") # vi ønsker input fra bruker
        b = input("Skriv inn andre tall: ")
        try:
            Losning(int(a),int(b))
        except ValueError:
            print("Input må være heltall")
        if str(input("Vil du prøve på nytt? y/n: ")) == "n":
            break
{% endhighlight %}
</p>

</details>



<details >
<summary>Prøv koden</summary>


<div background='black'>
<input type='number' id='tall1' placeholder='Skriv inn første tall' value='1027'  /> <br>
<input type='number' id='tall2' placeholder='Skriv inn andre tall'  value='729' /> 
</div>

<button  class='button button5' style="vertical-align:middle" onclick='losning()'> <span> Kjør </span></button>
<div    >
<p id='svar'> </p>
</div>

</details>



<script>
function euklidsfunc(x,y) {
    var r_0 = parseFloat(math.max(Number(x),Number(y)));
    var r_1 = parseFloat(math.min(Number(x),Number(y)));
    var c_1 = parseFloat(math.floor(r_0/r_1));
    var r_2 = parseFloat(r_0-c_1*r_1);
    var likninger = [[r_0, c_1, r_1, r_2]];
    while (likninger[likninger.length -1][likninger[likninger.length -1].length -1] !== math.gcd(Number(x),Number(y))) {
    var a = likninger[likninger.length -1][likninger[likninger.length -1].length -2];
    var b = likninger[likninger.length -1][likninger[likninger.length -1].length -1];
    var c = math.floor(a/b);
    var r = a-c*b;
    likninger.push([a,c,b,r]);
    }
    return likninger ;
  }
</script>
<script>
function losning() {
  var matrise = euklidsfunc(Number(document.getElementById('tall1').value), Number(document.getElementById('tall2').value));
  var losningstekst = "Løsningen er \n \n";
  var i=0;
  for (tuppel of matrise) {
    losningstekst += "\\begin{multline*} " + String(tuppel[0]) + " = " + String(tuppel[1])+ "·" + String(tuppel[2]) + " + " + String(tuppel[3]) + " \\end{multline*} \n \n";
  }
  losningstekst += "\n\n Vi reverserer nå prosessen:";
  var reversering = [
                    [
                    matrise[matrise.length-1][matrise[matrise.length-1].length-1],
                    1,
                    matrise[matrise.length-1][0],
                    -matrise[matrise.length-1][1],
                    matrise[matrise.length-1][2]
                    ]
                    ];
  var lr = reversering[reversering.length-1]
  losningstekst += "\\begin{multline*}"
                    + String(lr[0])
                    + " = "
                    + String(lr[1])
                    + "·"
                    + String(lr[2])
                    + " + "
                    + String(lr[3])
                    + "·"
                    + String(lr[4])
                    + "\\end{multline*}";
  var i = 0
  for (i= 0; i< matrise.length-1; i++) {
      var lr = reversering[reversering.length-1];
      var d = lr[lr.length-2];
      var r_nminus1 = matrise[matrise.length-i-2][0];
      var c = lr[1];
      var c_n = matrise[matrise.length-i-2][1];
      var r_n = matrise[matrise.length-i-1][0];
      reversering.push(
          [matrise[matrise.length-1][matrise[matrise.length-1].length-1],
          d,
          r_nminus1,
          (c+d*(-c_n)),
          r_n
          ]
          );
      losningstekst += "\\begin{multline*}"
                        + String(lr[0])
                        + " = "
                        + String(c)
                        + "·"
                        + String(r_n)
                        + " + "
                        + String(d)
                        + "·("
                        + String(r_nminus1)
                        + " - "
                        + String(c_n)
                        + "·"
                        + String(r_n)
                        + ") \\end{multline*}"
                        + "\n \n"
                        + "\\begin{multline*}"
                        + String(lr[0])
                        + " = "
                        + String(d)
                        + "·"
                        + String(r_nminus1)
                        + " + "
                        + String(reversering[reversering.length -1][reversering[reversering.length-1].length-2])
                        + "·"
                        + String(r_n)
                        + "\\end{multline*}"
                    }
  document.getElementById('svar').innerHTML = losningstekst;
  MathJax.typeset();
}
</script>

</details>  

<br>


[Herons Metode]({% post_url Herons-Metode/2020-01-01-Herons %})

[Euklids algoritme]({% post_url Euklids-Algoritme/2020-01-01-Euklid %})

De resterende prosjektene har gått ut på å lage animasjoner ved hjelp av Python og programmet Processing.py. 
FIXME: LENKE TIL IKKEEKSISTERENDE SIDE OVER ANIMASJONER HER

Under kan du se noen av animasjonene. Ved å klikke(FIXME) på bildene blir du sendt til siden hvor vi gjennomgår hvordan du kan se koden som ligger bak, og steg for steg hvordan de er bygd opp.


<iframe src="https://editor.p5js.org/AndreMartiny/embed/eJo1yPbmP" idth="100" height="100" frameBorder="0"></iframe>


<img src="/assets/images/Rullende-sirkler/output.gif" width="50%"><img src="/assets/images/Rullende-sirkler/utenstoy.gif" width="50%">
<img src="/assets/images/sinusgraf/output.gif" width="100%">


[Sirkler?]({% post_url P5JS/2020-09-30-ex %})

[Sortering]({% post_url P5JS/2020-09-30-P5JS %})

