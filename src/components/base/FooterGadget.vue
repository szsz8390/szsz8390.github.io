<!-- FooterGadget.vue -->
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  sectionId: string,
}>();
</script>

<template>
  <section :id="props.sectionId" class="gadget footer">
    <h2><slot name="title" /></h2>
    <div class="wrapper">
      <slot name="contents" />
    </div>
  </section>
</template>

<style lang="scss">
section.gadget.footer {
  margin: 1rem;
  padding-left: .25rem;
  border-left: 1px solid #e90;
  text-align: left;
}

section.gadget.footer .wrapper {
  padding: 0.25rem 0.5rem;
}

section.gadget.footer h2 {
  margin: 0;
  padding: 0.25rem;
  font-size: 1.15em;
  font-weight: normal;
}

section.gadget.footer a {
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
