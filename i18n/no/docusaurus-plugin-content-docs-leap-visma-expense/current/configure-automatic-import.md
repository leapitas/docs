# Konfigurere automatisk import av reisetransaksjoner

For å sette opp automatisk import av reisetransaksjoner gjør man følgende:

1. I søkemenyen søk på Poster i jobbkø.
2. Trykk Ny for å opprette en ny post.
3. Angi Objekttype som skal kjøres til Codeunit.
4. Angi Objekt-ID som skal kjøres til 86840.
5. Hvis ønskelig gi posten en beskrivelse. Dette kan for eksempel være Automatisk import av reisetransaksjoner fra Visma Expense.
6. Under Gjentakelse, Legg inn hvilke dager den automatiske importen skal kjøres. Hvis du ønsker alle dager huker du av dagene én etter én.
7. Angi Antall minutter mellom kjøringer for å konfigurere hvor ofte importen skal kjøres.

På nåværende tidspunkt importeres transaksjoner én uke bakover i tid. Allerede importerte transaksjoner vil ikke importeres på nytt. Transaksjonene legger seg klart til bokføring i kladd, men brukeren må selv se over kladden og bokføre den. Det anbefales å gå igjennom eventuelle feilmeldinger som kan ha forekommet før man bokfører kladden så man er sikker på at alle transaksjonene er kommet over korrekt. Eventuelle feilmeldinger vises under Importerte reiseregninger. Se fremgangsmåte under «Lese inn importerte transaksjoner på nytt» for hvordan man får opp listen over Importerte reisetransaksjoner.