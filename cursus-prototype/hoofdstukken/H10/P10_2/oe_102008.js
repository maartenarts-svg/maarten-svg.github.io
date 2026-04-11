/* ============================================================
   H10 / P10_2 / oe_102008.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_102008', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Om lettervormen te noteren:', ['intro-tekst']);
  voegLijstToe(inhoud,'streep','0cm','0.2cm',[
    'schrijf je eerst de coëfficiënt en dan het letterdeel;',
    'laat je het maalteken weg als er geen verwarring mogelijk is;',
    'noteer je coëfficiënt 1 niet.',
  ]);

  const wit = document.createElement('div');
  wit.style.height = '0.5cm';  // ← HIER AANPASSEN
  inhoud.appendChild(wit);

  voegLijstToe(inhoud,'bullet','0cm','0.2cm',[
    'Markeer de lettervormen die niet volgens deze afspraken genoteerd zijn.',
    'Verbeter die lettervormen.',
  ])
  
  const {tbody} = maakOefTabel(inhoud, 3, true);

  const TW = '1.5cm';

  /* Rij 1 */
  const tr1 = document.createElement('tr');
  const tdA = maakOpTd('a', maakMarkering('-1<i>a</i>', '#bbdefb', true), TW, true, '-<i>a</i>');
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  const tdD = maakOpTd('d', maakMarkering('-2 · <i>k</i>', '#bbdefb', true), TW, true, '-2<i>k</i>');
  tdD.classList.add('kolom-midden');
  tr1.appendChild(tdD);
  const tdG = maakOpTd('g', maakMarkering('4<i>b</i> · <i>c</i>', '#bbdefb', true), TW, true, '4<i>bc</i>');
  tdG.classList.add('kolom-rechts');
  tr1.appendChild(tdG);
  tbody.appendChild(tr1);

  /* Rij 2 */
  const tr2 = document.createElement('tr');
  const tdB = maakOpTd('b', '<i>x</i><sup>3</sup><i>y</i>', TW, true, '');
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  const tdE = maakOpTd('e', maakMarkering('<i>p</i> · (-5)', '#bbdefb', true), TW, true, '-5<i>p</i>');
  tdE.classList.add('kolom-midden');
  tr2.appendChild(tdE);
  const tdH = maakOpTd('h', maakMarkering('<i>d</i> · 8 · <i>r</i>', '#bbdefb', true), TW, true, '8<i>dr</i>');
  tdH.classList.add('kolom-rechts');
  tr2.appendChild(tdH);
  tbody.appendChild(tr2);

  /* Rij 3 */
  const tr3 = document.createElement('tr');
  const tdC = maakOpTd('c', maakMarkering((function(){
      const s=document.createElement('span');
      const p0=document.createElement('span'); p0.innerHTML='<i>s</i> · '; s.appendChild(p0);
      s.appendChild(maakBreuk('3','4','opgave'));
      return s;})(),'#bbdefb', true), TW, true, (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('3','4','oplossing'));
      const p1=document.createElement('span'); p1.innerHTML='<i>s</i>'; s.appendChild(p1);
      return s;})());
  tdC.classList.add('kolom-links');
  tr3.appendChild(tdC);
  const tdF = maakOpTd('f', (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('2','7','opgave'));
      const p1=document.createElement('span'); p1.innerHTML='<i>z</i>'; s.appendChild(p1);
      return s;})(), TW, true, '');
  tdF.classList.add('kolom-midden');
  tr3.appendChild(tdF);
  const tdI = maakOpTd('i', maakMarkering((function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('4','5','opgave'));
      const p1=document.createElement('span'); p1.innerHTML=' · <i>t</i>'; s.appendChild(p1);
      return s;})(),'#bbdefb', true), TW, true, (function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      s.appendChild(maakBreuk('4','5','oplossing'));
      const p1=document.createElement('span'); p1.innerHTML='<i>t</i>'; s.appendChild(p1);
      return s;})());
  tdI.classList.add('kolom-rechts');
  tr3.appendChild(tdI);
  tbody.appendChild(tr3);
 

})();
