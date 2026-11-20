import{e as l}from"./index-Cf-cAy7W.js";const d=["존재하지 않는 지하 4층","뒤돌아보지 않는 다락방","룸 제로 · 360도의 사각"];function p(){try{return JSON.parse(localStorage.getItem("blind-room.meta.v1")||"{}")?.seasonPassUnlocked===!0}catch{return!1}}function h(){try{const s=JSON.parse(localStorage.getItem("blind-room.meta.v1")||"{}");return Array.isArray(s?.collectedSisterEchoes)?new Set(s.collectedSisterEchoes.filter(r=>typeof r=="string"&&/^BR0[1-5]_ECHO_[1-5]$/.test(r))).size:0}catch{return 0}}function g(s){const u=l.at(-1).cover,a=l.find(e=>e.id==="br03"),i=a?4:3,m=a?d:["영정사진을 찍지 않는 사진관",...d];let t=p();s.innerHTML=`<main class="season-hub">
    <section class="hub-hero" aria-labelledby="season-title">
      <img class="hub-cover" src="./${u}" alt="" fetchpriority="high">
      <div class="hub-mast"><span>BLIND ROOM 360</span><span>진엔딩 파편 <b data-echo-count>${h()}</b> / 5</span></div>
      <div class="hub-title"><span>SEASON 01</span><h1 id="season-title">사각의 방</h1><p>360° 오컬트 추리 비주얼 노블</p></div>
    </section>
    <nav class="hub-episodes" aria-label="에피소드 목록">${l.filter(e=>e.id!=="br03").map(e=>`
      <a href="?ep=${e.id}" class="hub-episode">
        <img src="./${e.cover}" alt="" width="84" height="88">
        <div><small>EP${e.number} · 무료</small><h2>${e.title}</h2><span>${e.playTime}</span></div>
        <span aria-hidden="true" class="hub-arrow">↗</span>
      </a>`).join("")}
      ${a?`<article class="hub-episode hub-paid"><img src="./${a.cover}" alt="" width="84" height="88"><div>
        <small>EP03 · 시즌패스</small><h2>${a.title}</h2><span>${a.playTime}</span>
        <div class="pass-controls"><button type="button" data-pass-toggle aria-pressed="false">체험 해금</button>
        <a href="?ep=br03" data-pass-enter hidden>조사 시작 ↗</a></div></div></article>`:""}</nav>
    <details class="hub-pass"><summary>EP0${i}–06 · 시즌패스 <span>출시 예정</span></summary>
      <ol start="${i}">${m.map((e,n)=>`<li><small>EP0${n+i}</small> ${e}</li>`).join("")}</ol>
    </details>
  </main>`;function o(){const e=s.querySelector("[data-pass-toggle]"),n=s.querySelector("[data-pass-enter]");!e||!n||(e.textContent=t?"체험 해제":"체험 해금",e.setAttribute("aria-pressed",String(t)),n.hidden=!t)}o(),s.querySelector("[data-pass-toggle]")?.addEventListener("click",()=>{t=!t;try{const e=JSON.parse(localStorage.getItem("blind-room.meta.v1")||"{}");localStorage.setItem("blind-room.meta.v1",JSON.stringify({...e,seasonPassUnlocked:t}))}catch{}o()});const c=()=>{t=p(),o();const e=s.querySelector("[data-echo-count]");e&&(e.textContent=String(h()))};window.addEventListener("pageshow",c),window.addEventListener("storage",c)}export{g as mountHub};
