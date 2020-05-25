<template>
  <header class="header">
    <svg
      class="header__strike"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon points="0,60 0,0 100,0" />
    </svg>
    <div class="header__ident">
      <svg
        class="header__logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 189 234"
      >
        <path
          d="M35.1,0H153.9A35.1,35.1,0,0,1,189,35.1V54a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V35.1A35.1,35.1,0,0,1,35.1,0Z"
        />
        <path
          d="M89.1,90H189a0,0,0,0,1,0,0v18.9A35.1,35.1,0,0,1,153.9,144H54a0,0,0,0,1,0,0V125.1A35.1,35.1,0,0,1,89.1,90Z"
        />
        <path
          d="M75.95,180H108a0,0,0,0,1,0,0v32.05A21.95,21.95,0,0,1,86.05,234H54a0,0,0,0,1,0,0V201.95A21.95,21.95,0,0,1,75.95,180Z"
        />
      </svg>
      <h3 class="header__identText">Curious <strong>Digital</strong></h3>
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
  grid-template-rows: 1fr 1fr 4fr;
  color: col(success, light);
  background-color: col(success, dark);
  border-left: 1.2rem solid col(success);
  &__strike {
    position: absolute;

    fill: col(success);
  }
  &__ident {
    display: flex;
    margin-bottom: 1em;
    position: relative;
    z-index: 20;
    align-items: center;
    font-size: 2.6em;
    font-weight: 300;
    strong {
      font-weight: 600;
    }
  }
  &__identText {
    margin-left: 0.5em;
    font-weight: inherit;
  }
  &__logo {
    max-width: 2.4em;
    max-height: 2.4em;

    fill: col(success, dark);
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
    &:hover {
      .header__navLink::before {
        transform: scaleX(0.6);
      }
    }
    .router-link-exact-active {
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
      width: 127%;
      height: 109%;
      position: absolute;
      top: 0;
      left: -3rem;
      z-index: -1;
      content: "";
      background-color: col(success);
      border-radius: 0 1rem 1rem 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.15s ease-in-out;
    }
  }
}
</style>
