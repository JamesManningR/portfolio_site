<template>
  <main class="skillsIndex">
    <h1 class="skillsIndex__title">Skills</h1>
    <h3 class="skillsIndex__instructions">
      Select Skills to see relevent Projects
    </h3>
  </main>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("skills/fetchSkills");
  }
};
</script>

<style></style>
