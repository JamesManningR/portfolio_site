<template> 
<section class="project">
  <ImageBanner :images="images"/>
  <h1 class="project__title">{{project.title}}</h1>
  <p class="project__body"></p>
</section>
</template>

<script>
import ImageBanner from "@/components/ProjectImageBanner.vue";

export default {
  components: {
    ImageBanner,
  },
  data() {
    return {
      images:[
        {
          src: 'https://unsplash.it/640/425',
          alt: 'A Placeholder Image'
        },
        {
          src: 'https://unsplash.it/640/428',
          alt: 'A Transport Placeholder Image'
        },
        {
          src: 'https://unsplash.it/640/435',
          alt: 'A Transport Placeholder Image'
        }
      ]
    }
  }
};
</script>

<style></style>
