<!-- SubHeader.vue -->
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  text: string
}>();
</script>

<template>
  <div>
    <h2>{{ props.text }}</h2>
  </div>
</template>

<style scoped lang="scss">
div {
  padding: 8px;
  background-color: #ded;
}
h2 {
  margin: 0;
  padding: .25rem;
  text-align: left;
}
</style>