const d=new Date('2026-08-22T19:00:00');
setInterval(()=>{
let diff=d-new Date();
if(diff<0){countdown.innerHTML='Sot është dita e dasmës!';return;}
let days=Math.floor(diff/86400000);
let hrs=Math.floor(diff%86400000/3600000);
let mins=Math.floor(diff%3600000/60000);
document.getElementById('countdown').textContent=`${days} ditë ${hrs} orë ${mins} min`;
},1000);
