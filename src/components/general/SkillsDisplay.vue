<template>
  <section class="skillsDisplay">
    <h2 v-if="title">{{ title }}</h2>
    <ul class="skillsDisplay__list">
      <li class="skillsDisplay__item" v-for="skill in skills" :key="skill">
        <svg-path
          class="skillsDisplay__icon"
          set="skills"
          :name="skill"
          :label="skill"
        />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    skills: Array,
    title: String
  }
};
</script>

<style lang="scss">
.skillsDisplay {
  &__list {
    display: flex;
    margin: 0.5em 0;
    flex-wrap: wrap;
    list-style: none;
  }
  &__item {
    margin: 0 0.5em;
  }
}
</style>
