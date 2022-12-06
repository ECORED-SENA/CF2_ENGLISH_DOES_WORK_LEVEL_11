<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.bg-c33.mb-5
      .col-lg-4.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/temas/img1.png', style="width: 350px").m-auto
      .col-lg-8.p-4
        traductor.color-primario
          div(slot="textoIngles")
            p.mb-0 #[i Up to this point, we have been able to understand everything that has to do with how to correctly write an argumentative text and all the linguistic resources necessary for this purpose. Therefore, you are invited to appreciate the following conceptual scheme that summarizes the subject matter:]
          div(slot="textoEspanol")
            p.mb-0 Hasta este punto, hemos podido comprender todo lo que tiene que ver con cómo escribir correctamente un texto argumentativo y todos los recursos lingüísticos necesarios para este propósito. Por ello, se invita a que aprecie el siguiente esquema conceptual que resume la temática tratada:
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/anexo2.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
import traductor from '@/components/tarjetaTraductor.vue'
export default {
  name: 'Sintesis',
  components: {
    traductor,
  },
  data: () => ({
    // variables de vue
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
