<template>
  <button
    @click="$store.dispatch('header/toggleMenu')"
    aria-label="toggle sidebar"
    :aria-expanded="header.headerToggled"
  >
    <svg viewBox="0 0 7 6" width="7" height="6">
      <polyline points="1,1 6,1" />
      <polyline points="4,3 6,3" />
      <polyline points="4,5 6,5" />
    </svg>
  </button>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    updateValue() {
      // this.$emit("input", !this.value);
    }
  },
  computed: mapState(["header"])
};
</script>

<style lang="scss" scoped>
button {
  color: col(fg);
  font-size: 2em;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 1rem;

  appearence: none;
  &[aria-expanded="true"] {
    svg {
      :nth-child(2),
      :nth-child(3) {
        opacity: 0;
        transform: scaleX(0);
      }
      > * {
        transform: none;
      }
    }
  }
  svg {
    width: 1em;
    height: 1em;

    fill: none;
    stroke: currentColor;
    * {
      opacity: 1;
      transition: transform 0.2s ease-in, opacity 0.1s ease-in-out;
      transform-origin: center right;
      stroke-linecap: round;
    }
  }
}
</style>
