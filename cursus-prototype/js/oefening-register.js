// ============================================================
// OEFENING-REGISTER.JS
// Lookup-object dat de bestandsnaam van een oefening koppelt
// aan het volgnummer.
// Wordt gevuld bij het inladen van de structuur en gebruikt
// door overzicht-oefening.js om het juiste nummer in te stellen.
// Formaat: { "oe_101001": 1, "oe_101002": 2, ... }
// ============================================================

export const oefeningRegister = {
  _data: {},

  vul(oefeningen) {
    this._data = {};
    oefeningen.forEach(o => {
      this._data[o.bestandsnaam] = o.nr;
    });
  },

  getNummer(bestandsnaam) {
    return this._data[bestandsnaam] ?? 1;
  }
};