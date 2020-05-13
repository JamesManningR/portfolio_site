<template>
  <header class="header">
    <div class="header__ident">
      <h3 class="header__itentText">Curious <strong>Digital</strong></h3>
    </div>
    <p class="header__info">The online portfolio of James Manning</p>
    <nav class="header__nav">
      <ul class="header__navList">
        <li class="header__listItem">
          <router-link class="header__navLink" to="/">Home</router-link>
        </li>
        <li class="header__listItem">
          <router-link class="header__navLink" :to="{ name: 'projects' }"
            >Projects</router-link
          >
        </li>
        <li class="header__listItem">
          <router-link class="header__navLink" :to="{ name: 'skills' }"
            >Skills</router-link
          >
        </li>
        <li class="header__listItem">
          <router-link class="header__navLink" :to="{ name: 'blog' }"
            >Blog</router-link
          >
        </li>
        <li class="header__listItem">
          <router-link class="header__navLink" :to="{ name: 'contact' }"
            >Contact</router-link
          >
        </li>
      </ul>
    </nav>
    <app-account />
  </header>
</template>

<script>
import appAccount from "@/components/AppAccount.vue";

export default {
  components: {
    appAccount
  }
};
</script>

<style lang="scss">
.header {
  display: grid;
  height: 100vh;
  padding: 4rem;
  grid-template-rows: 1fr 1fr 4fr;
  &__ident {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    font-size: 2.2em;
    font-weight: 200;
  }
  &__logo {
    max-width: 7.5rem;
    max-height: 7.5rem;
    margin-right: 1rem;
  }
  &__info {
    font-size: 1.4em;
  }
  &__navList {
    font-size: 1.4em;
    list-style: none;
  }
  &__listItem > .router-link-exact-active {
    color: #afafaf;
    &::before {
      transform: scaleX(1);
    }
  }
  &__navLink {
    display: block;
    padding: 1rem 0;
    position: relative;
    color: currentColor;
    text-decoration: none;
    &::before {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      content: "";
      background: #000000;
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 0.1s ease-in;
    }
    &:hover {
      color: #fafafa;
      &::before {
        transform: scaleX(1);
      }
    }
  }
}
</style>
