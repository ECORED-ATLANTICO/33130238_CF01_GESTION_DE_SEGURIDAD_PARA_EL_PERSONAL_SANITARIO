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
      tema: 'Fundamentos y prevención del riesgo de violencia',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> reconocer amenazas y vulnerabilidades y seleccionar medidas de prevención, mitigación y respuesta, mediante el análisis de conceptos y situaciones de la actividad sanitaria, para fortalecer decisiones orientadas a la protección del personal y la continuidad segura de la atención.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál norma adopta el Manual de Misión Médica y regula la señalización y divulgación de su emblema?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 1523 de 2012.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resolución 4481 de 2012.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ley 1562 de 2012.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Decreto 1072 de 2015.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Identifica la Resolución 4481 de 2012 como referente del Manual de Misión Médica y de su emblema.',
          mensaje_incorrecto:
            'Revise el marco normativo: la Resolución 4481 de 2012 adopta el Manual de Misión Médica y regula su emblema.',
        },
        {
          id: 2,
          texto:
            'Según la Ley 1523 de 2012, ¿cuáles son los tres procesos de gestión del riesgo de desastres?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificación, señalización y reporte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prevención, atención clínica y rehabilitación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comunicación, coordinación y vigilancia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Conocimiento del riesgo, reducción del riesgo y manejo de desastres.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce los tres procesos legales. En el componente, el manejo del riesgo aborda la preparación y respuesta frente a la violencia.',
          mensaje_incorrecto:
            'Distingue los términos: la ley establece conocimiento del riesgo, reducción del riesgo y manejo de desastres. No toda situación de violencia constituye un desastre.',
        },
        {
          id: 3,
          texto:
            '¿Qué expresa el riesgo de violencia en una actividad sanitaria?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La posibilidad de daños al considerar amenazas, vulnerabilidades, capacidades y contexto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La agresión que ya ocurrió y quedó registrada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La falta de un recurso, sin considerar las amenazas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La existencia de una amenaza, sin analizar la exposición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Relaciona el riesgo con la posibilidad de daños y con las condiciones que pueden favorecerlos o reducirlos.',
          mensaje_incorrecto:
            'Revise la diferencia entre riesgo y daño ocurrido. Para valorar el riesgo, necesitas relacionar amenazas, vulnerabilidades, capacidades y contexto.',
        },
        {
          id: 4,
          texto:
            'Durante una atención, ¿cuál conducta constituye una amenaza explícita contra el personal?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solicitar información sobre el tiempo de espera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presentar una queja por el servicio recibido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Anunciar que agredirá a quien realiza la atención.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Pedir hablar con la persona responsable del servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Distingue un anuncio de agresión de una queja o solicitud, que no constituyen automáticamente una amenaza.',
          mensaje_incorrecto:
            'Reconoce las conductas observables: anunciar una agresión constituye una amenaza. Una queja o solicitud, por sí sola, no permite esa clasificación.',
        },
        {
          id: 5,
          texto:
            'Una auxiliar conoce las amenazas del entorno, pero desconoce cómo solicitar apoyo. ¿Qué aspecto necesita fortalecer?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La identificación de consecuencias ya registradas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La preparación y el uso de los canales de apoyo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La clasificación jurídica de la institución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La descripción de las amenazas externas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Reconoce una necesidad de preparación y comunicación. Su fortalecimiento requiere orientación y mecanismos institucionales disponibles.',
          mensaje_incorrecto:
            'Revise la vulnerabilidad individual: necesita conocer cómo solicitar apoyo y contar con canales institucionales accesibles para hacerlo.',
        },
        {
          id: 6,
          texto:
            'En la escala didáctica del componente, no se ha comprobado si una persona sabe activar el apoyo. ¿Qué categoría corresponde?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No verificado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Preparación comprobada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Preparación parcial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Atención prioritaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Diferencia la falta de verificación de una capacidad de una dificultad comprobada. La escala didáctica no es una prueba clínica.',
          mensaje_incorrecto:
            'Revise los descriptores: si aún no cuentas con evidencia, corresponde no verificado. No debes suponer una capacidad ni una dificultad.',
        },
        {
          id: 7,
          texto:
            'En una interacción segura, una profesional nota tensión y piensa que toda inconformidad terminará en agresión. ¿Qué estrategia favorece su autorregulación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Interpretar el malestar como prueba de una agresión inevitable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dejar de observar el entorno para concentrarse en sus pensamientos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Prometer una solución inmediata para terminar la conversación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reconocer la emoción y contrastar su interpretación con los hechos observables.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Identifica una estrategia de autorregulación que ayuda a revisar interpretaciones y orientar la actuación, sin sustituir las medidas de protección.',
          mensaje_incorrecto:
            'Reconoce la emoción y contrasta tu interpretación con los hechos. Estas estrategias apoyan la autorregulación; no garantizan la seguridad ni reemplazan el apoyo institucional.',
        },
        {
          id: 8,
          texto:
            'Antes de un traslado asistencial, ¿cuál condición representa un factor protector comprobado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un protocolo archivado que el equipo desconoce.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un canal de apoyo cuyo funcionamiento se supone.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un equipo que ensayó el aviso y verificó el canal y al responsable.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La experiencia personal sin coordinación con la institución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que la preparación practicada y los apoyos verificados fortalecen la capacidad de respuesta.',
          mensaje_incorrecto:
            'Distingue entre recursos previstos y capacidades comprobadas. Necesitas verificar el funcionamiento de los apoyos y que el equipo sepa utilizarlos.',
        },
        {
          id: 9,
          texto:
            'Un equipo revisa antecedentes de violencia y analiza amenazas, vulnerabilidades y capacidades antes de una jornada. ¿Qué proceso desarrolla principalmente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conocimiento del riesgo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reducción del riesgo mediante controles ya implementados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Respuesta inmediata ante una agresión en curso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Atención de daños ya ocurridos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Relaciona la identificación y el análisis de las condiciones con el conocimiento del riesgo, que orienta las medidas posteriores.',
          mensaje_incorrecto:
            'Revisa el propósito de la actuación: al analizar antecedentes y condiciones, fortaleces el conocimiento del riesgo; todavía no estás ejecutando los controles.',
        },
        {
          id: 10,
          texto:
            'Una institución identifica funciones internas de apoyo poco claras y restricciones de acceso en el territorio. ¿Cómo se clasifican estas condiciones?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambas pertenecen al contexto interno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ambas pertenecen al contexto externo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las funciones son externas y las restricciones son internas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las funciones son internas y las restricciones son externas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Diferencias una condición organizacional interna de una condición territorial externa. Ambas influyen en el análisis del riesgo.',
          mensaje_incorrecto:
            'Revise los contextos: las funciones de apoyo pertenecen a la organización; las restricciones territoriales corresponden a condiciones externas.',
        },
        {
          id: 11,
          texto:
            'Al analizar un escenario de violencia, ¿cuál elemento debe registrarse como una posible consecuencia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La existencia de una amenaza verbal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La falta de claridad sobre quién coordina el apoyo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La interrupción de la atención por afectación al equipo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La activación de un canal institucional de ayuda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Identifica una afectación posible a la continuidad de la atención. Al anticiparla, no la presentas como un daño ya ocurrido.',
          mensaje_incorrecto:
            'Diferencia los campos: la interrupción de la atención es una consecuencia posible; la amenaza, la vulnerabilidad y la respuesta cumplen funciones distintas.',
        },
        {
          id: 12,
          texto:
            'Una institución busca evitar nuevas condiciones de riesgo y corregir una falla existente de comunicación. ¿Qué relación es adecuada?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ambos propósitos corresponden al registro posterior de incidentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evitar nuevas condiciones es prevención; corregir la falla existente es mitigación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Evitar nuevas condiciones es mitigación; corregir la falla existente es prevención.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ambos propósitos corresponden a la atención clínica de personas afectadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Diferencia la prevención de nuevas condiciones de riesgo de la mitigación de condiciones existentes o de sus posibles consecuencias.',
          mensaje_incorrecto:
            'Revise los propósitos: con la prevención evita nuevas condiciones de riesgo; con la mitigación reduce las existentes o sus posibles consecuencias.',
        },
        {
          id: 13,
          texto:
            'Antes de una jornada extramural se confirman cambios en la seguridad de la vía. ¿Cuál actuación permite decidir cómo proceder?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener la valoración anterior porque ya fue diligenciada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Revisar la situación cuando el equipo llegue al destino.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir el desplazamiento a partir de la experiencia del conductor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Actualizar la valoración y comprobar las medidas antes del desplazamiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Reconoce que los cambios del contexto requieren actualizar la valoración y verificar las medidas antes de decidir sobre la actividad.',
          mensaje_incorrecto:
            'Revise el carácter dinámico del riesgo: necesita analizar las nuevas condiciones y comprobar las medidas antes de mantener, ajustar o reprogramar la jornada.',
        },
        {
          id: 14,
          texto:
            'Al diligenciar la matriz del componente, ¿qué información permite relacionar el escenario con medidas pertinentes?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actividad, amenaza, vulnerabilidades, capacidades, consecuencias posibles y medidas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Nombre de la institución, fecha de la jornada y lista de asistencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Amenaza identificada y cantidad de personas inscritas en la jornada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Daños ocurridos y medidas utilizadas en otro lugar sin adaptación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Identifica los seis campos de la matriz y su relación para orientar decisiones según el escenario analizado.',
          mensaje_incorrecto:
            'Revise la estructura: necesita relacionar actividad, amenaza, vulnerabilidades, capacidades, consecuencias posibles y medidas. Diligenciar la matriz no reemplaza aplicar las acciones.',
        },
        {
          id: 15,
          texto:
            'Se programa una jornada con restricción de paso confirmada, comunicación sin probar y apoyo sin definir. No existe una agresión en curso. Según el método didáctico, ¿qué prioridad corresponde?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Seguimiento programado, porque la jornada aún no comienza.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Protección inmediata, porque ya existe una agresión en curso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Intervención previa, por las condiciones relevantes pendientes de fortalecimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Inicio de la actividad, porque el reporte ya fue registrado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Justifica la intervención previa por las condiciones pendientes. Esta prioridad orienta acciones y no autoriza automáticamente el desplazamiento.',
          mensaje_incorrecto:
            'Revise las prioridades: antes de la actividad necesita fortalecer y verificar las condiciones identificadas. Corresponde intervención previa, sin autorización automática para desplazarte.',
        },
        {
          id: 16,
          texto:
            'Una matriz propone probar la comunicación antes de la jornada. ¿Qué registro permite comprobar el cumplimiento de esa medida?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La fecha en que se creó el archivo de la matriz.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El responsable, el plazo, el resultado de la prueba y los pendientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La cantidad de asistentes prevista para la jornada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La copia del protocolo sin constancia de su aplicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Relaciona la medida con responsables, plazos y evidencia de ejecución. Así puedes identificar resultados y aspectos pendientes.',
          mensaje_incorrecto:
            'Para comprobar la medida, necesitas saber quién la ejecuta, cuándo debe cumplirla, qué evidencia demuestra el resultado y qué queda pendiente.',
        },
        {
          id: 17,
          texto:
            'Una institución dispone de un plan de contingencia escrito, pero el equipo desconoce sus funciones. ¿Qué necesita fortalecer para preparar la respuesta?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El conocimiento de los roles y la verificación de los recursos previstos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La presentación gráfica del documento, conservando las mismas condiciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El archivo de una copia adicional sin socialización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La sustitución del plan por una lista de asistencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Reconoce que el documento requiere preparación: necesitas conocer las responsabilidades y comprobar que los recursos puedan utilizarse.',
          mensaje_incorrecto:
            'Revise los fundamentos del plan: su existencia no demuestra capacidad de respuesta. Necesitas funciones conocidas, comunicación y recursos disponibles y comprobados.',
        },
        {
          id: 18,
          texto:
            'Durante una atención se presenta un intento de agresión y se compromete la seguridad. ¿Cuál es la actuación prioritaria?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Completar la matriz antes de activar el apoyo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Continuar el diálogo hasta convencer a la persona.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Priorizar la protección y activar el apoyo según las condiciones del evento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Finalizar la atención antes de comunicar lo ocurrido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Prioriza la protección y el apoyo oportuno. La respuesta no debe esperar el diligenciamiento de formularios ni exigir permanecer en peligro.',
          mensaje_incorrecto:
            'Revise la ruta de respuesta: si su seguridad está comprometida, priorice la protección y solicite apoyo. El registro no debe retrasar estas acciones.',
        },
        {
          id: 19,
          texto:
            'Una persona expresa inconformidad y existen condiciones para dialogar con seguridad. ¿Qué actuación favorece la desescalación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Prometer un tiempo de solución que el personal desconoce.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Escuchar y explicar con respeto la información y las gestiones posibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Calificar la queja como amenaza sin observar otras conductas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Discutir hasta demostrar que la persona está equivocada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Selecciona escucha activa y comunicación clara. Su aplicación depende de la seguridad y no implica aceptar amenazas ni garantizar resultados.',
          mensaje_incorrecto:
            'Revise la desescalación: escucha y comunica lo que conoces y puedes gestionar. Si cambian las condiciones de seguridad, necesitas priorizar la protección.',
        },
        {
          id: 20,
          texto:
            'Después de controlar una situación de violencia, el equipo identifica fallas de comunicación. ¿Qué actuación fortalece la gestión posterior?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Modificar los antecedentes para que no figuren las dificultades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cerrar el caso tras el aviso verbal, sin revisar las medidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Atribuir las fallas al trabajador sin analizar las condiciones institucionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar y reportar por los canales aplicables, brindar apoyo y revisar las medidas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Integre el registro, el reporte, el apoyo y la revisión de medidas. Distingue las rutas internas, sanitarias y laborales según corresponda.',
          mensaje_incorrecto:
            'Revise el seguimiento: necesitas registrar los hechos, reportar por las rutas aplicables, coordinar apoyo y analizar las fallas para fortalecer las medidas.',
        },
      ],
    },
  }),
}
</script>
