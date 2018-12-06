<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{ name: 'root' }">
        Song Tracker
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <!-- TODO: Impliment browse button -->
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark
        :to="{ name: 'register' }">
        Sign Up
      </v-btn>
      <v-btn flat dark
        :to="{ name: 'login' }">
        Login
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: yellow;
}
</style>
