<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 El ejercicio del personal sanitario puede desarrollarse en escenarios diversos y cambiantes, en los que confluyen condiciones sociales, institucionales y del entorno capaces de generar situaciones de riesgo y violencia. Reconocer estas condiciones requiere comprender los fundamentos de la gestión del riesgo, la normatividad aplicable y los factores que pueden aumentar o disminuir la vulnerabilidad individual e institucional. Estos elementos permiten analizar la seguridad del personal sanitario desde una perspectiva preventiva y contextualizada.

        .container
          .row.align-items-center.bg-color-01.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 La identificación y valoración oportuna del riesgo favorecen la toma de decisiones orientadas a prevenir y mitigar situaciones de violencia que puedan afectar la integridad del personal sanitario y la prestación de los servicios de salud. El propósito es fortalecer la capacidad para reconocer amenazas y vulnerabilidades, valorar el nivel de riesgo y orientar medidas de protección acordes con las características del contexto. Para ello, se requiere comprender los factores de riesgo y de protección, así como los componentes de conocimiento, reducción y manejo del riesgo.
          

    .row.mb-lg-3.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-0 El contenido aborda de manera progresiva los fundamentos de la gestión del riesgo, la vulnerabilidad individual e institucional y los riesgos asociados a contextos de violencia. Posteriormente, integra herramientas para la valoración del riesgo, medidas de prevención y mitigación, una aproximación al plan de contingencia, las rutas de respuesta y la desescalación de situaciones de violencia. De esta manera, los conceptos y herramientas se articulan con situaciones propias del ejercicio sanitario, facilitando su comprensión y aplicación en diferentes escenarios de atención.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
