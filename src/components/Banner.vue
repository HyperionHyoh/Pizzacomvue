<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      
    >
      <v-sheet
        
        color="#A7B12F"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            Promoção do Dia
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>

    <v-carousel-item
      
    >
      <v-sheet
        
        color="#5CB9B8"
        height="100%"
        
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
          
        >
          <div class="text-h2" >
            Segunda/Terça/Quarta - Mussarela R$15,00
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>

    <v-carousel-item
      
    >
      <v-sheet
        color='#ADCF98'
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2" background>
            Quinta/Sexta - Calabresa R$20,00
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>

    <v-carousel-item
      
    >
      <v-sheet
        color="#CF9898"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            Sabado/Domingo - Marguerita R$15,00
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: 'Banner',
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>