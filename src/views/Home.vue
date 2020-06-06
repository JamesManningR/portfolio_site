<template>
  <main class="home">
    <section class="home__jumbo">
      <h1 class="home__author">{{ this.$content.home.author }}</h1>
      <p class="homme__subtitle">I build experiences</p>
      <ul class="home__socials">
        <li v-for="(profile, key) in this.$content.home.profiles" :key="key">
          <a :href="profile.link">
            <svg-path :name="profile.icon" :set="profile.iconSet" />
          </a>
        </li>
      </ul>
    </section>

    <section class="home__specialities">
      <h2 class="home__sectionTitle">Specialities:</h2>
      <skills-display :skills="this.$content.home.specialities" />
    </section>

    <section class="home__projects">
      <h2 class="home__sectionTitle">Projects</h2>
      <ul>
        <!-- <li v-for="(project, index) in featuredProjects" :key="index">
          <project-post />
        </li> -->
      </ul>
    </section>
  </main>
</template>

<script>
import SkillsDisplay from "@/components/general/SkillsDisplay";
// import ProjectPost from "@/components/project/ProjectPost";

export default {
  name: "Home",
  components: {
    SkillsDisplay
    // ProjectPost
  },
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
