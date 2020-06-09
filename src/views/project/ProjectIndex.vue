<template>
  <main class="projectsPage">
    <h1 class="projectsPage__title">Projects</h1>
    <h3 class="projectsPage__instructions">
      Select Skills to see relevant Projects
    </h3>
    <project-skill-picker
      class="projectsPage__skillPicker"
      :subset="usedSkills"
      v-model="selectedSkills"
    />
    <icon-button-link
      iconSet="icoMoon"
      icon="add"
      routeName="project-new"
      variation="success"
    >
      New Post
    </icon-button-link>
    <projectList class="projectsPage__list" :projects="filteredProjects" />
  </main>
</template>

<script>
import projectSkillPicker from "@/components/project/backend/ProjectSkillPicker";
import projectList from "@/components/project/ProjectList";
import IconButtonLink from "@/components/general/IconButtonLink";

import { mapState } from "vuex";

export default {
  components: {
    projectSkillPicker,
    projectList,
    IconButtonLink
  },
  data() {
    return {
      selectedSkills: []
    };
  },
  computed: {
    isAuthed() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    filteredProjects() {
      const selectedSkills = this.selectedSkills;
      const projects = this.projects;
      const filtered = projects.filter(project => {
        return selectedSkills.every(v => project.skills.includes(v));
      });
      return filtered;
    },
    usedSkills() {
      const skills = this.projects
        .map(project => {
          return project.skills;
        })
        .flat()
        .reduce((unique, item) => {
          return unique.includes(item) ? unique : [...unique, item];
        }, []);
      return skills;
    },
    ...mapState("project", ["projects"])
  },
  created() {
    // If the the are no projects loaded
    this.$store.dispatch("project/fetchProjects");
  }
};
</script>

<style lang="scss">
@import "@/scss/abstracts/_variables.scss";
@import "@/scss/abstracts/_functions.scss";

.projectsPage {
  display: flex;
  align-content: stretch;
  flex-direction: column;
  &__title {
    margin-bottom: 0.6em;
  }
  &__instructions {
    margin-bottom: 0.4em;
    font-weight: normal;
  }
  &__skillPicker {
    margin-bottom: 1em;
  }
}
</style>
