<script setup lang="ts">
const { data: posts } = await useAsyncData(() => queryCollection("test").all())
</script>

<template>
  <div>
    <NuxtLink v-for="post in posts" :to="post.path" style="display: block">{{ post.title }}</NuxtLink>
  </div>
</template>
