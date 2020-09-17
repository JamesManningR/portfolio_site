<template>
  <div class="imageBanner">
    <img
      class="imageBanner__image"
      v-for="(image, index) in images"
      @click="enlargeImage(image)"
      :key="index"
      :src="image.src"
      :alt="image.altText"
    />
  </div>
</template>

<script>
export default {
  props: {
    images: Array
  },
  methods: {
    enlargeImage(image) {
      this.$emit("imageSelected", image);
    }
  }
};
</script>

<style lang="scss">
.imageBanner {
  display: flex;
  overflow-x: scroll;
  flex-direction: row;
  &__image {
    display: inline-block;
    height: 20em;
    max-width: 100%;
    cursor: pointer;
  }
}
</style>
