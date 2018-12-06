<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn
          slot="action"
          fab
          :to="{ name: 'songs-create' }"
          class="cyan accent-2"
          light
          medium
          absolute
          right
          middle>
        <v-icon>add</v-icon>
        </v-btn>
        <div
          v-for="song in songs"
          :key="song.id">
          {{song.title}} |
          {{song.artist}} |
          {{song.genre}} |
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

</style>
