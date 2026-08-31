<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Construcción de marca y comunicación persuasiva

    .bg-full-width.bg-fondo-1
    
      img(src="@/assets/curso/tema3/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-11(data-aos="fade-right")
          p.banner-text La construcción de marca y la comunicación persuasiva constituyen elementos esenciales dentro de las estrategias de ventas en <em>social media</em>. Su aplicación permite desarrollar identidades diferenciadas, fortalecer la percepción del consumidor y generar mensajes capaces de influir positivamente en los procesos de decisión de compra.<br>En mercados digitales altamente competitivos, las organizaciones requieren contenidos coherentes, relevantes y alineados con las expectativas de sus audiencias para consolidar relaciones comerciales sostenibles y fortalecer su posicionamiento.

      separador
      
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.1 Copywriting

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/img02.png", data-aos="zoom-in")
        .col-lg-7
          p.mb-3(data-aos="fade-right") El <em>copywriting</em> corresponde a la disciplina orientada a la creación de mensajes persuasivos diseñados para influir en comportamientos específicos del consumidor. Su propósito trasciende la simple redacción de textos, debido a que busca comunicar valor, despertar interés y motivar acciones comerciales concretas. En las ventas en <em>social media</em>, el <em>copywriting</em> permite transformar información sobre productos y servicios en mensajes capaces de conectar emocional y racionalmente con las necesidades de una audiencia determinada.

          .bg-color-09.p-4.br-15.mb-0(data-aos="fade-left")
            p.mb-0 La redacción creativa constituye uno de los pilares fundamentales del <em>copywriting</em> porque facilita presentar propuestas comerciales mediante enfoques atractivos y diferenciadores. Sin embargo, la creatividad debe complementarse con una correcta ortografía y una estructura coherente que garantice claridad comunicativa. Los errores gramaticales o de escritura afectan la credibilidad de la marca y pueden disminuir la confianza del consumidor. Por esta razón, la calidad lingüística se convierte en un elemento estratégico dentro de los procesos comerciales digitales.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        .bg-color-07.p-4.br-15(data-aos="fade-right")
          p.text-bold.mb-2 Ejemplo aplicado.
          p.mb-0 La organización Emprende Digital promocionaba programas de formación mediante publicaciones descriptivas centradas únicamente en características técnicas. Aunque los contenidos eran informativos, presentaban bajos niveles de interacción y conversión comercial. Después de analizar su estrategia, decidió implementar principios de <em>copywriting</em> orientados a comunicar beneficios y resultados esperados por los consumidores.<br>La nueva comunicación comenzó a destacar oportunidades de crecimiento profesional, aplicación práctica y generación de valor para los participantes. Además, se fortaleció la calidad ortográfica y la estructura argumentativa de los mensajes. Como resultado, la organización incrementó significativamente la interacción de sus publicaciones y mejoró el desempeño comercial de sus campañas digitales.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema3/img03.png", data-aos="zoom-in")


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 2.
          span Elementos estratégicos del copywriting
        .tabla-a.tb-custom.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th(width="30%") Elemento
                th(width="70%") Aplicación estratégica
            tbody
              tr
                td <b>Redacción creativa</b>
                td Permite presentar mensajes comerciales de manera atractiva y diferenciada.
              tr
                td <b>Ortografía</b>
                td Fortalece credibilidad, profesionalismo y confianza frente al consumidor digital.
              tr
                td <b>Persuasión</b>
                td Facilita influir en decisiones mediante argumentos relevantes y éticos.
              tr
                td <b>Propuesta de valor</b>
                td Comunica beneficios específicos alineados con necesidades del mercado objetivo.

    .row.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12.col-xl-8.mx-auto
        .bg-color-09.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img08.png", style="max-width: 150px;").mx-auto
            .col-lg-9.order-1.order-lg-2.p-4
              .bg-color-08.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold.text-white Clave estratégica
              p.mb-0 Un mensaje persuasivo resulta más efectivo cuando comunica beneficios concretos antes que características generales.
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Llamados a la acción y contenidos persuasivos

    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los llamados a la acción, conocidos como CTA, constituyen elementos comunicativos diseñados para orientar al consumidor hacia una acción específica dentro del proceso comercial. Su función consiste en reducir la incertidumbre y facilitar decisiones relacionadas con la interacción, el registro, la consulta o la compra. En las ventas en <em>social media</em>, los CTA actúan como puntos de conexión entre el interés generado por un contenido y la acción esperada por la organización.

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12.mx-auto
        .tarjeta.bg-fondo-04.p-3
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema2/img04.png")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.max-cont-md.mx-auto.mx-lg-0.text-center.text-lg-start Qué son los llamados a la acción o CTAs
              p.mb-0 Lo invitamos a consultar el siguiente recurso educativo para profundizar en la temática abordada. El recurso corresponde a un video que explica el concepto de llamado a la acción (<em>Call to Action</em> o CTA) y su importancia como herramienta para orientar el comportamiento de los usuarios en entornos digitales.
            .col-12.col-lg-auto.text-center
              a.boton.bg-color-04(:href="'https://www.youtube.com/watch?v=YlL4p5gEKtg'" target="_blank")
                span Ir al recurso
                i.fas.fa-link

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img06.png", data-aos="zoom-in")
      .col-lg-7
        p.mb-3(data-aos="fade-right") Los títulos y descripciones desempeñan un papel determinante dentro de la comunicación persuasiva porque representan los primeros elementos que el consumidor observa al interactuar con un contenido digital. Un título relevante capta atención y despierta curiosidad, mientras que una descripción adecuada complementa la información necesaria para generar interés. Cuando ambos elementos trabajan de manera integrada, incrementan significativamente las probabilidades de interacción y participación comercial.

        .bg-color-07.p-4.br-15.mb-0(data-aos="fade-left")
          p.mb-0 Los mensajes personalizados y las preguntas frecuentes fortalecen la experiencia del consumidor mediante comunicación adaptada a necesidades específicas. La personalización permite desarrollar relaciones más cercanas y relevantes, mientras que las preguntas frecuentes facilitan resolver inquietudes recurrentes antes de que se conviertan en barreras para la compra. Esta combinación favorece procesos comerciales más eficientes y contribuye a mejorar la percepción de la marca dentro de entornos digitales.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        .bg-color-015.p-4.br-15(data-aos="fade-right")
          p.text-bold.mb-2 Ejemplo aplicado.
          p.mb-0 La empresa SmartTech comercializaba dispositivos electrónicos mediante redes sociales. Aunque desarrollaba publicaciones visualmente atractivas, observaba bajos niveles de clics y consultas comerciales. Después de revisar su estrategia, identificó que los contenidos carecían de llamados a la acción claros y mensajes orientados a la participación del usuario. La organización rediseñó sus publicaciones incorporando títulos más específicos, descripciones enfocadas en beneficios y CTA relacionados con consulta, compra y asesoría personalizada. Además, implementó respuestas automatizadas basadas en preguntas frecuentes. Como resultado, aumentó significativamente la interacción comercial y mejoró los niveles de conversión asociados a sus contenidos digitales.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema3/img07.png", data-aos="zoom-in")

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Guiones técnicos para contenidos digitales

    .bg-full-width.bg-fondo-1

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/img08.png", data-aos="zoom-in")
        .col-lg-7
          p.mb-3(data-aos="fade-right") Los guiones técnicos constituyen herramientas de planificación utilizadas para estructurar contenidos digitales antes de su producción y publicación. Su función principal consiste en organizar de manera lógica los elementos visuales, textuales y audiovisuales que conforman una pieza comunicativa. Dentro de las ventas en <em>social media</em>, los guiones técnicos permiten garantizar coherencia entre los objetivos comerciales, el mensaje que se desea transmitir y la experiencia que recibirá el consumidor durante la interacción con el contenido.

          .bg-color-09.p-4.br-15(data-aos="fade-left")
            p.mb-0 La elaboración de un guion técnico favorece la optimización de recursos y reduce errores durante la producción de contenidos digitales. Cuando una organización define previamente la secuencia de escenas, mensajes, elementos gráficos y llamados a la acción, facilita la coordinación entre las diferentes actividades necesarias para desarrollar una publicación efectiva. Esta planificación contribuye a mantener consistencia comunicativa y fortalece la calidad de los contenidos difundidos mediante plataformas digitales.

      .bg-color-07.p-3.br-15.mb-5(data-aos="fade-right")
        p.mb-0 Para organizar la producción de contenidos digitales y asegurar que cada elemento responda al propósito de la comunicación, es necesario considerar los principales componentes de un guion técnico, entre ellos:

      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-lg-6.col-xl-5.col-md-12.mb-4
          .bg-color-015.p-4.br-15.h-100
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/tema3/img09.svg", style="max-width: 60px;").mx-auto
              .col
                h4.mb-1 Objetivo
                p.mb-0 Define el resultado comercial esperado mediante el contenido digital.

        .col-lg-6.col-xl-5.col-md-12.mb-4
          .bg-color-015.p-4.br-15.h-100
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/tema3/img10.svg", style="max-width: 60px;").mx-auto
              .col
                h4.mb-1 Escenas
                p.mb-0 Organizan visualmente la secuencia narrativa del mensaje comercial.

        .col-lg-6.col-xl-5.col-md-12.mb-4.mb-lg-0
          .bg-color-015.p-4.br-15.h-100
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/tema3/img11.svg", style="max-width: 60px;").mx-auto
              .col
                h4.mb-1 Mensajes
                p.mb-0 Comunican información relevante alineada con las necesidades del consumidor.

        .col-lg-6.col-xl-5.col-md-12
          .bg-color-015.p-4.br-15.h-100
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/tema3/img12.svg", style="max-width: 60px;").mx-auto
              .col
                h4.mb-1 <em>CTA</em>
                p.mb-0 Orienta la acción que se espera obtener del usuario digital.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img13.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-09.p-4.br-15(data-aos="fade-right")
          p.text-bold.mb-2 Ejemplo aplicado.
          p.mb-0 La empresa Urban Style desarrollaba videos para redes sociales de manera espontánea, sin una planificación estructurada. Aunque sus publicaciones eran frecuentes, existían inconsistencias en los mensajes, dificultades para destacar beneficios de los productos y bajos niveles de conversión comercial. La organización decidió implementar guiones técnicos para cada contenido audiovisual.<br>A partir de ese momento, cada video incluyó objetivos definidos, secuencia narrativa, presentación estratégica de productos y llamados a la acción específicos. Esta metodología permitió mejorar la calidad de los contenidos, fortalecer la coherencia de la comunicación y aumentar significativamente la interacción comercial generada mediante sus redes sociales.

    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Tono de marca

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img14.png", data-aos="zoom-in")
      .col-lg-7
        p.mb-3(data-aos="fade-right") El tono de marca corresponde a la forma particular mediante la cual una organización se comunica con sus audiencias. Representa la personalidad expresada a través de palabras, mensajes, estilos visuales y formatos utilizados en los diferentes puntos de contacto con el consumidor. En las ventas en <em>social media</em>, el tono de marca contribuye a construir identidad, generar reconocimiento y fortalecer la consistencia de la comunicación desarrollada mediante plataformas digitales.

        .bg-color-09.p-4.br-15(data-aos="fade-left")
          p.mb-0 Las palabras utilizadas por una organización desempeñan un papel determinante en la construcción del tono de marca. La selección de expresiones, vocabulario y estilos comunicativos influye directamente en la percepción del consumidor. Algunas marcas proyectan cercanía y espontaneidad, mientras otras priorizan profesionalismo, exclusividad o innovación. Esta elección debe responder a las características del público objetivo y a la propuesta de valor que la organización desea comunicar.

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg
        p.mb-0 El imaginario y los formatos de contenido complementan el tono de marca al proporcionar elementos visuales y narrativos coherentes con la identidad empresarial. Colores, imágenes, estilos gráficos y formatos de publicación contribuyen a reforzar las percepciones construidas mediante los mensajes. Cuando existe alineación entre lenguaje, identidad visual y formatos utilizados, se fortalece significativamente la capacidad de la marca para diferenciarse y generar recordación en entornos digitales.
      .col-lg-auto.d-none.d-lg-flex
        img.d-none.d-lg-flex(src="@/assets/curso/tema3/img16.svg", style="max-width: 100px;").mx-auto

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 3.
          span Elementos del tono de marca
        .tabla-a.tb-custom.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th(width="30%") Elemento
                th(width="70%") Aplicación estratégica
            tbody
              tr
                td <b>Palabras</b>
                td Definen el estilo comunicativo utilizado en mensajes comerciales digitales.
              tr
                td <b>Personalidad</b>
                td Refuerza atributos distintivos percibidos por los consumidores.
              tr
                td <b>Imaginario</b>
                td Integra elementos visuales coherentes con la identidad organizacional.
              tr
                td <b>Formato de contenido</b>
                td Adapta la comunicación según características de cada plataforma digital.

    .row.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12.col-xl-8.mx-auto
        .bg-color-09.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img08.png", style="max-width: 150px;").mx-auto
            .col-lg-9.order-1.order-lg-2.p-4
              .bg-color-08.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold.text-white Clave estratégica
              p.mb-0 Una marca consistente comunica de manera similar independientemente del canal o formato utilizado.

    separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Prisma de la marca

    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El prisma de la marca constituye un modelo estratégico utilizado para comprender y gestionar la identidad de una organización desde una perspectiva integral. Su importancia radica en que permite estructurar los elementos que influyen en la percepción construida por los consumidores, facilitando una comunicación coherente y diferenciada. Dentro de las ventas en <em>social media</em>, este modelo contribuye a fortalecer la consistencia de los mensajes y a consolidar una identidad alineada con los objetivos comerciales de la organización.

    .row.align-items-center.mb-5(data-aos="fade-right").bg-color-015.p-4.br-15
      .col-lg
        p.mb-0 La aplicación del prisma de la marca permite analizar la relación existente entre aspectos tangibles e intangibles que conforman la identidad empresarial. Este enfoque considera elementos relacionados con la personalidad proyectada, la forma de comunicación, los valores asociados, la percepción del consumidor y las relaciones construidas con la audiencia. Cuando estos componentes mantienen coherencia estratégica, se fortalece significativamente la capacidad de la organización para generar reconocimiento y confianza dentro de mercados digitales competitivos.
      .col-lg-auto.d-none.d-lg-flex
        img.d-none.d-lg-flex(src="@/assets/curso/tema3/img18.svg", style="max-width: 100px;").mx-auto

    .bg-full-width.bg-fondo-1
  
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-4.mb-lg-0.d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema3/img19.png", data-aos="zoom-in")
        .col-lg-7
          p.mb-3(data-aos="fade-right") En entornos digitales, el prisma de la marca facilita la construcción de experiencias consistentes a través de diferentes canales y formatos de contenido. Cada interacción desarrollada mediante redes sociales contribuye a reforzar o debilitar la identidad percibida por los consumidores. Por esta razón, las organizaciones utilizan este modelo como una herramienta para alinear comunicación, posicionamiento y experiencia del cliente, fortaleciendo relaciones comerciales sostenibles y diferenciadas.

          .bg-color-09.p-4.br-15(data-aos="fade-left")
            p.mb-0 Para comprender cómo se construye y gestiona la identidad de una marca en entornos digitales, es necesario reconocer los componentes que permiten definir su personalidad, relación con los consumidores, cultura e imagen percibida, entre ellos:

      .row.mb-5.justify-content-center.align-items-center
        .col-md-8.col-lg-5.mb-4.mb-lg-0.order-lg-2
          figure
            img(src="@/assets/curso/tema3/img20.png", data-aos="zoom-in")
        .col-lg-7.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Personalidad")
              p.mb-0 Define características humanas asociadas con la identidad de la marca.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Relación")
              p.mb-0 Describe la forma en que la marca interactúa con los consumidores y las audiencias.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Cultura")
              p.mb-0 Representa los valores y principios que orientan la actuación empresarial.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Imagen percibida")
              p.mb-0 Refleja la manera en que los consumidores interpretan la marca.


      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/img21.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-07.p-4.br-15(data-aos="fade-right")
            p.text-bold.mb-2 Ejemplo aplicado.
            p.mb-0 La empresa GreenWear experimentaba dificultades para diferenciarse dentro del mercado de moda sostenible. Aunque sus productos respondían a principios ambientales, los consumidores no percibían claramente los atributos que la organización deseaba comunicar. Con el propósito de fortalecer su identidad, decidió aplicar el prisma de la marca como herramienta de análisis estratégico. A partir de este ejercicio, identificó inconsistencias entre los valores comunicados, el estilo visual y los mensajes difundidos en redes sociales. Posteriormente ajustó su comunicación, fortaleció la coherencia de sus contenidos y alineó su experiencia digital con la propuesta de valor empresarial. Como resultado, mejoró el reconocimiento de marca y fortaleció la conexión emocional con sus consumidores.

      separador

      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.6 Contenidos digitales

    .bloque-texto-g.bg-color-014.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los contenidos digitales corresponden a piezas informativas, educativas, promocionales o de entretenimiento diseñadas para ser difundidas mediante plataformas tecnológicas y medios digitales. Su función principal consiste en generar valor para una audiencia específica mientras contribuyen al cumplimiento de objetivos comerciales y comunicativos. Dentro de las ventas en <em>social media</em>, los contenidos constituyen uno de los principales mecanismos para atraer consumidores, construir confianza y favorecer procesos de conversión.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.order-2.order-lg-1
        .bg-color-015.p-3.br-15.mb-3(data-aos="fade-right")
          p.mb-0 La estrategia de contenidos implica planificar, producir y distribuir información alineada con las necesidades de la audiencia y los objetivos de la organización. Una estrategia efectiva considera variables relacionadas con segmentación, posicionamiento, tono de marca y comportamiento del consumidor. Cuando los contenidos responden a intereses reales y aportan valor tangible, aumentan significativamente las probabilidades de generar interacción, participación y recordación dentro de entornos digitales altamente competitivos.

        p.mb-0(data-aos="fade-right") Los contenidos digitales pueden presentarse en diferentes tipos y formatos según las características de la plataforma y la audiencia objetivo. Entre los formatos más utilizados se encuentran infografías, videos, <em>newsletter</em>, <em>blogs</em>, pódcasts, imágenes, tutoriales, <em>webinars</em>, <em>reels</em> y <em>stories</em>. Cada formato posee ventajas específicas relacionadas con alcance, profundidad informativa y nivel de interacción, por lo que su selección debe responder a criterios estratégicos alineados con los objetivos comerciales establecidos.
      .col-lg-4.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img23.png", data-aos="zoom-in")

    .row.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12.col-xl-8.mx-auto
        .bg-color-01.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img30.png", style="max-width: 150px;").mx-auto
            .col-lg-9.order-1.order-lg-2.p-4
              .bg-color-10.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold.text-white Cita de reflexión
              p.mb-0 "La construcción de una marca sólida requiere coherencia entre lo que se comunica, lo que se hace y los valores que orientan cada decisión comercial."

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
