<template>
  <main class="newProject">
    <project-edit-form
      v-model="project"
      @featuredSelect="this.thumbnailSrc = $event"
    >
      <button
        @click.prevent="createProject"
        class="btn btn--submit"
        slot="submit"
        type="submit"
      >
        Submit
      </button>
    </project-edit-form>

    <div class="newProject__preview">
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
  data() {
    return {
      project: {
        title: "title",
        body: "body",
        link: "",
        images: [],
        featuredImage: "",
        color: "",
        skills: []
      },
      thumbnailSrc: ""
    };
  },
  methods: {
    createProject() {
      this.$store.dispatch("project/createProject", this.project);
    }
  }
};
</script>

<style lang="scss">
.newProject {
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
