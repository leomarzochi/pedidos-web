<template>
    <div id="app">
    <vue-header></vue-header>
    <v-app>
      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from './components/shared/Header'
export default {
  components: {
    'vue-header': Header
  }
}
</script>
<style>
  body {
      background-color: red
    }
</style>
