<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Prevención y mitigación de violencia

    .bg-full-width.bg-fondo-1
      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema6/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text La prevención y la mitigación permiten intervenir sobre las condiciones que pueden afectar la seguridad del personal sanitario. Su aplicación requiere relacionar las amenazas, las vulnerabilidades, las capacidades disponibles y las posibles consecuencias. Las medidas deben responder a los hallazgos del análisis y contar con responsables, recursos y seguimiento. La preparación individual necesita acompañarse de decisiones institucionales que hagan posible la protección. En este capítulo se integran las herramientas de valoración, la selección de medidas y los fundamentos de preparación y respuesta. El propósito es transformar la información en acciones verificables y pertinentes para cada escenario.
    
      separador
      
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 6.1 Prevención y mitigación

      .bloque-texto-g.bg-color-07.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema6/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La prevención y la mitigación son acciones fundamentales para gestionar los riesgos y fortalecer las condiciones de seguridad durante el desarrollo de las actividades institucionales. Ambas permiten anticipar situaciones que puedan generar afectaciones, reducir las condiciones de vulnerabilidad y establecer medidas oportunas para proteger al personal, los recursos y la continuidad de las actividades.

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-10
          TabsC.color-primario.mb-0
            .py-3.py-md-4.px-4(titulo="Prevención")
              .row.align-items-center.mb-0.p-4
                .col-lg-12
                  h4.mb-3 Prevención.
                  p.mb-0 La prevención comprende las acciones orientadas a evitar la aparición de nuevas condiciones de riesgo. Utiliza la información disponible para organizar las actividades, identificar posibles amenazas y establecer controles anticipados que eviten exposiciones innecesarias. Incluye la planificación de las actividades, la revisión de las condiciones del entorno y la definición de procedimientos seguros.

            .py-3.py-md-4.px-4(titulo="Mitigación.")
              .row.align-items-center.mb-0.p-4
                .col-lg-12
                  h4.mb-3 Mitigación.
                  p.mb-0 La mitigación comprende las acciones dirigidas a disminuir las condiciones de riesgo existentes o limitar sus posibles consecuencias. Busca reducir la exposición, fortalecer las capacidades de respuesta y establecer medidas de protección frente a situaciones que no pueden eliminarse por completo. Incluye el mejoramiento de los procedimientos, la disponibilidad de recursos, el fortalecimiento de los mecanismos de comunicación y la coordinación de apoyos institucionales.

    .row.justify-content-center.mb-5
      .col-lg-12
        .bg-color-04.br-20.p-3
          p.mb-0.text-center En conjunto, la prevención busca evitar que surjan nuevos riesgos, mientras que la mitigación procura reducir los riesgos existentes y limitar sus efectos.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 14.
          span Diferencia prevención y mitigación
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Aspecto
                th Prevención
                th Mitigación
            tbody
              tr
                td.text-bold Propósito
                td Evitar nuevas condiciones de riesgo.
                td Disminuir condiciones existentes o sus posibles consecuencias.
              tr
                td.text-bold Aplicación
                td Planificar actividades y establecer controles antes de generar nuevas exposiciones.
                td Intervenir sobre amenazas o vulnerabilidades identificadas.
              tr
                td.text-bold Ejemplo
                td Definir condiciones de comunicación y apoyo antes de programar una nueva actividad extramural.
                td Corregir una falla de comunicación identificada y comprobar el mecanismo alterno.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img03.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 Consultar información del entorno aporta al conocimiento del riesgo. La medida preventiva utiliza esa información para evitar una exposición no prevista; por ejemplo, ajustar la programación cuando las condiciones comprometen la seguridad.

        .container
          .row.align-items-center.bg-color-02.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 Una actividad puede requerir prevención y mitigación. La clasificación depende del propósito de la medida y de la condición que atiende, no únicamente del momento en que se aplica.

    separador
    
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Herramientas de valoración del riesgo

    p.mb-4 Las herramientas permiten organizar información y establecer criterios para tomar decisiones. Su utilidad depende de que los datos sean pertinentes, verificables y relacionados con una actividad concreta.

    .row.justify-content-center.align-items-center.mb-5.mb-lg-4
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img04.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Reconoce el contexto").align-content-center
            .row.mb-0.justify-content-center.align-items-center
              .col-lg-auto.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema6/img06.png", data-aos="zoom-in", style="max-width: 100px").mx-auto
              .col-lg.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-0 Describe las condiciones internas y externas: actividad, lugar, horario, responsabilidades, recursos y situaciones del entorno.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Identifica amenazas y vulnerabilidades").align-content-center
            .row.mb-0.justify-content-center.align-items-center
              .col-lg-auto.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema6/img05.png", data-aos="zoom-in", style="max-width: 100px").mx-auto
              .col-lg.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-0 Reconoce qué puede causar daño y cuáles condiciones aumentan la exposición o dificultan la protección.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Comprueba las capacidades").align-content-center
            .row.mb-0.justify-content-center.align-items-center
              .col-lg-auto.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema6/img07.png", data-aos="zoom-in", style="max-width: 100px").mx-auto
              .col-lg.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-0 Verifica la preparación del personal, el funcionamiento de los recursos y la disponibilidad de los apoyos previstos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Analiza las consecuencias").align-content-center
            .row.mb-0.justify-content-center.align-items-center
              .col-lg-auto.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema6/img08.png", data-aos="zoom-in", style="max-width: 100px").mx-auto
              .col-lg.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-0 Establece quiénes o qué podrían resultar afectados y cómo podría comprometerse la integridad de las personas o la continuidad de la atención.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Valora y selecciona medidas").align-content-center
            .row.mb-0.justify-content-center.align-items-center
              .col-lg-auto.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema6/img09.png", data-aos="zoom-in", style="max-width: 100px").mx-auto
              .col-lg.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-0 Relaciona los hallazgos con los criterios de actuación. Define acciones que respondan a las condiciones identificadas.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Verifica y actualiza").align-content-center
            .row.mb-0.justify-content-center.align-items-center
              .col-lg-auto.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema6/img10.png", data-aos="zoom-in", style="max-width: 100px").mx-auto
              .col-lg.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-0 Comprueba la implementación y revisa el análisis cuando cambien las amenazas, las vulnerabilidades o las capacidades.

    .row.justify-content-center.mb-4
      .col-lg-12
        .bg-color-04.br-20.p-4
          p.mb-0 Esta secuencia orienta el análisis. Cuando existe peligro inmediato, la protección no debe esperar a que se complete un instrumento.
          p.mb-0 La información pendiente se registra como tal: no puede convertirse en certeza ni descartarse sin examinar sus implicaciones.

    separador
    
    .bg-full-width.bg-fondo-1
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 6.3 Valoración de la vulnerabilidad individual

      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema6/img11.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
          p.mb-3 La valoración individual aplica las variables y los descriptores del capítulo 2 a una actividad determinada. Permite reconocer capacidades comprobadas y necesidades de fortalecimiento.

          .container
            .row.align-items-center.bg-color-05.mb-3.p-3.br-15
              .col-lg-12
                p.mb-0 Se utilizan las categorías preparación comprobada (F) , preparación parcial (P) y atención prioritaria (A). Cuando falta información, se registra no verificado (NV).

          p.mb-0 Su aplicación comprende cinco acciones:

      .row.mb-lg-4.mb-4.justify-content-center
        .col-lg-4.col-md-6.p-2
          .container.h-100
            .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
              .col-lg-auto
                img.d-none.d-lg-flex(src="@/assets/curso/tema6/img12.png", style="max-width: 75px").mx-auto
              .col-lg
                p.mb-0 Precisar el escenario: identificar la actividad y sus condiciones.
        .col-lg-4.col-md-6.p-2
          .container.h-100
            .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
              .col-lg-auto
                img.d-none.d-lg-flex(src='@/assets/curso/tema6/img13.png' alt='')
              .col-lg
                p.mb-0 Reconocer la amenaza: describir qué podría afectar al personal.
        .col-lg-4.col-md-6.p-2
          .container.h-100
            .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
              .col-lg-auto
                img.d-none.d-lg-flex(src='@/assets/curso/tema6/img14.png' alt='')
              .col-lg
                p.mb-0 Comprobar la preparación: revisar las variables mediante evidencias.
        .col-lg-4.col-md-6.p-2
          .container.h-100
            .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
              .col-lg-auto
                img.d-none.d-lg-flex(src='@/assets/curso/tema6/img15.png' alt='')
              .col-lg
                p.mb-0 Registrar los hallazgos: explicar qué se observó y qué categoría corresponde.
        .col-lg-4.col-md-12.p-2
          .container.h-100
            .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
              .col-lg-auto
                img.d-none.d-lg-flex(src='@/assets/curso/tema6/img16.png' alt='')
              .col-lg
                p.mb-0 Definir el fortalecimiento: establecer acciones, responsables y verificación.

      .row.justify-content-center.mb-5
        .col-lg-12
          .bg-color-05.br-20.p-3
            p.mb-0.text-center Las categorías no se suman ni equivalen a niveles generales de riesgo. Sus resultados se interpretan junto con la amenaza y las condiciones institucionales.

      .row.justify-content-center.mb-5
        .col-lg-10.mb-lg-0
          .cajon.bg-color-c1.px-5.py-4.h-100.align-content-center
            h4 Ejemplo aplicado
            p.mb-0 Antes de un traslado, un integrante del equipo reconoce las amenazas del recorrido, pero necesita aclarar algunos pasos del aviso. También desconoce a quién solicitar apoyo durante el horario previsto.
            
      .bloque-texto-g.bg-color-05.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema6/img17.png')})`}"
        )
        .bloque-texto-g__texto.p-4
            p.mb-3 El primer hallazgo corresponde a preparación parcial en conocimiento; el segundo requiere atención prioritaria en comunicación. Las acciones consisten en aclarar el procedimiento, confirmar al responsable y practicar el aviso.<br>
            p.mb-0 Si el canal no funciona, también existe una condición institucional que debe intervenirse. La solución no puede limitarse a capacitar al trabajador.

    separador
    
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Matriz de valoración del riesgo

    p.mb-0 La matriz relaciona una actividad con sus amenazas, vulnerabilidades, capacidades, consecuencias y medidas de intervención.
    p.mb-4 En este componente se propone una valoración cualitativa orientada a priorizar acciones. El formato conserva seis campos:

    .row.mb-lg-4.mb-4.justify-content-center
      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-13.mb-0.br-15.h-100
            .col-lg-auto.p-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema6/img25.svg", style="max-width: 75px").mx-auto
            .col-lg.p-3
              p.mb-0 Situación o actividad.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-13.mb-0.br-15.h-100
            .col-lg-auto.p-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema6/img25.svg", style="max-width: 75px").mx-auto
            .col-lg.p-3
              p.mb-0 Amenaza identificada.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-13.mb-0.br-15.h-100
            .col-lg-auto.p-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema6/img25.svg", style="max-width: 75px").mx-auto
            .col-lg.p-3
              p.mb-0 Vulnerabilidades.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-13.mb-0.br-15.h-100
            .col-lg-auto.p-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema6/img25.svg", style="max-width: 75px").mx-auto
            .col-lg.p-3
              p.mb-0 Factores protectores o capacidades.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-13.mb-0.br-15.h-100
            .col-lg-auto.p-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema6/img25.svg", style="max-width: 75px").mx-auto
            .col-lg.p-3
              p.mb-0 Posibles consecuencias.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-13.mb-0.br-15.h-100
            .col-lg-auto.p-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema6/img25.svg", style="max-width: 75px").mx-auto
            .col-lg.p-3
              p.mb-0 Medidas de prevención y mitigación.



    p.mb-5 La interpretación considera si la amenaza está ocurriendo, cuáles consecuencias podrían presentarse y qué controles y apoyos están comprobados.

    

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img18.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-02" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Protección inmediata")
            p.mb-0.ms-lg-5 Corresponde cuando existe una agresión en curso o una condición que compromete de manera inmediata la seguridad. Se prioriza la protección y se activan los apoyos previstos.
          .tarjeta(titulo="Intervención previa")
            p.mb-0.ms-lg-5 Corresponde cuando la actividad está programada y existen hallazgos que requieren comprobación o fortalecimiento antes de revisar sus condiciones de realización.
          .tarjeta(titulo="Seguimiento programado")
            p.mb-0.ms-lg-5 Corresponde cuando las medidas están comprobadas y no se identifica una condición que exija protección inmediata o intervención previa pendiente. Se mantiene seguimiento y se revisan los cambios.
            p.mb-0.ms-lg-5 Estas prioridades son criterios didácticos de actuación. No representan puntuaciones ni niveles numéricos de riesgo y no constituyen una autorización automática.




   
    .row.justify-content-center.mb-3
      .col-lg-10
        .tarjeta.bg-color-08.p-4.mb-0
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.p-0
              img(src="@/assets/curso/tema6/img19.svg", alt="", style="max-width: 130px")
            .col
              .row.justify-content-between.align-items-center.p-3
                .col.mb-3.mb-sm-0.text-white
                  h4.mb-1 Caso - Del hallazgo a la decisión
                  p.mb-0 Una jornada extramural enfrenta una restricción de paso, comunicación sin verificar y falta de claridad sobre el apoyo disponible. Lo invitamos a analizar el caso anexo, identificar las amenazas y vulnerabilidades, relacionar las posibles consecuencias y proponer acciones verificables. Apóyese en el formato de matriz y consulta el ejemplo resuelto para contrastar tus decisiones.
                .col-sm-auto
                  a.boton.color-acento-botones.text-dark(:href="'https://www.freepik.es/icono/reproductor-video_1324244#fromView=search&page=1&position=3&uuid=2552c347-c94b-4710-a77e-0bd62f345dc5'" target="_blank")
                    span Ir al recurso
                    // i.fas.fa-file-download


    separador
    
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.5 Fundamentos del plan de contingencia

    .row.justify-content-center.mb-5
      .col-lg-12
        .bg-color-02.br-20.p-3
          p.mb-0 El plan de contingencia organiza la preparación frente a escenarios identificados. Este debe corresponder a las condiciones reales del servicio y a los recursos disponibles. <br>Los siete componentes o escenarios que hacen parte del plan de contingencia, son los siguientes:



    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img20.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .bg-fondo-01.p-lg-5.p-4.mb-0
          SlyderA(tipo="b").bg-color-white.p-3.tarjeta
            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Escenario de riesgo
                  p.mb-0 Describe la situación para la cual se requiere preparación, considerando la actividad sanitaria, la amenaza identificada y las condiciones que pueden afectar la seguridad del personal y la continuidad de la atención.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Medidas previstas
                  p.mb-0 Comprenden las acciones de prevención, protección y respuesta establecidas a partir del análisis del riesgo. Estas medidas buscan reducir la exposición, fortalecer las capacidades y limitar las posibles consecuencias de una situación de violencia.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Roles y responsabilidades
                  p.mb-0 Establecen las funciones de quienes participan en la respuesta, las responsabilidades de coordinación y los mecanismos para tomar decisiones. Su claridad facilita una actuación organizada y oportuna.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Recursos disponibles
                  p.mb-0 Corresponden a los medios humanos, técnicos y materiales necesarios para desarrollar las acciones previstas. La capacidad de respuesta depende de su disponibilidad, funcionamiento y acceso cuando se requieren.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Comunicación
                  p.mb-0 Comprende los responsables, canales y medios alternativos para transmitir información, emitir alertas y solicitar apoyo. Facilita la coordinación entre el personal sanitario y las instancias responsables de la respuesta.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Condiciones de activación
                  p.mb-0 Son las situaciones o señales que determinan el inicio de las acciones previstas. Permiten reconocer cuándo se requiere adoptar medidas de protección, solicitar apoyo o activar la ruta de respuesta.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Ruta de respuesta
                  p.mb-0 Organiza la secuencia y articulación de las acciones de protección, comunicación y apoyo ante una situación de riesgo. Su aplicación depende de las condiciones del evento y de los procedimientos institucionales.

    .row.justify-content-center.mb-3
      .col-lg-12
        .bg-color-06.br-20.p-3
          p.mb-0 La capacidad de respuesta requiere que los responsables conozcan sus funciones y que los recursos previstos estén disponibles y puedan utilizarse. Por ello, la existencia del documento debe acompañarse de preparación y verificación de las condiciones para actuar.


    separador
    
    .bg-full-width.bg-fondo-1
      #t_6_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 6.6 Ruta de respuesta

      p.mb-0 La ruta organiza las acciones para proteger al personal y coordinar los apoyos. Su aplicación se ajusta al evento, al contexto y a los procedimientos institucionales.
      p.mb-4 Algunas acciones pueden realizarse simultáneamente. La secuencia facilita la consulta, pero no impone tiempos fijos.


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema6/img21.png", data-aos="zoom-in", alt="")
        .col-lg-8.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Reconoce la situación")
              .col-12
                p.mb-0 Identifica qué ocurre, dónde sucede, quiénes están expuestos y qué cambios comprometen la seguridad.

            .row(numero="2" titulo="Prioriza la protección")
              .col-12
                p.mb-0 Aplica las medidas previstas según las circunstancias. La atención del peligro inmediato no depende de completar un formulario.

            .row(numero="3" titulo="Comunica y solicita apoyo")
              .col-12
                p.mb-0 Transmite información breve: lugar, hechos observables, personas que requieren protección y ayuda necesaria. Utiliza los mecanismos establecidos.

            .row(numero="4" titulo="Coordina la atención")
              .col-12
                p.mb-0 Activa los responsables y recursos correspondientes. Gestiona las necesidades inmediatas de las personas afectadas.

            .row(numero="5" titulo="Registra, reporta y revisa")
              .col-12
                p.mb-2 Documenta lo ocurrido y gestiona los mecanismos aplicables:
                ul.lista-ul--color.mb-0
                  li.mb-2
                    i.fa.fa-square
                    span #[b Aviso interno:] activa la coordinación y los apoyos institucionales.
                  li.mb-2
                    i.fa.fa-square
                    span #[b Reporte sanitario:] corresponde cuando se afecta la Misión Médica, mediante los responsables, formatos y canales aplicables.
                  li.mb-0
                    i.fa.fa-square
                    span #[b Reporte laboral:] se tramita según la naturaleza del evento y los procedimientos de seguridad y salud en el trabajo.


    
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.bg-color-08.p-4.mb-0
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1.p-0
                img(src="@/assets/curso/tema6/img19.svg", alt="", style="max-width: 130px")
              .col
                .row.justify-content-between.align-items-center.p-3
                  .col.mb-3.mb-sm-0.text-white
                    h4.mb-1 Manual de misión médica
                    p.mb-0 El Manual de Misión Médica incluye un formato para reportar infracciones e incidentes. Su utilización debe articularse con los procedimientos y canales vigentes de la institución y del territorio..
                  .col-sm-auto
                    a.boton.color-acento-botones.text-dark(:href="'https://normograma.supersalud.gov.co/compilacion/docs/pdf/resolucion_minsaludps_4481_2012.pdf'" target="_blank")
                      span Ir al recurso
                      // i.fas.fa-file-download

      .row.justify-content-center.mb-3
        .col-lg-12
          .bg-color-05.br-20.p-4
            p.mb-0 La revisión posterior identifica qué funcionó, qué dificultades se presentaron y cuáles acciones requieren seguimiento. El registro y el reporte complementan la protección; no la reemplazan.
      
      separador
      
      #t_6_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 6.7 Desescalación de la violencia

      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema6/img22.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text La desescalación utiliza estrategias de comunicación y comportamiento para disminuir la tensión cuando existen condiciones para una interacción segura. <br>El CICR dispone de un manual de formación orientado a anticipar situaciones tensas y fortalecer habilidades de escucha y comunicación en instalaciones de salud (CICR, 2022) e implementar estrategias y sus condiciones de aplicación.


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img23.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .bg-fondo-01.p-lg-5.p-4.mb-0
          SlyderA(tipo="b").bg-color-white.p-3.tarjeta
            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Escucha activa
                  p.mb-0 Permite que la persona explique su inconformidad cuando las condiciones de seguridad lo permiten. La escucha facilita la comprensión de la solicitud, sin implicar la aceptación de amenazas o agresiones.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Comunicación clara
                  p.mb-2 Se caracteriza por mensajes breves y respetuosos, basados en información conocida y en gestiones que el personal puede realizar.
                  p.mb-0 #[b Ejemplo:] “El personal informa que comunicará la solicitud al responsable”, siempre que esa gestión sea posible.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Actitud no confrontativa
                  p.mb-0 El personal evita descalificaciones, provocaciones o discusiones que puedan aumentar la tensión, así como promesas sobre tiempos o resultados que no puede garantizar.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Observación del entorno
                  p.mb-0 Comprende el reconocimiento de cambios en las conductas y en las condiciones del lugar. Una queja no constituye automáticamente una amenaza; un anuncio de agresión indica un cambio en la situación que requiere atención.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Distancia de seguridad
                  p.mb-0 El personal mantiene una ubicación y una separación acordes con las condiciones del lugar y las medidas de protección previstas. La comunicación se desarrolla sin aumentar su exposición al riesgo.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Solicitud de apoyo
                  p.mb-0 El personal activa oportunamente los mecanismos institucionales de apoyo. Ante intentos de agresión, bloqueo del paso u otras condiciones que comprometan la seguridad, la protección constituye la prioridad.


    .row.justify-content-center.mb-4.mb-lg-5
      .col-lg-12
        .bg-color-12.br-20.py-3.px-4
          p.mb-0 La desescalación no obliga al personal a permanecer en peligro ni garantiza que una agresión se detenga. Su aprendizaje requiere ejercicios guiados y seguros, articulados con los procedimientos institucionales.


    .row.mb-lg-5.mb-5.justify-content-center
      .col-lg-7.col-md-12.mb-0.mb-lg-0.order-2.order-lg-2
        .container.h-100
          .row.bg-fondo-02.br-15.p-0.h-100.justify-content-center.align-content-center
            .col-md-8.col-lg-5.mb-0.mb-lg-0.order-1.order-lg-1.p-lg-0.p-3.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/img28.png", data-aos="fade-right").w-md-50.mx-md-auto.ml-25
            .col-lg-6.order-2.order-lg-2.p-4.p-lg-4.mb-3
              h4 ¿Sabías que?
              p(data-aos="fade-left").mb-4 Lo invitamos a escuchar el siguiente Pódcast: 
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-0(
                texto="Decisiones para una atención segura"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast2.mp3')"
              )

      .col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
        .container.h-100
          .row.align-content-center.bg-color-c1.mb-0.p-3.br-15.h-100
            .col-lg-12
              p.mb-2 Ir al pódcast: «Decisiones para una atención segura» y analice cómo un equipo relaciona valoración, prevención, comunicación y activación de apoyos.
              p.mb-0 Al finalizar, identifique una vulnerabilidad, una medida verificable y una condición que exige priorizar la protección. Explique quién debe participar y qué evidencia permitiría comprobar la preparación institucional.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema6/img24.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 La gestión del riesgo de violencia parte del reconocimiento de las amenazas, las vulnerabilidades individuales e institucionales y las condiciones del contexto. Su análisis permite orientar decisiones que prioricen la protección del personal sanitario.

        .container
          .row.align-items-center.bg-color-07.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 La prevención, la mitigación y la preparación para responder se apoyan en herramientas como la matriz de riesgo, el plan de contingencia y las rutas de respuesta. Su utilidad depende de la aplicación de las medidas, la claridad de las responsabilidades y la disponibilidad de recursos.
        p.mb-0 La valoración debe actualizarse cuando cambian las condiciones. La comunicación, la solicitud oportuna de apoyo y la desescalación, cuando existe seguridad para dialogar, fortalecen la capacidad de respuesta y favorecen la continuidad segura de la atención.


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
