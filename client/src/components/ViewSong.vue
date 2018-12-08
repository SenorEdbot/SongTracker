<template>
<v-layout>
  <v-flex xs6>
    <panel title="Song Metadeta">
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
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImage" />
          <br />
          {{song.album}}
        </v-flex>
      </v-layout>
    </panel>
  </v-flex>
  <v-flex xs6 ml-2>
    <panel title="lyrics">
      <textarea
        class="lyricsText"
        readonly
        v-model="song.lyrics"
        ></textarea>
    </panel>
  </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>
.album-image {
  width: 75%;
  margin: 0 auto;
}
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
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
.lyricsText {
  width: 100%;
  height: 600px;
  border: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>
