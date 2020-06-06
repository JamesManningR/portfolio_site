<template>
  <header class="header">
    <div class="header__content">
      <h3 class="header__ident">Curious <strong>Digital</strong></h3>
      <p class="header__info">The online portfolio of James Manning</p>
      <nav class="header__nav">
        <ul class="header__navList">
          <li class="header__listItem">
            <router-link class="header__navLink" to="/" exact>
              <svg-path class="header__icon" set="iconMoon" name="home" />
              <span class="header__navText">Home</span></router-link
            >
          </li>
          <li class="header__listItem">
            <router-link class="header__navLink" :to="{ name: 'projects' }">
              <svg-path class="header__icon" set="iconMoon" name="gear" />
              <span class="header__navText">Projects</span></router-link
            >
          </li>
          <li class="header__listItem">
            <router-link class="header__navLink" :to="{ name: 'contact' }">
              <svg-path class="header__icon" set="iconMoon" name="envelope" />
              <span class="header__navText">Contact</span></router-link
            >
          </li>
        </ul>
      </nav>
      <app-account />
    </div>
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
@import "@/scss/abstracts/_mixins.scss";

.header {
  max-height: 100%;
  &__content {
    display: flex;
    padding: 0.1em 0.5em;
    justify-content: space-between;

    @include bp(tablet) {
      flex-direction: column;
    }
  }
  &__ident {
    width: 5em;
    margin-right: 1em;
  }
  &__info {
    display: none;
  }
  &__nav {
    width: 100%;
    max-width: 15em;

    @include bp(32rem) {
      max-width: 23em;
    }
  }
  &__navList {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: 2em;

    @include bp(tablet) {
      align-items: flex-start;
      flex-direction: column;
    }
  }
  &__navLink {
    display: flex;
    padding: 0.25em;
    position: relative;
    z-index: 10;
    align-items: center;
    justify-content: center;
    line-height: 0;
    border-radius: 1em;

    @include bp(tablet) {
      padding: 0.5em;
      align-items: center;
    }
    &.router-link-active {
      background-color: col(primary);

      @include bp(tablet) {
        background: none;
        &:before {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;
          content: "";
          background-color: col(primary);
        }
      }
    }
  }
  &__navText {
    display: none;
    margin-left: 0.5em;
    font-size: 0.55em;

    @include bp(32rem) {
      display: inline;
    }
  }
}
</style>
