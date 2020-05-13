<template>
  <main class="skillsIndex">
    <project-skill-picker @skillsChanged="selectedSkills = $event" />
    <h1 class="skillsIndex__title">Skills</h1>
    <h3 class="skillsIndex__instructions">
      Select Skills to see relevent Projects
    </h3>

    <projectList :projects="filteredProjects" />
  </main>
</template>

<script>
import projectSkillPicker from "@/components/ProjectSkillPicker.vue";
import projectList from "@/components/ProjectList.vue";
import { mapState } from "vuex";

export default {
  created() {
    if (!this.$store.projects) {
      this.$store.dispatch("project/fetchProjects");
    }
  },
  data() {
    return {
      selectedSkills: []
    };
  },
  components: {
    projectSkillPicker,
    projectList
  },
  computed: {
    ...mapState("project", ["projects"]),
    filteredProjects() {
      const selectedSkills = this.selectedSkills;
      const projects = this.projects;
      const filtered = projects.filter(project => {
        console.log(project);
        return selectedSkills.every(v => project.skills.includes(v));
      });
      console.log(filtered);
      return filtered;
    }
  }
};
</script>

<style>
.skillsIndex {
  display: flex;
  flex-direction: column;
}
</style>
