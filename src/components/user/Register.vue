<template>
    <v-app class="login-form">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md6>
                        <v-card class="elevation-2">
                            <v-toolbar dark flat color="cyan">
                                <v-toolbar-title>Criar uma nova conta</v-toolbar-title>
                            </v-toolbar>
                            <v-spacer></v-spacer>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field v-model="email" prepend-icon="mail" name="email" label="Email" type="text"></v-text-field>
                                        <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                                    </v-form>
                                </v-card-text>
                                <v-spacer></v-spacer>
                                <v-card-actions>
                                    <v-btn @click="userRegister" block dark color="cyan">Register</v-btn>
                                </v-card-actions>
                                <p>Já tem uma conta? Acesse <router-link to="login">aqui</router-link></p>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async userRegister () {
      try {
        const resposta = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        console.log(resposta.user.uid)
        this.$store.dispatch('setUid', resposta.user.uid)
        this.$store.dispatch('setEmail', resposta.user.email)
      } catch (err) {
        alert(err.message)
      }
    }
  }
}
</script>
<style>
p {
  text-align: center;
  padding-bottom: 7px;
}
</style>
