<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Operación comercial digital',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión y aplicación de conceptos relacionados con estrategia comercial, contenidos digitales, conversión, análisis comercial y ventas en social media desarrollados en el componente formativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la finalidad principal del embudo de ventas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Guiar consumidores durante etapas previas y posteriores a compra.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Diseñar únicamente campañas promocionales para incrementar alcance digital estratégico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Administrar medios de pago utilizados en comercio electrónico empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Configurar perfiles empresariales dentro de plataformas sociales digitales modernas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica distingue principalmente a los objetivos SMART?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Promueven únicamente acciones comerciales relacionadas con publicidad digital contemporánea.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Definen metas específicas, medibles, alcanzables, realistas y temporales claramente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Facilitan producción audiovisual mediante herramientas tecnológicas especializadas modernas actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituyen indicadores utilizados para evaluar desempeño comercial organizacional estratégico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué permite lograr una adecuada segmentación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir necesidad de contenidos adaptados para consumidores específicos digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar análisis relacionados con comportamiento comercial del consumidor actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Dirigir mensajes relevantes hacia grupos con características comunes identificadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reemplazar completamente procesos estratégicos relacionados con posicionamiento comercial digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es función principal de un lead magnet comercial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar costos asociados con campañas comerciales digitales contemporáneas actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar únicamente procesos relacionados con servicio postventa empresarial estratégico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir herramientas utilizadas para análisis de métricas comerciales digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Captar prospectos ofreciendo recursos valiosos relacionados con necesidades específicas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué elemento fortalece el posicionamiento percibido por los consumidores digitales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diferenciación clara sustentada mediante beneficios relevantes para audiencias específicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Incremento permanente de publicaciones sin objetivos comerciales definidos estratégicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminación de canales digitales utilizados para interacción comercial constante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustitución de estrategias comunicativas por herramientas automatizadas exclusivamente digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué propósito cumple el copywriting?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar cronogramas relacionados con publicaciones comerciales digitales empresariales actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Crear mensajes persuasivos orientados a influir decisiones del consumidor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Gestionar sistemas logísticos vinculados con procesos de entrega comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir herramientas utilizadas para segmentación de audiencias digitales estratégicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué función cumplen los llamados a la acción?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir frecuencia de interacción entre organizaciones y consumidores digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar necesidad de mensajes personalizados durante procesos comerciales actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Orientar usuarios hacia acciones específicas alineadas con objetivos comerciales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente estrategias de posicionamiento utilizadas por organizaciones modernas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál beneficio estratégico aportan los guiones técnicos para contenidos digitales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementan aleatoriedad durante producción de piezas comunicativas digitales actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitan planificación estructurada de mensajes y recursos audiovisuales estratégicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminan necesidad de definir objetivos comerciales para contenidos publicados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazan herramientas utilizadas para programación de publicaciones digitales empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué representa el tono de marca para una organización digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Forma particular de comunicarse consistentemente con sus audiencias digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Herramienta exclusiva para desarrollar campañas publicitarias de pago digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sistema utilizado para administrar pagos dentro comercio electrónico moderno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Método empleado para medir resultados financieros organizacionales estratégicos actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué ventaja ofrecen plataformas de inteligencia artificial en la producción de contenidos digitales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar completamente participación humana durante procesos comerciales estratégicos actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Automatizar tareas y optimizar productividad en actividades digitales diversas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir métricas utilizadas para evaluar desempeño comercial organizacional estratégico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar medios digitales empleados para interacción con consumidores actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué principio de diseño facilita destacar elementos importantes dentro del contenido digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Coherencia visual permanente entre diferentes canales digitales utilizados actualmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Contraste aplicado estratégicamente para resaltar información relevante presentada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Automatización comercial mediante plataformas tecnológicas especializadas para ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Segmentación geográfica utilizada para campañas digitales empresariales contemporáneas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué herramienta organiza estratégicamente publicaciones futuras dentro de las redes sociales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Lead magnet orientado a captar prospectos comerciales interesados previamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Embudo comercial utilizado para gestionar etapas de compra digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Calendario de publicaciones para programar contenidos ordenadamente en plataformas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Pasarela de pagos empleada durante procesos comerciales electrónicos actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué beneficio aporta la divulgación multicanal de contenidos digitales estratégicos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementa alcance mediante distribución en diversos medios digitales disponibles.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Elimina necesidad de planificar contenidos para audiencias específicas digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituye herramientas utilizadas para monitorear resultados comerciales estratégicos actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reduce posibilidades de interacción entre consumidores y organizaciones digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál objetivo cumplen los protocolos de publicación dentro de las estrategias digitales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar costos operativos asociados con producción de contenidos digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar procesos organizados, coherentes y alineados con objetivos comerciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir plataformas tecnológicas utilizadas para programación de publicaciones digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar revisiones previas realizadas sobre contenidos empresariales estratégicos actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué promueve la netiqueta?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Respuestas impulsivas orientadas únicamente a defender intereses empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comunicación irrespetuosa que genere controversia dentro comunidades digitales actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Interacciones responsables, respetuosas y profesionales entre participantes digitales diversos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminación de criterios éticos relacionados con atención al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué representa una conversión dentro estrategias de las ventas digitales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Acción valiosa realizada por usuario según objetivos comerciales definidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Proceso utilizado para diseñar contenidos audiovisuales en plataformas digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Herramienta destinada exclusivamente a programar publicaciones comerciales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Método empleado para administrar garantías posteriores a la compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué ventaja ofrecen los medios de pago digitales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementan complejidad durante procesos de compra desarrollados digitalmente actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitan transacciones seguras adaptadas a preferencias de consumidores diversos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituyen procesos relacionados con logística y entrega de productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminan necesidad de implementar estrategias comerciales digitales organizacionales actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué contribuye a fortalecer una adecuada gestión de garantías comerciales digitales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir transparencia durante procesos posteriores a la venta empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar responsabilidades relacionadas con calidad de productos ofrecidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incrementar confianza y satisfacción del consumidor frente a compras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir mecanismos legales relacionados con protección al consumidor actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál finalidad principal tienen las métricas comerciales dentro del análisis estratégico empresarial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar completamente decisiones basadas en experiencia organizacional previa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proporcionar información objetiva sobre desempeño y resultados comerciales obtenidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Gestionar publicaciones digitales mediante cronogramas previamente establecidos estratégicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Diseñar sistemas logísticos asociados con distribución de productos digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué característica distingue principalmente a los KPIs?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Miden variables relacionadas directamente con objetivos organizacionales prioritarios definidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Funcionan únicamente como reportes descriptivos sin aplicación estratégica alguna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituyen métricas utilizadas para evaluar campañas comerciales digitales actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se utilizan exclusivamente en procesos financieros de grandes empresas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
