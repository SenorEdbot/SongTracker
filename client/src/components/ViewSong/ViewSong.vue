<template>
<v-layout>
  <v-flex xs6>
    <song-metadata :song="song" />
  </v-flex>
  <v-flex xs6 ml-2>
    <youtube :youtubeId="song.youtubeId" />
  </v-flex>
  <v-flex xs6 ml-2>
    <lyrics :lyrics="song.lyrics" />
  </v-flex>
  <v-flex xs6 ml-2>

  </v-flex>
</v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import Youtube from '@/components/ViewSong/Youtube'
import Lyrics from '@/components/ViewSong/Lyrics'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    SongMetadata,
    Youtube,
    Lyrics
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

</style>
