<template>
  <li :class="classList" role="alert">
    <h2 class="notification__action">{{ notification.action }}</h2>
    <p class="notification__message">{{ notification.message }}</p>
    <button
      class="notification__dismiss"
      aria-label="dismiss notification"
      @click="dismissNotification"
    >
      <svg-path class="notification__cross" set="icoMoon" name="cross" />
    </button>
  </li>
</template>

<script>
export default {
  props: {
    notification: Object
  },
  computed: {
    classList() {
      return ["notification", `notification--${this.notification.type}`];
    }
  },
  methods: {
    dismissNotification() {
      this.$store.dispatch(
        "notification/removeNotification",
        this.notification.id
      );
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/abstracts/_variables.scss";
@import "@/scss/abstracts/_functions.scss";

.notification {
  padding: 0.5em 0.75em 0.75em;
  position: relative;
  &__action {
    margin-bottom: 0.35em;
    font-size: 1.25em;
  }
  &__dismiss {
    display: inline-block;
    padding: 0.25em;
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    color: currentColor;
    line-height: 1.25em;
    appearance: none;
    background: none;
    border: none;
    &:hover {
      background-color: #ffffffda;
      cursor: pointer;
    }
  }
  &__cross {
    width: 1.25em;
    height: 1.25em;
  }
  &--success {
    color: col(success, dark);
    background-color: col(success, light);
    border-left: 4px solid col(success);
  }
  &--caution {
    color: col(caution, dark);
    background-color: col(caution, light);
    border-left: 4px solid col(caution);
  }
  &--failure {
    color: col(failure, dark);
    background-color: col(failure, light);
    border-left: 4px solid col(failure);
  }
}
</style>
