<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El componente formativo Fundamentos y prevención del riesgo de violencia brinda los fundamentos necesarios para reconocer las amenazas, vulnerabilidades y capacidades que influyen en la seguridad del personal sanitario. Aborda el marco normativo de protección, los factores individuales e institucionales, los escenarios de exposición y las posibles consecuencias de la violencia. Asimismo, desarrolla los procesos de conocimiento y reducción del riesgo y la preparación para responder ante situaciones de peligro, mediante herramientas de valoración, medidas preventivas y acciones de mitigación. Finalmente, integra los fundamentos del plan de contingencia, la ruta de respuesta y las técnicas de desescalación, fortaleciendo la capacidad para tomar decisiones informadas, solicitar apoyo y contribuir a la protección del personal y la continuidad segura de la atención.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="El componente ormativo Fundamentos y prevención de riesgos de violencia, integra los conceptos, fundamentos y elementos para el tratamiento y prevención de acciones en contra del personal sanitario Tales como amenazas, vulnerabilidades, valoración del riesgo, medidas de protección, rutas de respuesta y desescalación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({}),
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
