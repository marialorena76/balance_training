/* ============================================================
   Balance Training Academy — Plantilla de landing de capacitación
   Cada curso-<slug>.html define window.BTA_SLUG y esta plantilla
   arma la página con los datos de cursos-data.jsx.

   Inscripción (campo `enroll` en cursos-data.jsx):
   - 'curso'      cursos y webinars online → "Consultar inscripción"
                  (cuando exista el checkout en WordPress, completar `checkout`
                  con la URL y el botón pasa a "Inscribirme ahora")
   - 'cohorte'    con fecha de inicio (Psico-Física, Formación) → próximas fechas
   - 'entrevista' requiere conversación previa (mentorías, asesorías, coaching, estadías)
   - 'consulta'   presenciales → avisos y organización de clínicas
   ============================================================ */
const { useState:useStateC, useEffect:useEffectC, useRef:useRefC } = React;
const { CURSOS, LANDING, ANDREA, CONTACT, imgErr, useReveal, Nav, Footer, WhatsFloat } = window.BTA;
const { DATA, PAGE, bySlug, TESTIMONIOS, PIRAMIDE } = window.BTA_DATA;
const C = bySlug(window.BTA_SLUG);
const PHOTO_ANDREA = 'assets/andrea-hero.jpg';
const starStr = (n) => n ? '★'.repeat(n) : '';
const WA = C ? CONTACT.whatsapp + '?text=' + encodeURIComponent('Hola Andrea, quiero información sobre "' + C.t + '".') : CONTACT.whatsapp;

const ENROLL = {
  curso:      { cta:'Consultar inscripción', title:'Inscripción',
                text:'Escribinos y te pasamos el valor vigente, las formas de pago y cómo acceder al curso.' },
  cohorte:    { cta:'Consultar próximas fechas', title:'Inscripción',
                text:'Te contamos la fecha de inicio, el valor vigente y las formas de pago. Los cupos son limitados.' },
  entrevista: { cta:'Solicitar entrevista', title:'El primer paso',
                text:'Todo empieza con una conversación con Andrea para conocer tu caso, tus objetivos y definir juntos la mejor forma de acompañarte.' },
  consulta:   { cta:'Escribinos', title:'Consultas',
                text:'Dejanos tus datos para enterarte de las próximas capacitaciones presenciales, o contanos dónde querés organizar una clínica.' },
};
const E = C ? (ENROLL[C.enroll] || ENROLL.curso) : ENROLL.curso;
const CTA_LABEL = C && C.checkout ? 'Inscribirme ahora' : (C && C.ctaShort) || E.cta;
const CTA_HREF = C && C.checkout ? C.checkout : '#inscripcion';
const levelText = (n) => n===1 ? 'Primer escalón de la Pirámide' : 'Nivel de la Pirámide Formativa';

const Check = ({c="var(--sage-deep)",s=20})=>(
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{flexShrink:0,marginTop:2}}>
    <circle cx="12" cy="12" r="11" fill={c} opacity=".14"/>
    <path d="M7 12.4l3.2 3.1L17 8.5" stroke={c} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const H2 = ({children, light, style}) => (
  <h2 style={{fontSize:'clamp(26px,3.4vw,38px)',lineHeight:1.15,textWrap:'balance',color:light?'#fff':'var(--ink)',...style}}>{children}</h2>
);

/* ---------- HERO ---------- */
function Hero(){
  const visual = C.cover || PHOTO_ANDREA;
  return (
    <header className="bta-hero" style={{position:'relative',background:'var(--forest)',overflow:'hidden',paddingTop:74}}>
      <div style={{position:'absolute',inset:0}} aria-hidden="true">
        <img src={PHOTO_ANDREA} alt="" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'70% 35%',opacity:.38}} onError={imgErr('var(--forest-2)')}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(42,23,8,.97) 0%,rgba(46,26,10,.9) 50%,rgba(46,26,10,.72) 100%)'}}></div>
      </div>
      <div className="bta-container" style={{position:'relative',zIndex:2,padding:'48px 28px 68px'}}>
        <nav aria-label="Ruta de navegación" style={{fontSize:13,color:'rgba(246,241,228,.72)',marginBottom:28,display:'flex',gap:8,flexWrap:'wrap'}}>
          <a href={LANDING} style={{color:'rgba(246,241,228,.72)'}}>Inicio</a><span aria-hidden="true">/</span>
          <a href={CURSOS} style={{color:'rgba(246,241,228,.72)'}}>Capacitaciones</a><span aria-hidden="true">/</span>
          <span aria-current="page" style={{color:'var(--leaf-bright)'}}>{C.t}</span>
        </nav>
        <div className="bta-hero-grid" style={{display:'grid',gridTemplateColumns:'1.05fr .95fr',gap:52,alignItems:'center'}}>
          <div style={{maxWidth:640,minWidth:0}}>
            <h1 style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#fff',fontSize:'clamp(30px,4.4vw,50px)',lineHeight:1.08,marginBottom:14,textWrap:'balance'}}>{C.t}</h1>
            <p style={{fontSize:14.5,fontWeight:600,color:'var(--leaf-bright)',marginBottom:22,display:'flex',gap:10,flexWrap:'wrap',alignItems:'center'}}>
              <span>{C.eyebrow}</span>
              {C.stars && <><span aria-hidden="true" style={{opacity:.5}}>·</span><span><span style={{color:'var(--sun-soft)',letterSpacing:'.08em'}} aria-hidden="true">{starStr(C.stars)}</span> <span>{levelText(C.stars)}</span></span></>}
            </p>
            <p style={{color:'rgba(246,241,228,.92)',fontSize:'clamp(16px,1.9vw,19px)',lineHeight:1.65,marginBottom:30,maxWidth:600}}>{C.lead}</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:30}}>
              <a className="bta-btn bta-btn-primary" href={CTA_HREF}>{CTA_LABEL}</a>
              <a className="bta-btn bta-btn-light" href={CURSOS}>Ver todas las capacitaciones</a>
            </div>
            {C.facts && <dl style={{display:'flex',gap:26,flexWrap:'wrap'}}>
              {C.facts.filter(f=>!/^★+$/.test(f[0])).map(([a,b])=>(
                <div key={b} style={{borderLeft:'1px solid rgba(220,182,126,.45)',paddingLeft:14}}>
                  <dt style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:18,color:'#fff',lineHeight:1.2}}>{a}</dt>
                  <dd style={{fontSize:13,color:'rgba(246,241,228,.78)',marginTop:4,maxWidth:180}}>{b}</dd>
                </div>
              ))}
            </dl>}
          </div>
          <div className="bta-hero-visual" style={{minWidth:0}}>
            <img src={visual} alt={C.cover ? 'Portada: '+C.t : 'Andrea Pigazzi con su caballo en Córdoba'}
              style={{width:'100%',display:'block',aspectRatio:C.cover?'auto':'4/3',objectFit:'cover',objectPosition:'72% 30%',borderRadius:'var(--radius-lg)',boxShadow:'0 24px 50px -12px rgba(0,0,0,.55)',border:'1px solid rgba(220,182,126,.3)'}}
              onError={imgErr('var(--forest-2)')}/>
          </div>
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
      <div className="bta-container" style={{maxWidth:780}}>
        <H2 style={{marginBottom:22}}>{C.aboutTitle || '¿De qué se trata?'}</H2>
        <div style={{display:'flex',flexDirection:'column',gap:18}}>
          {(C.about||[]).map((p,i)=>(
            <p key={i} style={{fontSize:i===0?19:17,lineHeight:1.75,color:i===0?'var(--ink)':'var(--ink-soft)',fontWeight:i===0?500:400}}>{p}</p>
          ))}
        </div>
        {C.quote && <figure style={{margin:'40px 0 0',paddingTop:28,borderTop:'1px solid var(--line)'}}>
          <span aria-hidden="true" style={{display:'block',fontFamily:'Georgia, serif',fontSize:64,lineHeight:.6,color:'var(--sun)',marginBottom:10}}>“</span>
          <blockquote style={{fontSize:'clamp(18px,2.2vw,22px)',lineHeight:1.55,fontStyle:'italic',color:'var(--ink)',fontWeight:500}}>{C.quote}</blockquote>
        </figure>}
        {C.where && <p style={{marginTop:24,fontSize:15.5,color:'var(--ink-soft)'}}><strong style={{color:'var(--ink)'}}>¿Dónde estamos?</strong> {C.where}</p>}
      </div>
    </section>
  );
}

/* ---------- PROGRAMA (lista compacta) ---------- */
function Programa(){
  if(!C.program) return null;
  const label = C.programLabel;
  const detailed = C.program.some(m=>m.d && m.d.length>60);
  return (
    <section className="bg-paper2 bta-section">
      <div className="bta-container" style={{maxWidth:detailed?860:980}}>
        <H2 style={{marginBottom:10}}>{C.programTitle||'Programa'}</H2>
        {label && <p style={{fontSize:16,color:'var(--ink-soft)',marginBottom:30}}>{C.program.length} {label==='Etapa'?'etapas':label==='Clase'?'clases':'módulos'}</p>}
        <ol className={detailed?'':'bta-prog-cols'} style={{listStyle:'none',marginTop:label?0:28,display:'grid',gridTemplateColumns:detailed?'1fr':'1fr 1fr',columnGap:48}}>
          {C.program.map((m,i)=>(
            <li key={m.t} style={{display:'flex',gap:18,alignItems:'baseline',padding:'18px 0',borderTop:'1px solid var(--line)'}}>
              <span style={{flexShrink:0,minWidth:28,fontFamily:'var(--font-display)',fontWeight:800,fontSize:17,color:'var(--sun-deep)',fontVariantNumeric:'tabular-nums'}}>{String(i+1).padStart(2,'0')}</span>
              <div style={{minWidth:0}}>
                <span style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:17,color:'var(--ink)'}}>{label?label+' '+(i+1)+': ':''}{m.t}</span>
                {m.d && <p style={{fontSize:15,lineHeight:1.65,color:'var(--ink-soft)',marginTop:5}}>{m.d}</p>}
              </div>
            </li>
          ))}
        </ol>
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
        <div className="bta-blocks" style={{display:'grid',gridTemplateColumns:C.blocks.length>1?'1fr 1fr':'1fr',gap:'44px 56px'}}>
          {C.blocks.map(b=>(
            <div key={b.title}>
              <h3 style={{fontSize:21,lineHeight:1.3,marginBottom:6,color:'var(--ink)'}}>{b.title}</h3>
              <p style={{fontSize:14,fontWeight:700,color:'var(--sun-deep)',marginBottom:14}}>{b.eyebrow}</p>
              <div style={{display:'flex',flexDirection:'column',gap:10}}>
                {b.paras.map((p,i)=><p key={i} style={{fontSize:15.5,lineHeight:1.7,color:'var(--ink-soft)'}}>{p}</p>)}
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
      <div className="bta-container" style={{maxWidth:1000}}>
        <H2 style={{marginBottom:30}}>{C.gainsTitle||'¿Qué vas a obtener?'}</H2>
        <ul className="bta-aprender" style={{listStyle:'none',display:'grid',gridTemplateColumns:'1fr 1fr',columnGap:48,rowGap:18}}>
          {C.gets.map(t=>(
            <li key={t} style={{display:'flex',gap:14,alignItems:'flex-start'}}>
              <Check/><span style={{fontSize:16,lineHeight:1.6,color:'var(--ink)'}}>{t}</span>
            </li>
          ))}
        </ul>
        {C.gainsNote && <p style={{marginTop:34,maxWidth:720,fontSize:18,lineHeight:1.65,color:'var(--ink)',fontStyle:'italic'}}>{C.gainsNote}</p>}
      </div>
    </section>
  );
}

/* ---------- PARA QUIÉN + REQUISITOS ---------- */
function ParaQuien(){
  const hasReq = C.req || C.reqSoft;
  if(!C.forWho && !hasReq) return null;
  const card = {background:'#fff',borderRadius:'var(--radius-lg)',padding:'34px 32px',boxShadow:'var(--shadow-sm)',border:'1px solid var(--line)'};
  return (
    <section className="bg-sand bta-section">
      <div className="bta-container bta-quien" style={{display:'grid',gridTemplateColumns:(C.forWho&&hasReq)?'1.2fr 1fr':'1fr',gap:26,maxWidth:(C.forWho&&hasReq)?1040:780}}>
        {C.forWho && <div style={card}>
          <H2 style={{fontSize:'clamp(22px,2.6vw,28px)',marginBottom:22}}>¿A quién está dirigido?</H2>
          <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:14}}>
            {C.forWho.map(t=><li key={t} style={{display:'flex',gap:12,alignItems:'flex-start'}}><Check s={19}/><span style={{fontSize:15.5,lineHeight:1.6,color:'var(--ink)'}}>{t}</span></li>)}
          </ul>
          {C.forWhoNote && <p style={{marginTop:22,paddingTop:18,borderTop:'1px solid var(--line)',fontSize:15.5,lineHeight:1.6,color:'var(--ink)',fontWeight:700}}>{C.forWhoNote}</p>}
        </div>}
        {hasReq && <div style={{...card,background:'var(--paper-2)'}}>
          <H2 style={{fontSize:'clamp(22px,2.6vw,28px)',marginBottom:22}}>{C.req ? (C.reqTitle||'Requisitos') : 'Recomendación'}</H2>
          <ol style={{listStyle:'none',display:'flex',flexDirection:'column',gap:14}}>
            {(C.req||[C.reqSoft]).map((t,i)=><li key={i} style={{display:'flex',gap:12,alignItems:'flex-start'}}>
              {C.req && C.req.length>1
                ? <span aria-hidden="true" style={{flexShrink:0,minWidth:22,fontWeight:800,color:'var(--sun-deep)',fontVariantNumeric:'tabular-nums'}}>{i+1}.</span>
                : <Check s={19} c="var(--leaf)"/>}
              <span style={{fontSize:15.5,lineHeight:1.6,color:'var(--ink)'}}>{t}</span>
            </li>)}
          </ol>
          <p style={{marginTop:22,paddingTop:18,borderTop:'1px solid var(--line)',fontSize:14.5,color:'var(--ink-soft)'}}>
            ¿Dudas sobre tu caso? <a href={WA} style={{color:'var(--leaf)',fontWeight:700}}>Escribinos</a> y te asesoramos.
          </p>
        </div>}
      </div>
    </section>
  );
}

/* ---------- QUIÉN TE ACOMPAÑA ---------- */
function Andrea(){
  const photo = !!C.cover; /* sin portada, el hero ya muestra su foto */
  return (
    <section className="bg-forest" style={{overflow:'hidden'}}>
      <div className="bta-andrea" style={{display:'grid',gridTemplateColumns:photo?'1fr 1.1fr':'1fr',alignItems:'stretch',maxWidth:photo?1320:900,margin:'0 auto'}}>
        {photo && <div style={{position:'relative',minHeight:380}}>
          <img src="assets/andrea-portrait.jpg" alt="Andrea Pigazzi, creadora del Método Balance Training®" loading="lazy"
            style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'78% 30%'}} onError={imgErr('var(--forest-2)')}/>
        </div>}
        <div style={{padding:'64px clamp(24px,5vw,72px)',display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <H2 light style={{marginBottom:18}}>Quién te acompaña</H2>
          <p style={{fontSize:17,lineHeight:1.7,color:'rgba(246,241,228,.9)',marginBottom:26,maxWidth:560}}>
            <strong style={{color:'#fff'}}>Andrea Pigazzi</strong>, creadora del Método Balance Training® y directora de la Academia.
            35 años acompañando la formación y profesionalización ecuestre, por el bienestar del caballo y el desarrollo integral de las personas.
          </p>
          <blockquote style={{fontSize:'clamp(18px,2vw,21px)',lineHeight:1.55,fontStyle:'italic',color:'var(--leaf-bright)',maxWidth:560,marginBottom:26}}>
            “El Bienestar y el futuro del Caballo al lado del humano está absolutamente ligado a cuán formadas, experimentadas y compasivas sean las personas que los manejan.”
          </blockquote>
          <a href={ANDREA} className="bta-arrow" style={{color:'var(--sun-soft)',alignSelf:'flex-start'}}>Conocé a Andrea <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}

/* ---------- INSCRIPCIÓN / CONSULTA ---------- */
function Inscripcion(){
  const specs = (C.specs||[]).concat(C.stars ? [['Nivel', starStr(C.stars)+' · '+levelText(C.stars)]] : []);
  const tIndex = Math.max(0, DATA.findIndex(d=>d.slug===C.slug)) % TESTIMONIOS.length;
  const tm = TESTIMONIOS[tIndex];
  return (
    <section id="inscripcion" className="bg-paper2 bta-section">
      <div className="bta-container bta-insc" style={{maxWidth:1040,display:'grid',gridTemplateColumns:'1.25fr .75fr',gap:28,alignItems:'start'}}>
        <div style={{background:'#fff',borderRadius:'var(--radius-xl)',boxShadow:'var(--shadow-lg)',border:'1px solid var(--line)',overflow:'hidden'}}>
          <div style={{background:'var(--forest)',padding:'28px 34px'}}>
            <H2 light style={{fontSize:'clamp(24px,3vw,32px)'}}>{E.title}</H2>
            <p style={{color:'var(--leaf-bright)',fontSize:15,fontWeight:600,marginTop:6}}>{C.t}</p>
          </div>
          <div style={{padding:'30px 34px 34px'}}>
            {specs.length>0 && <dl style={{display:'grid',gridTemplateColumns:'auto 1fr',columnGap:22,rowGap:12,marginBottom:26}}>
              {specs.map(([k,v])=>(
                <React.Fragment key={k}>
                  <dt style={{fontSize:14,color:'var(--ink-soft)',fontWeight:600}}>{k}</dt>
                  <dd style={{fontSize:15.5,color:'var(--ink)',fontWeight:700}}>{v}</dd>
                </React.Fragment>
              ))}
            </dl>}
            {C.includes && C.includes.length>1 && <div style={{marginBottom:26,paddingTop:22,borderTop:'1px solid var(--line)'}}>
              <h3 style={{fontSize:16,marginBottom:12,color:'var(--ink)'}}>Qué incluye</h3>
              <ul style={{listStyle:'none',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px 20px'}} className="bta-incl">
                {C.includes.map(t=><li key={t} style={{display:'flex',gap:10,alignItems:'flex-start',fontSize:15,color:'var(--ink)',lineHeight:1.45}}><Check s={18}/><span>{t}</span></li>)}
              </ul>
            </div>}
            <p style={{fontSize:16,lineHeight:1.65,color:'var(--ink)',marginBottom:24}}>{E.text}</p>
            <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:20}}>
              {C.checkout && <a className="bta-btn bta-btn-primary" href={C.checkout}>Inscribirme ahora</a>}
              <a className={C.checkout?'bta-btn bta-btn-green':'bta-btn bta-btn-primary'} href={WA}>{C.checkout?'¿Dudas? Escribinos':(C.ctaLabel||'Consultar por WhatsApp')}</a>
              {!C.checkout && <a className="bta-btn bta-btn-outline" href={"mailto:"+CONTACT.email+"?subject="+encodeURIComponent(C.t)}>Escribir por mail</a>}
            </div>
            <p style={{fontSize:14,color:'var(--ink-soft)',lineHeight:1.7}}>
              Te responde Andrea o su equipo · WhatsApp {CONTACT.whatsappLabel} · {CONTACT.email}
            </p>
          </div>
        </div>
        <figure style={{background:'var(--forest)',color:'var(--cream)',borderRadius:'var(--radius-xl)',padding:'34px 30px'}}>
          <span aria-hidden="true" style={{display:'block',fontFamily:'Georgia, serif',fontSize:60,lineHeight:.6,color:'var(--sun)',marginBottom:12}}>“</span>
          <blockquote style={{fontSize:18,lineHeight:1.6,fontStyle:'italic',color:'#fff',marginBottom:22}}>{tm.t}</blockquote>
          <figcaption style={{fontSize:14.5}}>
            <strong style={{display:'block',color:'var(--leaf-bright)'}}>{tm.n}</strong>
            <span style={{color:'rgba(246,241,228,.78)'}}>{tm.r}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq(){
  const qs = [];
  if(C.req) qs.push({q:'¿Tiene requisitos previos?', a:C.req.join(' ')});
  else if(C.reqSoft) qs.push({q:'¿Necesito haber hecho otro curso antes?', a:C.reqSoft});
  qs.push({q:'¿Cuánto sale y cómo se paga?', a:'Escribinos por WhatsApp al '+CONTACT.whatsappLabel+' o a '+CONTACT.email+' y te pasamos el valor vigente y las formas de pago disponibles.'});
  if(C.stars) qs.push({q:'¿Qué significan las estrellas?', a:'Indican el escalón de cada capacitación dentro de la Pirámide Formativa, el orden en que sugerimos ir tomándolas. Es una sugerencia y no invalida tomarlas en otro orden.'});
  qs.push({q:'No sé si es la capacitación indicada para mí, ¿me orientan?', a:'Sí, con mucho gusto. Contanos tu nivel, tu experiencia y tus intereses, y te asesoramos para que elijas el camino más adecuado.'});
  const [open,setOpen] = useStateC(0);
  return (
    <section className="bg-paper bta-section">
      <div className="bta-container" style={{maxWidth:800}}>
        <H2 style={{marginBottom:30,textAlign:'center'}}>Preguntas frecuentes</H2>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {qs.map((item,i)=>{
            const isOpen=open===i, id='faq-'+i;
            return (
              <div key={i} style={{background:'#fff',borderRadius:'var(--radius-md)',border:'1px solid var(--line)',boxShadow:isOpen?'var(--shadow-md)':'var(--shadow-sm)',transition:'box-shadow .25s'}}>
                <h3 style={{fontSize:'inherit'}}>
                  <button className="bta-faq-q" aria-expanded={isOpen} aria-controls={id} onClick={()=>setOpen(isOpen?-1:i)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,padding:'20px 24px',background:'none',border:'none',cursor:'pointer',textAlign:'left',borderRadius:'var(--radius-md)'}}>
                    <span style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:17,color:'var(--ink)'}}>{item.q}</span>
                    <span aria-hidden="true" style={{flexShrink:0,width:32,height:32,borderRadius:'50%',background:isOpen?'var(--sun)':'var(--green-bg)',color:'var(--forest)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:700,transition:'transform .25s var(--ease),background .25s',transform:isOpen?'rotate(45deg)':'none'}}>+</span>
                  </button>
                </h3>
                <div id={id} role="region" hidden={!isOpen} className="bta-faq-a">
                  <p style={{padding:'0 24px 22px',fontSize:16,lineHeight:1.7,color:'var(--ink-soft)'}}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- PIRÁMIDE + TU PRÓXIMO ESCALÓN ---------- */
function CaminoCard({c}){
  return (
    <a href={PAGE(c.slug)} className="bta-lift" style={{display:'block',textDecoration:'none',background:'#fff',borderRadius:'var(--radius-lg)',overflow:'hidden',boxShadow:'var(--shadow-sm)',border:'1px solid var(--line)'}}>
      {c.cover
        ? <img src={c.cover} alt="" loading="lazy" style={{width:'100%',aspectRatio:'16/9',objectFit:'cover',display:'block'}} onError={imgErr('var(--sand)')}/>
        : <div style={{aspectRatio:'16/9',background:'var(--forest)',display:'flex',alignItems:'flex-end',padding:18}}><span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:20,color:'#fff',lineHeight:1.15}}>{c.t}</span></div>}
      <div style={{padding:'16px 18px 20px'}}>
        <div style={{fontSize:13.5,color:'var(--leaf)',fontWeight:700,marginBottom:6}}>{c.eyebrow}{c.stars?' · '+starStr(c.stars):''}</div>
        <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:16.5,color:'var(--ink)',lineHeight:1.3}}>{c.t}</div>
      </div>
    </a>
  );
}

function Camino(){
  let title, intro, list;
  if(C.stars){
    const higher = DATA.filter(d=>d.stars && d.stars>C.stars);
    const nextTier = higher.length ? Math.min(...higher.map(d=>d.stars)) : null;
    list = nextTier ? DATA.filter(d=>d.stars===nextTier).slice(0,3) : DATA.filter(d=>d.stars===C.stars && d.slug!==C.slug).slice(0,3);
    title = nextTier ? 'Tu próximo escalón' : 'Seguí profundizando';
    intro = nextTier ? 'Después de esta capacitación, la Pirámide sugiere seguir por acá.' : 'Otras capacitaciones de tu mismo escalón.';
  } else {
    const pool = DATA.filter(d=>d.slug!==C.slug);
    list = pool.filter(d=>d.cat===C.cat).concat(pool.filter(d=>d.cat!==C.cat && d.cover)).slice(0,3);
    title = 'Seguí tu camino'; intro = 'Otras propuestas de la Academia.';
  }
  return (
    <section className="bg-sand bta-section" id="piramide">
      <div className="bta-container bta-camino" style={{display:'grid',gridTemplateColumns:C.stars?'.8fr 1.6fr':'1fr',gap:48,alignItems:'start'}}>
        {C.stars && <div>
          <H2 style={{fontSize:'clamp(22px,2.6vw,30px)',marginBottom:12}}>Tu lugar en la Pirámide Formativa</H2>
          <p style={{fontSize:15.5,lineHeight:1.6,color:'var(--ink-soft)',marginBottom:24}}>El orden en que sugerimos ir tomando las capacitaciones. Es una guía, no una obligación.</p>
          <ol aria-label="Pirámide Formativa" style={{listStyle:'none',display:'flex',flexDirection:'column',gap:6,alignItems:'center'}}>
            {PIRAMIDE.map((row,i)=>{
              const here = row.s===C.stars;
              return (
                <li key={row.s} aria-current={here?'step':undefined} style={{width:(40+i*15)+'%',background:here?'var(--sun)':'#fff',border:'1px solid '+(here?'var(--sun-deep)':'var(--line)'),borderRadius:'var(--radius-sm)',padding:'9px 10px',textAlign:'center',boxShadow:here?'var(--shadow-md)':'none'}}>
                  <span style={{fontSize:13,fontWeight:800,letterSpacing:'.08em',color:here?'var(--forest)':'var(--sun-deep)'}} aria-label={row.s+' estrellas'}>{starStr(row.s)}</span>
                  {here && <span style={{display:'block',fontSize:12.5,fontWeight:700,color:'var(--forest)',marginTop:2}}>Estás acá</span>}
                </li>
              );
            })}
          </ol>
          <a href={CURSOS+'#piramide'} className="bta-arrow" style={{marginTop:20}}>Ver la Pirámide completa <span aria-hidden="true">→</span></a>
        </div>}
        <div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:16,flexWrap:'wrap',marginBottom:24}}>
            <div>
              <H2 style={{fontSize:'clamp(22px,2.6vw,30px)',marginBottom:6}}>{title}</H2>
              <p style={{fontSize:15.5,color:'var(--ink-soft)'}}>{intro}</p>
            </div>
            <a className="bta-btn bta-btn-outline bta-btn-sm" href={CURSOS}>Ver catálogo completo</a>
          </div>
          <div className="bta-rel" style={{display:'grid',gridTemplateColumns:'repeat('+Math.min(3,list.length)+',1fr)',gap:18}}>
            {list.map(c=><CaminoCard key={c.slug} c={c}/>)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- BARRA FIJA (una línea; se oculta en Inscripción) ---------- */
function StickyBar({onChange}){
  const [show,setShow]=useStateC(false);
  useEffectC(()=>{
    const target=document.getElementById('inscripcion');
    let inView=false;
    const io = target && 'IntersectionObserver' in window ? new IntersectionObserver(([e])=>{ inView=e.isIntersecting; update(); },{threshold:0}) : null;
    function update(){ const v = window.scrollY>640 && !inView; setShow(v); onChange && onChange(v); }
    if(io) io.observe(target);
    window.addEventListener('scroll',update,{passive:true});
    return ()=>{ window.removeEventListener('scroll',update); io && io.disconnect(); };
  },[]);
  return (
    <div aria-hidden={!show} className="bta-stickybar" style={{position:'fixed',left:0,right:0,bottom:0,zIndex:140,background:'var(--forest)',borderTop:'1px solid rgba(255,255,255,.14)',
      paddingBottom:'env(safe-area-inset-bottom, 0px)',transform:show?'translateY(0)':'translateY(110%)',transition:'transform .3s var(--ease)'}}>
      <div className="bta-container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:14,padding:'12px 28px'}}>
        <div style={{minWidth:0,fontFamily:'var(--font-display)',fontWeight:700,color:'#fff',fontSize:15,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{C.t}</div>
        <a className="bta-btn bta-btn-primary bta-btn-sm" href={CTA_HREF} tabIndex={show?0:-1} style={{flexShrink:0}}>{C.checkout?'Inscribirme':(C.ctaShort||'Consultar')}</a>
      </div>
    </div>
  );
}

/* ---------- SIN DATOS ---------- */
function NoEncontrado(){
  return (
    <main className="bg-paper2" style={{minHeight:'70vh',display:'flex',alignItems:'center',paddingTop:110}}>
      <div className="bta-container" style={{maxWidth:640,textAlign:'center',paddingBlock:60}}>
        <h1 style={{fontSize:'clamp(28px,4vw,40px)',marginBottom:14}}>No encontramos esta capacitación</h1>
        <p style={{fontSize:17,lineHeight:1.65,color:'var(--ink-soft)',marginBottom:28}}>Puede que el enlace esté incompleto. Mirá el catálogo completo o escribinos y te ayudamos a encontrarla.</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <a className="bta-btn bta-btn-primary" href={CURSOS}>Ver capacitaciones</a>
          <a className="bta-btn bta-btn-outline" href={CONTACT.whatsapp}>Escribir por WhatsApp</a>
        </div>
      </div>
    </main>
  );
}

function App(){
  useReveal();
  const [bar,setBar] = useStateC(false);
  useEffectC(()=>{ document.title = (C ? C.t : 'Capacitación no encontrada') + ' — Balance Training Academy®'; },[]);
  if(!C) return (<div><Nav active="cursos"/><NoEncontrado/><Footer/></div>);
  return (
    <div>
      <Nav active="cursos"/>
      <Hero/>
      <main>
        <About/>
        <Programa/>
        <Blocks/>
        <Obtener/>
        <ParaQuien/>
        <Andrea/>
        <Inscripcion/>
        <Faq/>
        <Camino/>
      </main>
      <Footer/>
      <WhatsFloat msg={'Hola Andrea, quiero información sobre "'+C.t+'".'} lift={bar}/>
      <StickyBar onChange={setBar}/>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
