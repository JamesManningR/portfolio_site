<template>
  <main class="home">
    <div class="wrapper">
      <section class="home__bio bio">
        <h1 class="bio__title">{{ this.$content.home.title }}</h1>
        <p class="bio__subtitle">{{ this.$content.home.subtitle }}</p>
        <ul class="bio__socials">
          <li v-for="(profile, key) in this.$content.home.profiles" :key="key">
            <a :href="profile.link">
              <svg-path :name="profile.icon" :set="profile.iconSet" />
            </a>
          </li>
        </ul>
      </section>

      <section class="home__special specialities">
        <h2 class="home__sectionTitle specialities__title">Specialities</h2>
        <skills-display
          class="specialities__skills"
          :skills="this.$content.home.specialities"
        />
      </section>

      <section class="home__projects">
        <h2 class="home__sectionTitle">Featured Projects</h2>
        <projectList class="featuredProjects" :projects="featuredProjects" />
      </section>
    </div>
  </main>
</template>

<script>
import ProjectList from "@/components/project/ProjectList";
import SkillsDisplay from "@/components/general/SkillsDisplay";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    SkillsDisplay,
    ProjectList
  },
  computed: {
    ...mapState("project", ["projects"]),
    featuredProjects() {
      const filterProjects = this.projects.filter(
        project => project.featured === true
      );
      return filterProjects;
    }
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  padding-top: 2em;
  align-items: center;
  justify-content: center;
  .wrapper {
    display: flex;
    max-width: 35em;
    align-items: flex-start;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;

    @include bp(tablet) {
      max-width: 60em;
    }
  }
  &__sectionTitle {
    margin-bottom: 1em;
    font-size: 1.4em;
  }
  &__bio {
    margin-bottom: 2em;
  }
  &__special {
    margin-bottom: 1em;
  }

  &__projects {
    width: 100%;
    .featuredProjects {
      padding: 0 1em;
    }
  }
}

.bio {
  display: grid;
  max-width: max-content;
  grid-template-areas: "author author" "subtitle socials";
  &__title {
    display: inline-block;
    padding-bottom: 0.2em;
    margin-bottom: 0.3em;
    position: relative;
    z-index: 2;
    grid-area: author;
    font-size: 4em;
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
    display: block;
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
