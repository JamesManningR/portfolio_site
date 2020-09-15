<template>
  <header class="header">
    <div class="header__topbar section">
      <router-link to="/">
        <h3 class="header__title">Curious<strong>Digital</strong></h3>
      </router-link>
      <header-toggle class="header__toggle" />
    </div>
  </header>
</template>

<script>
import headerToggle from "@/components/app/header/HeaderToggle.vue";

export default {
  components: {
    headerToggle
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  height: max-content;
  position: relative;
  align-self: center;
  justify-content: space-between;
  font-weight: 900;
  &__topbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  &__title {
    strong {
      display: block;
    }
  }
  &__toggle {
    @include bp(desktop) {
      display: none;
    }
  }
}
</style>
