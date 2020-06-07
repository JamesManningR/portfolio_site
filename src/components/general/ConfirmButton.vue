<template>
  <div class="confirmButton">
    <button
      class="confirmButton__action"
      :class="[{ 'confirmButton__action--hidden': check }, buttonClass]"
      @click="checkConfirm"
    >
      <slot>
        Action
      </slot>
    </button>
    <button
      class="confirmButton__tick"
      :class="{ 'confirmButton--active': check }"
      @click="$emit('confirm')"
    >
      <svg-path
        class="confirmButton__icon"
        name="tick"
        set="icoMoon"
      ></svg-path>
    </button>
    <button
      class="confirmButton__cross"
      :class="{ 'confirmButton--active': check }"
      @click="cancel"
    >
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
$transition-length: 0.1s;

.confirmButton {
  display: flex;
  position: relative;
  button {
    cursor: pointer;
    border: none;
    appearance: none;
  }
  &__action {
    border-radius: 0.5em;
    transform: scale(1);
    transition: transform $transition-length ease-out;
    &--hidden {
      transform: scale(0);
      pointer-events: none;
    }
  }
  &__cross,
  &__tick {
    position: absolute;
    transform: scale(0);
    width: 50%;
    height: 100%;

    color: col(fg);
    transition: transform $transition-length ease-in;
  }
  &__tick {
    transform-origin: right;
    left: 0;
    background-color: col(primary);
    border-radius: 0.5em 0 0 0.5em;
  }
  &__cross {
    transform-origin: left;
    right: 0;
    background-color: col(failure);
    border-radius: 0 0.5em 0.5em 0;
  }
  &--active {
    transform: scale(1);
  }
}
</style>
