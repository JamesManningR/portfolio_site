<template>
  <main class="home">
    <section>
      <h1>James Manning</h1>
      <p>I make websites</p>
      <ul class="home__socials">
        <li></li>
      </ul>
    </section>

    <section>
      <h2>Specialities:</h2>
      <project-skills-display :skills="['vue', 'node', 'wordpress']" />
    </section>

    <section>
      <h2>Projects</h2>
      <ul>
        <li v-for="(project, index) in featuredProjects" :key="index">
          <project-post />
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import ProjectSkillsDisplay from "@/components/project/ProjectSkillsDisplay";
import ProjectPost from "@/components/project/ProjectPost";

export default {
  name: "Home",
  components: [ProjectSkillsDisplay, ProjectPost],
  data() {
    return {
      projects: ""
    };
  }
};
</script>

<style lang="scss">
.home {
}
</style>
