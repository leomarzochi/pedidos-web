<template>
  <v-toolbar dark color="cyan" fixed="top">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
      <v-btn icon to="/">
      <v-icon>home</v-icon>
      </v-btn>
      PedWeb
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon v-if="userIsLogged">
      <v-icon >search</v-icon>
    </v-btn>

    <v-btn icon v-if="userIsLogged">
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn icon v-if="userIsLogged">
      <v-icon >refresh</v-icon>
    </v-btn>

    <v-btn icon v-if="userIsLogged">
      <v-icon>more_vert</v-icon>
    </v-btn>
    <v-btn flat dark v-if="!userIsLogged" to="/register">Criar conta</v-btn>
    <v-btn flat dark v-if="!userIsLogged" to="/login">Entrar</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      userIsLogged: false
    }
  }
}
</script>
