<script setup lang="ts">
import { fetchTry } from '@/services/musicbrainzApi'
import { onMounted } from 'vue';

onMounted(async () => {
  try {
    const result = await fetchTry()
    console.log('RESULTADO DE LA API:', result)
    console.log('ARTISTS:', result.artists)
  } catch (error) {
    console.error('ERROR:', error)
  }
})
</script>

<template></template>

<style lang="css" scoped>

</style>