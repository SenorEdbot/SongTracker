<template>
  <panel title="lyrics">
    <textarea
      class="lyricsText"
      readonly
      v-model="lyrics"
      ></textarea>
  </panel>
</template>

<script>
export default {
  props: [
    'lyrics'
  ]

}
</script>

<style scoped>

.lyricsText {
  width: 95%;
  height: 300px;
  border: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>
