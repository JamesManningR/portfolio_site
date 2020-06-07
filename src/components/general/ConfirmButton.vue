<template>
  <div class="confirmButton">
    <button
      class="confirmButton__action"
      :class="[{ 'confirmButton__action--hidden': check}, buttonClass]"
      @click="checkConfirm"
    >
      <slot>
        Action
      </slot>
    </button>
    <button
      class="confirmButton__tick"
      v-if="check"
      @click="$emit('confirm')"
    >
      <svg-path
        class="confirmButton__icon"
        name="tick"
        set="icoMoon"
      ></svg-path>
    </button>
    <button class="confirmButton__cross" v-if="check" @click="cancel">
      <svg-path
        class="confirmButton__icon"
        name="cross"
        set="icoMoon"
      ></svg-path>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    buttonClass: String
  },
  methods: {
    checkConfirm() {
      this.check = true;
    },
    cancel() {
      this.check = false;
    }
  },
  data() {
    return {
      check: false
    };
  }
};
</script>

<style lang="scss">
.confirmButton {
  display: flex;
  position: relative;
  button {
    border: none;
    appearance: none;
  }
  &__action {
    border-radius: 0.5em;
    &--hidden {
      opacity: 0;
      pointer-events: none;
    }
  }
  &__cross,
  &__tick {
    position: absolute;
    width: 50%;
    height: 100%;

    color: col(fg);
  }
  &__tick {
    left: 0;
    background-color: col(primary);
    border-radius: 0.5em 0 0 0.5em;
  }
  &__cross {
    right: 0;
    background-color: col(failure);
    border-radius: 0 0.5em 0.5em 0;
  }
  &__icon {
  }
}
</style>
