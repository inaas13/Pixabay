Inlämningsuppgift 2: Bildsökmotor




Skriv en sökmotor med HTML, CSS och JavaScript som hämtar sina bilder från Pixabay. Exakt utformning och innehåll är upp till er, men ni måste uppfylla följande krav:




Användaren ska kunna skriva in en sökterm samt välja färg på bilderna. Det ska också gå att välja "any color" och se bilder oavsett färg.
Bredvid varje bild ska finnas bildens taggar (bilder på Pixabay har inga titlar) och fotografens namn.
Det ska finnas knappar för "föregående sida" och "nästa sida" för att navigera mellan sökresultaten. Dessa knappar ska inaktiveras när användaren är på första respektive sista sidan.
Sökmotorn ska visa 10 bilder i taget.
Utgå från dokumentationen för Pixabay-API:et för att ta reda på hur API:et används och vad det kan göra.
Ni behöver en API-nyckel för att använda API:et, vilket ni kan få genom att skapa ett Pixabay-konto (eller koppla ett Google/Facebook-konto).
I övrigt gäller samma regler och riktlinjer som i föregående uppgift, exempelvis kring semantisk HTML och responsivitet.
Använd inga bibliotek eller ramverk; enbart er egen kod.



Tips
Svaren från Pixabay-API:et visar enbart hur många bilder som finns totalt (totalHits). För att ta reda på om knappen för "nästa sida" ska inaktiveras måste ni själva hålla koll på hur många bilder/sidor som har visats hittills.
Det finns en vanlig bugg som är lätt att missa. Se till att er applikation inte har följande beteende:
Användaren fyller i söktermen cat, väljer färgen röd och trycker på Sök.
Användaren ser sida 1 med röda katter.
Användaren fyller i söktermen dog och väljer färgen blå, utan att trycka på Sök.
Användaren trycker på Nästa sida.
Användaren ser nu sida 2 med blåa hundar, trots att det egentligen borde vara sida 2 med röda katter.
Samarbete
Denna inlämningsuppgift ska utföras och lämnas in i par.

Betygsättning
Möjliga betyg: G och IG.
