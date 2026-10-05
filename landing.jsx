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
          <p className="bta-eyebrow on-dark reveal">Balance Training® Academy</p>
          <h1 className="reveal" style={{fontSize:'clamp(36px,5.6vw,68px)',color:'#fff',lineHeight:1.06,marginBottom:24,transitionDelay:'.06s'}}>
            35 años acompañando la <span style={{color:'var(--sun-soft)'}}>Formación y Profesionalización Ecuestre</span>
          </h1>
          <p className="lead reveal" style={{color:'rgba(246,241,228,.92)',fontSize:'clamp(17px,2.2vw,21px)',maxWidth:560,marginBottom:14,transitionDelay:'.12s'}}>
            Por el Bienestar del Caballo y el Desarrollo integral de las personas. Una Academia pensada tanto para aficionados como para profesionales que desean desarrollar una comprensión más consciente, técnica y respetuosa del caballo.
          </p>
          <p className="reveal" style={{fontFamily:'var(--font-display)',fontWeight:500,fontStyle:'italic',color:'var(--leaf-bright)',fontSize:17,marginBottom:36,transitionDelay:'.16s'}}>
            No necesitás más información desordenada. Necesitás un Método.
          </p>
          <div className="reveal" style={{display:'flex',gap:14,flexWrap:'wrap',transitionDelay:'.22s'}}>
            <a className="bta-btn bta-btn-primary" href={B.CURSOS}>Ver las capacitaciones</a>
            <a className="bta-btn bta-btn-light" href="#metodo">Conocer la metodología</a>
          </div>
          <div className="reveal" style={{display:'flex',gap:26,marginTop:44,flexWrap:'wrap',transitionDelay:'.28s'}}>
            {[['35','años de trayectoria'],['Método','propio y ordenado'],['Online','en vivo + a tu ritmo']].map(([a,b])=>(
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

/* ---------- BIENVENIDA ---------- */
function Bienvenida(){
  const parrafos = [
    'Quiero darte una cálida bienvenida a este espacio que nació después de más de 35 años de experiencia, aprendizaje, enseñanza y trabajo cotidiano junto a los caballos.',
    'A lo largo de todos estos años fui comprendiendo la necesidad de crear una formación verdaderamente integral, clara y ordenada. Un espacio donde las personas pudieran aprender de manera profunda, metódica y acompañada, pero también accesible y posible de integrar en la práctica real.',
    'Así nació Balance Training Academy®. Nuestro enfoque se basa en el Método Balance Training®, una metodología orientada al bienestar del caballo, al desarrollo técnico y al crecimiento integral de las personas.',
    'Creo profundamente que formar personas de caballos no consiste solamente en enseñar técnica, sino también en transmitir valores, como la sensibilidad, la compasión, la templanza y una manera más consciente de relacionarnos con ellos.',
    'Por eso, cada formación, mentoría y capacitación dentro de la Academia busca acompañar a los alumnos de manera cercana, progresiva y ordenada, brindando herramientas reales para crecer con bases sólidas.',
    'Mi deseo es que este espacio sea no solo un lugar de aprendizaje, sino también de inspiración, crecimiento y transformación. Gracias por estar aquí y por elegir ser parte de este camino.',
  ];
  return (
    <section className="bg-paper bta-section">
      <div className="bta-container bta-bienv" style={{display:'grid',gridTemplateColumns:'.8fr 1.2fr',gap:56,alignItems:'start'}}>
        <div className="reveal" style={{position:'relative'}}>
          <div style={{borderRadius:'var(--radius-xl)',overflow:'hidden',aspectRatio:'4/5',boxShadow:'var(--shadow-lg)',background:'var(--clay)'}}>
            <img src={PHOTOS.bond} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} onError={imgErr('var(--clay)')}/>
          </div>
        </div>
        <div>
          <p className="bta-eyebrow leaf reveal">Bienvenida</p>
          <h2 className="reveal" style={{fontSize:'clamp(26px,3.8vw,40px)',marginBottom:22}}>
            Así nació <span style={{color:'var(--leaf)'}}>Balance Training Academy®</span>
          </h2>
          {parrafos.map((p,i)=>(
            <p key={i} className="reveal" style={{fontSize:i===0?17:15.5,lineHeight:1.8,color:i===0?'var(--ink)':'var(--ink-soft)',marginBottom:16,transitionDelay:(i*.05)+'s'}}>{p}</p>
          ))}
          <div className="reveal" style={{marginTop:26,paddingTop:22,borderTop:'1px solid var(--line)'}}>
            <p style={{fontFamily:'var(--font-display)',fontStyle:'italic',fontSize:16,color:'var(--ink-soft)',marginBottom:8}}>Con cariño,</p>
            <p style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:21,color:'var(--leaf-dark)',lineHeight:1.2}}>Andrea Pigazzi</p>
            <p style={{fontSize:13.5,color:'var(--ink-soft)',marginTop:5}}>Directora de Balance Training Academy® · Creadora del Método Balance Training®</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PAIN ---------- */
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
      <div className="bta-container" style={{maxWidth:920}}>
        <p className="bta-eyebrow leaf reveal">Puede que algo de esto te esté pasando…</p>
        <h2 className="reveal" style={{fontSize:'clamp(28px,4vw,42px)',marginBottom:14}}>
          ¿Querés avanzar en tu formación pero no encontrás una manera <span style={{color:'var(--sun-deep)'}}>integral y realmente efectiva</span>?
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
          No necesitás más información desordenada. ¡Necesitás un Método!
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
    { n:'03', t:'Técnica y eficiencia reales', d:'Resultados concretos y permanentes e incorporación de herramientas importantes para tratar y entrenar todo tipo de caballos y disciplinas.' },
    { n:'04', t:'Desarrollo integral del jinete', d:'Estamos convencidos que formar jinetes y entrenadores de caballos no solo atiende a cuestiones ecuestres, sino a la formación integral en valores y herramientas para la vida.' },
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
            ¿Qué es la Metodología <span style={{color:'var(--sun-soft)'}}>Balance Training®</span>?
          </h2>
          <p className="lead reveal" style={{color:'rgba(246,241,228,.86)',maxWidth:640,marginBottom:16}}>
            Un método para iniciar, entrenar y reeducar caballos respetando su naturaleza y su bienestar en toda circunstancia. Un sistema que busca desarrollar caballos calmos, seguros y estables, construyendo balance y equilibrio en todos los planos: físico, mental y emocional.
          </p>
          <p className="reveal" style={{color:'rgba(246,241,228,.72)',fontSize:16,lineHeight:1.75,maxWidth:640}}>
            Al mismo tiempo, es un modelo de enseñanza enfocado en el acompañamiento y desarrollo integral de las personas, acompañándolas a desarrollar todo su potencial. Te asegura un camino ordenado, armonioso y acompañado, dentro de un Método muy técnico, respetuoso del caballo y ético en cuanto a las normas de Bienestar y las buenas prácticas.
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
          <p style={{fontFamily:'var(--font-display)',fontWeight:400,fontStyle:'italic',fontSize:'clamp(21px,3.2vw,34px)',color:'#fff',lineHeight:1.35}}>
            “El Bienestar y el futuro del Caballo al lado del humano está absolutamente ligado a cuán formadas, experimentadas y compasivas sean las personas que los manejan.”
          </p>
          <footer style={{marginTop:20,color:'var(--leaf-bright)',fontWeight:600,letterSpacing:'.04em'}}>— Andrea Pigazzi, creadora de la Metodología Balance Training®</footer>
        </blockquote>
      </div>
    </section>
  );
}

/* ---------- PARA QUIÉN ---------- */
function ParaQuien(){
  const who = [
    { t:'Quienes se inician en el mundo del caballo', d:'Para todos aquellos que quieran introducirse en el mundo del caballo desde una mirada respetuosa y compasiva.', tag:'Desde cero' },
    { t:'Quienes quieren avanzar en su formación', d:'Para toda persona que quiera iniciarse o avanzar en su formación ecuestre y llevar sus conocimientos y herramientas a otro nivel.', tag:'Formación' },
    { t:'Profesionales que buscan tecnificarse', d:'Para profesionales que buscan tecnificarse y profesionalizarse, afinando su parte técnica y su criterio de trabajo.', tag:'Perfeccionamiento' },
    { t:'Docencia, terapias y recreación', d:'Para profesionales de la docencia, las terapias o la recreación que trabajan con caballos y personas.', tag:'Aplicación profesional' },
  ];
  return (
    <section className="bg-sand bta-section">
      <div className="bta-container">
        <div style={{textAlign:'center',maxWidth:680,margin:'0 auto 48px'}}>
          <p className="bta-eyebrow leaf reveal" style={{justifyContent:'center'}}>¿Para quién es?</p>
          <h2 className="reveal" style={{fontSize:'clamp(28px,4vw,42px)'}}>¿Para quiénes están destinadas estas Formaciones?</h2>
        </div>
        <div className="bta-who-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:22}}>
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

/* ---------- CURSO DESTACADO: Formación Ecuestre Integral 2027 ---------- */
const BD = window.BTA_DATA;
function CursoDestacado(){
  const F = BD.bySlug('formacion-integral');
  return (
    <section id="curso" className="bg-paper bta-section">
      <div className="bta-container">
        <div className="bta-feat" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:0,borderRadius:'var(--radius-xl)',overflow:'hidden',boxShadow:'var(--shadow-lg)',background:'var(--forest)'}}>
          <div style={{position:'relative',minHeight:340,background:'var(--paper)'}}>
            <img src={F.cover} alt={'Portada: '+F.t} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} onError={imgErr('var(--clay)')}/>
          </div>
          <div style={{padding:'48px 46px',color:'#fff'}} className="bta-feat-body">
            <p className="bta-eyebrow on-dark">Programa Superior de Capacitación · ★★★★★</p>
            <h2 style={{color:'#fff',fontSize:'clamp(26px,3.4vw,38px)',marginBottom:14,lineHeight:1.1}}>{F.t}</h2>
            <p style={{fontSize:15.5,lineHeight:1.7,color:'rgba(246,241,228,.85)',marginBottom:24}}>
              La columna vertebral de Balance Training ACADEMY: una formación integral, metodológica y súper personalizada, en tres etapas: online, presencial y mentoring.
            </p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px 18px',marginBottom:28}}>
              {F.specs.map(([k,v])=>(
                <div key={k} style={{display:'flex',gap:9,alignItems:'flex-start',fontSize:13.5,color:'rgba(246,241,228,.9)'}}>
                  <Check c="var(--leaf-bright)" s={18}/><span><strong style={{color:'#fff'}}>{k}:</strong> {v}</span>
                </div>
              ))}
            </div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <a className="bta-btn bta-btn-primary" href={BD.PAGE(F.slug)}>Conocer la Formación</a>
              <a className="bta-btn bta-btn-light" href={B.CURSOS}>Ver todas las capacitaciones</a>
            </div>
            <p style={{fontSize:12.5,color:'rgba(246,241,228,.6)',marginTop:18}}>{F.dateNote} · {CONTACT.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CATÁLOGO ---------- */
function Catalogo(){
  const cursos = ['iniciacion','etologia','arte-menor-esfuerzo','psicofisica','caballo-deportivo','webinar-asiento'].map(BD.bySlug);
  return (
    <section id="cursos" className="bg-green bta-section">
      <div className="bta-container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:16,marginBottom:42}}>
          <div>
            <p className="bta-eyebrow leaf reveal">El catálogo</p>
            <h2 className="reveal" style={{fontSize:'clamp(28px,4vw,42px)',maxWidth:520}}>Capacitaciones según tu nivel, experiencia e intereses</h2>
          </div>
          <p className="lead reveal" style={{maxWidth:380}}>Y si tenés dudas sobre cuál opción es mejor para vos, escribinos y con mucho gusto vamos a asesorarte.</p>
        </div>
        <div className="bta-cat-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:22}}>
          {cursos.map((c,i)=>(
            <a key={c.slug} href={BD.PAGE(c.slug)} className="reveal bta-lift" style={{display:'flex',flexDirection:'column',background:'#fff',borderRadius:'var(--radius-lg)',overflow:'hidden',boxShadow:'var(--shadow-md)',border:'1px solid var(--line)',textDecoration:'none',transitionDelay:(i%3*.07)+'s'}}>
              <div style={{position:'relative',aspectRatio:'16/9',overflow:'hidden',background:'var(--clay)'}}>
                <img src={c.cover} alt={'Portada: '+c.t} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} onError={imgErr('var(--clay)')}/>
              </div>
              <div style={{padding:'20px 22px 24px',display:'flex',flexDirection:'column',flex:1}}>
                <div style={{fontSize:11.5,textTransform:'uppercase',letterSpacing:'.08em',color:'var(--leaf)',fontWeight:700,marginBottom:8}}>{c.eyebrow}</div>
                <h3 style={{fontSize:18,marginBottom:9,lineHeight:1.25,color:'var(--ink)'}}>{c.t}</h3>
                <p style={{fontSize:13.5,lineHeight:1.6,color:'var(--ink-soft)',flex:1,marginBottom:18}}>{c.short}</p>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:14,borderTop:'1px solid var(--line)'}}>
                  {c.stars ? <span style={{color:'var(--sun)',fontSize:14,letterSpacing:'.1em'}}>{'★'.repeat(c.stars)}</span> : <span style={{fontSize:12.5,color:'var(--ink-soft)'}}>Encuentro puntual</span>}
                  <span className="bta-arrow">Ver más →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:40}}>
          <a className="bta-btn bta-btn-green reveal" href={B.CURSOS}>Ver todas las capacitaciones</a>
        </div>
      </div>
    </section>
  );
}
function Transformacion(){
  const items = ['Bases formativas sólidas basadas en experiencia y aporte científico.','Mayores conocimientos teóricos y prácticos.','Mayor capacidad de resolver problemas con tu caballo y los de tus alumnos.','Más y mejores herramientas para Iniciar, Entrenar y Corregir Caballos.','Comprensión de fundamentos de la práctica ecuestre alineada con el Bienestar del caballo.','Tecnificación y perfeccionamiento real de tu trabajo.','Herramientas para tu trabajo sobre ti mismo.','Solvencia, autonomía y vínculos armoniosos con los caballos.'];
  return (
    <section className="bg-paper2 bta-section">
      <div className="bta-container">
        <div className="bta-trans" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:56,alignItems:'center'}}>
          <div>
            <p className="bta-eyebrow leaf reveal">La transformación</p>
            <h2 className="reveal" style={{fontSize:'clamp(28px,4vw,42px)',marginBottom:18}}>¿Qué transformación vas a lograr?</h2>
            <p className="lead reveal" style={{marginBottom:26}}>El objetivo no es que sepas más cosas, sino que cambie tu manera de estar con el caballo —y los resultados que conseguís juntos.</p>
            <a className="bta-btn bta-btn-green reveal" href={B.CURSOS}>Ver las capacitaciones</a>
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
              <img src="assets/andrea-portrait.jpg" alt="Andrea Pigazzi" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'72% 45%'}}/>
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
              Andrea Pigazzi creó la Metodología Balance Training® a partir de 35 años de trabajo con caballos: una forma de enseñar que une el conocimiento profundo de su naturaleza con una técnica clara, ordenada y eficaz.
            </p>
            <p className="reveal muted" style={{fontSize:16,lineHeight:1.75,marginBottom:28}}>
              Su sello es la claridad y la pedagogía: explicar lo complejo de manera simple, acompañar a cada alumno según su nivel y demostrar que se puede ser compasivo con el caballo sin resignar un ápice de rigor técnico.
            </p>
            <div className="reveal" style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:28}}>
              {['Metodología propia','Enfoque compasivo','Formación integral','Referencias de años'].map(t=>(
                <span key={t} style={{fontSize:13,fontWeight:600,color:'var(--leaf-dark)',background:'var(--green-bg)',padding:'8px 16px',borderRadius:'var(--radius-full)'}}>{t}</span>
              ))}
            </div>
            <a className="bta-btn bta-btn-outline reveal" href={window.BTA.ANDREA}>Conocé a Andrea</a>
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
    { q:'¿La cursada es en vivo o grabada?', a:'Según la capacitación, hay clases online en vivo y contenidos que podés ver a tu ritmo. En los cursos en vivo las clases quedan grabadas para que puedas repasarlas.' },
    { q:'¿Necesito tener caballo propio o experiencia previa?', a:'No es necesario tener caballo propio. Hay capacitaciones desde 1 estrella, pensadas para quienes recién se inician, hasta 5 y 6 estrellas para formación profesional.' },
    { q:'¿Qué significan las estrellas de cada curso?', a:'Las estrellas indican el nivel de profundidad y los requerimientos previos sugeridos. La Pirámide Formativa ordena en qué secuencia conviene tomarlos: es una sugerencia y no invalida tomarlos en otro orden.' },
    { q:'¿Cómo puedo pagar?', a:'Escribinos por WhatsApp o por mail a academybalancetraining@gmail.com y te pasamos el valor vigente y las formas de pago disponibles.' },
    { q:'¿Entregan certificado?', a:'Sí. Al completar la capacitación recibís un certificado de la Academia.' },
    { q:'No sé cuál capacitación me conviene, ¿me pueden orientar?', a:'Sí, con mucho gusto. Escribinos contándonos tu nivel, tu experiencia y tus intereses, y te asesoramos para que elijas el camino más adecuado para vos.' },
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
          Estamos para acompañarte en tu camino de <span style={{color:'var(--sun-soft)'}}>Formación y Profesionalización Ecuestre</span>
        </h2>
        <p className="lead reveal" style={{color:'rgba(246,241,228,.88)',maxWidth:560,margin:'0 auto 36px'}}>
          Si tenés alguna duda sobre cuál opción es mejor para vos, contactanos y con mucho gusto vamos a asesorarte.
        </p>
        <div className="reveal" style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
          <a className="bta-btn bta-btn-primary" href={CONTACT.whatsapp}>Escribinos por WhatsApp</a>
          <a className="bta-btn bta-btn-light" href={B.CURSOS}>Ver las capacitaciones</a>
        </div>
        <p className="reveal" style={{fontSize:13.5,color:'rgba(246,241,228,.6)',marginTop:22}}>{CONTACT.email}</p>
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
      <Bienvenida/>
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
