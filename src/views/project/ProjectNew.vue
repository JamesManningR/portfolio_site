<template>
  <main class="newProject">
    <transition>
      <project-edit-form
        v-model="project"
        @featuredSelect="this.thumbnailSrc = $event"
        v-if="editMode"
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

      <div v-else class="newProject__preview">
        <blog-text :project="project" />
      </div>
    </transition>
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
        skills: [],
        links: []
      },
      thumbnailSrc: "",
      editMode: true
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
  &__label {
    &--body {
      display: flex;
      flex-grow: 1;
    }
  }
}
</style>
