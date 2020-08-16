<template>
  <header class="header">
    <h3 class="header__title">Curious<strong>Digital</strong></h3>
    <div class="header__sidebar">
      <nav class="header__nav">
        <ul class="header__navList">
          <li class="header__listItem">
            <router-link class="header__navLink" to="/" exact>
              <svg-path class="header__icon" set="icoMoon" name="home" />
              <span class="header__navText">Home</span></router-link
            >
          </li>
          <li class="header__listItem">
            <router-link class="header__navLink" :to="{ name: 'projects' }">
              <svg-path class="header__icon" set="icoMoon" name="gear" />
              <span class="header__navText">Projects</span></router-link
            >
          </li>
          <li class="header__listItem">
            <router-link class="header__navLink" :to="{ name: 'contact' }">
              <svg-path class="header__icon" set="icoMoon" name="phone" />
              <span class="header__navText">Contact</span></router-link
            >
          </li>
        </ul>
      </nav>
      <div class="header__auth">
        <app-account class="header__account" />
      </div>
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
  justify-content: space-between;
  font-weight: 900;
  &__title {
    strong {
      display: block;
    }
  }
  &__sidebar {
    padding: 1rem 1.2rem;
    justify-content: space-between;
    font-size: 2.5em;
    border: 2px solid col(fg, dark);
    border-radius: 1rem;
  }
  &__nav {
    padding: 0.5rem;
    flex-grow: 1;
    border: solid col(fg, dark);
    border-width: 4px 0;
  }
  &__navList {
    display: flex;
    flex-direction: column;
  }
  &__listItem {
    text-transform: uppercase;

    @include margin-y(1rem);
  }
  &__auth {
    display: flex;
  }
  &__account {
    padding: 0.5rem;
    color: col(fg);
  }
}
</style>
