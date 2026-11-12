import"./style-lt53GmS1.js";var e=[null,`mo`,`di`,`mi`,`do`,`fr`,`sa`],t={de:[`Sonntag`,`Montag`,`Dienstag`,`Mittwoch`,`Donnerstag`,`Freitag`,`Samstag`],tr:[`Pazar`,`Pazartesi`,`Salı`,`Çarşamba`,`Perşembe`,`Cuma`,`Cumartesi`]},n=[`So`,`Mo`,`Di`,`Mi`,`Do`,`Fr`,`Sa`],r={de:{B:`Klasse B`,B197:`Klasse B Automatik`,A:`Motorrad`},tr:{B:`B sınıfı`,B197:`B sınıfı otomatik`,A:`Motosiklet`}};function i(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r)}function a(e){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function o(t){return e[i(t).getDay()]}function s(e){let t=Number(e.split(`:`)[0]);return t<12?`vm`:t<17?`nm`:`ab`}function c(e){return e/45}function l(e,t,n=!1){let r=o(e.date),i=r?`${r}-${s(e.time)}`:null;return t.filter(t=>t.cls===e.cls).filter(e=>n||e.flexible||i!==null&&e.slots.includes(i)).slice().sort((e,t)=>Number(t.examSoon)-Number(e.examSoon)||e.since.localeCompare(t.since))}function u(e){let t=i(e);return`${String(t.getDate()).padStart(2,`0`)}.${String(t.getMonth()+1).padStart(2,`0`)}.`}function d(e,n){let a=t[n][i(e.date).getDay()],o=r[n][e.cls];return n===`tr`?`${a}, ${u(e.date)}, saat ${e.time}, ${e.minutes} dakika, ${o}`:`${a}, ${u(e.date)}, ${e.time} Uhr, ${e.minutes} Minuten, ${o}`}function f(e){return`${n[i(e.date).getDay()]} ${e.time}`}function p(e,t){return t===`tr`?[`Diamond Eyes: Kısa sürede bir direksiyon dersi boşaldı.`,``,d(e,`tr`),``,`İlk cevap veren dersi alır.`,``,`Bu mesajı, kayıt olurken "kısa sürede boşalan dersler" seçeneğini işaretlediğin için alıyorsun. Listeden çıkmak için "Stopp" yaz.`].join(`
`):[`Diamond Eyes: Kurzfristig ist eine Fahrstunde frei geworden.`,``,d(e,`de`),``,`Wer zuerst antwortet, bekommt die Stunde.`,``,`Du bekommst diese Nachricht, weil du bei der Anmeldung "kurzfristige Stunden" angekreuzt hast. Abmelden: einfach "Stopp" schreiben.`].join(`
`)}var m=[{id:1,name:`Ali K.`,cls:`B`,slots:[`di-nm`,`do-nm`,`sa-vm`],flexible:!1,lang:`tr`,examSoon:!0,since:`2026-10-02`},{id:2,name:`Lena M.`,cls:`B`,slots:[`mo-ab`,`do-nm`,`fr-nm`],flexible:!1,lang:`de`,examSoon:!1,since:`2026-10-05`},{id:3,name:`Emre Y.`,cls:`B`,slots:[],flexible:!0,lang:`tr`,examSoon:!1,since:`2026-10-09`},{id:4,name:`Sophie B.`,cls:`B197`,slots:[`mi-nm`,`do-nm`],flexible:!1,lang:`de`,examSoon:!0,since:`2026-10-12`},{id:5,name:`Zeynep A.`,cls:`B`,slots:[`do-ab`,`fr-ab`,`sa-vm`],flexible:!1,lang:`tr`,examSoon:!0,since:`2026-10-14`},{id:6,name:`Jonas W.`,cls:`A`,slots:[`fr-nm`,`sa-vm`,`sa-nm`],flexible:!1,lang:`de`,examSoon:!1,since:`2026-10-15`},{id:7,name:`Elif D.`,cls:`B`,slots:[`mo-vm`,`di-vm`,`mi-vm`,`do-vm`],flexible:!1,lang:`tr`,examSoon:!1,since:`2026-10-20`},{id:8,name:`Paul S.`,cls:`B`,slots:[`do-nm`,`do-ab`],flexible:!1,lang:`de`,examSoon:!0,since:`2026-10-21`},{id:9,name:`Mert Ö.`,cls:`A`,slots:[],flexible:!0,lang:`tr`,examSoon:!0,since:`2026-10-23`},{id:10,name:`Hannah R.`,cls:`B197`,slots:[`mo-nm`,`di-nm`,`fr-nm`],flexible:!1,lang:`de`,examSoon:!1,since:`2026-10-27`},{id:11,name:`Can T.`,cls:`B`,slots:[`fr-nm`,`sa-nm`],flexible:!1,lang:`de`,examSoon:!1,since:`2026-11-02`},{id:12,name:`Mia F.`,cls:`B`,slots:[`di-ab`,`mi-ab`,`do-nm`],flexible:!1,lang:`de`,examSoon:!1,since:`2026-11-04`}],h=`de-boerse-v1`,g=document.getElementById(`app`),_=[];function v(){let e=[],t=new Date;for(;e.length<6;)t.getDay()!==0&&e.push(a(t)),t.setDate(t.getDate()+1);return e}function y(){let e={step:1,lesson:{date:v()[0],time:`15:00`,minutes:90,cls:`B`},ignoreTimes:!1,bubbleLang:`de`,phase:`sent`,sentAt:``,rescued:0,price:``,copied:!1};try{let t=JSON.parse(sessionStorage.getItem(h)||`null`);t&&(typeof t.rescued==`number`&&(e.rescued=t.rescued),typeof t.price==`string`&&(e.price=t.price))}catch{}return e}var b=y();function x(){try{sessionStorage.setItem(h,JSON.stringify({rescued:b.rescued,price:b.price}))}catch{}}function S(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}var C=`<svg class="dia" viewBox="0 0 12 12" aria-hidden="true"><path d="M6 0.6 11.4 6 6 11.4 0.6 6Z"/></svg>`,w=`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,T=[`So`,`Mo`,`Di`,`Mi`,`Do`,`Fr`,`Sa`],E={B:`Auto (B)`,B197:`Automatik`,A:`Motorrad`},D={mo:`Mo`,di:`Di`,mi:`Mi`,do:`Do`,fr:`Fr`,sa:`Sa`},O={vm:`vormittags`,nm:`nachmittags`,ab:`abends`};function k(e,t){let n=i(e),r=`${n.getDate()}.${n.getMonth()+1}.`,o=new Date,s=new Date(o.getFullYear(),o.getMonth(),o.getDate()+1),c=T[n.getDay()],l=e===a(o)?`Heute`:e===a(s)?`Morgen`:c;return`<button type="button" class="chip day" data-action="day" data-value="${e}" data-key="day-${e}" aria-pressed="${t}"><span class="day-top">${l}</span><span class="day-date">${l===c?r:`${c} ${r}`}</span></button>`}function A(e=0){let t=new Date(Date.now()+e*6e4);return`${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}`}function j(){return l(b.lesson,m,b.ignoreTimes)}function M(e){return e===1?`1 Fahrstunde`:`${e} Fahrstunden`}function N(){let e=Number(b.price.replace(`,`,`.`));return Number.isFinite(e)&&e>0?e:0}function P(e){return`${e.toFixed(2).replace(`.`,`,`).replace(`,00`,``)} €`}function F(){return`
    <header class="top">
      <img class="logo" src="./logo.webp" width="500" height="106" alt="Diamond Eyes Fahrschule" />
      <div class="progress" role="img" aria-label="Schritt ${b.step} von 3">${[1,2,3].map(e=>`<span class="pdot${e<=b.step?` on`:``}${e===b.step?` now`:``}">${C}</span>`).join(``)}</div>
      <span class="app-name">Ausfall-Börse</span>
    </header>
    <p class="demo-banner">Demo mit erfundenen Schülern. Es wird nichts gesendet und nichts gespeichert.</p>`}function I(){let e=b.lesson;return`
    <section class="screen">
      <h1 class="title" tabindex="-1">Welche Stunde ist frei geworden?</h1>
      <p class="hint">Vier Angaben, dann siehst du, wer von deiner Warteliste passt.</p>

      <fieldset class="q">
        <legend class="q-title">Tag</legend>
        <div class="chips wrap3">${v().map(t=>k(t,e.date===t)).join(``)}</div>
      </fieldset>

      <div class="field time-field">
        <label class="q-title" for="f-time">Uhrzeit</label>
        <input id="f-time" type="time" step="900" value="${S(e.time)}" data-input="time" data-key="in-time" />
      </div>

      <fieldset class="q">
        <legend class="q-title">Dauer</legend>
        <div class="segs">${[45,90,135].map(t=>`<button type="button" class="seg" data-action="minutes" data-value="${t}" data-key="minutes-${t}" aria-pressed="${e.minutes===t}">${t} Min.</button>`).join(``)}</div>
      </fieldset>

      <fieldset class="q">
        <legend class="q-title">Fahrzeug</legend>
        <div class="segs">${[`B`,`B197`,`A`].map(t=>`<button type="button" class="seg" data-action="cls" data-value="${t}" data-key="cls-${t}" aria-pressed="${e.cls===t}">${E[t]}</button>`).join(``)}</div>
      </fieldset>
    </section>`}function L(e,t){let n=e.flexible?`flexibel`:e.slots.map(e=>`${D[e.split(`-`)[0]]} ${O[e.split(`-`)[1]]}`).join(`, `),r=e.examSoon?`<span class="badge">kurz vor der Prüfung</span>`:``,i=e.lang===`tr`?`<span class="badge soft">Türkisch</span>`:``,a=t===`won`?`<span class="row-state won">hat zugesagt</span>`:t===`lost`?`<span class="row-state">„schon weg“</span>`:``;return`<li class="wrow${t===`won`?` is-won`:``}">
    <div class="row-main"><span class="row-name">${S(e.name)}</span>${r}${i}</div>
    <div class="row-sub">${S(n)}</div>${a}
  </li>`}function R(){let e=j(),t=b.lesson,n=e.length,r=n?`<ul class="wrows">${e.map(e=>L(e)).join(``)}</ul>`:`<div class="empty">
        <p>Niemand auf der Warteliste hat diese Zeit angegeben.</p>
        ${b.ignoreTimes?``:`<button type="button" class="btn ghost wide" data-action="ignore-times" data-key="ignore-times">Trotzdem allen mit ${S(E[t.cls])} anbieten</button>`}
      </div>`,i=e.filter(e=>e.lang===`tr`).length;return`
    <section class="screen">
      <h1 class="title" tabindex="-1">${n===0?`Kein Schüler passt`:n===1?`1 Schüler passt`:`${n} Schüler passen`}</h1>
      <p class="hint">${S(d(t,`de`))}. Gefragt wird nur, wer bei der Anmeldung „kurzfristige Stunden“ angekreuzt hat.${b.ignoreTimes?` Die angegebenen Zeiten sind ausgeblendet.`:``}</p>
      ${r}
      ${n?`<h2 class="preview-title">Das bekommt der Schüler</h2>
      <div class="segs bubble-tabs" role="group" aria-label="Sprache der Nachricht">
        <button type="button" class="seg" data-action="bubble" data-value="de" data-key="bubble-de" aria-pressed="${b.bubbleLang===`de`}">Deutsch (${n-i})</button>
        <button type="button" class="seg" data-action="bubble" data-value="tr" data-key="bubble-tr" aria-pressed="${b.bubbleLang===`tr`}">Türkisch (${i})</button>
      </div>
      <pre class="bubble" lang="${b.bubbleLang}">${S(p(t,b.bubbleLang))}</pre>

      <div class="today">
        <p class="sub-title">Geht heute schon, ohne Technik</p>
        <p class="today-text">Text kopieren und in WhatsApp Business an deine Liste oder deinen Kanal „Kurzfristig“ schicken.</p>
        <div class="today-row">
          <button type="button" class="btn ghost" data-action="copy" data-key="copy">${b.copied?`Kopiert`:`Text kopieren`}</button>
          <a class="btn ghost" href="https://wa.me/?text=${encodeURIComponent(p(t,b.bubbleLang))}" target="_blank" rel="noopener" data-key="wa">WhatsApp öffnen</a>
        </div>
      </div>`:``}
    </section>`}function z(){let e=j(),t=e[0],n=e.slice(1),r=b.lesson,i=c(r.minutes),a=b.phase!==`sent`,o=b.phase===`done`,s=N(),l=`
    <ol class="timeline">
      <li class="tl on"><span class="tl-time">${S(b.sentAt)}</span><span>Angebot an ${e.length} Schüler gesendet</span></li>
      <li class="tl${a?` on`:` wait`}"><span class="tl-time">${a?S(A(2)):`…`}</span><span>${a?`${S(t.name)} hat zugesagt`:`Warte auf die erste Zusage`}</span></li>
      ${n.length?`<li class="tl${o?` on`:` wait`}"><span class="tl-time">${o?S(A(2)):`…`}</span><span>${o?`${n.length} ${n.length===1?`anderer hat`:`andere haben`} automatisch „Leider schon weg“ bekommen`:`Absage an die anderen`}</span></li>`:``}
    </ol>`,u=o?`<div class="result" role="status">
        <p class="result-label">Nachricht an dich</p>
        <p class="result-text">${S(f(r))} hat jetzt ${S(t.name.replace(/\.$/,``))}.</p>
        <p class="result-sub">Gerettet: ${M(i)} (${r.minutes} Minuten)</p>
      </div>
      <ul class="wrows compact">${L(t,`won`)}${n.map(e=>L(e,`lost`)).join(``)}</ul>
      <div class="tally">
        <p class="tally-title">In dieser Demo gerettet: <strong>${M(b.rescued)}</strong></p>
        <div class="field">
          <label class="field-label" for="f-price">Was kostet bei dir eine Fahrstunde (45 Min.)? <em>(freiwillig)</em></label>
          <input id="f-price" inputmode="decimal" autocomplete="off" placeholder="zum Beispiel 65" value="${S(b.price)}" data-input="price" data-key="in-price" />
        </div>
        <p class="tally-sum" id="tally-sum">${s?`Das sind ${P(b.rescued*s)}, die sonst weg gewesen wären.`:``}</p>
      </div>
      <button type="button" class="btn primary wide" data-action="again" data-key="again">Noch eine Stunde melden</button>`:``;return`
    <section class="screen">
      <h1 class="title" tabindex="-1">${o?`Stunde gerettet`:`Angebot läuft`}</h1>
      <p class="hint">${S(d(r,`de`))}</p>
      ${l}
      ${u}
    </section>`}function B(){if(b.step===3)return``;let e=j().length,t=b.step===2?`<button type="button" class="btn back compact" data-action="back" data-key="back" aria-label="Zurück">${w}</button>`:``,n=b.step===1?`<button type="button" class="btn primary" data-action="show" data-key="show">Passende Schüler zeigen</button>`:`<button type="button" class="btn primary" data-action="send" data-key="send" aria-disabled="${e===0}">Angebot an ${e===1?`einen Schüler`:`alle ${e}`} senden</button>`;return`<div class="bar"><div class="bar-row${t?``:` single`}">${t}${n}</div></div>`}var V=null;function H(){let e=document.activeElement?.dataset?.key,t=V!==b.step,n=b.step===1?I():b.step===2?R():z();g.innerHTML=`${F()}<main class="main${t?` enter`:``}">${n}</main>${B()}`,g.classList.toggle(`has-bar`,b.step!==3),t?V!==null&&(window.scrollTo(0,0),g.querySelector(`.title`)?.focus({preventScroll:!0})):e&&g.querySelector(`[data-key="${e}"]`)?.focus({preventScroll:!0}),V=b.step}function U(){_.forEach(e=>window.clearTimeout(e)),_=[]}function W(){U(),b.phase=`sent`,b.sentAt=A(),b.step=3,H(),_.push(window.setTimeout(()=>{b.phase=`accepted`,H()},2200)),_.push(window.setTimeout(()=>{b.phase=`done`,b.rescued+=c(b.lesson.minutes),x(),H()},3400))}g.addEventListener(`click`,e=>{let t=e.target.closest(`[data-action]`);if(!t)return;let n=t.dataset.value??``,r=b.lesson;switch(t.dataset.action){case`day`:r.date=n;break;case`minutes`:r.minutes=Number(n);break;case`cls`:r.cls=n;break;case`show`:b.ignoreTimes=!1,b.copied=!1,b.step=2;break;case`back`:b.step=1;break;case`ignore-times`:b.ignoreTimes=!0;break;case`bubble`:b.bubbleLang=n===`tr`?`tr`:`de`,b.copied=!1;break;case`copy`:{let e=p(r,b.bubbleLang);navigator.clipboard?.writeText(e).then(()=>{b.copied=!0,H()},()=>void 0);return}case`send`:if(j().length===0)return;W();return;case`again`:U(),b.step=1;break;default:return}H()}),g.addEventListener(`input`,e=>{let t=e.target;if(t.dataset.input===`time`&&/^\d{2}:\d{2}$/.test(t.value)&&(b.lesson.time=t.value),t.dataset.input===`price`){b.price=t.value.replace(/[^\d.,]/g,``).slice(0,6),t.value!==b.price&&(t.value=b.price),x();let e=document.getElementById(`tally-sum`),n=N();e&&(e.textContent=n?`Das sind ${P(b.rescued*n)}, die sonst weg gewesen wären.`:``)}}),H();