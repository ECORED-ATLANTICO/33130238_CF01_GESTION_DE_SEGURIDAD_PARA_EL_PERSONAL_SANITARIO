<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Procesos de gestión del riesgo

    .bg-full-width.bg-fondo-1
      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema3/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-right")
          p.banner-text La gestión del riesgo comprende procesos articulados que permiten reconocer las condiciones que pueden generar afectaciones, intervenir sobre ellas y establecer acciones para responder cuando una situación se presenta. Estos procesos se organizan alrededor del conocimiento del riesgo, la reducción del riesgo y el manejo del riesgo, los cuales se complementan y permiten abordar el riesgo de manera integral.

      .bloque-texto-g.bg-color-10.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En el ejercicio del personal sanitario, estos componentes facilitan el análisis de situaciones de violencia desde una perspectiva preventiva y organizada. Su aplicación permite pasar de la identificación de una amenaza a la valoración de las condiciones de vulnerabilidad, la definición de medidas para disminuir el riesgo y la preparación de acciones de respuesta cuando sea necesario.

      separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Conocimiento del riesgo

    .container
      .row.align-items-center.bg-color-05.p-4.mb-5.br-15
        .col-lg-auto.d-none.d-lg-block.order-2
          img(src="@/assets/curso/tema2/img28.png", style="max-width: 90px").mx-auto
        .col-lg.order-1
          p.mb-0 El conocimiento del riesgo permite comprender qué puede afectar al personal sanitario, en qué condiciones y con cuáles posibles consecuencias. Requiere reunir, verificar y analizar información relacionada con la actividad, el contexto, las amenazas, las vulnerabilidades y las capacidades disponibles. <br>Este proceso debe responder preguntas como:


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img03.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .bg-fondo-01.p-lg-5.p-4.mb-0
          SlyderA(tipo="b").bg-color-white.p-3.tarjeta
            .tarjeta.p-lg-5.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  p.mb-0 <b>Ubicación y condiciones:</b> ¿Dónde y bajo qué condiciones se desarrollará la actividad?

            .tarjeta.p-lg-5.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  p.mb-0 <b>Situaciones de riesgo:</b> ¿Qué situaciones pueden afectar al personal, los recursos o la atención?

            .tarjeta.p-lg-5.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  p.mb-0 <b>Población expuesta:</b> ¿Quiénes pueden estar expuestos?

            .tarjeta.p-lg-5.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  p.mb-0 <b>Factores de vulnerabilidad:</b> ¿Qué condiciones dificultan la protección?

            .tarjeta.p-lg-5.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  p.mb-0 <b>Recursos y apoyos disponibles:</b> ¿Qué apoyos y recursos se encuentran disponibles?

            .tarjeta.p-lg-5.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  p.mb-0 <b>Posibles consecuencias:</b> ¿Qué consecuencias podrían presentarse?


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img04.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 La información debe describir hechos y condiciones concretas. Es necesario distinguir lo que se ha comprobado, lo que corresponde a un reporte pendiente de verificación y aquello sobre lo cual todavía no se dispone de información suficiente.
        .container
          .row.align-items-center.bg-color-03.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 Por ejemplo, antes de una jornada extramural, la institución recibe reportes de restricciones a la movilidad. Conocer el riesgo implica verificar su relación con la vía prevista, identificar las condiciones de comunicación del equipo y analizar cómo podría afectarse el desplazamiento y la prestación del servicio.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img05.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-06.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 La valoración utiliza esta información para establecer prioridades según la metodología adoptada. La sola presencia de una amenaza no permite asignar automáticamente un nivel de riesgo: también deben considerarse la exposición, las vulnerabilidades, las capacidades y las posibles consecuencias.
        p.mb-0 El conocimiento del riesgo debe actualizarse cuando cambien las condiciones. La información revisada antes de una actividad puede requerir una nueva comprobación durante su desarrollo.


    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Reducción del riesgo

    p.mb-4 La reducción del riesgo comprende las acciones dirigidas a prevenir nuevas condiciones de riesgo y disminuir las existentes. Su aplicación parte de los hallazgos del análisis y requiere seleccionar medidas que respondan a las amenazas y vulnerabilidades identificadas. <br>Estas medidas pueden orientarse a:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img06.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Organización de actividades").align-content-center
            .row.mb-0.justify-content-center.align-items-center
              .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/img07.png", data-aos="zoom-in").mx-auto.w-md-50
              .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-0 Ajustar la organización de una actividad para disminuir la exposición.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Fortalecimiento del personal").align-content-center
            .row.mb-0.justify-content-center.align-items-center
              .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/img08.png", data-aos="zoom-in").mx-auto.w-md-50
              .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-0 Fortalecer la preparación del personal.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Mecanismos de comunicación").align-content-center
            .row.mb-0.justify-content-center.align-items-center
              .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/img09.png", data-aos="zoom-in").mx-auto.w-md-50
              .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-0 Definir y comprobar los mecanismos de comunicación.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Conocimiento de procedimientos").align-content-center
            .row.mb-0.justify-content-center.align-items-center
              .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/img10.png", data-aos="zoom-in").mx-auto.w-md-50
              .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-0 Facilitar el conocimiento y la práctica de los procedimientos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Disponibilidad de recursos").align-content-center
            .row.mb-0.justify-content-center.align-items-center
              .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/img11.png", data-aos="zoom-in").mx-auto.w-md-50
              .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-0 Disponer de recursos y apoyos institucionales.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Verificación de condiciones").align-content-center
            .row.mb-0.justify-content-center.align-items-center
              .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/img12.png", data-aos="zoom-in").mx-auto.w-md-50
              .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-0 Revisar las condiciones necesarias para realizar una actividad.


    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-12.mb-0.mb-lg-0.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img13.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
        p.mb-3 Cada medida debe relacionarse con una necesidad concreta. Si se identifica desconocimiento del procedimiento de reporte, corresponde orientar y preparar al equipo. Si el problema es la ausencia de comunicación efectiva, la respuesta requiere disponer de medios adecuados y comprobar su funcionamiento.
        .container
          .row.align-items-center.bg-color-03.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 Retomando la jornada extramural, una medida de reducción consiste en definir y probar los canales de comunicación antes del desplazamiento. La coordinación también debe revisar si las condiciones permiten autorizar la actividad o requieren ajustarla o reprogramarla.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-12.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img14.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
        .container
          .row.align-items-center.bg-color-06.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 La implementación debe precisar qué se hará, quién será responsable y cómo se comprobará el resultado. Entregar un procedimiento no demuestra que el personal pueda aplicarlo; disponer de un recurso tampoco garantiza que funcione en el escenario previsto.
        p.mb-0 Las medidas deben revisarse cuando cambien las circunstancias o se identifiquen dificultades en su aplicación. Su utilidad depende de que respondan a las condiciones reales de la actividad.

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Manejo del riesgo


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-12.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img15.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
        p.mb-3 En el contexto de este componente, el manejo del riesgo comprende la preparación y la respuesta frente a situaciones de violencia, junto con la revisión posterior de lo ocurrido.
        .container
          .row.align-items-center.bg-color-04.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 La preparación se desarrolla antes de que ocurra un evento. Permite definir responsabilidades, reconocer condiciones de activación, disponer de recursos y practicar los mecanismos de comunicación y apoyo.


    .container
      .row.align-items-center.bg-color-05.mb-4.p-3.br-20
        .col-lg-12
          p.mb-0.text-center El equipo necesita conocer:

    .row.mb-lg-5.mb-4.justify-content-center
      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img20.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Qué situaciones requieren activar la respuesta.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img18.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Qué acciones corresponden a su función.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img19.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 A quién debe informar.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img16.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Cómo puede solicitar apoyo.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img17.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Qué recursos se encuentran disponibles.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img21.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Cómo se coordinarán las decisiones institucionales.

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img22.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 La respuesta corresponde a la actuación cuando se presenta una situación que requiere intervención. Debe priorizar la protección del personal y ajustarse a las circunstancias y a los procedimientos establecidos.
        .container
          .row.align-items-center.bg-color-03.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 Por ejemplo, si durante una jornada extramural cambian las condiciones de movilidad y se compromete la seguridad del equipo, corresponde comunicar la situación y activar los mecanismos previstos. Las decisiones deben considerar la información disponible y los apoyos institucionales, evitando actuaciones improvisadas que aumenten la exposición.

    .bg-full-width.bg-fondo-1
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema3/img23.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
          .container
            .row.align-items-center.bg-color-06.mb-3.p-3.br-15
              .col-lg-12
                p.mb-0 La preparación y la respuesta no se limitan al momento de la agresión. Una vez atendidas las necesidades inmediatas de protección, el registro y análisis del evento permiten reconocer dificultades, gestionar apoyos e identificar mejoras.
          p.mb-0 Esta revisión puede mostrar que un canal no funcionó, que una responsabilidad no estaba clara o que una medida resultó útil. Los hallazgos deben incorporarse a la preparación de futuras actividades.

      separador
      
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.4 Herramientas para gestionar el riesgo


      .bloque-texto-g.bg-color-10.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img24.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Las herramientas permiten organizar la información y convertir el análisis en decisiones. Su selección depende del propósito, la actividad y las condiciones del contexto. <br> Las herramientas teóricas aportan conceptos y criterios para comprender las amenazas, las vulnerabilidades, las capacidades y las consecuencias. Las herramientas operativas facilitan el registro, la valoración, la planificación y el seguimiento de las acciones.

      p.mb-4 Entre las herramientas consideradas en este componente se encuentran el análisis del contexto, la escala cualitativa de preparación individual, la matriz de valoración del riesgo, las verificaciones de seguridad, el plan de contingencia y las rutas de respuesta.

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-2 Tabla 7.
            span Gestión del riesgo por procesos
          .tabla-a.tb-custom.mb-0
            table
              thead
                tr
                  th Componente
                  th Pregunta orientadora
                  th Herramientas y acciones asociadas
              tbody
                tr
                  td.text-bold Conocimiento del riesgo
                  td ¿Qué puede ocurrir y cuáles condiciones pueden favorecerlo?
                  td Análisis del contexto, identificación de amenazas y vulnerabilidades, reconocimiento de capacidades y valoración del riesgo.
                tr
                  td.text-bold Reducción del riesgo
                  td ¿Qué puede hacerse para prevenirlo o disminuirlo?
                  td Medidas de prevención y mitigación, fortalecimiento de capacidades y verificación de controles.
                tr
                  td.text-bold Manejo del riesgo
                  td ¿Cómo prepararse y actuar si la situación se presenta?
                  td Plan de contingencia, rutas de respuesta, comunicación, protección y activación de apoyos institucionales.

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img25.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 Las herramientas deben utilizarse de manera articulada. El análisis del contexto aporta información para reconocer amenazas; la valoración de la preparación permite identificar necesidades; y la matriz organiza los hallazgos para relacionarlos con medidas de intervención.
        .container
          .row.align-items-center.bg-color-02.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 El plan de contingencia y las rutas de respuesta utilizan esa información para preparar la actuación. A su vez, el registro de un evento permite revisar los instrumentos y actualizar las medidas.
        p.mb-0 Una herramienta diligenciada no garantiza por sí sola la protección. Su utilidad depende de la calidad de la información, de la interpretación de los resultados y de la aplicación y verificación de las acciones correspondientes.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c1.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 En un servicio de atención se han reportado episodios de intimidación hacia el personal. La institución revisa las condiciones para prevenir nuevos eventos y preparar la respuesta. 


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img26.png", data-aos="zoom-in").mx-auto.w-md-75
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-02" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Conoce las condiciones")
            p.mb-3.ms-lg-5 El equipo revisa los reportes e identifica dónde ocurren los eventos, qué conductas se presentan y cuáles dificultades existen para solicitar apoyo. También comprueba qué procedimientos, recursos y capacidades están disponibles.
            p.mb-0.ms-lg-5 #[b Pregunta orientadora:] ¿Qué información falta verificar para comprender la situación?

          .tarjeta(titulo="Reduce las vulnerabilidades")
            p.mb-3.ms-lg-5 Con base en los hallazgos, la institución define medidas: aclara responsabilidades, comprueba los canales de aviso y prepara al personal para utilizar el procedimiento. Cada medida debe atender una condición identificada y contar con un responsable de implementación y seguimiento.
            p.mb-0.ms-lg-5 #[b Pregunta orientadora:] ¿Qué vulnerabilidad atiende cada medida?

          .tarjeta(titulo="Prepara la respuesta")
            p.mb-3.ms-lg-5 El personal practica cómo comunicar un evento y solicitar apoyo. Si se presenta una situación que compromete su seguridad, aplica las medidas de protección previstas según las circunstancias. Después se revisan los hechos, los apoyos utilizados y las dificultades encontradas.
            p.mb-0.ms-lg-5 #[b Pregunta orientadora:] ¿Qué aprendizaje del evento debe incorporarse a la preparación?



    .container
      .row.align-items-center.bg-color-12.mb-4.mb-lg-5.p-3.br-15
        .col-lg-12
          p.mb-0 La información permite actuar; las medidas requieren verificación; y la experiencia aporta elementos para actualizar el análisis y mejorar la preparación.

    .row.mb-lg-5.mb-4.justify-content-center
      .col-lg-7.col-md-12.mb-0.mb-lg-0.order-2.order-lg-2
        .container.h-100
          .row.bg-fondo-02.br-15.p-0.h-100.justify-content-center.align-content-center
            .col-md-8.col-lg-5.mb-2.mb-lg-0.order-2.order-lg-1.p-lg-0.p-3.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/img28.png", data-aos="fade-right").w-md-50.mx-md-auto.ml-25
            .col-lg-6.order-1.order-lg-2.p-4.p-lg-4
              h4 ¿Sabías que?
              p(data-aos="fade-left").mb-4 Lo invitamos a escuchar el siguiente Pódcast: 
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-0(
                texto="Conocer, reducir y responder"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
              )

      .col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
        .container.h-100
          .row.align-content-center.bg-color-c1.mb-0.p-3.br-15.h-100
            .col-lg-12
              p.mb-2 Ir al pódcast: «Conocer, reducir y responder» y analice cómo un equipo sanitario relaciona los tres procesos antes, durante y después de una jornada extramural.
              p.mb-0 Al finalizar, podrá identificar acciones de conocimiento, de reducción y de preparación o respuesta y será capaz de identificar qué condición atiende cada acción y quién debe participar para hacerla posible.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
