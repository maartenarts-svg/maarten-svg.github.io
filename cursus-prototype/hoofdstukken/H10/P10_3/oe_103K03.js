/* ============================================================
   H10 / P10_3 / oe_103K03.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103K03', nummer:'?', soort:'inoefenen',
    niveaus:['vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Vul de ontbrekende termen aan.', ['intro-tekst']);

  function maakTd(hoogte,insprong) {
    const td = document.createElement('td');
    td.style.cssText = `height:${hoogte}; overflow:hidden; vertical-align:middle;`;
    td.style.paddingLeft = insprong;
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `display:flex; align-items:center; height:100%;`;
    td.appendChild(wrapper);
    return { td, wrapper };
  }

  function maakLbl(letter) {
    const lbl = document.createElement('span');
    lbl.style.cssText = `font-family:var(--font); width:0.65cm; font-weight:bold; color:var(--groen-donker); flex-shrink:0;`;
    lbl.appendChild(htmlSpan(letter + '|'));
    return lbl;
  }  
  
  function maakTxt(span) {
    const wrapper = document.createElement('span');
    wrapper.style.cssText = `font-family:var(--font); white-space:nowrap;`;
    wrapper.appendChild(span);
    return wrapper;
  }

  function maakInvul(span, hoogte, zichtbaar = false) {
    const opl = document.createElement('span');
    opl.appendChild(span);
    return maakSpanBasisOverlay(opl, hoogte, zichtbaar);
  }

  const OE103K03 = [
    // [ label, span_td1, invul_td1, span_td2, invul_td2 ]
    [ 'a', htmlSpan('5<i>a</i> + 7<i>b</i> +'), htmlSpan('15<i>a</i> - 7<i>b</i>'), htmlSpan('= 20<i>a</i>'), null ],
    [ 'b', htmlSpan('-<i>x</i> + 3<i>xy</i> + 8<i>x</i>'), null, htmlSpan('= -<i>xy</i> +'), htmlSpan('7<i>x</i> + 4<i>xy</i>')],
    [ 'c', htmlSpan('13<i>t</i> - 7 +'), htmlSpan('(-17<i>t</i>) + 8'), htmlSpan('= -4<i>t</i> + 1'), null],
    [ 'd', htmlSpan('2,9<i>qr</i> - 3,6<i>q</i> - 1,8<i>qr</>'), null,htmlSpan('= -4,3<i>q</i> + 1,3<i>r</> + '), htmlSpan('1,1<i>qr</i> + 0,7<i>r</i> - 1,3<i>r</i>') ],
  ];

  const tabel01=document.createElement('table');
    tabel01.style.width = '100%';
    tabel01.style.borderCollapse = 'separate';
    tabel01.style.tableLayout = "fixed";
  //tabel01.classList.add('oef-tabel');
  const colg01=document.createElement('colgroup');
    const col1 = document.createElement('col');
    const col2 = document.createElement('col');
  colg01.appendChild(col1);
  colg01.appendChild(col2);
  tabel01.appendChild(colg01);
  const tbody01=document.createElement('tbody');
  tabel01.appendChild(tbody01);
  inhoud.appendChild(tabel01);

  const HOOGTE = '1.2cm';

  OE103K03.forEach(([letter, txt1, inv1, txt2, inv2]) => {
    const tr = document.createElement('tr');
    tr.style.cssText = `height:${HOOGTE}; vertical-align:middle;`;

    // td1
    if (txt1 !== null || inv1 !== null) {
      const { td, wrapper } = maakTd(HOOGTE,'0cm');
      wrapper.appendChild(maakLbl(letter));
      if (txt1 !== null) wrapper.appendChild(maakTxt(txt1));
      if (inv1 !== null) wrapper.appendChild(maakInvul(inv1, HOOGTE));
      tr.appendChild(td);
    } else {
      tr.appendChild(document.createElement('td')); // lege cel
    }

    // td2
    if (txt2 !== null || inv2 !== null) {
      const { td, wrapper } = maakTd(HOOGTE,'0.5cm');
      if (txt2 !== null) wrapper.appendChild(maakTxt(txt2));
      if (inv2 !== null) wrapper.appendChild(maakInvul(inv2, HOOGTE));
      tr.appendChild(td);
    } else {
      tr.appendChild(document.createElement('td')); // lege cel
    }

    tbody01.appendChild(tr);
  });

})();
