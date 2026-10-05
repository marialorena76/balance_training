/* ============================================================
   Balance Training Academy — Página de Cursos (catálogo real)
   ============================================================ */
const { useState:useStateK } = React;
const { CURSO, CURSOS, LANDING, CONTACT, PHOTOS, imgErr, useReveal, Nav, Footer, WhatsFloat } = window.BTA;

const Stars = ({n})=>(
  <span style={{color:'var(--sun)',fontSize:13.5,letterSpacing:'.12em',whiteSpace:'nowrap'}}>{'★'.repeat(n)}</span>
);

/* ---------- data: cursos-data.jsx (textos de Andrea) ---------- */
const { DATA:BTA_LIST, EXTRA:BTA_EXTRA, PAGE } = window.BTA_DATA;
const FALLBACK = { 'mentorias':PHOTOS.field2, 'asesorias':PHOTOS.bond, 'coaching':PHOTOS.field, 'presenciales':PHOTOS.heroRun, 'estadias':PHOTOS.field };
const CURSOS_DATA = BTA_LIST.map(c=>({ t:c.t, d:c.short, cat:c.cat, stars:c.stars, cover:c.cover||FALLBACK[c.slug], portada:!!c.cover, href:PAGE(c.slug), eyebrow:c.eyebrow }))
  .concat(BTA_EXTRA.map(c=>({ t:c.t, d:c.short, cat:c.cat, stars:c.stars, cover:PHOTOS.field2, href:CONTACT.whatsapp, soon:true })));

const FILTROS = ['Todos','Cursos','Webinars','Formación','Acompañamiento','Presenciales'];

const PIRAMIDE = [
  { s:6, t:['Formación Ecuestre Integral · Nivel 2'] },
  { s:5, t:['Formación Ecuestre Integral 2027 · Nivel 1'] },
  { s:3, t:['Mentorías Personalizadas'] },
  { s:2, t:['Etología, Formas de Aprendizaje y Comunicación','Bases Formativas del Caballo Deportivo','Preparación Psico-Física del Jinete','La Equitación y El Arte del menor esfuerzo'] },
  { s:1, t:['Iniciación a la Metodología Balance Training®'] },
];

/* ---------- HEADER ---------- */
function Header(){
  return (
    <header style={{position:'relative',background:'var(--forest)',overflow:'hidden',paddingTop:74}}>
      <div style={{position:'absolute',inset:0,opacity:.16}}>
        <img src={PHOTOS.field2} alt="" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 40%'}} onError={imgErr('var(--forest-2)')}/>
      </div>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(46,26,10,.72),rgba(46,26,10,.92))'}}></div>
      <div className="bta-container" style={{position:'relative',padding:'72px 28px 84px',textAlign:'center'}}>
        <p className="bta-eyebrow" style={{color:'var(--leaf-bright)',justifyContent:'center'}}>Capacitaciones</p>
        <h1 style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#fff',fontSize:'clamp(32px,5vw,54px)',lineHeight:1.06,maxWidth:820,margin:'0 auto 20px'}}>
          Encontrá la capacitación según tu <span style={{color:'var(--sun-soft)'}}>nivel, experiencia e intereses</span>
        </h1>
        <p style={{color:'var(--cream)',fontSize:'clamp(16px,2vw,19px)',lineHeight:1.65,maxWidth:640,margin:'0 auto',opacity:.92}}>
          Y si tenés alguna duda sobre cuál opción es mejor para vos, nos podés contactar y con mucho gusto vamos a asesorarte.
          ¡Estamos para acompañarte en tu camino de Formación y Profesionalización Ecuestre!
        </p>
        <div style={{display:'flex',gap:38,justifyContent:'center',flexWrap:'wrap',marginTop:38}}>
          {[[String(CURSOS_DATA.length),'propuestas de formación'],['1 a 6','estrellas de nivel'],['35 años','de experiencia detrás']].map(([n,l])=>(
            <div key={l} style={{textAlign:'center'}}>
              <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:30,color:'var(--sun-soft)',lineHeight:1}}>{n}</div>
              <div style={{fontSize:13,color:'var(--cream)',opacity:.8,marginTop:6}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ---------- CATÁLOGO + FILTROS ---------- */
function Catalogo(){
  const [filtro,setFiltro] = useStateK('Todos');
  const lista = filtro==='Todos' ? CURSOS_DATA : CURSOS_DATA.filter(c=>c.cat===filtro);
  return (
    <section id="catalogo" className="bg-paper bta-section" style={{paddingTop:64}}>
      <div className="bta-container">
        <div className="bta-filtros" style={{display:'flex',gap:10,flexWrap:'wrap',justifyContent:'center',marginBottom:46}}>
          {FILTROS.map(f=>{
            const on = f===filtro;
            return (
              <button key={f} onClick={()=>setFiltro(f)} className="bta-chip"
                style={{fontFamily:'var(--font-display)',fontWeight:on?700:600,fontSize:14.5,cursor:'pointer',
                  padding:'10px 20px',borderRadius:'var(--radius-full)',transition:'all .18s var(--ease)',
                  border:'1.5px solid '+(on?'var(--leaf-dark)':'var(--line)'),
                  background:on?'var(--leaf-dark)':'#fff',color:on?'#fff':'var(--ink-soft)'}}>
                {f}
              </button>
            );
          })}
        </div>
        <div className="bta-cat-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
          {lista.map(c=>(
            <a key={c.t} href={c.href} className="bta-lift"
              style={{display:'flex',flexDirection:'column',background:'#fff',borderRadius:'var(--radius-lg)',overflow:'hidden',
                boxShadow:'var(--shadow-md)',border:'1px solid var(--line)',textDecoration:'none'}}>
              <div style={{position:'relative',aspectRatio:'16/9',overflow:'hidden',background:'var(--clay)'}}>
                <img src={c.cover} alt={c.portada?'Portada: '+c.t:''} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} onError={imgErr('var(--clay)')}/>
                {!c.portada && <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(42,23,8,.1),rgba(42,23,8,.55))'}}></div>}
                {!c.portada && <span style={{position:'absolute',left:18,bottom:16,right:18,color:'#fff',fontFamily:'var(--font-display)',fontWeight:800,fontSize:21,lineHeight:1.15,textShadow:'0 2px 12px rgba(0,0,0,.4)'}}>{c.t}</span>}
                {c.soon && <span style={{position:'absolute',top:14,right:14,background:'var(--sun)',color:'var(--forest)',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'.05em',padding:'5px 11px',borderRadius:'var(--radius-full)'}}>Próximamente</span>}
              </div>
              <div style={{padding:'20px 22px 22px',display:'flex',flexDirection:'column',flex:1}}>
                <span style={{alignSelf:'flex-start',background:'var(--green-bg)',color:'var(--leaf-dark)',fontSize:11.5,fontWeight:700,letterSpacing:'.04em',padding:'4px 11px',borderRadius:'var(--radius-full)',fontFamily:'var(--font-display)',marginBottom:12}}>{c.cat}</span>
                <h3 style={{fontSize:18,marginBottom:9,lineHeight:1.28,color:'var(--ink)',fontFamily:'var(--font-display)',fontWeight:700}}>{c.t}</h3>
                <p style={{fontSize:13.5,lineHeight:1.6,color:'var(--ink-soft)',flex:1,marginBottom:16}}>{c.d}</p>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10,paddingTop:14,borderTop:'1px solid var(--line)'}}>
                  {c.stars ? <Stars n={c.stars}/> : <span style={{fontSize:12.5,color:'var(--ink-soft)'}}>{c.cat==='Webinars'?'Encuentro puntual':c.cat==='Presenciales'?'Presencial':'A medida'}</span>}
                  <span className="bta-arrow">{c.soon?'Consultar →':'Ver más →'}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PIRÁMIDE FORMATIVA ---------- */
function Piramide(){
  return (
    <section id="piramide" className="bg-green bta-section">
      <div className="bta-container">
        <div style={{textAlign:'center',maxWidth:720,margin:'0 auto 48px'}}>
          <p className="bta-eyebrow leaf" style={{justifyContent:'center'}}>¿Por dónde empiezo?</p>
          <h2 style={{fontSize:'clamp(26px,3.6vw,40px)',marginBottom:16}}>Pirámide Formativa</h2>
          <p className="lead">
            Este gráfico puede ayudarte a planificar tu estudio y dedicación. Muestra el orden en que sugerimos ir tomando los Cursos
            y los requerimientos de cada uno. Es sólo una sugerencia y no invalida tomarlos en otro orden.
          </p>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:12,maxWidth:880,margin:'0 auto'}}>
          {PIRAMIDE.map((row,i)=>{
            const width = 46 + i*13.5;
            return (
              <div key={row.s} className="bta-pir-row" style={{width:width+'%',maxWidth:'100%',margin:'0 auto',background:'#fff',
                border:'1px solid var(--line)',borderLeft:'4px solid var(--leaf)',borderRadius:'var(--radius-md)',
                padding:'16px 22px',boxShadow:'var(--shadow-sm)',display:'flex',gap:16,alignItems:'center',flexWrap:'wrap'}}>
                <span style={{flexShrink:0,fontFamily:'var(--font-display)',fontWeight:800,fontSize:13,color:'var(--sun)',letterSpacing:'.1em'}}>{'★'.repeat(row.s)}</span>
                <div style={{display:'flex',flexDirection:'column',gap:5,flex:1,minWidth:200}}>
                  {row.t.map(t=><span key={t} style={{fontSize:14.5,lineHeight:1.45,color:'var(--ink)',fontWeight:600}}>{t}</span>)}
                </div>
              </div>
            );
          })}
        </div>
        <p style={{textAlign:'center',marginTop:34,fontSize:14.5,color:'var(--ink-soft)'}}>
          Cualquier duda nos podés escribir a <a href={"mailto:"+CONTACT.email} style={{color:'var(--leaf)',fontWeight:700}}>{CONTACT.email}</a>
        </p>
      </div>
    </section>
  );
}

/* ---------- CTA BAND ---------- */
function CTA(){
  return (
    <section style={{position:'relative',overflow:'hidden',background:'var(--forest-2)'}}>
      <div style={{position:'absolute',inset:0,opacity:.18}}>
        <img src={PHOTOS.heroRun} alt="" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 30%'}} onError={imgErr('var(--forest)')}/>
      </div>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(55,32,14,.82),rgba(46,26,10,.92))'}}></div>
      <div className="bta-container" style={{position:'relative',padding:'80px 28px',textAlign:'center'}}>
        <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#fff',fontSize:'clamp(26px,4vw,44px)',maxWidth:660,margin:'0 auto 18px',lineHeight:1.1}}>
          ¿No sabés cuál opción es mejor para vos?
        </h2>
        <p style={{color:'var(--cream)',fontSize:17,lineHeight:1.65,maxWidth:540,margin:'0 auto 32px',opacity:.92}}>
          Contactanos y con mucho gusto vamos a asesorarte para que elijas la capacitación adecuada a tu nivel y a tus intereses.
        </p>
        <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
          <a className="bta-btn bta-btn-primary" href={CONTACT.whatsapp}>Hablar por WhatsApp</a>
          <a className="bta-btn bta-btn-light" href={"mailto:"+CONTACT.email}>Escribir por mail</a>
        </div>
      </div>
    </section>
  );
}

function App(){
  useReveal();
  return (
    <div>
      <Nav active="cursos"/>
      <Header/>
      <Catalogo/>
      <Piramide/>
      <CTA/>
      <Footer/>
      <WhatsFloat/>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
