---
sidebar_position: 4
---

# Overføringsordrer

Overføringsordrer kan generere både en plukktildeling og en mottakstildeling, som representerer to etapper av en lageroverføring — utgående fra overføringsfra-lokasjonen og inngående til overføringstil-lokasjonen.

## Plukktildeling (utgående etappe)

Plukktildelingen dekker varer som sendes ut fra overføringsfra-lokasjonen.

1. Åpne **Overføringsordren** i Business Central
2. Klikk **Opprett plukktildeling** (i Freja-handlingsgruppen)
3. Systemet oppretter en plukktildeling for varer som sendes fra overføringsfra-lokasjonen
4. Følg samme eksport- og bekreftelsesprosess som for [plukktildelinger fra salgsordrer](../pick-assignments)

## Mottakstildeling (inngående etappe)

Mottakstildelingen dekker varer som mottas til overføringstil-lokasjonen.

1. Fra den samme overføringsordren, klikk **Opprett mottakstildeling**
2. Systemet oppretter en mottakstildeling for varer som mottas til overføringstil-lokasjonen
3. Følg samme eksport- og bekreftelsesprosess som for [mottakstildelinger fra bestillinger](../receipt-assignments)

En enkelt overføringsordre kan ha både en plukktildeling og en mottakstildeling aktive samtidig, som representerer begge etappene av overføringen uavhengig av hverandre. Dette gjelder kun når både overføringsfra-lokasjonen og overføringstil-lokasjonen er kartlagt til Freja-lokasjoner.
