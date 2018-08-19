<template>
<div>
    <v-app>
        <v-content>
          <v-container fluid wrap>
            <v-frame>
              <template slot="title">
                <h1>Produtos</h1>
              </template>
              <template slot="button">
                <v-btn
                  large
                  fab
                  color="success"
                  @click="dialog = true">
                  <v-icon>add</v-icon>
                </v-btn>
              </template>
            </v-frame>
              <NovoProduto :dialog="dialog"/>
          </v-container>
        </v-content>
      </v-app>
</div>
</template>

<script>
import axios from 'axios'
import NovoProduto from './NovoProduto'
import Frame from './../shared/Frame'
export default {
  data () {
    return {
      dialog: false,
      produtos: []
    }
  },
  components: {
    NovoProduto,
    'v-frame': Frame
  },
  created () {
    axios.get('https://pedidos-web-a7288.firebaseio.com/produtos.json')
      .then(resposta => {
        const data = resposta.data
        const produtosArr = []
        for (let i in data) {
          const produto = data[i]
          produto.id = i
          produtosArr.push(produto)
        }
        this.produtos = produtosArr
      })
      .catch(error => console.error(error))
  }
}

</script>

<style>

</style>
