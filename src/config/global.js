export default {
  global: {
    Name: 'Operación comercial digital',
    Description:
      'Este componente formativo desarrolla competencias relacionadas con la planificación, ejecución y optimización de estrategias de ventas en social media, integrando herramientas comerciales, producción de contenidos digitales, comunicación persuasiva, análisis de resultados y gestión de relaciones con consumidores en entornos digitales.',
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
        titulo: 'Estrategia comercial en social media',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Venta',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Objetivos SMART',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Producto',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Marketing online',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Embudo de ventas',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Canales de venta de social media',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Segmentación y posicionamiento comercial digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Segmentación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Posicionamiento',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Lead magnet',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Palabras clave e intenciones de búsqueda',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Insights',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Construcción de marca y comunicación persuasiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Copywriting',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Llamados a la acción y contenidos persuasivos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Guiones técnicos para contenidos digitales',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tono de marca',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Prisma de la marca',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Contenidos digitales',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Producción de contenidos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Plataformas de inteligencia artificial',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Plataformas de diseño y edición multimedia',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas básicas de edición de imagen',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Técnicas básicas de edición de video',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Medios digitales',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Planificación, publicación y optimización de contenidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Parrilla de contenidos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Calendario de publicaciones',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Divulgación de contenido digital',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Protocolos de publicación e indexación de contenidos digitales',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Netiqueta',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Cierre de ventas digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Conversión',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Medios de pago',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Entrega y garantía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Sistemas de entrega',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Garantía',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Análisis comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Reporte',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Métricas de ventas',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'KPIs',
            hash: 't_8_3',
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
        download: 'downloads/63110200_CF02_DU.pdf',
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
      termino: 'Alcance',
      significado:
        'Cantidad de usuarios expuestos a un contenido dentro de medios digitales.',
    },
    {
      termino: 'Conversión',
      significado:
        'Acción estratégica realizada por un usuario alineada con objetivos comerciales definidos.',
    },
    {
      termino: 'Copywriting',
      significado:
        'Redacción persuasiva orientada a influir en decisiones y comportamientos del consumidor.',
    },
    {
      termino: 'Embudo de ventas',
      significado:
        'Modelo que representa etapas recorridas por consumidores hasta la compra.',
    },
    {
      termino: 'KPI',
      significado:
        'Indicador clave utilizado para evaluar cumplimiento de objetivos estratégicos comerciales.',
    },
    {
      termino: 'Lead magnet',
      significado:
        'Recurso de valor utilizado para captar información de potenciales clientes.',
    },
    {
      termino: 'Métrica',
      significado:
        'Medida cuantitativa utilizada para evaluar desempeño de actividades comerciales digitales.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Lugar que ocupa una marca dentro de la percepción del consumidor.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Proceso de clasificación de consumidores según características y comportamientos comunes.',
    },
    {
      termino: 'Tono de marca',
      significado:
        'Estilo comunicativo utilizado por una organización para relacionarse con audiencias.',
    },
  ],
  referencias: [
    {
      referencia:
        'Kunstplaza. (2026, 5 de mayo). Fundamentos de edición de imágenes: técnicas para optimizar fotografías y diseños. Kunstplaza.',
      link: 'https://www.kunstplaza.de/es/diseno-grafico-2/conceptos-basicos-de-edicion-de-imagenes/',
    },
    {
      referencia:
        'Ley 1480 de 2011. (2011). Estatuto del Consumidor. Congreso de la República de Colombia.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44306',
    },
    {
      referencia:
        'Meta. (2024). Meta Business Suite para gestión de contenidos.',
      link: 'https://www.facebook.com/business/tools/meta-business-suite',
    },
    {
      referencia:
        'Neil Patel. (2024). Investigación de palabras clave para marketing digital.',
      link: 'https://neilpatel.com/es/blog/investigacion-de-palabras-clave/',
    },
    {
      referencia:
        'TechSmith. (s. f.). Cómo editar vídeos paso a paso: guía para principiantes. TechSmith.',
      link: 'https://www.techsmith.es/blog/como-editar-videos/',
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
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador de contenidos digitales',
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
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
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
