# Cursus Wiskunde — Projectsamenvatting

## Overzicht

Je bouwt een interactieve digitale cursus wiskunde (hoofdstuk 10: Rekenen met letters) die ook afdrukbaar is. De cursus bestaat uit een mappenstructuur met een hoofdstructuurbestand, stijlen, helpers en aparte JS-bestanden per oefening.

---

## Mappenstructuur

```
cursus-prototype/
├── H10_structuur.html        ← hoofdstructuur van het hoofdstuk
├── css/
│   └── cursus.css            ← alle stijlen
├── js/
│   └── helpers.js            ← alle hulpfuncties
└── hoofdstukken/
    └── H10/
        ├── P10_1/            ← oefeningen paragraaf 1
        ├── P10_2/            ← oefeningen paragraaf 2
        ├── P10_3/            ← oefeningen paragraaf 3
        ├── P10_4/            ← oefeningen paragraaf 4
        └── afbeeldingen/     ← SVG-bestanden
```

---

## Kernbestanden

### H10_structuur.html
- Bevat de volledige structuur van het hoofdstuk
- Twee lay-outsystemen schakelbaar via `const LAYOUT_SYSTEEM = 1 of 2`
- Systeem 1: doorlopend document (digitaal gebruik)
- Systeem 2: pagina's met paginanummers en marges (voor afdruk)
- Beginpaginanummer instelbaar via `const EERSTE_PAGINA = 453`
- Oefeningen laden via `laadOefeningen('#container-id', ['pad/naar/oefening.js'])`
- Paginawissels via `nieuwePagina()` of `forceerPaginawissel()`
- Structuurelementen via `voegBannerToe()`, `voegParagraafToe()`, `voegOnderdeelToe()`, `voegContentToe()`, `voegTheorieToe()`, `voegHoeVerStaIkTekstToe()`, `voegLijstToe()`, `witregel()`
- Zwevend navigatiepaneel onderaan (systeem 2)
- Vullingsbalk rechts in de marge toont hoe vol een pagina is (groen/oranje/rood)
- `/* BEGIN VANAF HIER MET TELLEN */` markering voor paginaberekening

### cursus.css
- CSS-variabelen voor kleuren, fonts, marges, afmetingen
- Stijlen voor pagina, oefeningen, banners, paragrafen, onderdelen
- Stijlen voor badges, schrijflijnen, oplossingen, breuken, tabellen
- Stijlen voor theorie-kader, hvsi-kader, markering, vullingsbalk
- Print-stijlen met `print-color-adjust: exact`

### helpers.js
- `maakOefening(config)` — maakt een oefening aan met badge, marge, toggle
- `voegTekstToe(container, tekst, klasses)` — voegt tekst toe
- `maakBreuk(teller, noemer, stijl)` — maakt een HTML-breuk
- `maakOefTabel(container, kolommen, metLijn)` — maakt een oefentabel
- `maakSlTd(oplossing, breuk)` — td met schrijflijn
- `maakSlTdZonderInsprong(oplossing, breuk)` — td met schrijflijn zonder tab
- `maakOpTd(label, tekst, breedte, breuk, oplossing)` — td met label en schrijflijn
- `maakOpTdaz(label, tekst, breuk)` — td met label zonder schrijflijn
- `maakOpTdazExtra(label, tekst, extraTekst, breedte, breuk)` — td met label, tekst en extra tekst
- `maakSamengesteldeTd(label, tekst, breedte, subblokken, breuk)` — td met samengestelde oplossing
- `maakZichtbareTabel(container, rijen, kolommen, opties)` — maakt een zichtbare tabel
- `pasRandenAan(tabel, config)` — past randen van een tabel aan
- `maakGelijkheidMetNummer(tekst, nummer)` — gelijkheidsteken met nummer erboven
- `maakParabool(container, opties)` — tekent een parabool als SVG overlay
- `maakMarkering(tekst, kleur, toggle)` — markeerstift-achtergrond
- `maakOnderstreping(inhoud, stijl, diepte, toggle, hoogte)` — onderstreping (enkel/dubbel/golf)
- `maakTerm(stukken, onderstrepingStijl, diepte)` — term met optionele onderstreping
- `zetOmNaarOpl(inhoud)` — zet inhoud om naar oplossingenlaag
- `htmlSpan(html)` — maakt een span met HTML-inhoud
- `maakSpanBreedte(breedte, inhoud)` — span met vaste breedte
- `voegLijstToe(container, type, insprong, gap, items)` — bullet- of streepjeslijst
- `wiskundeNaarHTML(tekst)` — zet wiskundetekst om naar HTML met cursieve letters
- `laadOefeningen(container, bestanden)` — laadt oefeningen dynamisch en sequentieel
- `ACTIEVE_CONTAINER` — globale variabele voor de huidige container
- `OEFENING_TELLER` — automatische nummering van oefeningen

---

## Oefening-bestanden

Elk oefening-bestand is een IIFE (`(function() { ... })()`).

**Soorten:** `inoefenen`, `voorbeeld`, `ontdek`, `test`

**Sjablonen (codegenerators):**
- `helper_voor_sjablonen6.html` — voor oefeningen zonder figuren
- `helper_voor_figuren2.html` — voor oefeningen met figuurcontainers
- `code_helper1.html` — voor termen met onderstrepingen en markeringen
- 'helper_voor_tabellen1.html - voor oefeningen met zichtbare tabellen

**Naamgeving:**
- `oe_102003.js` — gewone oefening
- `_oe_102003.js` — oefening in bewerking
- `p_oe_102003.js` — oefening in bewerking

**Figuurcontainers:**
- SVG-bestanden laden via `fetch()` binnen `requestAnimationFrame()`
- Lagen in SVG verbergen/tonen via toggle (bv. `layer2`, `layer3`)

---

## Hulpbestanden

- `oefeningoverzicht.html` — genereert een overzicht van alle oefeningen met paginanummers; exporteerbaar als CSV

---

## Belangrijke conventies in sjablonen

| Invoer | Resultaat |
|--------|-----------|
| `*x*` | cursief |
| `^2` of `^{2n+1}` | exponent |
| `B1`, `B2` | breuk |
| `$tekst$` | tekst in oplossingenlaag |
| `$B1$` | breuk in oplossingenlaag |
| `['tekst', kleur, toggle]` | markering |
| `£breedte,'tekst'£` | maakSpanBreedte |

---

## Start nieuwe chat

**Wat je best meelevert:**
- `helpers.js` (huidig)
- `cursus.css` (huidig)
- `H10_structuur.html` (huidig)
- Het specifieke oefening-bestand waar je aan werkt

**Wat je best typt:**

> Ik werk aan een project om mijn wiskundecursus te digitaliseren. De cursus bestaat uit een hoofdstructuurbestand (H10_structuur.html), een CSS-bestand (cursus.css) en een helpers-bestand (helpers.js). Oefeningen zijn aparte JS-bestanden die dynamisch geladen worden via laadOefeningen(). Ik lever de relevante bestanden mee. Lees ze eerst door voor je iets doet.
>
> Ik hanteer deze werkwijze:
> 1. Begin pas met code schrijven als ik zeg dat je kan starten.
> 2. Heb je vragen, dan wacht je op mijn antwoord voor je verdergaat.
