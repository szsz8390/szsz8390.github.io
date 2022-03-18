<!-- CommonHeader.vue -->
<script setup lang="ts">
import { views } from "@/router";
</script>

<template>
  <header id="commonHeader">
    <h1>szsz8390' s GitHub Page</h1>
    <nav>
      <router-link :to="views.HomeView.path">Home</router-link>
      <router-link :to="views.AboutView.path">{{ views.AboutView.title }}</router-link>
      <router-link :to="views.ExternalView.path">{{ views.ExternalView.title }}</router-link>
      <router-link :to="views.SnsAccountsView.path">{{ views.SnsAccountsView.title }}</router-link>
      
      <!--
      <a href="#">Home</a>
      <a href="#about">{{ views.AboutView.title }}</a>
      <a href="#external">{{ views.ExternalView.title }}</a>
      <a href="#sns">{{ views.SnsAccountsView.title }}</a>
      -->
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  background-color: #fff;
}

h1 {
  margin: 0;
}

nav {
  margin-left: 1rem;
}

a {
  margin-left: .5rem;
  padding: .5rem 1rem;
  border-radius: .5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  &:hover {
    background-color: #eee;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
