<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Vulnerabilidad individual

    .bg-full-width.bg-fondo-1
      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema2/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-right")
          p.banner-text La vulnerabilidad individual comprende las condiciones personales que pueden influir en la exposición y en la capacidad de respuesta frente a una amenaza. En el ejercicio sanitario, su análisis permite reconocer necesidades de información, preparación, comunicación y apoyo para actuar ante situaciones de violencia.

      .bloque-texto-g.bg-color-05.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Estas condiciones pueden cambiar según la actividad, el entorno y los recursos disponibles. Una persona puede conocer los procedimientos de su institución y, al mismo tiempo, necesitar preparación para una atención domiciliaria o un desplazamiento extramural.

      .container
        .row.align-items-center.bg-color-02.mb-3.p-3.br-15
          .col-lg-12
            p.mb-0 La valoración de la vulnerabilidad tiene una finalidad preventiva. Busca fortalecer capacidades y orientar medidas de protección, sin atribuir a la persona agredida la responsabilidad por la violencia. Las habilidades individuales deben acompañarse de condiciones institucionales que permitan aplicarlas.
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto y variables individuales

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 Para comprender la vulnerabilidad individual es necesario observar cómo se relacionan la preparación de la persona, las exigencias de la actividad y las condiciones del contexto. La experiencia previa puede aportar recursos para reconocer una amenaza, pero no garantiza por sí sola una respuesta segura.

        .container
          .row.align-items-center.bg-color-02.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 Las variables permiten organizar esta observación. Su análisis debe apoyarse en información concreta: conocimiento de los procedimientos, explicación de una ruta de respuesta, participación en ejercicios de preparación y reconocimiento de los medios disponibles para solicitar apoyo.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 4.
          span Variables para reconocer la vulnerabilidad
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Variable
                th Aspectos para considerar
            tbody
              tr
                td.text-bold Conocimiento
                td Reconocimiento de amenazas, medidas de prevención, protocolos y rutas de respuesta.
              tr
                td.text-bold Percepción del riesgo
                td Identificación de señales de alerta y cambios que puedan modificar las condiciones de seguridad.
              tr
                td.text-bold Comunicación
                td Capacidad para transmitir información, solicitar apoyo y comunicarse de manera adecuada durante situaciones de tensión.
              tr
                td.text-bold Respuesta ante situaciones de tensión
                td Capacidad para mantener una actuación organizada y evitar conductas que puedan incrementar la confrontación.
              tr
                td.text-bold Experiencia y preparación
                td Formación y experiencias que aportan elementos para reconocer y afrontar situaciones de riesgo.
              tr
                td.text-bold Recursos de protección
                td Disponibilidad y conocimiento de medios de comunicación, acompañamiento y mecanismos institucionales de apoyo.



    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img04.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 Estas variables se relacionan entre sí y deben analizarse de manera integral. Por ejemplo, contar con experiencia en la atención sanitaria puede favorecer el reconocimiento de algunas situaciones de riesgo; sin embargo, si se desconoce la ruta institucional de respuesta o no se dispone de un medio efectivo de comunicación, pueden mantenerse condiciones que aumenten la vulnerabilidad.
        .container
          .row.align-items-center.bg-color-02.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 La identificación de estas variables permite reconocer aspectos que requieren fortalecimiento y capacidades que pueden actuar como elementos protectores. Su análisis contribuye a orientar medidas de prevención y preparación acordes con las características de la persona, la actividad sanitaria y el contexto.

    .row.justify-content-center.mb-3
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c1.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Antes de realizar una jornada extramural, un integrante del equipo conoce el procedimiento asistencial, pero desconoce las condiciones recientes de seguridad del territorio y la ruta establecida para reportar una situación de amenaza. El análisis de vulnerabilidad individual permite reconocer estos aspectos antes del desplazamiento y orientar acciones de preparación y protección.
  
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Escala de vulnerabilidad


    .bloque-texto-g.bg-color-05.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La escala cualitativa propuesta para este componente permite describir el estado de preparación de una persona frente a una actividad y un contexto determinados. Su propósito es identificar capacidades comprobadas, aspectos por fortalecer y condiciones que requieren atención prioritaria. <br>La herramienta utiliza tres categorías:


    .bg-full-width.bg-fondo-1
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/img06.png", data-aos="zoom-in").mx-auto
        .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
          .bg-fondo-01.p-5.mb-0
            SlyderA(tipo="b").bg-color-white.p-3.tarjeta
              .tarjeta.p-lg-5.p-3.h-100.mb-0
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    h4 Conocimiento
                    p.mb-0 #[b Preparación comprobada (F).] Comprende los conceptos y procedimientos básicos para actuar ante situaciones de riesgo.

              .tarjeta.p-lg-5.p-3.h-100.mb-0
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    h4 Percepción del riesgo
                    p.mb-0 #[b Preparación comprobada (F).] Identifica amenazas, señales de alerta y posibles situaciones de peligro.

              .tarjeta.p-lg-5.p-3.h-100.mb-0
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    h4 Comunicación
                    p.mb-0 #[b Preparación comprobada (F).] Reconoce los canales de comunicación y las personas a quienes acudir para solicitar apoyo.

              .tarjeta.p-lg-5.p-3.h-100.mb-0
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    h4 Respuesta ante tensión
                    p.mb-0 #[b Preparación comprobada (F)], observada únicamente en el ejercicio. Demuestra capacidad para mantener la calma y aplicar las orientaciones establecidas.

              .tarjeta.p-lg-5.p-3.h-100.mb-0
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    h4 Experiencia y preparación
                    p.mb-0 #[b Preparación parcial (P).] Cuenta con conocimientos previos, pero requiere mayor práctica y fortalecimiento.

              .tarjeta.p-lg-5.p-3.h-100.mb-0
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    h4 Recursos de protección
                    p.mb-0 #[b Atención prioritaria (A).] Presenta limitaciones en el acceso o disponibilidad de recursos de protección y requiere apoyo oportuno.

              .tarjeta.p-lg-5.p-3.h-100.mb-0
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    p.mb-0 <b>Preparación parcial (P):</b> existen conocimientos, habilidades o capacidades relacionadas con el aspecto evaluado, pero requieren aclaración, práctica, fortalecimiento o verificación. La persona reconoce algunos elementos importantes, aunque todavía presenta dudas o necesita acompañamiento para aplicarlos correctamente en situaciones concretas.

              .tarjeta.p-lg-5.p-3.h-100.mb-0
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    p.mb-0 <b>Atención prioritaria (A):</b> se identifica una dificultad, desconocimiento o limitación que afecta la preparación de la persona o su acceso a los apoyos necesarios. Esta condición requiere intervención oportuna, orientación específica y activación de medidas de acompañamiento, protección o atención, según corresponda.

      .container
        .row.align-items-center.bg-color-02.p-4.mb-5.br-15
          .col-lg-auto.d-none.d-lg-block.order-2
            img(src="@/assets/curso/tema2/img28.png", style="max-width: 90px").mx-auto
          .col-lg.order-1
            p.mb-0 Cuando no exista información suficiente, se registra no verificado (NV). La falta de información debe resolverse mediante comprobación; no se interpreta automáticamente como una capacidad disponible ni como una deficiencia personal.
    
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-2 Tabla 5.
            span Valoración de la preparación individual
          .tabla-a.tb-custom.mb-0
            table
              thead
                tr
                  th Variable
                  th Preparación comprobada (F)
                  th Preparación parcial (P)
                  th Atención prioritaria (A)
              tbody
                tr
                  td.text-bold Conocimiento
                  td Explica las amenazas relevantes y el procedimiento de actuación correspondiente.
                  td Reconoce las amenazas, pero necesita aclarar pasos o responsabilidades del procedimiento.
                  td Desconoce las amenazas relevantes o el procedimiento para actuar.
                tr
                  td.text-bold Percepción del riesgo
                  td Identifica señales observables y reconoce cuándo un cambio exige revisar la seguridad.
                  td Identifica algunas señales, pero requiere orientación para relacionarlas con el contexto.
                  td En el ejercicio propuesto no identifica señales relevantes ni cuándo debe solicitar una nueva valoración.
                tr
                  td.text-bold Comunicación
                  td Describe qué ocurre, dónde sucede y qué apoyo necesita, utilizando los mecanismos previstos.
                  td Comunica la situación, pero omite información necesaria o requiere apoyo para organizar el mensaje.
                  td Desconoce cómo comunicar el evento o a quién solicitar apoyo.
                tr
                  td.text-bold Respuesta ante tensión
                  td En un ejercicio seguro reconoce su activación y selecciona acciones acordes con el procedimiento.
                  td Reconoce su activación, pero necesita practicar cómo organizar la respuesta.
                  td No identifica las acciones de protección previstas y requiere preparación antes de asumir la actividad.
                tr
                  td.text-bold Experiencia y preparación
                  td Ha recibido orientación y demuestra el procedimiento mediante explicación o práctica.
                  td Ha recibido orientación, pero su aplicación requiere práctica o actualización.
                  td No ha recibido la preparación necesaria para la actividad propuesta.
                tr
                  td.text-bold Recursos de protección
                  td Conoce los apoyos previstos y se ha verificado su disponibilidad para la actividad.
                  td Conoce los apoyos, pero su acceso o funcionamiento está pendiente de comprobación.
                  td No se ha definido cómo acceder a los apoyos o se ha comprobado que un recurso necesario no está disponible.

      .container
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.svg")
            h3.titulo-con-imagen__texto Aplicación de la escala

    .bg-full-width.bg-fondo-1
      p.mb-4 La valoración se realiza mediante los siguientes pasos:


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema2/img08.png", data-aos="zoom-in", alt="")
        .col-lg-8.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
          SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-3")
            .tarjeta.bg-color-8.p-4.h-100.br-15
              img(src='@/assets/curso/tema2/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center.mb-2 Definir la actividad
              p.text-center.mb-0 Precisar qué se realizará, dónde y bajo qué condiciones, estableciendo el propósito, el alcance y las características de la actividad. Es importante considerar el contexto, las personas involucradas y los recursos necesarios para su desarrollo.
            .tarjeta.bg-color-8.p-4.h-100.br-15
              img(src='@/assets/curso/tema2/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center.mb-2 Reunir evidencias
              p.text-center.mb-0 Utilizar preguntas situacionales, explicación de procedimientos, ejercicios seguros y verificación de recursos disponibles. Las evidencias deben permitir reconocer los conocimientos, las habilidades y las capacidades reales de las personas frente a la situación evaluada.
            .tarjeta.bg-color-8.p-4.h-100.br-15
              img(src='@/assets/curso/tema2/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center.mb-2 Asignar una categoría
              p.text-center.mb-0 Seleccionar el descriptor que corresponda a la evidencia de cada variable, teniendo en cuenta los criterios establecidos para la preparación comprobada (F), preparación parcial (P) o atención prioritaria (A). La clasificación debe estar sustentada en hechos observables.
            .tarjeta.bg-color-8.p-4.h-100.br-15
              img(src='@/assets/curso/tema2/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center.mb-2 Registrar el hallazgo
              p.text-center.mb-0 Describir de manera clara los aspectos comprobados, las dificultades identificadas y las necesidades de fortalecimiento. El registro debe facilitar la comprensión de los resultados y servir como referencia para definir las acciones posteriores.
            .tarjeta.bg-color-8.p-4.h-100.br-15
              img(src='@/assets/curso/tema2/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center.mb-2 Establecer una acción
              p.text-center.mb-0 Definir las medidas necesarias para atender los hallazgos, especificando qué debe hacerse, quiénes serán responsables, qué recursos se requieren y en qué plazo se realizará la intervención. Las acciones deben responder a las necesidades identificadas.
            .tarjeta.bg-color-8.p-4.h-100.br-15
              img(src='@/assets/curso/tema2/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center.mb-2 Revisar la preparación
              p.text-center.mb-0 Actualizar el registro después de implementar las acciones, verificando los avances, los resultados obtenidos y las dificultades que persisten. Esta revisión permite determinar si se alcanzó el nivel esperado o si es necesario establecer nuevas medidas de acompañamiento.

      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/img10.png", data-aos="zoom-in").mx-auto
        .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
          p.mb-3 Las categorías no se suman ni se promedian. La interpretación se realiza por variable y en relación con el escenario. Una capacidad comprobada no compensa la ausencia de un recurso necesario para proteger al equipo.

          .container
            .row.align-items-center.bg-color-02.mb-0.p-3.br-15
              .col-lg-12
                p.mb-0 Una condición de atención prioritaria requiere informar a la coordinación y definir la intervención correspondiente. La escala, por sí sola, no autoriza la realización de una actividad: la decisión debe considerar también la amenaza, la vulnerabilidad institucional y las condiciones del entorno.

      .container
        .row.align-items-center.bg-color-05.mb-5.br-15
          .col-lg.p-4
            h4 Ejemplo de valoración
            p.mb-0 Antes de una jornada extramural, un integrante del equipo participa en un ejercicio de preparación. Explica las amenazas y el procedimiento, identifica cambios en el entorno, comunica los hechos con claridad y selecciona medidas de protección. Sin embargo, necesita practicar la aplicación del procedimiento y desconoce cómo acceder al apoyo durante el desplazamiento.
          .col-lg-2.d-none.d-lg-block.p-0
            img(src='@/assets/curso/tema2/img11.png', alt='').w-75


      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema2/img12.png", data-aos="zoom-in").mx-auto
        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          .bg-fondo-01.p-5.mb-0
            SlyderA(tipo="b").bg-color-white.p-3.tarjeta
              .tarjeta.p-lg-4.p-3.h-100.mb-0
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    p.mb-0 #[b Conocimiento:] preparación comprobada (F). Comprende los conceptos y procedimientos básicos para actuar ante situaciones de riesgo.

              .tarjeta.p-lg-4.p-3.h-100.mb-0
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    p.mb-0 #[b Percepción del riesgo:] preparación comprobada (F). Identifica amenazas, señales de alerta y posibles situaciones de peligro.

              .tarjeta.p-lg-4.p-3.h-100.mb-0
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    p.mb-0 #[b Comunicación:] preparación comprobada (F). Reconoce los canales de comunicación y las personas a quienes acudir para solicitar apoyo.

              .tarjeta.p-lg-4.p-3.h-100.mb-0
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    p.mb-0 #[b Respuesta ante tensión:] preparación comprobada (F), observada únicamente en el ejercicio. Demuestra capacidad para mantener la calma y aplicar las orientaciones establecidas.

              .tarjeta.p-lg-4.p-3.h-100.mb-0
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    p.mb-0 #[b Experiencia y preparación:] preparación parcial (P). Cuenta con conocimientos previos, pero requiere mayor práctica y fortalecimiento.

              .tarjeta.p-lg-4.p-3.h-100.mb-0
                .row.align-items-center.justify-content-center
                  .col-lg-12
                    p.mb-0 #[b Recursos de protección:] atención prioritaria (A).Presenta limitaciones en el acceso o disponibilidad de recursos de protección y requiere apoyo oportuno.


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img13.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 La acción propuesta consiste en practicar el procedimiento, definir el mecanismo de apoyo y comprobar su funcionamiento antes de que la coordinación revise las condiciones de salida.

        .container
          .row.align-items-center.bg-color-01.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 El resultado describe necesidades de preparación para esa actividad. No permite concluir cómo responderá la persona en todas las situaciones ni establecer una característica permanente de vulnerabilidad.

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Factores individuales
      

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img14.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 Los factores individuales son las condiciones concretas que se reconocen al analizar las variables de vulnerabilidad. Mientras la variable indica qué observar, el factor describe el hallazgo.

        .container
          .row.align-items-center.bg-color-02.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 Por ejemplo, comunicación es una variable; desconocer a quién informar durante un traslado es un factor identificado. Esta distinción permite pasar de una descripción general a una necesidad de intervención.

    .container
      .row.align-items-center.bg-color-06.mb-5.p-3.br-20
        .col-lg-12
          p.mb-0.text-center Entre los factores que pueden requerir fortalecimiento se encuentran:

    .row.mb-lg-5.mb-4.justify-content-center
      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-07.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img15.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Información insuficiente sobre las condiciones actuales del entorno.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-07.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img16.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Desconocimiento de los procedimientos de protección y reporte.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-07.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img17.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Preparación limitada para la actividad asignada.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-07.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img18.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Dificultad para organizar un mensaje y solicitar apoyo.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-07.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img19.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Falta de práctica para reconocer cambios que exijan revisar la seguridad.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-07.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img20.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Desconocimiento de los recursos y mecanismos institucionales disponibles.



    .bloque-texto-g.bg-color-05.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img29.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Su importancia depende de la actividad y de la amenaza. Desconocer un canal alterno puede tener efectos diferentes en una institución con varios mecanismos de apoyo que durante un desplazamiento en un lugar con comunicación limitada.


    .container
      .row.align-items-center.bg-color-02.mb-3.p-3.br-15
        .col-lg-12
          p.mb-0 El miedo, la tensión o la incertidumbre pueden presentarse ante una amenaza. Su presencia no demuestra, por sí sola, incapacidad para realizar el trabajo ni responsabilidad por una agresión. El análisis debe centrarse en los apoyos y las condiciones que la persona necesita para protegerse. <br> La experiencia también debe examinarse en contexto. Haber realizado una actividad previamente no reemplaza la actualización de información ni la verificación de las condiciones de seguridad.

    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Factores protectores

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img21.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 Los factores protectores son capacidades, condiciones y recursos que favorecen la preparación y pueden contribuir a disminuir la vulnerabilidad. Su identificación permite reconocer qué funciona y qué debe fortalecerse.

        .container
          .row.align-items-center.bg-color-02.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 En el ámbito individual incluyen el conocimiento del contexto, la preparación para la actividad, la comunicación clara y la comprensión de los procedimientos. Estas capacidades adquieren utilidad cuando existen condiciones institucionales que permiten aplicarlas.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 6.
          span Condiciones y factores de protección
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Condición identificada
                th Factor protector que puede fortalecerse
            tbody
              tr
                td.text-bold Desconocimiento de las condiciones de seguridad del entorno.
                td Consulta y actualización de información pertinente antes de la actividad.
              tr
                td.text-bold Dificultad para reconocer señales de alerta.
                td Formación y práctica para identificar cambios que requieren revisar la seguridad.
              tr
                td.text-bold Desconocimiento de la ruta de respuesta.
                td Comprensión y práctica del procedimiento institucional.
              tr
                td.text-bold Dificultades de comunicación durante situaciones de tensión.
                td Preparación para describir hechos, solicitar apoyo y comunicarse sin confrontación.
              tr
                td.text-bold Limitaciones para solicitar apoyo.
                td Definición y comprobación de responsables, canales y mecanismos de comunicación.
      
    .bloque-texto-g.bg-color-05.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para convertir un factor protector en una acción verificable es necesario precisar qué se hará y cómo se comprobará. Por ejemplo, “mejorar la comunicación” es una intención general; “realizar una prueba del canal principal y alterno antes del desplazamiento” describe una acción observable. 

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img23.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0

        .container
          .row.align-items-center.bg-color-02.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 La comprobación debe realizarse con relación a la actividad. Un procedimiento conocido puede requerir actualización, y un recurso que funcionó anteriormente puede no estar disponible en el momento de uso.
        p.mb-0 La preparación individual y los apoyos institucionales se complementan. La protección requiere mantener esa relación durante la planificación, el desarrollo y la revisión de las actividades sanitarias.


    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Técnicas cognitivo-conductuales


    .px-lg-0.py-lg-0.px-0.py-0
      img(src="@/assets/curso/tema2/img24.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-right")
        p.banner-text Las técnicas cognitivo-conductuales consideradas en este componente se orientan a reconocer pensamientos, emociones y conductas, y a organizar la actuación ante situaciones de tensión. Se abordan como habilidades de preparación y autorregulación, sin desarrollar una intervención psicoterapéutica.

    .bloque-texto-g.bg-color-05.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img25.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Organización Mundial de la Salud presenta habilidades prácticas para afrontar el estrés, entre ellas reconocer pensamientos y emociones y recuperar la atención sobre el presente. Estas orientaciones aportan un referente para la preparación personal, sin reemplazar la intervención sobre las causas de inseguridad (OMS, 2020).

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img26.png", data-aos="zoom-in").mx-auto.w-md-75
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-02" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Reconozca su activación")
            p.mb-0.ms-lg-5 Observe cambios en su cuerpo, atención o forma de comunicarte. Identificarlos permite reconocer una necesidad de preparación o apoyo.

          .tarjeta(titulo="Respire cuando sea seguro")
            p.mb-0.ms-lg-5 Utilice una respiración suave y pausada cuando las condiciones permitan hacerlo. Mantenga la atención sobre el entorno y las medidas de protección.

          .tarjeta(titulo="Distinga los hechos")
            p.mb-0.ms-lg-5 Reconozca qué observa y qué está interpretando. Una expresión amenazante es información que requiere atención; no debe descartarse como una percepción sin fundamento.

          .tarjeta(titulo="Use autoinstrucciones")
            p.mb-0.ms-lg-5 Seleccione una indicación vinculada al procedimiento: observar, comunicar o solicitar apoyo. Evita mensajes que te lleven a permanecer en una situación insegura.

          .tarjeta(titulo="Practique con su equipo")
            p.mb-0.ms-lg-5 Ensaye la comunicación y la selección de medidas mediante situaciones guiadas y seguras. Utilice los resultados para definir qué necesita fortalecerse.


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img23.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 La comunicación y la reducción de tensiones también requieren aprendizaje. El manual del Comité Internacional de la Cruz Roja para participantes ofrece un referente para fortalecer estas habilidades en instalaciones de salud (CICR, 2022).

        .container
          .row.align-items-center.bg-color-02.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Por ejemplo, ante una inconformidad expresada en tono elevado, una persona del equipo reconoce que está acelerando su respuesta. Si las condiciones son seguras, puede hacer una pausa breve, organizar un mensaje claro y solicitar el apoyo previsto. 


    .container
      .row.align-items-center.bg-color-06.mb-3.p-3.br-15
        .col-lg-12
          p.mb-0 Si aparecen intentos de agresión o cambian las condiciones de seguridad, debe priorizar la protección y activar el procedimiento correspondiente. Estas estrategias complementan la preparación individual. No garantizan que una agresión se detenga ni trasladan al trabajador la responsabilidad de controlar la violencia.




















































  //
    .bg-full-width.bg-fondo-1
      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema2/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text El diseño gráfico organiza imágenes, textos y otros elementos para comunicar un mensaje. En el sistema moda, permite presentar productos, explicar sus características y construir piezas coherentes con la identidad de una marca. <br> Para tomar estas decisiones es necesario comprender la composición, la percepción visual, el color y la tipografía. Su aplicación ayuda a orientar la atención y facilitar la lectura en medios impresos y digitales.

      separador
      
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Elementos del diseño y principios de composición 

      .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La composición es la organización de los elementos dentro de un espacio. Cada fotografía, texto o figura ocupa una posición y establece relaciones con los demás componentes de la pieza.

          p.mb-0 Antes de distribuirlos, conviene reconocer los elementos con los que se construye un diseño.

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-2 Tabla 2.
            span Elementos que intervienen en el diseño
          .tabla-a.tb-custom.mb-0
            table
              thead
                tr
                  th Grupo
                  th Elementos y significado
                  th Aplicación en moda
              tbody
                tr
                  td Conceptuales
                  td
                    | Punto: ubicación.
                    br
                    | Línea: recorrido.
                    br
                    | Plano: superficie.
                    br
                    | Volumen: extensión en tres dimensiones o su representación.
                  td Una línea separa secciones; las luces y sombras sugieren el volumen de un bolso.
                tr
                  td Visuales
                  td Forma, medida, color y textura: características que permiten reconocer y diferenciar los elementos.
                  td El tamaño de una fotografía destaca una prenda; un acercamiento muestra su tejido.
                tr
                  td De relación
                  td Dirección, posición, espacio y gravedad visual: organizan la orientación, ubicación, separación y sensación de peso o estabilidad.
                  td Una fotografía inclinada introduce dinamismo; los márgenes separan el contenido de los bordes.
                tr
                  td Prácticos
                  td Representación, significado y función: relacionan lo que se muestra, lo que comunica y el propósito que cumple.
                  td Una imagen de detalle permite observar el cierre de una chaqueta y comprender su funcionamiento.

      .container
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12.bg-color-09.p-4.br-15
            p.mb-0.text-center Estos elementos se articulan mediante principios que ayudan a construir una composición comprensible en una pieza gráfica.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-09.p-2.mb-2
              h4.text-center.mb-0 Jerarquía y énfasis
            p.text-center.mb-0 Establecen qué debe observarse primero. El tamaño, la ubicación y el contraste permiten destacar la información principal y diferenciarla de los detalles.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-09.p-2.mb-2
              h4.text-center.mb-0 Equilibrio
            p.text-center.mb-0 Distribuye el peso visual. Puede ser simétrico, con elementos semejantes a ambos lados, o asimétrico, mediante elementos diferentes que se compensan.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-09.p-2.mb-2
              h4.text-center.mb-0 Unidad y armonía
            p.text-center.mb-0 Relacionan los componentes mediante criterios compartidos. Mantener una paleta, un tratamiento fotográfico y estilos tipográficos consistentes favorece la coherencia de la pieza.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-09.p-2.mb-2
              h4.text-center.mb-0 Contraste y tensión
            p.text-center.mb-0 El contraste diferencia elementos por tamaño, color, forma o textura. La tensión introduce relaciones que atraen la atención, como una posición inesperada.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-09.p-2.mb-2
              h4.text-center.mb-0 Repetición y ritmo
            p.text-center.mb-0 La repetición utiliza elementos semejantes; el ritmo organiza su aparición mediante intervalos o variaciones. Ambos pueden establecer continuidad entre las páginas de un catálogo.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-09.p-2.mb-2
              h4.text-center.mb-0 Dirección y dinamismo
            p.text-center.mb-0 Las líneas, diagonales y orientaciones sugieren recorridos visuales. Su disposición puede conducir la mirada desde la fotografía del producto hacia su descripción.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-09.p-2.mb-2
              h4.text-center.mb-0 Proporción, alineación y espacio libre
            p.text-center.mb-0 Relacionan tamaños, ordenan elementos sobre ejes y reservan áreas de descanso. El espacio libre permite separar contenidos y destacar información.

    .row.justify-content-center.mb-3
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa de moda prepara una pieza para presentar una chaqueta. Utiliza una fotografía principal, un título breve y un enlace para consultar sus características. Alinea los textos, mantiene márgenes y diferencia sus tamaños para establecer un orden de lectura.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Percepción visual y leyes de la Gestalt

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img05.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-09.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Las leyes de la Gestalt surgen del movimiento alemán Gestalt a principios del siglo XX, este se basa en que el todo es superior a la suma de sus partes. Este movimiento permitió entender las imágenes a partir de los principios de la percepción visual.
        p.mb-0 Los principios de la Gestalt explican tendencias de agrupación y reconocimiento que pueden orientar la construcción de piezas gráficas.  

    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-c1.p-3.br-15
          p.mb-0.text-center La tabla a continuación, enumera y explica dichos principios. 


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 3.
          span Principios de percepción aplicados a la comunicación de moda
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Principio
                th ¿Qué describe?
                th Aplicación
            tbody
              tr
                td Proximidad
                td Los elementos cercanos tienden a percibirse como relacionados.
                td Ubicar el precio junto al producto correspondiente.
              tr
                td Semejanza
                td Las características compartidas favorecen la agrupación visual.
                td Mantener un mismo estilo para los botones de consulta.
              tr
                td Continuidad
                td Se tiende a seguir recorridos y direcciones continuas.
                td Alinear imágenes para orientar la lectura del catálogo.
              tr
                td Cierre
                td Se pueden reconocer figuras aunque sus contornos estén incompletos.
                td Sugerir una silueta mediante trazos separados.
              tr
                td Figura y fondo
                td Se distingue un elemento principal respecto de su entorno.
                td Separar visualmente una prenda del fondo fotográfico.
              tr
                td Simetría
                td Las partes simétricas pueden percibirse como una unidad.
                td Organizar dos vistas de un producto alrededor de un eje.
              tr
                td Dirección común
                td Los elementos que se desplazan conjuntamente tienden a agruparse.
                td Animar juntas las imágenes de una misma categoría.
              tr
                td Pregnancia o buena forma
                td Se tiende a reconocer organizaciones simples y estables.
                td Simplificar un símbolo para facilitar su identificación.


    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-019.p-3.br-15
          p.mb-0.text-center Estos principios orientan el diseño, pero no garantizan una interpretación idéntica en todas las personas (ILERNA, 2024).
    
    .row.justify-content-center.mb-4
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa presenta tres bolsos en una página. Al acercar cada nombre y precio a su fotografía y separar los grupos entre sí, facilita que el consumidor relacione la información con el producto correcto.


    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3. Teoría del color y aplicaciones gráficas

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img06.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-09.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 El color permite diferenciar elementos, establecer relaciones y destacar información. Su selección debe considerar la identidad de marca, el contenido y el medio de publicación.
        p.mb-2 Para describirlo se utilizan tres propiedades: tono, que identifica el color; saturación, que expresa su intensidad; y luminosidad o valor, que indica qué tan claro u oscuro se percibe.

        p.mb-0 Los colores primarios dependen del modelo utilizado. Sus combinaciones generan colores secundarios y otras variaciones. En el círculo cromático tradicional de pintura, los terciarios se obtienen al combinar un primario con un secundario adyacente.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img07.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        .bg-fondo-01.px-lg-5.py-lg-5.px-4.py-4.mb-0(style="border-radius: 0px !important")
          SlyderA(tipo="b").bg-color-white.p-lg-4.p-2.tarjeta
            .row.p-3.align-items-center
              .col-lg-12.mb-0
                h4 Monocromática
                p.mb-0 Utiliza variaciones de un mismo tono. Una pieza puede combinar azules claros y oscuros para diferenciar áreas y conservar continuidad.
            .row.p-3.align-items-center
              .col-lg-12.mb-0
                h4 Análoga
                p.mb-0 Combina tonos próximos en el círculo cromático, como amarillo, amarillo anaranjado y naranja. Permite construir relaciones cromáticas cercanas.
            .row.p-3.align-items-center
              .col-lg-12.mb-0
                h4 Complementaria
                p.mb-0 Relaciona tonos opuestos en el círculo cromático elegido. Puede emplear uno como predominante y otro como acento para destacar información.
            .row.p-3.align-items-center
              .col-lg-12.mb-0
                h4 Triádica
                p.mb-0 Utiliza tres tonos distribuidos de manera equidistante en el círculo cromático. Conviene establecer proporciones para evitar que todos compitan por la atención.



    .container
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12.bg-color-019.p-3.br-15
          p.mb-0.text-center En la preparación de archivos también debe distinguirse el medio de salida:

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-11.mb-3.mb-lg-0
        .tarjeta.tarjeta--azul.p-4.h-100
          h4.mb-2 RGB
          p.mb-0 Combina luz roja, verde y azul; se utiliza en pantallas.
      .col-lg-5.col-md-11
        .tarjeta.tarjeta--azul.p-4.h-100
          h4.mb-2 CMYK
          p.mb-0 Combina tintas cian, magenta, amarilla y negra; se emplea habitualmente en impresión.

    .container
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12.bg-color-09.p-3.br-15
          p.mb-0.text-center La conversión entre modelos puede modificar la apariencia de algunos colores. Por ello, conviene revisar el resultado según el destino de la pieza.

    .row.justify-content-center.mb-5
      .col-lg-12
        p.mb-0 El color debe facilitar la lectura mediante un contraste suficiente. Además, sus asociaciones culturales y emocionales dependen del contexto; no permiten predecir por sí solas la respuesta del consumidor.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa presenta una colección con fotografías sobre fondo claro y textos oscuros. Reserva un color de acento para el enlace de consulta e identifica las opciones de la prenda mediante muestras y nombres escritos, facilitando su reconocimiento.


    .tarjeta.bg-color-03.p-4.mb-4
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Lectura sugerida. Teoría del color
              p.mb-0 Para ampliar los conocimientos sobre la teoría del color, se invita a consultar el recurso Teoría del color, de Andrea de la Rubia Gómez-Moran (2024), que aborda los fundamentos de la mezcla de colores y sus relaciones. Su consulta permite complementar la comprensión de las combinaciones cromáticas y orientar su aplicación en piezas de comunicación visual.
            .col-sm-auto
              a.boton.color-acento-botones.text-dark(:href="'https://hdl.handle.net/10115/39913'" target="_blank")
                span Ir al recurso
                // i.fas.fa-file-download

    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Tipografía, jerarquía y legibilidad

    .px-lg-0.py-lg-0.px-0.py-0
      img(src="@/assets/curso/tema2/img08.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La tipografía organiza la presentación visual del texto. Su elección influye en el carácter de una pieza y en la facilidad con que pueden reconocerse y leerse sus mensajes. <br> Una familia tipográfica reúne caracteres con un diseño común y puede incluir variantes de peso, ancho e inclinación. Estas variantes permiten diferenciar títulos, descripciones y otros niveles de información.

   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        TabsC.color-primario.mb-0
          .py-3.py-md-4.px-5(titulo="Romanas o con serifas")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.mb-4.mb-md-0
                p.mb-0 Presentan remates en sus trazos. Pueden utilizarse en títulos y contenidos editoriales, siempre que su tamaño y contraste permitan leerlas con facilidad.
              .col-lg-2.col-md-4
                figure
                  img(src='@/assets/curso/tema2/img09.png', alt='')
          .py-3.py-md-4.px-5(titulo="Palo seco o sin serifas")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.mb-4.mb-md-0
                p.mb-0 Carecen de remates. Suelen emplearse en interfaces, catálogos y descripciones, aunque su legibilidad también depende del diseño y de las condiciones de presentación.
              .col-lg-2.col-md-4
                figure
                  img(src='@/assets/curso/tema2/img10.png', alt='')
          .py-3.py-md-4.px-5(titulo="Rotuladas o de inspiración manual")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.mb-4.mb-md-0
                p.mb-0 Evocan trazos caligráficos o de escritura. Pueden aportar carácter a mensajes breves; requieren especial cuidado cuando sus formas dificultan el reconocimiento de las letras.
              .col-lg-2.col-md-4
                figure
                  img(src='@/assets/curso/tema2/img11.png', alt='')
          .py-3.py-md-4.px-5(titulo="Decorativas")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.mb-4.mb-md-0
                p.mb-0 Presentan rasgos expresivos o temáticos. Resultan útiles para acentos y títulos cortos cuando conservan la claridad y corresponden con la identidad de marca.
              .col-lg-2.col-md-4
                figure
                  img(src='@/assets/curso/tema2/img12.png', alt='')

    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img13.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
        .container
          .row.align-items-center.bg-color-09.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Para establecer una jerarquía, pueden combinarse tamaño, peso y separación. Un título identifica el tema; un subtítulo organiza la información y el cuerpo desarrolla el mensaje. La inclinación, el ancho y los efectos de contorno o sombra también modifican la apariencia, pero deben utilizarse con moderación.
        p.mb-0 La legibilidad facilita reconocer los caracteres; la lecturabilidad favorece comprender y recorrer el texto. Ambas requieren revisar tamaño, contraste, interlineado, longitud de las líneas y espaciado. Las orientaciones sobre accesibilidad recomiendan cuidar estas condiciones y evitar que el color sea el único medio de diferenciación (López-Cuadrado et al., 2024).


    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa utiliza una misma familia tipográfica en su catálogo: negrita para el nombre del producto y peso regular para materiales y cuidados. Antes de publicar, comprueba que los textos puedan leerse desde un teléfono móvil y ajusta los tamaños cuando es necesario.

    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La composición, la percepción visual, el color y la tipografía permiten organizar mensajes gráficos con intención. Su aplicación requiere relacionar la identidad de marca con la claridad de la información y las condiciones de lectura. <br><br>
        p.mb-0 Estos fundamentos también orientan la selección y construcción de fotografías, al ayudar a reconocer qué debe destacarse y cómo presentar visualmente un producto de moda.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
