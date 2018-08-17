<template>
<div>
    <v-app>
        <v-content>
          <v-container fluid wrap>
              <frame/>
              <NovoProduto/>
          </v-container>
        </v-content>
      </v-app>
</div>
</template>

<script>
import NovoProduto from './NovoProduto'
import Frame from './../shared/Frame'
export default {
  components: {
    NovoProduto,
    Frame
  }
}
</script>

<style>

</style>
