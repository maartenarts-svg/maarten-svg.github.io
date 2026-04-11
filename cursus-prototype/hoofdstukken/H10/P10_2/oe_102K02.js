/* ============================================================
   H10 / P10_2 / oe_102K02.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_102K02', nummer:'?', soort:'inoefenen',
    niveaus:['zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Laat met een tegenvoorbeeld zien dat de gelijkheid <i>a</i> : (1 : <i>b</i>) = (<i>a</i> : 1) : <i>b</i> niet waar is voor alle rationale getallen <i>a</i> en <i>b</i>.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

    {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const _o = '';
        if (typeof _o === 'string') td.innerHTML = _o;
        else td.appendChild(_o);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong('voor\u00A0 <i>a</i>\u200A = 3 en\u00A0 <i>b</i>\u200A = 2 is:', false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const oe102K0201 = document.createElement('span');
        oe102K0201.appendChild(maakSpanBreedte('1cm',''));
        oe102K0201.appendChild(maakSpanBreedte('2cm','3 : (1 : 2)'));
        oe102K0201.appendChild(maakSpanBreedte('5cm','= 3 : 0,5'));
        oe102K0201.appendChild(maakSpanBreedte('2cm','(3 : 1) : 2'));
        oe102K0201.appendChild(maakSpanBreedte('2cm','= 3 : 2'));
        const td = maakSlTdZonderInsprong(oe102K0201, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const oe102K0202 = document.createElement('span');
        oe102K0202.appendChild(maakSpanBreedte('1cm',''));
        oe102K0202.appendChild(maakSpanBreedte('2cm',''));
        oe102K0202.appendChild(maakSpanBreedte('5cm','= 6'));
        oe102K0202.appendChild(maakSpanBreedte('2cm',''));
        oe102K0202.appendChild(maakSpanBreedte('2cm','= 1,5'));        
        const td = maakSlTdZonderInsprong(oe102K0202, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

})();
