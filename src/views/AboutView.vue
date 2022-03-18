<script setup lang="ts">
</script>

<template>
  <section class="flex">
    <div>
      <img src="@/assets/icon.png" width="320" height="320">
    </div>
    <div>
      <dl>
        <dt>Name</dt>
        <dd><ruby>悠木<rp>(</rp><rt>ゆうき</rt><rp>)</rp></ruby> <ruby>鈴<rp>(</rp><rt>すず</rt><rp>)</rp></ruby></dd>
        <dd>YUKI Suzu</dd>
        <dt>a.k.a.</dt>
        <dd><ruby>沢渡<rp>(</rp><rt>さわたり</rt><rp>)</rp></ruby> <ruby>和音<rp>(</rp><rt>かずね</rt><rp>)</rp></ruby></dd>
        <dd>SAWATARI Kazune</dd>
      </dl>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
  text-align: left;
}
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 1rem;
}
</style>
