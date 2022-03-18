<script setup lang="ts">
import FooterGadget from "@/components/base/FooterGadget.vue";
</script>

<template>
  <footer>
    <div v-if="false" class="flex-wrapper">
      <FooterGadget section-id="about">
        <template #title>About</template>
        <template #contents>
          <ul>
            <li>
              <router-link to="/about">About me</router-link>
            </li>
          </ul>
        </template>
      </FooterGadget>
      <FooterGadget section-id="link">
        <template #title>Links</template>
        <template #contents>
          <ul>
            <li><a href="https://twitter.com/suzu_sn_yuuki" target="_blank">Twitter</a></li>
          </ul>
        </template>
      </FooterGadget>
    </div>
    <p class="copy">&copy; 2022 szsz8390</p>
  </footer>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

p {
  margin: 0 auto;
  padding: 0.5rem 0;
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  line-height: 1.5rem;
}

.copy {
  font-size: .8rem;
}
</style>
