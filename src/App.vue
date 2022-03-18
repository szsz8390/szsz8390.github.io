<script setup lang="ts">
import { useRouter } from "vue-router";

import CommonHeader from "@/components/globals/CommonHeader.vue";
import CommonFooter from "@/components/globals/CommonFooter.vue";
import SubHeader from "./components/parts/SubHeader.vue";

import "normalize.css";
import "@/assets/sass/common.scss";

const _router = useRouter();

</script>

<template>
  <common-header />
  <sub-header
    v-if="_router.currentRoute.value.meta.title"
    :text="(_router.currentRoute.value.meta.title as string)"
  />
  <main>
    <router-view />
  </main>
  <common-footer />
</template>

<style lang="scss">
</style>
