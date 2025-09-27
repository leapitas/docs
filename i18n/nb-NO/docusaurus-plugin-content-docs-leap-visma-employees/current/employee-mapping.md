# Mapping av ansatte og ressurser
Dersom det allerede er ansatte og ressurser i Business Central, så kan man mappe disse mot ansatte i Visma for å unngå duplikater i Business Central.

:::warning Viktig tidspunkt
For å unngå duplikater må dette utføres **før** man importerer ansatte fra Visma første gang.
:::

## Åpne mappingfunksjonen

### Via oppsettet
1. **Søk etter** og åpne **"Oppsett for Visma ansattimport"**
2. Klikk på **"Ansattmapping"** for å åpne skjermbildet for mapping av ansatte og ressurser

## Automatisk mappingforslag

### Opprett forslag for tilordning
Ved å trykke på **"Opprett forslag for tilordning"** vil:
- **Ansatte og ressurser** i Business Central sammenlignes med ansatte fra Visma
- **Sammenligning** gjøres på personnummer eller navn
- **Gyldige treff** får automatisk krysset av **"Aksepter match"**
- **Matchede data** indikeres med **grønn farge**

### Automatisk matching-kriterier
Systemet søker etter treff basert på:
1. **Personnummer** (mest pålitelig)
2. **Fullt navn** (fornavn + etternavn)

## Manuell tilordning

### For data uten automatisk match
Dersom det er ansatte eller ressurser som ikke har fått automatisk mapping:

1. **Fyll ut manuelt** feltene for:
   - **Foreslått ansattnr.** - Business Central ansattnummer
   - **Foreslått ressursnr.** - Business Central ressursnummer

2. **Kryss av** i feltet **"Aksepter match"**

:::info Krav for aksept
Det er krav til at **enten** "Foreslått ansattnr." **eller** "Foreslått ressursnr." har en verdi før man kan krysse av for "Aksepter match".
:::

### Aksepter tilordning
Når forslaget er ferdig utarbeidet:
1. **Kontroller** alle tilordninger
2. **Klikk** på **"Aksepter tilordning"**
3. **Data i Business Central** vil da bli knyttet til data i Visma
4. **Import av ansatte** kan nå utføres uten duplikater