
const menu=document.querySelector('.menu'), links=document.querySelector('.links');
if(menu&&links) menu.addEventListener('click',()=>{links.classList.toggle('open');menu.setAttribute('aria-expanded',links.classList.contains('open')?'true':'false')});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));
