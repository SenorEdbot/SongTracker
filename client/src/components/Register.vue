<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form
          name="song-tracker-form"
          autocomplete="off">
          <v-text-field
            type="email"
            label="Email"
            v-model="email" />
          <br />
          <v-text-field
            type="password"
            label="Password"
            v-model="password"
            autocomplete="new-password" />
        </form>
        <br />
        <div class="danger-alert" v-html="error" />
        <v-btn
          class="cyan"
          dark
          @click="register">Register</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      this.error = ''
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
