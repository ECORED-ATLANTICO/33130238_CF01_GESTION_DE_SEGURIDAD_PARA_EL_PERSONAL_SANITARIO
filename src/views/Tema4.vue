<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Vulnerabilidad institucional

    .bg-full-width.bg-fondo-1
      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema4/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-right")
          p.banner-text La vulnerabilidad institucional comprende las condiciones de la organización que pueden aumentar su susceptibilidad frente a una amenaza o limitar su capacidad para proteger al personal sanitario y mantener la atención. <br>Su análisis considera cómo se organizan las actividades, quiénes toman las decisiones, qué procedimientos se utilizan y cuáles recursos y apoyos están disponibles. También permite reconocer diferencias entre las medidas previstas y su funcionamiento en una situación concreta.

      .bloque-texto-g.bg-color-10.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Una institución puede disponer de protocolos y equipos, pero mantener condiciones de vulnerabilidad si el personal desconoce cómo utilizarlos o si no existen mecanismos para verificar su aplicación. Por ello, la revisión debe considerar tanto los documentos como las condiciones reales de trabajo. <br>La protección requiere articular la preparación individual con decisiones y recursos institucionales. Identificar dificultades permite orientar acciones de fortalecimiento y definir responsabilidades para su seguimiento.


    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Concepto y componentes institucionales

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img03.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 La vulnerabilidad institucional se manifiesta cuando las condiciones organizacionales dificultan la prevención, la protección o la respuesta ante situaciones de violencia. Puede relacionarse con responsabilidades poco claras, procedimientos desconocidos, comunicación insuficiente, preparación limitada o recursos que no responden a las necesidades de la actividad.
        .container
          .row.align-items-center.bg-color-02.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Estas condiciones pueden modificarse. Su identificación debe acompañarse de acciones que permitan fortalecer la capacidad institucional y comprobar los resultados.
        p.mb-0 El SG-SST proporciona un marco para organizar responsabilidades, recursos y acciones de prevención. En el ámbito de la Misión Médica, el Manual adoptado mediante la Resolución 4481 de 2012 también establece deberes de protección para los gerentes o directores de las instituciones comprendidas en su apartado 2.3, entre ellos la capacitación y la aplicación del Manual. <br>Para organizar el análisis, este componente considera seis componentes institucionales.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 8.
          span Evaluación de la preparación institucional
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Componente
                th Aspectos para observar
            tbody
              tr
                td Organización
                td Definición y comunicación de responsabilidades, responsables de coordinación y mecanismos para tomar decisiones frente al riesgo.
              tr
                td Procedimientos
                td Existencia, actualización, conocimiento y aplicación de protocolos, rutas de respuesta y planes relacionados con la actividad.
              tr
                td Comunicación
                td Disponibilidad y funcionamiento de canales para informar cambios, reportar eventos y solicitar apoyo.
              tr
                td Preparación
                td Orientación, formación y práctica del personal para reconocer amenazas y aplicar los procedimientos.
              tr
                td Recursos
                td Disponibilidad, acceso y funcionamiento de los medios necesarios para implementar medidas de prevención y respuesta.
              tr
                td Seguridad
                td Condiciones del lugar, de la actividad y del desplazamiento, junto con las medidas de protección previstas.



    .bloque-texto-g.bg-color-10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los componentes deben analizarse de manera conjunta. Un procedimiento de reporte necesita responsables conocidos, canales disponibles y personas preparadas para utilizarlo. Si uno de estos elementos falla, puede limitarse la respuesta del conjunto. <br>La distribución de responsabilidades debe permitir reconocer quién recoge la información, quién verifica las condiciones, quién coordina los apoyos y quién revisa las decisiones sobre la actividad. Estas funciones deben corresponder a la organización y a los procedimientos de cada institución.


    .container
      .row.align-items-center.bg-color-05.p-4.mb-4.br-15
        .col-lg-auto.d-none.d-lg-block.order-2
          img(src="@/assets/curso/tema2/img28.png", style="max-width: 90px").mx-auto
        .col-lg.order-1
          p.mb-0 Por ejemplo, disponer de un teléfono no demuestra que exista comunicación efectiva. Es necesario comprobar su funcionamiento, la disponibilidad de quien recibe el aviso y la manera de actuar cuando el canal habitual no responde.

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Factores de riesgo institucional

    .px-lg-0.py-lg-0.px-0.py-0
      img(src="@/assets/curso/tema4/img05.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-right")
        p.banner-text Los factores de riesgo institucional son condiciones concretas de la organización que pueden aumentar la exposición o dificultar la protección frente a una amenaza. Su identificación permite reconocer aspectos sobre los cuales la institución puede intervenir. <br>Entre los factores que requieren atención se encuentran:

    .row.mb-lg-5.mb-4.justify-content-center
      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img06.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Responsabilidades de coordinación y respuesta poco claras.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img07.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Procedimientos que no se han actualizado o socializado.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img08.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Canales de comunicación sin comprobar.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img09.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Preparación insuficiente para la actividad asignada.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img10.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Recursos necesarios que no están disponibles.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img11.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Programación de actividades sin información suficiente del contexto.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img12.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Dificultades para reportar cambios y recibir orientación.

      .col-lg-4.col-md-6.p-2
        .container.h-100
          .row.align-items-center.bg-color-02.mb-0.br-15.p-3.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img13.png", style="max-width: 75px").mx-auto
            .col-lg
              p.mb-0 Falta de seguimiento a los hallazgos de eventos anteriores.

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img14.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-03.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 La identificación debe describir la dificultad y explicar su relación con la actividad. Expresiones como “falta de seguridad” o “problemas de comunicación” resultan insuficientes si no permiten reconocer qué ocurre y cómo puede afectar la protección.
        p.mb-0 Por ejemplo, el hallazgo “no se ha definido quién recibe los avisos del equipo después del horario habitual” describe una condición que puede verificarse. A partir de ella es posible asignar una responsabilidad, comunicarla y comprobar cómo funcionará el apoyo.


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img15.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 La presencia de un factor institucional no significa que necesariamente ocurrirá una agresión. Su importancia depende de cómo interactúa con la amenaza, las personas expuestas y las capacidades disponibles.
        .container
          .row.align-items-center.bg-color-06.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 El análisis debe evitar trasladar al trabajador dificultades que corresponden a la organización. Si el personal conoce cómo solicitar apoyo, pero no existe un mecanismo disponible para recibir su solicitud, la intervención requiere una decisión institucional.

    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Contexto interno y externo

    p.mb-4 El contexto comprende las condiciones que rodean una actividad sanitaria y que pueden influir en su seguridad. Su análisis permite reconocer las características de la organización y del entorno antes de identificar medidas de intervención.


    .bg-full-width.bg-fondo-1

      .container
        .tarjeta--container.row.mb-4.justify-content-center
          .col-xl-4.col-lg-5.col-md-6.tarjeta.bg-color-05.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema4/img16.png", alt='', style="max-width:90px").mx-auto          
            h2.text-center Contexto interno
            p.mb-0 Corresponde a las condiciones propias de la institución que pueden influir en el desarrollo de las actividades. Incluye la organización del trabajo, los procedimientos, las responsabilidades asignadas, la preparación del personal, los recursos disponibles y los mecanismos de comunicación y coordinación. Su análisis permite identificar fortalezas, limitaciones y aspectos que requieren mejoramiento para garantizar una gestión adecuada del riesgo.
          
          .col-xl-4.col-lg-5.col-md-6.tarjeta.bg-color-02.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema4/img17.png", alt='', style="max-width:90px").mx-auto          
            h2.text-center Contexto externo
            p.mb-0 Comprende las condiciones del entorno que pueden influir directa o indirectamente en el desarrollo de las actividades. Incluye las condiciones de acceso y movilidad, los antecedentes de eventos, las situaciones de seguridad, las características del territorio y los cambios sociales o ambientales. Su análisis permite anticipar posibles amenazas, reconocer factores de vulnerabilidad y establecer medidas de prevención y protección acordes con cada situación.



        //- .container
        .row.justify-content-center.mb-5
          .col-lg-8.p-0
            .bg-color-02.br-15.p-3
              p.mb-0.text-center La siguiente tabla, muestra un comparativo entre ambos contextos:



      .row.mb-5.justify-content-center.align-items-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-2 Tabla 9.
            span Contexto interno vs. contexto externo
          .tabla-a.tb-custom.mb-0
            table
              thead
                tr
                  th Contexto interno
                  th Contexto externo
              tbody
                tr
                  td Organización de las actividades.
                  td Características del territorio y del lugar de atención.
                tr
                  td Procedimientos y rutas institucionales.
                  td Condiciones de acceso y movilidad.
                tr
                  td Recursos disponibles.
                  td Situaciones de seguridad del entorno.
                tr
                  td Mecanismos de comunicación.
                  td Dinámicas del entorno relacionadas con la actividad sanitaria.
                tr
                  td Roles y responsabilidades.
                  td Cambios externos que puedan modificar las condiciones de atención.

    .bloque-texto-g.bg-color-05.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las columnas agrupan aspectos de cada contexto; las filas no representan relaciones causales ni correspondencias obligatorias entre sus elementos. El diagnóstico requiere relacionar ambos contextos. Una amenaza externa puede adquirir mayor relevancia cuando coincide con dificultades internas para comunicarla o solicitar apoyo. De igual manera, disponer de recursos institucionales no elimina la necesidad de revisar los cambios del entorno.

    .container
      .row.align-items-center.bg-color-05.p-4.mb-5.br-15
        .col-lg-auto.d-none.d-lg-block.order-2
          img(src="@/assets/curso/tema2/img28.png", style="max-width: 90px").mx-auto
        .col-lg.order-1
          p.mb-0 La información utilizada debe permitir identificar su procedencia y actualidad. Es necesario distinguir hechos verificados, reportes pendientes de comprobación y aspectos sobre los cuales todavía no existe información suficiente.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.svg")
          h3.titulo-con-imagen__texto Del contexto al diagnóstico



    p.mb-4 Para organizar un diagnóstico inicial se propone:

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img19.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .bg-fondo-01.p-lg-5.p-4.mb-0
          SlyderA(tipo="b").bg-color-white.p-3.tarjeta
            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Delimitar la actividad
                  p.mb-0 Precisar qué se realizará, dónde, cuándo y quiénes participarán.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Identificar la información disponible
                  p.mb-0 Reconocer fuentes, fechas y aspectos pendientes de verificación.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Describir las condiciones internas
                  p.mb-0 Revisar organización, procedimientos, comunicación, preparación y recursos.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Describir las condiciones externas
                  p.mb-0 Examinar las situaciones del entorno relacionadas con la actividad.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Relacionar los hallazgos
                  p.mb-0 Explicar cómo pueden interactuar amenazas, vulnerabilidades y capacidades.

            .tarjeta.p-lg-4.p-3.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-12
                  h4 Definir necesidades de intervención
                  p.mb-0 Establecer qué debe comprobarse o fortalecerse y quién participará.


    .row.justify-content-center.mb-4
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c1.px-5.py-4.h-100.align-content-center
          h4 Ejemplo de diagnóstico
          p.mb-0 Una institución programa una atención domiciliaria. El equipo que realizó una visita anterior registró expresiones de intimidación de una persona presente en el lugar. Antes de la nueva atención, la coordinación revisa ese reporte y las condiciones institucionales de apoyo.

    .container
      .row.justify-content-center.mb-5
        .col-lg-8.p-0
          .bg-color-02.br-20.p-3
            p.mb-0.text-center El diagnóstico inicial identifica:



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        TabsC.color-primario.mb-0
          .py-3.py-md-4.px-4(titulo="Condición externa")
            .row.align-items-center.mb-0.p-4
              .col-lg-11
                p.mb-0 Existe un antecedente documentado de intimidación relacionado con el lugar de atención, lo que representa un posible factor de riesgo. Se requiere verificar si las condiciones de seguridad han cambiado y si persisten factores que puedan afectar el desarrollo de la actividad.

          .py-3.py-md-4.px-4(titulo="Condición interna")
            .row.align-items-center.mb-0.p-4
              .col-lg-11
                p.mb-0 El equipo conoce el procedimiento de aviso y comunicación; sin embargo, no se ha confirmado quién será responsable de atender una solicitud de apoyo durante el horario previsto. Esta situación puede generar demoras en la coordinación de una respuesta.

          .py-3.py-md-4.px-4(titulo="Capacidad disponible")
            .row.align-items-center.mb-0.p-4
              .col-lg-11
                p.mb-0 Existe una coordinación institucional con capacidad para revisar la programación, asignar responsables y gestionar los apoyos necesarios. Esta capacidad debe aprovecharse para fortalecer la preparación y prevenir posibles dificultades.

          .py-3.py-md-4.px-4(titulo="Relación entre los hallazgos")
            .row.align-items-center.mb-0.p-4
              .col-lg-11
                p.mb-0 La falta de un responsable de apoyo confirmado puede dificultar la respuesta institucional si se presenta nuevamente una situación de intimidación. Por ello, es importante articular las condiciones externas con las capacidades internas disponibles.

          .py-3.py-md-4.px-4(titulo="Necesidad de intervención")
            .row.align-items-center.mb-0.p-4
              .col-lg-11
                p.mb-0 Actualizar la información sobre las condiciones del entorno, confirmar los responsables de atención y comprobar el funcionamiento de los mecanismos de comunicación. Estas acciones permitirán contar con mejores condiciones antes de determinar la viabilidad de realizar la actividad.      


    .container
      .row.justify-content-center.mb-5
        .col-lg-12.p-0
          .bg-color-02.br-20.p-3
            p.mb-0.text-center El diagnóstico describe una situación concreta. No permite atribuir peligrosidad a todas las personas del lugar ni establecer un nivel de riesgo sin aplicar los criterios de valoración correspondientes.


    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Condiciones básicas de seguridad sanitaria

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img20.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-06.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Las condiciones básicas de seguridad son los aspectos que deben revisarse para determinar si las medidas previstas pueden aplicarse en una actividad sanitaria. Su definición debe considerar el escenario, las amenazas, las vulnerabilidades y los procedimientos institucionales.
        p.mb-0 La siguiente tabla es una guía de verificación pedagógica. Debe complementarse con los requisitos normativos, técnicos e institucionales aplicables; no constituye un listado legal exhaustivo. 


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 10.
          span Verificación de condiciones de seguridad
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Aspecto
                th Verificación
            tbody
              tr
                td Información del contexto
                td Se dispone de información pertinente y actualizada, y se identifican los aspectos pendientes de comprobación.
              tr
                td Identificación del riesgo
                td Se reconocen las amenazas, las vulnerabilidades, las capacidades y las posibles consecuencias relacionadas con la actividad.
              tr
                td Comunicación
                td Se han comprobado los canales previstos para mantener contacto, informar cambios y solicitar apoyo.
              tr
                td Rutas de respuesta
                td El personal conoce cómo activar el procedimiento y qué acciones corresponden a su función.
              tr
                td Roles y responsabilidades
                td Se han definido y comunicado los responsables de coordinación, recepción de avisos y gestión de apoyos.
              tr
                td Recursos de protección
                td Los recursos necesarios están disponibles, son accesibles y funcionan en las condiciones previstas. 





    p.mb-3 La verificación requiere evidencias. Estas pueden incluir una prueba de comunicación, la explicación del procedimiento por parte del equipo, la confirmación de responsables o la revisión del funcionamiento de un recurso.
    p.mb-4 Para cada aspecto pueden registrarse tres estados:

    .row.justify-content-center.cursor-pointer.mb-lg-4.mb-xl-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img21.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Verificado
            p.mb-0 Existe evidencia objetiva y suficiente de que la condición prevista se cumple. Se cuenta con información, registros o comprobaciones que permiten confirmar su estado y reconocer que cumple con los criterios establecidos.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img22.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Pendiente de comprobación
            p.mb-0 Falta información, documentación o una prueba que permita establecer con certeza el estado de la condición. Es necesario realizar una verificación adicional antes de tomar decisiones.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img23.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Requiere intervención
            p.mb-0 Se identifica una dificultad, limitación o incumplimiento que necesita una acción de fortalecimiento o corrección. Se deben definir responsables, recursos y tiempos para implementar las medidas necesarias y comprobar sus resultados.

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img24.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-0 Estos estados organizan el seguimiento; no se suman ni representan, por sí solos, niveles de riesgo.
        p.mb-3 El registro debe indicar qué se comprobó, cuándo, quién participó, cuál fue el hallazgo y qué acción corresponde. Si una condición necesaria para la protección está pendiente o requiere intervención, debe comunicarse a la coordinación para revisar sus implicaciones sobre la actividad.

        .container
          .row.align-items-center.bg-color-03.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 Retomando la atención domiciliaria, conocer el número de contacto no sería evidencia suficiente para dar por verificado el apoyo. Es necesario confirmar quién recibirá la solicitud, comprobar el canal y reconocer qué mecanismo se utilizará si no se obtiene respuesta.


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img25.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-06.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 La revisión debe actualizarse cuando cambien las condiciones. Un recurso disponible durante la planificación puede dejar de funcionar, y una información inicialmente verificada puede requerir una nueva comprobación.
              p.mb-0 La decisión institucional sobre la actividad debe considerar el conjunto del análisis. Completar la lista no constituye una autorización automática ni garantiza que no se presenten eventos.
 
        p.mb-0 La identificación de la vulnerabilidad institucional permite convertir los hallazgos en acciones con responsables y seguimiento. Este análisis se complementará con el reconocimiento de las amenazas y los riesgos presentes en los distintos escenarios de atención.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
