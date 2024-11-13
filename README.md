Biglietto del Treno
===
Creazione di sistema per il controllo del prezzo di un biglietto del treno
## Svolgimento
- Ho innanzitutto creato le variabili e le costanti.
- Ho dato alla costante del price una operazione che mi formulava il prezzo (price) di partenza in caso in cui l'età non facesse parte dei range indicati.
- Ho poi creato la variabile dello sconto pari a 0 perchè di partenza lo sconto non è applicato.
- Ho poi creato le due condizioni per le fasce di età, usando gli operatori relazionali. Nelle parentesi graffe ho creato la formula per creare la cifra utile per l'operazione del prezzo scontato finale.
- Per il prezzo scontato finale, ho calcolato il prezzo di partenza in base ai km scelti (price) e l'ho moltiplicato per 1 (rappresenta il 100%) meno la cifra calcolata dalle graffe precedentemente.
- Per far visualizzare il prezzo finale ho usato sempre un prompt, perchè provando con alert o window.confirm, non esce il prezzo.
- Al prezzo nel prompt finale ho dato il metodo .toFixed(2) per far vedere i centesimi nel giusto modo.