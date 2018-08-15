<template>
    <v-app class="login-form">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md6>
                        <v-card class="elevation-3">
                            <v-toolbar dark flat color="blue">
                                <v-toolbar-title >Entrar</v-toolbar-title>
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
                                    <v-btn @click="userLogin" block dark color="blue">Entrar</v-btn>
                                </v-card-actions>
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
    async userLogin () {
      console.log(this.email, this.password)
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(function (user) {
          console.log(user)
          alert('Success')
        })
        .catch(function (err) {
          alert(err.message)
        })
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
