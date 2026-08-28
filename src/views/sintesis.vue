<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-12
        p.mb-3(data-aos="fade-right") El componente formativo Operación comercial digital ofrece al aprendiz conocimientos y herramientas orientados al desarrollo de estrategias de ventas en <em>social media</em>, integrando procesos relacionados con planificación comercial, segmentación de audiencias, construcción de marca y creación de contenidos digitales. A lo largo de su desarrollo se abordan metodologías, herramientas tecnológicas y enfoques estratégicos que fortalecen la capacidad para interactuar con consumidores digitales y gestionar procesos comerciales orientados a resultados.

        p.mb-0(data-aos="fade-left") De manera complementaria, el componente profundiza en aspectos relacionados con conversión, medios de pago, experiencia postventa, análisis comercial y medición de resultados mediante métricas e indicadores clave de desempeño. Esta integración permite comprender las diferentes etapas del proceso comercial digital y fortalecer competencias orientadas a la toma de decisiones, la optimización de estrategias y la construcción de relaciones sostenibles con los consumidores dentro de entornos digitales contemporáneos.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="La ilustración muestra la estructura jerárquica que sintetiza el contenido del componente formativo “Operación comercial digital”, el cual se organiza en ocho unidades. Inicia con estrategia comercial en social media en donde se abordan los conceptos de venta, objetivos SMART, producto, marketing online, embudo de ventas y canales de venta de social media. El capítulo dos corresponde a segmentación y posicionamiento comercial digital	, allí se ve lo correspondiente a segmentación, posicionamiento, leads magnet, palabras clave e intenciones de búsqueda e insights. El capítulo tres corresponde a construcción de marca y comunicación persuasiva, en donde se copywriting, llamados a la acción y contenidos persuasivos, guiones técnicos para contenidos digitales, tono de marca, prisma de la marca y contenidos digitales. El capítulo cuatro aborda la temática de producción de contenidos digitales, en donde se desarrollan los conceptos de plataformas de inteligencia artificial, plataformas de diseño y edición multimedia, técnicas básicas de edición de imagen, técnicas básicas de edición de video y medios digitales. El capítulo cinco aborda la planificación, publicación y optimización de contenidos, allí se ve parrilla de contenidos, calendario de publicaciones, divulgación de contenido digital, protocolos de publicación e indexación de contenidos digitales y netiqueta. El capítulo seis aborda el cierre de ventas digitales con los conceptos de conversión y medios de pago. El capítulo siete desarrolla entrega y garantía, explícitamente con los conceptos de sistemas de entrega y garantía. Culmina el componente con el capítulo ocho en donde se desarrolla el análisis comercial a partir de los conceptos de reporte, métricas de ventas y KPIs.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
