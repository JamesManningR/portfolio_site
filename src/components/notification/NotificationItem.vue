<template>
  <li :style="notificationStyles">
    <p>{{ notification.message }}</p>
    <button aria-label="dismiss notification">&#x274C;</button>
  </li>
</template>

<script>
export default {
  props: {
    notification: Object
  },
  computed: {
    notificationStyles() {
      return {
        borderColor: `col(${this.notification.type})`
      };
    }
  }
};
</script>

<style></style>
