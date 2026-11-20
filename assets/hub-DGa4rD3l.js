import{e as n}from"./index-Bqfd91sF.js";const l=["영정사진을 찍지 않는 사진관","존재하지 않는 지하 4층","뒤돌아보지 않는 다락방","룸 제로 · 360도의 사각"];function i(){try{const e=JSON.parse(localStorage.getItem("blind-room.meta.v1")||"{}");return Array.isArray(e?.collectedSisterEchoes)?new Set(e.collectedSisterEchoes.filter(a=>typeof a=="string"&&/^BR0[1-5]_ECHO_[1-5]$/.test(a))).size:0}catch{return 0}}function h(e){const o=n.at(-1).cover;e.innerHTML=`<main class="season-hub">
    <section class="hub-hero" aria-labelledby="season-title">
      <img class="hub-cover" src="./${o}" alt="" fetchpriority="high">
      <div class="hub-mast"><span>BLIND ROOM 360</span><span>진엔딩 파편 <b data-echo-count>${i()}</b> / 5</span></div>
      <div class="hub-title"><span>SEASON 01</span><h1 id="season-title">사각의 방</h1><p>360° 오컬트 추리 비주얼 노블</p></div>
    </section>
    <nav class="hub-episodes" aria-label="무료 에피소드">${n.map(s=>`
      <a href="?ep=${s.id}" class="hub-episode">
        <img src="./${s.cover}" alt="" width="84" height="88">
        <div><small>EP${s.number} · 무료</small><h2>${s.title}</h2><span>${s.playTime}</span></div>
        <span aria-hidden="true" class="hub-arrow">↗</span>
      </a>`).join("")}</nav>
    <details class="hub-pass"><summary>EP03–06 · 시즌패스 <span>출시 예정</span></summary>
      <ol start="3">${l.map((s,r)=>`<li><small>EP0${r+3}</small> ${s}</li>`).join("")}</ol>
    </details>
  </main>`;const t=()=>{const s=e.querySelector("[data-echo-count]");s&&(s.textContent=String(i()))};window.addEventListener("pageshow",t),window.addEventListener("storage",t)}export{h as mountHub};
