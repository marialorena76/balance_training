/* ============================================================
   Balance Training Academy — Inicio
   Textos: "textos academy.docx" (Andrea Pigazzi). Datos de cursos,
   testimonios, Pirámide y carta: cursos-data.jsx (fuente única).
   ============================================================ */
const { useState:useStateL } = React;
const B = window.BTA;
const { Nav, Footer, WhatsFloat, useReveal, imgErr, CURSOS, ANDREA, CONTACT } = B;
const BD = window.BTA_DATA;
const { DATA, PAGE, PIRAMIDE, TESTIMONIOS, CARTA, bySlug } = BD;
const starStr = (n) => n ? '★'.repeat(n) : '';

const Check = ({c="var(--sage-deep)",s=20})=>(
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{flexShrink:0,marginTop:2}}>
    <circle cx="12" cy="12" r="11" fill={c} opacity=".14"/>
    <path d="M7 12.4l3.2 3.1L17 8.5" stroke={c} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const H2 = ({children, light, style}) => (
  <h2 style={{fontSize:'clamp(28px,3.8vw,42px)',lineHeight:1.12,textWrap:'balance',color:light?'#fff':'var(--ink)',...style}}>{children}</h2>
);

/* ---------- HERO ---------- */
function Hero(){
  return (
    <header className="bta-home-hero" style={{position:'relative',background:'var(--forest)',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0}} aria-hidden="true">
        <img src="assets/andrea-hero.jpg" alt="" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'72% 30%'}} onError={imgErr('var(--forest-2)')}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(42,23,8,.95) 0%,rgba(46,26,10,.84) 44%,rgba(46,26,10,.25) 100%)'}}></div>
      </div>
      <div className="bta-container" style={{position:'relative',zIndex:2,paddingBlock:'150px 96px'}}>
        <div style={{maxWidth:640}}>
          <h1 style={{fontSize:'clamp(32px,5.4vw,64px)',color:'#fff',lineHeight:1.06,marginBottom:22,textWrap:'balance',overflowWrap:'break-word',hyphens:'auto'}}>
            35 años acompañando la <span style={{color:'var(--sun-soft)'}}>Formación y Profesionalización Ecuestre</span>
          </h1>
          <p style={{color:'rgba(246,241,228,.92)',fontSize:'clamp(17px,2vw,20px)',lineHeight:1.65,maxWidth:560,marginBottom:34}}>
            Por el Bienestar del Caballo y el Desarrollo integral de las personas. Una Academia pensada tanto para aficionados como para profesionales.
          </p>
          <div style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:40}}>
            <a className="bta-btn bta-btn-primary" href="#empezar">Encontrá tu punto de partida</a>
            <a className="bta-btn bta-btn-light" href={CURSOS}>Ver capacitaciones</a>
          </div>
          <dl style={{display:'flex',gap:28,flexWrap:'wrap'}}>
            {[['35 años','junto a los caballos'],['Método propio','Balance Training®'],['Relinchos','Cruz Grande, Córdoba']].map(([a,b])=>(
              <div key={a} style={{borderLeft:'1px solid rgba(220,182,126,.5)',paddingLeft:14}}>
                <dt style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:19,color:'#fff',lineHeight:1.2}}>{a}</dt>
                <dd style={{fontSize:13.5,color:'rgba(246,241,228,.8)',marginTop:4}}>{b}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </header>
  );
}

/* ---------- BIENVENIDA (carta resumida + Andrea) ---------- */
function Bienvenida(){
  return (
    <section className="bg-paper bta-section">
      <div className="bta-container bta-bienv" style={{display:'grid',gridTemplateColumns:'.85fr 1.15fr',gap:64,alignItems:'center'}}>
        <img src="assets/andrea-portrait.jpg" alt="Andrea Pigazzi, creadora del Método Balance Training®, junto a su caballo" loading="lazy"
          style={{width:'100%',aspectRatio:'4/5',objectFit:'cover',objectPosition:'74% 40%',borderRadius:'var(--radius-xl)',boxShadow:'var(--shadow-lg)'}} onError={imgErr('var(--clay)')}/>
        <div style={{minWidth:0}}>
          <H2 style={{marginBottom:24}}>Bienvenida a Balance Training Academy®</H2>
          <p style={{fontSize:19,lineHeight:1.7,color:'var(--ink)',fontWeight:500,marginBottom:18}}>{CARTA[0]}</p>
          <p style={{fontSize:17,lineHeight:1.75,color:'var(--ink-soft)',marginBottom:30}}>{CARTA[3]}</p>
          <figure style={{paddingTop:24,borderTop:'1px solid var(--line)',marginBottom:28}}>
            <blockquote style={{fontSize:'clamp(18px,2vw,21px)',lineHeight:1.55,fontStyle:'italic',color:'var(--leaf)',marginBottom:16}}>
              “El Bienestar y el futuro del Caballo al lado del humano está absolutamente ligado a cuán formadas, experimentadas y compasivas sean las personas que los manejan.”
            </blockquote>
            <figcaption>
              <strong style={{display:'block',fontFamily:'var(--font-display)',fontSize:19,color:'var(--ink)'}}>Andrea Pigazzi</strong>
              <span style={{fontSize:14.5,color:'var(--ink-soft)'}}>Directora de Balance Training Academy® · Creadora del Método Balance Training®</span>
            </figcaption>
          </figure>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <a className="bta-btn bta-btn-outline" href={ANDREA+'#carta'}>Leer la carta completa</a>
            <a className="bta-btn bta-btn-outline" href={ANDREA}>Conocé a Andrea</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- DOLORES ---------- */
function Pain(){
  const pains = [
    'Sentís que avanzás a ciegas y cometés errores que no sabés cómo resolver.',
    'Probaste mil consejos sueltos de redes que se contradicen y te confunden más.',
    'Te falta un método con orden lógico, paso a paso y según tu nivel.',
    'Echás de menos un mentor que te acompañe de verdad, en el tiempo y en cada situación.',
    'No encontraste una Metodología afín a tus ideales de cómo vincularnos con el caballo desde el respeto y la compasión.',
    'No encontraste una metodología completa y coherente desde la Iniciación de un potro a la Competencia.',
  ];
  return (
    <section className="bg-paper2 bta-section">
      <div className="bta-container" style={{maxWidth:960}}>
        <H2 style={{marginBottom:12,maxWidth:760}}>¿Querés avanzar en tu formación pero no encontrás una manera integral y realmente efectiva?</H2>
        <p style={{fontSize:18,color:'var(--ink-soft)',marginBottom:34}}>Puede que algo de esto te esté pasando…</p>
        <ul className="bta-pain-grid" style={{listStyle:'none',display:'grid',gridTemplateColumns:'1fr 1fr',columnGap:48}}>
          {pains.map(p=>(
            <li key={p} style={{fontSize:17,lineHeight:1.6,color:'var(--ink)',padding:'18px 0',borderTop:'1px solid var(--line-strong)'}}>{p}</li>
          ))}
        </ul>
        <p style={{marginTop:40,fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(22px,2.8vw,30px)',lineHeight:1.25,color:'var(--leaf)'}}>
          No necesitás más información desordenada. ¡Necesitás un Método!
        </p>
      </div>
    </section>
  );
}

/* ---------- METODOLOGÍA + TRANSFORMACIÓN ---------- */
function Metodo(){
  const pillars = [
    { t:'Conocimiento profundo del caballo', d:'Partimos de su naturaleza, su etología y su lenguaje. Entender cómo piensa y siente el caballo es el primer paso para todo lo demás.' },
    { t:'Trato compasivo y respetuoso', d:'Una alternativa amable, sin violencia ni atajos. El vínculo y la confianza son la base, no el sometimiento.' },
    { t:'Técnica y eficiencia reales', d:'Resultados concretos y permanentes e incorporación de herramientas importantes para tratar y entrenar todo tipo de caballos y disciplinas.' },
    { t:'Desarrollo integral del jinete', d:'Formar jinetes y entrenadores no solo atiende a cuestiones ecuestres, sino a la formación integral en valores y herramientas para la vida.' },
  ];
  const trans = ['Bases formativas sólidas basadas en experiencia y aporte científico.','Mayores conocimientos teóricos y prácticos.','Mayor capacidad de resolver problemas con tu caballo y los de tus alumnos.','Más y mejores herramientas para Iniciar, Entrenar y Corregir Caballos.','Comprensión de fundamentos de la práctica ecuestre alineada con el Bienestar del caballo.','Tecnificación y perfeccionamiento real de tu trabajo.','Herramientas para tu trabajo sobre ti mismo.','Solvencia, autonomía y vínculos armoniosos con los caballos.'];
  return (
    <section id="metodo" className="bg-forest bta-section">
      <div className="bta-container">
        <div style={{maxWidth:760,marginBottom:48}}>
          <H2 light style={{marginBottom:18}}>¿Qué es la Metodología <span style={{color:'var(--sun-soft)'}}>Balance Training®</span>?</H2>
          <p style={{fontSize:18,lineHeight:1.7,color:'rgba(246,241,228,.92)',marginBottom:14}}>
            Un método para iniciar, entrenar y reeducar caballos respetando su naturaleza y su bienestar en toda circunstancia. Un sistema que busca desarrollar caballos calmos, seguros y estables, construyendo balance y equilibrio en todos los planos: físico, mental y emocional.
          </p>
          <p style={{fontSize:16.5,lineHeight:1.75,color:'rgba(246,241,228,.8)'}}>
            Al mismo tiempo, es un modelo de enseñanza enfocado en el acompañamiento y desarrollo integral de las personas: un camino ordenado, armonioso y acompañado, dentro de un Método muy técnico, respetuoso del caballo y ético en cuanto a las normas de Bienestar y las buenas prácticas.
          </p>
        </div>
        <div className="bta-pillar-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'32px 36px',paddingTop:36,borderTop:'1px solid rgba(220,182,126,.3)'}}>
          {pillars.map(p=>(
            <div key={p.t} style={{minWidth:0}}>
              <h3 style={{color:'var(--leaf-bright)',fontSize:19,marginBottom:10,lineHeight:1.25}}>{p.t}</h3>
              <p style={{fontSize:15.5,lineHeight:1.65,color:'rgba(246,241,228,.85)'}}>{p.d}</p>
            </div>
          ))}
        </div>
        <div className="bta-trans" style={{display:'grid',gridTemplateColumns:'.8fr 1.6fr',gap:48,marginTop:64,paddingTop:44,borderTop:'1px solid rgba(220,182,126,.3)'}}>
          <h3 style={{color:'#fff',fontSize:'clamp(24px,2.8vw,32px)',lineHeight:1.15}}>¿Qué transformación vas a lograr?</h3>
          <ul style={{listStyle:'none',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px 32px'}} className="bta-trans-list">
            {trans.map(t=><li key={t} style={{display:'flex',gap:12,alignItems:'flex-start',fontSize:16,lineHeight:1.5,color:'rgba(246,241,228,.92)'}}><Check c="var(--leaf-bright)" s={19}/><span>{t}</span></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- ¿POR DÓNDE EMPIEZO? ---------- */
function Empezar(){
  const ini = bySlug('iniciacion'), fei = bySlug('formacion-integral'), men = bySlug('mentorias');
  const etol = bySlug('etologia'), asi = bySlug('webinar-asiento');
  const perfiles = [
    { t:'Te iniciás en el mundo del caballo', d:'Para quienes quieren introducirse en el mundo del caballo desde una mirada respetuosa y compasiva.',
      go:[[ini.t, PAGE(ini.slug), 'El primer escalón de la Pirámide']] },
    { t:'Querés avanzar en tu formación', d:'Para quienes quieren llevar sus conocimientos y herramientas a otro nivel.',
      go:[['Cursos del escalón ★★', CURSOS+'#piramide', 'Después de la Iniciación']] },
    { t:'Sos profesional y buscás tecnificarte', d:'Para profesionales que buscan tecnificarse y profesionalizarse con bases sólidas.',
      go:[[fei.t, PAGE(fei.slug), 'La columna vertebral de la Academia'],[men.t, PAGE(men.slug), 'Acompañamiento individual']] },
    { t:'Trabajás en docencia, terapias o recreación', d:'Para profesionales de la docencia, las terapias o la recreación con caballos.',
      go:[[etol.t, PAGE(etol.slug), 'Para quienes trabajan con caballos'],[asi.t, PAGE(asi.slug), 'Para instructores y equinoterapeutas']] },
  ];
  return (
    <section id="empezar" className="bg-sand bta-section">
      <div className="bta-container">
        <div style={{maxWidth:720,marginBottom:40}}>
          <H2 style={{marginBottom:14}}>¿Por dónde empiezo?</H2>
          <p style={{fontSize:18,lineHeight:1.65,color:'var(--ink-soft)'}}>Elegí lo que más se parece a tu momento. Y si tenés dudas, escribinos: con mucho gusto te asesoramos.</p>
        </div>
        <div className="bta-empezar" style={{display:'grid',gridTemplateColumns:'1.25fr 1fr',gap:48,alignItems:'start'}}>
          <ul style={{listStyle:'none',display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}} className="bta-who-grid">
            {perfiles.map(p=>(
              <li key={p.t} style={{background:'#fff',borderRadius:'var(--radius-lg)',padding:'26px 24px',boxShadow:'var(--shadow-sm)',display:'flex',flexDirection:'column',minWidth:0}}>
                <h3 style={{fontSize:19,lineHeight:1.25,marginBottom:10,color:'var(--ink)'}}>{p.t}</h3>
                <p style={{fontSize:15,lineHeight:1.6,color:'var(--ink-soft)',marginBottom:18,flex:1}}>{p.d}</p>
                <p style={{fontSize:13.5,fontWeight:700,color:'var(--gold-text)',marginBottom:8}}>Tu punto de partida</p>
                <div style={{display:'flex',flexDirection:'column',gap:10}}>
                  {p.go.map(([t,h,sub])=>(
                    <a key={t} href={h} className="bta-start-link" style={{display:'block',textDecoration:'none',padding:'10px 0',borderTop:'1px solid var(--line)'}}>
                      <span style={{display:'block',fontFamily:'var(--font-display)',fontWeight:700,fontSize:15.5,color:'var(--leaf)',lineHeight:1.3}}>{t} <span aria-hidden="true">→</span></span>
                      <span style={{display:'block',fontSize:13.5,color:'var(--ink-soft)',marginTop:2}}>{sub}</span>
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div style={{minWidth:0}}>
            <h3 style={{fontSize:21,marginBottom:8,color:'var(--ink)'}}>La Pirámide Formativa</h3>
            <p style={{fontSize:15.5,lineHeight:1.6,color:'var(--ink-soft)',marginBottom:20}}>El orden en que sugerimos ir tomando las capacitaciones. Es una sugerencia y no invalida tomarlas en otro orden.</p>
            <ol aria-label="Pirámide Formativa, de arriba hacia abajo" style={{listStyle:'none',display:'flex',flexDirection:'column',gap:7,alignItems:'center'}}>
              {PIRAMIDE.map((row,i)=>{
                const courses = DATA.filter(d=>d.stars===row.s);
                const soon = row.soon !== undefined && courses.length===0;
                return (
                  <li key={row.s} className="bta-pir-row" style={{width:(52+i*(48/(PIRAMIDE.length-1)))+'%',minWidth:0,background:soon?'transparent':'#fff',
                    border:soon?'1px dashed var(--line-strong)':'1px solid var(--line)',borderRadius:'var(--radius-md)',padding:'10px 14px',
                    display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}>
                    <span className="bta-sr">Nivel {row.s} {row.s===1?'estrella':'estrellas'}{soon?', próximamente':''}.</span>
                    <span aria-hidden="true" style={{flexShrink:0,minWidth:78,fontSize:13.5,fontWeight:800,letterSpacing:'.08em',color:'var(--gold-text)'}}>{starStr(row.s)}</span>
                    <span style={{flex:1,minWidth:140,display:'flex',flexWrap:'wrap',gap:'3px 12px',fontSize:14,lineHeight:1.4}}>
                      {soon
                        ? <span style={{color:'var(--ink-soft)',fontStyle:'italic'}}>{(row.soon.length?row.soon.join(' · ')+' · ':'')}Próximamente</span>
                        : courses.map(c=><a key={c.slug} href={PAGE(c.slug)} style={{color:'var(--ink)',fontWeight:600}}>{c.t}</a>)}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FORMACIÓN DESTACADA ---------- */
function CursoDestacado(){
  const F = bySlug('formacion-integral');
  return (
    <section className="bg-paper bta-section">
      <div className="bta-container">
        <div className="bta-feat" style={{display:'grid',gridTemplateColumns:'1.05fr 1fr',borderRadius:'var(--radius-xl)',overflow:'hidden',boxShadow:'var(--shadow-lg)',background:'var(--forest)',alignItems:'center'}}>
          <div style={{padding:28}}>
            <img src={F.cover} alt={'Portada: '+F.t} loading="lazy" style={{width:'100%',aspectRatio:'16/9',objectFit:'contain',display:'block',borderRadius:'var(--radius-md)'}} onError={imgErr('var(--clay)')}/>
          </div>
          <div style={{padding:'44px 44px 44px 16px',color:'#fff',minWidth:0}} className="bta-feat-body">
            <p style={{fontSize:14.5,fontWeight:700,color:'var(--leaf-bright)',marginBottom:10}}>{F.eyebrow} · <span aria-label="5 estrellas">★★★★★</span></p>
            <H2 light style={{fontSize:'clamp(26px,3.2vw,36px)',marginBottom:14}}>{F.t}</H2>
            <p style={{fontSize:16.5,lineHeight:1.7,color:'rgba(246,241,228,.9)',marginBottom:22}}>
              La columna vertebral de Balance Training ACADEMY: una formación integral, metodológica y súper personalizada, en tres etapas.
            </p>
            <dl style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:'8px 18px',marginBottom:28,fontSize:15}}>
              {F.specs.map(([k,v])=>(
                <React.Fragment key={k}>
                  <dt style={{color:'var(--leaf-bright)',fontWeight:700}}>{k}</dt>
                  <dd style={{color:'rgba(246,241,228,.92)'}}>{v}</dd>
                </React.Fragment>
              ))}
            </dl>
            <a className="bta-btn bta-btn-primary" href={PAGE(F.slug)}>Conocer la Formación</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CATÁLOGO ---------- */
function Catalogo(){
  const cursos = ['iniciacion','etologia','arte-menor-esfuerzo','caballo-deportivo','mentorias','estadias'].map(bySlug);
  return (
    <section id="cursos" className="bg-paper2 bta-section">
      <div className="bta-container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:16,marginBottom:36}}>
          <H2 style={{maxWidth:560}}>Capacitaciones según tu nivel, experiencia e intereses</H2>
          <a className="bta-btn bta-btn-outline bta-btn-sm" href={CURSOS}>Ver las {DATA.length} propuestas</a>
        </div>
        <ul className="bta-cat-grid" style={{listStyle:'none',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:22}}>
          {cursos.map(c=>(
            <li key={c.slug} style={{minWidth:0}}>
              <a href={PAGE(c.slug)} className="bta-lift" style={{height:'100%',display:'flex',flexDirection:'column',background:'#fff',borderRadius:'var(--radius-lg)',overflow:'hidden',boxShadow:'var(--shadow-md)',textDecoration:'none'}}>
                {c.cover
                  ? <img src={c.cover} alt="" loading="lazy" style={{width:'100%',aspectRatio:'16/9',objectFit:'cover',display:'block'}} onError={imgErr('var(--clay)')}/>
                  : <div style={{aspectRatio:'16/9',background:'var(--forest)',display:'flex',alignItems:'flex-end',padding:'18px 20px'}}>
                      <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:22,lineHeight:1.15,color:'var(--leaf-bright)'}}>{c.cat==='Presenciales'?'Presencial en Relinchos':'Acompañamiento personalizado'}</span>
                    </div>}
                <div style={{padding:'18px 20px 22px',display:'flex',flexDirection:'column',flex:1}}>
                  <h3 style={{fontSize:18,marginBottom:8,lineHeight:1.28,color:'var(--ink)'}}>{c.t}</h3>
                  <p style={{fontSize:15,lineHeight:1.6,color:'var(--ink-soft)',flex:1,marginBottom:16}}>{c.short}</p>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10,paddingTop:12,borderTop:'1px solid var(--line)',fontSize:14}}>
                    <span style={{color:'var(--gold-text)',fontWeight:700}}>{c.stars ? <><span aria-hidden="true">{starStr(c.stars)}</span><span className="bta-sr">{c.stars} estrellas</span> · {c.stars===1?'Primer escalón':'Nivel de la Pirámide'}</> : c.eyebrow}</span>
                    <span className="bta-arrow">Ver más <span aria-hidden="true">→</span></span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIOS (fijos, reales) ---------- */
function Testimonios(){
  return (
    <section className="bg-forest bta-section">
      <div className="bta-container">
        <H2 light style={{marginBottom:36}}>Lo que dicen los alumnos</H2>
        <ul className="bta-testi" style={{listStyle:'none',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:22}}>
          {TESTIMONIOS.map(d=>(
            <li key={d.n} style={{minWidth:0}}>
              <figure style={{height:'100%',display:'flex',flexDirection:'column',background:'rgba(246,241,228,.06)',borderRadius:'var(--radius-lg)',padding:'30px 28px'}}>
                <span aria-hidden="true" style={{display:'block',fontFamily:'Georgia, serif',fontSize:56,lineHeight:.6,color:'var(--sun)',marginBottom:14}}>“</span>
                <blockquote style={{fontSize:18,lineHeight:1.6,fontStyle:'italic',color:'#fff',flex:1,marginBottom:22}}>{d.t}</blockquote>
                <figcaption style={{fontSize:14.5}}>
                  <strong style={{display:'block',color:'var(--leaf-bright)'}}>{d.n}</strong>
                  <span style={{color:'rgba(246,241,228,.8)'}}>{d.r}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- FAQ (solo lo que Andrea confirmó) ---------- */
function Faq(){
  const qs = [
    { q:'No sé cuál capacitación me conviene, ¿me pueden orientar?', a:'Sí, con mucho gusto. Escribinos contándonos tu nivel, tu experiencia y tus intereses, y te asesoramos para que elijas el camino más adecuado para vos.' },
    { q:'¿Qué significan las estrellas de cada curso?', a:'Indican el escalón de cada capacitación dentro de la Pirámide Formativa: el orden en que sugerimos ir tomándolas y sus requerimientos previos. Es una sugerencia y no invalida tomarlas en otro orden.' },
    { q:'¿Las clases son en vivo o grabadas?', a:'Depende de cada capacitación. En cada página encontrás su modalidad, y si tenés dudas escribinos y te contamos cómo es el acceso.' },
    { q:'¿Necesito tener caballo propio?', a:'Depende de la capacitación: cada una detalla sus requisitos. Por ejemplo, las Mentorías requieren contar con un caballo con el cual desarrollar tus prácticas.' },
    { q:'¿Entregan certificado?', a:'La Formación Ecuestre Integral entrega certificado a quienes completan sus tres etapas y el trabajo final. Para las demás capacitaciones, consultanos.' },
    { q:'¿Cómo puedo pagar?', a:'Escribinos por WhatsApp o por mail a '+CONTACT.email+' y te pasamos el valor vigente y las formas de pago disponibles.' },
  ];
  const [open,setOpen] = useStateL(0);
  return (
    <section id="faq" className="bg-paper bta-section">
      <div className="bta-container" style={{maxWidth:800}}>
        <H2 style={{marginBottom:30,textAlign:'center'}}>Preguntas frecuentes</H2>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {qs.map((item,i)=>{
            const isOpen=open===i, id='hfaq-'+i;
            return (
              <div key={i} style={{background:'#fff',borderRadius:'var(--radius-md)',border:'1px solid var(--line)',boxShadow:isOpen?'var(--shadow-md)':'var(--shadow-sm)',transition:'box-shadow .25s'}}>
                <h3 style={{fontSize:'inherit'}}>
                  <button className="bta-faq-q" aria-expanded={isOpen} aria-controls={id} onClick={()=>setOpen(isOpen?-1:i)} style={{width:'100%',minHeight:56,display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,padding:'18px 24px',background:'none',border:'none',cursor:'pointer',textAlign:'left',borderRadius:'var(--radius-md)'}}>
                    <span style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:17,color:'var(--ink)'}}>{item.q}</span>
                    <span aria-hidden="true" style={{flexShrink:0,width:32,height:32,borderRadius:'50%',background:isOpen?'var(--sun)':'var(--green-bg)',color:'var(--forest)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:700,transition:'transform .25s var(--ease),background .25s',transform:isOpen?'rotate(45deg)':'none'}}>+</span>
                  </button>
                </h3>
                <div id={id} role="region" hidden={!isOpen}>
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

/* ---------- CIERRE ---------- */
function CtaFinal(){
  const wa = CONTACT.whatsapp+'?text='+encodeURIComponent('Hola Andrea, quiero que me orienten para elegir una capacitación.');
  return (
    <section className="bg-forest" style={{padding:'96px 0',textAlign:'center',borderTop:'1px solid rgba(220,182,126,.2)'}}>
      <div className="bta-container" style={{maxWidth:720}}>
        <H2 light style={{fontSize:'clamp(28px,4.2vw,46px)',marginBottom:18}}>¡Estamos para acompañarte en tu camino!</H2>
        <p style={{fontSize:18,lineHeight:1.65,color:'rgba(246,241,228,.9)',maxWidth:560,margin:'0 auto 32px'}}>
          Si tenés alguna duda sobre cuál opción es mejor para vos, contactanos y con mucho gusto vamos a asesorarte.
        </p>
        <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
          <a className="bta-btn bta-btn-primary" href={wa}>Escribinos por WhatsApp</a>
          <a className="bta-btn bta-btn-light" href={CURSOS}>Ver capacitaciones</a>
        </div>
        <p style={{fontSize:15,color:'rgba(246,241,228,.8)',marginTop:22}}>
          o por mail a <a href={'mailto:'+CONTACT.email} style={{color:'var(--leaf-bright)',fontWeight:600}}>{CONTACT.email}</a>
        </p>
      </div>
    </section>
  );
}

function App(){
  useReveal();
  return (
    <div style={{background:'var(--forest)'}}>
      <Nav active="inicio" skip/>
      <Hero/>
      <main id="contenido" tabIndex={-1}>
        <Bienvenida/>
        <Pain/>
        <Metodo/>
        <Empezar/>
        <CursoDestacado/>
        <Catalogo/>
        <Testimonios/>
        <Faq/>
        <CtaFinal/>
      </main>
      <Footer/>
      <WhatsFloat msg="Hola Andrea, quiero información sobre la Academia."/>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
