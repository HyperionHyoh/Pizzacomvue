<template>
  <v-app>
    <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar>
      <v-icon>mdi-pizza</v-icon>

      <v-toolbar-title>Pizza</v-toolbar-title>

      <v-spacer></v-spacer>
 
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
        
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-login</v-icon>
        
      </v-btn>

    </v-toolbar>
    <Banner/>
    <Produtos/>
  </v-card>
  </v-app>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Produtos from '@/components/Produtos.vue'
export default {
  name: 'App',
  components:{
    Produtos,
    Banner
  },
  data: () => ({
    //
    drawer: false,
    group: null,
  }),
};
</script>
