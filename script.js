// Mobile menu
const btn=document.querySelector('.menu'),links=document.querySelector('.links');
if(btn&&links){btn.addEventListener('click',()=>{const o=links.classList.toggle('open');btn.setAttribute('aria-expanded',o)});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');btn.setAttribute('aria-expanded','false')}))}
// Booking form: sensible dates, then go to the hotel's booking page
(()=>{const f=document.getElementById('booking');if(!f)return;const ci=document.getElementById('checkin'),co=document.getElementById('checkout');
const iso=d=>new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10);const t=new Date(),n=new Date();n.setDate(t.getDate()+1);
ci.min=ci.value=iso(t);co.min=co.value=iso(n);
ci.addEventListener('change',()=>{const d=new Date(ci.value+'T12:00:00');d.setDate(d.getDate()+1);co.min=iso(d);if(co.value<=ci.value)co.value=iso(d)});
f.addEventListener('submit',e=>{e.preventDefault();window.open(f.action,'_blank','noopener')})})();
// Hero carousel
(()=>{const hero=document.querySelector('.hero');if(!hero)return;const slides=[...hero.querySelectorAll('.slide')],dots=hero.querySelector('.heroDots');if(slides.length<2||!dots)return;
let i=0,timer=null;const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
slides.forEach((_,k)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Slide '+(k+1));b.addEventListener('click',()=>{go(k);restart()});dots.appendChild(b)});
function go(k){slides[i].classList.remove('active');i=(k+slides.length)%slides.length;slides[i].classList.add('active');dots.querySelectorAll('button').forEach((b,j)=>b.setAttribute('aria-current',j===i))}
function start(){if(!reduce&&!timer)timer=setInterval(()=>go(i+1),6000)}function stop(){clearInterval(timer);timer=null}function restart(){stop();start()}
hero.querySelector('.heroPrev').addEventListener('click',()=>{go(i-1);restart()});hero.querySelector('.heroNext').addEventListener('click',()=>{go(i+1);restart()});
hero.addEventListener('mouseenter',stop);hero.addEventListener('mouseleave',start);hero.addEventListener('focusin',stop);hero.addEventListener('focusout',start);
document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
let x0=null;hero.addEventListener('touchstart',e=>{x0=e.touches[0].clientX},{passive:true});hero.addEventListener('touchend',e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>50){go(dx<0?i+1:i-1);restart()}x0=null});
hero.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){go(i-1);restart()}if(e.key==='ArrowRight'){go(i+1);restart()}});
go(0);start()})();
