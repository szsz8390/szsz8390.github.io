<script setup lang="ts">
import { ref, Ref } from "vue";
const Animations = {
  quiet: "quiet",
  derricott: "derricott",
  pondesten: "pondesten",
} as const;
type IconAnimationType = typeof Animations[keyof typeof Animations];
const iconAnimationClass: Ref<IconAnimationType> = ref(Animations.quiet);

const getLinkClass = (animeType: string) => {
  if (iconAnimationClass.value === animeType) {
    return "active";
  }
  return "";
};
</script>

<template>
  <ul>
    <li>
      <a role="button" :class="getLinkClass(Animations.quiet)" @click="iconAnimationClass = Animations.quiet">Quiet</a>
    </li>
    <li>
      <a role="button" :class="getLinkClass(Animations.derricott)" @click="iconAnimationClass = Animations.derricott">Derricott</a>
    </li>
    <li>
      <a role="button" :class="getLinkClass(Animations.pondesten)" @click="iconAnimationClass = Animations.pondesten">Pondesten</a>
    </li>
  </ul>
  <p><img class="icon" :class="iconAnimationClass" src="@/assets/icon.png" width="320" height="320"></p>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;
  li {
    display: inline-block;
    & + li {
      margin-inline-start: 1rem;
    }
  }
}
a {
  display: inline-block;
  padding: .25em .5em;
  border-radius: 8px;
  border: 1px solid #e64a19;
  background-color: #fff;
  color: #e64a19;
  font-weight: bold;
  text-decoration: none;
}
a.active {
  background-color: #e64a19;
  color: #fff;
}
@keyframes derricott {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(.5);
  }
}
@keyframes pondesten {
  0% {
    transform: translateY(25%);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(25%);
  }
}
.icon {
  animation-fill-mode: backwards;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-direction: normal;
  &.derricott {
    animation-name: derricott;
  }
  &.pondesten {
    animation-name: pondesten;
  }
}
</style>