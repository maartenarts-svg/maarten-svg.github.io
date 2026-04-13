const th_101_vermA = document.createElement('span');
const th_101_vermA_s1 = document.createElement('span');
th_101_vermA_s1.appendChild(htmlSpan('∀ <i>a</i> ∈ ℚ<sub>0</sub>:<br>\u00A0\u00A0<i>a</i> · '));
th_101_vermA_s1.appendChild(maakBreuk('1','<i>a</i>','opgave'));
th_101_vermA_s1.appendChild(htmlSpan(' = 1 = '));
th_101_vermA_s1.appendChild(maakBreuk('1','<i>a</i>','opgave'));
th_101_vermA_s1.appendChild(htmlSpan(' · <i>a</i>'));
th_101_vermA.appendChild(th_101_vermA_s1);    

const th_101_vermB = document.createElement('span');
const th_101_vermB_s1 = document.createElement('span');
th_101_vermB_s1.appendChild(htmlSpan('Het product van een rationaal getal verschillend van 0 en zijn omgekeerde is gelijk aan 1.<br>13 · '));
th_101_vermB_s1.appendChild(maakBreuk('1','13','opgave'));
th_101_vermB_s1.appendChild(htmlSpan(' = 1'));
th_101_vermB.appendChild(th_101_vermB_s1); 


var Eigenschappen = [
  { 
    woorden: htmlSpan('De optelling van rationale getallen is commutatief.'),
    symbolen: htmlSpan('∀ <i>a</i>, <i>b</i> ∈ ℚ:<br>\u00A0\u00A0<i>a</i> + <i>b</i> = <i>b</i> + <i>a</i>'),
    betekenis: htmlSpan('Bij een optelling van rationale getallen mogen de getallen van plaats verwisseld worden. <br>17 + 8 + 13 = 17 + 13 + 8'),     
  },
  { 
    woorden:  htmlSpan('De optelling van rationale getallen is associatief.'),
    symbolen:  htmlSpan('∀ <i>a</i>, <i>b</i>, <i>c</i> ∈ ℚ:<br>\u00A0\u00A0(<i>a</i> + <i>b</i>) + <i>c</i> = <i>a</i> + (<i>b</i> + <i>c</i>)'),
    betekenis:  htmlSpan('Bij een optelling van rationale getallen speelt de volgorde waarin je optelt (dus de plaats van de haakjes) geen rol.<br>17 + 8 + 12 = 17 + (8 + 12)'),
    
  },
  { 
    woorden:  htmlSpan('0 is het neutraal element voor de optelling van rationale getallen.'),
    symbolen:  htmlSpan('∀ <i>a</i> ∈ ℚ:<br>\u00A0\u00A0<i>a</i> + 0 = <i>a</i> = 0 + <i>a</i>'),
    betekenis:  htmlSpan('0 ergens bij optellen verandert niets aan het eindresultaat.<br>0 + 17 = 17'),
  },
  { 
    woorden:  htmlSpan('Elk rationaal getal heeft een symmetrisch element voor de optelling'),
    symbolen:  htmlSpan('∀ <i>a</i> ∈ ℚ:<br>\u00A0\u00A0<i>a</i> + (-<i>a</i>) = 0 = -<i>a</i> + <i>a</i>'),
    betekenis:  htmlSpan('De som van een rationaal getal en zijn tegengestelde is gelijk aan 0.<br>17 + (-17) = 0'),
  },
  { 
    woorden: htmlSpan('De vermenigvuldiging van rationale getallen is commutatief.'),
    symbolen: htmlSpan('∀ <i>a</i>, <i>b</i> ∈ ℚ:<br>\u00A0\u00A0<i>a</i> · <i>b</i> = <i>b</i> · <i>a</i>'),
    betekenis: htmlSpan('Bij een vermenigvuldiging van rationale getallen mogen de getallen van plaats verwisseld worden.<br>25 · 13 · 4 = 25 · 4 · 13'),
  }, 
  { 
    woorden: htmlSpan('De vermenigvuldiging van rationale getallen is associatief.'),
    symbolen: htmlSpan('∀ <i>a</i>, <i>b</i>, <i>c</i> ∈ ℚ:<br>\u00A0\u00A0(<i>a</i> · <i>b</i>) · <i>c</i> = <i>a</i> · (<i>b</i> · <i>c</i>)'),
    betekenis: htmlSpan('Bij een vermenigvuldiging van rationale getallen speelt de volgorde waarin je vermenigvuldigt (dus de plaats van de haakjes) geen rol.<br>13 · 25 · 4 = 13 · (25 · 4)'),
  },
  { 
    woorden: htmlSpan('1 is het neutraal element voor de vermenigvuldiging van rationale getallen.'),
    symbolen: htmlSpan('∀ <i>a</i> ∈ ℚ:<br>\u00A0\u00A0<i>a</i> · 1 = <i>a</i> = 1 · <i>a</i>'),
    betekenis: htmlSpan('1 ergens mee vermenigvuldigen verandert niets aan het eindresultaat.<br>1 · 13 = 13'),
  }, 
  { 
    woorden: htmlSpan('0 is het opslorpend element voor de vermenigvuldiging van rationale getallen.'),
    symbolen: htmlSpan('∀ <i>a</i> ∈ ℚ:<br>\u00A0\u00A0<i>a</i> · 0 = 0 = 0 · <i>a</i>'),
    betekenis: htmlSpan('0 ergens mee vermenigvuldigen zorgt ervoor dat het eindresultaat 0 is.<br>0 · 13 = 0'),
  },  
  { 
    woorden: htmlSpan('Elk rationaal getal verschillend van 0 heeft een symmetrisch element voor de vermenigvuldiging.'),
    symbolen: th_101_vermA,
    betekenis: th_101_vermB,
  },     
  { 
    woorden: htmlSpan('De vermenigvuldiging van rationale getallen is distributief ten opzichte van de optelling van rationale getallen.'),
    symbolen: htmlSpan('∀ <i>a</i>, <i>b</i>, <i>c</i> ∈ ℚ:<br>\u00A0\u00A0<i>a</i> · (<i>b</i> + <i>c</i>) = <i>a</i> · <i>b</i> + <i>a</i> · <i>c</i>'),
    betekenis: htmlSpan('Vermenigvuldig je een getal met een optelling, dan mag je dat getal vermenigvuldigen met elke term van die optelling en de bekomen producten optellen.<br>(20 + 7) · 8 = 20 · 8 + 7 · 8'),
  },      
];