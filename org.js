// Organisationsmodellen för hemvärnet och 333 – delas av presentation.html och sok.html.
// Bataljoner, kompanier, plutoner, gruppstorlekar, anropsregler och vilken soldat som är "din" ändras här.
// Bygger på öppna källor och antaganden.

// ===================== Inställningar =====================
const CFG={
  du:'Din soldat',
  standard:'33-333-B-E-05',
  hemorter:{33:['Eksjö',57.667,14.972]},
  ortForskjutning:[10.7,3.6],
  bokstavering:{A:'Adam',B:'Bertil',C:'Cesar',D:'David',E:'Erik',F:'Filip',G:'Gustav',H:'Helge',I:'Ivar',J:'Johan',K:'Kalle',
    L:'Ludvig',M:'Martin',N:'Niklas',O:'Olof',P:'Petter',Q:'Quintus',R:'Rudolf',S:'Sigurd',T:'Tore',U:'Urban',V:'Viktor',
    W:'Wilhelm',X:'Xerxes',Y:'Yngve',Z:'Zäta','Å':'Åke','Ä':'Ärlig','Ö':'Östen'},
  bet:{
    plutoner:'ABCD',
    grupper:'EFGH',
    plutonsledning:'PL',
    tropp:'D',
    kompaniledning:'K',
    bataljon:'Bat',
    bataljonsplutoner:{Stab:'Y','':'L',Grk:'X',CBRN:'C',Und:'K',Trafik:'I','Pionjär':'P','Båt':'Z',Flyg:'N',TOLO:'O'},
    extraGrupper:'IJKLMNO'
  },
  anrop:{
    visa:true,
    regioner:{},                                 // militärregionernas anrop, t.ex. S:'XY' – okända än så länge; saknas de visas [MR S] som platshållare
    kompanibokstaver:'QRSTNUW',
    bataljonsdelar:{Stab:'=','':'AP',Grk:'A*','Pionjär':'L*',Und:'K*',CBRN:'Q#',Trafik:'T#','Båt':'Z*',Flyg:'N*',TOLO:'X*'},
    rsBokstav:{N:'B',M:'C',V:'D',S:'E',G:'F'},
    ledningspluton:['E','J','F'],
    kompanier:{145:'WU',214:'WM',234:'WU',414:'WO',307:'WJ',354:'WU',485:'WW'},
    bataljoner:{10:'VJ',11:'VL',12:'VM',13:'VN',14:'VU',15:'VO',16:'VP',
                17:'VJ',18:'VL',21:'VM',22:'VN',23:'VU',24:'VO',25:'VP',26:'VQ',27:'VV',28:'VW',29:'VX',
                19:'VJ',20:'VL',38:'VM',39:'VN',40:'VU',41:'VO',42:'VP',43:'VQ',44:'VV',45:'VW',
                30:'VJ',31:'VL',33:'VM',34:'VN',35:'VU',36:'VO',37:'VP',46:'VQ',47:'VV',48:'VW',49:'VX',
                32:'VW'}
  },
  plutonsledning:{hjul:6,band:5},
  egetKompani:333,
  egnaPlutoner:['H','H','B'],
  troppKompanier:'alla',
  plutonerPerKompani:{I:4,B:3,U:3,'Båt':3,S:3},
  gruppStorlek:{I:8,B:6,U:6,'Båt':6,S:6,spec:8},
  tropp:{ledning:1,grupper:[10,12,6,7],
         namn:['Stab och samband','Sjukvård','Packgrupp','Kokgrupp']},
  kompaniledning:['KC','stf KC','KF','','','','',''],
  klGrupper:[4,4],
  roller:{'KC':'chef','stf KC':'stf','KF':'kf'},
  langtUt:'soldater',
  plutonstyper:{
    Stab:{ledning:['BC','stf BC','BF'],grupper:[4,4,6,6,3],namn:['S1 Personaltjänst/Själavård/Info','S2 Underrättelse/Säkerhetstjänst','S3/5 Ledning/Samverkan/CBRN/Fältarbeten','S4 Logistik','S6 Ledningssystem']},
    '':{ledning:2,grupper:[6,6,7],namn:['Stabsgrupp','Sambandsgrupp','Transport- och ordonnansgrupp']},
    Grk:{ledning:2,grupper:[7,4,6,6,6,8,6,6,6,6],namn:['Bekämpningsledningsgrupp','Rekognoseringsgrupp','Eldledningsgrupp','Eldledningsgrupp','Pjäsplatsgrupp','Ammunitionsgrupp','Pjäsgrupp','Pjäsgrupp','Pjäsgrupp','Pjäsgrupp']},
    'Pionjär':{ledning:6,grupper:[8,8,8,8],namn:['Pionjärgrupp','Pionjärgrupp','Pionjärgrupp','Pionjärgrupp']},
    CBRN:{ledning:8,grupper:[8,8,8],namn:['CBRN-underrättelsegrupp','CBRN-underrättelsegrupp','CBRN-saneringsgrupp']},
    Trafik:{ledning:8,grupper:[8,8,8],namn:['Trafikgrupp','Trafikgrupp','Trafikgrupp']},
    TOLO:{ledning:2,grupper:[5,3],namn:['Drivmedelssoldater','Ammunitionssoldater']}
  },
  antagenPluton:6,
  kompanityper:{I:'Insatskompani',B:'Bevakningskompani',U:'Underrättelsekompani','Båt':'Båtkompani',S:'Skärgårdskompani'},
  kompaninamn:{I:'Insatskompaniet',B:'Bevakningskompaniet',U:'Underrättelsekompaniet','Båt':'Båtkompaniet',S:'Skärgårdskompaniet'},
  kompaniord:{I:['insatskompani','insatskompanier'],B:['bevakningskompani','bevakningskompanier'],U:['underrättelsekompani','underrättelsekompanier'],'Båt':['båtkompani','båtkompanier'],S:['skärgårdskompani','skärgårdskompanier']},
  plutonsord:{I:['skyttepluton','skytteplutoner'],B:['bevakningspluton','bevakningsplutoner'],U:['underrättelsepluton','underrättelseplutoner'],'Båt':['båtpluton','båtplutoner'],S:['skärgårdspluton','skärgårdsplutoner']},
  plutonsnamn:{Stab:'Bataljonsstab',TOLO:'TOLO-grupp',Grk:'Grk-pluton',CBRN:'CBRN-pluton','Pionjär':'Pionjärpluton',Und:'Underrättelsepluton',Trafik:'Trafikpluton','Båt':'Båtpluton'},
  plutonsnamnBest:{Bataljonsstab:'bataljonsstaben','TOLO-grupp':'TOLO-gruppen',Ledningspluton:'ledningsplutonen','Grk-pluton':'granatkastarplutonen','CBRN-pluton':'CBRN-plutonen','Pionjärpluton':'pionjärplutonen',
    Underrättelsepluton:'underrättelseplutonen',Trafikpluton:'trafikplutonen','Båtpluton':'båtplutonen'},
  regioner:[
    {id:'S',namn:'MR S',full:'Södra militärregionen',etikettPa:[56.25,13.55]},
    {id:'M',namn:'MR M',full:'Mellersta militärregionen',etikettPa:[60.35,16.30]},
    {id:'V',namn:'MR V',full:'Västra militärregionen',etikettPa:[59.95,12.35]},
    {id:'N',namn:'MR N',full:'Norra militärregionen',etikettPa:[66.30,17.40]},
    {id:'G',namn:'P 18',full:'Militärregion Gotland',etikettPa:[58.20,18.75]}
  ],
  orgRader:[['N','M','V'],['S','G']],
  bataljoner:[
    [10,'Lapplandsjägarbataljonen','N','101 I,102 I,103 B','',0,8,[67.86,20.23]],
    [11,'Gränsjägarbataljonen','N','111 I,112 I,113 I,114 B','Båt',0,12,[66.40,23.30]],
    [12,'Norrbottensbataljonen','N','121 I,122 I,123 B,124 B','Pionjär',0,8,[65.83,21.69]],
    [13,'Västerbottensbataljonen','N','131 I,132 I,133 I,134 B,135 B,136 B,137 B','CBRN,Båt',0,12,[64.05,19.90]],
    [14,'Fältjägarbataljonen','N','141 I,142 I,143 I,144 B,145 U','',0,12,[63.18,14.64]],
    [15,'Ångermanlandsbataljonen','N','151 I,152 I,153 B,154 B','Båt,Trafik',0,8,[63.29,18.40]],
    [16,'Medelpadsbataljonen','N','161 I,162 I,163 I,164 B','Båt',0,12,[62.39,16.90]],
    [17,'Dalabataljonen','M','171 I,172 I,173 B','Pionjär',8,1,[60.61,15.20]],
    [18,'Gävleborgsbataljonen','M','181 I,182 I,183 B','Båt',8,0,[60.95,16.80]],
    [19,'Värmlandsbataljonen','V','191 I,192 I,193 B,194 B','',8,0,[59.60,13.30]],
    [20,'Sannahedsbataljonen','V','201 I,202 I,203 B','Pionjär',8,1,[59.20,15.10]],
    [21,'Upplandsbataljonen','M','211 I,212 I,213 B,214 U','',8,0,[60.05,17.60]],
    [22,'Västmanlandsbataljonen','M','221 I,222 I,223 B','',8,0,[59.75,16.40]],
    [23,'Attundalandsbataljonen','M','231 I,232 I,233 B,234 U','',8,0,[59.50,18.05]],
    [24,'Stockholmsbataljonen','M','241 I,242 I,243 B','',8,0,[59.33,18.05]],
    [25,'Telgehusbataljonen','M','251 I,252 I,253 B','',8,0,[59.15,17.55]],
    [26,'Ulvsundabataljonen','M','261 I,262 I,263 B','',8,0,[59.38,17.95]],
    [27,'Södermanlandsbataljonen','M','271 I,272 I,273 B','Båt',8,0,[58.95,16.70]],
    [28,'Roslagsbataljonen','M','281 I,282 I,283 B','Båt',8,0,[59.80,18.60]],
    [29,'Södertörnsbataljonen','M','291 I,292 I,293 B,294 Båt','CBRN',8,0,[59.10,18.20]],
    [30,'Första livgrenadjärbataljonen','S','301 I,302 I,303 I,304 B,305 B,307 U','',12,0,[58.41,15.62]],
    [31,'Andra livgrenadjärbataljonen','S','311 I,312 B,313 B','Båt,Båt',4,0,[58.59,16.18]],
    [32,'Gotlandsbataljonen','G','321 I,322 B,323 B','Båt',4,0,[57.50,18.55]],
    [33,'Norra Smålandsbataljonen','S','331 I,332 I,333 I,334 B','Pionjär',8,1,[57.67,14.97]],
    [34,'Kalmarbataljonen','S','341 I,342 I,343 B,344 B','',8,0,[56.95,16.10]],
    [35,'Kronobergsbataljonen','S','351 I,352 I,353 B,354 U','',8,0,[56.88,14.81]],
    [36,'Blekinge västra bataljon','S','361 I,362 B,363 B','',4,0,[56.30,14.75]],
    [37,'Blekinge östra bataljon','S','371 I,372 B,373 Båt','',4,0,[56.30,15.50]],
    [38,'Västra Skaraborgsbataljonen','V','381 I,382 I,383 B','Trafik',8,0,[58.55,13.20]],
    [39,'Östra Skaraborgsbataljonen','V','391 I,392 I,393 B','',8,0,[58.20,13.85]],
    [40,'Bohusbataljonen','V','401 I,402 I,403 I,404 B','Båt',12,0,[58.45,11.90]],
    [41,'Göteborgs södra bataljon','V','411 I,412 I,413 B,414 U','',8,0,[57.55,12.10]],
    [42,'Göteborgs norra bataljon','V','421 I,422 I,423 B','CBRN',8,0,[57.95,12.10]],
    [43,'Göteborgs skärgårdsbataljon','V','431 I,432 I,433 B,434 Båt','',8,0,[57.70,11.85]],
    [44,'Älvsborgsbataljonen','V','441 I,442 I,443 B','Grk',8,1,[57.72,13.00]],
    [45,'Hallandsbataljonen','V','451 I,452 I,453 I,454 B','',12,0,[56.80,12.95]],
    [46,'Södra skånska bataljonen','S','461 I,462 I,463 B','',8,0,[55.60,13.75]],
    [47,'Malmöhusbataljonen','S','471 I,472 I,473 B','Trafik',8,0,[55.62,13.10]],
    [48,'Skånska dragonbataljonen','S','481 I,482 I,483 B,484 B,485 U','',8,0,[55.90,13.60]],
    [49,'Norra skånska bataljonen','S','491 I,492 I,493 B,494 B','Grk',8,1,[56.15,13.85]]
  ]
};

// ===================== Organisationen =====================
const BOK=CFG.bokstavering,BT=CFG.bet;
const P=[],F=[],BATS=[];
const PAD=[.42,.8,1.2,1.1,6],RG=1.35;
const TW=Math.max(...CFG.tropp.grupper)-1,KW=31.5+TW,K4=3*10.5+7;
const COLW=KW+7,BWID=COLW+KW+4.6,bH=rows=>32.05+(rows-1)*21;
const range=(n,f)=>Array.from({length:n},(_,k)=>f(k));
function box(x0,y0,x1,y1,lvl,path,top){const p=PAD[lvl],f={bx0:x0-p,by0:y0-(top||p),bx1:x1+p,by1:y1+p,lvl,path,label:''};F.push(f);return f}
function frameBox(f0,...lv){let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;for(let i=f0;i<F.length;i++)if(lv.includes(F[i].lvl)){const f=F[i];x0=Math.min(x0,f.bx0);y0=Math.min(y0,f.by0);x1=Math.max(x1,f.bx1);y1=Math.max(y1,f.by1)}return [x0,y0,x1,y1]}
function rad(xs,y,path,o,roles){
  xs.forEach((x,k)=>P.push(Object.assign({bx:x,by:y,path:[...path,k],ri:k,rn:xs.length,blk:k>>2,role:roles?(k===0?'chef':k===1?'stf':''):''},o)));
}
const gsOf=kind=>CFG.gruppStorlek[kind]||8;
function pluton(ox,oy,pth,mob,kind,tag){
  const n=kind==='I'?(mob==='B'?CFG.plutonsledning.band:CFG.plutonsledning.hjul):CFG.antagenPluton;
  const gs=gsOf(kind),gx=ox+(8-gs)/2;
  [...BT.grupper].forEach((g,i)=>{const y=oy+i*RG;rad(range(gs,k=>gx+k),y,[...pth,g],{},true);box(gx,y,gx+gs-1,y,0,[...pth,g])});
  rad(range(n,k=>ox+3.5+(k-(n-1)/2)),oy-1.6,[...pth,BT.plutonsledning],{led:true,pl:true},true);
  const f=box(ox,oy-1.6,ox+7,oy+3*RG,1,pth);f.mob=mob||null;f.tag=tag||'';f.kind=kind;
}
function tropp(ox,oy,pth,mob){
  const T=CFG.tropp;
  rad(range(T.ledning,k=>ox+TW/2+(k-(T.ledning-1)/2)),oy-1.6,[...pth,BT.plutonsledning],{led:true,tr:true},true);
  T.grupper.forEach((n,g)=>{const y=oy+g*RG,gl=BT.grupper[g];rad(range(n,k=>ox+k),y,[...pth,gl],{tr:true,gnamn:T.namn[g]},true);box(ox,y,ox+n-1,y,0,[...pth,gl])});
  const f=box(ox,oy-1.6,ox+TW,oy+(T.grupper.length-1)*RG,1,pth);f.tropp=true;f.mob=mob||null;f.kind='T';
}
function grupperad(ox,oy,pth,mob,T,tag){
  const L=Array.isArray(T.ledning)?T.ledning:range(T.ledning,()=>''),W=Math.max(...T.grupper,L.length)-1;
  const p0=P.length;
  rad(range(L.length,k=>ox+W/2+(k-(L.length-1)/2)),oy-1.6,[...pth,BT.plutonsledning],{led:true,pl:true},true);
  for(let i=p0;i<P.length;i++)if(L[P[i].ri])P[i].tag=L[P[i].ri];
  const gl=[...BT.grupper,...BT.extraGrupper];
  T.grupper.forEach((n,g)=>{const y=oy+g*RG;rad(range(n,k=>ox+k),y,[...pth,gl[g]],{gnamn:T.namn[g]},true);box(ox,y,ox+n-1,y,0,[...pth,gl[g]])});
  const f=box(ox,oy-1.6,ox+W,oy+(T.grupper.length-1)*RG,1,pth);f.mob=mob||null;f.tag=tag||'';f.kind='spec';f.typ=T;
}
function kompani(ox,oy,pth,K){
  const np=K.tropp?3:(CFG.plutonerPerKompani[K.typ]||4),W=K.tropp?KW:(np-1)*10.5+7,L=CFG.kompaniledning;
  for(let p=0;p<np;p++)pluton(ox+p*10.5,oy,[...pth,BT.plutoner[p]],K.mob[p],K.typ,'');
  if(K.tropp)tropp(ox+31.5,oy,[...pth,BT.tropp],K.mob[3]);
  const gaps=CFG.klGrupper.length-1,wid=L.length-1+gaps*.9;let k=0;
  CFG.klGrupper.forEach((n,g)=>{for(let q=0;q<n&&k<L.length;q++,k++)
    P.push({bx:ox+W/2-wid/2+k+g*.9,by:oy-5.6,path:[...pth,BT.kompaniledning,'-',k],ri:k,rn:L.length,blk:g,led:true,kl:true,role:CFG.roller[L[k]]||'',tag:L[k]})});
  const f=box(ox,oy-5.6,ox+W,oy+3*RG+1.2,2,pth);f.K=K;f.short=String(K.nr);
}
function bataljon(ox,oy,R,D){
  const f0=F.length,p0=P.length,pth=[R.id,D.nr],pw=D.bplut.length*7+(D.bplut.length-1)*3.5;
  D.bplut.forEach((q,i)=>{const T=CFG.plutonstyper[q.sp],x=ox+(BWID-4.6-pw)/2+i*10.5,pp=[...pth,BT.bataljon,q.bok];
    if(T)grupperad(x,oy,pp,q.mob,T,q.tag);else pluton(x,oy,pp,q.mob,'spec',q.tag)});
  D.komp.forEach((K,k)=>{const r=Math.floor(k/2),single=k===D.komp.length-1&&D.komp.length%2===1;
    kompani(ox+(single?COLW/2:(k%2)*COLW),oy+19+r*21,[...pth,K.nr],K)});
  const [x0,y0,x1,y1]=frameBox(f0,1,2);
  const f=box(x0,y0,x1,y1,3,pth,3.1);f.label=`${D.nr}. ${D.namn}`;f.short=D.nr+'.';
  BATS.push({p0,p1:P.length,f0,f1:F.length,reg:R.id,ll:D.ll,D});
}
function parseBat([nr,namn,mr,komp,spec,hjul,band,ll]){
  const K=komp.split(',').map(s=>{const [n,typ]=s.trim().split(/\s+/);return {nr:+n,typ,mob:[],tropp:typ==='I'&&(CFG.troppKompanier==='alla'||CFG.troppKompanier.includes(+n))}});
  const S=spec?spec.split(',').map(s=>s.trim()):[];
  if(mr==='N'&&!S.includes('TOLO'))S.push('TOLO');
  const bp=[{tag:'Bataljonsstab',sp:'Stab',mob:null},{tag:'Ledningspluton',sp:'',mob:null},...S.map(sp=>({tag:CFG.plutonsnamn[sp]||sp,sp,mob:sp==='Båt'?'W':null}))];
  const used=new Set();
  bp.forEach(q=>{let b=BT.bataljonsplutoner[q.sp]||q.sp.charAt(0).toUpperCase();
    if(used.has(b))b=[...'ABDFGHIJNORSVWYZ'].find(x=>!used.has(x));used.add(b);q.bok=b});
  const slots=[];
  S.forEach((sp,i)=>{if(sp!=='Båt'&&sp!=='TOLO')slots.push({pri:sp==='Grk'||sp==='Pionjär'?0:2,set:m=>bp[i+2].mob=m})});
  for(const k of K){if(k.typ==='I')for(let p=0;p<4;p++)slots.push({pri:1,set:m=>k.mob[p]=m});else for(let p=0;p<4;p++)k.mob[p]=k.typ==='B'||k.typ==='U'?null:'W'}
  slots.sort((a,b)=>a.pri-b.pri);let nb=band;for(const s of slots){s.set(nb>0?'B':'H');nb--}
  return {nr,namn,mr,komp:K,bplut:bp,hjul,band,ll};
}
const BDEF=CFG.bataljoner.map(parseBat),RIDX=Object.fromEntries(CFG.regioner.map((r,i)=>[r.id,i]));
const BMAP=new Map(BDEF.map(d=>[d.nr,d])),KMAP=new Map();
for(const d of BDEF)for(const k of d.komp)KMAP.set(k.nr,k);
{ const k=KMAP.get(CFG.egetKompani);if(k){k.typ='I';k.tropp=true;k.mob=[...CFG.egnaPlutoner,'H']} }
function regionSize(defs){
  const cols=Math.min(4,defs.length),rows=[];for(let i=0;i<defs.length;i+=cols)rows.push(defs.slice(i,i+cols));
  const rh=rows.map(r=>Math.max(...r.map(d=>bH(Math.ceil(d.komp.length/2)))));
  return {rows,rh,w:cols*(BWID+10)-10,h:rh.reduce((a,b)=>a+b,0)+(rows.length-1)*40};
}
function region(R,ox,oy,L,n){
  const f0=F.length;let y=oy;
  L.rows.forEach((row,r)=>{const rw=row.length*(BWID+10)-10;
    row.forEach((D,i)=>bataljon(ox+(L.w-rw)/2+i*(BWID+10)+2.3,y+5.5,R,D));
    y+=L.rh[r]+40});
  const [x0,y0,x1,y1]=frameBox(f0,3);
  const f=box(x0,y0,x1,y1,4,[R.id],40);f.label=`${R.namn} · ${n} bataljon${n===1?'':'er'}`;
}
{ let y=0;
  for(const ids of CFG.orgRader){
    const items=ids.map(id=>({R:CFG.regioner[RIDX[id]],defs:BDEF.filter(d=>d.mr===id)})).filter(o=>o.R&&o.defs.length).map(o=>({...o,L:regionSize(o.defs)}));
    if(!items.length)continue;
    let x=-(items.reduce((a,o)=>a+o.L.w,0)+(items.length-1)*60)/2;
    for(const o of items){region(o.R,x,y,o.L,o.defs.length);x+=o.L.w+60}
    y+=Math.max(...items.map(o=>o.L.h))+90;
  }
}
const CEN=new Map(),FK=new Map();
for(const p of P)for(let L=1;L<=5;L++){const k=p.path.slice(0,L).join('|');let c=CEN.get(k);if(!c)CEN.set(k,c=[1e9,1e9,-1e9,-1e9,0]);
  c[0]=Math.min(c[0],p.bx);c[1]=Math.min(c[1],p.by);c[2]=Math.max(c[2],p.bx);c[3]=Math.max(c[3],p.by);c[4]++}
for(const f of F)if(f.lvl===1)FK.set(f.path.join('|'),f);
const sizeOf=path=>(CEN.get(path.join('|'))||[0,0,0,0,0])[4];

// ===================== Beteckningar och sökning =====================
const pad2=n=>String(n).padStart(2,'0');
const regOf=id=>CFG.regioner[RIDX[id]];
const isPre=(a,b)=>a.length<=b.length&&a.every((v,i)=>v===b[i]);
const AN=CFG.anrop||{},sig=(a,b)=>a&&b?(BOK[a]||a)+(BOK[b]||b):null;
function batEgen(b){const x=AN.visa&&AN.bataljoner&&AN.bataljoner[b];return x?x.charAt(x.length-1):null}
function anropBat(b){const x=AN.visa&&AN.bataljoner&&AN.bataljoner[b];return x&&x.length>1?sig(x.charAt(0),x.charAt(1)):null}
function kompEgen(kg){if(!AN.visa)return null;if(AN.kompanier&&AN.kompanier[kg])return AN.kompanier[kg].charAt(0);
  const K=KMAP.get(kg),D=K&&BDEF.find(d=>d.komp.includes(K)),i=D?[...D.komp].sort((a,b)=>a.nr-b.nr).indexOf(K):-1;
  return i>=0?(AN.kompanibokstaver||'').charAt(i)||null:null}
function anropKomp(b,kg){return sigP(kompPar(b,kg))}
const BPSP=new Map(),BPDUP=new Set();for(const d of BDEF){const sett=new Set();for(const q of d.bplut){BPSP.set(d.nr+'|'+q.bok,q.sp);if(sett.has(q.sp))BPDUP.add(d.nr+'|'+q.bok);sett.add(q.sp)}}
const sigP=pr=>pr&&pr[0]&&pr[1]?(BOK[pr[0]]||pr[0])+(BOK[pr[1]]||pr[1]):null;
function batPar(b){const x=AN.visa&&AN.bataljoner&&AN.bataljoner[b];return x&&x.length>1?[x.charAt(0),x.charAt(1)]:null}
function kompPar(b,kg){const x=AN.visa&&AN.kompanier&&AN.kompanier[kg];if(x&&x.length>1)return [x.charAt(0),x.charAt(1)];const k=kompEgen(kg),e=batEgen(b);return k&&e?[k,e]:null}
function enhetPar(path){
  const [r,b,kg,u]=path;if(!AN.visa)return null;
  if(kg===BT.bataljon){const rule=(AN.bataljonsdelar||{})[BPSP.get(b+'|'+u)];if(!rule)return null;
    if(rule==='=')return batPar(b);
    const y=rule.charAt(1)==='*'?batEgen(b):rule.charAt(1)==='#'?(AN.rsBokstav||{})[r]:rule.charAt(1);
    return y?[BPDUP.has(b+'|'+u)?'W':rule.charAt(0),y]:null}
  if(u===BT.kompaniledning)return kompPar(b,kg);
  const k=kompEgen(kg);return k?[u,k]:null;
}
function gruppPar(path){
  const [,b,kg,u,row]=path;if(row==='-'||row===BT.plutonsledning)return null;
  const e=enhetPar(path);if(!e)return null;
  if(kg===BT.bataljon){const sp=BPSP.get(b+'|'+u);if(sp==='Stab')return null;
    if(sp===''){const i=[...BT.grupper,...BT.extraGrupper].indexOf(row);return [(AN.ledningspluton||[])[i]||row,e[0]]}}
  return [row,e[0]];
}
function anropEnhet(path){return sigP(enhetPar(path))}
function anropLed(path){return sigP(gruppPar(path))}
function anropNr(p){
  const [,b,kg,u,row,i]=p.path;
  if(kg===BT.bataljon&&BPSP.get(b+'|'+u)==='Stab'){
    if(row===BT.plutonsledning)return [1,2,4][i]||5+i;
    const g=[...BT.grupper,...BT.extraGrupper].indexOf(row);return [11,21,31,41,61][g]+i}
  if(p.kl)return [1,2,4,5,6,7,8,9][i]||i+1;
  if(row===BT.plutonsledning)return i<3?i+1:11+(i-3);
  return i+1;
}
function anrop(p){
  const [,b,kg,u,row]=p.path;
  const bas=kg===BT.bataljon&&BPSP.get(b+'|'+u)==='Stab'?sigP(batPar(b)):(row==='-'||row===BT.plutonsledning)?anropEnhet(p.path):anropLed(p.path);
  return bas?bas+' '+anropNr(p):null;
}
function anropId(p){
  const a=anrop(p);if(!a)return null;const [,b,kg]=p.path,k=kg===BT.bataljon?batPar(b):kompPar(b,kg);
  const kort=x=>x.replace(/[a-zåäö]/g,'');return kort(a.split(' ')[0])+(k?k.join(''):'')+a.split(' ')[1];
}
function anropFull(p){
  if(!anrop(p))return null;const [r,b,kg]=p.path,x=(AN.regioner||{})[r];
  const mr=x&&x.length>1?sigP([x.charAt(0),x.charAt(1)]):'['+regOf(r).namn+']';
  const d=[mr,anropBat(b),kg===BT.bataljon?null:anropKomp(b,kg),anropEnhet(p.path),anropLed(p.path)].filter(Boolean);
  return d.filter((v,i)=>v!==d[i-1]).join(' ')+' '+anropNr(p);
}
function betText(p){const [r,b,kg,u,row,i]=p.path;
  return [regOf(r).namn,b,kg,anropEnhet(p.path)||BOK[u]||u,row==='-'||row===BT.plutonsledning?null:(anropLed(p.path)||BOK[row]||row),pad2(i+1)].filter(v=>v!==null).join(' · ')}
function betKod(p){const [,b,kg,u,row,i]=p.path;return [b,kg,u,row==='-'?null:row,pad2(i+1)].filter(v=>v!==null).join('-')}
function befattning(p){
  if(p.kl)return ({KC:'Kompanichef','stf KC':'Stf kompanichef',KF:'Kompaniförvaltare'})[p.tag]||'Kompaniledningen';
  if(p.tr&&p.led)return 'Troppchef';
  if(p.tag&&p.path[2]===BT.bataljon)return ({BC:'Bataljonschef','stf BC':'Stf bataljonschef',BF:'Bataljonsförvaltare'})[p.tag]||p.tag;
  if(p.led&&p.path[2]===BT.bataljon){const f=FK.get(p.path.slice(0,4).join('|'));if(f&&f.typ)return (p.role==='chef'?'Chef':p.role==='stf'?'Stf chef':'Chefsgruppen')+' · '+f.tag}
  if(p.led)return p.role==='chef'?'Plutonchef':p.role==='stf'?'Stf plutonchef':'Plutonsledningen';
  return (p.role==='chef'?'Gruppchef':p.role==='stf'?'Stf gruppchef':'Soldat')+(p.gnamn?' · '+p.gnamn:'');
}
function kompNamn(K){return `${K.nr}. ${CFG.kompaninamn[K.typ]||K.typ}`}
function medAnrop(txt,a){return a?`${txt} (${a})`:txt}
function enhetNamn(p){
  const [r,b,kg,u]=p.path,D=BMAP.get(b);
  if(kg===BT.bataljon){const f=FK.get(p.path.slice(0,4).join('|'));return `${f.tag} · ${D.nr}. ${D.namn}`}
  const K=KMAP.get(kg),aE=anropEnhet(p.path),del=p.kl?'Kompaniledningen':p.tr?medAnrop('Troppen',aE):`Pluton ${aE||BOK[u]||u}`;
  return `${del} · ${medAnrop(kompNamn(K),anropKomp(b,kg))} · ${D.nr}. ${D.namn}`;
}
