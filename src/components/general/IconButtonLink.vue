<template>
  <router-link :to="{ name: routeName }" :class="classList">
    <svg-path class="iconButton__icon" :set="iconSet" :name="icon" />
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    routeName: String,
    icon: String,
    iconSet: String,
    variation: { type: String, default: "" }
  },
  computed: {
    classList() {
      return this.variation
        ? ["iconButton", `iconButton--${this.variation}`]
        : "iconButton";
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/abstracts/_variables.scss";
@import "@/scss/abstracts/_functions.scss";
@import "@/scss/abstracts/_mixins.scss";

.iconButton {
  display: flex;
  width: max-content;
  padding: 0.5em 0.75em;
  margin-bottom: 1em;
  align-content: center;
  color: col(primary, light);
  background-color: col(primary);
  border-radius: 0.5em;
  &:hover {
  }
  &__icon {
    width: 1.2em;
    padding-right: 0.5em;
    margin-right: 0.5em;
    border-right: 1px solid col(primary, light);
  }
  &--success {
    color: col(success, light);
    background-color: col(success);
    &:hover {
    }
    &__icon {
      border-right: 1px solid col(success, light);
    }
  }
}
</style>
