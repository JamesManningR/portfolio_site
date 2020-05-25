<template>
  <header class="header">
    <h3 class="header__ident">Curious <strong>Digital</strong></h3>
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
        <!-- <li class="header__listItem">
          <router-link class="header__navLink" :to="{ name: 'blog' }"
            >Blog</router-link
          >
        </li> -->
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
import appAccount from "@/components/app/AppAccount.vue";

export default {
  components: {
    appAccount
  }
};
</script>

<style lang="scss">
@import "@/scss/abstracts/_variables.scss";
@import "@/scss/abstracts/_functions.scss";

.header {
  display: grid;
  height: 100vh;
  padding: 7rem 3rem;
  position: relative;
  z-index: 100;
  grid-template-rows: 1fr 1fr 4fr;
  color: col(dark, light);
  background-color: col(light);
  border-left: 1.2rem;
  border-color: col(secondary);
  border-style: solid;
  &__ident {
    display: inline;
    margin-bottom: 1em;
    position: relative;
    z-index: 20;
    align-items: center;
    font-size: 3.5em;
    font-weight: 300;
    strong {
      font-weight: 600;
    }
  }
  &__logo {
    max-width: 2.4em;
    max-height: 2.4em;

    fill: col(dark, light);
  }
  &__info {
    margin-bottom: 1.5em;
    position: relative;
    z-index: 20;
    font-size: 1.4em;
  }
  &__navList {
    font-size: 1.4em;
    list-style: none;
  }
  &__listItem {
    position: relative;
    z-index: 1;
    @for $i from 1 through 6 {
      &:nth-of-type(#{$i}) {
        &:hover {
          .header__navLink {
            color: col(light);
            &::before {
              transform: scaleX(1 - (0.1 * $i));
            }
          }
        }
      }
    }
    .router-link-exact-active {
      color: col(light);
      &::before {
        transform: scaleX(1) !important;
      }
    }
  }
  &__navLink {
    display: block;
    padding: 1.25rem 0;
    margin: 0.4rem 0;
    position: relative;
    color: currentColor;
    text-decoration: none;
    &::before {
      width: calc(100% + 7rem);
      height: 109%;
      position: absolute;
      top: 0;
      left: -3rem;
      z-index: -1;
      content: "";
      background-color: col(primary);
      border-radius: 0 1rem 1rem 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.15s ease-in-out;
    }
  }
}
</style>
