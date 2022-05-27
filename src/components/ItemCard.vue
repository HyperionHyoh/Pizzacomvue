<template>
    <v-card
          class="mx-auto"
          max-width="300"
        >
          <v-img
            :src="img"
            height="200px"
          ></v-img>

          <v-card-title>
            {{sabor}}
          </v-card-title>

          <v-card-subtitle>
            {{valor}}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn @click="show = !show"
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
                {{descricao}}
                 <v-btn 
                  class="ma-2"
                  outlined
                  color="indigo"
                >
                  Adicionar ao carrinho
                </v-btn>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
</template>

<script>
export default {
    props:{
        img:{
            default:'https://s.cornershopapp.com/product-images/4653848.jpg?versionId=JpQ4iLTDU20SJD5SKj0lp_Qd0olS32ae'
        },
        sabor:{
            required:true
        },
        valor:{
            default:'R$ 0,00'
        },
        descricao:{
            default:''
        }

    },
    data:()=>({
        show:false
    })
}
</script>