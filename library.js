(() => {
  const cards=[...document.querySelectorAll('.catalog-card')];
  const search=document.getElementById('librarySearch');
  const count=document.getElementById('catalogCount');
  const empty=document.getElementById('catalogEmpty');
  let chamber='all', type='all';
  function apply(){
    const q=(search?.value||'').trim().toLowerCase(); let shown=0;
    cards.forEach(card=>{
      const hay=(card.dataset.search+' '+card.innerText).toLowerCase();
      const ok=(chamber==='all'||card.dataset.chamber===chamber)&&(type==='all'||card.dataset.type===type)&&(!q||hay.includes(q));
      card.hidden=!ok; if(ok) shown++;
    });
    if(count) count.textContent=`${shown} ${shown===1?'entry':'entries'} in the open library`;
    if(empty) empty.hidden=shown!==0;
  }
  document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');chamber=b.dataset.filter;apply()}));
  document.querySelectorAll('.type-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.type-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');type=b.dataset.type;apply()}));
  search?.addEventListener('input',apply); apply();
})();
