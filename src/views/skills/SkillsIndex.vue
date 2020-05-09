<template>
  <main class="skillsIndex">
    <project-skill-picker />
    <h1 class="skillsIndex__title">Skills</h1>
    <h3 class="skillsIndex__instructions">
      Select Skills to see relevent Projects
    </h3>
  </main>
</template>

<script>
import projectSkillPicker from "@/components/ProjectSkillPicker.vue";

export default {
  // TODO: Populate projects
  // TODO: Filter projects by selected skills
  // TODO: FIlter skills to only show skills with example projects
  components: {
    projectSkillPicker
  }
};
</script>

<style></style>
