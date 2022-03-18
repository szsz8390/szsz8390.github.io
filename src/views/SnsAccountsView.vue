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
  new ExternalLinkInfo("Twitter", "@suzu_sn_yuuki", " ", "https://twitter.com/suzu_sn_yuuki"),
  new ExternalLinkInfo("Twitter", "@kazune8390", " ", "https://twitter.com/kazune8390"),
  new ExternalLinkInfo("Youtube", "スズズズ", "", "https://www.youtube.com/channel/UCNgaeQSUJntoosZy8VdsTiA"),
  new ExternalLinkInfo("Youtube", "Kazune Sawatari", "", "https://www.youtube.com/channel/UCy-uSSetsztBFIyNJpM3prg"),
  new ExternalLinkInfo("SoundCloud", "kazune8390", "", "https://soundcloud.com/kazune8390"),
  new ExternalLinkInfo("TWsound", "", "", "https://twsound.net/user/63RqSqKHl7PUJnoVXJ5xDwCpBGm2"),
  new ExternalLinkInfo("Steam", "kazune8390", "", "https://steamcommunity.com/profiles/76561198960406872/"),
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