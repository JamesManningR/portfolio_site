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

<style></style>
