<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("test").path(route.path).first()
})
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" class="prose" />
  </div>
</template>