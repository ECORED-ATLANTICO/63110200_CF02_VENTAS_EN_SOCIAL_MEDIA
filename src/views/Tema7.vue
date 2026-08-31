<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Entrega y garantía

    .bg-full-width.bg-fondo-1
    
      img(src="@/assets/curso/tema7/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-11(data-aos="fade-right")
          p.banner-text La entrega y la garantía constituyen etapas fundamentales dentro de los procesos comerciales digitales porque representan la materialización de los compromisos adquiridos durante la venta. La experiencia del consumidor no finaliza con el pago, sino que continúa mediante la recepción del producto o servicio y el respaldo ofrecido por la organización. En las ventas en <em>social media</em>, una adecuada gestión de la entrega y la garantía contribuye a fortalecer la satisfacción, la confianza y la fidelización, generando relaciones comerciales sostenibles y una percepción positiva de la marca.

      separador
      
      #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 7.1 Sistemas de entrega

      .bloque-texto-g.bg-color-017.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema7/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los sistemas de entrega corresponden al conjunto de procesos, recursos y mecanismos utilizados para hacer llegar un producto o servicio al consumidor después de la compra. Su importancia estratégica radica en que constituyen uno de los principales puntos de contacto entre la organización y el cliente durante la etapa posterior a la venta. En entornos digitales, una entrega eficiente fortalece la experiencia del consumidor y contribuye significativamente a la percepción de calidad asociada con la marca.

      .row.align-items-center.bg-color-09.p-4.mb-5.br-15(data-aos="fade-right")
        .col-lg
          p.mb-0 Los tipos de sistemas de entrega varían según la naturaleza del producto, las características del mercado y las capacidades operativas de la organización. Entre las alternativas más utilizadas se encuentran la entrega domiciliaria, la recogida en punto físico, la distribución mediante operadores logísticos especializados y la entrega digital para productos o servicios virtuales. Cada modalidad presenta ventajas específicas relacionadas con cobertura, tiempos de respuesta y experiencia del usuario.
        .col-lg-auto.d-none.d-lg-flex
          img.d-none.d-lg-flex(src="@/assets/curso/tema7/img03.svg", style="max-width: 100px;").mx-auto

    p.mb-4 En este contexto, los sistemas de entrega pueden implementarse mediante diferentes alternativas que responden a las necesidades del consumidor y a las características del proceso comercial, entre ellas:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema7/img04.png", data-aos="zoom-in")
      .col-lg-8
        .bg-fondo-02.p-4.br-15
          SlyderA(tipo="b").bg-color-white.p-3.tarjeta
            .tarjeta.p-3
              h4.mb-3 Entrega domiciliaria:
              p.mb-0 Facilita la recepción del producto en la ubicación del consumidor.<br><b>Ejemplo:</b> una tienda virtual envía un pedido directamente al domicilio del cliente.

            .tarjeta.p-3
              h4.mb-3 Punto de recogida:
              p.mb-0 Permite al cliente retirar productos según disponibilidad y conveniencia.<br><b>Ejemplo:</b> el consumidor recoge su compra en un casillero o punto autorizado.

            .tarjeta.p-3
              h4.mb-3 Operador logístico:
              p.mb-0 Amplía la cobertura mediante servicios especializados de distribución comercial.<br><b>Ejemplo:</b> una empresa contrata un operador para distribuir pedidos en diferentes ciudades.

            .tarjeta.p-3
              h4.mb-3 Entrega digital:
              p.mb-0 Facilita el acceso inmediato a productos y servicios virtuales.<br><b>Ejemplo:</b> un cliente recibe acceso inmediato a un curso digital después de realizar el pago.

    .bg-fondo-11.p-4.br-15.mb-5(data-aos="fade-right")
      p.mb-0 Los usos estratégicos de los sistemas de entrega trascienden la simple distribución física de productos. Una gestión eficiente permite fortalecer la satisfacción del consumidor, reducir reclamaciones y mejorar la percepción de cumplimiento organizacional. Cuando las empresas comunican claramente condiciones, tiempos y procedimientos relacionados con la entrega, incrementan la confianza de sus clientes y fortalecen la sostenibilidad de las relaciones comerciales desarrolladas mediante canales digitales.

    .bg-full-width.bg-fondo-1
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          .bg-color-07.p-4.br-15(data-aos="fade-right")
            p.text-bold.mb-2 Ejemplo aplicado.
            p.mb-0 La empresa HomeTech comercializaba productos para el hogar mediante redes sociales y comercio electrónico. Aunque sus campañas generaban resultados positivos, enfrentaba frecuentes reclamaciones relacionadas con retrasos en las entregas y falta de información sobre el estado de los pedidos. Estas situaciones afectaban la satisfacción de los consumidores y generaban comentarios negativos en plataformas digitales. Con el propósito de mejorar la experiencia postventa, implementó un sistema de seguimiento de pedidos y estableció protocolos claros de comunicación durante todo el proceso de entrega. Como resultado, disminuyeron las reclamaciones, aumentó la confianza de los consumidores y mejoró significativamente la percepción de la marca dentro de sus canales digitales.
        .col-lg-4.col-md-8
          figure
            img(src="@/assets/curso/tema7/img05.png", data-aos="zoom-in")

      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-12.col-xl-8.mx-auto
          .bg-color-09.br-15.mb-0
            .row.align-items-center.justify-content-center(data-aos="fade-right")
              .col-lg-auto.d-none.d-lg-block.order-lg-1
                img(src="@/assets/curso/tema1/img08.png", style="max-width: 150px;").mx-auto
              .col-lg-9.order-1.order-lg-2.p-4
                .bg-color-08.p-2.mb-2.max-cont-md
                  h4.mb-0.text-bold.text-white Clave estratégica
                p.mb-0 La experiencia de compra se consolida cuando la entrega cumple las expectativas generadas durante la venta.

      separador
      
      #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 7.2 Garantía

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema7/img06.png", data-aos="zoom-in")
        .col-lg-7
          p.mb-3(data-aos="fade-right") La garantía corresponde al compromiso asumido por una organización respecto a la calidad, funcionalidad y condiciones ofrecidas sobre un producto o servicio. Su finalidad consiste en proteger los derechos del consumidor y proporcionar mecanismos de solución cuando los bienes o servicios adquiridos no cumplen con las condiciones inicialmente pactadas. Dentro de las ventas en <em>social media</em>, la garantía representa un factor estratégico que fortalece la confianza y reduce la percepción de riesgo durante los procesos de compra digital.

          .bg-fondo-07.p-4.br-15(data-aos="fade-left")
            p.mb-0 En Colombia, la garantía se encuentra respaldada por disposiciones legales relacionadas con la protección del consumidor, particularmente mediante la Ley 1480 de 2011 o Estatuto del Consumidor. Esta normativa establece derechos, deberes y procedimientos orientados a garantizar condiciones de calidad, idoneidad y seguridad en productos y servicios comercializados. El conocimiento y aplicación de estos lineamientos permiten a las organizaciones actuar de manera responsable y fortalecer el cumplimiento de sus compromisos comerciales.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 10.
          span Aspectos normativos relacionados con garantía
        .tabla-a.tb-custom.mb-0
          table
            caption Nota. Elaboración propia con base en Ley 1480 de 2011.
            thead
              tr
                th(width="35%") Aspecto
                th(width="65%") Aplicación estratégica
            tbody
              tr
                td <b>Estatuto del Consumidor</b>
                td Establece derechos y deberes aplicables a relaciones comerciales.
              tr
                td <b>Calidad del producto</b>
                td Exige cumplimiento de condiciones informadas al consumidor.
              tr
                td <b>Atención de reclamaciones</b>
                td Define mecanismos para gestionar solicitudes y requerimientos.
              tr
                td <b>Protección al consumidor</b>
                td Favorece relaciones comerciales transparentes y responsables.

    .row.align-items-center.mb-5.bg-color-015.p-4.br-15(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-flex.order-lg-2
        img.d-none.d-lg-flex(src="@/assets/curso/tema7/img07.svg", style="max-width: 100px;").mx-auto
      .col-lg.order-lg-1
        p.mb-0 Desde una perspectiva comercial, la garantía cumple una función que va más allá del cumplimiento normativo. Su adecuada gestión contribuye a consolidar relaciones de confianza y favorece la construcción de una reputación empresarial sólida. Cuando los consumidores perciben respaldo frente a posibles inconvenientes, aumentan las probabilidades de concretar compras y recomendar la organización a otros usuarios. Por esta razón, la garantía constituye un elemento relevante dentro de las estrategias de fidelización y experiencia del cliente.

    .row.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12.col-xl-8.mx-auto
        .bg-color-01.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img30.png", style="max-width: 150px;").mx-auto
            .col-lg-9.order-1.order-lg-2.p-4
              .bg-color-10.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold.text-white Cita de reflexión
              p.mb-0 "Cumplir lo prometido después de la venta es una de las expresiones más visibles de la integridad empresarial."

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
