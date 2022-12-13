<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 #[i The anatomy of an argumentative text] (La anatomía de un texto argumentativo)
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        traductor.color-primario
          div(slot="textoIngles")
            p.mb-0 #[i When writing texts that persuade the reader, it takes more than an opinion to be convincing. It is not about how strong the position is, but how structured it is and how it is supported by evidence and arguments. Next we will learn everything necessary about argumentative texts. Pay attention to the next dialogue:]
          div(slot="textoEspanol")
            p.mb-0 A la hora de escribir textos que persuadan al lector, se necesita más que una opinión para ser convincente. No se trata de cuán fuerte es la postura, sino de cuán estructurada está y cómo está respaldada por evidencia y argumentos. A continuación, aprenderemos todo lo necesario sobre los textos argumentativos. Preste atención al siguiente diálogo: 
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width: 450px").m-auto
    .row.bg-c5.mb-5
      .col-12.px-5.pt-5
        .row.align-items-end.justify-content-center
          .col-lg-4.px-0
            figure
              img(src='@/assets/curso/tema1/img1.svg', style="width: 450px").m-auto
          .col-lg-6.bg-white.shadow-lg.p-4
            .row.align-items-center.mb-4
              .col-lg-auto
                h4.text-center.txt-c2.mb-0.mb-lg-5 Andrea
              .col-lg
                traductor.color-primario1
                  div(slot="textoIngles")
                    .row.align-items-center
                      .col
                        p.mb-0 #[i Hi, Sebastian. How is your argumentative essay going?]
                      .col-auto
                        Audio.color-acento-contenido.mx-auto(
                          :audio="require('@/assets/curso/tema1/andrea1.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                  div(slot="textoEspanol")
                    p.mb-0 Hola, Sebastián. ¿Cómo vas con tu ensayo argumentativo?
            .row.align-items-center.mb-4
              .col-lg.order-2.order-lg-1
                traductor.color-primario2
                  div(slot="textoIngles")
                    .row.align-items-center
                      .col
                        p.mb-0 #[i Very good, Andrea. I already chose the topic, and since I wanted it to be a controversial current issue, I chose the genetic modifications of transgenic foods.]
                      .col-auto
                        Audio.color-acento-contenido.mx-auto(
                          :audio="require('@/assets/curso/tema1/sebas1.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                  div(slot="textoEspanol")
                    p.mb-0 Muy bien, Andrea. Ya escogí el tema, y como quería que fuera un tema de actualidad controversial, escogí las modificaciones genéticas de los alimentos transgénicos.
              .col-lg-auto.order-1.order-lg-2
                h4.text-center.txt-c3.mb-0.mb-lg-5 Sebastian
            .row.align-items-center.mb-4
              .col-lg-auto
                h4.text-center.txt-c2.mb-0.mb-lg-5 Andrea
              .col-lg
                traductor.color-primario1
                  div(slot="textoIngles")
                    .row.align-items-center
                      .col
                        p.mb-0 #[i How interesting! And have you already defined the thesis statement in your claim?]
                      .col-auto
                        Audio.color-acento-contenido.mx-auto(
                          :audio="require('@/assets/curso/tema1/andrea2.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                  div(slot="textoEspanol")
                    p.mb-0 ¡Qué interesante! ¿Y ya definiste qué vas a afirmar en tu hipótesis?
            .row.align-items-center
              .col-lg.order-2.order-lg-1
                traductor.color-primario2
                  div(slot="textoIngles")
                    .row.align-items-center
                      .col
                        p.mb-0 #[i Yes, that genetic manipulation to improve the nutritional values and resistance of crops is not worth the negative consequences for the health of consumers.]
                      .col-auto
                        Audio.color-acento-contenido.mx-auto(
                          :audio="require('@/assets/curso/tema1/sebas2.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                  div(slot="textoEspanol")
                    p.mb-0 Sí, que la manipulación genética para mejorar los valores nutricionales y la resistencia de los cultivos no valen la pena frente a las consecuencias negativas para la salud de los consumidores.
              .col-lg-auto.order-1.order-lg-2
                h4.text-center.txt-c3.mb-0.mb-lg-5 Sebastian
    .h4.mb-5.pt-4 #[i.txt-c4 What is an argumentative text?] #[span.txt-c5 / ¿Qué es un texto argumentativo?]
    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img3.svg', style="width: 450px").m-auto
      .col-lg-7
        traductor.color-primario
          div(slot="textoIngles")
            p.mb-0 #[i Argumentative texts are usually a common task to develop in the middle and higher education stage of young students. And before learning how to write an argumentative text, we must understand what it is. Let’s see the next image:]
          div(slot="textoEspanol")
            p.mb-0 Los textos argumentativos suelen ser una tarea común a desarrollar en la etapa de educación media y superior de jóvenes estudiantes. Y antes de aprender cómo escribir un texto argumentativo, debemos entender qué es. Veamos la siguiente imagen:
    .row.bg-c6
      .col-12.p-5.d-none.d-lg-block
        .row
          .col-12.bg-c7.p-5
            figure.mb-4
              img(src='@/assets/curso/tema1/img6.svg')
            .row.justify-content-end
              .col-auto
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span Ver traducción
                  i.fas.fa-language
                  .indicador--click(v-if="mostrarIndicador")
      .col-12.p-5.d-block.d-lg-none
        .row
          .col-12.bg-c8.p-5
            figure.mb-4
              img(src='@/assets/curso/tema1/img9.svg')
            .row.justify-content-end
              .col-auto
                a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                  span Ver traducción
                  i.fas.fa-language
                  .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-12
          figure
            img(src='@/assets/curso/tema1/img7.svg')
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .col-12
          figure
            img(src='@/assets/curso/tema1/img10.svg')
    .row.bg-c9.d-none.d-lg-block.mb-5
      .col-12.p-5
        .row.justify-content-center.mb-5
          .col-10.col-lg-2.mb-4
            figure
              img(src='@/assets/curso/tema1/img11.svg', style="width: 250px").m-auto
          .col-lg
            traductor.color-primario
              div(slot="textoIngles")
                p.mb-0 #[i The parts of an argumentative text should not be confused with the parts of an argument for a debate. Below is the anatomy of an argumentative text:]
              div(slot="textoEspanol")
                p.mb-0 Las partes de un texto argumentativo no deben confundirse con las partes de un argumento para un debate. A continuación, está expuesta la anatomía de un texto argumentativo:
        .row.align-items-end.justify-content-center
          .col-3.px-0
            figure
              img(src='@/assets/curso/tema1/img13.svg', style="width: 450px").m-auto
          .col-8.bg-white.p-5
            SlyderE(indicadores="derecha")
              .row
                .col-12
                  h4.text-center.mb-3.txt-c1 #[i Introduction]
                  p.text-center.mb-4 #[i An opening hook to catch the reader's attention. Relevant background information that the reader needs to know. A thesis statement that presents your main point or argument.]
                  figure
                    img(src='@/assets/curso/tema1/img15.svg')
              .row
                .col-12
                  h4.text-center.mb-3.txt-c1 #[i Body paragraphs]
                  p.text-center.mb-4 #[i A body paragraph should always begin with a topic sentence and end with proof of your objective.]
                  figure
                    img(src='@/assets/curso/tema1/img16.svg')
              .row
                .col-12
                  h4.text-center.mb-3.txt-c1 #[i Conclusion]
                  p.text-center.mb-4 #[i The final piece of writing in a research paper, essay, or article that summarizes the entire work.]
                  figure
                    img(src='@/assets/curso/tema1/img17.svg')
    .row.bg-c10.d-block.d-lg-none.mb-5
      .col-12.p-5
        .row.justify-content-center.mb-5
          .col-10.col-lg-2.mb-4
            figure
              img(src='@/assets/curso/tema1/img11.svg', style="width: 250px").m-auto
          .col-lg
            traductor.color-primario
              div(slot="textoIngles")
                p.mb-0 #[i The parts of an argumentative text should not be confused with the parts of an argument for a debate. Below is the anatomy of an argumentative text:]
              div(slot="textoEspanol")
                p.mb-0 Las partes de un texto argumentativo no deben confundirse con las partes de un argumento para un debate. A continuación, está expuesta la anatomía de un texto argumentativo:
        .row.justify-content-center.mb-4
          .col-lg-10.mb-5
            figure
              img(src='@/assets/curso/tema1/img14.svg', style="width: 250px").m-auto
          .col-11.p-4.bg-white
            SlyderE(indicadores="derecha")
              .row
                .col-12
                  h4.text-center.mb-3.txt-c1 #[i Introduction]
                  p.text-center.mb-4 #[i An opening hook to catch the reader's attention. Relevant background information that the reader needs to know. A thesis statement that presents your main point or argument.]
                  figure
                    img(src='@/assets/curso/tema1/img19.svg')
              .row
                .col-12
                  h4.text-center.mb-3.txt-c1 #[i Body paragraphs]
                  p.text-center.mb-4 #[i A body paragraph should always begin with a topic sentence and end with proof of your objective.]
                  figure.mb-4
                    img(src='@/assets/curso/tema1/img20.svg')
                  .row.justify-content-end
                    .col-auto
                      a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                        span Ver traducción
                        i.fas.fa-language
                        .indicador--click(v-if="mostrarIndicador")
              .row
                .col-12
                  h4.text-center.mb-3.txt-c1 #[i Conclusion]
                  p.text-center.mb-4 #[i The final piece of writing in a research paper, essay, or article that summarizes the entire work.]
                  figure
                    img(src='@/assets/curso/tema1/img21.svg')
    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        .col-12
          figure
            img(src='@/assets/curso/tema1/img22.svg')
    .row.bg-c11.mb-5
      .col-12.p-5
        traductor.color-primario.mb-5
          div(slot="textoIngles")
            p.mb-0 #[i A good argumentative text should have a simple structure that is easy for readers to follow, clearly stating the position on the topic, the author's reasoning, and the supporting evidence. Next, we have a step by step so that you can make an argumentative text and be sure that you did not miss absolutely anything:]
          div(slot="textoEspanol")
            p.mb-0 Un buen texto argumentativo debe tener una estructura sencilla, que sea fácil de seguir para los lectores, donde se exponga claramente la postura sobre el tema, los razonamientos del autor y la evidencia que lo respalda. A continuación, tenemos un paso a paso para que pueda realizar un texto argumentativo y esté seguro de que no le hace falta absolutamente nada:
        .row.align-items-end.mb-5
          .col-lg-3.px-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img2.png', style="width: 350px").m-auto
          .col-lg-9.bg-white.p-4
            p.text-center.mb-5 #[i.txt-c1 Steps to write an argumentative text] #[span.txt-c5 / Pasos para escribir un texto argumentativo]
            SlyderF.mb-5(columnas="col-12 col-lg-6")
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-8
                    img(src='@/assets/curso/tema1/img24.svg' alt='AvatarTop')
                traductor.color-primario3
                  div(slot="textoIngles")
                    p.text-center #[i.txt-c6 Choose a topic]
                    p.text-center.mb-0 #[i Go for contradictory ones on which there is polarization in opinions.]
                    p.text-center.mb-0 #[i Never select a moral issue as your topic.]
                  div(slot="textoEspanol")
                    p.mb-0 Escoja los contradictorios, sobre los que hay polarización de opiniones.
                    p.mb-0 Nunca seleccione un problema moral como su tema.
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-8
                    img(src='@/assets/curso/tema1/img25.svg' alt='AvatarTop')
                traductor.color-primario3
                  div(slot="textoIngles")
                    p.text-center #[i.txt-c6 Collect evidence and data]
                    p.text-center.mb-0 #[i Before starting, you should collect all the necessary data related to your topic. All the claims and arguments should be backed by supportive evidence.]
                  div(slot="textoEspanol")
                    p.mb-0 Antes de comenzar, debe recopilar todos los datos necesarios relacionados con su tema. Todas las afirmaciones y argumentos deben estar respaldados por evidencia de apoyo.
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-8
                    img(src='@/assets/curso/tema1/img26.svg' alt='AvatarTop')
                traductor.color-primario3
                  div(slot="textoIngles")
                    p.text-center #[i.txt-c6 Turn the topic into a question]
                    p.text-center.mb-0 #[i Then, build up the writing to answer that question in your argumentative text. This encourages readers to read on to find the answer.]
                  div(slot="textoEspanol")
                    p.mb-0 Luego, construya el escrito para responder esa pregunta en su texto argumentativo. Esto anima a los lectores a seguir leyendo para encontrar la respuesta.
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-8
                    img(src='@/assets/curso/tema1/img27.svg' alt='AvatarTop')
                traductor.color-primario3
                  div(slot="textoIngles")
                    p.text-center #[i.txt-c6 State an argument and then refute it]
                    p.text-center.mb-0 #[i Introduce an idea that contrasts with your belief, and immediately explain why you disagree with it (removing it from your path immediately). In this way, you use evidence and demonstrate your credibility...]
                  div(slot="textoEspanol")
                    p.mb-0 Presente una idea que contraste con su hipótesis, e inmediatamente explique por qué no está de acuerdo con ella (eliminándola de su camino inmediatamente). De esta manera, usa evidencia y demuestra su credibilidad...
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-8
                    img(src='@/assets/curso/tema1/img28.svg' alt='AvatarTop')
                traductor.color-primario3
                  div(slot="textoIngles")
                    p.text-center #[i.txt-c6 Rehearse]
                    p.text-center.mb-0 #[i ... by stating your position (claim) and listing your reasons point by point.]
                  div(slot="textoEspanol")
                    p.mb-0 ... expresando su postura (hipótesis) y enumerando sus razones punto por punto.
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-8
                    img(src='@/assets/curso/tema1/img29.svg' alt='AvatarTop')
                traductor.color-primario3
                  div(slot="textoIngles")
                    p.text-center #[i.txt-c6 Plan your claim]
                    p.text-center.mb-0 #[i And also your reasons and arguments by using boxes and bullets.]
                  div(slot="textoEspanol")
                    p.mb-0 Y también sus razones y argumentos mediante el uso de recuadros y viñetas.
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-8
                    img(src='@/assets/curso/tema1/img30.svg' alt='AvatarTop')
                traductor.color-primario3
                  div(slot="textoIngles")
                    p.text-center #[i.txt-c6 Support]
                    p.text-center.mb-0 #[i Use evidence to support your claim.]
                  div(slot="textoEspanol")
                    p.mb-0 Use evidencia para respaldar su afirmación.
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-8
                    img(src='@/assets/curso/tema1/img31.svg' alt='AvatarTop')
                traductor.color-primario3
                  div(slot="textoIngles")
                    p.text-center #[i.txt-c6 Create an outline]
                    p.text-center.mb-0 #[i Create a proper outline for your essay and divide it into necessary parts.]
                  div(slot="textoEspanol")
                    p.mb-0 Cree un esquema adecuado para su ensayo y divídalo en las partes necesarias.
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-8
                    img(src='@/assets/curso/tema1/img32.svg' alt='AvatarTop')
                traductor.color-primario3
                  div(slot="textoIngles")
                    p.text-center #[i.txt-c6 Develop all parts]
                    p.text-center.mb-0 #[i Build completely the parts you previously outlined. They usually are the introduction, body paragraphs, and the conclusion.]
                  div(slot="textoEspanol")
                    p.mb-0 Construya completamente las partes que bocetó previamente. Por lo general, son la introducción, los párrafos del cuerpo y la conclusión.
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-8
                    img(src='@/assets/curso/tema1/img33.svg' alt='AvatarTop')
                traductor.color-primario3
                  div(slot="textoIngles")
                    p.text-center #[i.txt-c6 Proofread before submitting]
                    p.text-center.mb-0 #[i Always proofread your text before submitting and look out for minor mistakes, like typing errors, spelling mistakes or grammatical mistakes.]
                  div(slot="textoEspanol")
                    p.mb-0 Siempre corrija su texto antes de enviarlo y busque errores menores, como errores tipográficos, ortográficos o gramaticales.
        .row.justify-content-center.mb-4
          .col-lg.mb-4
            traductor.color-primario
              div(slot="textoIngles")
                p.mb-0 #[i Below you can see an example of an argumentative essay, with comments that explain the reason for each one of the paragraphs and the parts that are exposed in it.]
              div(slot="textoEspanol")
                p.mb-0 A continuación, puede ver un ejemplo de ensayo argumentativo, con comentarios que explican el porqué de cada uno de los párrafos y las partes que se exponen en él.
          .col-10.col-lg-2
            figure
              img(src='@/assets/curso/tema1/img11.svg', style="width: 250px").m-auto
        .row.justify-content-center
          .col-lg-10
            .row.align-items-center
              .col-lg-4.fig-p10.mb-4.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/img3.png", style="width: 250px").m-auto
              .col-lg-7.bg-c12.fig-p9
                .row.justify-content-end
                  .col-lg-11.p-5
                    .row.align-items-center
                      .col-lg.mb-4.mb-lg-0
                        p.mb-0 #[i #[b The Legalization of Gambling: A Question of Friend or Foe?]]
                      .col-lg-auto
                        a.boton.color-acento-botones(:href="obtenerLink('downloads/anexo3.pdf')" target="_blank" type="application/pdf")
                          span Descargar
                          i.fas.fa-file-download
    .row.bg-c13
      .col-12.p-5
        .row.mb-5
          .col-lg-6.mb-4
            figure
              img(src='@/assets/curso/tema1/img4.png', style="width: 550px").m-auto
          .col-lg-6
            traductor.color-primario
              div(slot="textoIngles")
                p.mb-0 #[i Now let's see how much you learned about argumentative texts. Listen and complete the following dialogue.]
              div(slot="textoEspanol")
                p.mb-0 Ahora, veamos cuánto aprendió sobre los textos argumentativos. Escuche y complete el siguiente diálogo.
        Dialogo.color-primario(:dialogo="dialogo")
          template(#nombre-actividad) Arrastrar y Soltar
          template(#titulo-actividad) #[i Argumentative text practice]
          template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
      
</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import traductor from '@/components/tarjetaTraductor.vue'
export default {
  name: 'Tema1',
  components: {
    traductor,
    DialogoChat,
  },
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    dialogo: {
      personajes: [
        {
          nombre: 'Andrea',
          img: require('@/assets/curso/tema1/img35.svg'),
        },
        {
          nombre: 'Sebastian',
          img: require('@/assets/curso/tema1/img36.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Andrea',
          textoIng:
            '<i>Sounds promising. Have you already researched and organized the</i> *** <i>that will support your claim?</i>',
          textoEsp:
            'Suena prometedor. ¿Ya investigaste y organizaste la evidencia que va a respaldar tu hipótesis?',
          audio: require('@/assets/curso/tema1/andrea3.mp3'),
          palabra: 'evidence',
        },
        {
          personaje: 'Sebastian',
          textoIng:
            '<i>Yes, and I already know which parts I&apos;m going to</i> *** <i>and which parts I&apos;m going to paraphrase.</i>',
          textoEsp:
            'Sí, y ya sé qué partes voy a citar y cuáles voy a parafrasear.',
          audio: require('@/assets/curso/tema1/sebas3.mp3'),
          palabra: 'quote',
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
