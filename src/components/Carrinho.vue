<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          mdi-cart
        </v-icon>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Carrinho</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>Informações financeiras</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Forma de pagamento</v-list-item-title>
              <v-list-item-subtitle>Selecione sua forma de pagamento</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          
        </v-list>
        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
          <v-subheader>Não perca! 10% de desconto no PIX!</v-subheader>
          
          <v-row no-gutters>
            <v-col
              
              cols="12"
              sm="4"
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <v-text-field
                    
                    label="Numero do Cartão"
                    required
                    outlined
                  ></v-text-field>

                  <v-text-field
                    
                    
                    label="Nome"
                    required
                    outlined
                  ></v-text-field>

                  <v-text-field
                   
                    label="Validade"
                    required
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    
                    label="Código de segurança"
                    required
                    outlined
                  ></v-text-field>

                  
                </v-form>
              </v-card>
            </v-col>

            <v-col
              
              cols="12"
              sm="8"
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >

                <v-list two-line> 
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo">
                        mdi-phone
                      </v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list>

                <v-btn
                    color="primary"
                    class="mr-4"
                    
                >
                    Confirmar
                </v-btn>
              </v-card>
            </v-col>

            
          </v-row>
          
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name: 'Carrinho',
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
  }
</script>