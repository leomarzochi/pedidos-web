<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
      <v-btn slot="activator" color="red lighten-2" dark>
        Click Me
      </v-btn>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Adicionar novo produto
        </v-card-title>
        <v-divider></v-divider>
        <v-content>
          <v-container>
              <v-form>
                  <v-text-field label="Código" v-model="produtos.codigo"></v-text-field>
                </v-form>
                <v-form>
                  <v-text-field label="Nome" v-model="produtos.nome"></v-text-field>
                </v-form>
                <v-form>
                  <v-text-field label="Preço" v-model="produtos.preco"></v-text-field>
                </v-form>
                <v-form>
                  <v-text-field label="Informações adicionais" type="text" v-model="produtos.info"></v-text-field>
                </v-form>
          </v-container>
        </v-content>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.prevent="salvarProduto">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      produtos: {
        codigo: null,
        preco: null,
        nome: null,
        info: null
      }
    }
  },
  methods: {
    async salvarProduto () {
      try {
        await axios.post('https://pedidos-web-a7288.firebaseio.com/produtos.json', this.produtos)
      } catch (error) {
        console.error(error)
      }
      this.dialog = false
      this.$emit('fecharModal', this.dialog = false)
    }
  },
  props: ['dialog']
}

</script>
