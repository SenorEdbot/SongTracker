<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>
        <v-btn
          class="cyan"
          :to="{ name: 'songs-edit', params () { return { songId: song.id }}}"
          dark>Edit</v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-image" :src="song.albumImage" />
        <br />
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
.album-image {
  width: 75%;
  margin: 0 auto;
}

.song-title {
  font-size: 30px;
}

.song-artist {
font-size: 24px;
}

.song-genre {
  font-size: 18px;
}
</style>
