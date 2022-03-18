<script setup lang="ts">

class ExternalLinkInfo {
  readonly category: string;
  readonly name: string;
  readonly appendInfo: string;
  readonly url: string;
  constructor(category: string, name: string, appendInfo: string, url: string) {
    this.category = category;
    this.name = name;
    this.appendInfo = appendInfo;
    this.url = url;
  }
}

const links: ExternalLinkInfo[] = [
  new ExternalLinkInfo("Static Website", "cherish", " ", "http://www9.plala.or.jp/kazune/"),
  new ExternalLinkInfo("Blog", "風鈴堂(仮)", "Hatena Blog", "https://sz8390.hatenablog.com/"),
  new ExternalLinkInfo("個人 Wiki", "すずめも", "Seesaa wiki", "https://sz8390.memo.wiki/"),
  new ExternalLinkInfo("GitHub", "szsz8390", "GitHub", "https://github.com/szsz8390"),
];

</script>

<template>
  <div class="wrapper">
    <article v-for="(link, index) in links" :key="index">
      <header>
        <h3>{{ link.category }}</h3>
      </header>
      <section>
        <p>{{ link.name }}</p>
        <p class="append-info">{{ link.appendInfo }}</p>
        <p><a :href="link.url" target="_blank">{{ link.url }}</a></p>
      </section>
    </article>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 1rem;
  padding: 8px;
  article {
    padding: 16px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
    text-align: left;
    h3 {
      margin: 0;
    }
    p {
      margin: 0.5rem 0;
    }
    .append-info {
      font-size: .8rem;
    }
  }
}

</style>