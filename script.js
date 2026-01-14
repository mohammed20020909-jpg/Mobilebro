const data=[
 {name:"Galaxy S23 Ultra",os:"android",score:9.2,pros:["شاشة ممتازة","كاميرا 200MP","أداء قوي"],cons:["سعر مرتفع"]},
 {name:"iPhone 14 Pro",os:"ios",score:9.0,pros:["ثبات النظام","فيديو احترافي"],cons:["شحن بطيء"]},
 {name:"Xiaomi 13 Pro",os:"android",score:8.8,pros:["سعر مقابل أداء","شحن سريع"],cons:["واجهة مزدحمة"]}
];

const phones=document.getElementById("phones");
const s=document.getElementById("search");
const f=document.getElementById("filter");
const c1=document.getElementById("c1");
const c2=document.getElementById("c2");

function render(){
 phones.innerHTML="";
 let res=data.filter(p=>
  (p.name.toLowerCase().includes(s.value.toLowerCase())) &&
  (f.value=="all"||p.os==f.value)
 );
 res.forEach(p=>{
  phones.innerHTML+=`
   <div class="card">
    <h3>${p.name}</h3>
    <div class="rating">⭐ ${p.score}/10</div>
    ${p.pros.map(x=>`<p class="good">✔ ${x}</p>`).join("")}
    ${p.cons.map(x=>`<p class="bad">✖ ${x}</p>`).join("")}
   </div>`;
 });
}

data.forEach(p=>{
 c1.innerHTML+=`<option>${p.name}</option>`;
 c2.innerHTML+=`<option>${p.name}</option>`;
});

function compare(){
 let a=data.find(x=>x.name==c1.value);
 let b=data.find(x=>x.name==c2.value);
 document.getElementById("result").innerHTML=
 `<b>${a.name}</b> (${a.score}) vs <b>${b.name}</b> (${b.score})<br>
 الفائز: ${a.score>b.score?a.name:b.name} 🏆`;
}

s.oninput=f.onchange=render;
render();