<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-0.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        .row.mb-3.justify-content-center.align-items-center
          .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
            figure
              img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in")
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            p.mb-0(data-aos="fade-right") Las ventas en social media constituyen una disciplina estratégica que integra procesos comerciales, comunicación digital y análisis del comportamiento del consumidor para generar oportunidades de negocio en entornos digitales. Su aplicación permite a las organizaciones identificar audiencias, construir relaciones comerciales y desarrollar acciones orientadas a la conversión, fidelización y crecimiento empresarial mediante plataformas digitales y redes sociales.
           
        .bg-fondo-01.br-15.mb-0.p-4
            p.mb-0 El componente aborda los fundamentos estratégicos, tácticos y operativos de las ventas en social media a través del análisis de conceptos, herramientas, metodologías y aplicaciones prácticas. El contenido será desarrollado mediante ejemplos empresariales, casos aplicados y escenarios comerciales que permitan comprender cómo las organizaciones utilizan medios digitales, contenidos y estrategias comerciales para alcanzar objetivos de posicionamiento, interacción y resultados de negocio.
    

</template>

<script>
export default {
  name: 'Introduccion',
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
