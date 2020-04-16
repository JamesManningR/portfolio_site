<template>
  <div class="projects">
    <h1>Projects</h1>
    <ProjectPost v-for="project in projects" :key="project.id" :projectTitle="project.title" />
  </div>
</template>

<script>
import ProjectPost from '@/components/ProjectShow.vue';

export default {
  components: {
    ProjectPost
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'This is a post'
        },
        {
          id: 2,
          title: 'This Multiple Post'
        },
        {
          id: 3,
          title: 'Stop Banging outside my door'
        },
        {
          id: 4,
          title: 'Post about me'
        },
      ]
    }
  }
}
</script>