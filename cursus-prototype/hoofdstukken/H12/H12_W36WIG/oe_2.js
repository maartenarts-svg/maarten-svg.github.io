/* ============================================================
   H12 / H12_W35WIMC2 / W35WIMC2_sc.js
   Succescriteria voor de toets
   ============================================================ */
(function () {

  const actueleContainer = document.currentScript?.dataset?.container || ACTIEVE_CONTAINER;

  const inhoud = document.createElement('div');
  document.querySelector(actueleContainer).appendChild(inhoud);
  
  const  bladachterkant = document.createElement('img');
   bladachterkant.src = 'afbeeldingen/W36WIG002.png';
   bladachterkant.style.display = 'block';
   bladachterkant.style.width = '120%';
   bladachterkant.style.marginTop = '0.3cm';
   bladachterkant.style.position = 'relative';
   bladachterkant.style.left = '50%';
   bladachterkant.style.transform = 'translateX(-50%)';
  inhoud.appendChild(bladachterkant);

})();