<template>
  <li class="notification">
    <h2 class="notification__action">{{ notification.action }}</h2>
    <p class="notification__message">{{ notification.message }}</p>
    <button class="notification__dismiss" aria-label="dismiss notification">
      &#x274C;
    </button>
  </li>
</template>

<script>
export default {
  props: {
    notification: Object
  }
};
</script>

<style lang="scss"></style>
