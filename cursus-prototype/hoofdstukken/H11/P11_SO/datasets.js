const datasets = {
  "Leerling_1": {
    vraag: "Hoeveel huisdieren heb je?",
    variabele1: "aantal huisdieren dat je hebt",
    variabele2: "aantal huisdieren",
    data: [4, 0, 1, 4, 1, 5, 2, 2, 5, 2, 4, 5, 0, 4, 1, 10, 4, 1, 2, 5]
  },
  "Leerling_2": {
    vraag: "Hoeveel minuten per dag besteed je aan gamen?",
    variabele1: "tijd die je per dag besteedt aan gamen",
    variabele2: "gametijd",
    data: [150, 90, 0, 0, 5, 100, 1, 90, 30, 20, 0, 30, 0, 0, 20, 100, 30, 0, 0, 5]
  },
  "Leerling_3": {
    vraag: "Hoeveel vakken vind je leuk op school?",
    variabele1: "aantal vakken dat je leuk vindt",
    variabele2: "aantal vakken",
    data: [5, 3, 3, 4, 7, 5, 7, 2, 3, 5, 7, 5, 2, 5, 1, 4, 6, 4, 2, 1]
  },
  "Leerling_4": {
    vraag: "Hoeveel dagen per week help je thuis in het huishouden?",
    variabele1: "aantal dagen per week dat je helpt in het huishouden",
    variabele2: "aantal dagen",
    data: [5, 1, 1, 2, 7, 6, 7, 7, 7, 7, 2, 4, 7, 7, 7, 3, 7, 7, 1, 5]
  },
  "Leerling_5": {
    vraag: "Hoeveel kinderen telt je gezin?",
    variabele1: "aantal kinderen je gezin telt",
    variabele2: "aantal kinderen",
    data: [1, 2, 2, 2, 2, 1, 2, 2, 2, 3, 2, 2, 5, 3, 3, 2, 2, 3, 5, 5]
  },
  "Leerling_6": {
    vraag: "Hoeveel kinderen telt je gezin?",
    variabele1: "aantal kinderen je gezin telt",
    variabele2: "aantal kinderen",
    data: [5, 5, 1, 5, 1, 2, 4, 2, 3, 1, 1, 2, 2, 3, 3, 2, 4, 2, 2, 3]
  },
  "Leerling_7": {
    vraag: "Hoeveel minuten doe je erover om naar school te komen?",
    variabele1: "tijd die nodig is om naar school te komen",
    variabele2: "fietstijd",
    data: [30, 20, 10, 15, 12, 45, 45, 20, 30, 12, 20, 30, 28, 13, 30, 40, 28, 30, 38, 30]
  },
  "Leerling_8": {
    vraag: "Hoeveel kinderen telt je gezin?",
    variabele1: "aantal kinderen je gezin telt",
    variabele2: "aantal kinderen",
    data: [3, 2, 1, 2, 1, 3, 4, 3, 2, 3, 2, 1, 2, 1, 4, 2, 3, 3, 2, 2]
  },
  "Leerling_9": {
    vraag: "Hoeveel keer per week eet je fastfood?",
    variabele1: "aantal keer per week dat je fastfood eet",
    variabele2: "aantal keer fastfood",
    data: [0, 0, 0, 1, 1, 2, 0, 0, 1, 0, 0, 3, 1, 0, 1, 1, 1, 0, 0, 1]
  },
  "Leerling_10": {
    vraag: "Hoeveel keer ben je dit schooljaar te laat gekomen?",
    variabele1: "aantal keer dat je dit schooljaar te laat bent",
    variabele2: "aantal keer te laat",
    data: [1, 1, 0, 10, 1, 1, 1, 2, 0, 0, 1, 0, 4, 0, 0, 2, 1, 0, 1, 1]
  },
  "Leerling_11": {
    vraag: "Hoeveel dagen per week doe je aan sport?",
    variabele1: "aantal dagen per week dat je aan sport doet",
    variabele2: "aantal dagen",
    data: [4, 4, 2, 3, 4, 0, 2, 3, 1, 4, 5, 3, 3, 5, 3, 3, 6, 0, 4, 5]
  },
  "Leerling_12": {
    vraag: "Hoeveel keer per week eet je fruit?",
    variabele1: "aantal keer per week dat je fruit eet",
    variabele2: "aantal stukken fruit",
    data: [5, 6, 5, 13, 4, 5, 5, 11, 14, 6, 1, 4, 14, 7, 14, 1, 5, 1, 7, 7]
  },
  "Leerling_13": {
    vraag: "Hoeveel dagen per week help je thuis in het huishouden?",
    variabele1: "aantal dagen per week dat je helpt in het huishouden",
    variabele2: "aantal dagen",
    data: [5, 7, 3, 7, 4, 3, 1, 2, 3, 5, 6, 7, 4, 7, 4, 2, 4, 7, 3, 5]
  },
  "Leerling_14": {
    vraag: "Hoeveel keer per week eet je fastfood?",
    variabele1: "aantal keer per week dat je fastfood eet",
    variabele2: "aantal keer fastfood",
    data: [0, 5, 0, 1, 1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2]
  },
  "Leerling_15": {
    vraag: "Hoeveel boeken lees je per jaar (ongeveer)?",
    variabele1: "aantal boeken dat je per jaar leest",
    variabele2: "aantal boeken",
    data: [3, 1, 6, 3, 4, 12, 20, 4, 20, 3, 6, 35, 11, 2, 11, 3, 5, 1, 2, 5]
  },
  "Leerling_16": {
    vraag: "Hoeveel uur schermtijd heb je thuis per dag?",
    variabele1: "schermtijd per dag",
    variabele2: "schermtijd",
    data: [2, 2, 2, 2, 2, 3, 2, 1, 2, 2, 3, 2, 2, 2, 2, 2, 4, 3, 1, 1]
  },
  "Leerling_17": {
    vraag: "Hoeveel uur schermtijd heb je thuis per dag?",
    variabele1: "schermtijd per dag",
    variabele2: "schermtijd",
    data: [2, 3, 1, 2, 3, 1, 2, 3, 2, 2, 3, 5, 2, 1, 2, 2, 3, 2, 2, 2]
  },
  "Leerling_18": {
    vraag: "Hoeveel minuten per dag besteed je aan gamen?",
    variabele1: "tijd die je per dag besteedt aan gamen",
    variabele2: "gametijd",
    data: [30, 180, 4, 30, 0, 150, 10, 15, 0, 0, 20, 30, 0, 0, 10, 5, 20, 45, 0, 5]
  },
  "Leerling_19": {
    vraag: "Hoeveel boeken lees je per jaar (ongeveer)?",
    variabele1: "aantal boeken dat je per jaar leest",
    variabele2: "aantal boeken",
    data: [2, 4, 2, 1, 3, 12, 6, 3, 2, 3, 11, 1, 1, 3, 3, 3, 2, 2, 18, 4]
  },
  "Leerling_20": {
    vraag: "Hoeveel boeken lees je per jaar (ongeveer)?",
    variabele1: "aantal boeken dat je per jaar leest",
    variabele2: "aantal boeken",
    data: [2, 5, 1, 20, 20, 10, 4, 5, 2, 12, 2, 18, 6, 10, 18, 5, 1, 3, 3, 5]
  },
  "Leerling_21": {
    vraag: "Hoeveel vakken vind je leuk op school?",
    variabele1: "aantal vakken dat je leuk vindt",
    variabele2: "aantal vakken",
    data: [3, 4, 3, 3, 1, 3, 2, 5, 5, 3, 7, 4, 4, 2, 2, 1, 6, 0, 5, 1]
  },
  "Leerling_22": {
    vraag: "Hoeveel minuten per dag besteed je aan huiswerk?",
    variabele1: "tijd die je besteedt aan huiswerk per dag",
    variabele2: "huiswerktijd",
    data: [25, 30, 100, 120, 181, 120, 25, 70, 70, 60, 200, 120, 60, 200, 70, 90, 4, 60, 120, 100]
  },
  "Leerling_23": {
    vraag: "Hoeveel huisdieren heb je?",
    variabele1: "aantal huisdieren dat je hebt",
    variabele2: "aantal huisdieren",
    data: [0, 2, 8, 3, 0, 5, 3, 0, 0, 4, 8, 1, 1, 1, 1, 0, 0, 5, 5, 1]
  },
  "Leerling_24": {
    vraag: "Hoeveel keer per week eet je fastfood?",
    variabele1: "aantal keer per week dat je fastfood eet",
    variabele2: "aantal keer fastfood",
    data: [1, 1, 2, 1, 2, 1, 0, 1, 1, 1, 2, 0, 1, 0, 2, 0, 2, 1, 1, 0]
  },
  "Leerling_25": {
    vraag: "Hoeveel uur slaap je gemiddeld per nacht?",
    variabele1: "tijd die je slaapt per nacht",
    variabele2: "slaaptijd",
    data: [9, 10, 9, 10, 8, 10, 8, 8, 7, 7, 8, 10, 9, 9, 9, 10, 10, 8, 9, 10]
  },
  "Leerling_26": {
    vraag: "Hoeveel keer per week eet je fruit?",
    variabele1: "aantal keer per week dat je fruit eet",
    variabele2: "aantal stukken fruit",
    data: [1, 7, 7, 6, 4, 7, 5, 2, 4, 3, 1, 6, 1, 3, 15, 7, 5, 10, 4, 14]
  },
  "Leerling_27": {
    vraag: "Hoeveel huisdieren heb je?",
    variabele1: "aantal huisdieren dat je hebt",
    variabele2: "aantal huisdieren",
    data: [1, 0, 1, 1, 2, 0, 0, 1, 1, 3, 1, 0, 4, 2, 3, 8, 1, 2, 0, 2]
  },
  "Leerling_28": {
    vraag: "Hoeveel minuten per dag luister je naar muziek?",
    variabele1: "tijd die je per dag naar muziek luistert",
    variabele2: "luistertijd",
    data: [0, 150, 30, 120, 120, 0, 20, 0, 0, 55, 60, 55, 100, 120, 1, 15, 60, 0, 0, 30]
  },
  "Leerling_29": {
    vraag: "Hoeveel minuten per dag besteed je aan gamen?",
    variabele1: "tijd die je per dag besteedt aan gamen",
    variabele2: "gametijd",
    data: [60, 100, 0, 30, 0, 0, 5, 0, 150, 0, 0, 80, 30, 0, 3, 30, 20, 5, 30, 0]
  },
  "Leerling_30": {
    vraag: "Hoeveel dagen per week doe je aan sport?",
    variabele1: "aantal dagen per week dat je aan sport doet",
    variabele2: "aantal dagen",
    data: [5, 1, 4, 3, 4, 1, 4, 5, 4, 5, 3, 4, 3, 1, 2, 6, 0, 3, 5, 2]
  },
  "Leerling_31": {
    vraag: "Hoeveel kinderen telt je gezin?",
    variabele1: "aantal kinderen je gezin telt",
    variabele2: "aantal kinderen",
    data: [3, 2, 1, 5, 4, 2, 3, 2, 2, 5, 2, 5, 4, 2, 2, 1, 4, 1, 3, 2]
  },
  "Leerling_32": {
    vraag: "Hoeveel huisdieren heb je?",
    variabele1: "aantal huisdieren dat je hebt",
    variabele2: "aantal huisdieren",
    data: [2, 5, 7, 1, 1, 3, 0, 13, 2, 1, 3, 0, 0, 5, 4, 1, 1, 0, 9, 13]
  },
  "Leerling_33": {
    vraag: "Hoeveel keer ben je dit schooljaar te laat gekomen?",
    variabele1: "aantal keer dat je dit schooljaar te laat bent",
    variabele2: "aantal keer te laat",
    data: [0, 1, 0, 0, 0, 0, 1, 0, 1, 2, 7, 1, 2, 0, 1, 1, 0, 10, 1, 0]
  },
  "Leerling_34": {
    vraag: "Hoeveel uur schermtijd heb je thuis per dag?",
    variabele1: "schermtijd per dag",
    variabele2: "schermtijd",
    data: [1, 2, 3, 2, 2, 2, 2, 2, 2, 1, 1, 2, 3, 2, 1, 3, 0, 2, 2, 3]
  },
  "Leerling_35": {
    vraag: "Hoeveel huisdieren heb je?",
    variabele1: "aantal huisdieren dat je hebt",
    variabele2: "aantal huisdieren",
    data: [8, 5, 4, 2, 5, 5, 5, 9, 3, 3, 0, 4, 0, 1, 2, 1, 0, 5, 1, 3]
  },
  "Leerling_36": {
    vraag: "Hoeveel minuten doe je erover om naar school te komen?",
    variabele1: "tijd die nodig is om naar school te komen",
    variabele2: "fietstijd",
    data: [5, 35, 35, 50, 20, 2, 10, 15, 50, 15, 50, 30, 30, 10, 35, 40, 30, 45, 15, 35]
  },
  "Leerling_37": {
    vraag: "Hoeveel keer per week eet je fruit?",
    variabele1: "aantal keer per week dat je fruit eet",
    variabele2: "aantal stukken fruit",
    data: [7, 15, 2, 5, 7, 7, 6, 7, 14, 12, 8, 1, 2, 10, 6, 5, 1, 7, 7, 2]
  },
  "Leerling_38": {
    vraag: "Hoeveel keer ben je dit schooljaar te laat gekomen?",
    variabele1: "aantal keer dat je dit schooljaar te laat bent",
    variabele2: "aantal keer te laat",
    data: [19, 0, 0, 13, 0, 1, 0, 15, 1, 4, 0, 0, 10, 0, 1, 0, 1, 1, 0, 2]
  },
  "Leerling_39": {
    vraag: "Hoeveel boeken lees je per jaar (ongeveer)?",
    variabele1: "aantal boeken dat je per jaar leest",
    variabele2: "aantal boeken",
    data: [2, 5, 3, 4, 10, 8, 20, 5, 35, 2, 1, 1, 2, 1, 6, 1, 3, 3, 1, 4]
  },
  "Leerling_40": {
    vraag: "Hoeveel minuten per dag besteed je aan huiswerk?",
    variabele1: "tijd die je besteedt aan huiswerk per dag",
    variabele2: "huiswerktijd",
    data: [100, 1, 50, 80, 2, 60, 1, 100, 120, 100, 30, 50, 80, 40, 70, 100, 80, 60, 30, 100]
  },
  "Leerling_41": {
    vraag: "Hoeveel vakken vind je leuk op school?",
    variabele1: "aantal vakken dat je leuk vindt",
    variabele2: "aantal vakken",
    data: [4, 1, 5, 3, 3, 3, 0, 3, 5, 2, 5, 3, 2, 4, 4, 3, 4, 10, 1, 8]
  },
  "Leerling_42": {
    vraag: "Hoeveel huisdieren heb je?",
    variabele1: "aantal huisdieren dat je hebt",
    variabele2: "aantal huisdieren",
    data: [0, 1, 2, 1, 5, 1, 6, 1, 8, 5, 1, 0, 2, 0, 2, 4, 4, 1, 1, 3]
  },
  "Leerling_43": {
    vraag: "Hoeveel minuten per dag luister je naar muziek?",
    variabele1: "tijd die je per dag naar muziek luistert",
    variabele2: "luistertijd",
    data: [20, 0, 100, 3, 100, 100, 125, 0, 120, 20, 100, 120, 90, 60, 100, 180, 60, 120, 60, 75]
  },
  "Leerling_44": {
    vraag: "Hoeveel keer per week eet je fruit?",
    variabele1: "aantal keer per week dat je fruit eet",
    variabele2: "aantal stukken fruit",
    data: [4, 7, 20, 4, 8, 7, 12, 6, 7, 5, 12, 6, 7, 7, 6, 7, 1, 14, 7, 1]
  },
  "Leerling_45": {
    vraag: "Hoeveel minuten per dag luister je naar muziek?",
    variabele1: "tijd die je per dag naar muziek luistert",
    variabele2: "luistertijd",
    data: [20, 30, 30, 100, 90, 30, 120, 60, 30, 30, 0, 0, 30, 30, 120, 27, 90, 60, 50, 180]
  },
  "Leerling_46": {
    vraag: "Hoeveel uur slaap je gemiddeld per nacht?",
    variabele1: "tijd die je slaapt per nacht",
    variabele2: "slaaptijd",
    data: [10, 5, 9, 9, 5, 8, 8, 10, 6, 8, 9, 10, 11, 8, 9, 6, 9, 9, 8, 5]
  },
  "Leerling_47": {
    vraag: "Hoeveel minuten per dag besteed je aan huiswerk?",
    variabele1: "tijd die je besteedt aan huiswerk per dag",
    variabele2: "huiswerktijd",
    data: [60, 60, 3, 60, 60, 150, 40, 60, 75, 100, 30, 75, 45, 120, 60, 75, 60, 60, 60, 50]
  },
  "Leerling_48": {
    vraag: "Hoeveel kinderen telt je gezin?",
    variabele1: "aantal kinderen je gezin telt",
    variabele2: "aantal kinderen",
    data: [1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 1, 2, 4, 7, 2, 2, 2, 5, 5, 2]
  },
  "Leerling_49": {
    vraag: "Hoeveel keer per week eet je fastfood?",
    variabele1: "aantal keer per week dat je fastfood eet",
    variabele2: "aantal keer fastfood",
    data: [2, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 2, 1, 5, 2, 1, 0, 0]
  },
  "Leerling_50": {
    vraag: "Hoeveel dagen per week doe je aan sport?",
    variabele1: "aantal dagen per week dat je aan sport doet",
    variabele2: "aantal dagen",
    data: [7, 0, 2, 4, 2, 4, 2, 4, 0, 5, 1, 3, 3, 3, 5, 2, 6, 7, 1, 1]
  },
  "Leerling_51": {
    vraag: "Hoeveel dagen per week doe je aan sport?",
    variabele1: "aantal dagen per week dat je aan sport doet",
    variabele2: "aantal dagen",
    data: [4, 5, 3, 2, 5, 3, 6, 1, 5, 4, 1, 1, 5, 3, 1, 5, 3, 3, 3, 2]
  },
  "Leerling_52": {
    vraag: "Hoeveel boeken lees je per jaar (ongeveer)?",
    variabele1: "aantal boeken dat je per jaar leest",
    variabele2: "aantal boeken",
    data: [3, 2, 1, 3, 0, 5, 2, 8, 2, 2, 5, 8, 3, 10, 10, 6, 4, 6, 5, 6]
  },
  "Leerling_53": {
    vraag: "Hoeveel keer per week eet je fastfood?",
    variabele1: "aantal keer per week dat je fastfood eet",
    variabele2: "aantal keer fastfood",
    data: [1, 1, 1, 1, 1, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1]
  },
  "Leerling_54": {
    vraag: "Hoeveel keer ben je dit schooljaar te laat gekomen?",
    variabele1: "aantal keer dat je dit schooljaar te laat bent",
    variabele2: "aantal keer te laat",
    data: [0, 1, 0, 0, 0, 0, 4, 3, 2, 2, 0, 2, 1, 0, 2, 1, 0, 0, 0, 1]
  },
  "Leerling_55": {
    vraag: "Hoeveel dagen per week ga je met de fiets naar school?",
    variabele1: "aantal dagen met fiets naar school",
    variabele2: "aantal dagen",
    data: [5, 5, 3, 5, 5, 5, 2, 5, 3, 5, 5, 5, 5, 5, 5, 5, 3, 5, 0, 5]
  },
  "Leerling_56": {
    vraag: "Hoeveel minuten per dag besteed je aan huiswerk?",
    variabele1: "tijd die je besteedt aan huiswerk per dag",
    variabele2: "huiswerktijd",
    data: [50, 80, 120, 200, 60, 60, 50, 120, 180, 50, 30, 70, 60, 60, 25, 40, 80, 80, 120, 60]
  },
  "Leerling_57": {
    vraag: "Hoeveel dagen per week help je thuis in het huishouden?",
    variabele1: "aantal dagen per week dat je helpt in het huishouden",
    variabele2: "aantal dagen",
    data: [5, 0, 6, 1, 4, 7, 7, 1, 6, 5, 2, 4, 3, 5, 2, 2, 7, 2, 2, 5]
  },
  "Leerling_58": {
    vraag: "Hoeveel minuten per dag besteed je aan gamen?",
    variabele1: "tijd die je per dag besteedt aan gamen",
    variabele2: "gametijd",
    data: [0, 0, 100, 15, 0, 15, 30, 10, 30, 50, 20, 20, 80, 0, 30, 0, 30, 10, 0, 60]
  },
  "Leerling_59": {
    vraag: "Hoeveel vakken vind je leuk op school?",
    variabele1: "aantal vakken dat je leuk vindt",
    variabele2: "aantal vakken",
    data: [4, 1, 1, 1, 5, 2, 2, 3, 2, 1, 3, 3, 2, 1, 1, 1, 4, 0, 4, 10]
  },
  "Leerling_60": {
    vraag: "Hoeveel dagen per week doe je aan sport?",
    variabele1: "aantal dagen per week dat je aan sport doet",
    variabele2: "aantal dagen",
    data: [2, 5, 4, 2, 4, 2, 5, 2, 3, 4, 5, 3, 6, 5, 7, 6, 3, 4, 5, 3]
  },
  "Leerling_61": {
    vraag: "Hoeveel minuten doe je erover om naar school te komen?",
    variabele1: "tijd die nodig is om naar school te komen",
    variabele2: "fietstijd",
    data: [50, 7, 20, 10, 15, 20, 7, 15, 25, 10, 7, 20, 20, 8, 40, 5, 20, 10, 20, 15]
  },
  "Leerling_62": {
    vraag: "Hoeveel minuten per dag luister je naar muziek?",
    variabele1: "tijd die je per dag naar muziek luistert",
    variabele2: "luistertijd",
    data: [0, 120, 0, 20, 90, 1, 120, 0, 90, 180, 30, 0, 1, 60, 55, 50, 60, 20, 60, 20]
  },
  "Leerling_63": {
    vraag: "Hoeveel minuten per dag besteed je aan gamen?",
    variabele1: "tijd die je per dag besteedt aan gamen",
    variabele2: "gametijd",
    data: [30, 60, 0, 30, 10, 100, 20, 15, 30, 30, 30, 15, 10, 0, 0, 5, 80, 0, 0, 0]
  },
  "Leerling_64": {
    vraag: "Hoeveel minuten per dag besteed je aan gamen?",
    variabele1: "tijd die je per dag besteedt aan gamen",
    variabele2: "gametijd",
    data: [30, 0, 100, 4, 180, 30, 10, 30, 0, 0, 0, 60, 0, 30, 20, 30, 0, 30, 10, 30]
  },
  "Leerling_65": {
    vraag: "Hoeveel dagen per week ga je met de fiets naar school?",
    variabele1: "aantal dagen met fiets naar school",
    variabele2: "aantal dagen",
    data: [5, 5, 5, 5, 5, 5, 2, 2, 0, 5, 5, 1, 0, 5, 5, 5, 5, 5, 5, 5]
  },
  "Leerling_66": {
    vraag: "Hoeveel minuten per dag luister je naar muziek?",
    variabele1: "tijd die je per dag naar muziek luistert",
    variabele2: "luistertijd",
    data: [60, 27, 15, 0, 180, 0, 0, 100, 90, 30, 40, 20, 15, 30, 0, 100, 40, 0, 20, 30]
  },
  "Leerling_67": {
    vraag: "Hoeveel vakken vind je leuk op school?",
    variabele1: "aantal vakken dat je leuk vindt",
    variabele2: "aantal vakken",
    data: [4, 5, 8, 1, 3, 4, 2, 1, 4, 4, 4, 4, 3, 2, 3, 4, 7, 1, 4, 1]
  },
  "Leerling_68": {
    vraag: "Hoeveel boeken lees je per jaar (ongeveer)?",
    variabele1: "aantal boeken dat je per jaar leest",
    variabele2: "aantal boeken",
    data: [6, 10, 5, 3, 12, 4, 1, 5, 3, 10, 6, 35, 2, 16, 16, 5, 5, 3, 2, 4]
  },
  "Leerling_69": {
    vraag: "Hoeveel boeken lees je per jaar (ongeveer)?",
    variabele1: "aantal boeken dat je per jaar leest",
    variabele2: "aantal boeken",
    data: [1, 1, 2, 2, 4, 2, 5, 3, 20, 20, 7, 2, 3, 5, 18, 3, 5, 3, 3, 6]
  },
  "Leerling_70": {
    vraag: "Hoeveel boeken lees je per jaar (ongeveer)?",
    variabele1: "aantal boeken dat je per jaar leest",
    variabele2: "aantal boeken",
    data: [15, 11, 6, 2, 5, 14, 2, 6, 5, 4, 4, 6, 1, 6, 9, 15, 10, 10, 1, 2]
  },
  "Leerling_71": {
    vraag: "Hoeveel keer ben je dit schooljaar te laat gekomen?",
    variabele1: "aantal keer dat je dit schooljaar te laat bent",
    variabele2: "aantal keer te laat",
    data: [2, 1, 0, 1, 1, 1, 0, 1, 2, 0, 0, 0, 1, 0, 1, 0, 7, 0, 1, 0]
  },
  "Leerling_72": {
    vraag: "Hoeveel dagen per week doe je aan sport?",
    variabele1: "aantal dagen per week dat je aan sport doet",
    variabele2: "aantal dagen",
    data: [5, 3, 4, 3, 4, 5, 4, 5, 5, 1, 3, 2, 4, 4, 4, 2, 2, 1, 6, 3]
  },
  "Leerling_73": {
    vraag: "Hoeveel minuten per dag besteed je aan gamen?",
    variabele1: "tijd die je per dag besteedt aan gamen",
    variabele2: "gametijd",
    data: [5, 5, 60, 5, 0, 0, 30, 5, 100, 15, 8, 30, 10, 30, 30, 45, 0, 30, 0, 20]
  },
  "Leerling_74": {
    vraag: "Hoeveel keer ben je dit schooljaar te laat gekomen?",
    variabele1: "aantal keer dat je dit schooljaar te laat bent",
    variabele2: "aantal keer te laat",
    data: [0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 19, 0, 0, 0, 0, 0, 4, 0]
  },
  "Leerling_75": {
    vraag: "Hoeveel dagen per week ga je met de fiets naar school?",
    variabele1: "aantal dagen met fiets naar school",
    variabele2: "aantal dagen",
    data: [5, 5, 5, 0, 2, 1, 5, 5, 0, 3, 5, 5, 5, 1, 5, 5, 0, 5, 5, 5]
  },
  "Leerling_76": {
    vraag: "Hoeveel keer ben je dit schooljaar te laat gekomen?",
    variabele1: "aantal keer dat je dit schooljaar te laat bent",
    variabele2: "aantal keer te laat",
    data: [1, 1, 2, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 4]
  },
  "Leerling_77": {
    vraag: "Hoeveel keer ben je dit schooljaar te laat gekomen?",
    variabele1: "aantal keer dat je dit schooljaar te laat bent",
    variabele2: "aantal keer te laat",
    data: [4, 1, 1, 0, 0, 0, 14, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 14, 0]
  },
  "Leerling_78": {
    vraag: "Hoeveel dagen per week help je thuis in het huishouden?",
    variabele1: "aantal dagen per week dat je helpt in het huishouden",
    variabele2: "aantal dagen",
    data: [3, 0, 2, 5, 4, 3, 7, 1, 5, 2, 7, 7, 2, 3, 4, 5, 7, 7, 7, 7]
  },
  "Leerling_79": {
    vraag: "Hoeveel minuten per dag luister je naar muziek?",
    variabele1: "tijd die je per dag naar muziek luistert",
    variabele2: "luistertijd",
    data: [20, 100, 1, 30, 20, 75, 150, 20, 60, 30, 100, 20, 75, 20, 0, 60, 30, 90, 120, 120]
  },
  "Leerling_80": {
    vraag: "Hoeveel vakken vind je leuk op school?",
    variabele1: "aantal vakken dat je leuk vindt",
    variabele2: "aantal vakken",
    data: [3, 5, 0, 5, 3, 2, 0, 2, 4, 3, 0, 3, 3, 2, 3, 5, 3, 4, 4, 1]
  },
  "Leerling_81": {
    vraag: "Hoeveel keer per week eet je fastfood?",
    variabele1: "aantal keer per week dat je fastfood eet",
    variabele2: "aantal keer fastfood",
    data: [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 2, 2, 1, 0, 0, 1, 1, 1]
  },
  "Leerling_82": {
    vraag: "Hoeveel minuten doe je erover om naar school te komen?",
    variabele1: "tijd die nodig is om naar school te komen",
    variabele2: "fietstijd",
    data: [50, 11, 30, 50, 45, 25, 10, 5, 30, 50, 5, 5, 35, 50, 30, 11, 50, 50, 7, 1]
  },
  "Leerling_83": {
    vraag: "Hoeveel minuten per dag besteed je aan huiswerk?",
    variabele1: "tijd die je besteedt aan huiswerk per dag",
    variabele2: "huiswerktijd",
    data: [30, 90, 45, 50, 120, 30, 100, 2, 50, 50, 180, 50, 50, 60, 100, 120, 75, 50, 60, 50]
  },
  "Leerling_84": {
    vraag: "Hoeveel minuten per dag besteed je aan gamen?",
    variabele1: "tijd die je per dag besteedt aan gamen",
    variabele2: "gametijd",
    data: [30, 30, 20, 0, 0, 0, 45, 80, 90, 100, 0, 90, 0, 30, 0, 100, 20, 15, 20, 0]
  },
  "Leerling_85": {
    vraag: "Hoeveel keer per week eet je fastfood?",
    variabele1: "aantal keer per week dat je fastfood eet",
    variabele2: "aantal keer fastfood",
    data: [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 3]
  },
  "Leerling_86": {
    vraag: "Hoeveel minuten doe je erover om naar school te komen?",
    variabele1: "tijd die nodig is om naar school te komen",
    variabele2: "fietstijd",
    data: [25, 15, 10, 25, 30, 12, 30, 7, 15, 12, 15, 20, 7, 10, 15, 20, 3, 20, 11, 50]
  },
  "Leerling_87": {
    vraag: "Hoeveel vakken vind je leuk op school?",
    variabele1: "aantal vakken dat je leuk vindt",
    variabele2: "aantal vakken",
    data: [0, 2, 5, 1, 5, 3, 5, 1, 3, 4, 0, 6, 7, 2, 3, 5, 4, 1, 5, 0]
  },
  "Leerling_88": {
    vraag: "Hoeveel dagen per week doe je aan sport?",
    variabele1: "aantal dagen per week dat je aan sport doet",
    variabele2: "aantal dagen",
    data: [2, 1, 5, 4, 4, 3, 3, 5, 4, 4, 4, 7, 1, 5, 1, 2, 2, 2, 7, 5]
  },
  "Leerling_89": {
    vraag: "Hoeveel dagen per week ga je met de fiets naar school?",
    variabele1: "aantal dagen met fiets naar school",
    variabele2: "aantal dagen",
    data: [5, 5, 1, 5, 2, 5, 0, 5, 5, 0, 5, 5, 5, 5, 2, 4, 5, 3, 0, 5]
  },
  "Leerling_90": {
    vraag: "Hoeveel minuten per dag besteed je aan huiswerk?",
    variabele1: "tijd die je besteedt aan huiswerk per dag",
    variabele2: "huiswerktijd",
    data: [120, 85, 120, 30, 120, 3, 30, 120, 120, 45, 150, 120, 60, 25, 120, 70, 60, 120, 120, 1]
  },
  "Leerling_91": {
    vraag: "Hoeveel uur schermtijd heb je thuis per dag?",
    variabele1: "schermtijd per dag",
    variabele2: "schermtijd",
    data: [5, 2, 2, 2, 1, 2, 2, 2, 2, 2, 5, 1, 3, 3, 2, 1, 2, 2, 2, 2]
  },
  "Leerling_92": {
    vraag: "Hoeveel minuten per dag besteed je aan huiswerk?",
    variabele1: "tijd die je besteedt aan huiswerk per dag",
    variabele2: "huiswerktijd",
    data: [120, 120, 85, 80, 80, 90, 60, 60, 45, 120, 70, 130, 60, 30, 60, 60, 60, 30, 2, 60]
  },
  "Leerling_93": {
    vraag: "Hoeveel kinderen telt je gezin?",
    variabele1: "aantal kinderen je gezin telt",
    variabele2: "aantal kinderen",
    data: [2, 3, 1, 4, 2, 2, 3, 3, 1, 4, 2, 3, 4, 2, 2, 4, 1, 1, 4, 3]
  },
  "Leerling_94": {
    vraag: "Hoeveel minuten doe je erover om naar school te komen?",
    variabele1: "tijd die nodig is om naar school te komen",
    variabele2: "fietstijd",
    data: [55, 15, 45, 30, 50, 20, 45, 50, 40, 45, 25, 45, 30, 45, 20, 45, 30, 30, 14, 60]
  },
  "Leerling_95": {
    vraag: "Hoeveel uur schermtijd heb je thuis per dag?",
    variabele1: "schermtijd per dag",
    variabele2: "schermtijd",
    data: [3, 3, 2, 2, 0, 2, 1, 2, 5, 4, 2, 6, 2, 3, 5, 2, 1, 3, 3, 2]
  },
  "Leerling_96": {
    vraag: "Hoeveel keer per week eet je fruit?",
    variabele1: "aantal keer per week dat je fruit eet",
    variabele2: "aantal stukken fruit",
    data: [5, 2, 4, 7, 7, 7, 4, 5, 7, 6, 10, 7, 7, 5, 14, 5, 7, 7, 6, 1]
  },
  "Leerling_97": {
    vraag: "Hoeveel dagen per week help je thuis in het huishouden?",
    variabele1: "aantal dagen per week dat je helpt in het huishouden",
    variabele2: "aantal dagen",
    data: [5, 1, 5, 3, 7, 7, 5, 1, 2, 7, 5, 4, 5, 1, 3, 4, 7, 2, 6, 2]
  },
  "Leerling_98": {
    vraag: "Hoeveel keer per week eet je fruit?",
    variabele1: "aantal keer per week dat je fruit eet",
    variabele2: "aantal stukken fruit",
    data: [14, 1, 12, 6, 4, 2, 3, 10, 10, 6, 7, 7, 2, 7, 14, 7, 7, 7, 10, 3]
  },
  "Leerling_99": {
    vraag: "Hoeveel minuten doe je erover om naar school te komen?",
    variabele1: "tijd die nodig is om naar school te komen",
    variabele2: "fietstijd",
    data: [25, 25, 30, 10, 50, 10, 35, 45, 15, 45, 5, 45, 35, 5, 45, 45, 20, 3, 50, 30]
  },
  "Leerling_100": {
    vraag: "Hoeveel uur slaap je gemiddeld per nacht?",
    variabele1: "tijd die je slaapt per nacht",
    variabele2: "slaaptijd",
    data: [8, 9, 9, 9, 6, 7, 10, 8, 7, 9, 9, 10, 6, 9, 9, 5, 10, 10, 10, 8]
  },
  "Leerling_101": {
    vraag: "Hoeveel uur schermtijd heb je thuis per dag?",
    variabele1: "schermtijd per dag",
    variabele2: "schermtijd",
    data: [2, 3, 2, 2, 1, 2, 5, 1, 3, 2, 2, 1, 3, 1, 1, 1, 1, 3, 5, 1]
  },
  "Leerling_102": {
    vraag: "Hoeveel kinderen telt je gezin?",
    variabele1: "aantal kinderen je gezin telt",
    variabele2: "aantal kinderen",
    data: [2, 5, 4, 2, 3, 3, 2, 4, 3, 2, 2, 5, 1, 2, 2, 3, 3, 2, 4, 2]
  },
  "Leerling_103": {
    vraag: "Hoeveel keer per week eet je fastfood?",
    variabele1: "aantal keer per week dat je fastfood eet",
    variabele2: "aantal keer fastfood",
    data: [1, 1, 5, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 2, 1, 0, 0, 1, 0, 1]
  },
  "Leerling_104": {
    vraag: "Hoeveel dagen per week doe je aan sport?",
    variabele1: "aantal dagen per week dat je aan sport doet",
    variabele2: "aantal dagen",
    data: [3, 5, 7, 4, 3, 1, 4, 2, 2, 4, 4, 3, 4, 0, 1, 1, 1, 2, 2, 4]
  },
  "Leerling_105": {
    vraag: "Hoeveel kinderen telt je gezin?",
    variabele1: "aantal kinderen je gezin telt",
    variabele2: "aantal kinderen",
    data: [3, 3, 3, 3, 5, 2, 5, 4, 5, 2, 1, 3, 5, 5, 2, 3, 4, 4, 1, 2]
  },
  "Leerling_106": {
    vraag: "Hoeveel huisdieren heb je?",
    variabele1: "aantal huisdieren dat je hebt",
    variabele2: "aantal huisdieren",
    data: [0, 1, 5, 1, 1, 2, 1, 0, 1, 1, 9, 1, 3, 0, 5, 0, 0, 4, 4, 5]
  },
  "Leerling_107": {
    vraag: "Hoeveel dagen per week doe je aan sport?",
    variabele1: "aantal dagen per week dat je aan sport doet",
    variabele2: "aantal dagen",
    data: [4, 3, 3, 1, 2, 4, 2, 5, 7, 1, 3, 4, 2, 2, 4, 0, 3, 4, 4, 5]
  },
  "Leerling_108": {
    vraag: "Hoeveel minuten per dag luister je naar muziek?",
    variabele1: "tijd die je per dag naar muziek luistert",
    variabele2: "luistertijd",
    data: [240, 30, 30, 15, 20, 27, 60, 50, 20, 100, 30, 60, 30, 15, 10, 15, 15, 30, 0, 30]
  },
  "Leerling_109": {
    vraag: "Hoeveel boeken lees je per jaar (ongeveer)?",
    variabele1: "aantal boeken dat je per jaar leest",
    variabele2: "aantal boeken",
    data: [15, 6, 6, 5, 6, 2, 18, 5, 12, 5, 50, 1, 5, 2, 15, 3, 15, 2, 6, 5]
  },
  "Leerling_110": {
    vraag: "Hoeveel dagen per week ga je met de fiets naar school?",
    variabele1: "aantal dagen met fiets naar school",
    variabele2: "aantal dagen",
    data: [5, 5, 0, 5, 5, 5, 5, 5, 1, 5, 1, 2, 5, 5, 5, 5, 5, 5, 0, 5]
  },
  "Leerling_111": {
    vraag: "Hoeveel vakken vind je leuk op school?",
    variabele1: "aantal vakken dat je leuk vindt",
    variabele2: "aantal vakken",
    data: [3, 1, 4, 3, 2, 2, 3, 4, 5, 2, 2, 3, 1, 3, 5, 2, 2, 5, 2, 4]
  },
  "Leerling_112": {
    vraag: "Hoeveel vakken vind je leuk op school?",
    variabele1: "aantal vakken dat je leuk vindt",
    variabele2: "aantal vakken",
    data: [5, 2, 2, 4, 5, 1, 0, 1, 3, 8, 3, 5, 1, 3, 3, 1, 1, 2, 3, 3]
  },
  "Leerling_113": {
    vraag: "Hoeveel dagen per week help je thuis in het huishouden?",
    variabele1: "aantal dagen per week dat je helpt in het huishouden",
    variabele2: "aantal dagen",
    data: [2, 7, 3, 0, 1, 7, 1, 2, 5, 2, 4, 4, 4, 1, 2, 1, 2, 5, 7, 4]
  },
  "Leerling_114": {
    vraag: "Hoeveel keer per week eet je fruit?",
    variabele1: "aantal keer per week dat je fruit eet",
    variabele2: "aantal stukken fruit",
    data: [7, 7, 6, 4, 12, 6, 12, 5, 7, 7, 8, 4, 7, 5, 10, 3, 5, 15, 12, 10]
  },
  "Leerling_115": {
    vraag: "Hoeveel uur slaap je gemiddeld per nacht?",
    variabele1: "tijd die je slaapt per nacht",
    variabele2: "slaaptijd",
    data: [7, 6, 9, 10, 10, 10, 10, 10, 8, 7, 7, 8, 10, 10, 9, 9, 11, 7, 9, 9]
  },
  "Leerling_116": {
    vraag: "Hoeveel dagen per week help je thuis in het huishouden?",
    variabele1: "aantal dagen per week dat je helpt in het huishouden",
    variabele2: "aantal dagen",
    data: [4, 7, 6, 6, 7, 7, 0, 2, 7, 7, 5, 3, 2, 3, 7, 3, 5, 4, 0, 7]
  },
  "Leerling_117": {
    vraag: "Hoeveel huisdieren heb je?",
    variabele1: "aantal huisdieren dat je hebt",
    variabele2: "aantal huisdieren",
    data: [4, 1, 0, 1, 5, 2, 3, 2, 4, 1, 2, 4, 8, 0, 0, 1, 0, 2, 2, 5]
  },
  "Leerling_118": {
    vraag: "Hoeveel uur slaap je gemiddeld per nacht?",
    variabele1: "tijd die je slaapt per nacht",
    variabele2: "slaaptijd",
    data: [9, 9, 9, 9, 10, 8, 10, 7, 9, 9, 10, 7, 8, 9, 8, 8, 9, 7, 10, 10]
  },
  "Leerling_119": {
    vraag: "Hoeveel uur schermtijd heb je thuis per dag?",
    variabele1: "schermtijd per dag",
    variabele2: "schermtijd",
    data: [1, 1, 3, 3, 8, 2, 1, 1, 7, 2, 1, 1, 2, 2, 5, 2, 1, 2, 3, 6]
  },
  "Leerling_120": {
    vraag: "Hoeveel kinderen telt je gezin?",
    variabele1: "aantal kinderen je gezin telt",
    variabele2: "aantal kinderen",
    data: [1, 3, 2, 2, 2, 2, 2, 2, 1, 2, 3, 3, 2, 3, 1, 2, 1, 2, 2, 2]
  },
  "Leerling_121": {
    vraag: "Hoeveel uur schermtijd heb je thuis per dag?",
    variabele1: "schermtijd per dag",
    variabele2: "schermtijd",
    data: [2, 2, 2, 3, 3, 5, 5, 1, 1, 1, 0, 3, 3, 2, 3, 2, 2, 1, 2, 1]
  },
  "Leerling_122": {
    vraag: "Hoeveel uur slaap je gemiddeld per nacht?",
    variabele1: "tijd die je slaapt per nacht",
    variabele2: "slaaptijd",
    data: [9, 8, 9, 7, 9, 5, 10, 9, 10, 9, 9, 9, 10, 8, 9, 9, 9, 9, 8, 5]
  },
  "Leerling_123": {
    vraag: "Hoeveel uur slaap je gemiddeld per nacht?",
    variabele1: "tijd die je slaapt per nacht",
    variabele2: "slaaptijd",
    data: [8, 9, 7, 8, 9, 8, 9, 7, 10, 5, 9, 8, 8, 8, 7, 6, 9, 8, 7, 9]
  },
  "Leerling_124": {
    vraag: "Hoeveel keer per week eet je fruit?",
    variabele1: "aantal keer per week dat je fruit eet",
    variabele2: "aantal stukken fruit",
    data: [4, 7, 6, 5, 5, 1, 6, 5, 7, 7, 8, 4, 5, 1, 3, 7, 4, 7, 7, 10]
  },
  "Leerling_125": {
    vraag: "Hoeveel keer per week eet je fastfood?",
    variabele1: "aantal keer per week dat je fastfood eet",
    variabele2: "aantal keer fastfood",
    data: [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 3, 0, 1, 2, 0]
  },
  "Leerling_126": {
    vraag: "Hoeveel dagen per week ga je met de fiets naar school?",
    variabele1: "aantal dagen met fiets naar school",
    variabele2: "aantal dagen",
    data: [5, 4, 1, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  "Leerling_127": {
    vraag: "Hoeveel uur slaap je gemiddeld per nacht?",
    variabele1: "tijd die je slaapt per nacht",
    variabele2: "slaaptijd",
    data: [8, 8, 7, 10, 5, 10, 9, 11, 9, 6, 9, 8, 10, 8, 6, 10, 7, 7, 9, 8]
  },
  "Leerling_128": {
    vraag: "Hoeveel dagen per week ga je met de fiets naar school?",
    variabele1: "aantal dagen met fiets naar school",
    variabele2: "aantal dagen",
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 5, 5, 5, 5, 5, 5, 5]
  },
  "Leerling_129": {
    vraag: "Hoeveel minuten doe je erover om naar school te komen?",
    variabele1: "tijd die nodig is om naar school te komen",
    variabele2: "fietstijd",
    data: [35, 30, 50, 7, 35, 30, 20, 5, 35, 30, 15, 30, 35, 15, 60, 50, 1, 35, 3, 35]
  },
  "Leerling_130": {
    vraag: "Hoeveel keer per week eet je fruit?",
    variabele1: "aantal keer per week dat je fruit eet",
    variabele2: "aantal stukken fruit",
    data: [5, 7, 7, 9, 4, 6, 2, 1, 4, 14, 1, 7, 2, 4, 7, 6, 7, 5, 8, 20]
  },
  "Leerling_131": {
    vraag: "Hoeveel dagen per week help je thuis in het huishouden?",
    variabele1: "aantal dagen per week dat je helpt in het huishouden",
    variabele2: "aantal dagen",
    data: [6, 3, 7, 7, 3, 6, 1, 4, 2, 5, 4, 3, 2, 5, 5, 4, 7, 7, 1, 6]
  },
  "Leerling_132": {
    vraag: "Hoeveel minuten per dag luister je naar muziek?",
    variabele1: "tijd die je per dag naar muziek luistert",
    variabele2: "luistertijd",
    data: [100, 30, 120, 0, 120, 0, 0, 15, 0, 20, 3, 20, 20, 120, 60, 60, 125, 27, 60, 3]
  },
  "Leerling_133": {
    vraag: "Hoeveel dagen per week ga je met de fiets naar school?",
    variabele1: "aantal dagen met fiets naar school",
    variabele2: "aantal dagen",
    data: [2, 5, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 2, 5, 2, 5, 5, 5, 5, 5]
  },
  "Leerling_134": {
    vraag: "Hoeveel dagen per week ga je met de fiets naar school?",
    variabele1: "aantal dagen met fiets naar school",
    variabele2: "aantal dagen",
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5]
  },
  "Leerling_135": {
    vraag: "Hoeveel minuten per dag besteed je aan huiswerk?",
    variabele1: "tijd die je besteedt aan huiswerk per dag",
    variabele2: "huiswerktijd",
    data: [100, 85, 60, 2, 180, 50, 60, 120, 100, 120, 80, 30, 120, 80, 50, 50, 50, 50, 100, 140]
  },
};