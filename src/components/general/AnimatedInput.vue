<template>
  <span class="animatedInput">
    <input
      :name="name"
      v-bind="$attrs"
      :value="value"
      v-on="{
        ...$listeners,
        input: event => $emit('input', event.target.value)
      }"
      class="animatedInput__input"
    />
    <label class="animatedInput__label" :for="$attrs.id">{{ label }}</label>
  </span>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: String,
    value: String,
    name: String
  }
};
</script>

<style lang="scss">
.animatedInput {
  position: relative;
  &__input {
    width: 100%;
    padding: 0.8em 0.5em 0.1em 0.5em;
    position: relative;
    color: col(dark, light);
    background-color: #fafafa;
    &:focus {
      border-bottom: 1px solid #000000;
      + .animatedInput__label {
        &::after {
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: 0;
          content: "";
          border-bottom: 2px solid col(secondary);
        }
      }
    }
  }
  &__label {
    position: absolute;
    top: 50%;
    left: 0.75em;
    font-size: 0.5em;
  }
}
</style>
