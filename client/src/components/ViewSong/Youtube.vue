<template>
  <panel title="YouTube Video">
    <youtube
    :video-id="youtubeId"
    :player-width="700"
    :player-height="320">
    </youtube>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>

</style>
