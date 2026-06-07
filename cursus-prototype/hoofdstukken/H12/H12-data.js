// ============================================================
// H12-DATA.JS
// Vaste matrix van oefeningen voor hoofdstuk 12.
// Gebruik bij parameter locatie:'matrix' in bouwVisueel().
//
// Vul deze array in als het hoofdstuk volledig klaar is.
// De data hier komt overeen met de snapshot uit de databank
// op het moment van afsluiten van het hoofdstuk.
//
// Velden per oefening:
//   bestandsnaam : unieke sleutel, zonder .js  (bv. "oe_101001")
//   nr           : volgnummer in het overzicht
//   paragraaf    : bv. "10.1"
//   onderdeel    : bv. "Oefenen!" (leesbare naam)
//   sleutelRaw   : bv. "oefenen" (interne sleutel voor filtering)
//   bladzijde    : paginanummer
//   containerId  : bv. "content-101-oefenen"
//   niveau       : array van niveaus, bv. ["cirkel","vierkant"]
//
// Paragraafnamen (voor de titels in het visuele overzicht):
//   Sleutel = paragraafnummer als string (bv. "10.1")
//   Waarde  = naam van de paragraaf
// ============================================================

export const H12_PARAGRAAF_NAMEN = {
  // !! Vul hier de paragraafnamen in !!
  // "12.1": "Vergelijkingen",
  // "12.2": "Vergelijkingen oplossen",
  // "12.3": "Vraagstukken oplossen met een vergelijking",
};

export const H12_OEFENINGEN = [
  // !! Vul hier de oefeningen in als het hoofdstuk klaar is !!
  // Voorbeeld:
  // {
  //   bestandsnaam: "oe_121001",
  //   nr:           1,
  //   paragraaf:    "12.1",
  //   onderdeel:    "Zo doe je dat!",
  //   sleutelRaw:   "zoeje",
  //   bladzijde:    453,
  //   containerId:  "content-121-zoeje",
  //   niveau:       ["cirkel"],
  // },
];
