<template>
  <div class="home">
    <ProjectPost projectTitle="Happy" />
    <ProjectPost projectTitle="Happy" />
    <ProjectPost projectTitle="Happy" />
  </div>
</template>

<script>
import ProjectPost from '@/components/ProjectShow.vue';

export default {
  name: "Home",
  components: {
    ProjectPost
  },
  data() {
    return {
      projects: [
        {
          title: 'This is a post'
        },
        {
          title: 'This Multiple Post'
        },
        {
          title: 'Stop Banging outside my door'
        },
        {
          title: 'Post about me'
        },
      ]
    }
  }
};
</script>

<style lang="scss">
  .siteIdent {
  	&__logo {
  		fill: #555555;
  	}
  }

</style>
