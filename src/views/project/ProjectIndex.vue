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
    <router-link
      class="projectsPage__new"
      v-if="isAuthed"
      :to="{ name: 'project-new' }"
    >
      <svg-path class="projectsPage__newIcon" set="iconMoon" name="add" />
      New post
    </router-link>
    <projectList class="projectsPage__list" :projects="filteredProjects" />
  </main>
</template>

<script>
import projectSkillPicker from "@/components/project/ProjectSkillPicker.vue";
import projectList from "@/components/project/ProjectList.vue";
import svgPath from "@/components/general/SVGPath";

import { mapState } from "vuex";

export default {
  components: {
    projectSkillPicker,
    projectList,
    svgPath
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
    font-weight: normal;
  }
  &__skillPicker {
    margin-bottom: 1em;
  }
  &__new {
    display: flex;
    width: max-content;
    padding: 0.5em 0.75em;
    margin-bottom: 1em;
    align-content: center;
    color: col(success, light);
    background-color: col(success);
    border-radius: 0.5em;
    &:hover {
      color: lighten(col(success, light), 5%);
      background-color: darken(col(success), 5%);
    }
    &Icon {
      width: 1.2em;
      padding-right: 0.5em;
      margin-right: 0.5em;
      border-right: 1px solid col(success, light);
    }
  }
}
</style>
