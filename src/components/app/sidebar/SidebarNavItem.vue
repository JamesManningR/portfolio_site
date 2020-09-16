<template>
  <li class="sidebar__listItem">
    <router-link class="sidebar__navLink" :to="linkTo" exact>
      <svg-path class="sidebar__icon" :set="iconSet" :name="iconName" />
      <span class="sidebar__navText">{{ label }}</span>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    linkTo: Object,
    iconSet: String,
    iconName: String,
    label: String
  }
};
</script>

<style lang="scss">
.sidebar {
  .router-link-exact-active {
    svg,
    span {
      filter: drop-shadow($shadow);
    }
  }
  .router-link-exact-active::after {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: col(bg, light);
    border-radius: 0.5rem;
  }
  &__listItem {
    @include padding-x(0.5rem);
    position: relative;
  }
  &__navLink {
    display: flex;
  }
}
</style>
