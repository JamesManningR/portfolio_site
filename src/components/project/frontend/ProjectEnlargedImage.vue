<template>
  <div class="enlargeImage" @click="$emit('close')">
    <!-- TODO: Add button image navigation -->
    <img class="enlargeImage__img" :src="image.src" :alt="image.altText" />
  </div>
</template>

<script>
export default {
  props: {
    image: Object
  }
};
</script>

<style lang="scss">
.enlargeImage {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 50;
  top: 0;
  align-items: center;
  justify-content: center;
  background-color: #000d;
  cursor: pointer;
  &__img {
    max-width: 85%;
    max-height: 85%;
  }
}
</style>
