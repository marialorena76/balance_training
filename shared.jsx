/* ============================================================
   Balance Training Academy — shared components → window.BTA
   ============================================================ */
const { useState, useEffect, useRef, useCallback } = React;

/* ---- files / contact ---- */
const LANDING = "index.html";
const CURSOS  = "cursos.html";
const CURSO   = "curso.html";
const ANDREA  = "andrea.html";
const CONTACT = {
  email: "academybalancetraining@gmail.com",
  whatsapp: "https://wa.me/5493548616290",
  whatsappLabel: "+549 3548 616290",
  instagram: "https://instagram.com/balance.horsetraining.academy",
  igLabel: "@balance.horsetraining.academy",
  facebook: "https://facebook.com/balancetrainingacademy",
  web: "www.balancetrainingacademy.com.ar",
};

/* ---- photos (confirmed-loading Unsplash equestrian) ---- */
const U = (id, w=1500) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
const PHOTOS = {
  heroRun: U("1553284965-83fd3e82fa5a", 1900), // white horse running, moody
  bond:    U("1598974357801-cbca100e65d3", 1300), // horse face closeup
  field:   U("1450052590821-8bf91254a353", 1500), // palomino, mountains
  field2:  U("1534773728080-33d31da27ae5", 1400), // palomino in field
};
const imgErr = (bg) => (e) => { e.target.style.display='none'; if(bg) e.target.parentNode.style.background=bg; };

/* ---- reveal on scroll (deterministic; snap fallback for throttled frames) ---- */
function useReveal(){
  useEffect(()=>{
    let raf=0;
    const reveal=(el)=>{
      el.classList.add('in');
      // Frozen/throttled iframes pause CSS transitions at opacity:0. After the
      // transition window, force the resting state so content can't stay hidden.
      setTimeout(()=>{ el.style.transition='none'; el.style.opacity='1'; el.style.transform='none'; }, 1100);
    };
    const check=()=>{
      const vh = window.innerHeight || 800;
      document.querySelectorAll('.reveal:not(.in)').forEach(el=>{
        const r = el.getBoundingClientRect();
        if(r.top < vh*0.92 && r.bottom > 0) reveal(el);
      });
    };
    const onScroll=()=>{ cancelAnimationFrame(raf); raf=requestAnimationFrame(check); };
    check();
    requestAnimationFrame(check);
    setTimeout(check,120);
    setTimeout(check,400);
    // hard safety net: nothing stays hidden regardless of scroll/throttling
    const all=setTimeout(()=>{
      document.querySelectorAll('.reveal:not(.in)').forEach(el=>{
        el.classList.add('in'); el.style.transition='none'; el.style.opacity='1'; el.style.transform='none';
      });
    },2500);
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',onScroll);
    return ()=>{ window.removeEventListener('scroll',onScroll); window.removeEventListener('resize',onScroll); cancelAnimationFrame(raf); clearTimeout(all); };
  },[]);
}

/* ---- brand logo ---- */
function Horseshoe({ size=34, color="var(--leaf-dark)", dot="var(--sun)" }){
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M26 66 A24 25 0 1 1 54 66" stroke={color} strokeWidth="8.5" strokeLinecap="round"/>
      <circle cx="22.5" cy="64" r="3.4" fill={dot}/>
      <circle cx="57.5" cy="64" r="3.4" fill={dot}/>
      <circle cx="17.5" cy="44" r="2.6" fill={color}/>
      <circle cx="62.5" cy="44" r="2.6" fill={color}/>
      <circle cx="24" cy="26" r="2.6" fill={color}/>
      <circle cx="56" cy="26" r="2.6" fill={color}/>
    </svg>
  );
}

function BrandLogo({ variant="light", compact=false, onClick }){
  const src = variant === "dark" ? "assets/logo-cream.png" : "assets/logo-brown.png";
  return (
    <a href={LANDING} onClick={onClick} aria-label="Balance Training Academy, ir al inicio" style={{display:'inline-flex',alignItems:'center',textDecoration:'none'}}>
      <img src={src} alt="Balance Training Academy" style={{height:compact?46:64,width:'auto',display:'block'}}/>
    </a>
  );
}

/* ---- nav ---- */
function Nav({ active="inicio" }){
  const [scrolled,setScrolled] = useState(false);
  const [open,setOpen] = useState(false);
  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>14);
    h(); window.addEventListener('scroll',h);
    return ()=>window.removeEventListener('scroll',h);
  },[]);
  const links = [
    { id:'metodo',  label:'Metodología', href:LANDING+'#metodo' },
    { id:'cursos',  label:'Cursos',      href:CURSOS },
    { id:'curso',   label:'Formación 2027', href:'curso-formacion-integral.html' },
    { id:'piramide',label:'Pirámide',    href:CURSOS+'#piramide' },
    { id:'andrea',  label:'Soy Andrea',  href:ANDREA },
    { id:'faq',     label:'Preguntas',   href:LANDING+'#faq' },
  ];
  const solid = scrolled || open;
  return (
    <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:200,
      background: solid ? 'rgba(46,26,10,.96)' : 'transparent',
      backdropFilter: solid ? 'blur(10px)' : 'none',
      borderBottom: solid ? '1px solid rgba(255,255,255,.10)' : '1px solid transparent',
      transition:'background .3s,border-color .3s'}}>
      <div className="bta-container" style={{display:'flex',alignItems:'center',height:74,justifyContent:'space-between'}}>
        <BrandLogo variant="dark" compact/>
        <div className="bta-nav-links" style={{display:'flex',alignItems:'center',gap:20}}>
          {links.map(l=>(
            <a key={l.id} href={l.href} style={{fontFamily:'var(--font-display)',fontWeight: active===l.id?700:500,
              fontSize:15,color: active===l.id?'var(--leaf-bright)':'rgba(246,241,228,.86)',textDecoration:'none',whiteSpace:'nowrap',
              paddingBottom:3,borderBottom: active===l.id?'2px solid var(--leaf-bright)':'2px solid transparent',
              transition:'color .15s'}}
              onMouseEnter={e=>e.target.style.color='#fff'}
              onMouseLeave={e=>e.target.style.color=active===l.id?'var(--leaf-bright)':'rgba(246,241,228,.86)'}>
              {l.label}
            </a>
          ))}
          <a className="bta-btn bta-btn-primary bta-btn-sm" href={CURSOS+'#catalogo'}>Inscribirme</a>
        </div>
        <button className="bta-burger" onClick={()=>setOpen(o=>!o)} aria-label="Menú"
          style={{display:'none',background:'none',border:'none',cursor:'pointer',padding:8}}>
          <span style={{display:'block',width:24,height:2,background:'#fff',borderRadius:2,marginBottom:6,transition:'.2s',transform:open?'translateY(8px) rotate(45deg)':'none'}}></span>
          <span style={{display:'block',width:24,height:2,background:'#fff',borderRadius:2,marginBottom:6,opacity:open?0:1,transition:'.2s'}}></span>
          <span style={{display:'block',width:24,height:2,background:'#fff',borderRadius:2,transition:'.2s',transform:open?'translateY(-8px) rotate(-45deg)':'none'}}></span>
        </button>
      </div>
      {/* mobile drawer */}
      <div className="bta-mobile-menu" style={{display:open?'block':'none',background:'rgba(46,26,10,.98)',borderTop:'1px solid rgba(255,255,255,.10)',padding:'10px 0 22px'}}>
        {links.map(l=>(
          <a key={l.id} href={l.href} onClick={()=>setOpen(false)}
            style={{display:'block',padding:'13px 28px',color:'rgba(246,241,228,.92)',textDecoration:'none',
            fontFamily:'var(--font-display)',fontWeight:600,fontSize:16}}>{l.label}</a>
        ))}
        <div style={{padding:'12px 28px 0'}}>
          <a className="bta-btn bta-btn-primary" href={CURSOS+'#catalogo'} style={{width:'100%'}} onClick={()=>setOpen(false)}>Inscribirme</a>
        </div>
      </div>
    </nav>
  );
}

/* ---- footer ---- */
function Ig({c="#DCB67E",s=18}){return(<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke={c} strokeWidth="1.8"/><circle cx="12" cy="12" r="4" stroke={c} strokeWidth="1.8"/><circle cx="17.4" cy="6.6" r="1.2" fill={c}/></svg>);}
function Fb({c="#DCB67E",s=18}){return(<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M14 8.5h2.2V5.2H14c-2 0-3.4 1.4-3.4 3.5v1.9H8.4v3.2h2.2V21h3.3v-7.2h2.3l.5-3.2h-2.8V9c0-.4.3-.5.6-.5z" fill={c}/></svg>);}
function Wa({c="#DCB67E",s=18}){return(<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" stroke={c} strokeWidth="1.7"/><path d="M9 8.5c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.6 1.4c.1.2 0 .4-.1.5l-.4.5c-.1.1-.2.3-.1.5.3.6 1.1 1.6 2.1 2 .2.1.4.1.5 0l.5-.5c.1-.2.3-.2.5-.1l1.3.7c.2.1.3.3.3.5 0 .6-.5 1.2-1 1.3-.5.1-1.1.3-3-.6s-3-2.9-3.1-3.1c-.1-.2-.6-1-.6-1.8s.3-1.2.5-1.5z" fill={c}/></svg>);}

function Footer(){
  return (
    <footer style={{background:'var(--forest)',color:'rgba(246,241,228,.7)',padding:'72px 0 32px'}}>
      <div className="bta-container">
        <div className="bta-foot-grid" style={{display:'grid',gridTemplateColumns:'1.6fr 1fr 1fr',gap:48,marginBottom:48}}>
          <div>
            <BrandLogo variant="dark"/>
            <p style={{fontSize:14.5,lineHeight:1.75,marginTop:20,maxWidth:340}}>
              35 años acompañando la Formación y Profesionalización Ecuestre, por el Bienestar del Caballo y el Desarrollo integral de las personas.
            </p>
            <div style={{display:'flex',gap:14,marginTop:22}}>
              <a href={CONTACT.instagram} aria-label="Instagram" style={{width:40,height:40,borderRadius:'50%',border:'1px solid rgba(255,255,255,.2)',display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'none'}}><Ig/></a>
              <a href={CONTACT.facebook} aria-label="Facebook" style={{width:40,height:40,borderRadius:'50%',border:'1px solid rgba(255,255,255,.2)',display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'none'}}><Fb/></a>
              <a href={CONTACT.whatsapp} aria-label="WhatsApp" style={{width:40,height:40,borderRadius:'50%',border:'1px solid rgba(255,255,255,.2)',display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'none'}}><Wa/></a>
            </div>
          </div>
          <div>
            <p style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#fff',marginBottom:16,fontSize:15}}>Navegación</p>
            {[['Metodología',LANDING+'#metodo'],['Cursos',CURSOS],['Formación 2027','curso-formacion-integral.html'],['Pirámide formativa',CURSOS+'#piramide'],['Soy Andrea',ANDREA]].map(([t,h])=>(
              <a key={t} href={h} style={{display:'block',fontSize:14,marginBottom:11,color:'rgba(246,241,228,.7)',textDecoration:'none'}}>{t}</a>
            ))}
          </div>
          <div>
            <p style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#fff',marginBottom:16,fontSize:15}}>Contacto</p>
            <a href={CONTACT.whatsapp} style={{display:'flex',gap:9,alignItems:'center',fontSize:14,marginBottom:11,color:'rgba(246,241,228,.7)',textDecoration:'none'}}><Wa s={16}/>{CONTACT.whatsappLabel}</a>
            <a href={"mailto:"+CONTACT.email} style={{display:'block',fontSize:14,marginBottom:11,color:'rgba(246,241,228,.7)',textDecoration:'none',wordBreak:'break-all'}}>{CONTACT.email}</a>
            <a href={CONTACT.instagram} style={{display:'block',fontSize:14,color:'rgba(246,241,228,.7)',textDecoration:'none'}}>{CONTACT.igLabel}</a>
          </div>
        </div>
        <div style={{borderTop:'1px solid rgba(255,255,255,.12)',paddingTop:24,display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:10}}>
          <p style={{fontSize:12.5,color:'rgba(246,241,228,.62)'}}>© 2026 Balance Training Academy® · Andrea Pigazzi. Todos los derechos reservados.</p>
          <p style={{fontSize:12.5,color:'rgba(246,241,228,.62)'}}>{CONTACT.web}</p>
        </div>
      </div>
    </footer>
  );
}

/* ---- floating whatsapp ---- */
function WhatsFloat({ msg, lift=false }){
  const href = msg ? CONTACT.whatsapp + '?text=' + encodeURIComponent(msg) : CONTACT.whatsapp;
  return (
    <a href={href} aria-label="Escribinos por WhatsApp" className={'bta-wa'+(lift?' is-lifted':'')} style={{position:'fixed',right:22,zIndex:150,
      width:56,height:56,borderRadius:'50%',background:'#25D366',display:'flex',alignItems:'center',justifyContent:'center',
      boxShadow:'0 8px 20px -4px rgba(0,0,0,.3)',textDecoration:'none'}}>
      <Wa c="#fff" s={28}/>
    </a>
  );
}

window.BTA = { LANDING, CURSOS, CURSO, ANDREA, CONTACT, PHOTOS, U, imgErr, useReveal, Horseshoe, BrandLogo, Nav, Footer, WhatsFloat, Ig, Fb, Wa };
