<template>

  <v-container class="grey lighten-5"> 
    <v-row>
      <v-spacer></v-spacer>
      <h1 class="ma-3">Cardápio</h1>
      <v-spacer></v-spacer>
    </v-row>
    <v-row >
      <v-col cols="12" sm="4" v-for="pizza,index in lista_pizzas" :key="index">
        <ItemPizza 
          :img='pizza.img' 
          :valor='pizza.valor' 
          :descricao='pizza.descricao' 
          :sabor='pizza.sabor'/>
        
      </v-col>

    </v-row>
  </v-container>

</template>

<script>
import ItemPizza from './ItemCard.vue'
    export default {
      components:{
        ItemPizza
      },
        name: 'Produtos',
        data: ()=>({
          lista_pizzas:[
            {
              sabor:'Mussarela',
              descricao:'Muita mussarela, muito molho de tomate e muito tomate cereja, tudo isso em cima de uma massa crocante e deliciosa.',
              valor:'R$ 20,00',
              img:'https://uploads.metropoles.com/wp-content/uploads/2020/09/28085236/Pizza-de-mussarela-com-massa-de-frango-proteica-foto-divulga%C3%A7%C3%A3o.jpg'
            },
            {
              sabor:'Calabresa',
              descricao:'Muita mussarela, muito molho e muita calabresa que nem dá pra sentir o gosto do restante.',
              valor:'R$ 25,00',
              img:'https://curtarecife.com.br/wp-content/uploads/2021/04/PIZZARIA-EM-RECIFE-700x420.png'
            },
            {
              sabor:'Marguerita',
              descricao:'Muita mussarela, muito molho e muita folha verde parecendo a SheHulk.',
              valor:'R$ 20,00',
              img:'https://s.cornershopapp.com/product-images/4653848.jpg?versionId=JpQ4iLTDU20SJD5SKj0lp_Qd0olS32ae'
            },
          ]
        })
    }
</script>