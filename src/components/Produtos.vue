<template>

  <v-container class="grey lighten-5"> 
    <v-text class=" pt-0">Teste</v-text>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="4"
      >
      
        <v-card
          class="mx-auto"
          max-width="300"
        >
          <v-img
            src="https://uploads.metropoles.com/wp-content/uploads/2020/09/28085236/Pizza-de-mussarela-com-massa-de-frango-proteica-foto-divulga%C3%A7%C3%A3o.jpg"
            height="200px"
          ></v-img>

          <v-card-title>
            Mussarela
          </v-card-title>

          <v-card-subtitle>
            R$ 25,00
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              Mais detalhes
            </v-btn>
            

            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Mussarela
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="mx-auto"
          max-width="300"
        >
          <v-img
            src="https://curtarecife.com.br/wp-content/uploads/2021/04/PIZZARIA-EM-RECIFE-700x420.png"
            height="200px"
          ></v-img>

          <v-card-title>
            Calabresa
          </v-card-title>

          <v-card-subtitle>
            R$ 30,00
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              Mais detalhes
            </v-btn>
            

            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Mussarela
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="mx-auto"
          max-width="300"
        >
          <v-img
            src="https://s.cornershopapp.com/product-images/4653848.jpg?versionId=JpQ4iLTDU20SJD5SKj0lp_Qd0olS32ae"
            height="200px"
          ></v-img>

          <v-card-title>
            Marguerita
          </v-card-title>

          <v-card-subtitle>
            R$ 25,00
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              Mais detalhes
            </v-btn>
            

            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Mussarela
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>

    export default {
        name: 'Produtos',
        data: ()=>({
          show: false,
          show1: false,
          show2: false
        })
    }
</script>