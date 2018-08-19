<template>
  <v-toolbar dark color="primary" fixed="top">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
      <v-btn icon to="/">
      <v-icon>home</v-icon>
      </v-btn>
      PedWeb
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon v-if="$store.state.isUserLogedIn">
      <v-icon >search</v-icon>
    </v-btn>

    <v-btn icon v-if="$store.state.isUserLogedIn">
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn icon v-if="$store.state.isUserLogedIn">
      <v-icon >refresh</v-icon>
    </v-btn>

    <v-btn icon v-if="$store.state.isUserLogedIn">
      <v-icon>more_vert</v-icon>
    </v-btn>

    <v-btn
      icon
      v-if="$store.state.isUserLogedIn"
      @click="logout">
      <v-icon >logout</v-icon>
    </v-btn>
    <v-btn flat dark v-if="!$store.state.isUserLogedIn" to="/register">Criar conta</v-btn>
    <v-btn flat dark v-if="!$store.state.isUserLogedIn" to="/login">Entrar</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.state.uid = null
      this.$store.state.email = null
      this.$store.state.isUserLogedIn = false
      this.$router.push({
        name: 'HelloWorld'
      })
    }
  }
}
</script>
