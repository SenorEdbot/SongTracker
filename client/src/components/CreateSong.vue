<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title" />
        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist" />
        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre" />
        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album" />
        <v-text-field
          label="Album Image Link"
          required
          :rules="[required]"
          v-model="song.albumImage" />
        <v-text-field
          label="Youtube Id"
          required
          :rules="[required]"
          v-model="song.youtubeId" />
      </panel>
    </v-flex>
    <v-flex xs8 pl-2>
      <panel title="Song Details">
        <v-text-field
            label="Lyrics"
            required
            :rules="[required]"
            v-model="song.lyrics" />
      </panel>
      <div class="danger-alert" v-if="error">
        {{ error }}
      </div>
      <v-btn
          class="cyan"
          dark
          @click="create">Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.danger-alert {
  color: red;
}
</style>
