const CULPRIT = 'فرح';

const SUSPECTS = [
  { id:'aya', name:' آية', role:'رئيسة نادي الأمن السيبراني', emoji:'🛡️', color:'#22d3ee',
    bio:'تُدير ورش التشفير والتحليل الجنائي. شُوهدت في الجامعة الساعة 1 فجراً.', motive:'تملك معرفة عميقة بأدوات الاختراق' },
  { id:'farah',  name:'فرح', role:'مسؤول مختبر الشبكات', emoji:'🧩', color:'#60a5fa',
    bio:'يدير المفاتيح والمعامل وصلاحيات VLAN. كان مناوباً ليلة الحادثة.', motive:'وصول كامل للبنية التحتية' },
  { id:'zaid',  name:'زيد', role:'مطور ويب في فريق IEEE', emoji:'💻', color:'#a3e635',
    bio:'تطوّر واجهات المشروع وواجهات REST. لديها حساب على سيرفر المشروع.', motive:'يعرف تفاصيل المشروع جيداً' },
  { id:'fade',  name:'فادي', role:'طالب دراسات عليا — ذكاء اصطناعي', emoji:'🧠', color:'#34d399',
    bio:'باحث في تعلم الآلة، سيرفره يعمل ليل نهار لتدريب النماذج.', motive:'يحتاج موارد حوسبة ضخمة' },
  { id:'dalia',  name:'داليا', role:'مساعد تقني في قسم IT', emoji:'🔧', color:'#fbbf24',
    bio:'يدعم الخوادم والنسخ الاحتياطي ويملك مفاتيح غرفة السيرفرات.', motive:'وصول فيزيائي مباشر للسيرفرات' },
];

const CATS = {
  'Binary':   {c:'#22d3ee'}, 'أساسيات': {c:'#94a3b8'}, 'Hex':     {c:'#f472b6'},
  'شبكات':    {c:'#38bdf8'}, 'ويب':     {c:'#a3e635'}, 'منطق':    {c:'#ffd21f'},
  'أنظمة':    {c:'#f87171'}, 'برمجة':   {c:'#34d399'}, 'عتاد':    {c:'#fb923c'},
};
const EV_CATS = {
  'زمان':  {icon:'🕐', c:'#ffd21f'}, 'مكان':  {icon:'📍', c:'#38bdf8'}, 'أداة':  {icon:'🛠️', c:'#fb923c'},
  'وصول':  {icon:'🔑', c:'#a78bfa'}, 'شهادة': {icon:'👁️', c:'#22d3ee'}, 'دليل':  {icon:'🧬', c:'#34d399'},
  'دافع':  {icon:'🎯', c:'#f87171'},
};

const QUESTIONS = [
 { q:'ما القيمة العشرية للعدد الثنائي (1010)₂ ؟', cat:'Binary', opts:['8','10','12','5'], ans:1,
   ev:{cat:'زمان', text:'سجلات السيرفر: بدأ الهجوم الساعة 02:13 فجراً بالضبط — خلال نافذة صيانة الشبكات الأسبوعية (02:00–03:00).', to:null} },
 { q:'كم عدد البتات (Bits) في البايت الواحد؟', cat:'أساسيات', opts:['4','16','8','32'], ans:2,
   ev:{cat:'شهادة', text:'كاميرا الممر:  كانت في الجامعة فعلاً الساعة 1 فجراً… لكنها كانت تطبع شهادات ورشة عمل فقط.', to:'آية'} },
 { q:'ما التمثيل الست عشري (Hex) للعدد العشري 15؟', cat:'Hex', opts:['A','E','15','F'], ans:3,
   ev:{cat:'شهادة', text:'زيد رفع Commit على GitHub الساعة 2 فجراً… لكنه مجرد إصلاح خطأ إملائي في ملف README.', to:'زيد'} },
 { q:'ما معنى الاختصار CPU؟', cat:'عتاد', opts:['Central Processing Unit','Computer Personal Unit','Central Program Utility','Control Power Unit'], ans:0,
   ev:{cat:'شهادة', text:'سيرفر فادي أظهر حملاً عالياً تلك الليلة… لكنه كان يُدرّب نموذج مشروع تخرجه — مجدول مسبقاً.', to:'fade'} },
 { q:'ما معنى الاختصار RAM؟', cat:'عتاد', opts:['Read Access Memory','Random Access Memory','Run All Memory','Rapid Access Module'], ans:1,
   ev:{cat:'شهادة', text:'داليا شغّل نسخة احتياطية الساعة 2 فجراً… لكنها مهمة مجدولة تعمل تلقائياً كل أسبوع.', to:'dalia '} },
 { q:'ما المنفذ الافتراضي لبروتوكول HTTP؟', cat:'شبكات', opts:['21','8080','80','443'], ans:2,
   ev:{cat:'مكان', text:'تحليل الحزم أثبت أن الهجوم انطلق من داخل شبكة الجامعة — وليس من الإنترنت الخارجي.', to:null} },
 { q:'ما معنى الاختصار IP؟', cat:'شبكات', opts:['Internet Protocol','Internal Process','Intranet Port','Information Provider'], ans:0,
   ev:{cat:'مكان', text:'حزم الهجوم خرجت من VLAN 30 — وهو الـ VLAN الخاص بمختبر الشبكات تحديداً.', to:'farah'} },
 { q:'أي وسم HTML يُستخدم لتعريف فقرة نصية؟', cat:'ويب', opts:["h1", " br","div","p"], ans:3,
   ev:{cat:'أداة', text:'رسالة الفدية كُتبت برسمة ASCII تحمل توقيع SYN-ACK — بصمة تدل على خلفية شبكات عميقة، لا تطوير ويب.', to:null} },
 { q:'ما معنى الاختصار CSS؟', cat:'ويب', opts:['Computer Style Sheets','Cascading Style Sheets','Creative Style System','Colorful Style Sheets'], ans:1,
   ev:{cat:'شهادة', text:'وصلت رسالة تصيّد (Phishing) إلى بريد زيد تلك الليلة… لكنه لم ينقر عليها — جهازه نظيف.', to:'zaid'} },
 { q:'ما التمثيل الثنائي للعدد العشري 5؟', cat:'Binary', opts:['110','100','101','011'], ans:2,
   ev:{cat:'دافع', text:'الملفات المشفّرة كلها تعود لمشروع IEEE فقط — باقي ملفات السيرفر لم تُمس إطلاقاً!', to:'zaid'} },
 { q:'ما معنى الاختصار LAN؟', cat:'شبكات', opts:['Large Area Network','Local Area Network','Linked Access Node','Logical Area Number'], ans:1,
   ev:{cat:'أداة', text:'الأدوات المستخدمة (Wireshark + TFTP) غير مثبّتة إلا على أجهزة مختبر الشبكات.', to:'farah'} },
 { q:'ما البروتوكول المستخدم لإرسال البريد الإلكتروني؟', cat:'شبكات', opts:['HTTP','FTP','POP3','SMTP'], ans:3,
   ev:{cat:'دليل', text:'سجلّ المفاتيح (Switches): تم تعطيل بروتوكول STP يدوياً الساعة 02:20 — وهذا يتطلب صلاحية مدير شبكات.', to:'farah'} },
 { q:'ما معنى الاختصار URL؟', cat:'ويب', opts:['Uniform Resource Locator','Universal Reference Link','Unified Resource List','User Resource Location'], ans:0,
   ev:{cat:'وصول', text:'خمسة أشخاص فقط كانوا يملكون وصولاً للمبنى تلك الليلة — وكلهم… في قائمة المشتبه بهم!', to:null} },
 { q:'ما ناتج العملية المنطقية (1 AND 0)؟', cat:'منطق', opts:['1','0','خطأ','Null'], ans:1,
   ev:{cat:'دليل', text:'وُجدت ذاكرة USB بين المفاتيح في المختبر، تحمل نسخة من ملف الفدية نفسه.', to:null} },
 { q:'ما ناتج العملية المنطقية (1 OR 0)؟', cat:'منطق', opts:['0','1','2','غير معرّف'], ans:1,
   ev:{cat:'وصول', text:'كاميرا المختبر أُعيد تشغيلها «يدوياً» الساعة 02:07 — إعادة التشغيل تحتاج حساب مدير.', to:null} },
 { q:'ما ناتج العملية المنطقية (1 XOR 1)؟', cat:'منطق', opts:['1','2','0','خطأ'], ans:2,
   ev:{cat:'مكان', text:'تتبّع الكيابل يقود إلى خزانة المفاتيح في الطابق الثالث — خلف مختبر الشبكات مباشرة.', to:'farah'} },
 { q:'أيٌّ مما يلي ليس نظام تشغيل؟', cat:'أنظمة', opts:['Windows','Linux','Oracle','macOS'], ans:2,
   ev:{cat:'دليل', text:'عنوان MAC للجهاز  يبدأ بـ 00:1B:44 — نفس الشركة المصنّعة لأجهزة Dell في المختبر!', to:'farah'} },
 { q:'ما وظيفة DNS الأساسية في الشبكة؟', cat:'شبكات', opts:['تشفير البيانات','تحويل أسماء النطاقات إلى عناوين IP','تسريع الإنترنت','حجب الفيروسات'], ans:1,
   ev:{cat:'وصول', text:'قواعد الجدار الناري عُدِّلت من داخل الشبكة باستخدام صلاحيات «Switch Admin» حصراً.', to:'farah'} },
 { q:'ما فائدة الحلقة (Loop) في البرمجة؟', cat:'برمجة', opts:['إيقاف البرنامج','تكرار تنفيذ مجموعة أوامر عدة مرات','حذف المتغيرات','تشفير الكود'], ans:1,
   ev:{cat:'دليل', text:'تذكرة صيانة تلك الليلة قُدِّمت ووُقِّعت باسم مسؤول المختبر… هو نفسه من طلب نافذة 02:00!', to:'farah'} },
 { q:'أي نوع بيانات يُستخدم لتخزين قيم (صح / خطأ)؟', cat:'برمجة', opts:['String','Integer','Float','Boolean'], ans:3,
   ev:{cat:'دليل', text:'الخلاصة: المكان (مختبر الشبكات) + الأداة (أجهزة المختبر) + الوصول (مدير المفاتيح) + التوقيع (التذكرة)… كل الخيوط تلتقي عند شخص واحد.', to:'farah '} },
];

const state = {
  name:null, startTs:null, timerId:null,
  score:0, solved:new Set(), attempts:{}, picked:null, finished:false, result:null,
};
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const fmt = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;

let AC=null, muted = localStorage.getItem('ieee_sound')==='off';
function beep(freq, dur=.09, type='square', vol=.05, delay=0){
  if(muted) return;
  try{
    AC = AC || new (window.AudioContext||window.webkitAudioContext)();
    const t = AC.currentTime + delay;
    const o = AC.createOscillator(), g = AC.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t+dur);
    o.connect(g).connect(AC.destination); o.start(t); o.stop(t+dur+.02);
  }catch(e){}
}
const sfx = {
  ok:   ()=>{ beep(660,.1); beep(990,.14,'square',.05,.1); },
  bad:  ()=>{ beep(160,.18,'sawtooth',.06); },
  click:()=>{ beep(520,.05,'triangle',.04); },
  unlock:()=>{ beep(440,.07,'triangle',.04); beep(660,.09,'triangle',.04,.08); },
  win:  ()=>{ [523,659,784,1047].forEach((f,i)=>beep(f,.16,'triangle',.06,i*.13)); },
};
function paintSoundBtn(){ $('#btn-sound').textContent = muted ? '🔇' : '🔊'; }
$('#btn-sound').addEventListener('click', ()=>{ muted=!muted; localStorage.setItem('ieee_sound', muted?'off':'on'); paintSoundBtn(); sfx.click(); });
paintSoundBtn();

let toastT;
function toast(msg, color='var(--blue)'){
  const t=$('#toast'); t.textContent=msg; t.style.borderColor=color; t.style.color=color;
  t.classList.add('show'); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('show'),2400);
}

const cv=$('#net-bg'), cx=cv.getContext('2d');
let W,H,DPR, nodes=[], packets=[], mouse={x:-9e3,y:-9e3};
function resize(){
  DPR=Math.min(devicePixelRatio||1,2);
  W=cv.width=innerWidth*DPR; H=cv.height=innerHeight*DPR;
  cv.style.width=innerWidth+'px'; cv.style.height=innerHeight+'px';
  const n=Math.min(90, Math.floor(innerWidth*innerHeight/16000));
  nodes=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25*DPR,vy:(Math.random()-.5)*.25*DPR,r:(Math.random()*1.6+.6)*DPR}));
}
function loop(){
  cx.clearRect(0,0,W,H);
  const link=(140*DPR)**2;
  for(const p of nodes){
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1;
  }
  for(let i=0;i<nodes.length;i++){
    const a=nodes[i];
    for(let j=i+1;j<nodes.length;j++){
      const b=nodes[j], dx=a.x-b.x, dy=a.y-b.y, d2=dx*dx+dy*dy;
      if(d2<link){
        cx.strokeStyle=`rgba(26,159,219,${(1-d2/link)*.22})`;
        cx.lineWidth=DPR; cx.beginPath(); cx.moveTo(a.x,a.y); cx.lineTo(b.x,b.y); cx.stroke();
      }
    }
    const mdx=mouse.x-a.x, mdy=mouse.y-a.y, md2=mdx*mdx+mdy*mdy, mr=(180*DPR)**2;
    if(md2<mr){
      const al=(1-md2/mr);
      cx.strokeStyle=`rgba(255,210,31,${al*.35})`; cx.lineWidth=DPR;
      cx.beginPath(); cx.moveTo(a.x,a.y); cx.lineTo(mouse.x,mouse.y); cx.stroke();
    }
    cx.fillStyle='rgba(26,159,219,.5)'; cx.beginPath(); cx.arc(a.x,a.y,a.r,0,7); cx.fill();
  }
  if(Math.random()<.02 && nodes.length>1){
    const a=nodes[Math.floor(Math.random()*nodes.length)];
    packets.push({x:a.x,y:a.y,tx:nodes[Math.floor(Math.random()*nodes.length)],t:0});
  }
  packets=packets.filter(p=>p.t<=1);
  for(const p of packets){
    p.t+=.02; const x=p.x+(p.tx.x-p.x)*p.t, y=p.y+(p.tx.y-p.y)*p.t;
    cx.fillStyle='rgba(255,210,31,.8)'; cx.beginPath(); cx.arc(x,y,2.2*DPR,0,7); cx.fill();
  }
  requestAnimationFrame(loop);
}
addEventListener('mousemove',e=>{mouse.x=e.clientX*DPR; mouse.y=e.clientY*DPR;});
addEventListener('mouseleave',()=>{mouse.x=-9e3;mouse.y=-9e3;});
addEventListener('resize',resize); resize(); loop();

const BOOT=[
  {t:'> connecting to IU-CORE-SRV ............ ', ok:'OK', c:'var(--green)'},
  {t:'> ALERT: encrypted payload detected [AES-256] ', ok:'!!', c:'var(--red)'},
  {t:'> tracing attack origin .................. ', ok:'VLAN-30', c:'var(--yellow)'},
  {t:'> suspects isolated ...................... ', ok:'5 FOUND', c:'var(--blue)'},
  {t:'> launching investigation protocol v2.6 .. ', ok:'READY', c:'var(--green)'},
];
(async function boot(){
  const wrap=$('#boot-lines');
  for(const line of BOOT){
    const el=document.createElement('div'); el.className='term-line';
    el.innerHTML=`<span style="color:var(--muted)">${line.t}</span><span style="color:${line.c};font-weight:700"></span>`;
    wrap.appendChild(el);
    const span=el.querySelector('span:last-child');
    await new Promise(r=>setTimeout(r,320));
    span.textContent=line.ok; sfx.click();
  }
  const f=$('#boot-form'); f.classList.remove('opacity-0','translate-y-3','pointer-events-none');
  $('#player-name').focus();
})();

function renderSuspects(){
  $('#suspects').innerHTML = SUSPECTS.map(s=>`
    <div id="sus-${s.id}" class="panel panel-glow clip-card p-4 rv relative overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
      <div class="absolute top-0 inset-x-0 h-1" style="background:linear-gradient(90deg,${s.color},transparent)"></div>
      <div class="flex items-center gap-3">
        <div class="clip-chip w-12 h-12 grid place-items-center text-2xl" style="background:${s.color}1a;border:1px solid ${s.color}66">${s.emoji}</div>
        <div class="min-w-0">
          <div class="font-display font-bold truncate">${s.name}</div>
          <div class="text-[11px] leading-tight" style="color:var(--muted)">${s.role}</div>
        </div>
      </div>
      <p class="text-[12px] leading-5 mt-3 min-h-[52px]" style="color:var(--muted)">${s.bio}</p>
      <div class="mt-3">
        <div class="flex justify-between text-[11px] mb-1"><span style="color:var(--muted)">مستوى الاشتباه</span><b class="font-mono sus-pct" style="color:${s.color}">0%</b></div>
        <div class="meter clip-chip"><i class="sus-bar" style="background:linear-gradient(90deg,var(--ieee),${s.color})"></i></div>
      </div>
      <div class="text-[10px] mt-2.5 truncate" style="color:var(--yellow)">⚡ ${s.motive}</div>
    </div>`).join('');
}

function renderQuestions(){
  $('#questions').innerHTML = QUESTIONS.map((q,i)=>{
    const col=CATS[q.cat].c;
    return `
    <div id="q-${i}" class="qcard panel clip-card p-5 relative locked rv">
      <div class="stamp">✓ تم الحل</div>
      <div class="flex items-center gap-2 mb-3 flex-wrap">
        <span class="font-mono text-xs w-8 h-8 grid place-items-center clip-chip" style="border:1px solid ${col};color:${col};background:${col}14">${String(i+1).padStart(2,'0')}</span>
        <span class="tag clip-chip font-mono" style="color:${col};border-color:${col}66">${q.cat}</span>
        <span class="q-lock ms-auto text-[11px] font-mono" style="color:var(--muted)">🔒</span>
      </div>
      <h3 class="font-display font-bold text-[15px] leading-7 mb-4">${q.q}</h3>
      <div class="opts space-y-2">
        ${q.opts.map((o,k)=>`<button class="opt clip-chip" data-q="${i}" data-o="${k}"><span class="letter">${'ABCD'[k]}</span><span class="font-mono text-[13px]">${o}</span></button>`).join('')}
      </div>
      <div class="q-fb text-[12px] mt-3 min-h-[18px]"></div>
    </div>`;
  }).join('');
}

function renderEvidence(){
  $('#evidence').innerHTML = QUESTIONS.map((q,i)=>{
    const ec=EV_CATS[q.ev.cat];
    return `
    <div id="ev-${i}" class="ev-slot clip-chip p-3">
      <div class="flex items-center gap-2">
        <span class="ev-num font-mono text-xs" style="color:var(--muted)">#${String(i+1).padStart(2,'0')}</span>
        <span class="tag clip-chip font-mono" style="color:${ec.c};border-color:${ec.c}55">${ec.icon} ${q.ev.cat}</span>
        <span class="ev-lock ms-auto text-[11px]" style="color:var(--muted)">🔒 حل اللغز ${i+1}</span>
      </div>
      <p class="ev-text text-[12px] leading-6 mt-1.5 hidden" style="color:var(--txt)"></p>
    </div>`;
  }).join('');
}

function renderVote(){
  $('#vote-grid').innerHTML = SUSPECTS.map(s=>`
    <div class="vote-card clip-card p-4 text-center" data-id="${s.id}">
      <div class="clip-chip w-14 h-14 mx-auto grid place-items-center text-3xl mb-2" style="background:${s.color}1a;border:1px solid ${s.color}66">${s.emoji}</div>
      <div class="font-display font-bold text-sm">${s.name}</div>
      <div class="text-[10px] mt-1 leading-4" style="color:var(--muted)">${s.role}</div>
    </div>`).join('');
  $$('.vote-card').forEach(c=>c.addEventListener('click',()=>{
    if(state.finished) return;
    if(state.solved.size < 12){ toast('🔒 اجمع 12 دليلاً أولاً قبل الاتهام','var(--yellow)'); return; }
    $$('.vote-card').forEach(x=>x.classList.remove('picked'));
    c.classList.add('picked'); state.picked=c.dataset.id; sfx.click();
    const s=SUSPECTS.find(x=>x.id===state.picked);
    $('#vote-picked').innerHTML=`اخترت: <b style="color:var(--yellow)">${s.emoji} ${s.name}</b>`;
  }));
}

function updateHUD(popField){
  $('#hud-score').textContent = state.score;
  $('#hud-solved').textContent = state.solved.size;
  $('#hud-ev').textContent = state.solved.size;
  $('#ev-count').textContent = state.solved.size;
  $('#ev-progress').style.width = (state.solved.size/20*100)+'%';
  if(popField){ const el=$(popField); el.classList.remove('hudpop'); void el.offsetWidth; el.classList.add('hudpop'); }
  updateSuspicion();
  updateVoteLock();
}

function updateSuspicion(){
  const counts={}; SUSPECTS.forEach(s=>counts[s.id]=0);
  let total=0;
  state.solved.forEach(i=>{
    const to=QUESTIONS[i].ev.to;
    if(to){ counts[to]++; total++; }
  });
  SUSPECTS.forEach(s=>{
    const card=$('#sus-'+s.id);
    const pct = total ? Math.round(counts[s.id]/total*100) : 0;
    card.querySelector('.sus-bar').style.width = pct+'%';
    card.querySelector('.sus-pct').textContent = pct+'%';
  });
}

function updateVoteLock(){
  const open = state.solved.size>=12;
  const lock=$('#vote-lock'), btn=$('#btn-vote'), st=$('#vote-status');
  if(state.finished){ lock.textContent='⚖️ أُغلق التحقيق'; lock.style.color='var(--green)'; lock.style.borderColor='rgba(52,211,153,.5)'; btn.disabled=true; st.textContent='تم توجيه الاتهام — راجع الحكم أعلاه.'; return; }
  if(open){ lock.textContent='🔓 مفتوح'; lock.style.color='var(--green)'; lock.style.borderColor='rgba(52,211,153,.5)'; btn.disabled=false;
    st.textContent='✅ باب الاتهام مفتوح! لكن تذكّر: الأدلة المتبقية قد تقلب الموازين…'; }
  else { lock.textContent=`🔒 ${state.solved.size}/12`; st.textContent=`اجمع 12 دليلاً على الأقل لفتح باب الاتهام — ينقصك ${12-state.solved.size} أدلة.`; }
}

function unlockQuestion(i){
  const card=$('#q-'+i); if(!card) return;
  card.classList.remove('locked');
  card.querySelector('.q-lock').innerHTML = i===0 ? '▶ ابدأ هنا' : '🔓';
  card.querySelector('.q-lock').style.color='var(--green)';
}

function handleAnswer(i,k,btn){
  if(state.solved.has(i) || $('#q-'+i).classList.contains('locked')) return;
  state.attempts[i]=(state.attempts[i]||0)+1;
  const q=QUESTIONS[i];
  if(k===q.ans){
    state.solved.add(i);
    const firstTry = state.attempts[i]===1;
    const pts = 5 + (firstTry?3:0);
    state.score += pts;
    sfx.ok();

    $$('#q-'+i+' .opt').forEach(b=>{ b.disabled=true; if(+b.dataset.o===q.ans) b.classList.add('right'); });
    const card=$('#q-'+i); card.classList.add('solved');
    card.querySelector('.q-fb').innerHTML = firstTry
      ? `<span style="color:var(--green)">🎯 ممتاز من أول محاولة! <b class="font-mono">+${pts}</b> نقاط</span>`
      : `<span style="color:var(--green)">✔ صحيحة! <b class="font-mono">+${pts}</b> نقاط</span>`;

      const ev=$('#ev-'+i), ec=EV_CATS[q.ev.cat];
    ev.classList.add('open','ev-anim');
    ev.querySelector('.ev-lock').remove();
    const txt=ev.querySelector('.ev-text'); txt.classList.remove('hidden');
    typeInto(txt, q.ev.text);

    if(i+1<20){ unlockQuestion(i+1); setTimeout(()=>sfx.unlock(),250); }
    if(state.solved.size===12){ toast('⚖️ فُتح باب الاتهام! راجع الأدلة جيداً قبل التصويت','var(--yellow)'); sfx.win(); }
    updateHUD('#hud-score');
    saveProgress();
  } else {
    sfx.bad();
    btn.classList.add('wrong','shake');
    setTimeout(()=>btn.classList.remove('wrong','shake'),500);
    const fb=$('#q-'+i+' .q-fb');
    const tries=state.attempts[i];
    fb.innerHTML = tries>=3
      ? `<span style="color:var(--red)">✘ ليست هذه… ركّز في المفهوم الأساسي، جرّب خياراً لم تستبعده بعد.</span>`
      : `<span style="color:var(--red)">✘ إجابة خاطئة — حاول مجدداً (محاولة ${tries})</span>`;
  }
}
$('#questions').addEventListener('click',e=>{
  const b=e.target.closest('.opt'); if(b) handleAnswer(+b.dataset.q, +b.dataset.o, b);
});

function typeInto(el,text){
  el.textContent=''; let i=0;
  el.classList.add('caret');
  const t=setInterval(()=>{ el.textContent+=text[i++]; if(i>=text.length){ clearInterval(t); el.classList.remove('caret'); } },14);
}

$('#btn-vote').addEventListener('click',()=>{
  if(!state.picked){ toast('⚠️ اختر مشتبهاً به أولاً','var(--yellow)'); return; }
  if(state.finished) return;
  const correct = state.picked===CULPRIT;
  if(correct){ state.score+=20; sfx.win(); } else { sfx.bad(); }
  state.finished=true;
  state.result={picked:state.picked, correct, time:elapsed(), ts:Date.now()};
  updateHUD('#hud-score');
  saveLeaderboard(); saveProgress();
  openVerdict();
  confetti();
});

function rank(){
  const c=state.solved.size;
  if(c>=18 && state.result?.correct) return {r:'S', t:'محقق أسطوري', c:'var(--yellow)'};
  if(c>=14) return {r:'A', t:'محقق محترف', c:'var(--green)'};
  if(c>=10) return {r:'B', t:'محقق واعد', c:'var(--blue)'};
  return {r:'C', t:'محقق متدرب', c:'var(--muted)'};
}

function openVerdict(){
  const r=state.result; if(!r) return;
  const culprit=SUSPECTS.find(s=>s.id===CULPRIT);
  const picked=SUSPECTS.find(s=>s.id===r.picked);
  const rk=rank();
  $('#verdict-title').textContent = r.correct ? '🎉 اتّهام صحيح! كشفت الجاني' : '🕵️ اتهَمّت الشخص الخطأ…';
  $('#verdict-title').style.color = r.correct ? 'var(--green)' : 'var(--red)';
  $('#verdict-sub').textContent = r.correct
    ? `أحسنت يا ${state.name}! أعادت الجامعة تشغيل سيرفراتها بفضل تحقيقك.`
    : `الجاني الحقيقي أفلت هذه المرة… راجع سلسلة الاستنتاج لتفهم كيف فُك اللغز.`;
  $('#verdict-culprit').innerHTML=`
    <div class="flex items-center gap-4 p-4 clip-chip" style="border:2px solid ${culprit.color}; background:${culprit.color}10">
      <div class="clip-chip w-16 h-16 grid place-items-center text-4xl" style="background:${culprit.color}22;border:1px solid ${culprit.color}">${culprit.emoji}</div>
      <div>
        <div class="text-[11px] font-mono" style="color:var(--yellow)">THE CULPRIT — الجاني الحقيقي</div>
        <div class="font-display font-extrabold text-xl">${culprit.name}</div>
        <div class="text-xs" style="color:var(--muted)">${culprit.role} — استغل نافذة الصيانة التي وقّعها بنفسه لتعطيل STP وتشغيل TFTP وتشفير ملفات المشروع.</div>
      </div>
    </div>`;
  $('#verdict-chain').innerHTML=[
    ['📍 المكان','حزم الهجوم خرجت من VLAN 30 — مختبر الشبكات، وخزانة المفاتيح خلفه مباشرة.'],
    ['🕐 الزمان','02:13 فجراً داخل نافذة الصيانة (02:00–03:00) التي طُلبت بتذكرة موقّعة باسمه.'],
    ['🛠️ الأداة','Wireshark + TFTP — غير مثبتة إلا على أجهزة المختبر، وعنوان MAC يطابق أجهزة Dell فيه.'],
    ['🔑 الوصول','تعطيل STP وإعادة تشغيل الكاميرا وتعديل الجدار الناري — كلها تتطلب صلاحية «Switch Admin».'],
    ['🧬 الخلاصة','شهادات  وزيد وفادي وداليا كانت مجرد مصادفات بريئة… كل الخيوط التقنية تقاطعت عنده وحده.'],
  ].map(([h,t])=>`<li><b class="font-display" style="color:var(--txt)">${h}:</b> ${t}</li>`).join('');
  $('#verdict-stats').innerHTML=[
    ['النقاط', state.score, 'var(--yellow)'],
    ['الألغاز', `${state.solved.size}/20`, 'var(--blue)'],
    ['الوقت', fmt(r.time), 'var(--txt)'],
    ['الرتبة', `${rk.r} — ${rk.t}`, rk.c],
  ].map(([l,v,c])=>`<div class="p-3 text-center clip-chip" style="background:rgba(9,18,34,.7);border:1px solid var(--line)"><div class="text-[10px]" style="color:var(--muted)">${l}</div><div class="font-display font-extrabold" style="color:${c}">${v}</div></div>`).join('');
  const v=$('#verdict'); v.classList.remove('hidden'); v.classList.add('flex');
  const st=$('#verdict-stamp'); st.classList.remove('go'); void st.offsetWidth; st.classList.add('go');
}
$('#btn-verdict-board').addEventListener('click',()=>{ closeVerdict(); document.querySelector('.mt-12.rv:last-of-type')?.scrollIntoView({behavior:'smooth'}); $('#btn-lb-refresh').closest('div').scrollIntoView({behavior:'smooth'}); });
$('#btn-verdict-again').addEventListener('click',()=>{ localStorage.removeItem(LS.prog); location.reload(); });
function closeVerdict(){ const v=$('#verdict'); v.classList.add('hidden'); v.classList.remove('flex'); }

const LS={ board:'ieee_mystery_board_v2', prog:'ieee_mystery_prog_v2' };
function loadBoard(){ try{ return JSON.parse(localStorage.getItem(LS.board)||'[]'); }catch{ return []; } }
function saveLeaderboard(){
  const list=loadBoard();
  list.push({ name:state.name, correct:state.solved.size, score:state.score, time:state.result.time,
              rank:rank().r, pick:state.result.picked, ok:state.result.correct, ts:state.result.ts, me:true });
  list.forEach(x=>delete x.me); list[list.length-1].me=true;
  localStorage.setItem(LS.board, JSON.stringify(list));
  renderBoard();
}
function renderBoard(){
  const list=loadBoard().sort((a,b)=> (b.correct-a.correct)||(b.score-a.score)||(a.time-b.time)).slice(0,15);
  const body=$('#lb-body'); $('#lb-empty').classList.toggle('hidden', list.length>0);
  body.innerHTML=list.map((r,i)=>{
    const s=SUSPECTS.find(x=>x.id===r.pick);
    const d=new Date(r.ts);
    const medal=['🥇','🥈','🥉'][i]||`<span class="font-mono">${i+1}</span>`;
    return `<tr class="lb-row ${r.me?'me':''}" style="border-bottom:1px solid var(--line)">
      <td class="p-3">${medal}</td>
      <td class="p-3 font-display font-bold">${r.name}${r.me?' <span class="text-[10px] font-mono" style="color:var(--yellow)">(أنت)</span>':''}</td>
      <td class="p-3 font-mono" style="color:var(--blue)">${r.correct}/20</td>
      <td class="p-3 font-mono" style="color:var(--yellow)">${r.score}</td>
      <td class="p-3 font-display font-bold">${r.rank}</td>
      <td class="p-3 font-mono">${fmt(r.time)}</td>
      <td class="p-3 text-xs">${r.ok?'✅':(s?s.emoji+' '+s.name:'—')}</td>
      <td class="p-3 text-[11px] font-mono" style="color:var(--muted)">${d.toLocaleDateString('ar')} ${d.toLocaleTimeString('ar',{hour:'2-digit',minute:'2-digit'})}</td>
    </tr>`;
  }).join('');
}
$('#btn-lb-refresh').addEventListener('click',()=>{ renderBoard(); sfx.click(); toast('🔄 تم تحديث اللوحة'); });
$('#btn-lb-clear').addEventListener('click',()=>{ if(confirm('مسح لوحة المتصدرين بالكامل؟')){ localStorage.removeItem(LS.board); renderBoard(); toast('🗑️ تم مسح اللوحة','var(--red)'); } });

function elapsed(){ return Math.floor((Date.now()-state.startTs)/1000); }
function tick(){
  const e=elapsed(), t=fmt(e);
  $('#hud-timer').textContent=t; $('#rec-timer').textContent=t;
}
function saveProgress(){
  localStorage.setItem(LS.prog, JSON.stringify({
    name:state.name, startTs:state.startTs, score:state.score,
    solved:[...state.solved], attempts:state.attempts, picked:state.picked,
    finished:state.finished, result:state.result,
  }));
}
function loadProgress(){
  try{
    const d=JSON.parse(localStorage.getItem(LS.prog)); if(!d||!d.name) return false;
    state.name=d.name; state.startTs=d.startTs; state.score=d.score;
    state.solved=new Set(d.solved||[]); state.attempts=d.attempts||{};
    state.picked=d.picked; state.finished=d.finished; state.result=d.result;
    return true;
  }catch{ return false; }
}
function applyRestoredState(){
  state.solved.forEach(i=>{
    const q=QUESTIONS[i], card=$('#q-'+i);
    card.classList.add('solved'); card.classList.remove('locked');
    $$('#q-'+i+' .opt').forEach(b=>{ b.disabled=true; if(+b.dataset.o===q.ans) b.classList.add('right'); });
    card.querySelector('.q-lock').innerHTML='🔓'; card.querySelector('.q-lock').style.color='var(--green)';
    card.querySelector('.q-fb').innerHTML=`<span style="color:var(--green)">✔ محلولة سابقاً</span>`;
    const ev=$('#ev-'+i); ev.classList.add('open');
    const lk=ev.querySelector('.ev-lock'); if(lk) lk.remove();
    const txt=ev.querySelector('.ev-text'); txt.classList.remove('hidden'); txt.textContent=q.ev.text;
    if(i+1<20) unlockQuestion(i+1);
  });
  if(state.picked){
    $$('.vote-card').forEach(c=>c.classList.toggle('picked', c.dataset.id===state.picked));
    const s=SUSPECTS.find(x=>x.id===state.picked);
    $('#vote-picked').innerHTML=`اخترت: <b style="color:var(--yellow)">${s.emoji} ${s.name}</b>`;
  }
  if(state.finished && state.result){
    setTimeout(()=>{ openVerdict(); }, 600);
  }
}
$('#btn-reset').addEventListener('click',()=>{
  if(confirm('إعادة ضبط تقدمك الحالي؟ (لوحة المتصدرين ستبقى)')){ localStorage.removeItem(LS.prog); location.reload(); }
});

function startGame(name){
  state.name=name; state.startTs=Date.now();
  enterGame(); saveProgress();
  toast(`🕵️ بدأ التحقيق يا ${name} — بالتوفيق!`,'var(--green)'); sfx.unlock();
}
function enterGame(){
  $('#screen-welcome').classList.add('hidden');
  $('#screen-game').classList.remove('hidden');
  $('#hud').classList.remove('hidden');
  $('#hud-name').textContent=state.name;
  unlockQuestion(0);
  if(state.solved.size===0) {} 
  clearInterval(state.timerId); state.timerId=setInterval(tick,500); tick();
  updateHUD(); renderBoard();
  observeReveals();
  scrollTo({top:0});
}
$('#btn-start').addEventListener('click',()=>{
  const n=$('#player-name').value.trim();
  if(!n){ toast('⚠️ اكتب اسمك أولاً يا محقق','var(--yellow)'); $('#player-name').focus(); return; }
  startGame(n);
});
$('#player-name').addEventListener('keydown',e=>{ if(e.key==='Enter') $('#btn-start').click(); });

let io;
function observeReveals(){
  io = io || new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('on'); io.unobserve(e.target); } }),{threshold:.12});
  $$('.rv:not(.on)').forEach(el=>io.observe(el));
}

function confetti(){
  const colors=['#1a9fdb','#ffd21f','#34d399','#38bdf8'];
  for(let i=0;i<60;i++){
    const s=document.createElement('i');
    const size=6+Math.random()*8;
    s.style.cssText=`position:fixed;z-index:70;top:-20px;left:${Math.random()*100}vw;width:${size}px;height:${size*1.6}px;background:${colors[i%4]};border-radius:2px;pointer-events:none;transform:rotate(${Math.random()*360}deg)`;
    document.body.appendChild(s);
    const dur=1400+Math.random()*1600, drift=(Math.random()-.5)*30;
    s.animate([
      {transform:s.style.transform+' translate(0,0)',opacity:1},
      {transform:s.style.transform+` translate(${drift}vw,105vh) rotate(${Math.random()*720}deg)`,opacity:.3}
    ],{duration:dur,easing:'cubic-bezier(.2,.7,.3,1)'});
    setTimeout(()=>s.remove(),dur+60);
  }
}

$('#year').textContent=new Date().getFullYear();
renderSuspects(); renderQuestions(); renderEvidence(); renderVote();
const resumed = loadProgress();
if(resumed){
  enterGame(); applyRestoredState();
  toast(`👋 أهلاً بعودتك يا ${state.name} — تابع تحقيقك`,'var(--blue)');
}
observeReveals();
