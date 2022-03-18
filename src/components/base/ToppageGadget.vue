<!-- ToppageGadget.vue -->
<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  sectionId: string,
  titleCssClass?: string,
  contentsCssClass?: string,
}

const props = withDefaults(defineProps<Props>(), {
  titleCssClass: "",
  contentsCssClass: "",
});
</script>

<template>
  <section :id="props.sectionId" class="gadget top">
    <h2 :class="props.titleCssClass"><slot name="title" /></h2>
    <div :class="props.contentsCssClass" class="wrapper">
      <slot name="contents" />
    </div>
  </section>
</template>

<style scoped lang="scss">
section.gadget.top {
  margin: 1rem;
  background-color: #fff;
  color: #226;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  text-align: left;
}

section.gadget.top .wrapper {
  padding: 0.5rem;
}

section.gadget.top h2 {
  margin: 0;
  padding: 0.25rem;
  background-color: #aaffee;
  font-size: 1.15em;
  font-weight: normal;
}
</style>
