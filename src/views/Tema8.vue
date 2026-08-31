<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Análisis comercial

    .bg-full-width.bg-fondo-1
    
      img(src="@/assets/curso/tema8/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-11(data-aos="fade-right")
          p.banner-text El análisis comercial constituye el proceso mediante el cual las organizaciones recopilan, interpretan y utilizan información relacionada con el desempeño de sus estrategias de ventas y <em>marketing</em>. Su importancia radica en la capacidad para transformar datos en conocimiento útil para la toma de decisiones. En las ventas en <em>social media</em>, el análisis comercial permite comprender comportamientos del consumidor, evaluar resultados y optimizar acciones futuras, fortaleciendo la competitividad y la sostenibilidad de los procesos comerciales digitales.

      separador
      
      #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 8.1 Reporte

    .row.align-items-center.bg-color-09.p-4.mb-5.br-15(data-aos="fade-right")
      .col-lg.order-lg-1
        p.mb-0 El reporte comercial corresponde a un documento estructurado que recopila, organiza y presenta información relacionada con el desempeño de actividades comerciales y estrategias digitales. Su función principal consiste en facilitar la interpretación de resultados y apoyar procesos de toma de decisiones basados en evidencia. Dentro de las ventas en <em>social media</em>, los reportes permiten identificar avances, detectar oportunidades de mejora y evaluar el cumplimiento de objetivos comerciales previamente establecidos.
      .col-lg-auto.d-none.d-lg-flex.order-lg-2
        img.d-none.d-lg-flex(src="@/assets/curso/tema8/img02.svg", style="max-width: 120px;").mx-auto

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-flex
        img.d-none.d-lg-flex(src="@/assets/curso/tema8/img03.svg", style="max-width: 80px;").mx-auto
      .col-lg
        p.mb-0 La elaboración de reportes responde a la necesidad de transformar datos dispersos en información comprensible y útil para diferentes niveles organizacionales. Dependiendo de los objetivos perseguidos, los reportes pueden enfocarse en campañas específicas, resultados de ventas, comportamiento de audiencias o desempeño general de estrategias digitales. Esta diversidad permite adaptar el análisis a diferentes necesidades de gestión y fortalecer la capacidad para realizar ajustes oportunos.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        .bg-color-015.p-4.br-15(data-aos="fade-right")
          p.text-bold.mb-2 Ejemplo aplicado.
          p.mb-3 La organización Formación Plus desarrollaba campañas digitales de manera constante, pero carecía de mecanismos estructurados para evaluar su desempeño. Como consecuencia, las decisiones relacionadas con inversión publicitaria y producción de contenidos se realizaban principalmente mediante percepciones subjetivas.
          p.mb-0 Con el propósito de fortalecer su gestión comercial, implementó reportes periódicos que integraban indicadores de alcance, interacción y conversión. Esta información permitió identificar campañas más efectivas, optimizar recursos y mejorar significativamente la capacidad para tomar decisiones basadas en resultados verificables.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema8/img04.png", data-aos="zoom-in")

    p.mb-4 La aplicación estratégica de los reportes favorece el monitoreo continuo de los procesos comerciales y facilita la identificación de tendencias relevantes para la organización. Cuando los reportes presentan información clara, precisa y alineada con los objetivos empresariales, contribuyen significativamente a mejorar la planificación y optimización de futuras acciones comerciales. Por esta razón, constituyen herramientas fundamentales dentro de la gestión de ventas en <em>social media</em>.

    .bg-fondo-08.p-3.br-15.mb-5(data-aos="fade-right")
      p.mb-0 En este contexto, los reportes comerciales pueden organizarse según el tipo de información que se requiere analizar y los objetivos de gestión que se buscan alcanzar. A continuación, se presentan algunos tipos de reportes utilizados para apoyar el seguimiento y la toma de decisiones en las estrategias de ventas en <em>social media</em>:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-6.col-xl-6.col-md-12.mb-4
        .bg-color-015.p-4.br-15.h-100
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/tema8/img05.svg", style="max-width: 60px;").mx-auto
            .col
              h4.mb-1 Reporte de ventas
              p.mb-2 Permite analizar resultados asociados a los procesos de comercialización.
              p.mb-0 <b>Ejemplo:</b> revisar las ventas mensuales para identificar productos con mayor desempeño.

      .col-lg-6.col-xl-6.col-md-12.mb-4
        .bg-color-015.p-4.br-15.h-100
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/tema8/img05.svg", style="max-width: 60px;").mx-auto
            .col
              h4.mb-1 Reporte de campañas
              p.mb-2 Evalúa el desempeño de acciones promocionales desarrolladas digitalmente.
              p.mb-0 <b>Ejemplo:</b> analizar alcance, interacciones y conversiones de una campaña en redes sociales.

      .col-lg-6.col-xl-6.col-md-12.mb-4.mb-lg-0
        .bg-color-015.p-4.br-15.h-100
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/tema8/img05.svg", style="max-width: 60px;").mx-auto
            .col
              h4.mb-1 Reporte de audiencia
              p.mb-2 Facilita comprender el comportamiento y las características de los consumidores.
              p.mb-0 <b>Ejemplo:</b> identificar los segmentos que presentan mayor interacción con los contenidos.

      .col-lg-6.col-xl-6.col-md-12
        .bg-color-015.p-4.br-15.h-100
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/tema8/img05.svg", style="max-width: 60px;").mx-auto
            .col
              h4.mb-1 Reporte ejecutivo
              p.mb-2 Resume información estratégica para apoyar decisiones organizacionales.
              p.mb-0 <b>Ejemplo:</b> consultar resultados generales para ajustar la estrategia comercial.

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12.col-xl-8.mx-auto
        .bg-color-07.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img15.png").mx-auto
            .col-lg-7.order-lg-2.p-4
              .bg-color-06.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold Pregunta de aplicación
              p.mb-0 ¿Cómo podría una empresa de servicios profesionales utilizar reportes comerciales para optimizar sus estrategias digitales?

    separador
    
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.2 Métricas de ventas

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema8/img06.png", data-aos="zoom-in")
      .col-lg-7
        p.mb-3(data-aos="fade-right") Las métricas de ventas corresponden a medidas cuantitativas utilizadas para evaluar el desempeño de actividades comerciales y determinar el nivel de cumplimiento de los objetivos establecidos. Su importancia radica en la capacidad para proporcionar información objetiva sobre resultados obtenidos y tendencias de comportamiento observadas dentro de los procesos comerciales. En las ventas en <em>social media</em>, las métricas permiten comprender el impacto de las estrategias implementadas y orientar acciones de mejora continua.

        .bg-fondo-07.p-4.br-15(data-aos="fade-left")
          p.mb-0 La aplicabilidad de las métricas se extiende a diferentes dimensiones de la gestión comercial. Algunas permiten analizar niveles de interacción, otras se enfocan en generación de prospectos, conversiones o rentabilidad de campañas. Esta diversidad facilita construir una visión integral del desempeño organizacional y contribuye a identificar factores que influyen positiva o negativamente en los resultados obtenidos. Su interpretación adecuada fortalece significativamente los procesos de planificación y control.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 11.
          span Métricas de ventas en <em>social media</em>
        .tabla-a.tb-custom.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th(width="25%") Métrica
                th(width="45%") Aplicación estratégica
                th(width="30%") Ejemplo de resultado
            tbody
              tr
                td <b>Alcance</b>
                td Permite identificar la cantidad de usuarios expuestos al contenido.
                td La publicación fue visualizada por 12.500 usuarios durante una campaña promocional.
              tr
                td <b>Interacción</b>
                td Evalúa la participación mediante comentarios, reacciones y compartidos.
                td El contenido obtuvo 850 reacciones, 120 comentarios y 75 compartidos.
              tr
                td <b>Conversión</b>
                td Mide acciones comerciales obtenidas a partir de campañas digitales.
                td La campaña generó 45 registros y 18 ventas efectivas durante el periodo evaluado.
              tr
                td <b>Valor promedio de compra</b>
                td Facilita analizar el comportamiento económico de los consumidores.
                td Cada cliente realizó compras promedio por valor de $180.000 durante el mes.
              tr
                td <b>Tasa de clics (CTR)</b>
                td Permite evaluar el interés generado por anuncios o publicaciones digitales.
                td El anuncio obtuvo un CTR del 6,8 % sobre las impresiones registradas.
              tr
                td <b>Costo por adquisición (CPA)</b>
                td Facilita determinar la inversión necesaria para obtener un nuevo cliente.
                td La organización invirtió $25.000 para adquirir cada nuevo cliente digital.
              tr
                td <b>Retorno de inversión (ROI)</b>
                td Permite analizar la rentabilidad de campañas y acciones comerciales digitales.
                td La campaña generó un retorno del 180 % respecto a la inversión realizada.

    .row.align-items-center.bg-color-018.p-4.mb-5.br-15(data-aos="fade-right")
      .col-lg.order-lg-1
        p.mb-0 La utilización estratégica de métricas requiere seleccionar aquellas que realmente aporten información relevante para los objetivos perseguidos. Medir grandes cantidades de datos sin un propósito definido puede dificultar la toma de decisiones. Por esta razón, las organizaciones procuran priorizar métricas alineadas con sus metas comerciales, permitiendo enfocar esfuerzos en variables con impacto directo sobre el desempeño y crecimiento empresarial.
      .col-lg-auto.d-none.d-lg-flex.order-lg-2
        img.d-none.d-lg-flex(src="@/assets/curso/tema8/img07.svg", style="max-width: 100px;").mx-auto

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        .bg-color-07.p-4.br-15(data-aos="fade-right")
          p.text-bold.mb-2 Ejemplo aplicado.
          p.mb-0 La organización TechPro realizaba inversiones constantes en publicidad digital, pero enfrentaba dificultades para determinar cuáles acciones generaban mejores resultados comerciales. Aunque disponía de gran cantidad de información, no contaba con criterios claros para interpretar el desempeño de sus estrategias. Después de identificar las métricas más relevantes para sus objetivos comerciales, comenzó a monitorear indicadores relacionados con generación de prospectos, conversiones y retorno de inversión. Este enfoque permitió optimizar la asignación de recursos y fortalecer significativamente la efectividad de sus campañas digitales.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema8/img08.png", data-aos="zoom-in")

    .row.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12.col-xl-8.mx-auto
        .bg-color-09.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img08.png", style="max-width: 150px;").mx-auto
            .col-lg-9.order-1.order-lg-2.p-4
              .bg-color-08.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold.text-white Clave estratégica
              p.mb-0 No todas las métricas son importantes; las más valiosas son aquellas que apoyan decisiones relevantes.

    separador
    
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.3 KPIs

    .bg-full-width.bg-fondo-1.mb-5
      img(src="@/assets/curso/tema8/img09.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-11(data-aos="fade-right")
          p.banner-text Los KPIs (<em>Key Performance Indicators</em> o Indicadores Clave de Desempeño) corresponden a métricas estratégicas utilizadas para evaluar el nivel de cumplimiento de objetivos específicos dentro de una organización. A diferencia de las métricas generales, los KPIs se seleccionan porque reflejan directamente el avance hacia resultados considerados prioritarios para el negocio. En las ventas en <em>social media</em>, estos indicadores permiten monitorear el desempeño comercial y orientar decisiones relacionadas con optimización, crecimiento y rentabilidad.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 12.
          span KPIs utilizados en ventas digitales
        .tabla-a.tb-custom.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th(width="25%") KPI
                th(width="45%") Aplicación estratégica
                th(width="30%") Ejemplo de resultado
            tbody
              tr
                td <b>Tasa de conversión</b>
                td Mide el porcentaje de usuarios que realizan acciones comerciales relevantes.
                td El 8 % de los visitantes del sitio web completó una compra durante la campaña.
              tr
                td <b>Costo por adquisición</b>
                td Evalúa la inversión requerida para obtener nuevos clientes digitales.
                td La organización invirtió $30.000 para captar a cada nuevo cliente digital.
              tr
                td <b>Retorno de inversión</b>
                td Determina la rentabilidad obtenida a partir de acciones comerciales.
                td La campaña generó un ROI del 220 % respecto al presupuesto invertido.
              tr
                td <b>Retención de clientes</b>
                td Analiza la capacidad para mantener relaciones comerciales sostenibles.
                td El 78 % de los clientes realizó una nueva compra durante el semestre.
              tr
                td <b>Tasa de apertura de correos</b>
                td Permite evaluar la efectividad de campañas de <em>email marketing</em> comercial.
                td El 42 % de los destinatarios abrió los correos enviados durante la campaña.
              tr
                td <b>Valor del tiempo de vida del cliente (CLV)</b>
                td Estima ingresos generados por un cliente durante toda la relación comercial.
                td Cada cliente generó ingresos promedio de $1.200.000 durante su permanencia.
              tr
                td <b>Tasa de abandono de compra</b>
                td Mide el porcentaje de usuarios que no finalizan el proceso comercial iniciado.
                td El 25 % de los usuarios abandonó el carrito antes de completar el pago.

    .bloque-texto-g.bg-color-017.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema8/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La aplicabilidad de los KPI radica en su capacidad para convertir objetivos estratégicos en variables medibles y controlables. Cuando una organización define metas relacionadas con la generación de prospectos, el crecimiento de ventas o la fidelización de clientes, requiere indicadores que permitan verificar el progreso alcanzado. Esta relación directa entre objetivos y medición facilita identificar desviaciones, realizar ajustes oportunos y fortalecer la efectividad de las acciones implementadas dentro de los entornos digitales.

    .bg-fondo-08.p-4.br-15.mb-5(data-aos="fade-right")
      p.mb-0 A partir de esta relación entre objetivos y medición, es importante diferenciar los KPI de las métricas para identificar cuáles indicadores permiten evaluar el cumplimiento de objetivos estratégicos y cuáles facilitan el seguimiento de resultados específicos, como se presenta a continuación:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-3.col-md-6.mb-4.mb-lg-0.h-100
        .bg-color-015.p-4.br-15.h-100.text-center
          img(src="@/assets/curso/tema8/img12.svg", style="max-width: 60px;").mx-auto.mb-3
          h4.mb-3 Propósito
          p.mb-2 Permite identificar para qué se utiliza cada indicador dentro del análisis comercial.
          p.mb-2 <b>KPI:</b> evalúan el cumplimiento de objetivos estratégicos.
          p.mb-0 <b>Métricas:</b> miden comportamientos o resultados específicos.

      .col-lg-3.col-md-6.mb-4.mb-lg-0.h-100
        .bg-color-015.p-4.br-15.h-100.text-center
          img(src="@/assets/curso/tema8/img12.svg", style="max-width: 60px;").mx-auto.mb-3
          h4.mb-3 Enfoque
          p.mb-2 Permite reconocer si el dato se relaciona con una meta estratégica o con el seguimiento operativo.
          p.mb-2 <b>KPI:</b> se relacionan directamente con metas organizacionales.
          p.mb-0 <b>Métricas:</b> proporcionan información operativa o táctica.

      .col-lg-3.col-md-6.mb-4.mb-lg-0.h-100
        .bg-color-015.p-4.br-15.h-100.text-center
          img(src="@/assets/curso/tema8/img12.svg", style="max-width: 60px;").mx-auto.mb-3
          h4.mb-3 Toma de decisiones
          p.mb-2 Permite comprender cómo los resultados orientan las acciones comerciales.
          p.mb-2 <b>KPI:</b> apoyan decisiones estratégicas de alto impacto.
          p.mb-0 <b>Métricas:</b> facilitan el seguimiento de actividades específicas.

      .col-lg-3.col-md-6.mb-4.mb-lg-0.h-100
        .bg-color-015.p-4.br-15.h-100.text-center
          img(src="@/assets/curso/tema8/img12.svg", style="max-width: 60px;").mx-auto.mb-3
          h4.mb-3 Ejemplo
          p.mb-0 Una empresa puede utilizar la tasa de conversión como KPI para evaluar el cumplimiento de un objetivo comercial y el número de visitas como métrica para analizar el comportamiento de los usuarios.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        .bg-color-07.p-4.br-15(data-aos="fade-right")
          p.text-bold.mb-2 Ejemplo aplicado.
          p.mb-0 La organización Digital Learning desarrollaba acciones comerciales mediante diferentes plataformas digitales y monitoreaba una gran cantidad de métricas relacionadas con interacción y alcance. Sin embargo, enfrentaba dificultades para determinar cuáles indicadores reflejaban realmente el cumplimiento de sus objetivos estratégicos. Después de revisar su modelo de gestión, identificó KPIs relacionados con generación de prospectos, conversión comercial y retención de estudiantes. El seguimiento sistemático de estos indicadores permitió enfocar esfuerzos en variables críticas para el crecimiento organizacional y mejorar significativamente la efectividad de sus estrategias de ventas en <em>social media</em>.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema8/img13.png", data-aos="zoom-in")

    p.mb-4 A partir de este análisis, la selección de un KPI requiere considerar diferentes criterios que permitan determinar si el indicador realmente aporta información útil para evaluar los objetivos comerciales. Entre los principales criterios se encuentran:

    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .p-3.p-md-4(titulo="Relevancia")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Relevancia
            p.mb-2 Garantiza la relación directa del KPI con los objetivos comerciales.
            p.mb-0 <b>Ejemplo:</b> para aumentar ventas en <em>Instagram</em>, se prioriza la tasa de conversión.
          .col-lg-5.col-md-10
            figure
              img(src="@/assets/curso/tema8/img14.png", alt="")

      .p-3.p-md-4(titulo="Medición objetiva")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Medición objetiva
            p.mb-2 Permite obtener información verificable y comparable en el tiempo.
            p.mb-0 <b>Ejemplo:</b> comparar mensualmente la tasa de conversión de campañas.
          .col-lg-5.col-md-10
            figure
              img(src="@/assets/curso/tema8/img15.png", alt="")

      .p-3.p-md-4(titulo="Claridad")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Claridad
            p.mb-2 Facilita la interpretación de los resultados por parte del equipo responsable.
            p.mb-0 <b>Ejemplo:</b> utilizar indicadores claramente definidos para evaluar una campaña.
          .col-lg-5.col-md-10
            figure
              img(src="@/assets/curso/tema8/img16.png", alt="")

      .p-3.p-md-4(titulo="Utilidad estratégica")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Utilidad estratégica
            p.mb-2 Aporta información para tomar decisiones y realizar ajustes comerciales.
            p.mb-0 <b>Ejemplo:</b> identificar las campañas con mejores resultados para optimizar el presupuesto.
          .col-lg-5.col-md-10
            figure
              img(src="@/assets/curso/tema8/img17.png", alt="")

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-6.mb-4.mb-lg-0.h-100
        .bg-color-01.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img30.png", style="max-width: 150px;").mx-auto
            .col-lg-8.order-1.order-lg-2.p-4
              .bg-color-10.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold.text-white Cita de reflexión
              p.mb-0 "La integridad en el análisis comercial implica interpretar los datos con objetividad y utilizar la información para mejorar continuamente, evitando decisiones basadas en percepciones o intereses particulares que distorsionen la realidad de los resultados."

      .col-lg-6.mx-auto.h-100
        .container.h-100
          .row.bg-fondo-09.align-items-center.justify-content-center.br-15
            .col-md-8.col-lg-4.mb-3.mb-lg-0.order-2.order-md-2.order-lg-1.p-3
              figure
                img(src="@/assets/curso/tema6/img19.png", data-aos="fade-right").mx-auto.w-md-50
            .col-lg-8.order-1.order-md-1.order-lg-2.p-4.p-lg-4
              h4.mb-2.text-white ¿Sabías qué?
              p(data-aos="fade-left").mb-4.text-white Lo invitamos a escuchar el siguiente Pódcast:
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Análisis comercial y KPIs"
                tiempo
                :audio="require_src('@/assets/curso/audio/2.mp3')"
                )

</template>

<script>
export default {
  name: 'Tema8',
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
