<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12.px-5.pb-5
        .row.mb-5
          .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-right")
            figure
              img(src="@/assets/curso/intro/img1.png", style="width:350px").m-auto
          .col-lg-9(data-aos="fade-left")
            .row
              figure.fig-p1
                img(src="@/assets/curso/intro/img3.svg")
              .col-12.p-5.bg-c2.shadow-sm
                p Este nivel de formación bilingüe #[span.txt-c1 se enfoca en cómo argumentar de forma escrita, o más puntualmente, cómo escribir un texto argumentativo]. Para esto, se va a exponer qué es exactamente un texto argumentativo, se va a diseccionar cada una de sus partes y se va a dar un paso a paso detallado sobre qué es lo que se debe hacer para escribir un buen texto argumentativo que persuada al lector y esté respaldado por argumentos y evidencia.
                p.mb-0 Para poder escribir el grueso del texto (que son los párrafos), vamos a entender qué son, cómo identificar y cómo formular ideas principales y secundarias; y por último, aprenderemos cómo enlazar todo (ideas, frases, párrafos, etc.) de forma comprensible, lógica y amena, por medio de conectores. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo y, #[span.txt-c1 para comenzar, se le invita a explorar el video que se presenta a continuación].
              figure.fig-p2
                img(src="@/assets/curso/intro/img4.svg")
        figure.mb-2.mb-lg-5(data-aos="fade-up")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/3FX-Z-NlCrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.justify-content-center(data-aos="fade-right")
          .col-lg-10.p-4
            .row.align-items-center
              .col-lg-auto.mb-4.mb-lg-0.bg-c4
                figure
                  img(src="@/assets/curso/intro/img2.png", style="width:250px").m-auto
              .col-lg-8.p-5.bg-c3
                .row.align-items-center.justify-content-end
                  .col-lg-7.mb-4.mb-lg-0
                    p.mb-0 Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español.
                  .col-lg-auto
                    a.boton.me-3.indicador__container(
                      :href="obtenerLink('downloads/anexo1.pdf')"
                      target="_blank"
                      type="application/pdf"
                      @mouseover="mostrarIndicador = false"
                    )
                      span Descargar
                      i.fas.fa-file-download
                      .indicador--click(v-if="mostrarIndicador")
    
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
