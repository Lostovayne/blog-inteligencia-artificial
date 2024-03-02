interface ArticulosData {
  id: string;
  title: string;
  description: string;
  image: string[];
  publishedAt: string;
  lenguage?: string;
  title2?: string;
  description2?: string;
  title3?: string;
  description3?: string;
  icon: string;
}

export const Articulos: ArticulosData[] = [
  {
    id: "1",
    title: "¿Quién escribe este blog? Mi Presentación Personal",
    description: `Mi nombre es maría José Causil silva 
    Tengo 19 años
    Me gusta ver animes, programar y sobre todo me apasiona la tecnología.
    A lo largo de haber creado mi camino como profesional me apasione por los lenguajes robustos en programación como lo son Java y Python, me encanta mucho la robótica, algún día me gustaría poder integrar tanto el software como el hardware en mis futuros proyectos, en resumidas cuentas, amo la tecnología y programar.`,
    title2: "🚀 Futuro Brillante",
    description2:
      "Visualizo un futuro donde mis conocimientos en programación y mi comprensión de la tecnología se unan. ¿Una aplicación móvil que controle un robot? ¿Un sistema de domótica inteligente? Las posibilidades son infinitas. En resumen, soy una entusiasta de la tecnología, una amante de los códigos y una soñadora de soluciones innovadoras. ¡Estoy emocionada por lo que vendrá!",
    image: ["/perfil.jpg", "/articulos/ia-robotica.jpg", "/articulos/escritorio2.jpg"],
    publishedAt: "2024-03-01",
    lenguage: "Personal",
    icon: "/robot.png",
  },

  {
    id: "2",
    title: "¿Por qué Python es el mejor lenguaje para programar IA?",
    description:
      "Python es uno de los lenguajes de programación más populares para el desarrollo de aplicaciones de Inteligencia Artificial (IA) en la actualidad. Aunque otros lenguajes como C++ pueden ser más rápidos y ofrecer un mayor control sobre la gestión de la memoria, Python se ha establecido como la opción preferida para la mayoría de los desarrolladores de IA debido a su facilidad de uso, sintaxis limpia y una gran cantidad de bibliotecas de IA disponibles.",
    image: ["/articulos/ia-1.jpg", "/articulos/inteligencia2.jpg"],
    publishedAt: "2024-01-01",
    title2: "Adeptos a Phyton",
    description2: `Además de sus capacidades técnicas, Python tiene una gran comunidad de desarrolladores y científicos de datos que ofrecen una amplia gama de recursos para los programadores de IA. La comunidad está activa y en constante crecimiento, lo que significa que siempre hay alguien disponible para ayudar a solucionar problemas, responder preguntas y ofrecer orientación en el desarrollo de aplicaciones de IA. Además, la comunidad es muy abierta y amigable, lo que la convierte en un lugar ideal para aprender y compartir conocimientos.`,
    lenguage: "Python",
    title3: "En Conclusión",
    description3:
      "En resumen, Python se ha establecido como el lenguaje de programación preferido para el desarrollo de aplicaciones de IA debido a su facilidad de uso, sintaxis limpia y gran cantidad de bibliotecas de IA disponibles. Su capacidad para manejar grandes conjuntos de datos, su portabilidad y su amplia comunidad de desarrolladores lo hacen ideal para el desarrollo de prototipos y aplicaciones de IA. Además, la comunidad de Python es activa y en constante crecimiento, lo que la convierte en un lugar ideal para aprender y compartir conocimientos en el campo de la IA.",
    icon: "/python.png",
  },
  {
    id: "3",
    title: "¿Qué tipo de aplicaciones puedo realizar en Python?",
    description: `
    Aplicaciones en el desarrollo web. Este lenguaje de programación tiene una gran presencia en el desarrollo web. Se usa para crear frameworks que son fundamentales a la hora de elaborar un código que se ejecuta en su servidor. Asimismo, no hay que olvidar que estos frameworks web son esenciales para la construcción de una lógica de back-end común. Dos de los más usuales entre los que se inician en este lenguaje son Django y Flask. Python juega un papel clave en diversos aspectos de la ciencia de datos. Algunas de sus aplicaciones son el análisis y la visualización de la información, así como el aprendizaje automático o machine learning. El funcionamiento de los sistemas de aprendizaje automático se basa habitualmente en un algoritmo diseñado para detectar un patrón en una entrada. Es decir, si se le proporciona imágenes de un perro, el sistema aprenderá a detectar en fotos posteriores la presencia de este animal. Y este concepto se puede aplicar también en sistemas de recomendación como el de YouTube. Finalmente, hay que señalar que existen diversos algoritmos de aprendizaje automático, como los que se usan en las redes neuronales o las máquinas de vectores de soporte.  Los scripts son pequeños programas que tienen como objetivo la automatización de tareas sencillas. La facilidad de escritura, su sintaxis básica y la rapidez de este lenguaje lo convierten en la herramienta perfecta para crearlos.  Los numerosos usos de Python también incluyen la implantación de este lenguaje en el desarrollo de juegos, la creación de bibliotecas específicas o, incluso, el desarrollo de aplicaciones de escritorio.`,
    image: ["/articulos/imagenarticulo3.png", "/articulos/apps.png"],
    publishedAt: "2024-01-01",
    title2: "Los programas web más famosos",
    description2: `Para hacerte una idea de la importancia de este lenguaje, merece la pena dar un repaso a los programas más populares en cuyo desarrollo se ha utilizado.
    Es el motor de la plataforma Pinterest, que usa Python desde el primer día de su existencia. También utiliza Django para sus frameworks.

    Dropbox se soporta principalmente en códigos Python. Es más, el creador de este lenguaje trabaja para este Dropbox.

    La aplicación de Spotify se beneficia de la sencillez de estos códigos para ofrecer su popular servicio streaming de música.

    Reddit es una de las grandes comunidades online. Sus desarrolladores reescribieron el programa usado inicialmente en Python para conseguir que fuera más flexible y que pudiera acceder a un gran número de bibliotecas de manera funcional.

    Como puedes comprobar, muchas aplicaciones web deben su desarrollo al uso del lenguaje de programación Python. Por lo tanto, si piensas en trabajar en este ámbito, necesitas conocerlo bien. Es también uno de los mejores recursos en aplicaciones sofisticadas como el aprendizaje automático. Solicítanos más información para saber cómo puedes estudiarlo y todo lo que te ofrece la formación en este lenguaje de programación.`,
    lenguage: "Python",
    icon: "/python.png",
  },
  {
    id: "4",
    title: "¿Las mejores librerías de Python para ciencia de datos?",
    description:
      "Python es uno de los lenguajes de programación más populares para el desarrollo de aplicaciones de Inteligencia Artificial (IA) en la actualidad. Aunque otros lenguajes como C++ pueden ser más rápidos y ofrecer un mayor control sobre la gestión de la memoria, Python se ha establecido como la opción preferida para la mayoría de los desarrolladores de IA debido a su facilidad de uso, sintaxis limpia y una gran cantidad de bibliotecas de IA disponibles.",
    image: ["/articulos/libreriasPython.jpg", "/articulos/inteligencia2.jpg"],
    publishedAt: "2024-01-01",
    lenguage: "Python",
    icon: "/python.png",
  },
  {
    id: "5",
    title: "Ética de la IA: Desafíos y Consideraciones",
    description:
      "A medida que la IA se vuelve más amplia, recopila y procesa grandes cantidades de datos personales. Esto plantea preocupaciones legítimas sobre la privacidad y la protección de datos. Este tema es muy delicado, y la Unión Europea cada vez regula y protege más la privacidad de los usuarios. La IA trata datos masivos y cada vez se alimenta y aprende de nuevos datos con el fin de tomar decisiones inteligentes. Las organizaciones y los desarrolladores de IA deben garantizar que se cumplan los estándares éticos y legales para el uso y almacenamiento de datos, protegiendo la privacidad de las personas y evitando el uso indebido de la información personal. ",
    image: ["/articulos/inteligencia.png", "/articulos/inteligencia2.jpg"],
    publishedAt: "2024-01-01",
    lenguage: "Python",
    icon: "/python.png",
  },
  {
    id: "6",
    title: "IA generativa en sanidad",
    description: `La capacidad de las máquinas para realizar tareas como reconocer imágenes, procesar lenguaje natural o toma decisiones basándose en datos, puede aplicarse al sector de la sanidad para mejorar la prevención, el diagnóstico, el tratamiento y el seguimiento de las enfermedades.

    La IA generativa en sanidad puede ayudar a los profesionales sanitarios a tomar mejores decisiones, a los pacientes a acceder a una atención más personalizada y a los investigadores a descubrir nuevos tratamientos, vacunas y metodologías.

    En este caso sería necesario hacer una diferenciación entre dos tipos distintos de inteligencia artificial: La IA analítica y la IA generativa.`,
    image: ["/articulos/inteligencia.png", "/articulos/inteligencia2.jpg"],
    publishedAt: "2024-01-01",
    lenguage: "Python",
    icon: "/python.png",
  },
];
