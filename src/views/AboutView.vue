<script setup lang="ts">
</script>

<template>
  <section>
    <header>
      <h3>Profile</h3>
    </header>
    <div class="flex contents">
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
          <dt>Birthplace</dt>
          <dd>北海道</dd>
          <dd>Hokkaido, Japan</dd>
          <dt>Job</dt>
          <dd>Programmer</dd>
          <dt>Like</dt>
          <dd>C#, JavaScript, Java</dd>
          <dd>Spring Framework, SCSS</dd>
          <dd>Visual Studio Code</dd>
        </dl>
      </div>
    </div>
  </section>
  <section>
    <header>
      <h3>Main PC</h3>
    </header>
    <div class="contents">
      <dl>
        <dt>CPU</dt>
        <dd>Intel Core i7-12700KF</dd>
        <dt>CPU Cooler</dt>
        <dd>DEEPCOOL GAMER STORM ASSASSIN III (DP-GS-MCH7-ASN-3)</dd>
        <dt>RAM</dt>
        <dd>Corsair CMK32GX4M2E3200C16 VENGEANCE LPX</dd>
        <dt>SSD(C:)</dt>
        <dd>CFD CSSD-M2M1TPG4VNZ (1TB M.2 NVMe)</dd>
        <dt>SSD(D:)</dt>
        <dd>CFD CSSD-M2M1TPG4VNZ (1TB M.2 NVMe)</dd>
        <dt>SSD(I:)</dt>
        <dd>SanDisk SDSSDA-2T00-J26 (2TB SATA3)</dd>
        <dt>HDD(J:)</dt>
        <dd>WESTERN DIGITAL WD60EZAZ (6TB SATA3 5,400rpm)</dd>
        <dt>Motherboard</dt>
        <dd>MAG Z690 TOMAHAWK WIFI DDR4</dd>
        <dt>GPU</dt>
        <dd>MSI GTX 1070 GAMING X 8G</dd>
        <dt>Optical Drive</dt>
        <dd>Pioneer BDR-S09J-BK</dd>
        <dt>Card Reader</dt>
        <dd>EZDIY-FAB 3.5"インチベイPCフロントパネル内蔵型カードリーダー</dd>
        <dt>Case</dt>
        <dd>Corsair Vengeance Series C70 CC-9011018-WW [Military Green]</dd>
        <dt>PSU</dt>
        <dd>Corsair RM850x 2021 (CP-9020200-JP)</dd>
        <dt>Display</dt>
        <dd>BenQ XL2730Z (2,560x1,440px 60Hz)</dd>
        <dt>Keyboard</dt>
        <dd>Microsoft Sidewinder X4</dd>
        <dt>Mouse</dt>
        <dd>Logicool G604</dd>
      </dl>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin: 16px;
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
  header {
    flex-basis: 100%;
  }
}
header {
  background-color: #FEE1B3;
  padding: 16px;
}
h3 {
  margin: 0;
}
.contents {
  margin: 16px;
}
</style>
