const intro = document.querySelector('#intro-screen');
const petals = document.querySelector('.petals');
function shower(amount = 45) {
  const colors = ['#f26ea7','#eac7ff','#ffd270','#ffb6cc','#a98ada'];
  for (let i = 0; i < amount; i++) {
    const petal = document.createElement('i'); petal.textContent = i % 3 ? '♥' : '✦';
    petal.style.cssText = `position:absolute;left:${Math.random()*100}vw;top:-30px;color:${colors[i%colors.length]};font-style:normal;font-size:${12+Math.random()*18}px;transition:transform ${2+Math.random()*2}s ease-in,opacity .5s ${1.6+Math.random()*1.6}s;`;
    petals.append(petal); requestAnimationFrame(()=>{petal.style.transform=`translate(${(Math.random()-.5)*180}px,${innerHeight+70}px) rotate(${Math.random()*540}deg)`;petal.style.opacity=0}); setTimeout(()=>petal.remove(),4200);
  }
}
const passwordScreen = document.querySelector('#password-screen');
const passwordInput = document.querySelector('#password');
function unlock(){
  if(passwordInput.value.trim().toLowerCase()==='babu'){ passwordScreen.classList.add('hide'); shower(35); }
  else { document.querySelector('#password-note').textContent='That is not it, babu — try the sweet name again.'; passwordInput.focus(); }
}
document.querySelector('#unlock').onclick=unlock;
passwordInput.addEventListener('keydown',event=>{if(event.key==='Enter')unlock()});
document.querySelector('#open-gift').onclick=()=>{shower(95);intro.classList.add('open')};
const modal=document.querySelector('#modal'), modalText=document.querySelector('#modal-text');
document.querySelectorAll('.wish-card').forEach(card=>card.onclick=()=>{modalText.textContent=card.dataset.message;modal.classList.add('open');modal.setAttribute('aria-hidden','false');shower(24)});
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.querySelector('.close').onclick=closeModal;modal.onclick=e=>{if(e.target===modal)closeModal()};
document.querySelector('#celebrate').onclick=()=>{modalText.textContent='Palak babu, har din tumhe muskuraane ki ek nayi wajah de. Happy Birthday meri truly wonderful jaan!';modal.classList.add('open');shower(100)};
document.querySelector('#wish-form').onsubmit=e=>{e.preventDefault();const wish=document.querySelector('#wish').value.trim();shower(70);const toast=document.querySelector('#toast');toast.textContent='Your email is ready to send to Anmol! ✨';toast.classList.add('show');window.location.href=`mailto:anmol.tech422@gmail.com?subject=${encodeURIComponent('A birthday wish for Palak ♥')}&body=${encodeURIComponent(wish+'\n\nWith love,')}`;e.target.reset();setTimeout(()=>toast.classList.remove('show'),3800)};
const photoQuotes=[
  'Tumhari har photo meri favourite memory ban jaati hai, meri jaan. ♥',
  'Babu, tum saath ho toh har moment thoda aur beautiful lagta hai.',
  'Tumhari smile dekh kar mera din automatically better ho jaata hai.',
  'Palak, tum meri life ka woh pyaara sa magic ho jo kabhi khatam na ho.',
  'Har frame mein tum, aur har thought mein tum — bas itna sa pyaar hai.',
  'Tumhare saath wali memories ko main hamesha dil ke paas rakhunga.',
  'Meri favourite view? Tum, bilkul aisi hi, naturally beautiful.',
  'Tumhari aankhon mein ek alag hi sukoon hai, babu.'
];
let lastQuote=-1;
document.querySelector('#gallery').onclick=e=>{const img=e.target.closest('img');if(!img)return;let quote;do{quote=Math.floor(Math.random()*photoQuotes.length)}while(quote===lastQuote);lastQuote=quote;modalText.textContent=photoQuotes[quote];modal.querySelector('.modal-icon').textContent='✦';modal.classList.add('open');};
let candleBlown=false;
function blowCandle(){if(candleBlown)return;candleBlown=true;document.querySelector('#birthday-candle').classList.add('out');document.querySelector('#candle-message').textContent='Your wish is on its way to the stars, meri jaan! ✨';shower(75)}
document.querySelector('#birthday-candle').onclick=blowCandle;
document.querySelector('#make-wish').onclick=blowCandle;
const music=document.querySelector('#music');
const tracks=[{src:'apsara.mpeg',name:'♫ Pause Apsara'},{src:'birthday-message.mpeg',name:'♫ Pause birthday message'}]; let track=0;
document.querySelector('#music-toggle').onclick=()=>{if(music.paused){music.play().catch(()=>{});document.querySelector('#music-toggle').textContent=tracks[track].name}else{music.pause();document.querySelector('#music-toggle').textContent=track?'♫ Play birthday message':'♫ Play Apsara'}};
document.querySelector('#music-next').onclick=()=>{track=(track+1)%2;music.src=tracks[track].src;music.play().catch(()=>{});document.querySelector('#music-toggle').textContent=tracks[track].name;document.querySelector('#music-next').textContent=track?'⇄ Play Apsara':'⇄ Play birthday message'};
