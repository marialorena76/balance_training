/* ============================================================
   Balance Training Academy — Datos de capacitaciones
   Fuente: "landing de Cursos.docx" enviado por Andrea Pigazzi (13/09/2026)
   Cada entrada genera su propia landing (curso-<slug>.html)
   ============================================================ */
(function(){
const P = (s) => "assets/portadas/" + s + ".jpg";

const DATA = [
/* ---------------- CURSOS ONLINE ---------------- */
{
  slug:'iniciacion', enroll:'curso', specs:[['Modalidad','Online'],['Contenido','Introducción + 2 Master Classes'],['Duración','Más de 4 horas de clase']], cat:'Cursos', stars:1, cover:P('iniciacion'), eyebrow:'Curso online',
  t:'Iniciación a la Metodología Balance Training®',
  short:'El primer escalón: los pilares, la filosofía y el modo de trabajo del Método.',
  lead:'Un hermoso curso introductorio a la Metodología Balance Training, donde conoceremos los pilares fundacionales del Método, el modo de trabajo, su filosofía y objetivos.',
  facts:[['Introducción + 2 Master Classes','contenido del curso'],['+4 horas','de clase'],['★','primer escalón de la Pirámide']],
  about:[
    'Abordaremos las principales herramientas en este camino, tanto las herramientas técnicas y físicas como las emocionales y espirituales.',
    'Profundizaremos en los grandes tópicos del trabajo con caballos desde otra mirada, delinearemos los pasos formativos para desarrollar tu camino ecuestre y analizaremos qué condiciones son necesarias.',
    'Y finalmente haremos un recorrido por todos los escalones que Balance Training ACADEMY te propone para tu formación, de una manera organizada, metódica y holística.',
  ],
  programTitle:'Programa',
  program:[
    {t:'Los Grandes Pilares Balance Training'},{t:'El Modo de Trabajo'},{t:'Objetivos de trabajo'},
    {t:'Herramientas para formarte como persona de caballos'},{t:'Perfeccionamiento humano'},
    {t:'Cómo avanzar en el Camino'},{t:'La Pirámide Formativa Balance Training'},
  ],
  gets:[
    'Una comprensión más holística e integral de la construcción del vínculo humano–caballo.',
    'Claridad sobre cuáles son los valores más importantes para construir vínculos sólidos.',
    'Primeros lineamientos de la Equitación para la formación de un caballo de cualquier disciplina.',
    'Comprensión de un marco ético de trabajo.',
    'Pasar a formar parte de nuestra Academia y contar con ayuda en todo momento.',
  ],
  forWho:[
    'Toda persona amante de los caballos que desee conectar con ellos de una manera más sensible y armónica.',
    'Quienes quieran iniciarse en una Metodología que asegura el bienestar del caballo a la vez que establece relaciones sólidas y verdaderas.',
  ],
  forWhoNote:'Recomendamos este curso como primer escalón para todos aquellos que quieran acercarse a nuestra Metodología.',
},
{
  slug:'etologia', enroll:'curso', specs:[['Modalidad','Online'],['Contenido','4 Master Classes'],['Duración','Aprox. 2 horas cada una']], cat:'Cursos', stars:2, cover:P('etologia'), eyebrow:'Curso online',
  t:'Etología, Formas de Aprendizaje y Comunicación',
  short:'El comportamiento del caballo, cómo aprende y cómo comunicarte con él.',
  lead:'Un hermoso curso donde recorreremos el fascinante mundo del comportamiento del caballo, sus formas de aprendizaje y la manera de aplicar este conocimiento al trato y la comunicación con ellos, y también a la doma y el entrenamiento.',
  facts:[['4 Master Classes','de aprox. 2 horas'],['Online','modalidad'],['★★','nivel en la Pirámide']],
  about:['Generando relaciones de respeto, armonía y confianza con la visión del Método Balance Training.'],
  programTitle:'Programa',
  program:[
    {t:'Etología',d:'Orígenes y corrientes de pensamiento.'},
    {t:'Etología del caballo y su comportamiento natural'},
    {t:'Necesidades y motivación'},
    {t:'Formas de aprendizaje'},
    {t:'Implicancia del estrés',d:'Manejo.'},
    {t:'Entrenamiento y educación'},
    {t:'El caballo en la domesticidad'},
    {t:'Aplicación de la etología a la iniciación y entrenamiento de caballos'},
    {t:'Bases de la construcción de relaciones de respeto y confianza'},
    {t:'Bienestar del caballo'},
  ],
  gets:[
    'Conocimiento de la Etología como ciencia: qué estudia y cuáles han sido sus mayores referentes.',
    'Una comprensión profunda del caballo, su lenguaje y cómo interpretarlo.',
    'Distinguir las diferentes formas de aprender que tiene un caballo y cómo trabajar con ellas para un correcto aprendizaje.',
    'Distinguir rápidamente los diferentes comportamientos del caballo, qué los activa y cuál es su significado.',
    'Detectar a tiempo los síntomas de estrés en el caballo, qué los produce y cómo intervenir modificando su contexto y bienestar.',
    'Construir relaciones respetuosas que tengan en cuenta la verdadera naturaleza del caballo.',
    'Normas éticas de trato con caballos que aseguren su bienestar.',
  ],
  forWho:[
    'Toda persona amante de los caballos que desee conectar con ellos de una manera más sensible y armónica.',
    'Quienes quieran iniciarse en una Metodología que asegura el bienestar del caballo a la vez que establece relaciones sólidas y verdaderas.',
    'Toda persona que trabaje con caballos: entrenadores, domadores, instructores, terapeutas, veterinarios, etc.',
  ],
  reqSoft:'Sugerimos haber realizado primero el curso de Iniciación a la Metodología Balance Training, aunque no es excluyente.',
},
{
  slug:'arte-menor-esfuerzo', enroll:'curso', specs:[['Modalidad','Online'],['Contenido','5 Master Classes']], cat:'Cursos', stars:2, cover:P('arte-menor-esfuerzo'), eyebrow:'Curso online',
  t:'La Equitación y El Arte del menor esfuerzo',
  short:'Un camino de mayor liviandad y ligereza con tu caballo, y también en la vida.',
  lead:'Una capacitación diseñada para quienes desean profundizar en un camino de mayor liviandad y ligereza con sus caballos, y también trasladarlo a la vida.',
  facts:[['5 Master Classes','con guías de trabajo'],['Todas las disciplinas','para jinetes de cualquier estilo'],['★★','nivel en la Pirámide']],
  about:['Una capacitación con todo lo que necesitás saber y herramientas valiosas para elevar tu trabajo con caballos a otro nivel. Para jinetes de todas las disciplinas.'],
  programTitle:'Temario',
  program:[
    {t:'Presentación y Temario',d:'La Equitación: principios fundamentales. El esfuerzo.'},
    {t:'Comprensión del Balance',d:'El equilibrio aplicado.'},
    {t:'Construyendo la Comunicación',d:'Y la liviandad.'},
    {t:'El jinete sensible'},
    {t:'Herramientas de Coaching',d:'Para descubrir tu verdadero potencial.'},
  ],
  programLabel:'Módulo',
  gets:[
    'Una comprensión más profunda de la Equitación y una forma muy orgánica de procesarla.',
    'Herramientas para aplicar ya con tu caballo.',
    'Herramientas para ordenar los procesos formativos y las sesiones con tu caballo.',
    'Formación como jinete y perfeccionamiento de la monta.',
    'Conocimiento de la Biomecánica de la Equitación y del Jinete en particular.',
    'Trabajo sobre vos mismo para reconocer tus fortalezas y aplicarlas a la vida.',
    'Muchas herramientas de autoconocimiento.',
  ],
  gainsTitle:'¿Qué te llevás?',
  forWho:[
    'Entrenadores, jinetes, domadores, instructores y aficionados en general que deseen profundizar en su equitación y en su desarrollo personal.',
    'Quienes busquen una conexión profunda con sus caballos, en busca de la liviandad, la ligereza y el camino sin esfuerzo, a través de una equitación más refinada y del trabajo sobre nosotros mismos.',
  ],
  req:['Haber cursado la Iniciación a la Metodología Balance Training, o cualquier otra capacitación online o presencial de nuestra Academia.'],
  includes:['5 Master Classes','Guías de Trabajo','Material descargable','Bibliografía'],
},
{
  slug:'psicofisica', enroll:'cohorte', specs:[['Modalidad','Online sincrónico, en vivo'],['Contenido','4 clases'],['Cupo','Grupos reducidos, una vez al año'],['Fecha','A definir']], cat:'Cursos', stars:2, cover:P('psicofisica'), eyebrow:'Curso online sincrónico',
  t:'Preparación Psico-Física del Jinete',
  short:'Cuerpo, mente y emoción alineados como tu mejor instrumento.',
  lead:'Un curso online sincrónico con fecha a definir. Se dicta una vez al año, en grupos reducidos, para garantizar una experiencia personalizada.',
  facts:[['4 clases','en vivo'],['1 vez al año','grupos reducidos'],['★★','nivel en la Pirámide']],
  aboutTitle:'Objetivo',
  about:[
    'Profundizar en los diferentes conceptos que hacen al perfeccionamiento como jinetes y entrenadores. El objetivo es dar las herramientas teóricas para poder comprender y perfeccionar nuestro accionar con los caballos.',
    'Tanto en el trabajo pie a tierra como en el trabajo montado necesitamos comprender el buen uso de nuestro cuerpo para llevar adelante relaciones armónicas con nuestros caballos. Veremos cómo cuerpo, mente y emoción alineados son nuestro mejor instrumento hacia un trabajo con caballos de manera consciente.',
  ],
  programTitle:'Programa',
  programLabel:'Clase',
  program:[
    {t:'Introducción',d:'Qué comprende ser jinete. Objetivos de este curso. El porqué de la preparación psico-física. La Equitación como deporte. El jinete como atleta. Áreas de desarrollo. Habilidades físicas. Habilidades cognitivas. Inteligencia emocional.'},
    {t:'Biomecánica de la equitación',d:'Biomecánica del jinete y anatomía funcional. Asiento del jinete y las diferentes teorías. Tipos de asiento y su implicancia sobre el caballo. Cómo recibe el caballo nuestras ayudas a través del asiento y cuáles son las posibles causas de interferencia. El contacto y las partes intervinientes. Cómo influye nuestro asiento en el contacto.'},
    {t:'Equilibrio y Balance en la equitación',d:'Reconocimiento de simetrías y asimetrías. Cómo trabajarlas. Terapia corporal y biomecánica aplicada como auxiliares invaluables del perfeccionamiento y formación de jinetes. Otras técnicas. Capacidades motoras. Propiocepción y sentido kinestésico.'},
    {t:'Monta consciente',d:'Psicología del deporte. Cuerpo, mente y emoción alineados. Cómo resonamos. Cómo nos percibe el caballo. El lenguaje corporal y cómo lo expresamos. Cómo resonar en armonía. Un camino de crecimiento personal.'},
  ],
  gets:[
    'Mayor conciencia de tu cuerpo y de los ajustes necesarios para mejorar tu postura.',
    'Bases para construir un asiento sólido y consistente, adaptable a diferentes circunstancias.',
    'Formas prácticas de mejorar tu asiento y postura sobre y debajo del caballo.',
    'Una manera sincronizada de implementar las ayudas.',
    'Una forma armónica de acompañar a tu caballo y consolidar un verdadero binomio.',
    'Una manera orgánica de comprender el arte de guiar y acompañar a un caballo, tanto desde el piso como en la montura.',
  ],
  forWho:['Jinetes, entrenadores, domadores, instructores y toda persona, profesional o aficionada, que quiera mejorar su monta, manejo y técnicas de entrenamiento y llevar su Equitación a otro nivel, tanto para sí misma como para sus alumnos.'],
  dateNote:'Fecha a definir',
},
{
  slug:'caballo-deportivo', enroll:'curso', specs:[['Modalidad','Online'],['Contenido','4 Master Classes grabadas'],['Duración','2 horas cada una']], cat:'Cursos', stars:2, cover:P('caballo-deportivo'), eyebrow:'Curso online',
  t:'Bases Formativas del Caballo Deportivo',
  short:'Cómo se construye un caballo atleta desde sus bases, de forma progresiva y respetuosa.',
  lead:'Formar un caballo deportivo es mucho más que prepararlo físicamente o enseñarle una técnica.',
  facts:[['4 Master Classes','de 2 horas, grabadas'],['Todas las disciplinas','de la iniciación a etapas avanzadas'],['★★','nivel en la Pirámide']],
  about:[
    'Este curso propone comprender cómo se construye un caballo atleta desde sus bases, contemplando su desarrollo físico, mental y emocional, sus procesos de aprendizaje y las diferentes etapas de su entrenamiento.',
    'Integraremos entrenamiento, biomecánica, capacidades motoras, planificación deportiva, relación entrenador–caballo y bienestar, para aprender a desarrollar el potencial de cada caballo de manera progresiva, consciente y respetuosa.',
  ],
  quote:'Comprender las Bases es fundamental para planificar entrenamientos exitosos y acordes al bienestar del caballo. Solo con un plan ordenado, metódico y progresivo lograremos incrementar su potencial a la par de cuidar su salud física y emocional.',
  programTitle:'Programa',
  programLabel:'Clase',
  program:[
    {t:'Comprender al caballo atleta',d:'Qué significa entrenar y cómo se relacionan entrenamiento y aprendizaje. Necesidades del caballo deportivo, etapas de formación, comprensión integral del caballo e introducción a la biomecánica del caballo y del jinete.'},
    {t:'Construir las bases',d:'Principales capacidades motoras. Bases del entrenamiento y su aplicación en diferentes disciplinas. Trabajo en libertad, pie a tierra y montado. Principios biomecánicos aplicados al deporte.'},
    {t:'Organizar la progresión',d:'Escala de Entrenamiento y su aplicación desde las primeras etapas de formación. Biomecánica y cinemática. Diagnóstico, evaluación y organización de las sesiones de trabajo respetando la naturaleza del caballo.'},
    {t:'Planificar para construir',d:'Planificación del entrenamiento, objetivos, ciclos y macrociclos. Relación entrenador–caballo, filosofía y ética deportiva, y bienestar físico, mental y emocional.'},
  ],
  gainsTitle:'¿Qué te aporta?',
  gets:[
    'Herramientas para evaluar, organizar y planificar el entrenamiento.',
    'Comprender qué necesita desarrollar cada caballo.',
    'Tomar mejores decisiones durante su proceso de formación.',
    'Toda la información necesaria para planificar el entrenamiento de la manera más adecuada para tu caballo, con buenas bases técnicas y formativas.',
  ],
  gainsNote:'Antes de buscar rendimiento necesitamos construir las condiciones que lo hacen posible.',
  forWho:[
    'Jinetes, amazonas, entrenadores, instructores, propietarios, estudiantes y profesionales del ámbito ecuestre que quieran comprender y organizar mejor la formación de un caballo deportivo.',
    'Los principios desarrollados pueden aplicarse a diferentes disciplinas ecuestres, desde la formación inicial hasta etapas más avanzadas del entrenamiento.',
  ],
},

/* ---------------- WEBINARS ---------------- */
{
  slug:'webinar-asiento', enroll:'curso', specs:[['Formato','Master Class online'],['Duración','1 h 30 min'],['Acceso','Cuando quieras']], cat:'Webinars', cover:P('webinar-asiento'), eyebrow:'Webinar',
  t:'Mejorar tu asiento es posible',
  short:'Una Master Class de 1 hora y media para una monta más armoniosa y conectada.',
  lead:'Una Master Class de 1 hora y media a la que podés acceder cuando quieras.',
  facts:[['1 h 30 min','Master Class'],['Cuando quieras','acceso a tu ritmo']],
  about:['Mejorar como jinetes es también nuestra responsabilidad para con el caballo. Mejorando nuestro asiento y postura, mejoramos en un gran porcentaje la comunicación con nuestro caballo. Para aplicar las ayudas y comandos de manera efectiva tenemos que tener en claro el uso de nuestro cuerpo.'],
  forWho:[
    'Todo jinete que quiera conseguir una monta más armoniosa y conectada, a través de mejorar su asiento, postura y coordinación de ayudas.',
    'Jinetes aficionados y especialmente instructores, equinoterapeutas y entrenadores de diferentes disciplinas.',
  ],
},
{
  slug:'webinar-caballo-nuevo', enroll:'curso', specs:[['Formato','Webinar online']], cat:'Webinars', cover:P('webinar-caballo-nuevo'), eyebrow:'Webinar',
  t:'Del caballo nuevo al caballo hecho',
  short:'La evolución del caballo joven: madurez mental, morfológica, biomecánica y funcional.',
  lead:'Comprender la evolución de un caballo en todas sus áreas es esencial para quienes se dedican a trabajar con caballos jóvenes.',
  facts:[['Webinar','online'],['Caballos jóvenes','su proceso de madurez']],
  about:[
    'Analizamos los cambios madurativos, tanto en su comportamiento y madurez mental como los cambios morfológicos y biomecánicos que irán ocurriendo gradualmente.',
    'También analizaremos la madurez funcional y qué es esperable durante este camino.',
  ],
  forWho:[
    'Todas las personas que trabajan o tienen a cargo caballos nuevos y deseen comprender su proceso de madurez para acompañarlos de la mejor manera.',
    'Entrenadores, domadores, instructores y todos los profesionales del área ecuestre, como veterinarios, herradores, etc.',
  ],
},
{
  slug:'webinar-comunicacion', enroll:'curso', specs:[['Formato','Webinar online']], cat:'Webinars', cover:P('webinar-comunicacion'), eyebrow:'Webinar',
  t:'Comunicación y Formas de Aprendizaje',
  short:'El lenguaje de los caballos y cómo relacionarte con ellos de forma respetuosa y colaborativa.',
  lead:'Un webinar dedicado a comprender con mayor profundidad el lenguaje de los caballos y cómo entablar relaciones con ellos de una manera respetuosa y colaborativa.',
  facts:[['Webinar','online'],['Lenguaje equino','y formas de aprendizaje']],
  about:['Para ello es necesario comprender la naturaleza del caballo en profundidad, sus formas de aprendizaje y cómo aplicarlas al trabajo diario.'],
  forWho:[
    'Todas las personas, aficionadas o profesionales, que deseen profundizar en el entendimiento con sus caballos, leer su lenguaje y tener una mejor comunicación con ellos.',
    'Quienes quieran detectar a tiempo posibles problemas de conducta o síntomas de estrés.',
  ],
},

/* ---------------- FORMACIÓN ---------------- */
{
  slug:'formacion-integral', enroll:'cohorte', specs:[['Etapa 1','Online por Zoom · 8 Master Classes'],['Etapa 2','Presencial · 3 días completos'],['Etapa 3','Mentoring · 2 sesiones individuales'],['Cierre','Trabajo final y certificado']], cat:'Formación', stars:5, cover:P('formacion-integral'), eyebrow:'Programa Superior de Capacitación · Primer Nivel',
  t:'Formación Ecuestre Integral 2027',
  short:'La columna vertebral de la Academia: online, presencial y mentoring, con certificado.',
  lead:'La columna vertebral de Balance Training ACADEMY. Una formación integral, metodológica y súper personalizada, que venimos dando hace 18 años, formando profesionales y aficionados de diferentes disciplinas con muy buenas bases técnicas y educativas.',
  facts:[['3 etapas','online · presencial · mentoring'],['18 años','formando profesionales'],['★★★★★','nivel en la Pirámide']],
  about:[
    'Es la única Formación Integral para las personas del área ecuestre que deseen profesionalizarse con bases sólidas.',
    'La Formación abarca desde la construcción y preparación psico-física del jinete entrenador, paso a paso, hasta la formación de caballos deportivos desde sus inicios. Con clases teóricas, teórico-prácticas y prácticas, donde los alumnos tienen la posibilidad de trabajar con caballos en diferentes etapas de doma, entrenamiento o reeducación en Relinchos.',
    'El programa está diseñado para proporcionar una experiencia educativa completa en el mundo ecuestre, combinando teoría, acompañamiento personalizado y práctica, en tres secciones complementarias que garantizan un aprendizaje efectivo y profundo.',
    'Comprende 4 módulos en los que vamos trabajando sobre diferentes temas y explorando nuevas visiones. Aplicamos nuestro Método Balance Training® y la Equitación Centrada, adaptados a la necesidad de cada jinete y cada caballo, con un trabajo personalizado.',
  ],
  programTitle:'Las 3 etapas de la Formación',
  programLabel:'Etapa',
  program:[
    {t:'Online',d:'Volcamos todos los contenidos teóricos y teórico-prácticos y su fundamentación. 4 módulos dictados en 8 Master Classes por Zoom.'},
    {t:'Presencial',d:'Ponemos en práctica todos los contenidos trabajando con caballos en diferentes estadios de entrenamiento, siguiendo el orden de los 4 módulos. Tres días completos. Fecha y lugar a confirmar.'},
    {t:'Mentoring',d:'2 sesiones individuales de 1 hora para procesar todo lo aprendido, dar forma a un trabajo final y acompañarte en la puesta en acción de los logros que quieras alcanzar a nivel profesional o personal. Entrega del trabajo final y reunión online de cierre con entrega de certificados a quienes completen las tres etapas.'},
  ],
  gets:[
    'Una comprensión integral del caballo, contemplando sus aspectos físicos, mentales y emocionales.',
    'Bases técnicas ecuestres sólidas, aplicables a diferentes disciplinas.',
    'Una comprensión más profunda de la biomecánica y la preparación psicofísica del jinete y del caballo.',
    'Herramientas para desarrollar un asiento más consciente, equilibrado, sensible y eficaz.',
    'Conocimientos de etología y formas de aprendizaje para comprender cómo aprende el caballo y cómo comunicarte mejor con él.',
    'Criterios para iniciar, entrenar, formar y reeducar caballos de manera progresiva, metodológica y respetuosa.',
    'Capacidad para observar, evaluar y diseñar un plan de trabajo adecuado para cada caballo.',
    'Una mirada profesional basada en el bienestar equino, la ética y el respeto por su naturaleza.',
    'Mayor autonomía y criterio propio para tomar decisiones y resolver situaciones reales.',
    'Una metodología que te permitirá ordenar e integrar todo lo aprendido, en lugar de acumular conocimientos aislados.',
  ],
  gainsNote:'Al finalizar esta Formación no solo habrás incorporado conocimientos: habrás construido una base ecuestre sólida desde la cual seguir creciendo, especializarte y desarrollar tu propio camino.',
  forWho:[
    'Aficionados que desean dejar de aprender de manera fragmentada y construir bases ecuestres sólidas.',
    'Jinetes y amazonas que buscan mejorar su técnica, comprensión, sensibilidad y comunicación con el caballo.',
    'Personas que desean profesionalizarse y necesitan una formación ordenada, progresiva e integral como punto de partida.',
    'Entrenadores y profesionales ecuestres que buscan ampliar, actualizar u organizar sus conocimientos dentro de una metodología.',
    'Personas de diferentes disciplinas que comprenden que, antes de cualquier especialización, existen fundamentos comunes que todo buen jinete y entrenador necesita dominar.',
  ],
  dateNote:'Fecha y lugar de la etapa presencial a confirmar',
},

/* ---------------- ACOMPAÑAMIENTO ---------------- */
{
  slug:'mentorias', enroll:'entrevista', ctaShort:'Solicitar entrevista', specs:[['Encuentros','Una vez por semana, online'],['Compromiso','Mínimo 3 meses'],['Ingreso','Entrevista previa con la Mentora']], cat:'Acompañamiento', stars:3, eyebrow:'Mentorías personalizadas',
  t:'Mentorías Personalizadas',
  short:'Nuestro programa más personalizado: un plan a medida para vos y tu caballo.',
  lead:'Un acompañamiento personalizado para vos y tu caballo. Nuestro programa más personalizado de asesoramiento, formación y acompañamiento para jinetes y binomios que desean crecer de manera ordenada, progresiva y consciente.',
  facts:[['1 encuentro semanal','online'],['Mínimo 3 meses','proceso continuo'],['Vacantes limitadas','por año']],
  about:['Integra tres grandes áreas, Mentoría, Coaching Personal y Formación, para acompañarte no solo en el entrenamiento de tu caballo, sino también en tu propio desarrollo como jinete y profesional.'],
  blocks:[
    {eyebrow:'¿En qué consiste?',title:'Partimos de vos y de tu caballo',paras:[
      'Su historia, experiencias, fortalezas, dificultades y objetivos. A partir de esta evaluación diseñamos juntos un plan de trabajo personalizado, que puede incluir preparación física, entrenamiento de base, resolución de dificultades y desarrollo técnico dentro de la disciplina o estilo de monta elegido.',
      'Porque cada caballo, cada persona y cada camino son diferentes.']},
    {eyebrow:'¿Cómo la llevamos a cabo?',title:'Un encuentro por semana, y seguimiento entre encuentros',paras:[
      'Nos encontramos una vez por semana de manera online para trabajar sobre tus avances, analizar videos, resolver dudas, desarrollar contenidos y definir los próximos pasos.',
      'Entre encuentros mantenemos comunicación para compartir material, consultas y realizar el seguimiento de tu proceso.']},
    {eyebrow:'¿Qué valor aporta a tu camino?',title:'Transformar el conocimiento en experiencia y criterio',paras:[
      'No se trata solamente de recibir indicaciones sobre qué hacer. Se trata de aprender a observar, comprender, resolver dificultades y desarrollar progresivamente tu propia autonomía.',
      'Es la posibilidad de contar con un Mentor y un guía que acompañe tu camino, tanto en el entrenamiento como en tu crecimiento personal y profesional. Por eso la Mentoría no es una capacitación más: es el programa de acompañamiento más especializado de Balance Training Academy, y sus vacantes anuales son limitadas.']},
  ],
  reqTitle:'Requisitos para ingresar',
  req:[
    'Una entrevista online con la Mentora para evaluar si tu caso es posible de acompañar mediante la Mentoría y, si lo es, definir la forma más conveniente.',
    'Contar con un caballo con el cual desarrollar tus prácticas.',
    'Poder realizar filmaciones sencillas de tu trabajo cada 7 a 10 días.',
    'Comprometerte con el plan de trabajo y con la profundización en la Metodología Balance Training®.',
    'Presentar una breve carta contándonos tu recorrido, momento actual, expectativas y objetivos.',
    'Asumir un compromiso mínimo de 3 meses, que nos permita desarrollar un proceso continuo y progresivo.',
  ],
  quote:'No estás recibiendo solamente una formación. Estás contando con alguien que acompaña tu proceso, observa tu evolución y te ayuda a encontrar tu propio camino.',
  ctaLabel:'Solicitar entrevista por WhatsApp',
},
{
  slug:'asesorias', enroll:'entrevista', ctaShort:'Coordinar llamada', specs:[['Sesión','1 h 30 min por Zoom'],['Primer paso','Llamada previa con la Mentora']], cat:'Acompañamiento', eyebrow:'Asesoría online',
  t:'Asesorías',
  short:'Una sesión de 1 h 30 por Zoom para los temas puntuales que necesites resolver.',
  lead:'Una sesión de una hora y media por Zoom, durante la cual nos abocamos a los temas específicos en los que necesites asesoramiento.',
  facts:[['1 h 30 min','por Zoom'],['A medida','de tu consulta']],
  about:['Incluye revisión de trabajos y asesoramiento tanto en la parte profesional como en la personal o técnica.'],
  req:['Una llamada previa con la Mentora.'],
  ctaLabel:'Coordinar llamada por WhatsApp',
},
{
  slug:'coaching', enroll:'entrevista', ctaShort:'Coordinar llamada', specs:[['Sesión','50 minutos'],['Primer paso','Llamada previa con la Coach']], cat:'Acompañamiento', eyebrow:'Coaching',
  t:'Sesión de Coaching Deportivo y Ontológico',
  short:'Clarificá qué cambiar, qué camino seguir y qué competencias desarrollar.',
  lead:'El Coaching es una relación profesional continuada que ayuda a obtener resultados extraordinarios en la vida, la profesión, la empresa o los negocios de las personas.',
  facts:[['50 minutos','por sesión'],['Online','con Andrea']],
  about:[
    'Mediante el proceso de coaching, el cliente profundiza en su conocimiento, aumenta su rendimiento y mejora su calidad de vida.',
    'A través de la escucha activa y de un tipo de conversación respetuosa, que sigue las pautas y técnicas propias del coaching, el cliente logra clarificar qué cambios debe hacer, qué caminos debe seguir, qué competencias requiere, con quiénes debe conversar, qué relaciones debe cultivar y qué de lo que viene haciendo debe evitar y qué debe reforzar.',
    'El Coaching no es psicoterapia, ni consultoría, ni formación. Si cualquiera de estos servicios fuera necesario, como Coach te lo haré saber y te haré otra propuesta para que puedas seguir avanzando en tus metas. Si requerís algún servicio o profesional por fuera de mi dominio de formación, te recomendaré la derivación correspondiente.',
  ],
  req:['Una llamada previa con la Coach.'],
  ctaLabel:'Coordinar llamada por WhatsApp',
},

/* ---------------- PRESENCIALES ---------------- */
{
  slug:'presenciales', enroll:'consulta', specs:[['Dónde','En todo el país, según calendario'],['Clínicas','También en tu lugar']], cat:'Presenciales', eyebrow:'Presenciales',
  t:'Cursos, Capacitaciones y Clínicas en todo el país',
  short:'Capacitaciones presenciales en distintos lugares del país, según calendario.',
  lead:'Durante el año se dictan en diferentes lugares del país distintas capacitaciones, que vamos anunciando según calendario.',
  facts:[['Todo el país','según calendario'],['Clínicas','en tu lugar']],
  blocks:[
    {eyebrow:'Próximas fechas',title:'Enterate de los próximos cursos',paras:['Si querés estar al tanto de las próximas capacitaciones presenciales, dejanos tus datos por WhatsApp y te avisamos.']},
    {eyebrow:'Organizá una clínica',title:'¿Querés una capacitación en tu lugar?',paras:['Si querés organizar una capacitación o clínica en tu lugar, contactanos.']},
  ],
  ctaLabel:'Escribinos por WhatsApp',
},
{
  slug:'estadias', enroll:'entrevista', ctaShort:'Consultar fechas', specs:[['Lugar','Relinchos, Cruz Grande, Córdoba'],['Duración','3 días o 1 semana'],['Reserva','50 % del valor acordado']], cat:'Presenciales', eyebrow:'Presencial en Relinchos',
  t:'Estadías Personalizadas en Relinchos',
  short:'Unos días para aprender, practicar y vivir Balance Training® junto a la manada.',
  lead:'Una experiencia para aprender, practicar y vivir Balance Training®. Una invitación a venir a Relinchos y sumergirte durante unos días en una experiencia de aprendizaje junto a los caballos y la naturaleza.',
  facts:[['3 días o 1 semana','a elección'],['Relinchos','Cruz Grande, Córdoba'],['+35 años','de historia del Método']],
  about:[
    'Es la manera más completa de conocer, practicar y profundizar la Metodología Balance Training® junto a su creadora, Andrea Pigazzi, en el lugar donde nació y se desarrolla desde hace más de 35 años.',
    'Aquí el aprendizaje no sucede solamente durante una clase. Sucede observando la manada, trabajando con diferentes caballos, compartiendo experiencias y viviendo una manera sensible, respetuosa y consciente de relacionarnos con ellos.',
    'Porque para nosotros, la búsqueda del Balance va mucho más allá del entrenamiento: es también una filosofía y una manera de vivir.',
  ],
  blocks:[
    {eyebrow:'Una experiencia a tu medida',title:'Diseñamos el programa con vos',paras:[
      'Antes de tu llegada conversaremos sobre tu experiencia, intereses, necesidades y objetivos para diseñar un programa adecuado para vos.',
      'Trabajarás con caballos en diferentes etapas de su formación y podrás observar y practicar los principios de Balance Training® en situaciones reales.',
      'Los contenidos y actividades se adaptan también a los caballos disponibles, a los trabajos que se estén desarrollando en ese momento y a las condiciones propias de trabajar con animales en un entorno natural.']},
    {eyebrow:'Duración',title:'Programa de 3 días o de 1 semana',paras:['Las fechas se coordinan con anticipación y están sujetas a disponibilidad.']},
    {eyebrow:'Alojamiento',title:'Una casita de campo dentro de Relinchos',paras:[
      'Equipada con los servicios necesarios, y que eventualmente puede ser compartida con otros estudiantes.',
      'También es posible alojarse en La Cumbre y alrededores. En ese caso podemos orientarte sobre diferentes alternativas, cuyos costos y reservas dependerán de cada prestador.']},
    {eyebrow:'Otras experiencias',title:'Actividades que complementan tu estadía',paras:['De acuerdo con tus intereses y posibilidades, durante tu estadía también podremos organizar otras actividades, clases o paseos.']},
  ],
  req:[
    'Haber realizado algún curso, capacitación o formación de Balance Training Academy. Si todavía no conocés la metodología, recomendamos comenzar por el curso de Iniciación a la Metodología Balance Training®.',
    'Realizar previamente una conversación online con Andrea para conocernos, conversar sobre tus objetivos y definir la propuesta más adecuada.',
    'Reservar tu estadía con anticipación mediante el pago del 50 % del valor acordado.',
  ],
  where:'Relinchos – Centro de Entrenamiento y Capacitación · Cruz Grande, Córdoba, Argentina.',
  quote:'Venir a Relinchos es mucho más que venir a capacitarte: es una experiencia de vida. Darte un tiempo para observar, experimentar, aprender y compartir otra manera de estar con los caballos.',
  ctaLabel:'Consultar fechas por WhatsApp',
},
];

/* Catálogo: entradas sin landing propia (vienen del documento anterior de la clienta) */
const EXTRA = [
  { slug:null, cat:'Formación', stars:6, t:'Formación Ecuestre Integral · Nivel 2', short:'El nivel más alto de profundización dentro del recorrido formativo.', soon:true },
];

const TESTIMONIOS = [
  { t:'Por primera vez entendí el "por qué" de cada cosa. Dejé de pelear con mi caballo y empezamos a entendernos de verdad.', n:'María Sol R.', r:'Aficionada · Córdoba' },
  { t:'El orden de los contenidos es lo que más valoro. Sentí que avanzaba con bases, no improvisando como venía haciendo.', n:'Diego A.', r:'En profesionalización' },
  { t:'Técnica seria y, a la vez, un respeto enorme por el animal. Andrea explica con una claridad que no encontré en ningún otro lado.', n:'Lucía F.', r:'Instructora' },
];

/* Pirámide Formativa (estrellas → escalones) */
const PIRAMIDE = [
  { s:6, t:['Formación Ecuestre Integral · Nivel 2'] },
  { s:5, t:['Formación Ecuestre Integral 2027 · Nivel 1'], slug:'formacion-integral' },
  { s:3, t:['Mentorías Personalizadas'], slug:'mentorias' },
  { s:2, t:['Etología, Formas de Aprendizaje y Comunicación','Bases Formativas del Caballo Deportivo','Preparación Psico-Física del Jinete','La Equitación y El Arte del menor esfuerzo'] },
  { s:1, t:['Iniciación a la Metodología Balance Training®'], slug:'iniciacion' },
];

const PAGE = (slug) => "curso-" + slug + ".html";
window.BTA_DATA = { DATA, EXTRA, PAGE, TESTIMONIOS, PIRAMIDE, bySlug:(s)=>DATA.find(c=>c.slug===s) };
})();
