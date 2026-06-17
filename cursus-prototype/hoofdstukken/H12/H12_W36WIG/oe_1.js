/* ============================================================
   H12 / H12_W36WIF / oe_1.js
   soort: inoefenen
   ============================================================ */

(function () {

  const inhoud = maakOefening({
    id:'oe_1', nummer:'?', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });
  inhoud.style.position = 'relative';

  /* Introductietekst */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Los de misdaad op!'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }
  voegLijstToe(inhoud,'bullet','0cm','0.4cm',['Maak de vijf oefeningen.','Maak berekeningen op een kladblad.']);


  const  bladvoorkant = document.createElement('img');
   bladvoorkant.src = 'afbeeldingen/W36WIG001.png';
   bladvoorkant.style.display = 'block';
   bladvoorkant.style.width = '120%';
   bladvoorkant.style.marginTop = '0.3cm';
   bladvoorkant.style.position = 'relative';
   bladvoorkant.style.left = '50%';
   bladvoorkant.style.transform = 'translateX(-50%)';
  inhoud.appendChild( bladvoorkant);

})();
