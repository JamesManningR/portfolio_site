<template>
  <article class="post">
    <post-image-banner
      class="post__imageBanner"
      :images="post.images"
      @imageSelected="enlargedImage = $event"
    />
    <post-enlarged-image
      v-if="enlargedImage"
      :image="enlargedImage"
      @close="enlargedImage = false"
    />
    <div class="post__content">
      <h1 class="post__title">{{ blogPost.title }}</h1>
      <post-text class="post__body" :post="blogPost.body" />
    </div>
  </article>
</template>

<script>
import PostImageBanner from "@/components/post/PostImageBanner.vue";
import PostText from "@/components/post/PostText.vue";
import PostEnlargedImage from "@/components/post/PostEnlargedImage";

export default {
  components: {
    PostImageBanner,
    PostText,
    PostEnlargedImage
  },
  data() {
    return {
      enlargedImage: ""
    };
  },
  props: {
    blogPost: Object
  }
};
</script>

<style lang="scss">
.post {
  height: 100%;
  padding: 0;
  &__imageBanner {
    margin-bottom: 0.5em;
  }
  &__content {
    margin-left: 1.5em;
  }
}
</style>
