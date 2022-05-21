<template>
  
  <v-app>
    
    <v-card
    
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar class="indigo lighten-1 white--text text-center">
      <v-icon >mdi-pizza</v-icon>

      <v-toolbar-title>Pizza</v-toolbar-title>

      <!--<router-link  to="/"><v-icon>mdi-cart</v-icon></router-link>
      <router-link to="/about">Go to About</router-link>-->
      
      <v-spacer></v-spacer>

      <v-btn icon>
        <Carrinho/>
        
      </v-btn>

    </v-toolbar>
    <Banner/>
    <Produtos/>
    <Rodape/>
  </v-card>
  
  </v-app>
</template>

<script>
import Rodape from '@/components/Rodape.vue'
import Banner from '@/components/Banner.vue'
import Produtos from '@/components/Produtos.vue'
import Carrinho from '@/components/Carrinho.vue'

export default {
  name: 'App',
  components:{
    Produtos,
    Banner,
    Rodape,
    Carrinho
},
  data: () => ({
    //
    drawer: false,
    group: null,
  }),
};
</script>
