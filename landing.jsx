/* ===== Balance Training Academy — Landing (venta) ===== */
const { useState:useStateL, useEffect:useEffectL, useRef:useRefL } = React;
const B = window.BTA;
const { Nav, Footer, WhatsFloat, useReveal, PHOTOS, imgErr, LANDING, CURSO, CONTACT, Horseshoe } = B;

const Check = ({c="var(--sage)",s=22})=>(
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" style={{flexShrink:0}}>
    <circle cx="12" cy="12" r="11" fill={c} opacity=".12"/>
    <path d="M7 12.4l3.2 3.2L17 8.6" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ---------- HERO ---------- */
function Hero(){
  return (
    <header id="top" style={{position:'relative',minHeight:'100vh',display:'flex',alignItems:'center',
      background:'var(--forest)',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0}}>
        <img src={PHOTOS.heroRun} alt="" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 35%'}} onError={imgErr('var(--forest-2)')}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(42,23,8,.92) 0%,rgba(55,32,14,.78) 42%,rgba(55,32,14,.30) 100%)'}}></div>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(42,23,8,.65),transparent 40%)'}}></div>
      </div>
      <div className="bta-container" style={{position:'relative',zIndex:2,paddingTop:120,paddingBottom:70}}>
        <div style={{maxWidth:680}}>
          <p className="bta-eyebrow on-dark reveal">Metodología Balance Training · 35 años de experiencia</p>
          <h1 className="reveal" style={{fontSize:'clamp(40px,6.4vw,76px)',color:'#fff',lineHeight:1.04,marginBottom:24,transitionDelay:'.06s'}}>
            El caballo no se<br/>domina. <span style={{color:'var(--sun-soft)'}}>Se comprende.</span>
          </h1>
          <p className="lead reveal" style={{color:'rgba(246,241,228,.92)',fontSize:'clamp(17px,2.2vw,21px)',maxWidth:560,marginBottom:14,transitionDelay:'.12s'}}>
            Una formación ecuestre ordenada, técnica y profundamente respetuosa. Aprendé a entender la naturaleza del caballo y a construir un vínculo de confianza real.
          </p>
          <p className="reveal" style={{fontFamily:'var(--font-display)',fontWeight:500,fontStyle:'italic',color:'var(--leaf-bright)',fontSize:17,marginBottom:36,transitionDelay:'.16s'}}>
            Amable con el caballo. Exigente con la técnica.
          </p>
          <div className="reveal" style={{display:'flex',gap:14,flexWrap:'wrap',transitionDelay:'.22s'}}>
            <a className="bta-btn bta-btn-primary" href={CURSO+'#inscripcion'}>Ver el curso e inscribirme</a>
            <a className="bta-btn bta-btn-light" href="#metodo">Conocer la metodología</a>
          </div>
          <div className="reveal" style={{display:'flex',gap:26,marginTop:44,flexWrap:'wrap',transitionDelay:'.28s'}}>
            {[['35','años de trayectoria'],['Método','propio y ordenado'],['Online','sincrónico + a tu ritmo']].map(([a,b])=>(
              <div key={a} style={{borderLeft:'2px solid rgba(220,182,126,.5)',paddingLeft:14}}>
                <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:22,color:'#fff',lineHeight:1}}>{a}</div>
                <div style={{fontSize:12.5,color:'rgba(246,241,228,.75)',marginTop:4,maxWidth:120}}>{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{position:'absolute',bottom:26,left:'50%',transform:'translateX(-50%)',zIndex:2,display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
        <span style={{fontSize:11,letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(246,241,228,.6)'}}>Descubrí</span>
        <div className="bta-scrolldot"></div>
      </div>
    </header>
  );
}

/* ---------- PAIN ---------- */
function Pain(){
  const pains = [
    'Sentís que avanzás a ciegas y cometés errores que no sabés cómo resolver.',
    'Probaste mil consejos sueltos de redes que se contradicen y te confunden más.',
    'Te falta un método con orden lógico, paso a paso y según tu nivel.',
    'Echás de menos un mentor que te acompañe de verdad, en el tiempo y en cada situación.',
  ];
  return (
    <section className="bg-paper2 bta-section">
      <div className="bta-container" style={{maxWidth:920}}>
        <p className="bta-eyebrow leaf reveal">¿Te suena esto?</p>
        <h2 className="reveal" style={{fontSize:'clamp(28px,4vw,42px)',marginBottom:14}}>
          Querés a tu caballo, pero <span style={{color:'var(--sun-deep)'}}>algo no termina de encajar</span>.
        </h2>
        <p className="lead reveal" style={{maxWidth:680,marginBottom:40}}>
          La mayoría de los problemas con los caballos no nacen de mala voluntad, sino de la falta de conocimiento y de un camino claro para aprender.
        </p>
        <div className="bta-pain-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          {pains.map((p,i)=>(
            <div key={i} className="reveal" style={{display:'flex',gap:14,background:'#fff',border:'1px solid var(--line)',borderRadius:'var(--radius-md)',padding:'20px 22px',boxShadow:'var(--shadow-sm)',transitionDelay:(i*.06)+'s'}}>
              <span style={{flexShrink:0,width:30,height:30,borderRadius:'50%',background:'rgba(181,97,46,.12)',color:'var(--clay)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontFamily:'var(--font-display)'}}>!</span>
              <p style={{fontSize:15.5,lineHeight:1.6,color:'var(--ink)'}}>{p}</p>
            </div>
          ))}
        </div>
        <p className="reveal" style={{textAlign:'center',marginTop:40,fontFamily:'var(--font-display)',fontWeight:700,fontStyle:'italic',fontSize:'clamp(19px,2.6vw,26px)',color:'var(--leaf-dark)'}}>
          No necesitás más información suelta. Necesitás un método.
        </p>
      </div>
    </section>
  );
}

/* ---------- METODOLOGÍA ---------- */
function Metodo(){
  const pillars = [
    { n:'01', t:'Conocimiento profundo del caballo', d:'Partimos de su naturaleza, su etología y su lenguaje. Entender cómo piensa y siente el caballo es el primer paso para todo lo demás.' },
    { n:'02', t:'Trato compasivo y respetuoso', d:'Una alternativa amable, sin violencia ni atajos. El vínculo y la confianza son la base —no el sometimiento.' },
    { n:'03', t:'Técnica y eficiencia reales', d:'Compasión no es falta de rigor. Un método ordenado, pedagógico y eficiente que produce resultados concretos y medibles.' },
    { n:'04', t:'Desarrollo integral del jinete', d:'No formamos solo mejores jinetes, sino mejores personas: competencias, criterio y valores que trascienden la monta.' },
  ];
  return (
    <section id="metodo" className="bg-forest bta-section grain" style={{position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',right:-120,top:-80,opacity:.06,transform:'rotate(12deg)'}}>
        <Horseshoe size={520} color="#fff" dot="#fff"/>
      </div>
      <div className="bta-container" style={{position:'relative',zIndex:2}}>
        <div style={{maxWidth:720,marginBottom:54}}>
          <p className="bta-eyebrow on-dark reveal">La metodología</p>
          <h2 className="reveal" style={{fontSize:'clamp(28px,4.4vw,46px)',marginBottom:18}}>
            Qué es el <span style={{color:'var(--sun-soft)'}}>Balance Training</span>
          </h2>
          <p className="lead reveal" style={{color:'rgba(246,241,228,.86)',maxWidth:640}}>
            Un método que equilibra lo que casi nunca va junto: el respeto absoluto por el caballo y una técnica exigente y eficaz. Fruto de 35 años de trabajo, observación y enseñanza.
          </p>
        </div>
        <div className="bta-pillar-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:18}}>
          {pillars.map((p,i)=>(
            <div key={p.n} className="reveal bta-pillar" style={{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.12)',borderRadius:'var(--radius-lg)',padding:'28px 24px',transitionDelay:(i*.08)+'s'}}>
              <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:34,color:'var(--leaf-bright)',marginBottom:14,opacity:.9}}>{p.n}</div>
              <h3 style={{color:'#fff',fontSize:18.5,marginBottom:12,lineHeight:1.25}}>{p.t}</h3>
              <p style={{fontSize:14,lineHeight:1.65,color:'rgba(246,241,228,.78)'}}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- IMAGE BREAK ---------- */
function ImageBreak(){
  return (
    <section style={{position:'relative',height:'52vh',minHeight:380,overflow:'hidden',display:'flex',alignItems:'center'}}>
      <img src={PHOTOS.bond} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 30%'}} onError={imgErr('var(--clay)')}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(42,23,8,.78),rgba(42,23,8,.18))'}}></div>
      <div className="bta-container" style={{position:'relative',zIndex:2}}>
        <blockquote className="reveal" style={{maxWidth:620}}>
          <p style={{fontFamily:'var(--font-display)',fontWeight:400,fontStyle:'italic',fontSize:'clamp(24px,3.6vw,40px)',color:'#fff',lineHeight:1.3}}>
            “El bienestar del caballo y de quien lo maneja no es un lujo: es el punto de partida.”
          </p>
          <footer style={{marginTop:20,color:'var(--leaf-bright)',fontWeight:600,letterSpacing:'.04em'}}>— Andrea Pigazzi, creadora del método</footer>
        </blockquote>
      </div>
    </section>
  );
}

/* ---------- PARA QUIÉN ---------- */
function ParaQuien(){
  const who = [
    { t:'Aficionados al caballo', d:'Querés crear un vínculo de confianza, resolver los problemas que tenés y prepararte en todos los aspectos para ser mejor jinete y cuidador.', tag:'Desde cero' },
    { t:'En camino a profesionalizarte', d:'Buscás bases formativas concretas y sólidas, con una guía y mentoría que te acompañe a construir tu camino profesional.', tag:'Formación' },
    { t:'Jinetes profesionales', d:'Necesitás afinar tu parte técnica y tu criterio para diferenciarte y elevar el nivel de tu trabajo con los caballos.', tag:'Perfeccionamiento' },
  ];
  return (
    <section className="bg-sand bta-section">
      <div className="bta-container">
        <div style={{textAlign:'center',maxWidth:680,margin:'0 auto 48px'}}>
          <p className="bta-eyebrow leaf reveal" style={{justifyContent:'center'}}>¿Para quién es?</p>
          <h2 className="reveal" style={{fontSize:'clamp(28px,4vw,42px)'}}>Pensado para cada etapa de tu camino ecuestre</h2>
        </div>
        <div className="bta-who-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:22}}>
          {who.map((w,i)=>(
            <div key={w.t} className="reveal bta-lift" style={{background:'#fff',borderRadius:'var(--radius-lg)',padding:'34px 30px',boxShadow:'var(--shadow-md)',borderTop:'4px solid var(--leaf)',transitionDelay:(i*.08)+'s'}}>
              <span style={{display:'inline-block',fontSize:11.5,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--sun)',background:'rgba(217,174,35,.10)',padding:'5px 12px',borderRadius:'var(--radius-full)',marginBottom:18}}>{w.tag}</span>
              <h3 style={{fontSize:21,marginBottom:12}}>{w.t}</h3>
              <p style={{fontSize:15,lineHeight:1.65,color:'var(--ink-soft)'}}>{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CURSO DESTACADO ---------- */
function CursoDestacado(){
  const incluye = ['Clases online en vivo (sincrónicas)','Acceso a las grabaciones a tu ritmo','Material descargable en PDF','Comunidad privada de alumnos','Certificado de finalización','Acompañamiento de Andrea'];
  return (
    <section id="curso" className="bg-paper bta-section">
      <div className="bta-container">
        <div className="bta-feat" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:0,borderRadius:'var(--radius-xl)',overflow:'hidden',boxShadow:'var(--shadow-lg)',background:'var(--forest)'}}>
          <div style={{position:'relative',minHeight:440}}>
            <img src={PHOTOS.field} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} onError={imgErr('var(--clay)')}/>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(120deg,rgba(42,23,8,.25),rgba(42,23,8,.55))'}}></div>
            <span style={{position:'absolute',top:24,left:24,background:'var(--sun)',color:'#fff',fontFamily:'var(--font-display)',fontWeight:700,fontSize:12.5,letterSpacing:'.08em',textTransform:'uppercase',padding:'8px 16px',borderRadius:'var(--radius-full)'}}>Próximo lanzamiento</span>
          </div>
          <div style={{padding:'48px 46px',color:'#fff'}} className="bta-feat-body">
            <p className="bta-eyebrow on-dark">Curso principal · Cohorte cerrada</p>
            <h2 style={{color:'#fff',fontSize:'clamp(26px,3.4vw,38px)',marginBottom:14,lineHeight:1.1}}>Fundamentos del Balance Training</h2>
            <p style={{fontSize:15.5,lineHeight:1.7,color:'rgba(246,241,228,.85)',marginBottom:24}}>
              El programa que ordena todo lo que necesitás saber para empezar bien: la naturaleza del caballo, el lenguaje, el trabajo desde el suelo y las bases de un vínculo de confianza.
            </p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px 18px',marginBottom:28}}>
              {incluye.map(i=>(
                <div key={i} style={{display:'flex',gap:9,alignItems:'flex-start',fontSize:13.5,color:'rgba(246,241,228,.9)'}}>
                  <Check c="var(--leaf-bright)" s={18}/><span>{i}</span>
                </div>
              ))}
            </div>
            <div style={{display:'flex',alignItems:'flex-end',gap:16,marginBottom:24,flexWrap:'wrap'}}>
              <div>
                <div style={{fontSize:12.5,color:'rgba(246,241,228,.6)',textTransform:'uppercase',letterSpacing:'.08em'}}>Inversión</div>
                <div style={{display:'flex',alignItems:'baseline',gap:8,flexWrap:'wrap'}}>
                  <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:38,color:'#fff',lineHeight:1,whiteSpace:'nowrap'}}>$ 89.000</span>
                  <span style={{fontSize:15,fontWeight:600,color:'var(--leaf-bright)'}}>ARS</span>
                </div>
                <div style={{fontSize:12.5,color:'rgba(246,241,228,.65)',marginTop:7}}>o 3 cuotas de $ 32.000 · MercadoPago</div>
              </div>
            </div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <a className="bta-btn bta-btn-primary" href={CURSO+'#inscripcion'}>Quiero inscribirme</a>
              <a className="bta-btn bta-btn-light" href={CURSO}>Ver el programa completo</a>
            </div>
            <p style={{fontSize:12.5,color:'rgba(246,241,228,.6)',marginTop:18}}>Inicio antes de mediados de julio · Cupos limitados</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CATÁLOGO ---------- */
function Catalogo(){
  const cursos = [
    { t:'Fundamentos del Balance Training', d:'El punto de partida: naturaleza del caballo, lenguaje y bases del vínculo.', lvl:'Inicial', price:'$ 89.000', cover:PHOTOS.field, feat:true },
    { t:'Etología y lenguaje del caballo', d:'Aprendé a leer y comprender la comunicación natural del caballo.', lvl:'Inicial / Intermedio', price:'$ 64.000', cover:PHOTOS.bond },
    { t:'Trabajo desde el suelo (groundwork)', d:'Coordinación, respeto y confianza antes de la monta.', lvl:'Intermedio', price:'$ 72.000', cover:PHOTOS.field2 },
    { t:'Doma respetuosa del joven caballo', d:'Educación del potro paso a paso, sin atajos ni violencia.', lvl:'Avanzado', price:'$ 98.000', cover:PHOTOS.heroRun },
    { t:'Bienestar y manejo integral', d:'Salud, manejo y entorno para un caballo equilibrado y sano.', lvl:'Todos los niveles', price:'$ 58.000', cover:PHOTOS.field },
    { t:'Primeros pasos: vínculo y confianza', d:'Una introducción gratuita a la mirada del Balance Training.', lvl:'Gratis', price:'Gratis', cover:PHOTOS.bond, free:true },
  ];
  return (
    <section id="cursos" className="bg-green bta-section">
      <div className="bta-container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:16,marginBottom:42}}>
          <div>
            <p className="bta-eyebrow leaf reveal">El catálogo</p>
            <h2 className="reveal" style={{fontSize:'clamp(28px,4vw,42px)',maxWidth:520}}>Un camino ordenado, curso por curso</h2>
          </div>
          <p className="lead reveal" style={{maxWidth:380}}>Cada formación construye sobre la anterior. Empezá donde estás hoy y avanzá con criterio.</p>
        </div>
        <div className="bta-cat-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:22}}>
          {cursos.map((c,i)=>(
            <a key={c.t} href={c.feat?CURSO:'#'} className="reveal bta-lift" style={{display:'flex',flexDirection:'column',background:'#fff',borderRadius:'var(--radius-lg)',overflow:'hidden',boxShadow:'var(--shadow-md)',border:'1px solid var(--line)',textDecoration:'none',transitionDelay:(i%3*.07)+'s'}}>
              <div style={{position:'relative',height:170,overflow:'hidden',background:'var(--clay)'}}>
                <img src={c.cover} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} onError={imgErr('var(--clay)')}/>
                <div style={{position:'absolute',inset:0,background:c.free?'linear-gradient(180deg,rgba(122,156,89,.15),rgba(122,156,89,.55))':'linear-gradient(180deg,rgba(42,23,8,.05),rgba(42,23,8,.35))'}}></div>
                <span style={{position:'absolute',top:14,left:14,background:c.free?'var(--sage)':'rgba(255,255,255,.92)',color:c.free?'#fff':'var(--ink)',fontSize:11.5,fontWeight:700,letterSpacing:'.04em',padding:'5px 12px',borderRadius:'var(--radius-full)',fontFamily:'var(--font-display)'}}>{c.lvl}</span>
                {c.feat && <span style={{position:'absolute',top:14,right:14,background:'var(--sun)',color:'#fff',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'.06em',padding:'5px 11px',borderRadius:'var(--radius-full)'}}>Destacado</span>}
              </div>
              <div style={{padding:'22px 22px 24px',display:'flex',flexDirection:'column',flex:1}}>
                <h3 style={{fontSize:18,marginBottom:9,lineHeight:1.25,color:'var(--ink)'}}>{c.t}</h3>
                <p style={{fontSize:13.5,lineHeight:1.6,color:'var(--ink-soft)',flex:1,marginBottom:18}}>{c.d}</p>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:14,borderTop:'1px solid var(--line)'}}>
                  <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:18,color:c.free?'var(--sage-deep)':'var(--ink)'}}>{c.price}{!c.free && <span style={{fontSize:12,fontWeight:600,color:'var(--ink-soft)'}}> ARS</span>}</span>
                  <span className="bta-arrow">{c.free?'Acceder':'Ver más'} →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TRANSFORMACIÓN ---------- */
function Transformacion(){
  const items = ['Bases sólidas y concretas, no consejos sueltos','Nivel técnico y académico profesional','Orden de contenidos según tu nivel real','Acompañamiento y mentoría en el tiempo','Una formación completa e integral','Confianza para resolver problemas por tu cuenta'];
  return (
    <section className="bg-paper2 bta-section">
      <div className="bta-container">
        <div className="bta-trans" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:56,alignItems:'center'}}>
          <div>
            <p className="bta-eyebrow leaf reveal">La transformación</p>
            <h2 className="reveal" style={{fontSize:'clamp(28px,4vw,42px)',marginBottom:18}}>Cómo vas a estar después de formarte con nosotros</h2>
            <p className="lead reveal" style={{marginBottom:26}}>El objetivo no es que sepas más cosas, sino que cambie tu manera de estar con el caballo —y los resultados que conseguís juntos.</p>
            <a className="bta-btn bta-btn-green reveal" href={CURSO+'#inscripcion'}>Empezar mi formación</a>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            {items.map((t,i)=>(
              <div key={i} className="reveal" style={{display:'flex',gap:14,alignItems:'center',background:'#fff',borderRadius:'var(--radius-md)',padding:'16px 20px',boxShadow:'var(--shadow-sm)',border:'1px solid var(--line)',transitionDelay:(i*.05)+'s'}}>
                <Check/><span style={{fontSize:15,color:'var(--ink)',fontWeight:500}}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ANDREA ---------- */
function Andrea(){
  return (
    <section id="andrea" className="bg-paper bta-section">
      <div className="bta-container">
        <div className="bta-andrea" style={{display:'grid',gridTemplateColumns:'.85fr 1.15fr',gap:56,alignItems:'center'}}>
          <div className="reveal" style={{position:'relative'}}>
            <div style={{position:'relative',borderRadius:'var(--radius-xl)',overflow:'hidden',aspectRatio:'4/5',background:'linear-gradient(160deg,var(--leaf-dark),var(--forest))',boxShadow:'var(--shadow-lg)'}}>
              <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',color:'rgba(255,255,255,.6)',gap:14,textAlign:'center',padding:24}}>
                <Horseshoe size={64} color="rgba(255,255,255,.5)" dot="var(--sun-soft)"/>
                <span style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:17,color:'#fff'}}>Andrea Pigazzi</span>
                <span style={{fontSize:12.5,letterSpacing:'.06em',maxWidth:200}}>Espacio para foto de Andrea — subila desde tu carpeta de Drive</span>
              </div>
            </div>
            <div style={{position:'absolute',bottom:-22,right:-18,background:'var(--sun)',color:'#fff',borderRadius:'var(--radius-lg)',padding:'18px 22px',boxShadow:'var(--shadow-md)',textAlign:'center'}}>
              <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:30,lineHeight:1}}>+35</div>
              <div style={{fontSize:11.5,letterSpacing:'.04em',marginTop:3}}>años de experiencia</div>
            </div>
          </div>
          <div>
            <p className="bta-eyebrow leaf reveal">Sobre Andrea</p>
            <h2 className="reveal" style={{fontSize:'clamp(28px,4vw,42px)',marginBottom:20}}>La experiencia detrás del método</h2>
            <p className="lead reveal" style={{marginBottom:18}}>
              Andrea Pigazzi creó la Metodología Balance Training a partir de 35 años de trabajo con caballos: una forma de enseñar que une el conocimiento profundo de su naturaleza con una técnica clara, ordenada y eficaz.
            </p>
            <p className="reveal muted" style={{fontSize:16,lineHeight:1.75,marginBottom:28}}>
              Su sello es la claridad y la pedagogía: explicar lo complejo de manera simple, acompañar a cada alumno según su nivel y demostrar que se puede ser compasivo con el caballo sin resignar un ápice de rigor técnico.
            </p>
            <div className="reveal" style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              {['Metodología propia','Enfoque compasivo','Formación integral','Referencias de años'].map(t=>(
                <span key={t} style={{fontSize:13,fontWeight:600,color:'var(--leaf-dark)',background:'var(--green-bg)',padding:'8px 16px',borderRadius:'var(--radius-full)'}}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIOS ---------- */
function Testimonios(){
  const data = [
    { t:'Por primera vez entendí el "por qué" de cada cosa. Dejé de pelear con mi caballo y empezamos a entendernos de verdad.', n:'María Sol R.', r:'Aficionada · Córdoba' },
    { t:'El orden de los contenidos es lo que más valoro. Sentí que avanzaba con bases, no improvisando como venía haciendo.', n:'Diego A.', r:'En profesionalización' },
    { t:'Técnica seria y, a la vez, un respeto enorme por el animal. Andrea explica con una claridad que no encontré en ningún otro lado.', n:'Lucía F.', r:'Instructora' },
  ];
  const [idx,setIdx] = useStateL(0);
  useEffectL(()=>{ const t=setInterval(()=>setIdx(i=>(i+1)%data.length),6000); return ()=>clearInterval(t); },[]);
  return (
    <section className="bg-forest bta-section" style={{position:'relative',overflow:'hidden'}}>
      <div className="bta-container" style={{maxWidth:880,textAlign:'center',position:'relative',zIndex:2}}>
        <p className="bta-eyebrow on-dark reveal" style={{justifyContent:'center'}}>Lo que dicen los alumnos</p>
        <div style={{fontFamily:'var(--font-display)',fontSize:90,lineHeight:.6,color:'var(--leaf-bright)',opacity:.5,marginBottom:6}}>“</div>
        <div style={{minHeight:170}}>
          {data.map((d,i)=>(
            <div key={i} style={{display:i===idx?'block':'none'}}>
              <p style={{fontFamily:'var(--font-display)',fontWeight:400,fontStyle:'italic',fontSize:'clamp(21px,3vw,30px)',lineHeight:1.4,color:'#fff',marginBottom:26}}>{d.t}</p>
              <div style={{display:'flex',gap:12,alignItems:'center',justifyContent:'center'}}>
                <div style={{width:44,height:44,borderRadius:'50%',background:i===1?'var(--sun)':'var(--leaf)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700,fontFamily:'var(--font-display)',fontSize:15}}>{d.n.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
                <div style={{textAlign:'left'}}>
                  <div style={{fontWeight:700,color:'#fff',fontSize:15}}>{d.n}</div>
                  <div style={{fontSize:12.5,color:'var(--leaf-bright)'}}>{d.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{display:'flex',gap:9,justifyContent:'center',marginTop:30}}>
          {data.map((_,i)=>(
            <button key={i} onClick={()=>setIdx(i)} aria-label={'Testimonio '+(i+1)} style={{width:i===idx?26:9,height:9,borderRadius:'var(--radius-full)',border:'none',cursor:'pointer',background:i===idx?'var(--sun)':'rgba(255,255,255,.3)',transition:'all .3s'}}></button>
          ))}
        </div>
        <p style={{fontSize:12,color:'rgba(246,241,228,.4)',marginTop:24}}>Testimonios de muestra · se reemplazan por los reales</p>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq(){
  const qs = [
    { q:'¿La cursada es en vivo o grabada?', a:'El curso principal tiene clases online en vivo (sincrónicas) y además quedan grabadas, así podés verlas a tu ritmo si no llegás a alguna.' },
    { q:'¿Necesito tener caballo propio o experiencia previa?', a:'No es necesario tener caballo propio. Hay formaciones desde nivel inicial, pensadas para aficionados que recién empiezan, hasta niveles avanzados para profesionales.' },
    { q:'¿Cómo puedo pagar?', a:'Aceptamos MercadoPago (tarjeta y en cuotas) y transferencia bancaria. Los precios están expresados en pesos argentinos (ARS).' },
    { q:'¿Entregan certificado?', a:'Sí. Al completar el curso recibís un certificado de finalización con aprobación de la academia.' },
    { q:'¿Hay cupos limitados?', a:'Sí. El curso principal funciona por cohortes cerradas con fecha de inicio y un número limitado de alumnos, para poder acompañarte de cerca.' },
    { q:'¿Voy a estar acompañado durante la formación?', a:'Ese es el corazón del método. Vas a contar con el acompañamiento de Andrea y una comunidad privada de alumnos para resolver dudas y compartir tu proceso.' },
  ];
  const [open,setOpen] = useStateL(0);
  return (
    <section id="faq" className="bg-paper2 bta-section">
      <div className="bta-container" style={{maxWidth:820}}>
        <div style={{textAlign:'center',marginBottom:44}}>
          <p className="bta-eyebrow leaf reveal" style={{justifyContent:'center'}}>Preguntas frecuentes</p>
          <h2 className="reveal" style={{fontSize:'clamp(28px,4vw,42px)'}}>Todo lo que querés saber</h2>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {qs.map((item,i)=>{
            const isOpen=open===i;
            return (
              <div key={i} className="reveal" style={{background:'#fff',borderRadius:'var(--radius-md)',border:'1px solid var(--line)',boxShadow:isOpen?'var(--shadow-md)':'var(--shadow-sm)',overflow:'hidden',transition:'box-shadow .25s'}}>
                <button onClick={()=>setOpen(isOpen?-1:i)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,padding:'20px 24px',background:'none',border:'none',cursor:'pointer',textAlign:'left'}}>
                  <span style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:16.5,color:'var(--ink)'}}>{item.q}</span>
                  <span style={{flexShrink:0,width:30,height:30,borderRadius:'50%',background:isOpen?'var(--sun)':'var(--green-bg)',color:isOpen?'#fff':'var(--leaf-dark)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:700,transition:'all .25s',transform:isOpen?'rotate(45deg)':'none'}}>+</span>
                </button>
                <div style={{maxHeight:isOpen?260:0,overflow:'hidden',transition:'max-height .3s var(--ease)'}}>
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

/* ---------- CTA FINAL ---------- */
function CtaFinal(){
  return (
    <section style={{position:'relative',overflow:'hidden',padding:'110px 0',textAlign:'center'}}>
      <img src={PHOTOS.field2} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} onError={imgErr('var(--forest)')}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(rgba(42,23,8,.85),rgba(42,23,8,.9))'}}></div>
      <div className="bta-container" style={{position:'relative',zIndex:2,maxWidth:720}}>
        <p className="bta-eyebrow on-dark reveal" style={{justifyContent:'center'}}>Tu próximo paso</p>
        <h2 className="reveal" style={{fontSize:'clamp(30px,4.6vw,52px)',color:'#fff',marginBottom:20,lineHeight:1.08}}>
          Empezá a entender a tu caballo <span style={{color:'var(--sun-soft)'}}>de verdad</span>
        </h2>
        <p className="lead reveal" style={{color:'rgba(246,241,228,.88)',maxWidth:560,margin:'0 auto 36px'}}>
          Sumate a la próxima cohorte de Fundamentos del Balance Training. Cupos limitados, acompañamiento real.
        </p>
        <div className="reveal" style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
          <a className="bta-btn bta-btn-primary" href={CURSO+'#inscripcion'}>Inscribirme ahora</a>
          <a className="bta-btn bta-btn-light" href={CONTACT.whatsapp}>Consultar por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function App(){
  useReveal();
  return (
    <div>
      <Nav active="inicio"/>
      <Hero/>
      <Pain/>
      <Metodo/>
      <ImageBreak/>
      <ParaQuien/>
      <CursoDestacado/>
      <Catalogo/>
      <Transformacion/>
      <Andrea/>
      <Testimonios/>
      <Faq/>
      <CtaFinal/>
      <Footer/>
      <WhatsFloat/>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
