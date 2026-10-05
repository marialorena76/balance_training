/* Balance Training Academy — Soy Andrea */
const { Nav, Footer, WhatsFloat, Horseshoe, useReveal, CONTACT, CURSOS, CURSO } = window.BTA;

const HERO = "assets/andrea-hero.jpg";
const PORTRAIT = "assets/andrea-portrait.jpg";

/* ---------- HERO ---------- */
function Hero(){
  return (
    <header style={{position:'relative',minHeight:'92vh',display:'flex',alignItems:'flex-end',background:'var(--forest)',overflow:'hidden'}}>
      <img src={HERO} alt="Andrea Pigazzi con su caballo en las sierras de Córdoba"
        style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'62% 40%'}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(100deg,rgba(46,26,10,.90) 0%,rgba(46,26,10,.72) 34%,rgba(46,26,10,.12) 62%,rgba(46,26,10,.30) 100%)'}}></div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,height:180,background:'linear-gradient(to top,rgba(46,26,10,.85),transparent)'}}></div>
      <div className="bta-container" style={{position:'relative',zIndex:2,paddingTop:150,paddingBottom:76}}>
        <div className="bta-hero-copy" style={{maxWidth:640}}>
          <p className="bta-eyebrow on-dark reveal" style={{marginBottom:14}}>Balance Training Academy</p>
          <h1 className="reveal" style={{fontSize:'clamp(52px,9vw,104px)',color:'#fff',lineHeight:.95,letterSpacing:'-.03em',marginBottom:22}}>
            <span style={{fontWeight:400,display:'block'}}>Soy</span>
            <span style={{fontWeight:800}}>Andrea</span>
          </h1>
          <p className="reveal" style={{fontSize:'clamp(18px,2.2vw,22px)',lineHeight:1.55,color:'var(--cream)',maxWidth:520,marginBottom:26}}>
            Entrenadora de caballos, formadora y coach. Creadora del Método <strong style={{color:'var(--sun-soft)',fontWeight:700}}>Balance Training®</strong>.
          </p>
          <p className="reveal" style={{display:'flex',flexWrap:'wrap',gap:'10px 18px',fontSize:13,fontWeight:700,letterSpacing:'.13em',textTransform:'uppercase',color:'rgba(246,236,219,.72)'}}>
            {['Entrenadora','Formadora','Amazona','Coach ontológico y deportivo'].map((t,i)=>(
              <span key={t} style={{display:'flex',alignItems:'center',gap:'18px'}}>
                {i>0 && <span style={{width:5,height:5,borderRadius:'50%',background:'var(--sun)'}}></span>}{t}
              </span>
            ))}
          </p>
        </div>
      </div>
    </header>
  );
}

/* ---------- ROLES ---------- */
function Roles(){
  const roles = [
    ['Creadora','del Método Balance Training®'],
    ['Directora','de Balance Training Academy'],
    ['Directora y fundadora','de Relinchos, Centro de Entrenamiento y Capacitación'],
  ];
  return (
    <section style={{background:'var(--forest-2)',padding:'40px 0'}}>
      <div className="bta-container">
        <div className="bta-roles" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:36}}>
          {roles.map(([a,b])=>(
            <div key={a} className="reveal" style={{display:'flex',gap:14,alignItems:'flex-start'}}>
              <span style={{width:8,height:8,borderRadius:'50%',background:'var(--sun)',marginTop:8,flexShrink:0}}></span>
              <p style={{lineHeight:1.5}}>
                <span style={{display:'block',fontFamily:'var(--font-display)',fontWeight:800,fontSize:17,color:'#fff'}}>{a}</span>
                <span style={{fontSize:14.5,color:'rgba(246,236,219,.72)'}}>{b}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INTRO ---------- */
function Intro(){
  return (
    <section className="bta-section bg-paper">
      <div className="bta-container">
        <div className="bta-two" style={{display:'grid',gridTemplateColumns:'1.15fr .85fr',gap:64,alignItems:'start'}}>
          <div>
            <p className="bta-eyebrow leaf reveal">Quién soy</p>
            <h2 className="reveal" style={{fontSize:'clamp(30px,4.4vw,46px)',marginBottom:26,maxWidth:640}}>Más de 35 años formando personas y caballos</h2>
            <p className="lead reveal" style={{marginBottom:22,color:'var(--ink)'}}>
              Soy Andrea Pigazzi, entrenadora de caballos, formadora y coach especializada en biomecánica, técnica y perfeccionamiento ecuestre.
            </p>
            <p className="reveal muted" style={{fontSize:16.5,lineHeight:1.8,marginBottom:20}}>
              Hace más de tres décadas fundé <strong style={{color:'var(--leaf-dark)'}}>Relinchos</strong>, un Centro de Capacitaciones Ecuestres ubicado en las sierras de Córdoba, Argentina, dedicado a la difusión de técnicas compasivas de doma, entrenamiento y reeducación de caballos de todas las razas y disciplinas.
            </p>
            <p className="reveal muted" style={{fontSize:16.5,lineHeight:1.8}}>
              Hace más de 25 años imparto cursos, clínicas y capacitaciones en distintos puntos de Argentina y otros países, asesorando además a Centros Ecuestres, Criadores, Escuelas de Equitación y Centros de Equinoterapia.
            </p>
          </div>
          <div className="reveal">
            <img src={PORTRAIT} alt="Andrea Pigazzi" style={{width:'100%',aspectRatio:'4/5',objectFit:'cover',objectPosition:'72% 45%',borderRadius:'var(--radius-xl)',boxShadow:'var(--shadow-lg)'}}/>
            <div className="bta-nums" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginTop:20}}>
              {[['35+','años de trabajo'],['25+','años formando']].map(([n,l])=>(
                <div key={n} style={{background:'var(--green-bg)',borderRadius:'var(--radius-lg)',padding:'20px 18px'}}>
                  <p style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:34,color:'var(--leaf-dark)',lineHeight:1}}>{n}</p>
                  <p style={{fontSize:13.5,color:'var(--ink-soft)',marginTop:6}}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ORIGEN ---------- */
function Origen(){
  return (
    <section className="bg-sand bta-section">
      <div className="bta-container">
        <div style={{maxWidth:820,margin:'0 auto',textAlign:'center'}}>
          <p className="bta-eyebrow leaf reveal" style={{justifyContent:'center'}}>El origen del método</p>
          <h2 className="reveal" style={{fontSize:'clamp(28px,4.2vw,44px)',marginBottom:28}}>Todo empezó con los caballos que habían sufrido</h2>
          <p className="reveal" style={{fontSize:19,lineHeight:1.8,color:'var(--ink)',marginBottom:20}}>
            Durante toda mi vida, mi principal preocupación han sido los caballos que han sufrido abuso, maltrato o experiencias traumáticas.
          </p>
          <p className="reveal muted" style={{fontSize:17,lineHeight:1.8}}>
            Fue justamente esa búsqueda por comprenderlos, ayudarlos y rehabilitarlos lo que me llevó a dedicar gran parte de mi trabajo a ellos. De esa experiencia nació el <strong style={{color:'var(--leaf-dark)'}}>Método Balance Training®</strong>: una metodología de iniciación, entrenamiento y reeducación basada en técnicas de bajo estrés, alineadas a la naturaleza del caballo y a la preservación de su bienestar.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- PILARES ---------- */
function Pilares(){
  const p = [
    ['01','El comportamiento natural del caballo','Partir de cómo es, cómo aprende y cómo se comunica, en lugar de imponerle nuestra lógica.'],
    ['02','La biomecánica aplicada a la equitación','Entender el movimiento del caballo y del jinete para montar sin desgastar el cuerpo de ninguno de los dos.'],
    ['03','El perfeccionamiento integral del jinete-entrenador','Técnica, cuerpo, atención y vínculo: la persona también se forma.'],
  ];
  return (
    <section className="bg-forest bta-section">
      <div className="bta-container">
        <div style={{maxWidth:620,marginBottom:52}}>
          <p className="bta-eyebrow on-dark reveal">La metodología</p>
          <h2 className="reveal" style={{fontSize:'clamp(28px,4.2vw,44px)'}}>Tres pilares fundamentales</h2>
        </div>
        <div className="bta-pil3" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:26}}>
          {p.map(([n,t,d])=>(
            <div key={n} className="reveal bta-pillar" style={{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.12)',borderRadius:'var(--radius-lg)',padding:'34px 30px'}}>
              <p style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:15,letterSpacing:'.1em',color:'var(--sun)',marginBottom:16}}>{n}</p>
              <h3 style={{fontSize:21,marginBottom:14,lineHeight:1.25}}>{t}</h3>
              <p style={{fontSize:15.5,lineHeight:1.72,color:'rgba(246,236,219,.76)'}}>{d}</p>
            </div>
          ))}
        </div>
        <p className="reveal" style={{marginTop:44,fontSize:17.5,lineHeight:1.8,color:'rgba(246,236,219,.86)',maxWidth:860}}>
          Balance Training® integra técnicas de trabajo en libertad, pie a tierra y montado, contemplando la unidad de todos los planos —físico, psíquico, emocional y espiritual—. Propone una forma de monta consciente, orgánica y en plena sincronía con el caballo.
        </p>
      </div>
    </section>
  );
}

/* ---------- FORMACIÓN ---------- */
function Formacion(){
  const cert = [
    ['Preparadora Físico Deportiva',''],
    ['Técnica en Producción Equina',''],
    ['Centered Riding Instructor','Certificada por Centered Riding Organization · USA'],
    ['Tecnificación Ecuestre','Real Escuela Andaluza de Arte Ecuestre, Jerez de la Frontera · España'],
    ['Trauma Informed Horse Trainer','Understand Horses · Reino Unido'],
  ];
  const areas = ['Coaching','Counseling Relacional','Constelaciones Familiares','Biodinámica','Osteopatía','Terapia Craneosacral','Etología','Teorías del Aprendizaje'];
  return (
    <section className="bta-section bg-paper">
      <div className="bta-container">
        <div className="bta-two" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'start'}}>
          <div>
            <p className="bta-eyebrow leaf reveal">Formación</p>
            <h2 className="reveal" style={{fontSize:'clamp(26px,3.4vw,36px)',marginBottom:30}}>Certificaciones</h2>
            <div style={{display:'flex',flexDirection:'column',gap:2}}>
              {cert.map(([t,d])=>(
                <div key={t} className="reveal" style={{display:'flex',gap:16,alignItems:'flex-start',padding:'18px 0',borderBottom:'1px solid var(--line)'}}>
                  <Horseshoe size={22} color="var(--sun)" dot="var(--leaf-dark)"/>
                  <p style={{lineHeight:1.5}}>
                    <span style={{display:'block',fontFamily:'var(--font-display)',fontWeight:700,fontSize:16.5,color:'var(--leaf-dark)'}}>{t}</span>
                    {d && <span style={{fontSize:14,color:'var(--ink-soft)'}}>{d}</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="bta-eyebrow leaf reveal">Áreas integradas</p>
            <h2 className="reveal" style={{fontSize:'clamp(26px,3.4vw,36px)',marginBottom:22}}>Otras disciplinas que sumé al camino</h2>
            <p className="reveal muted" style={{fontSize:16.5,lineHeight:1.8,marginBottom:26}}>
              A lo largo de los años integré diferentes áreas de formación buscando comprender cada vez más profundamente la relación entre humanos y caballos.
            </p>
            <div className="reveal" style={{display:'flex',flexWrap:'wrap',gap:10,marginBottom:32}}>
              {areas.map(a=>(
                <span key={a} style={{background:'var(--green-bg)',color:'var(--leaf-dark)',border:'1px solid var(--line)',borderRadius:'var(--radius-full)',padding:'9px 17px',fontSize:14.5,fontWeight:600}}>{a}</span>
              ))}
            </div>
            <div className="reveal" style={{background:'var(--paper-2)',borderLeft:'3px solid var(--sun)',borderRadius:'0 var(--radius-md) var(--radius-md) 0',padding:'24px 26px'}}>
              <p style={{fontSize:16.5,lineHeight:1.8,color:'var(--ink)'}}>
                Creo profundamente en una enseñanza humanizada, basada en el respeto, la comprensión y el desarrollo integral tanto del caballo como de las personas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CIERRE ---------- */
function Cierre(){
  return (
    <section style={{position:'relative',background:'var(--forest)',overflow:'hidden'}}>
      <img src={HERO} alt="" aria-hidden="true"
        style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'30% 50%',opacity:.22}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(46,26,10,.86),rgba(46,26,10,.94))'}}></div>
      <div className="bta-container" style={{position:'relative',zIndex:2,padding:'110px 28px'}}>
        <div style={{maxWidth:840,margin:'0 auto',textAlign:'center'}}>
          <Horseshoe size={46} color="var(--sun)" dot="var(--sun-soft)"/>
          <p className="reveal" style={{fontFamily:'var(--font-display)',fontSize:'clamp(24px,3.4vw,36px)',lineHeight:1.4,color:'#fff',fontWeight:600,margin:'28px 0 20px'}}>
            Balance Training® es, para mí, mucho más que un método.
          </p>
          <p className="reveal" style={{fontSize:18,lineHeight:1.8,color:'rgba(246,236,219,.82)',marginBottom:34}}>
            Es una forma clara, ordenada y compasiva de relación entre humanos y caballos; un arte, una filosofía de vida y una manera de habitar el vínculo desde el mismo latir.
          </p>
          <p className="reveal" style={{fontFamily:'var(--font-display)',fontStyle:'italic',fontWeight:600,fontSize:22,color:'var(--sun-soft)'}}>Andrea Pigazzi</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function Cta(){
  return (
    <section className="bg-sand" style={{padding:'80px 0'}}>
      <div className="bta-container">
        <div className="bta-cta" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:36,flexWrap:'wrap'}}>
          <div>
            <h2 className="reveal" style={{fontSize:'clamp(26px,3.6vw,38px)',marginBottom:12}}>¿Querés formarte conmigo?</h2>
            <p className="reveal muted" style={{fontSize:17,lineHeight:1.7,maxWidth:520}}>Conocé los cursos y capacitaciones de Balance Training Academy, o escribime y conversemos sobre tu caballo.</p>
          </div>
          <div className="reveal" style={{display:'flex',gap:14,flexWrap:'wrap'}}>
            <a className="bta-btn bta-btn-primary" href={CURSOS}>Ver los cursos</a>
            <a className="bta-btn bta-btn-outline" href={CONTACT.whatsapp}>Escribime por WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function App(){
  useReveal();
  return (
    <React.Fragment>
      <Nav active="andrea"/>
      <Hero/>
      <Roles/>
      <Intro/>
      <Origen/>
      <Pilares/>
      <Formacion/>
      <Cierre/>
      <Cta/>
      <Footer/>
      <WhatsFloat/>
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
