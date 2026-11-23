import{e as n}from"./index-BWuyxkfb.js";const g=[{ep:3,title:"영정사진을 찍지 않는 사진관"},{ep:4,title:"존재하지 않는 지하 4층"},{ep:5,title:"뒤돌아보지 않는 다락방"},{ep:6,title:"룸 제로 · 360도의 사각"}];function r(){try{return JSON.parse(localStorage.getItem("blind-room.meta.v1")||"{}")?.seasonPassUnlocked===!0}catch{return!1}}function c(){try{const t=JSON.parse(localStorage.getItem("blind-room.meta.v1")||"{}");return Array.isArray(t?.collectedSisterEchoes)?new Set(t.collectedSisterEchoes.filter(l=>typeof l=="string"&&/^BR0[1-5]_ECHO_[1-5]$/.test(l))).size:0}catch{return 0}}function v(t){const d=n.at(-1).cover,p=n.filter(e=>!e.paid),m=n.filter(e=>e.paid),h=Math.max(...n.map(e=>Number(e.number))),s=g.filter(e=>e.ep>h);let a=r();t.innerHTML=`<main class="season-hub">
    <section class="hub-hero" aria-labelledby="season-title">
      <img class="hub-cover" src="./${d}" alt="" fetchpriority="high">
      <div class="hub-mast"><span>BLIND ROOM 360</span><span>진엔딩 파편 <b data-echo-count>${c()}</b> / 5</span></div>
      <div class="hub-title"><span>SEASON 01</span><h1 id="season-title">사각의 방</h1><p>360° 오컬트 추리 비주얼 노블</p></div>
    </section>
    <nav class="hub-episodes" aria-label="에피소드 목록">${p.map(e=>`
      <a href="?ep=${e.id}" class="hub-episode">
        <img src="./${e.cover}" alt="" width="84" height="88">
        <div><small>EP${e.number} · 무료</small><h2>${e.title}</h2><span>${e.playTime}</span></div>
        <span aria-hidden="true" class="hub-arrow">↗</span>
      </a>`).join("")}
      ${m.map(e=>`<article class="hub-episode hub-paid"><img src="./${e.cover}" alt="" width="84" height="88"><div>
        <small>EP${e.number} · 시즌패스</small><h2>${e.title}</h2><span>${e.playTime}</span>
        <div class="pass-controls"><button type="button" data-pass-toggle aria-pressed="false">체험 해금</button>
        <a href="?ep=${e.id}" data-pass-enter hidden>조사 시작 ↗</a></div></div></article>`).join("")}</nav>
    ${s.length?`<details class="hub-pass"><summary>EP0${s[0].ep}–06 · 시즌패스 <span>출시 예정</span></summary>
      <ol start="${s[0].ep}">${s.map(e=>`<li><small>EP0${e.ep}</small> ${e.title}</li>`).join("")}</ol>
    </details>`:""}
  </main>`;function i(){for(const e of t.querySelectorAll("[data-pass-toggle]"))e.textContent=a?"체험 해제":"체험 해금",e.setAttribute("aria-pressed",String(a));for(const e of t.querySelectorAll("[data-pass-enter]"))e.hidden=!a}i(),t.addEventListener("click",e=>{if(e.target?.closest("[data-pass-toggle]")){a=!a;try{const u=JSON.parse(localStorage.getItem("blind-room.meta.v1")||"{}");localStorage.setItem("blind-room.meta.v1",JSON.stringify({...u,seasonPassUnlocked:a}))}catch{}i()}});const o=()=>{a=r(),i();const e=t.querySelector("[data-echo-count]");e&&(e.textContent=String(c()))};window.addEventListener("pageshow",o),window.addEventListener("storage",o)}export{v as mountHub};
