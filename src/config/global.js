export default {
  global: {
    Name: 'Fundamentos y prevención del riesgo de violencia',
    Description:
      'Este componente aborda los fundamentos de la gestión del riesgo aplicados al ejercicio del personal sanitario, considerando la normatividad vigente, la vulnerabilidad individual e institucional y los riesgos presentes en contextos de violencia. Además, integra herramientas para la valoración del riesgo y medidas de prevención y mitigación orientadas a fortalecer la seguridad del personal sanitario.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de gestión del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Marco normativo de protección sanitaria',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Amenaza, vulnerabilidad y riesgo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Gestión del riesgo de violencia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Escenarios de exposición sanitaria',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Vulnerabilidad individual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y variables individuales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Escala de vulnerabilidad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Factores individuales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Factores protectores',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Técnicas cognitivo-conductuales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procesos de gestión del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conocimiento del riesgo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Reducción del riesgo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Manejo del riesgo',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Herramientas para gestionar el riesgo',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Vulnerabilidad institucional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto y componentes institucionales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Factores de riesgo institucional',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Contexto interno y externo',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Condiciones básicas de seguridad sanitaria',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Violencia contra el personal sanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Amenazas y situaciones de riesgo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Factores según escenarios de atención',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Consecuencias de la violencia sanitaria',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Prevención y mitigación de violencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Prevención y mitigación',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Herramientas de valoración del riesgo',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Valoración de la vulnerabilidad individual',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Matriz de valoración del riesgo',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Fundamentos del plan de contingencia',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Ruta de respuesta',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: 'Desescalación de la violencia',
            hash: 't_6_7',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
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
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'Condición, situación o evento con potencial de generar daño a las personas, los recursos, la infraestructura o la prestación de los servicios de salud.',
    },
    {
      termino: 'Desescalación de la violencia',
      significado:
        'Aplicación de estrategias de comunicación y comportamiento orientadas a disminuir la tensión y evitar la progresión de una situación conflictiva hacia manifestaciones de mayor violencia.',
    },
    {
      termino: 'Factor de riesgo',
      significado:
        'Condición individual, institucional o del contexto que puede aumentar la probabilidad de exposición o las consecuencias asociadas a una situación de violencia.',
    },
    {
      termino: 'Factor protector',
      significado:
        'Condición, capacidad o recurso individual, institucional o del entorno que contribuye a disminuir la vulnerabilidad y fortalecer la respuesta frente al riesgo.',
    },
    {
      termino: 'Gestión del riesgo',
      significado:
        'Proceso orientado al conocimiento, reducción y manejo del riesgo mediante acciones que permiten reconocer las condiciones existentes, intervenirlas y responder ante sus posibles consecuencias.',
    },
    {
      termino: 'Manejo del riesgo',
      significado:
        'Componente de la gestión del riesgo relacionado con la preparación y ejecución de acciones para responder ante situaciones que pueden afectar la seguridad del personal sanitario.',
    },
    {
      termino: 'Matriz de valoración del riesgo',
      significado:
        'Herramienta que permite organizar y relacionar información sobre amenazas, vulnerabilidades, factores protectores, posibles consecuencias y medidas para orientar el análisis del riesgo.',
    },
    {
      termino: 'Mitigación',
      significado:
        'Conjunto de medidas orientadas a disminuir las condiciones de riesgo existentes o reducir sus posibles consecuencias.',
    },
    {
      termino: 'Personal sanitario',
      significado:
        'Personas que desarrollan actividades relacionadas con la atención, prestación o apoyo de los servicios de salud en los diferentes escenarios donde estos se realizan.',
    },
    {
      termino: 'Plan de contingencia',
      significado:
        'Instrumento de preparación que establece acciones, responsabilidades, recursos y mecanismos de respuesta frente a situaciones de riesgo previamente identificadas.',
    },
    {
      termino: 'Prevención',
      significado:
        'Conjunto de acciones orientadas a evitar la generación de nuevas condiciones de riesgo y disminuir la exposición frente a amenazas identificadas.',
    },
    {
      termino: 'Reducción del riesgo',
      significado:
        'Componente de la gestión del riesgo dirigido a prevenir nuevas condiciones de riesgo y disminuir las existentes mediante medidas de prevención y mitigación.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Posibilidad de que una amenaza, en interacción con determinadas condiciones de vulnerabilidad, produzca consecuencias adversas sobre las personas, la institución o la prestación de los servicios de salud.',
    },
    {
      termino: 'Ruta de respuesta',
      significado:
        'Secuencia organizada de acciones y mecanismos establecidos para orientar la actuación ante una situación de riesgo o violencia.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'Condiciones individuales, institucionales o del contexto que pueden aumentar la susceptibilidad frente a una amenaza y limitar la capacidad para anticiparla, afrontarla o responder ante sus efectos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Comité Internacional de la Cruz Roja. (2013). Asistencia de salud en peligro: Responsabilidades del personal de salud que trabaja en conflictos armados y en otras emergencias.',
      link: 'https://www.icrc.org/sites/default/files/external/doc/es/assets/files/publications/icrc-002-4104.pdf',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012a, 24 de abril). Ley 1523 de 2012, por la cual se adopta la política nacional de gestión del riesgo de desastres y se establece el Sistema Nacional de Gestión del Riesgo de Desastres y se dictan otras disposiciones. Diario Oficial, 48.411.',
      link: 'https://portal.gestiondelriesgo.gov.co/Documents/Normatividad/LEY%201523%20DEL%2024%20DE%20ABRIL%20DE%202012.pdf',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012b, 11 de julio). Ley 1562 de 2012, por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Diario Oficial, 48.488.',
      link: 'https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/pdf/ley_1562_2012.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2012, 28 de diciembre). Resolución 4481 de 2012, por la cual se adopta el Manual de Misión Médica y se establecen normas relacionadas con la señalización y divulgación de su emblema. Diario Oficial, 48.676.',
      link: 'https://www.ins.gov.co/Normatividad/Resoluciones/RESOLUCI%C3%93N%204481%20DE%202012.PDF',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2015, 26 de mayo). Decreto 1072 de 2015, por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Diario Oficial, 49.523.',
      link: 'https://cancilleria.gov.co/normograma/compilacion/docs/decreto_1072_2015.htm',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2018). Gestión del riesgo—Directrices (Norma ISO 31000:2018).',
      link: 'https://www.iso.org/standard/65694.html',
    },
    {
      referencia:
        'Organización Internacional del Trabajo, Consejo Internacional de Enfermeras, Organización Mundial de la Salud, & Internacional de Servicios Públicos. (2002). Directrices marco para afrontar la violencia laboral en el sector de la salud. Oficina Internacional del Trabajo.',
      link: 'https://www.ilo.org/sites/default/files/wcmsp5/groups/public/%40ed_dialogue/%40sector/documents/publication/wcms_160911.pdf',
    },
    {
      referencia:
        'Organización Internacional del Trabajo, Consejo Internacional de Enfermeras, Organización Mundial de la Salud, & Internacional de Servicios Públicos. (2005). Framework guidelines for addressing workplace violence in the health sector: The training manual. International Labour Office.',
      link: 'https://www.ilo.org/sites/default/files/wcmsp5/groups/public/%40ed_protect/%40protrav/%40safework/documents/instructionalmaterial/wcms_108542.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
