<template>
  <main class="home">
    <section class="home__bio bio">
      <h1 class="bio__author">{{ this.$content.home.author }}</h1>
      <p class="bio__subtitle">I build experiences</p>
      <ul class="bio__socials">
        <li v-for="(profile, key) in this.$content.home.profiles" :key="key">
          <a :href="profile.link">
            <svg-path :name="profile.icon" :set="profile.iconSet" />
          </a>
        </li>
      </ul>
    </section>

    <section class="home__special specialities">
      <h2 class="home__sectionTitle specialities__title">Specialities:</h2>
      <skills-display
        class="specialities__skills"
        :skills="this.$content.home.specialities"
      />
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
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  &__bio {
    margin-bottom: 2em;
  }
  &__special {
    margin-bottom: 1em;
  }
}

.bio {
  display: grid;
  max-width: max-content;
  grid-template-areas: "author author" "subtitle socials";
  &__author {
    display: inline-block;
    padding-bottom: 0.2em;
    margin-bottom: 0.3em;
    position: relative;
    z-index: 2;
    grid-area: author;
    &:before {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      content: "";
      background-color: col(primary);
      transform-origin: left;
      animation: grow-in 0.5s ease-in-out;
    }
  }
  &__subtitle {
    grid-area: subtitle;
    font-size: 1.3em;
  }
  &__socials {
    margin-right: 0.2em;
    grid-area: socials;
    color: col(bg, light);
    font-size: 1.6em;
    text-align: right;
  }
}

.specialities {
  &__skills {
    font-size: 2em;
  }
}

@keyframes grow-in {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>
