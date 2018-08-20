<template>
<div>
    <v-app>
        <v-content>
          <v-container fluid wrap>
            <v-frame>
              <template slot="title">
                <h1>Pedidos</h1>
              </template>
              <template slot="button">
                <v-btn
                  large
                  fab
                  color="success"
                  @click="openDialog()">
                  <v-icon>add</v-icon>
                </v-btn>
              </template>
              <template slot="content">
              </template>
            </v-frame>
          </v-container>
        </v-content>
      </v-app>
</div>
</template>

<script>
import axios from 'axios'
import Frame from './../shared/Frame'
export default {
  data () {
    return {
      uid: this.$store.state.uid,
      dialog: this.$store.state.dialog,
      produtos: [],
      stateProdutos: this.$store.state.produtos
    }
  },
  methods: {
    openDialog () {
      this.$store.commit('setDialog', true)
    }
  },
  components: {
    'v-frame': Frame
  },
  created () {
    axios.get('https://pedidos-web-a7288.firebaseio.com/' + this.uid + '/produtos.json')
      .then(resposta => {
        const data = resposta.data
        const produtosArr = []
        for (let i in data) {
          const produto = data[i]
          produto.id = i
          produtosArr.push(produto)
        }
        this.produtos = produtosArr
        this.$store.commit('setProdutos', this.produtos)
      })
      .catch(error => console.error(error))
  }
}

</script>

<style>

</style>
