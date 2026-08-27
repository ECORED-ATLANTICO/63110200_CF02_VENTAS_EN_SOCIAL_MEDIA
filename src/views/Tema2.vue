<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Información personal
  //  
    .bg-full-width.bg-fondo-1

      .row.mb-4.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
          figure
            img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in")
        .col-lg-9.order-1.order-lg-1.mb-4.mb-lg-0

          .row.mb-3.justify-content-center.align-items-center
            .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
              figure
                img(src="@/assets/curso/tema2/img01.png", data-aos="zoom-in")
            .col-lg-7.order-2.order-lg-2.mb-4.mb-lg-0
              .bg-color-07.p-4
                p.mb-0(data-aos="fade-right") La información personal constituye uno de los recursos más relevantes dentro de los entornos digitales y comerciales contemporáneos. Actualmente, las organizaciones recopilan, almacenan y analizan datos relacionados con consumidores para desarrollar estrategias comerciales, segmentar audiencias y personalizar experiencias digitales.

          .bg-fondo-03.p-4.mb-3
            p.mb-0 Sin embargo, este proceso también implica responsabilidades éticas y normativas relacionadas con privacidad, protección y uso adecuado de los datos.

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .cajon.bg-color-01.p-4
            p.mb-0 Este capítulo desarrolla aspectos relacionados con el concepto, la tipología, los usos, los componentes y la normativa de la información personal aplicada a procesos comerciales y ventas en <em>social media</em>.

      separador
      
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Concepto
      
      img(src="@/assets/curso/tema2/img04.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-11(data-aos="fade-right")
          p.banner-text La información personal corresponde al conjunto de datos que permiten identificar o relacionar a una persona dentro de contextos físicos y digitales. Estos datos pueden incluir nombres, documentos de identidad, direcciones, correos electrónicos, números telefónicos y hábitos de consumo digital. En procesos comerciales digitales, la información personal se convierte en un recurso estratégico para comprender comportamientos y fortalecer experiencias comerciales. Su adecuada gestión resulta fundamental para garantizar confianza, transparencia y cumplimiento normativo en entornos digitales.


    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Tipología

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img05.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-0(data-aos="fade-right") La información personal puede clasificarse según el nivel de sensibilidad, la finalidad de uso y las características relacionadas con la identificación del titular. Esta tipología permite establecer medidas de tratamiento y protección acordes con los riesgos asociados al manejo de datos. Dentro de las clasificaciones más utilizadas se encuentran datos públicos, privados, sensibles y semiprivados. Comprender estas categorías resulta fundamental para organizaciones que desarrollan estrategias comerciales y procesos digitales orientados a interacción con consumidores y recopilación de información.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10.mb-4.mb-lg-4.mb-xl-0  
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 2.
          span Tipos de información personal
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table(style="min-width:440px")
            caption <span style="font-weight: normal">Nota. Elaboración propia con base en la Ley 1581 de 2012.</span>
            thead
              tr
                th(width="30%") Tipo de información
                th(width="70%") Características estratégicas
            tbody
              tr
                td Pública
                td Puede consultarse sin restricciones relevantes y suele utilizarse en procesos informativos y comerciales generales digitales.
              tr
                td Privada
                td Incluye información reservada relacionada con aspectos personales, financieros y hábitos específicos del consumidor digital identificado.
              tr
                td Sensible
                td Requiere protección reforzada debido a riesgos asociados con privacidad, discriminación y vulneración de derechos personales.
              tr
                td Semiprivada
                td Se utiliza en contextos comerciales específicos y requiere autorización para tratamiento dentro de procesos digitales empresariales.

    .row.align-items-center(data-aos="fade-right")
      .col-lg-8.mx-auto
        .bg-color-09.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema2/img06.png", style="max-width: 150px;").mx-auto
            .col-lg-9.order-1.order-lg-2.p-4
              .bg-color-08.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold.text-white Clave estratégica
              p.mb-0 Clasificar correctamente la información personal permite implementar tratamientos responsables y fortalecer la confianza dentro de entornos digitales comerciales.


    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Usos
    
    .bg-full-width.bg-fondo-1


      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema2/img07.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          p.mb-3(data-aos="fade-right") La información personal cumple funciones estratégicas dentro de procesos comerciales digitales, debido a que permite comprender comportamientos, necesidades y preferencias de los consumidores. Las organizaciones utilizan datos personales para segmentar audiencias, personalizar campañas y fortalecer experiencias de interacción en plataformas digitales, este uso estratégico facilita procesos de comunicación más precisos y orientados a objetivos comerciales específicos. Actualmente, el análisis de información personal representa una herramienta fundamental para optimizar decisiones relacionadas con ventas digitales y posicionamiento comercial.

          .cajon.bg-color-09.p-4
            p.mb-0 Las empresas utilizan información personal para diseñar campañas digitales alineadas con intereses específicos de sus consumidores. Plataformas como Netflix analizan hábitos de navegación y preferencias audiovisuales para recomendar contenidos personalizados y fortalecer la permanencia de usuarios. Este uso de datos incrementa interacción y mejora la experiencia digital mediante estrategias ajustadas a comportamientos identificados previamente. 



      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/img13.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0
          SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
            .tarjeta.bg-fondo-04.p-4.h-100.br-15
              .row.align-items-center.mb-3
                .col-7
                  h4.mb-0 Segmentación comercial
                .col-5
                  img(src='@/assets/curso/tema2/img09.svg' alt='Segmentación comercial', style="max-width: 80px;").mx-auto
              p.mb-0 Permite clasificar consumidores según comportamientos e intereses para fortalecer campañas digitales personalizadas y efectivas.

            .tarjeta.bg-fondo-04.p-4.h-100.br-15
              .row.align-items-center.mb-3
                .col-7
                  h4.mb-0 Personalización digital
                .col-5
                  img(src='@/assets/curso/tema2/img10.svg' alt='Personalización digital', style="max-width: 80px;").mx-auto
              p.mb-0 Facilita adaptar mensajes, contenidos y promociones según preferencias específicas identificadas mediante interacción comercial constante.

            .tarjeta.bg-fondo-04.p-4.h-100.br-15
              .row.align-items-center.mb-3
                .col-7
                  h4.mb-0 Automatización comercial
                .col-5
                  img(src='@/assets/curso/tema2/img11.svg' alt='Automatización comercial', style="max-width: 80px;").mx-auto
              p.mb-0 Favorece procesos automáticos relacionados con recomendaciones, mensajes y campañas orientadas a conversión digital estratégica.

            .tarjeta.bg-fondo-04.p-4.h-100.br-15
              .row.align-items-center.mb-3
                .col-7
                  h4.mb-0 Fidelización de clientes
                .col-5
                  img(src='@/assets/curso/tema2/img12.svg' alt='Fidelización de clientes', style="max-width: 80px;").mx-auto
              p.mb-0 Fortalece relaciones comerciales mediante experiencias digitales ajustadas a necesidades y expectativas del consumidor identificado previamente.

      .row.align-items-center(data-aos="fade-right")
        .col-lg-8.mx-auto
          .bg-color-07.br-15.mb-0
            .row.align-items-center.justify-content-center(data-aos="fade-right")
              .col-lg-auto.d-none.d-lg-block.order-lg-1
                img(src="@/assets/curso/tema2/img14.png").mx-auto
              .col-lg-7.order-lg-2.p-4
                .bg-color-06.p-2.mb-2.max-cont-md
                  h4.mb-0.text-bold Pregunta de aplicación
                p.mb-0 ¿Cómo podría una empresa utilizar información personal autorizada para fortalecer sus campañas comerciales digitales sin afectar la privacidad?

      separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Componentes


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img15.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La información personal se encuentra integrada por diferentes componentes utilizados para identificar, caracterizar y comprender consumidores dentro de entornos digitales y comerciales, estos componentes permiten estructurar bases de datos organizadas y fortalecer procesos relacionados con segmentación, análisis comercial y personalización de experiencias digitales. 
        
        .cajon.bg-color-01.p-4
          p.mb-0 Actualmente, las organizaciones recopilan múltiples tipos de información para optimizar estrategias comerciales y comprender dinámicas de interacción de sus clientes, la adecuada identificación de estos elementos fortalece decisiones estratégicas relacionadas con <em>social media</em> y ventas digitales.


    TabsC.color-primario(data-aos="zoom-in")
      .p-3.p-md-4(titulo="Identificación")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.p-4
            h4 Identificación
            p Permite reconocer usuarios mediante nombres, documentos y datos básicos utilizados en procesos comerciales digitales actuales.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img16.png', alt='Identificación')
      .p-3.p-md-4(titulo="Contacto")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.p-4
            h4 Contacto
            p Facilita comunicación empresarial mediante correos electrónicos, teléfonos y plataformas digitales utilizadas por consumidores identificados.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img17.png', alt='Contacto')
      .p-3.p-md-4(titulo="Ubicación")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.p-4
            h4 Ubicación
            p Ayuda a segmentar campañas comerciales según contexto geográfico y dinámicas territoriales relacionadas con el consumidor digital.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img18.png', alt='Ubicación')
      .p-3.p-md-4(titulo="Comportamiento digital")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.p-4
            h4 Comportamiento digital
            p Analiza hábitos de interacción, navegación y consumo para fortalecer procesos comerciales personalizados y estratégicos digitales.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img19.png', alt='Comportamiento digital')

    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Normativa

    .bg-full-width.bg-fondo-1

      .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img20.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La normativa relacionada con la información personal establece principios, derechos y obligaciones orientados a garantizar el tratamiento adecuado de datos en entornos físicos y digitales. Estas disposiciones buscan proteger la privacidad, la seguridad y la autonomía de las personas frente al uso de la información por parte de organizaciones públicas y privadas. En contextos comerciales digitales, el cumplimiento normativo fortalece la confianza y legitimidad empresarial. Actualmente, las empresas deben implementar políticas y procedimientos ajustados a regulaciones relacionadas con la protección y tratamiento responsable de datos personales.


      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/img21.png", data-aos="zoom-in").mx-auto
        .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
          p.mb-0(data-aos="fade-right") En Colombia, la Ley 1581 de 2012 establece disposiciones generales relacionadas con la protección de datos personales y los derechos de los titulares de información; esta normativa exige autorización previa para recopilar, almacenar y utilizar datos personales dentro de procesos comerciales y digitales. Empresas como Bancolombia implementan políticas de privacidad y mecanismos de consentimiento orientados a garantizar el cumplimiento normativo. Estas acciones fortalecen la transparencia organizacional y disminuyen los riesgos asociados con el uso inadecuado de información digital sensible.

      .row.mb-5.mb-lg-5.justify-content-center.align-items-center
        .col-lg-4.col-md-10.mb-0.mb-lg-0.order-2.order-lg-1
          figure
            img(src="@/assets/curso/tema2/img22.png", data-aos="zoom-in").mx-auto
        .col-lg-8.col-md-12.order-1.order-lg-2.mb-4.mb-lg-0
          .bg-fondo-05.p-4
            SlyderA(tipo="b").bg-color-white.p-3.tarjeta
              .tarjeta.p-2.p-lg-4.h-100.mb-0
                h4 Legalidad
                p.mb-0 Garantiza que el tratamiento de datos personales se realice conforme a disposiciones normativas y jurídicas vigentes.

              .tarjeta.p-2.p-lg-4.h-100.mb-0
                h4 Transparencia
                p.mb-0 Permite informar claramente al consumidor sobre uso, almacenamiento y tratamiento de información personal recopilada digitalmente.

              .tarjeta.p-2.p-lg-4.h-100.mb-0
                h4 Seguridad
                p.mb-0 Exige implementar medidas técnicas y administrativas para proteger información personal frente a riesgos digitales existentes.

              .tarjeta.p-2.p-lg-4.h-100.mb-0
                h4 Confidencialidad
                p.mb-0 Garantiza protección y reserva de información personal utilizada dentro de procesos comerciales y plataformas digitales empresariales.

      .row.align-items-center(data-aos="fade-right")
        .col-lg-12.mx-auto
          .cajon.bg-color-07.p-4.mb-5
            p.mb-0 El cumplimiento normativo representa un factor estratégico para organizaciones que desarrollan procesos comerciales mediante plataformas digitales y redes sociales. Las empresas que implementan prácticas responsables relacionadas con el tratamiento de datos fortalecen la reputación y mejoran la percepción de seguridad frente a los consumidores digitales. Empresas de comercio electrónico como Mercado Libre incorporan políticas visibles de protección de datos para fortalecer la confianza y la transparencia; estas acciones permiten desarrollar estrategias comerciales sostenibles y coherentes con principios éticos relacionados con la privacidad digital y la responsabilidad empresarial.

    .row.align-items-center(data-aos="fade-right")
      .col-lg-8.mx-auto
        .bg-color-01.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img19.png", style="max-width: 150px;").mx-auto
            .col-lg-9.order-1.order-lg-2.p-4
              .bg-color-10.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold.text-white Cita de reflexión
              p.mb-0 “La protección responsable de la información personal refleja respeto por la privacidad y fortalece relaciones comerciales basadas en confianza”.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
