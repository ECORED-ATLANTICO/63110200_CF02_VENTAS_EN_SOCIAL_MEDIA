<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Campañas

  //
    .bg-full-width.bg-fondo-1

      .row.mb-4.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-0.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema7/img02.png", data-aos="zoom-in")
        .col-lg-9.order-2.order-lg-1.mb-4.mb-lg-0

          .row.mb-3.justify-content-center.align-items-center
            .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
              figure
                img(src="@/assets/curso/tema7/img01.png", data-aos="zoom-in")
            .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
              .bg-color-07.p-4
                p.mb-0(data-aos="fade-right") Las campañas digitales representan estrategias organizadas orientadas a promover productos, fortalecer posicionamiento y generar interacción mediante plataformas digitales y redes sociales. Actualmente, las organizaciones utilizan campañas comerciales para conectar con consumidores, fortalecer reconocimiento de marca y optimizar procesos relacionados con ventas digitales. 

          .bg-fondo-08.p-4.mb-0
            p.mb-0 Estas acciones integran contenidos, segmentación y herramientas tecnológicas alineadas con objetivos estratégicos empresariales. Este capítulo desarrolla conceptos, tipos y usos de campañas aplicadas a procesos comerciales digitales y estrategias relacionadas con ventas en <em>social media</em>.

      separador
      
      #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 7.1 Conceptos

      .bloque-texto-g.bg-color-13.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema7/img03.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Las campañas digitales corresponden a conjuntos de acciones estratégicas organizadas para alcanzar objetivos comerciales específicos mediante plataformas digitales y redes sociales, estas estrategias integran contenidos, segmentación y herramientas orientadas a fortalecer posicionamiento, interacción y conversión comercial. Actualmente, las organizaciones desarrollan campañas digitales para conectar con consumidores y fortalecer experiencias relacionadas con productos y servicios. Su implementación permite optimizar recursos comerciales y mejorar resultados relacionados con visibilidad, reconocimiento y comportamiento del consumidor digital contemporáneo.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema7/img04.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        h4 Ejemplo aplicado. Campaña digital en “Urban Style”
        p.mb-3(data-aos="fade-right") El negocio “Urban Style” presentaba bajo alcance digital y poca interacción comercial mediante redes sociales relacionadas con moda urbana. Inicialmente, realizaba publicaciones aisladas sin objetivos definidos ni estrategias relacionadas con segmentación, promoción y posicionamiento comercial dentro de plataformas digitales utilizadas por sus consumidores digitales. 

        .bg-fondo-09.p-4.mb-0
          p.mb-0 Posteriormente, implementó una campaña digital enfocada en lanzamiento de nueva colección juvenil mediante Instagram y TikTok. La estrategia integró contenido audiovisual, promociones limitadas y publicaciones interactivas. Como resultado, incrementó participación digital, fortaleció reconocimiento de marca y mejoró procesos relacionados con captación de clientes y ventas digitales contemporáneas.


    separador
    
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Tipos

    img(src="@/assets/curso/tema7/img05.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text Los tipos de campañas digitales permiten clasificar estrategias comerciales según objetivos, formatos y dinámicas de interacción desarrolladas en plataformas digitales, esta clasificación facilita seleccionar acciones adecuadas según necesidades relacionadas con posicionamiento, conversión y fidelización comercial. Dentro de las campañas más utilizadas se encuentran campañas de reconocimiento, interacción, conversión y <em>remarketing</em>. Comprender estas tipologías fortalece toma de decisiones estratégicas y mejora procesos relacionados con comunicación comercial y comportamiento del consumidor digital contemporáneo.

    .bg-full-width.bg-fondo-1

      .row.mb-5.justify-content-center.align-items-center
        .col-md-8.col-lg-5.mb-4.mb-lg-0.order-lg-1
          figure
            img(src="@/assets/curso/tema7/img06.png", data-aos="zoom-in")
        .col-lg-7.order-lg-2
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Reconocimiento")
              h4 Reconocimiento
              p.mb-0 Busca fortalecer la visibilidad y el posicionamiento mediante contenidos orientados al alcance digital empresarial estratégico contemporáneo actual.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Interacción")
              h4 Interacción
              p.mb-0 Favorece la participación del consumidor mediante comentarios, dinámicas y contenidos interactivos relacionados con experiencias digitales actuales.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Conversión")
              h4 Conversión
              p.mb-0 Se orienta a generar compras, registros y acciones comerciales mediante estrategias digitales segmentadas estratégicamente actuales.

            .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Remarketing</em>")
              h4 <em>Remarketing</em>
              p.mb-0 Permite impactar nuevamente a usuarios interesados previamente en contenidos o productos relacionados con campañas digitales empresariales actuales.

      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-8.mx-auto
          .bg-color-07.br-15.mb-0
            .row.align-items-center.justify-content-center(data-aos="fade-right")
              .col-lg-auto.d-none.d-lg-block.order-lg-1
                img(src="@/assets/curso/tema1/img08.png").mx-auto
              .col-lg-7.order-lg-2.p-4
                .bg-color-06.p-2.mb-2.max-cont-md
                  h4.mb-0.text-bold Pregunta de aplicación
                p.mb-0 ¿Qué diferencias deberían existir entre una campaña orientada a reconocimiento y otra enfocada en conversión comercial?

      separador
      
      #t_7_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 7.3 Usos

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema7/img07.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          p.mb-0 Las campañas digitales poseen múltiples usos estratégicos relacionados con posicionamiento, interacción y fortalecimiento de procesos comerciales desarrollados en plataformas digitales. Actualmente, las organizaciones utilizan campañas para promocionar productos, captar clientes y fortalecer el reconocimiento de marca dentro de mercados altamente competitivos. Estas estrategias permiten optimizar la comunicación comercial y mejorar las experiencias relacionadas con la interacción digital. Los usos de campañas también facilitan la recopilación de métricas y fortalecen la toma de decisiones orientada a la conversión y a la fidelización comercial contemporánea.

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema7/img08.png", alt="Posicionamiento comercial")
          .crd_hover_txt--body
            h4.mb-3.text-center Posicionamiento comercial
            p.mb-0 Permite fortalecer el reconocimiento empresarial mediante campañas orientadas a la identidad y diferenciación digital estratégica contemporánea actual.

      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema7/img09.png", alt="Generación de ventas")
          .crd_hover_txt--body
            h4.mb-3.text-center Generación de ventas
            p.mb-0 Favorece procesos de conversión comercial mediante promociones y contenidos digitales orientados al consumidor identificado previamente.

      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema7/img10.png", alt="Fidelización digital")
          .crd_hover_txt--body
            h4.mb-3.text-center Fidelización digital
            p.mb-0 Facilita la construcción de relaciones sostenibles mediante interacción constante y experiencias personalizadas digitales actuales contemporáneas.

      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema7/img11.png", alt="Lanzamiento de productos")
          .crd_hover_txt--body
            h4.mb-3.text-center Lanzamiento de productos
            p.mb-0 Ayuda a divulgar novedades comerciales mediante estrategias digitales relacionadas con el alcance e interacción empresarial contemporánea actual.

    .row.align-items-center(data-aos="fade-right")
      .col-lg-8.mx-auto
        .bg-color-01.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img19.png", style="max-width: 150px;").mx-auto
            .col-lg-9.order-1.order-lg-2.p-4
              .bg-color-10.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold.text-white Cita de reflexión
              p.mb-0 “Las campañas digitales generan mayor impacto cuando la comunicación comercial se fundamenta en honestidad, coherencia y respeto hacia el consumidor”.

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de data
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
