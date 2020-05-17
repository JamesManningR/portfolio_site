<template>
  <main class="editProject">
    <project-edit-form v-model="project">
      <button
        @click.prevent="updateProject"
        class="btn btn--submit"
        slot="submit"
        type="submit"
      >
        Submit
      </button>
    </project-edit-form>

    <div class="editProject__preview">
      <blog-text :project="project" />
    </div>
  </main>
</template>

<script>
import ProjectEditForm from "@/components/ProjectEditForm.vue";
import BlogText from "@/components/BlogText.vue";

export default {
  components: {
    ProjectEditForm,
    BlogText
  },
  created() {
    this.project = this.$store.state.project.project;
  },
  data() {
    return {
      project: {
        title: "",
        body: "",
        link: "",
        images: [],
        featuredImage: "",
        color: "",
        skills: []
      }
    };
  },
  methods: {
    updateProject() {
      this.$store.dispatch("project/updateProject", this.project);
    }
  }
};
</script>

<style lang="scss">
.editProject {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  &__label {
    &--body {
      display: flex;
      flex-grow: 1;
    }
  }
}
</style>
