/* ============================================================
   H10 / P10_3 / oe_103002.js
   soort: ontdek
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103002', nummer:'?', soort:'ontdek',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'In de lettervorm 2<i>a</i> · 3<i>b</i> stellen <i>a</i> en <i>b</i> rationale getallen voor.<br>Noteer elk nummer bij de eigenschap die wordt toegepast.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);
  const h100 = '13pt'

  voegWitruimteToe(tbody);

    {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const r1 = maakRegel(h100);
        const oe10300201 = document.createElement('span')
        oe10300201.appendChild(htmlSpan('2<i>a</i> · 3<i>b</i>'))
        r1.appendChild((maakSpanBreedte('1.3cm',oe10300201)));
        r1.appendChild(htmlSpan('= 2 · <i>a</i> · 3 · <i>b</i>'));
        td.appendChild(r1);
        const r2 = maakRegel(h100);
        r2.appendChild((maakSpanBreedte('1.3cm','')));
        r2.appendChild(maakGelijkheidMetNummer('= 2 · 3 · <i>a</i> · <i>b</i>','(1)'));
        td.appendChild(r2);
        const r3 = maakRegel(h100);
        r3.appendChild((maakSpanBreedte('1.3cm','')));
        r3.appendChild(maakGelijkheidMetNummer('= (2 · 3) · <i>a</i> · <i>b</i><br>','(2)'));
        td.appendChild(r3);
        const r4 = maakRegel(h100);
        r4.appendChild((maakSpanBreedte('1.3cm','')));
        r4.appendChild(htmlSpan('= 6 · <i>a</i> · <i>b</i><br>'));
        td.appendChild(r4);
        const r5 = maakRegel(h100);
        r5.appendChild((maakSpanBreedte('1.3cm','')));
        r5.appendChild(htmlSpan('= 6<i>ab</i>'));
        td.appendChild(r5);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong('(1) De vermenigvuldiging van rationale getallen is commutatief.', false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong('(2) de vermenigvuldiging van rationale getallen is associatief.', false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong('', false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong('', false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }    

})();
