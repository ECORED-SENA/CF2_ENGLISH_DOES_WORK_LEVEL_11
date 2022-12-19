<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 #[i How to classify main and secondary ideas?] (¿Cómo clasificar ideas principales y secundarias?)
    .row.px-5.pb-5.bg-c15
      .col-12
        .row.mb-5
          .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
            traductor.color-primario
              div(slot="textoIngles")
                p #[i Each text presents different types of ideas, depending on their importance or hierarchy within the writing. The idea that introduces the main theme or the hypothesis of the text is usually the main idea, and the other ideas that emerge from it to complement it are usually called secondary ideas.]
                p.mb-0 #[i In this thematic unit, we are going to talk about the different types of ideas within a text, how to identify them in a text or how to formulate them.]
              div(slot="textoEspanol")
                p Cada texto presenta diferentes tipos de ideas, dependiendo de su importancia o jerarquía dentro del escrito. La idea que nos transmite el tema principal o la hipótesis del texto suele ser la idea principal, y las otras ideas que se desprenden de ella para complementarla suelen ser llamadas ideas secundarias.
                p.mb-0 En este tema, vamos a hablar de los distintos tipos de ideas dentro de un texto, cómo identificarlas en un texto o cómo formularlas.
          .col-lg-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema2/img1.png', style="width: 450px").m-auto
        .row
          .col-12.bg-c14.p-4(data-aos="fade-right")
            p.text-white.mb-0 #[b #[i Homework]]
            p.mb-0 #[b #[i Read the next science text.]]
          .col-12.bg-c16(data-aos="fade-left")
            .row
              .col-lg-5.mb-4.mb-lg-0
                figure.mt-5
                  img(src='@/assets/curso/tema2/img3.svg', style="width: 450px").m-auto
              .col-lg-7.p-4
                p.txt-c7 #[i Human beings have always polluted their environment, but in the past it was easier for them to move on and live somewhere else. They knew that given time, the environment would take care of pollution they left behind and they relied on the "out of sight, out of mind" philosophy. Today, an increasing human population, which uses an increasing amount of energy sources, no longer has the luxury to ignore pollution. The human population is approximately 7 billion. Our overall energy consumption has gone up by a hundredfold from 2,000 per/person/day to 230,000 per/person/day in modern industrial nations like the United States. This high energy consumption allows us to mass produce many useful and economically affordable organic products that pollute the atmosphere and groundwater, damage forests and lakes causing global warming, and even deplete the ozone layer.]
    .row.p-5.bg-c17.mb-5
      .col-12
        p.mb-5(data-aos="fade-up") #[i Now, listen and read the next dialogue:]
        .row.justify-content-center.align-items-end
          .col-lg-4.px-0.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema2/img5.svg', style="width: 450px").m-auto
          .col-lg-6.p-4.bg-c18.shadow-md(data-aos="fade-left")
            .row.align-items-center.mb-4
              .col-lg-auto
                h4.text-center.txt-c2.mb-0.mb-lg-5 Gina
              .col-lg
                traductor.color-primario1
                  div(slot="textoIngles")
                    .row.align-items-center
                      .col
                        p.mb-0 #[i Hi, Juan. Have you read the science text yet? What is the homework about?]
                      .col-auto
                        Audio.color-acento-contenido.mx-auto(
                          :audio="require('@/assets/curso/tema2/gina1.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                  div(slot="textoEspanol")
                    p.mb-0 Hola, Juan. ¿Ya leíste el texto de ciencias? ¿De qué trata la tarea?
            .row.align-items-center.mb-4
              .col-lg.order-2.order-lg-1
                traductor.color-primario2
                  div(slot="textoIngles")
                    .row.align-items-center
                      .col
                        p.mb-0 #[i Yes, I already did it. The topic to read about is pollution.]
                      .col-auto
                        Audio.color-acento-contenido.mx-auto(
                          :audio="require('@/assets/curso/tema2/juan1.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                  div(slot="textoEspanol")
                    p.mb-0 Sí, ya lo hice. El tema sobre el que hay que leer es la contaminación.
              .col-lg-auto.order-1.order-lg-2
                h4.text-center.txt-c3.mb-0.mb-lg-5 Juan
            .row.align-items-center.mb-4
              .col-lg-auto
                h4.text-center.txt-c2.mb-0.mb-lg-5 Gina
              .col-lg
                traductor.color-primario1
                  div(slot="textoIngles")
                    .row.align-items-center
                      .col
                        p.mb-0 #[i But I didn't understand what the author's approach is.]
                      .col-auto
                        Audio.color-acento-contenido.mx-auto(
                          :audio="require('@/assets/curso/tema2/gina2.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                  div(slot="textoEspanol")
                    p.mb-0 Pero no entendí cuál es el enfoque del autor.
            .row.align-items-center
              .col-lg.order-2.order-lg-1
                traductor.color-primario2
                  div(slot="textoIngles")
                    .row.align-items-center
                      .col
                        p.mb-0 #[i The main idea that the author refers to is that due to growth in the human population, humans can no longer ignore pollution.]
                      .col-auto
                        Audio.color-acento-contenido.mx-auto(
                          :audio="require('@/assets/curso/tema2/juan2.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                  div(slot="textoEspanol")
                    p.mb-0 La idea principal a la que hace referencia el autor es que, debido al crecimiento de la población humana, los seres humanos ya no pueden ignorar la contaminación.
              .col-lg-auto.order-1.order-lg-2
                h4.text-center.txt-c3.mb-0.mb-lg-5 Juan
    .row.align-items-center.mb-5
      .col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img6.svg', style="width: 250px").m-auto
      .col-lg.bg-c19.p-4(data-aos="fade-left")
        p.mb-0 #[i.txt-c8 In order to identify or formulate main and secondary ideas, the first thing we must be clear about is the basic concepts of a paragraph (which is where we are going to find these ideas).] #[span.txt-c9 Para poder identificar o formular ideas principales y secundarias, lo primero que debemos tener claro son los conceptos básicos de un párrafo (que es donde vamos a encontrar estas ideas):]
    .row.p-5.bg-c20.mb-5
      .col-12
        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema2/img2.png', style="width: 450px").m-auto
          .col-lg-8.bg-c21.shadow-lg.p-4(data-aos="fade-left")
            SlyderE(indicadores="derecha")
              .row.m-1
                .col-12
                  h4.txt-c4.mb-5 #[i Paragraph]
                  .row
                    .col-lg-6.mb-4.mb-lg-0
                      traductor.color-primario
                        div(slot="textoIngles")
                          p.mb-0 #[i It is a group of intentionally related sentences that develop an idea.]
                        div(slot="textoEspanol")
                          p.mb-0 Es un grupo de oraciones relacionadas intencionalmente que desarrollan una idea.
                    .col-lg-6
                      .row
                        .col-12.bg-c22.p-4
                          .row.align-items-center
                            .col-auto
                              figure
                                img(src='@/assets/curso/tema2/img8.svg', style="width: 50px").m-auto
                            .col
                              p.mb-0 #[b #[i Warning]]
                        .col-12.bg-c23.p-4
                          p.mb-0 #[i The main ideas usually go at the beginning of a paragraph, and then the secondary ideas are developed, but this is not always the case.]
              .row.m-1
                .col-12
                  h4.txt-c4.mb-5 #[i Topic]
                  .row
                    .col-lg-6.mb-4.mb-lg-0
                      traductor.color-primario
                        div(slot="textoIngles")
                          p.mb-0 #[i What the text is about. The main idea can be identified more easily if you identify what the text is about.]
                        div(slot="textoEspanol")
                          p.mb-0 Sobre lo que trata el texto. La idea principal se puede identificar con mayor facilidad si se identifica de qué se trata el texto.
                    .col-lg-6
                      .row
                        .col-12.bg-c22.p-4
                          .row.align-items-center
                            .col-auto
                              figure
                                img(src='@/assets/curso/tema2/img9.svg', style="width: 50px").m-auto
                            .col
                              p.mb-0 #[b #[i To find the topic, ask yourself the following guiding question]]
                        .col-12.bg-c23.p-4
                          p.mb-0 #[i "Who or what is the selection about?"]
              .row.m-1
                .col-12
                  h4.txt-c4.mb-5 #[i Main idea]
                  .row
                    .col-lg-6.mb-4.mb-lg-0
                      traductor.color-primario
                        div(slot="textoIngles")
                          p #[i The main point an author is making about a topic. Summarize the main message of the text.]
                          p.mb-0 #[i It is usually a kind of "theme sentence", since it synthesizes the topic of the text. Below this sentence fits all the rest of the paragraph's material (examples, reasons, facts, details, and other evidence).]
                        div(slot="textoEspanol")
                          p Punto principal que un autor está presentando sobre un tema. Resume el mensaje principal del texto.
                          p.mb-0 Suele ser una especie de "oración temática", ya que sintetiza el tema del texto. Debajo de esta oración, cabe todo el resto del material del párrafo (ejemplos, razones, hechos, detalles y otra evidencia).
                    .col-lg-6
                      .row
                        .col-12.bg-c22.p-4
                          .row.align-items-center
                            .col-auto
                              figure
                                img(src='@/assets/curso/tema2/img10.svg', style="width: 50px").m-auto
                            .col
                              p.mb-0 #[b #[i To find the main idea, ask yourself the following guiding questions]]
                        .col-12.bg-c23.p-4
                          ul.lista-ul
                            li.mb-0
                              i.fas.fa-circle(style="color: #6B8DFC")
                              | #[i “What is this text about?”]
                            li.mb-0
                              i.fas.fa-circle(style="color: #6B8DFC")
                              | #[i “What is the general topic?”]
                            li.mb-0
                              i.fas.fa-circle(style="color: #6B8DFC")
                              | #[i “What is the author's main point about the topic?”]
                            li.mb-0
                              i.fas.fa-circle(style="color: #6B8DFC")
                              | #[i “What general idea covers the other ideas presented in the text?”]
                            li.mb-0
                              i.fas.fa-circle(style="color: #6B8DFC")
                              | #[i “Is this statement supported by all or most of the other material in the paragraph?”]
                            li.mb-0
                              i.fas.fa-circle(style="color: #6B8DFC")
                              | #[i “How are main ideas presented?”]
              .row.m-1
                .col-12
                  h4.txt-c4.mb-5 #[i Secondary ideas]
                  .row
                    .col-lg-6.mb-4.mb-lg-0
                      traductor.color-primario
                        div(slot="textoIngles")
                          p #[i Ideas that follow from, support, and complement the main ideas.]
                          p.mb-0 #[i The descriptions are usually secondary ideas because they give more details and serve as a complement to the main idea. And they are also called supporting ideas.]
                        div(slot="textoEspanol")
                          p Ideas que se derivan de las ideas principales, las respaldan y las complementan.
                          p.mb-0 Las descripciones suelen ser ideas secundarias porque dan más detalles y sirven como complemento a la idea principal. Y también se les llama ideas de apoyo.
                    .col-lg-6
                      .row
                        .col-12.bg-c22.p-4
                          .row.align-items-center
                            .col-auto
                              figure
                                img(src='@/assets/curso/tema2/img11.svg', style="width: 50px").m-auto
                            .col
                              p.mb-0 #[b #[i To find the secondary ideas, ask yourself the following guiding questions]]
                        .col-12.bg-c23.p-4
                          ul.lista-ul
                            li.mb-0
                              i.fas.fa-circle(style="color: #6B8DFC")
                              | #[i Which details help you understand the main idea?”]
                            li.mb-0
                              i.fas.fa-circle(style="color: #6B8DFC")
                              | #[i “How is the main idea supported?”]
                            li.mb-0
                              i.fas.fa-circle(style="color: #6B8DFC")
                              | #[i “Which sentences or ideas answer questions raised by the main idea?” (like who, what, when, why, or how).]
                            li.mb-0
                              i.fas.fa-circle(style="color: #6B8DFC")
                              | #[i “What are the most relevant of these secondary ideas?”]
                            li.mb-0
                              i.fas.fa-circle(style="color: #6B8DFC")
                              | #[i “What do they emerge from?”]
                            li.mb-0
                              i.fas.fa-circle(style="color: #6B8DFC")
                              | #[i “How is the main idea linked to the supporting ideas?”]
    p.mb-5(data-aos="fade-down") #[i Now, read the next text and try to identify each concept of a paragraph. Then check:]
    .row.p-5.bg-c24
      .col-12
        .row.mb-5
          .col-12.bg-c25.p-4(data-aos="fade-down")
            p.text-white.mb-0 #[b #[i Listen, read, and check]]
          .col-12.bg-c16
            .row.align-items-center
              .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
                figure.mt-5
                  img(src='@/assets/curso/tema2/img3.png', style="width: 450px").m-auto
              .col-lg-7.p-4(data-aos="fade-left")
                p.txt-c7.mb-4 #[i Consumers concerned about the hazards of noise can reduce noise pollution in many ways. They can purchase noisy products such as garbage disposals and lawn mowers with reduced noise levels. They can also use sound-absorbing materials in their home. Carpeting can be installed instead of hard flooring, and cork and fabric can be used in rooms that tend to be noisy. Also, people can become less noisy themselves. They can learn to avoid shouting, to close doors without slamming them, and to play radios, TV sets, and stereos at moderate levels.]
                .row.justify-content-end
                  .col-auto.me-4
                    Audio.color-acento-contenido.mx-auto(
                      :audio="require('@/assets/curso/tema2/audio1.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
        .tabla-a.color-acento-botones(data-aos="fade-up")
          table
            thead
              tr.bg-c26
                td(colspan="3")
              tr
                th #[i Topic of this paragraph]
                th #[i Main idea]
                th #[i Secondary ideas]
            tbody(style="background-color: #F0F4FF" )
              tr
                td(style="vertical-align: initial")
                  traductor.color-primario.shadow-sm
                    div(slot="textoIngles")
                      .row.align-items-center
                        .col
                          p.mb-0 #[i Noise pollution or noise pollution in the home.]
                        .col-auto
                          Audio.color-acento-contenido.mx-auto(
                            :audio="require('@/assets/curso/tema2/audio2.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                    div(slot="textoEspanol")
                      p.mb-0 La contaminación acústica o contaminación acústica en el hogar.
                td(style="vertical-align: initial")
                  traductor.color-primario.shadow-sm
                    div(slot="textoIngles")
                      .row.align-items-center
                        .col
                          p #[i Consumers are concerned about noise pollution.]
                          p.mb-0 #[i (It is the first sentence and the most general sentence. It summarizes the other statements in the paragraph about ways to reduce noise pollution.)]
                        .col-auto
                          Audio.color-acento-contenido.mx-auto(
                            :audio="require('@/assets/curso/tema2/audio3.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                    div(slot="textoEspanol")
                      p Los consumidores están preocupados por la contaminación acústica.
                      p.mb-0 (Es la primera oración y la oración más general. Resume las otras declaraciones en el párrafo sobre las formas de reducir la contaminación acústica.)
                td(style="vertical-align: initial")
                  traductor.color-primario.shadow-sm
                    div(slot="textoIngles")
                      .row.align-items-center
                        .col
                          p.mb-0 #[i Consumers can reduce noise pollution in many ways.]
                        .col-auto
                          Audio.color-acento-contenido.mx-auto(
                            :audio="require('@/assets/curso/tema2/audio4.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                    div(slot="textoEspanol")
                      p.mb-0 Los consumidores pueden reducir la contaminación acústica de muchas maneras.
                  traductor.color-primario.shadow-sm
                    div(slot="textoIngles")
                      .row.align-items-center
                        .col
                          p.mb-0 #[i They can purchase products with reduced noise levels.]
                        .col-auto
                          Audio.color-acento-contenido.mx-auto(
                            :audio="require('@/assets/curso/tema2/audio5.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                    div(slot="textoEspanol")
                      p.mb-0 Pueden comprar productos con niveles de ruido reducidos.
                  traductor.color-primario.shadow-sm
                    div(slot="textoIngles")
                      .row.align-items-center
                        .col
                          p.mb-0 #[i They can use sound-absorbing materials in their home.]
                        .col-auto
                          Audio.color-acento-contenido.mx-auto(
                            :audio="require('@/assets/curso/tema2/audio6.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                    div(slot="textoEspanol")
                      p.mb-0 Pueden usar materiales absorbentes de sonido en su hogar.
                  traductor.color-primario.shadow-sm
                    div(slot="textoIngles")
                      .row.align-items-center
                        .col
                          p.mb-0 #[i They can become less noisy themselves.]
                        .col-auto
                          Audio.color-acento-contenido.mx-auto(
                            :audio="require('@/assets/curso/tema2/audio7.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                    div(slot="textoEspanol")
                      p.mb-0 Pueden volverse menos ruidosos ellos mismos.
    .row.p-5.bg-c27.mb-5
      .col-12.p-4
        p.mb-5(data-aos="fade-down") #[i.txt-c7 Whether we are reading and analyzing a text or writing it ourselves, it is important to identify main and supporting ideas. For this, we can use organization chart methods such as the following:] #[span.txt-c9 / Sea que estemos leyendo y analizando un texto o lo estemos escribiendo nosotros mismos, es importante identificar las ideas principales y secundarias. Para esto, podemos utilizar métodos gráficos de organización como los siguientes:]
        TabsA.color-acento-botones(data-aos="fade-right")
          .tarjeta.color-acento-botones.p-4(titulo="<em>Circle the main idea</em>")
            .row
              .col-12.p-4
                h4 #[i Circle the main idea]
                traductor.color-primario
                  div(slot="textoIngles")
                    p #[i Circle the main idea of the paragraph and underline the details.]
                  div(slot="textoEspanol")
                    p Encierre en un círculo la idea principal del párrafo y subraye los detalles.
                figure.pt-4
                  img(src='@/assets/curso/tema2/img13.svg')
          .tarjeta.color-acento-botones.p-4(titulo="<em>List organizer</em>")
            .row
              .col-12.p-4
                h4 #[i List organizer]
                traductor.color-primario
                  div(slot="textoIngles")
                    p #[i Read a text or a paragraph from the text. First, use the previous technique (circle the main idea and underline the supporting details from the text). Next, write down the main idea and supporting details here. Make sure to use complete sentences to describe the main idea and each detail.]
                  div(slot="textoEspanol")
                    p Lea un texto o un párrafo del texto. Primero, utilice la técnica anterior (encierre en un círculo la idea principal y subraye los detalles de apoyo del texto). A continuación, escriba la idea principal y los detalles de apoyo aquí. Asegúrese de usar oraciones completas para describir la idea principal y cada detalle.
                figure.pt-4
                  img(src='@/assets/curso/tema2/img14.svg')
          .tarjeta.color-acento-botones.p-4(titulo="<em>Graphic organizer</em>")
            .row
              .col-12.p-4
                h4 #[i List organizer]
                .row
                  .col-lg-6.mb-4.mb-lg-0
                    traductor.color-primario
                      div(slot="textoIngles")
                        p #[i Think of a main idea that you want to write about. Write it down in the middle bubble using one word or a short sentence. Then, write supporting details or ideas in each of the outside bubbles (again, using one word or a short sentence). Once you've done this, go back to the previous graphic organizer and write down your main ideas and details in complete sentences (or do this on a separate piece of paper).]
                      div(slot="textoEspanol")
                        p Piense en una idea principal sobre la que quiera escribir. Escríbala en la burbuja del medio usando una palabra o una oración corta. Luego, escriba detalles o ideas de apoyo en cada una de las burbujas exteriores (nuevamente, usando una palabra o una oración corta). Una vez que haya hecho esto, regrese al organizador gráfico anterior y escriba sus ideas principales y detalles en oraciones completas (o hágalo en una hoja de papel aparte).
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema2/img15.svg')
    p.mb-5(data-aos="fade-up") #[i.txt-c7 Let's see if you learned to identify ideas in a text. Complete the following dialogue.] #[span.txt-c9 / Veamos si aprendió a identificar las ideas en un escrito. Complete el siguiente diálogo:]
    Dialogo.color-primario(:dialogo="dialogo")(data-aos="fade-left")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) #[i Identify ideas practice]
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import traductor from '@/components/tarjetaTraductor.vue'
export default {
  name: 'Tema2',
  components: {
    traductor,
    DialogoChat,
  },
  data: () => ({
    dialogo: {
      personajes: [
        {
          nombre: 'Gina',
          img: require('@/assets/curso/tema2/img16.svg'),
        },
        {
          nombre: 'Juan',
          img: require('@/assets/curso/tema2/img17.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Gina',
          textoIng:
            '<i>Oh, okay! Yes,</i> *** <i>pollution has increased a lot since energy consumption has increased a lot.</i>',
          textoEsp:
            '¡Oh, ok! Sí, porque la contaminación ha aumentado mucho debido a que el consumo energético ha aumentado mucho.',
          audio: require('@/assets/curso/tema2/gina3.mp3'),
          palabra: 'because',
        },
        {
          personaje: 'Juan',
          textoIng:
            '<i>Exactly! And human beings no longer have the luxury of doing what they</i> *** <i>to do: contaminating a place and then moving to a clean place hoping that the new environment took care of the pollution.</i>',
          textoEsp:
            '¡Exacto! Y ya los seres humanos no pueden darse el lujo de hacer lo que hacían antes: contaminar un lugar y luego mudarse a un lugar limpio esperando que el nuevo medio ambiente se hiciera cargo de la polución.',
          audio: require('@/assets/curso/tema2/juan3.mp3'),
          palabra: 'used',
        },
        {
          personaje: 'Gina',
          textoIng:
            '<i>These last statements are the</i> *** <i>ideas of the text, right?</i>',
          textoEsp:
            'Estas últimas afirmaciones son las ideas secundarias del texto, ¿verdad?',
          audio: require('@/assets/curso/tema2/gina4.mp3'),
          palabra: 'secondary',
        },
        {
          personaje: 'Juan',
          textoIng:
            '<i>Yes, these ideas support and explain the</i> *** <i>idea.</i>',
          textoEsp: 'Sí, estas ideas respaldan y explican la idea principal.',
          audio: require('@/assets/curso/tema2/juan4.mp3'),
          palabra: 'main',
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
