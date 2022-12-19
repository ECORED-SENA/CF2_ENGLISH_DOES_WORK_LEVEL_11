<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 #[i Connecting ideas in a coherent way] (Conectando ideas de forma coherente)
    .row.px-5.bg-c28.mb-5
      .col-12.p-4
        .row.mb-5
          .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
            traductor.color-primario
              div(slot="textoIngles")
                p #[i Connectors are used to join two or more sentences together, allowing us to build a more structured message. Instead of leaving individual sentences alone, we can connect them logically.]
                p.mb-0 #[i In this thematic unit, we will see how to use the connectors and the different types that exist to express ourselves in the best way, with logic, and that our messages make sense. First, listen and read the next dialogue:]
              div(slot="textoEspanol")
                p Los conectores sirven para unir dos o más oraciones, lo que permite construir un mensaje más estructurado. En lugar de dejar oraciones individuales y solas, se pueden conectar de manera lógica.
                p.mb-0 En este tema, veremos cómo usar los conectores y los diferentes tipos que existen, para expresarnos de la mejor manera, con lógica, y que nuestros mensajes tengan sentido. Primero, escuche y lea el siguiente diálogo:
          .col-lg-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema3/img2.svg', style="width: 450px").m-auto
        .row.justify-content-center.align-items-end
          .col-lg-4.px-0.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema3/img3.svg', style="width: 450px").m-auto
          .col-lg-6.p-4.bg-c18.shadow-lg(data-aos="fade-left")
            .row.align-items-center.mb-4
              .col-lg-auto
                h4.text-center.txt-c3.mb-0.mb-lg-5 Mario
              .col-lg
                traductor.color-primario2
                  div(slot="textoIngles")
                    .row.align-items-center
                      .col
                        p.mb-0.txt-c7 #[i Cynthia, did you hear the new president's speech? What topics did he talk about?]
                      .col-auto
                        Audio.color-acento-contenido.mx-auto(
                          :audio="require('@/assets/curso/tema3/m1.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                  div(slot="textoEspanol")
                    p.mb-0 Cynthia, ¿oíste el discurso del nuevo presidente? ¿De qué temas habló?
            .row.align-items-center.mb-4
              .col-lg.order-2.order-lg-1
                traductor.color-primario1
                  div(slot="textoIngles")
                    .row.align-items-center
                      .col
                        p.mb-0.txt-c10 #[i #[b #[u Initially]], he talked about eliminating corruption in the institution, #[b #[u even though]] he has several complaints because of it, #[b #[u specifically]] for embezzlement. #[b #[u Nevertheless]], he brought up the subject.]
                      .col-auto
                        Audio.color-acento-contenido.mx-auto(
                          :audio="require('@/assets/curso/tema3/c1.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                  div(slot="textoEspanol")
                    p.mb-0 Inicialmente, habló sobre eliminar la corrupción en la institución, a pesar de que tiene varias denuncias al respecto, específicamente, por malversación de fondos. Aun así, mencionó el tema.
              .col-lg-auto.order-1.order-lg-2
                h4.text-center.txt-c2.mb-0.mb-lg-5 Cynthia
            .row.align-items-center.mb-4
              .col-lg-auto
                h4.text-center.txt-c3.mb-0.mb-lg-5 Mario
              .col-lg
                traductor.color-primario2
                  div(slot="textoIngles")
                    .row.align-items-center
                      .col
                        p.mb-0.txt-c7 #[i Really? I am shocked! What else did he talk about?]
                      .col-auto
                        Audio.color-acento-contenido.mx-auto(
                          :audio="require('@/assets/curso/tema3/m2.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                  div(slot="textoEspanol")
                    p.mb-0 ¿En serio? ¡Estoy impactado! ¿De qué más habló?
            .row.align-items-center.mb-4
              .col-lg.order-2.order-lg-1
                traductor.color-primario1
                  div(slot="textoIngles")
                    .row.align-items-center
                      .col
                        p.mb-0.txt-c10 #[i #[b #[u Additionally]], he talked about gender equality, #[b #[u especially]], on initiatives to ensure equal pay for equal work. #[b #[u Therefore]], there may be changes in the budget.]
                      .col-auto
                        Audio.color-acento-contenido.mx-auto(
                          :audio="require('@/assets/curso/tema3/c2.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                  div(slot="textoEspanol")
                    p.mb-0 Adicionalmente, habló sobre la igualdad de género, especialmente, sobre iniciativas para asegurar salarios iguales para trabajos iguales. Por lo tanto, puede que haya cambios en el presupuesto.
              .col-lg-auto.order-1.order-lg-2
                h4.text-center.txt-c2.mb-0.mb-lg-5 Cynthia
    .row.px-5.pb-5.bg-c29.mb-5
      .col-12.p-4
        .row.align-items-start.mb-5
          .col-lg-8.bg-c30.p-4.mb-4.mb-lg-0(data-aos="fade-right")
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/tema3/img4.svg', style="width: 60px").m-auto
              .col
                p.mb-0 #[i.txt-c4 Next, we will see the different types of connectors and some examples of how to use them:] #[span.txt-c9 / A continuación, veremos los diferentes tipos de conectores y algunos ejemplos sobre cómo usarlos:]
          .col-lg-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema3/img1.png', style="width: 450px").m-auto
        ImagenInfografica.color-secundario(data-aos="fade-down")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img6.svg')
          .tarjeta.color-secundario.p-3(x="36.7%" y="66.6%" numero="+")
            .row
              .col-12.p-4
                h4.mb-0 #[b.txt-c11 Listing, ordering, &amp; time /] #[span.text-white Listado, orden y tiempo]
                p.text-white #[i Example:]
                .row.align-items-center
                  .col-lg-8.mb-4.mb-lg-0
                    .row.align-items-center.mb-4
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="The nurses will be back <u>as soon as</u> they're done with the rest of the patients."
                          :audio="require('@/assets/curso/tema3/Audio 3_01.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Las enfermeras volverán en cuanto terminen con el resto de los pacientes.
                    .row.align-items-center
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="I solved this crisis. <u>Meanwhile</u>, another problem surfaced."
                          :audio="require('@/assets/curso/tema3/Audio 3_02.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Resolví esta crisis. Mientras tanto, surgió otro problema.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema3/img2.png', style="width: 250px").m-auto
          .tarjeta.color-secundario.p-3(x="56.2%" y="66.6%" numero="+")
            .row
              .col-12.p-4
                h4.mb-0 #[b.txt-c11 Adding information /] #[span.text-white Adición de información]
                p.text-white #[i Example:]
                .row.align-items-center
                  .col-lg-8.mb-4.mb-lg-0
                    .row.align-items-center.mb-4
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="This superhero is very fast, <u>as well as</u> very strong."
                          :audio="require('@/assets/curso/tema3/Audio 3_03.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Este superhéroe es muy rápido, además de muy fuerte.
                    .row.align-items-center
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="The old house was really comfortable. <u>Additionally</u>, there was a delightful backyard and three acres of land."
                          :audio="require('@/assets/curso/tema3/Audio 3_04.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 La antigua casa era realmente cómoda. Además, había un hermoso patio trasero y tres acres de tierra.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema3/img3.png', style="width: 250px").m-auto
          .tarjeta.color-secundario.p-3(x="75%" y="66.6%" numero="+")
            .row
              .col-12.p-4
                h4.mb-0 #[b.txt-c11 Giving examples /] #[span.text-white Dar ejemplos]
                p.text-white #[i Example:]
                .row.align-items-center
                  .col-lg-8.mb-4.mb-lg-0
                    .row.align-items-center.mb-4
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="In social sciences, many factors are important, <u>for example</u>, class, gender, age, and ethnicity."
                          :audio="require('@/assets/curso/tema3/Audio 3_05.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 En las ciencias sociales, muchos factores son importantes, por ejemplo, la clase, el género, la edad y el origen étnico.
                    .row.align-items-center
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="This scientist specializes in tropical fruits, <u>such as</u> pineapples, mangoes, guavas, and papayas."
                          :audio="require('@/assets/curso/tema3/Audio 3_06.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Este científico se especializa en frutas tropicales, como piñas, mangos, guayabas y papayas.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema3/img4.png', style="width: 250px").m-auto
          .tarjeta.color-secundario.p-3(x="37.4%" y="28.2%" numero="+")
            .row
              .col-12.p-4
                h4.mb-0 #[b.txt-c11 Results &amp; consequences /] #[span.text-white Resultados y consecuencias]
                p.text-white #[i Example:]
                .row.align-items-center
                  .col-lg-8.mb-4.mb-lg-0
                    .row.align-items-center.mb-4
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="Susana plays tennis a lot, <u>therefore</u>, she’s a great player."
                          :audio="require('@/assets/curso/tema3/Audio 3_07.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Susana juega mucho al tenis, por lo tanto, es una gran jugadora.
                    .row.align-items-center
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="That man didn’t pay his taxes, and, <u>as a result</u>, he went to prison."
                          :audio="require('@/assets/curso/tema3/Audio 3_08.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Ese hombre no pagó sus impuestos y, como resultado, fue a la cárcel.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema3/img5.png', style="width: 250px").m-auto
          .tarjeta.color-secundario.p-3(x="17.3%" y="60.6%" numero="+")
            .row
              .col-12.p-4
                h4.mb-0 #[b.txt-c11 Highlighting &amp; stressing /] #[span.text-white Para resaltar y acentuar]
                p.text-white #[i Example:]
                .row.align-items-center
                  .col-lg-8.mb-4.mb-lg-0
                    .row.align-items-center.mb-4
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="I love flowers, <u>especially</u> roses and lilies."
                          :audio="require('@/assets/curso/tema3/Audio 3_09.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Me encantan las flores, especialmente, las rosas y los lirios.
                    .row.align-items-center
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="Our car broke down last weekend, so, <u>of course</u>, we couldn't go to the nearby towns."
                          :audio="require('@/assets/curso/tema3/Audio 3_10.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Nuestro auto se averió el fin de semana pasado, así que, por supuesto, no pudimos ir a los pueblos cercanos.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema3/img6.png', style="width: 250px").m-auto
          .tarjeta.color-secundario.p-3(x="98%" y="52.5%" numero="+")
            .row
              .col-12.p-4
                h4.mb-0 #[b.txt-c11 Concessions &amp; contrasts /] #[span.text-white Concesiones y contraste]
                p.text-white #[i Example:]
                .row.align-items-center
                  .col-lg-8.mb-4.mb-lg-0
                    .row.align-items-center.mb-4
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="<u>Although</u> I don't study much, I get good grades."
                          :audio="require('@/assets/curso/tema3/Audio 3_11.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Aunque no estudio mucho, saco buenas notas.
                    .row.align-items-center
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="He is very kind with animals. <u>However</u>, my dog attacked him."
                          :audio="require('@/assets/curso/tema3/Audio 3_12.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Él es muy amable con los animales. Sin embargo, mi perro lo atacó.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema3/img7.png', style="width: 250px").m-auto
          .tarjeta.color-secundario.p-3(x="16%" y="33%" numero="+")
            .row
              .col-12.p-4
                h4.mb-0 #[b.txt-c11 Comparison /] #[span.text-white Comparación]
                p.text-white #[i Example:]
                .row.align-items-center
                  .col-lg-8.mb-4.mb-lg-0
                    .row.align-items-center.mb-4
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="You must exercise your mind every day <u>in the same way</u> that you exercise your body."
                          :audio="require('@/assets/curso/tema3/Audio 3_13.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Debes ejercitar tu mente todos los días de la misma manera que ejercitas tu cuerpo.
                    .row.align-items-center
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="She is a well-behaved girl <u>in comparison</u> with her sister."
                          :audio="require('@/assets/curso/tema3/Audio 3_14.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Ella es una niña de buen comportamiento en comparación con su hermana.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema3/img8.png', style="width: 250px").m-auto
          .tarjeta.color-secundario.p-3(x="55.8%" y="28.2%" numero="+")
            .row
              .col-12.p-4
                h4.mb-0 #[b.txt-c11 Reasons &amp; causes /] #[span.text-white Razones y causas]
                p.text-white #[i Example:]
                .row.align-items-center
                  .col-lg-8.mb-4.mb-lg-0
                    .row.align-items-center.mb-4
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="The librarian told me to be quiet, <u>because</u> I was talking too much."
                          :audio="require('@/assets/curso/tema3/Audio 3_15.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 El bibliotecario me dijo que mantuviera silencio, porque estaba hablando demasiado.
                    .row.align-items-center
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="<u>Since</u> my son studies a lot, he gets good grades."
                          :audio="require('@/assets/curso/tema3/Audio 3_16.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Como mi hijo estudia mucho, saca buenas notas.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema3/img9.png', style="width: 250px").m-auto
          .tarjeta.color-secundario.p-3(x="75.6%" y="28.2%" numero="+")
            .row
              .col-12.p-4
                h4.mb-0 #[b.txt-c11 Giving your opinion /] #[span.text-white Para dar su opinión]
                p.text-white #[i Example:]
                .row.align-items-center
                  .col-lg-8.mb-4.mb-lg-0
                    .row.align-items-center.mb-4
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="Although it is a good product, <u>in my opinion</u>, it is too expensive."
                          :audio="require('@/assets/curso/tema3/Audio 3_17.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Aunque es un buen producto, en mi opinión, es demasiado caro.
                    .row.align-items-center
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="My teacher, besides being the smartest and nicest of all teachers, <u>I believe</u> she is also the wisest."
                          :audio="require('@/assets/curso/tema3/Audio 3_18.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 Mi maestra, además de ser la más inteligente y amable de todas las maestras, creo que también es la más sabia.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema3/img10.png', style="width: 250px").m-auto
          .tarjeta.color-secundario.p-3(x="98%" y="33%" numero="+")
            .row
              .col-12.p-4
                h4.mb-0 #[b.txt-c11 Concluding linkers /] #[span.text-white Conectores finales]
                p.text-white #[i Example:]
                .row.align-items-center
                  .col-lg-8.mb-4.mb-lg-0
                    .row.align-items-center.mb-4
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="<u>In conclusion</u>, we would like to thank our sponsor."
                          :audio="require('@/assets/curso/tema3/Audio 3_19.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 En conclusión, nos gustaría agradecer a nuestro patrocinador.
                    .row.align-items-center
                      .col-lg-6
                        TarjetaAudio.color-primario.mb-3.mb-lg-0(
                          texto="<u>To summarize</u>, this is a useful explanation on how to use connectors in a text."
                          :audio="require('@/assets/curso/tema3/Audio 3_20.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      .col-lg
                        p.text-white.mb-0.ms-4 En resumen, esta es una explicación útil de cómo usar conectores en un texto.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema3/img11.png', style="width: 250px").m-auto
    p.text-center.mb-5(data-aos="fade-left") #[i.txt-c7 Now, we will check example paragraphs according to the connectors:] #[span.txt-c9 / Ahora, revisaremos ejemplos de párrafos acordes con los conectores:]
    .row.align-items-start.bg-c31.p-4.p-lg-0.mb-5
      .col-lg-3(data-aos="fade-right")
        figure.mb-4.mb-lg-5
          img(src='@/assets/curso/tema3/img7.svg', style="width: 250px").m-auto
      .col-lg-3.mt-0.mt-lg-5.mb-5.mb-lg-0(data-aos="fade-down")
        h4.txt-c7 #[i Bad example:]
        p #[i Hello, Patty. I wanted to go to the party, the party is late and I don't like to be late. Let's go early and have more fun. I don't think it will be a problem.]
      .col-lg-3.mt-0.mt-lg-5.linea1.order-2.oder-lg-1(data-aos="fade-up")
        h4.txt-c7 #[i Good example:]
        TarjetaAudio.color-primario.mb-3.mb-lg-0(
          texto="Hello, Patty. I wanted to go to the party, but I heard that the party is late.  Personally, I don't like to be late. However, I want to go early and have more fun. In my opinion, I don't think that will be a problem."
          :audio="require('@/assets/curso/tema3/Audio 3_21.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
      .col-lg-3.order-1.order-lg-2(data-aos="fade-left")
        figure.mb-4.mb-lg-5
          img(src='@/assets/curso/tema3/img8.svg', style="width: 250px").m-auto
    .row.align-items-center.mb-5
      .col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img10.svg', style="width: 250px").m-auto
      .col-lg-10(data-aos="fade-left")
        p.mb-0Now #[i.txt-c7 Now let's test how much you learned about the different types of connectors. Listen and complete the following dialogue:] #[span.txt-c9 / Ahora, probemos cuánto aprendió sobre los diferentes tipos de conectores. Escuche y complete el siguiente diálogo:]
    .row.px-5.pb-5.bg-c32
      .col-12
        Dialogo.color-primario(:dialogo="dialogo")(data-aos="fade-right")
          template(#nombre-actividad) Arrastrar y Soltar
          template(#titulo-actividad) #[i Connecting ideas practice]
          template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import traductor from '@/components/tarjetaTraductor.vue'
export default {
  name: 'Tema3',
  components: {
    traductor,
    DialogoChat,
  },
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Mario',
          img: require('@/assets/curso/tema3/img12.svg'),
        },
        {
          nombre: 'Cynthia',
          img: require('@/assets/curso/tema3/img13.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Mario',
          textoIng: '<i>In my</i> ***, <i>that could be a good change.</i>',
          textoEsp: 'En mi opinión, ese podría ser un buen cambio.',
          audio: require('@/assets/curso/tema3/m3.mp3'),
          palabra: 'opinion',
        },
        {
          personaje: 'Cynthia',
          textoIng: '<i>I</i> *** <i>that I like that proposal.</i>',
          textoEsp: 'Admito que me gusta esa propuesta.',
          audio: require('@/assets/curso/tema3/c3.mp3'),
          palabra: 'admit',
        },
        {
          personaje: 'Mario',
          textoIng:
            '<i>To</i> ***, <i>many changes are going to be made in this period.</i>',
          textoEsp:
            'Para concluir, se van a hacer muchos cambios en este periodo.',
          audio: require('@/assets/curso/tema3/m4.mp3'),
          palabra: 'conclude',
        },
      ],
    },
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
