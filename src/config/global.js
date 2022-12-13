export default {
  global: {
    componenteFormativo:
      '<span1><em>How to write a solid argumentative text step by step</em></span1><br><span>Cómo escribir un texto argumentativo sólido paso a paso</span>',
    descripcionCurso:
      'Este componente se enfocará en cómo argumentar de forma escrita; qué es un texto argumentativo, cuáles son sus partes, cómo escribirlo, cómo identificar y formular ideas principales y secundarias (para construir el cuerpo de los párrafos), y cómo usar los diferentes tipos de conectores para que todo quede redactado de una manera más lógica, legible, amena y comprensible.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          '<em>The anatomy of an argumentative text</em> (La anatomía de un texto argumentativo)',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          '<em>How to classify main and secondary ideas?</em> (¿Cómo clasificar ideas principales y secundarias?)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          '<em>Connecting ideas in a coherent way</em> (Conectando ideas de forma coherente)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '<i>The anatomy of an argumentative text</i> (La anatomía de un texto argumentativo)',
      referencia:
        '<i>Britishcouncilsg. (2015). How to Write an Argumentative Essay - Planning [Video]. YouTube.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oAUKxr946SI',
    },
    {
      tema:
        '<i>How to classify main and secondary ideas?</i> (¿Cómo clasificar ideas principales y secundarias?)',
      referencia:
        '<i>Instructional Development Services. (s. f.). TSI Assessment Preparation: Identifying the Main Idea. Austin Community College District.</i>',
      tipo: 'Artículo',
      link:
        'https://sites.austincc.edu/tsiprep/reading-review/identifying-the-main-idea/',
    },
    {
      tema:
        '<i>Connecting ideas in a coherent way</i> (Conectando ideas de forma coherente)',
      referencia:
        '<i>BBC Learning English - ¿Quieres aprender a hablar inglés? (2016). Linking words of contrast: BBC English Class [Video]. YouTube.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PccESvY9H58',
    },
  ],
  glosario: [
    {
      termino: '<i>Argumentative text</i> / Texto argumentativo',
      significado:
        'texto donde el autor toma una postura sobre un tema (generalmente controversial) y debe persuadir al lector, por medio de argumentos y evidencia, de tomar su misma postura.',
    },
    {
      termino: '<i>Connectors</i> / Conectores',
      significado:
        'palabras o frases que unen ideas, frases, oraciones o párrafos.',
    },
    {
      termino: '<i>Main idea</i> / Idea principal',
      significado:
        'punto principal que el autor está presentando sobre un tema.',
    },
    {
      termino: '<i>Secondary ideas</i> / Ideas secundarias',
      significado:
        'ideas que se derivan de las ideas principales, las respaldan y las complementan (dan más detalles al respecto).',
    },
  ],
  referencias: [
    {
      referencia:
        'Graduate Writing Center. (s. f.). <i>Linking Words (Conjunctions and Connectors)</i>. Yale Center for Teaching and Learning. ',
      link:
        'https://ctl.yale.edu/sites/default/files/files/GWC_LinkingWords-1.pdf',
    },
    {
      referencia:
        'Instructional Development Services. (s. f.). <i>TSI Assessment Preparation: Identifying the Main Idea</i>. Austin Community College District. ',
      link:
        'https://sites.austincc.edu/tsiprep/reading-review/identifying-the-main-idea/',
    },
    {
      referencia:
        'Learning Assistance Center. (s. f.). <i>Main ideas and supporting details</i>. University of Hawaii. ',
      link:
        'https://manoa.hawaii.edu/undergrad/learning/wp-content/uploads/2014/03/MAIN-IDEAS-AND-SUPPORTING.pdf',
    },
    {
      referencia:
        'MasterClass. (2021). <i>How to Write a Good Argumentative Essay: Easy Step-by-Step Guide</i>. ',
      link:
        'https://www.masterclass.com/articles/how-to-write-a-good-argumentative-essay',
    },
    {
      referencia:
        'Purdue Online Writing Lab. (s. f.). <i>Argumentative Essays</i>. Purdue University. ',
      link:
        'https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html',
    },
    {
      referencia:
        'Rosario English Area. (s. f.). <i>Academic connectors</i>. Universidad del Rosario.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Michelle Pérez Hernández',
        cargo: 'Experta temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - CENIGRAF - Regional Distrito Capital',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES - Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabian Zarate',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
