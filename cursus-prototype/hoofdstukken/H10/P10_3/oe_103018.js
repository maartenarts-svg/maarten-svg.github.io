/* ============================================================
   H10 / P10_3 / oe_103018.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103018', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'In de piramide is een vakje altijd gelijk aan de som van de twee vakjes eronder.<br>Vul de piramide aan.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody);
  voegWitruimteToe(tbody);

  function maakPiramide(container, matrix = []) {
    const CEL_H = '0.9cm';
    const CEL_B = '1.8cm';

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.alignItems = 'flex-start'; // BELANGRIJK
    wrapper.style.gap = '0.1cm';

    matrix.forEach((rijData, r, arr) => {
      const rij = document.createElement('div');
      rij.style.display = 'flex';
      rij.style.gap = '0.1cm';

      // correcte halfsteensverschuiving
      rij.style.marginLeft = ((arr.length - rijData.length) * 0.9) + 'cm';

      rijData.forEach(celData => {
        const cel = document.createElement('div');

        cel.style.width = CEL_B;
        cel.style.height = CEL_H;
        cel.style.border = '1px solid black';
        cel.style.display = 'flex';
        cel.style.alignItems = 'center';
        cel.style.justifyContent = 'center';

        if (celData?.inhoud) {
          const span = document.createElement('span');
          span.innerHTML = celData.inhoud;
          if (celData?.className) {
            span.classList.add(...celData.className.split(' '));
          }          
          cel.appendChild(span);
        }

        rij.appendChild(cel);
      });

      wrapper.appendChild(rij);
    });

    container.appendChild(wrapper);
  }


  /* === gebruik in je tbody === */
  {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.style.display = 'flex';
    td.style.justifyContent = 'center';

    maakPiramide(td, [
      [
        { inhoud: '3<i>a</i>', className: 'txt' }
      ],
      [
        { inhoud: '2<i>a</i> + 3', className: 'txt' },
        { inhoud: '<i>a</i>\u200A - 3', className: 'overlaypiramide' }
      ],
      [
        { inhoud: '<i>a</i>\u200A + 2', className: 'overlaypiramide' },
        { inhoud: '<i>a</i> + 1', className: 'txt' },
        { inhoud: '-4', className: 'overlaypiramide' }
      ],
      [
        { inhoud: '2<i>a</i>', className: 'txt' },
        { inhoud: '2 - \u200A<i>a</i>', className: 'overlaypiramide' },
        { inhoud: '2<i>a</i>\u200A - 1', className: 'overlaypiramide' },
        { inhoud: '-2<i>a</i>\u200A - 3', className: 'overlaypiramide' }
      ]
    ]);

    tr.appendChild(td);
    tbody.appendChild(tr);
  }

})();
