<template>
  <div class="projects">
    <h1>Projects</h1>
    <!-- <ProjectPost
      v-for="project in projects"
      :key="project.id"
      :projectTitle="project.title"
    /> -->
  </div>
</template>

<script>
// import ProjectPost from "@/components/ProjectShow.vue";
import { mapState } from 'vuex'

export default {
  components: {
    // ProjectPost
  },
  created(){
    this.$store.dispatch('project/fetchProjects')
  },
  computed:{
    ...mapState(['event', 'user'])
  }
};
</script>
