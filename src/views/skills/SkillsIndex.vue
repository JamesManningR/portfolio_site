<template>
  <main class="skillsIndex">
    <project-skill-picker :subset="usedSkills" v-model="selectedSkills" />
    <h1 class="skillsIndex__title">Skills</h1>
    <h3 class="skillsIndex__instructions">
      Select Skills to see relevent Projects
    </h3>

    <projectList :projects="filteredProjects" />
  </main>
</template>

<script>
import projectSkillPicker from "@/components/project/ProjectSkillPicker.vue";
import projectList from "@/components/project/ProjectList.vue";
import { mapState } from "vuex";

export default {
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
        return selectedSkills.every(v => project.skills.includes(v));
      });
      return filtered;
    },
    usedSkills() {
      const skills = this.projects.map(project => {
        return project.skills
      })
      .flat()
      .reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item]
      }, [])
      return skills
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
