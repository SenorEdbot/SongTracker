<template>
  <div>

  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  async mounted () {
    const songId = this.$store.state.route.params.songId
    const song = await SongsService.show(songId)
  }
}
</script>

<style scoped>

</style>
