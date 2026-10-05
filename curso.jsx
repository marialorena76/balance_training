/* ============================================================
   Balance Training Academy — Plantilla de landing de capacitación
   Cada curso-<slug>.html define window.BTA_SLUG y esta plantilla
   arma la página con los datos de cursos-data.jsx
   ============================================================ */
const { useState:useStateC, useEffect:useEffectC } = React;
const { CURSOS, LANDING, CONTACT, PHOTOS, imgErr, useReveal, Nav, Footer, WhatsFloat } = window.BTA;
const { DATA, PAGE, bySlug } = window.BTA_DATA;
const C = bySlug(window.BTA_SLUG) || DATA[0];
const WA = CONTACT.whatsapp + '?text=' + encodeURIComponent('Hola Andrea, quiero información sobre "' + C.t + '".');
const starStr = (n) => n ? '★'.repeat(n) : '';

const Check = ({c="var(--sage)",s=20})=>(
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" style={{flexShrink:0}}>
    <circle cx="12" cy="12" r="11" fill={c} opacity=".14"/>
    <path d="M7 12.4l3.2 3.1L17 8.5" stroke={c} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ---------- HERO ---------- */
function Hero(){
  return (
    <header style={{position:'relative',background:'var(--forest)',overflow:'hidden',paddingTop:74}}>
      <div style={{position:'absolute',inset:0}}>
        <img src={PHOTOS.bond} alt="" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 30%',opacity:.35}} onError={imgErr('var(--forest-2)')}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(42,23,8,.96) 0%,rgba(55,32,14,.88) 55%,rgba(55,32,14,.7) 100%)'}}></div>
      </div>
      <div className="bta-container" style={{position:'relative',zIndex:2,padding:'56px 28px 72px'}}>
        <nav style={{fontSize:13,color:'rgba(246,241,228,.6)',marginBottom:26,display:'flex',gap:8,flexWrap:'wrap'}}>
          <a href={LANDING} style={{color:'rgba(246,241,228,.6)',textDecoration:'none'}}>Inicio</a><span>/</span>
          <a href={CURSOS} style={{color:'rgba(246,241,228,.6)',textDecoration:'none'}}>Capacitaciones</a><span>/</span>
          <span style={{color:'var(--leaf-bright)'}}>{C.t}</span>
        </nav>
        <div className="bta-hero-grid" style={{display:'grid',gridTemplateColumns:C.cover?'1.05fr .95fr':'1fr',gap:48,alignItems:'center'}}>
          <div style={{maxWidth:680,minWidth:0}}>
            <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:20}}>
              <span style={{background:'var(--sun)',color:'var(--forest)',fontFamily:'var(--font-display)',fontWeight:700,fontSize:12,letterSpacing:'.07em',textTransform:'uppercase',padding:'7px 15px',borderRadius:'var(--radius-full)'}}>{C.eyebrow}</span>
              {C.stars && <span style={{background:'rgba(255,255,255,.12)',border:'1px solid rgba(255,255,255,.2)',color:'#fff',fontSize:12.5,fontWeight:600,padding:'7px 15px',borderRadius:'var(--radius-full)'}}>Nivel {starStr(C.stars)}</span>}
            </div>
            <h1 style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#fff',fontSize:'clamp(30px,4.6vw,52px)',lineHeight:1.08,marginBottom:20,textWrap:'balance'}}>{C.t}</h1>
            <p style={{color:'rgba(246,241,228,.9)',fontSize:'clamp(16px,2vw,19px)',lineHeight:1.65,marginBottom:30,maxWidth:600}}>{C.lead}</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:32}}>
              <a className="bta-btn bta-btn-primary" href="#inscripcion">{C.cat==='Cursos'||C.cat==='Webinars'||C.cat==='Formación'?'Quiero inscribirme':'Quiero consultar'}</a>
              <a className="bta-btn bta-btn-light" href={CURSOS}>Ver todas las capacitaciones</a>
            </div>
            {C.facts && <div style={{display:'flex',gap:26,flexWrap:'wrap'}}>
              {C.facts.map(([a,b])=>(
                <div key={b} style={{borderLeft:'2px solid rgba(220,182,126,.5)',paddingLeft:14}}>
                  <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:18,color:'#fff',lineHeight:1.2}}>{a}</div>
                  <div style={{fontSize:12.5,color:'rgba(246,241,228,.72)',marginTop:4,maxWidth:170}}>{b}</div>
                </div>
              ))}
            </div>}
          </div>
          {C.cover && <div style={{minWidth:0}}>
            <img src={C.cover} alt={'Portada: '+C.t} style={{width:'100%',display:'block',borderRadius:'var(--radius-lg)',boxShadow:'0 24px 60px rgba(0,0,0,.45)',border:'1px solid rgba(220,182,126,.35)'}} onError={imgErr('var(--forest-2)')}/>
          </div>}
        </div>
      </div>
    </header>
  );
}

/* ---------- DE QUÉ SE TRATA ---------- */
function About(){
  if(!C.about && !C.quote) return null;
  return (
    <section className="bg-paper bta-section">
      <div className="bta-container" style={{maxWidth:820}}>
        <p className="bta-eyebrow leaf">{C.aboutTitle || '¿De qué se trata?'}</p>
        <div style={{display:'flex',flexDirection:'column',gap:18,marginTop:8}}>
          {(C.about||[]).map((p,i)=>(
            <p key={i} style={{fontSize:i===0?19:16.5,lineHeight:1.75,color:i===0?'var(--ink)':'var(--ink-soft)',fontWeight:i===0?500:400}}>{p}</p>
          ))}
        </div>
        {C.quote && <blockquote style={{margin:'34px 0 0',padding:'24px 28px',background:'var(--green-bg)',borderLeft:'4px solid var(--sun)',borderRadius:'var(--radius-md)',fontSize:17,lineHeight:1.7,fontStyle:'italic',color:'var(--ink)'}}>{C.quote}</blockquote>}
        {C.where && <p style={{marginTop:22,fontSize:15,color:'var(--ink-soft)'}}><strong style={{color:'var(--ink)'}}>¿Dónde estamos?</strong> {C.where}</p>}
      </div>
    </section>
  );
}

/* ---------- PROGRAMA ---------- */
function Programa(){
  if(!C.program) return null;
  const label = C.programLabel;
  return (
    <section className="bg-paper2 bta-section">
      <div className="bta-container" style={{maxWidth:900}}>
        <div style={{maxWidth:680,marginBottom:36}}>
          <p className="bta-eyebrow leaf">{C.programTitle||'Programa'}</p>
          <h2 style={{fontSize:'clamp(26px,3.6vw,40px)'}}>{label ? C.program.length+' '+(label==='Etapa'?'etapas':label==='Clase'?'clases':'módulos') : 'Lo que vamos a recorrer'}</h2>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {C.program.map((m,i)=>(
            <div key={m.t} style={{display:'flex',gap:20,alignItems:m.d&&m.d.length>80?'flex-start':'center',background:'#fff',border:'1px solid var(--line)',borderRadius:'var(--radius-md)',padding:'18px 24px',boxShadow:'var(--shadow-sm)'}}>
              <span style={{flexShrink:0,width:42,height:42,borderRadius:'50%',background:'var(--forest)',color:'var(--sun-soft)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:800,fontSize:16}}>{i+1}</span>
              <div style={{minWidth:0}}>
                {label && <div style={{fontSize:11.5,textTransform:'uppercase',letterSpacing:'.09em',color:'var(--ink-soft)',marginBottom:3}}>{label} {i+1}</div>}
                <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:17,color:'var(--ink)'}}>{m.t}</div>
                {m.d && <p style={{fontSize:14.5,lineHeight:1.65,color:'var(--ink-soft)',marginTop:5}}>{m.d}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BLOQUES (mentorías, estadías, presenciales) ---------- */
function Blocks(){
  if(!C.blocks) return null;
  return (
    <section className="bg-paper2 bta-section">
      <div className="bta-container" style={{maxWidth:1000}}>
        <div className="bta-blocks" style={{display:'grid',gridTemplateColumns:C.blocks.length>1?'1fr 1fr':'1fr',gap:20}}>
          {C.blocks.map(b=>(
            <div key={b.title} style={{background:'#fff',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',padding:'30px 30px 32px',boxShadow:'var(--shadow-sm)'}}>
              <p className="bta-eyebrow leaf" style={{marginBottom:8}}>{b.eyebrow}</p>
              <h3 style={{fontSize:20,lineHeight:1.3,marginBottom:14,color:'var(--ink)'}}>{b.title}</h3>
              <div style={{display:'flex',flexDirection:'column',gap:10}}>
                {b.paras.map((p,i)=><p key={i} style={{fontSize:15,lineHeight:1.7,color:'var(--ink-soft)'}}>{p}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- QUÉ VAS A OBTENER ---------- */
function Obtener(){
  if(!C.gets) return null;
  return (
    <section className="bg-paper bta-section">
      <div className="bta-container">
        <div style={{maxWidth:680,marginBottom:40}}>
          <p className="bta-eyebrow leaf">{C.gainsTitle||'¿Qué vas a obtener?'}</p>
          <h2 style={{fontSize:'clamp(26px,3.6vw,40px)'}}>Lo que te llevás de esta capacitación</h2>
        </div>
        <div className="bta-aprender" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          {C.gets.map(t=>(
            <div key={t} style={{display:'flex',gap:14,alignItems:'flex-start',background:'#fff',border:'1px solid var(--line)',borderRadius:'var(--radius-md)',padding:'18px 22px',boxShadow:'var(--shadow-sm)'}}>
              <Check/><span style={{fontSize:15,lineHeight:1.6,color:'var(--ink)'}}>{t}</span>
            </div>
          ))}
        </div>
        {C.gainsNote && <p style={{marginTop:28,maxWidth:760,fontSize:16.5,lineHeight:1.7,color:'var(--ink)',fontStyle:'italic'}}>{C.gainsNote}</p>}
      </div>
    </section>
  );
}

/* ---------- PARA QUIÉN + REQUISITOS ---------- */
function ParaQuien(){
  const hasReq = C.req || C.reqSoft;
  if(!C.forWho && !hasReq) return null;
  return (
    <section className="bg-sand bta-section">
      <div className="bta-container bta-quien" style={{display:'grid',gridTemplateColumns:(C.forWho&&hasReq)?'1fr 1fr':'1fr',gap:26,maxWidth:1000}}>
        {C.forWho && <div style={{background:'#fff',borderRadius:'var(--radius-lg)',padding:'34px 32px',boxShadow:'var(--shadow-md)',borderTop:'4px solid var(--sage)'}}>
          <h3 style={{fontSize:20,marginBottom:20,color:'var(--ink)'}}>¿A quién está dirigido?</h3>
          <div style={{display:'flex',flexDirection:'column',gap:13}}>
            {C.forWho.map(t=><div key={t} style={{display:'flex',gap:12,alignItems:'flex-start'}}><Check s={19}/><span style={{fontSize:14.5,lineHeight:1.6,color:'var(--ink-soft)'}}>{t}</span></div>)}
          </div>
          {C.forWhoNote && <p style={{marginTop:20,paddingTop:16,borderTop:'1px solid var(--line)',fontSize:14.5,lineHeight:1.6,color:'var(--ink)',fontWeight:600}}>{C.forWhoNote}</p>}
        </div>}
        {hasReq && <div style={{background:'#fff',borderRadius:'var(--radius-lg)',padding:'34px 32px',boxShadow:'var(--shadow-md)',borderTop:'4px solid var(--clay)'}}>
          <h3 style={{fontSize:20,marginBottom:20,color:'var(--ink)'}}>{C.req ? (C.reqTitle||'Requisitos') : 'Recomendación'}</h3>
          <div style={{display:'flex',flexDirection:'column',gap:13}}>
            {(C.req||[C.reqSoft]).map((t,i)=><div key={i} style={{display:'flex',gap:12,alignItems:'flex-start'}}>
              <span style={{flexShrink:0,width:22,height:22,borderRadius:'50%',background:'rgba(105,60,22,.12)',color:'var(--clay)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:800}}>{C.req && C.req.length>1 ? i+1 : '·'}</span>
              <span style={{fontSize:14.5,lineHeight:1.6,color:'var(--ink-soft)'}}>{t}</span>
            </div>)}
          </div>
          <p style={{marginTop:22,paddingTop:18,borderTop:'1px solid var(--line)',fontSize:13.5,color:'var(--ink-soft)'}}>
            ¿Dudas? <a href={WA} style={{color:'var(--leaf)',fontWeight:700}}>Escribinos</a> y te asesoramos.
          </p>
        </div>}
      </div>
    </section>
  );
}

/* ---------- INCLUYE ---------- */
function Incluye(){
  if(!C.includes) return null;
  return (
    <section className="bg-forest bta-section">
      <div className="bta-container" style={{maxWidth:960}}>
        <div style={{textAlign:'center',marginBottom:40}}>
          <p className="bta-eyebrow on-dark" style={{justifyContent:'center'}}>Qué incluye</p>
          <h2 style={{color:'#fff',fontSize:'clamp(26px,3.6vw,40px)'}}>Todo lo que recibís</h2>
        </div>
        <div className="bta-incluye" style={{display:'grid',gridTemplateColumns:C.includes.length>1?'1fr 1fr':'1fr',gap:14,maxWidth:C.includes.length>1?'none':460,margin:'0 auto'}}>
          {C.includes.map(t=>(
            <div key={t} style={{display:'flex',gap:13,alignItems:'center',background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.12)',borderRadius:'var(--radius-md)',padding:'17px 20px'}}>
              <Check c="var(--leaf-bright)" s={19}/><span style={{fontSize:14.5,color:'rgba(246,241,228,.92)'}}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INSCRIPCIÓN / CONSULTA ---------- */
function Inscripcion(){
  const rows = (C.facts||[]).slice(0,3);
  return (
    <section id="inscripcion" className="bg-paper2 bta-section">
      <div className="bta-container" style={{maxWidth:760}}>
        <div style={{background:'#fff',borderRadius:'var(--radius-xl)',boxShadow:'var(--shadow-lg)',border:'1px solid var(--line)',overflow:'hidden'}}>
          <div style={{background:'var(--forest)',padding:'30px 36px'}}>
            <p className="bta-eyebrow on-dark" style={{marginBottom:10}}>{C.cat==='Acompañamiento'||C.cat==='Presenciales'?'Consultas':'Inscripción'}</p>
            <h2 style={{color:'#fff',fontSize:'clamp(24px,3.2vw,34px)',lineHeight:1.15}}>{C.t}</h2>
          </div>
          <div style={{padding:'34px 36px 38px'}}>
            {rows.length>0 && <div style={{display:'flex',flexWrap:'wrap',gap:26,marginBottom:28}}>
              {rows.map(([a,b])=>(
                <div key={b} style={{minWidth:160}}>
                  <div style={{fontSize:11.5,textTransform:'uppercase',letterSpacing:'.09em',color:'var(--ink-soft)',marginBottom:5}}>{b}</div>
                  <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:17,color:'var(--ink)'}}>{a}</div>
                </div>
              ))}
            </div>}
            {C.dateNote && <p style={{fontSize:14,color:'var(--clay)',fontWeight:700,marginBottom:16}}>{C.dateNote}</p>}
            <div style={{background:'var(--green-bg)',borderRadius:'var(--radius-md)',padding:'20px 22px',marginBottom:26}}>
              <p style={{fontSize:15,lineHeight:1.65,color:'var(--ink)'}}>
                Consultanos por el <strong>valor vigente, las formas de pago y las próximas fechas</strong>. Te respondemos por WhatsApp o por mail
                y te contamos todo lo que necesitás saber.
              </p>
            </div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:22}}>
              <a className="bta-btn bta-btn-primary" href={WA}>{C.ctaLabel||'Consultar por WhatsApp'}</a>
              <a className="bta-btn bta-btn-green" href={"mailto:"+CONTACT.email+"?subject="+encodeURIComponent(C.t)}>Escribir por mail</a>
            </div>
            <p style={{fontSize:13.5,color:'var(--ink-soft)',lineHeight:1.7}}>
              {CONTACT.whatsappLabel} · <a href={"mailto:"+CONTACT.email} style={{color:'var(--leaf)',fontWeight:600}}>{CONTACT.email}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq(){
  const qs = [];
  if(C.req) qs.push({q:'¿Tiene requisitos previos?', a:C.req.join(' ')});
  else if(C.reqSoft) qs.push({q:'¿Necesito haber hecho otro curso antes?', a:C.reqSoft});
  if(C.includes) qs.push({q:'¿Qué incluye?', a:C.includes.join(' · ')+'.'});
  qs.push({q:'¿Cuánto sale y cómo se paga?', a:'Escribinos por WhatsApp al '+CONTACT.whatsappLabel+' o a '+CONTACT.email+' y te pasamos el valor vigente y las formas de pago disponibles.'});
  qs.push({q:'No sé si es la capacitación indicada para mí, ¿me orientan?', a:'Sí, con mucho gusto. Contanos tu nivel, tu experiencia y tus intereses, y te asesoramos para que elijas el camino más adecuado dentro de la Pirámide Formativa.'});
  const [open,setOpen] = useStateC(0);
  return (
    <section className="bg-paper bta-section">
      <div className="bta-container" style={{maxWidth:820}}>
        <div style={{textAlign:'center',marginBottom:40}}>
          <p className="bta-eyebrow leaf" style={{justifyContent:'center'}}>Preguntas frecuentes</p>
          <h2 style={{fontSize:'clamp(26px,3.6vw,40px)'}}>Antes de inscribirte</h2>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {qs.map((item,i)=>{
            const isOpen=open===i;
            return (
              <div key={i} style={{background:'#fff',borderRadius:'var(--radius-md)',border:'1px solid var(--line)',boxShadow:isOpen?'var(--shadow-md)':'var(--shadow-sm)',overflow:'hidden',transition:'box-shadow .25s'}}>
                <button onClick={()=>setOpen(isOpen?-1:i)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,padding:'20px 24px',background:'none',border:'none',cursor:'pointer',textAlign:'left'}}>
                  <span style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:16.5,color:'var(--ink)'}}>{item.q}</span>
                  <span style={{flexShrink:0,width:30,height:30,borderRadius:'50%',background:isOpen?'var(--sun)':'var(--green-bg)',color:isOpen?'var(--forest)':'var(--leaf-dark)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:700,transition:'all .25s',transform:isOpen?'rotate(45deg)':'none'}}>+</span>
                </button>
                <div style={{maxHeight:isOpen?400:0,overflow:'hidden',transition:'max-height .3s var(--ease)'}}>
                  <p style={{padding:'0 24px 22px',fontSize:15,lineHeight:1.7,color:'var(--ink-soft)'}}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- SEGUÍ TU CAMINO ---------- */
function Relacionados(){
  const pool = DATA.filter(c=>c.slug!==C.slug && c.cover);
  const same = pool.filter(c=>c.cat===C.cat);
  const list = same.concat(pool.filter(c=>c.cat!==C.cat)).slice(0,3);
  return (
    <section className="bg-sand bta-section">
      <div className="bta-container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:16,flexWrap:'wrap',marginBottom:32}}>
          <div>
            <p className="bta-eyebrow leaf">Seguí tu camino</p>
            <h2 style={{fontSize:'clamp(24px,3.2vw,34px)'}}>Otras capacitaciones de la Academia</h2>
          </div>
          <a className="bta-btn bta-btn-green bta-btn-sm" href={CURSOS}>Ver catálogo completo</a>
        </div>
        <div className="bta-rel" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
          {list.map(c=>(
            <a key={c.slug} href={PAGE(c.slug)} className="bta-lift" style={{display:'block',background:'#fff',borderRadius:'var(--radius-lg)',overflow:'hidden',textDecoration:'none',boxShadow:'var(--shadow-sm)',border:'1px solid var(--line)'}}>
              <img src={c.cover} alt="" style={{width:'100%',aspectRatio:'16/9',objectFit:'cover',display:'block'}} onError={imgErr('var(--sand)')}/>
              <div style={{padding:'16px 18px 20px'}}>
                <div style={{fontSize:11.5,textTransform:'uppercase',letterSpacing:'.08em',color:'var(--leaf)',fontWeight:700,marginBottom:6}}>{c.eyebrow}{c.stars?' · '+starStr(c.stars):''}</div>
                <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:16.5,color:'var(--ink)',lineHeight:1.3}}>{c.t}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- STICKY BAR ---------- */
function StickyBar(){
  const [show,setShow]=useStateC(false);
  useEffectC(()=>{
    const onScroll=()=>setShow(window.scrollY>640);
    window.addEventListener('scroll',onScroll,{passive:true});
    return ()=>window.removeEventListener('scroll',onScroll);
  },[]);
  const sub = (C.facts||[]).slice(0,2).map(f=>f[0]).join(' · ');
  return (
    <div style={{position:'fixed',left:0,right:0,bottom:0,zIndex:140,background:'var(--forest)',borderTop:'1px solid rgba(255,255,255,.14)',
      transform:show?'translateY(0)':'translateY(110%)',transition:'transform .3s var(--ease)'}}>
      <div className="bta-container bta-sticky" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,padding:'14px 28px',flexWrap:'wrap'}}>
        <div style={{minWidth:0}}>
          <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#fff',fontSize:15.5,lineHeight:1.2}}>{C.t}</div>
          {sub && <div style={{fontSize:12.5,color:'var(--leaf-bright)',marginTop:3}}>{sub}</div>}
        </div>
        <a className="bta-btn bta-btn-primary bta-btn-sm" href="#inscripcion">{C.cat==='Acompañamiento'||C.cat==='Presenciales'?'Consultar':'Quiero inscribirme'}</a>
      </div>
    </div>
  );
}

function App(){
  useReveal();
  useEffectC(()=>{ document.title = C.t + ' — Balance Training Academy®'; },[]);
  return (
    <div style={{paddingBottom:70}}>
      <Nav active="cursos"/>
      <Hero/>
      <About/>
      <Programa/>
      <Blocks/>
      <Obtener/>
      <ParaQuien/>
      <Incluye/>
      <Inscripcion/>
      <Faq/>
      <Relacionados/>
      <Footer/>
      <WhatsFloat/>
      <StickyBar/>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
