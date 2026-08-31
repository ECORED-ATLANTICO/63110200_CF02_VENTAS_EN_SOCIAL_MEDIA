<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Planificación, publicación y optimización de contenidos

    .bg-full-width.bg-fondo-1
    
      img(src="@/assets/curso/tema5/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-11(data-aos="fade-right")
          p.banner-text La planificación y publicación de contenidos constituyen procesos estratégicos que permiten organizar las acciones de comunicación digital de manera coherente con los objetivos comerciales de una organización. Su adecuada implementación facilita optimizar recursos, mantener consistencia en los mensajes y fortalecer la relación con las audiencias. En las ventas en <em>social media</em>, la planificación estructurada permite anticipar necesidades, coordinar actividades y mejorar la efectividad de los contenidos difundidos mediante diferentes plataformas digitales.

      separador
      
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.1 Parrilla de contenidos

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema5/img02.png", data-aos="zoom-in")
        .col-lg-7
          p.mb-3(data-aos="fade-right") La parrilla de contenidos corresponde a una herramienta de planificación utilizada para organizar de manera estructurada los contenidos que serán publicados en medios digitales durante un periodo determinado. Su función consiste en facilitar la visualización de temas, formatos, objetivos y fechas asociadas a las diferentes acciones comunicativas. Dentro de las ventas en <em>social media</em>, esta herramienta permite mantener coherencia estratégica y asegurar una distribución equilibrada de contenidos orientados a diferentes necesidades comerciales.

          .bg-fondo-07.p-4.br-15.mb-0(data-aos="fade-left")
            p.mb-0 Entre las principales características de una parrilla de contenidos se encuentra su capacidad para integrar objetivos comerciales, segmentos de audiencia, formatos digitales y cronogramas de publicación dentro de un mismo instrumento de planificación. Esta visión integral facilita la coordinación de actividades relacionadas con producción, revisión y publicación de contenidos. Además, permite identificar oportunidades de mejora y garantizar que las acciones desarrolladas respondan a una estrategia previamente definida.

      .bg-color-015.p-3.br-15.mb-5(data-aos="fade-right")
        p.mb-0 Una parrilla bien diseñada distribuye los tipos de contenido (informativo, promocional, aspiracional, experiencial e interactivo) de manera equilibrada, garantizando coherencia con el posicionamiento de la marca.

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-5.mb-4.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img04.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Tipo de contenido")
            p.text-bold.mb-2 Tipo de contenido.
            p.mb-2 Clasifica la finalidad del mensaje:
            p.mb-0 informativo, promocional, educativo, de entretenimiento o de interacción.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Formato")
            p.text-bold.mb-2 Formato.
            p.mb-2 Indica la presentación:
            p.mb-0 post estático, carrusel, reel, video corto, artículo, historia, pódcast, etc.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Tema o mensaje central")
            p.text-bold.mb-2 Tema o mensaje central.
            p.mb-2 Define la idea principal que transmitirá la pieza digital:
            p.mb-0 beneficios, características, testimonios, consejos o promociones.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Objetivo de comunicación")
            p.text-bold.mb-2 Objetivo de comunicación.
            p.mb-2 Establece el resultado comercial esperado:
            p.mb-0 captar leads, generar interacción, educar o impulsar ventas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Llamado a la acción (CTA)")
            p.text-bold.mb-2 Llamado a la acción (CTA).
            p.mb-2 Orienta al usuario sobre la acción a realizar:
            p.mb-0 comentar, compartir, visitar el sitio web, registrarse o comprar.

    p.mb-4(data-aos="fade-right") A continuación, se presentan dos ejemplos de parrillas semanales de contenidos aplicadas a marcas del Sistema Moda, con el propósito de evidenciar la relación entre el tipo de contenido, el formato, el tema, el objetivo y el llamado a la acción (CTA):

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 7.
          span Ejemplo de parrilla semanal de contenidos para Johanna Ortiz
        .tabla-a.tb-custom.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th Tipo de contenido
                th Formato
                th Tema
                th Objetivo
                th CTA
            tbody
              tr
                td <b>Inspiracional</b>
                td <i>Post con foto</i>
                td Feminidad y poder
                td Conectar emocionalmente
                td "Descubre más en nuestra web"
              tr
                td <b>Educativo</b>
                td <i>Reel</i>
                td Técnicas artesanales
                td Mostrar <i>expertise</i>
                td "Mira la colección completa"
              tr
                td <b>Producto</b>
                td Carrusel
                td <i>Resort Collection</i>
                td Promocionar colección
                td "Compra ahora"
              tr
                td <b>Lifestyle</b>
                td Artículo
                td Moda tropical
                td Asociar estilo con experiencias
                td "Lee más en nuestro blog"
              tr
                td <b>Interacción</b>
                td Encuesta
                td Estampados
                td Fomentar comunidad
                td "Vota tu favorito"
              tr
                td <b>Entretenimiento</b>
                td <i>Video backstage</i>
                td <i>Fashion Week</i> París
                td Generar <i>engagement</i>
                td "Suscríbete al canal"
              tr
                td <b>Valores de marca</b>
                td <i>Post</i>
                td Sostenibilidad
                td Reforzar identidad
                td "Conoce nuestro compromiso"

    .bg-full-width.bg-fondo-1
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-2 Tabla 8.
            span Ejemplo de parrilla semanal de contenidos para Arturo Calle
          .tabla-a.tb-custom.mb-0
            table
              caption Nota. SENA, (2026).
              thead
                tr
                  th Tipo de contenido
                  th Formato
                  th Tema
                  th Objetivo
                  th CTA
              tbody
                tr
                  td <b>Inspiracional</b>
                  td <i>Post</i>
                  td Estilo masculino
                  td Posicionar marca
                  td "Explora nuestros <i>looks</i>"
                tr
                  td <b>Educativo</b>
                  td <i>Reel</i>
                  td <i>Tips</i> de oficina
                  td Aportar valor práctico
                  td "Descubre más en tienda"
                tr
                  td <b>Producto</b>
                  td Carrusel
                  td Camisas <i>slim fit</i>
                  td Promocionar colección
                  td "Compra en línea"
                tr
                  td <b>Lifestyle</b>
                  td Artículo
                  td <i>Look</i> ejecutivo vs casual
                  td Mostrar versatilidad
                  td "Lee más en nuestro blog"
                tr
                  td <b>Interacción</b>
                  td Pregunta
                  td <i>Blazer</i> azul o gris
                  td Generar conversación
                  td "Responde en <i>Stories</i>"
                tr
                  td <b>Entretenimiento</b>
                  td Video
                  td <i>Behind the scenes</i> campaña
                  td Humanizar marca
                  td "Suscríbete al canal"
                tr
                  td <b>Valores de marca</b>
                  td <i>Post</i>
                  td Responsabilidad social
                  td Reforzar identidad
                  td "Conoce nuestros programas"

      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-lg-4.col-md-6.mb-4.mb-lg-0
          .bg-color-015.p-4.br-15.h-100
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/tema5/img05.svg", style="max-width: 50px;").mx-auto
              .col
                h4.mb-2 Johanna Ortiz:
                p.mb-0 Comunica exclusividad, artesanía y lujo; su parrilla debe resaltar <em>storytelling</em> aspiracional y valores de sostenibilidad.

        .col-lg-4.col-md-6.mb-4.mb-lg-0
          .bg-color-015.p-4.br-15.h-100
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/tema5/img05.svg", style="max-width: 50px;").mx-auto
              .col
                h4.mb-2 Arturo Calle:
                p.mb-0 Combina accesibilidad, practicidad y cercanía; su parrilla se centra en consejos útiles, promociones y valores corporativos.

        .col-lg-4.col-md-6
          .bg-color-015.p-4.br-15.h-100
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/tema5/img05.svg", style="max-width: 50px;").mx-auto
              .col
                h4.mb-2 Ambas marcas:
                p.mb-0 Equilibran contenido aspiracional, educativo y comercial, adaptado a sus públicos meta.

    .row.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12.col-xl-8.mx-auto
        .bg-color-07.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img15.png").mx-auto
            .col-lg-7.order-lg-2.p-4
              .bg-color-06.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold Pregunta de aplicación
              p.mb-0 ¿Cómo podría una empresa de turismo utilizar una parrilla de contenidos para equilibrar publicaciones promocionales y educativas?

    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Calendario de publicaciones

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img06.png", data-aos="zoom-in")
      .col-lg-7
        p.mb-3(data-aos="fade-right") El calendario de publicaciones constituye una herramienta de planificación que organiza cronológicamente la difusión de contenidos en medios digitales. Su propósito consiste en establecer fechas, horarios y responsables asociados a cada publicación, facilitando la ejecución ordenada de las estrategias de comunicación. En las ventas en <em>social media</em>, el calendario permite mantener continuidad en la presencia digital y fortalecer la capacidad para coordinar campañas comerciales desarrolladas a través de diferentes plataformas.

        .bg-fondo-08.p-4.br-15(data-aos="fade-left")
          p.mb-1 Las características principales de un calendario de publicaciones incluyen organización temporal, programación anticipada, integración de campañas y seguimiento de actividades comunicativas. Estas características permiten visualizar de manera clara las acciones planificadas y facilitan la coordinación entre los diferentes integrantes involucrados en la producción y difusión de contenidos. Asimismo, contribuyen a evitar duplicidades, omisiones o desequilibrios dentro de la estrategia digital.
          p.mb-0 Para organizar y gestionar de manera eficiente la publicación de contenidos, existen diferentes herramientas digitales que facilitan la programación, coordinación y seguimiento de las actividades en los distintos canales, entre ellas:
    
    
    .bg-full-width.bg-fondo-1

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema5/img07.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-1
          .bg-fondo-02.p-4.br-15
            SlyderA(tipo="b").bg-color-white.p-3.tarjeta
              .tarjeta.p-3
                h4 Trello
                p.mb-0 <b>Uso estratégico:</b> permite organizar y visualizar las actividades relacionadas con la planificación y publicación de contenidos mediante tableros interactivos.

              .tarjeta.p-3
                h4 Google Calendar
                p.mb-0 <b>Uso estratégico:</b> facilita programar fechas y horarios para coordinar la publicación de contenidos en diferentes medios digitales.

              .tarjeta.p-3
                h4 Notion
                p.mb-0 <b>Uso estratégico:</b> permite organizar contenidos, estructurar información y coordinar actividades relacionadas con la gestión de contenidos para equipos.

              .tarjeta.p-3
                h4 HubSpot
                p.mb-0 <b>Uso estratégico:</b> facilita la gestión de contenidos y la automatización de acciones de <em>marketing</em> para fortalecer procesos comerciales digitales.

          
      .row.align-items-center.bg-color-015.p-4.mb-5.br-15
        .col-lg-auto.order-2.order-lg-2.d-none.d-lg-flex
          img(src="@/assets/curso/tema5/img08.svg", style="max-width: 100px").mx-auto
        .col-lg.order-1.order-lg-1
          p.mb-0 Las herramientas digitales especializadas permiten gestionar calendarios de publicaciones de forma más eficiente. Estas herramientas facilitan programar contenidos, administrar múltiples canales y monitorear actividades desde una única interfaz. Su utilización contribuye a optimizar procesos operativos y fortalecer el control sobre las estrategias de comunicación desarrolladas en entornos digitales. La selección de una herramienta adecuada depende de las necesidades organizacionales y de los canales utilizados dentro de la estrategia comercial.
      
      
      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-lg-12.col-xl-8.mx-auto
          .bg-color-09.br-15.mb-0
            .row.align-items-center.justify-content-center(data-aos="fade-right")
              .col-lg-auto.d-none.d-lg-block.order-lg-1
                img(src="@/assets/curso/tema1/img08.png", style="max-width: 150px;").mx-auto
              .col-lg-9.order-1.order-lg-2.p-4
                .bg-color-08.p-2.mb-2.max-cont-md
                  h4.mb-0.text-bold.text-white Clave estratégica
                p.mb-0 La constancia en la publicación de contenidos depende más de la planificación que de la improvisación.

      separador

      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.3 Divulgación de contenido digital

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img09.png", data-aos="zoom-in")
      .col-lg-7
        p.mb-3(data-aos="fade-right") La divulgación de contenido digital corresponde al conjunto de acciones orientadas a distribuir información mediante medios y plataformas digitales con el propósito de alcanzar audiencias específicas. Su importancia radica en que la creación de contenido por sí sola no garantiza resultados; es necesario implementar estrategias que permitan aumentar visibilidad, alcance e interacción. En las ventas en <em>social media</em>, la divulgación constituye una fase estratégica porque conecta los contenidos producidos con los consumidores potenciales.

        .bg-color-015.p-3.br-15(data-aos="fade-left")
          p.mb-0 Las técnicas de divulgación permiten optimizar la distribución de contenidos según objetivos comerciales y características de la audiencia. Entre las más utilizadas se encuentran la publicación multicanal, la segmentación de audiencias, la reutilización estratégica de contenidos y la promoción mediante campañas digitales. Estas prácticas favorecen la exposición de los mensajes ante usuarios con mayores probabilidades de interés, fortaleciendo la capacidad de las organizaciones para generar interacción y oportunidades comerciales.

    .bg-color-014.p-3.br-15.mb-5(data-aos="fade-right")
      p.mb-0 En este contexto, la divulgación del contenido digital puede desarrollarse mediante diferentes técnicas que permiten ampliar su alcance, dirigirlo hacia audiencias específicas y favorecer la interacción, entre ellas:

    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .p-3.p-md-4(titulo="Publicación multicanal")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0.p-4
            h4 Publicación multicanal
            p.mb-2 Amplía el alcance mediante la distribución de contenidos en diferentes medios digitales.
            p.mb-0 <b>Ejemplo:</b> una tienda publica una nueva colección en su sitio web, redes sociales y correo electrónico.
          .col-lg-5.col-md-8.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema5/img10.png', alt='')

      .p-3.p-md-4(titulo="Segmentación de audiencia")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0.p-4
            h4 Segmentación de audiencia
            p.mb-2 Dirige contenidos hacia grupos de usuarios específicos según características demográficas, intereses o comportamiento digital.
            p.mb-0 <b>Ejemplo:</b> una campaña promocional orientada a jóvenes interesados en moda sostenible.
          .col-lg-5.col-md-8.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema5/img11.png', alt='')

      .p-3.p-md-4(titulo="Reutilización de contenidos")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0.p-4
            h4 Reutilización de contenidos
            p.mb-2 Adapta una misma pieza informativa a diferentes formatos y plataformas para maximizar su aprovechamiento.
            p.mb-0 <b>Ejemplo:</b> transformar un artículo de blog en una infografía para redes sociales o un video corto.
          .col-lg-5.col-md-8.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema5/img12.png', alt='')

      .p-3.p-md-4(titulo="Promoción digital")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0.p-4
            h4 Promoción digital
            p.mb-2 Utiliza pauta publicitaria y anuncios pagados para incrementar el alcance de publicaciones estratégicas.
            p.mb-0 <b>Ejemplo:</b> promocionar un reel de lanzamiento para alcanzar usuarios que aún no siguen la marca.
          .col-lg-5.col-md-8.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema5/img13.png', alt='')

    .row.align-items-center.bg-color-07.p-4.mb-5.br-15
      .col-lg-auto.order-2.order-lg-2.d-none.d-lg-flex
        img(src="@/assets/curso/tema5/img14.svg", style="max-width: 100px").mx-auto
      .col-lg.order-1.order-lg-1
        p.mb-0 Las herramientas digitales especializadas permiten gestionar calendarios de publicaciones de forma más eficiente. Estas herramientas facilitan programar contenidos, administrar múltiples canales y monitorear actividades desde una única interfaz. Su utilización contribuye a optimizar procesos operativos y fortalecer el control sobre las estrategias de comunicación desarrolladas en entornos digitales. La selección de una herramienta adecuada depende de las necesidades organizacionales y de los canales utilizados dentro de la estrategia comercial.
    

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img15.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center <em>Mailchimp</em>
            p.mb-0 Facilita la distribución de contenidos mediante campañas de correo electrónico segmentadas.

      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img16.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center <em>Hootsuite</em>
            p.mb-0 Facilita la gestión simultánea de múltiples canales digitales desde una misma plataforma.

      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img17.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center <em>Meta Business Suite</em>
            p.mb-0 Permite programar y gestionar publicaciones en las plataformas de Meta.

      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img18.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center <em>Metricool</em>
            p.mb-0 Facilita la programación, el monitoreo y el análisis de estrategias de contenido digital.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        .bg-color-015.p-4.br-15(data-aos="fade-right")
          p.text-bold.mb-2 Ejemplo aplicado.
          p.mb-0 La organización EcoVida invertía tiempo y recursos en la producción de contenidos educativos relacionados con consumo responsable. Sin embargo, observaba niveles limitados de alcance debido a que las publicaciones eran difundidas únicamente mediante una red social. Como consecuencia, gran parte de su audiencia potencial no llegaba a interactuar con la información generada. Después de implementar una estrategia de divulgación multicanal, comenzó a distribuir contenidos mediante blog corporativo, redes sociales, correo electrónico y campañas digitales segmentadas. Esta diversificación permitió ampliar significativamente la visibilidad de la marca, incrementar la interacción de los consumidores y fortalecer los resultados comerciales obtenidos a partir de sus contenidos digitales.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema5/img19.png", data-aos="zoom-in")

    .row.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12.col-xl-8.mx-auto
        .bg-color-07.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img15.png").mx-auto
            .col-lg-7.order-lg-2.p-4
              .bg-color-06.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold Pregunta de aplicación
              p.mb-0 ¿Cómo podría una empresa de educación virtual ampliar el alcance de sus contenidos mediante una estrategia de divulgación multicanal?

    separador

    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Protocolos de publicación e indexación de contenidos digitales

    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los protocolos de publicación corresponden al conjunto de procedimientos y criterios utilizados para garantizar que los contenidos digitales sean difundidos de manera organizada, coherente y alineada con los objetivos de la organización. Su aplicación permite estandarizar procesos relacionados con revisión, aprobación, programación y publicación de materiales. En las ventas en <em>social media</em>, estos protocolos contribuyen a mantener consistencia comunicativa y reducir riesgos asociados a errores o inconsistencias en los mensajes difundidos.

    .row.align-items-center.mb-5.bg-color-015.p-4.br-15(data-aos="fade-right")
      .col-lg
        p.mb-0 La implementación de protocolos facilita coordinar actividades entre los diferentes responsables involucrados en la producción de contenidos. Aspectos como validación de información, revisión ortográfica, cumplimiento de lineamientos de marca y programación de publicaciones forman parte de estos procedimientos. Cuando las organizaciones establecen protocolos claros, fortalecen la calidad de los contenidos y optimizan los procesos asociados a la gestión de sus canales digitales.
      .col-lg-auto.d-none.d-lg-flex
        img.d-none.d-lg-flex(src="@/assets/curso/tema5/img14.svg", style="max-width: 100px;").mx-auto

    p.mb-5 En este contexto, la aplicación de un protocolo de publicación permite organizar diferentes acciones de revisión y control que contribuyen a garantizar la calidad y coherencia de los contenidos digitales antes de su difusión, entre ellas:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-4.mb-lg-0.col-md-10.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img21.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
          .tarjeta.bg-fondo-03.p-4.h-100.br-15
            .row.align-items-center.mb-3
              .col-7
                h4.mb-0 Revisión de contenido
              .col-5
                img(src='@/assets/curso/tema5/img27.svg', alt='', style="max-width: 80px; max-height: 80px").mx-auto
            p.mb-0 Garantiza la precisión, coherencia y calidad de la información, permitiendo identificar errores o inconsistencias que afecten la comprensión del mensaje.

          .tarjeta.bg-fondo-03.p-4.h-100.br-15
            .row.align-items-center.mb-3
              .col-7
                h4.mb-0 Validación de marca
              .col-5
                img(src='@/assets/curso/tema5/img28.svg', alt='', style="max-width: 80px; max-height: 80px").mx-auto
            p.mb-0 Asegura el cumplimiento de los lineamientos visuales, comunicativos y estratégicos institucionales, fortaleciendo la identidad y coherencia de la marca.

          .tarjeta.bg-fondo-03.p-4.h-100.br-15
            .row.align-items-center.mb-3
              .col-7
                h4.mb-0 Programación
              .col-5
                img(src='@/assets/curso/tema5/img29.svg', alt='', style="max-width: 80px; max-height: 80px").mx-auto
            p.mb-0 Facilita organizar temporalmente las publicaciones, optimizando su frecuencia, oportunidad y alcance según los objetivos establecidos.

          .tarjeta.bg-fondo-03.p-4.h-100.br-15
            .row.align-items-center.mb-3
              .col-7
                h4.mb-0 Aprobación final
              .col-5
                img(src='@/assets/curso/tema5/img30.svg', alt='', style="max-width: 80px; max-height: 80px").mx-auto
            p.mb-0 Reduce riesgos asociados con errores, inconsistencias o incumplimientos normativos, verificando que el contenido cumpla los criterios definidos antes de publicarse.

    .row.align-items-center.mb-5.bg-color-015.p-4.br-15(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-flex
        img.d-none.d-lg-flex(src="@/assets/curso/tema5/img14.svg", style="max-width: 100px;").mx-auto
      .col-lg
        p.mb-0 La indexación de contenidos digitales corresponde al proceso mediante el cual los motores de búsqueda y plataformas tecnológicas organizan la información para facilitar su localización por parte de los usuarios. Factores como estructura del contenido, palabras clave y calidad informativa influyen en este proceso. Una adecuada indexación favorece la visibilidad de los contenidos y contribuye a mejorar las oportunidades de posicionamiento dentro de entornos digitales competitivos.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        .bg-color-07.p-4.br-15(data-aos="fade-right")
          p.text-bold.mb-2 Ejemplo aplicado.
          p.mb-0 La organización Consultores Plus enfrentaba dificultades relacionadas con errores de publicación y contenidos inconsistentes entre diferentes plataformas digitales. Estas situaciones afectaban la percepción profesional de la marca y generaban confusión entre los consumidores respecto a algunos servicios ofrecidos. Con el propósito de fortalecer sus procesos, diseñó protocolos de publicación que incluían etapas de revisión, aprobación y programación. Paralelamente optimizó la estructura de sus contenidos mediante criterios orientados a facilitar la indexación digital. Como resultado, mejoró la calidad de sus publicaciones, fortaleció la visibilidad de sus contenidos y consolidó una comunicación más coherente con sus objetivos comerciales.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema5/img22.png", data-aos="zoom-in")

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12.col-xl-8.mx-auto
        .bg-color-09.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img08.png", style="max-width: 150px;").mx-auto
            .col-lg-9.order-1.order-lg-2.p-4
              .bg-color-08.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold.text-white Clave estratégica
              p.mb-0 La calidad de un contenido también depende de los procesos implementados antes de su publicación.

    separador

    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Netiqueta

    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La netiqueta corresponde al conjunto de normas y principios de comportamiento que orientan la interacción responsable dentro de entornos digitales. Su aplicación permite promover relaciones respetuosas, claras y constructivas entre los participantes de una comunidad virtual. En las ventas en <em>social media</em>, la netiqueta adquiere una relevancia estratégica porque influye directamente en la percepción de profesionalismo, confianza y reputación de las organizaciones frente a consumidores y demás actores del entorno digital.

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12.mx-auto
        .tarjeta.bg-fondo-04.p-3
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema2/img04.png")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.max-cont-md.mx-auto.mx-lg-0.text-center.text-lg-start Netiqueta y comunicación en medios digitales
              p.mb-0 Lo invitamos a consultar el siguiente recurso educativo para profundizar en la temática abordada, el cual corresponde a un video que aborda el concepto de netiqueta como el conjunto de normas y recomendaciones que promueven una comunicación respetuosa y responsable en entornos digitales. Explica buenas prácticas relacionadas con el uso de redes sociales, la protección de la privacidad, el respeto por las comunidades virtuales, la gestión adecuada de contenidos y la interacción con otros usuarios.
            .col-12.col-lg-auto.text-center
              a.boton.bg-color-04(:href="'https://www.youtube.com/watch?v=KM-RhabB6qs'" target="_blank")
                span Ir al recurso
                i.fas.fa-link

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-6.mb-4.mb-lg-0
        .bg-color-015.br-15.h-100.overflow-hidden
          figure
            img(src="@/assets/curso/tema5/img24.png")
          .p-4
            h4 Normas
            p.mb-0 Las normas de netiqueta abarcan aspectos relacionados con respeto, claridad comunicativa, uso adecuado del lenguaje y consideración hacia los demás participantes. Estas orientaciones buscan favorecer ambientes digitales donde la interacción se desarrolle de manera ética y colaborativa. Para las organizaciones, aplicar principios de netiqueta contribuye a fortalecer la calidad de la atención al cliente y mejorar las relaciones construidas mediante plataformas digitales.

      .col-lg-6
        .bg-color-015.br-15.h-100.overflow-hidden
          figure
            img(src="@/assets/curso/tema5/img25.png")
          .p-4
            h4 Beneficios
            p.mb-0 Dentro de las estrategias comerciales digitales, la netiqueta también cumple una función preventiva al reducir conflictos derivados de malentendidos, respuestas inadecuadas o comportamientos poco profesionales. Cuando una organización establece lineamientos claros para la interacción digital, fortalece su capacidad para gestionar comunidades virtuales y construir experiencias positivas para sus consumidores. Esta práctica favorece la sostenibilidad de las relaciones comerciales y contribuye a consolidar una reputación digital sólida.

    .row.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12.col-xl-8.mx-auto
        .bg-color-01.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img30.png", style="max-width: 150px;").mx-auto
            .col-lg-9.order-1.order-lg-2.p-4
              .bg-color-10.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold.text-white Cita de reflexión
              p.mb-0 "La integridad se manifiesta no solo en lo que se publica, sino también en la forma en que se interactúa con cada persona dentro de los entornos digitales."

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
