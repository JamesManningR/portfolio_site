<template>
  <main class="editProject">
    <transition>
      <project-edit-form v-if="editMode" v-model="project">
        <button
          @click.prevent="updateProject"
          class="btn btn--submit"
          slot="submit"
          type="submit"
        >
          Submit
        </button>
      </project-edit-form>

      <div v-else class="editProject__preview">
        <blog-text :project="project" />
      </div>
    </transition>
    <button @click.prevent="editMode = !edittMode">Preview / Edit</button>
  </main>
</template>

<script>
import ProjectEditForm from "@/components/project/ProjectEditForm.vue";
import BlogText from "@/components/general/BlogText.vue";

export default {
  props: {
    newProject: Boolean
  },
  components: {
    ProjectEditForm,
    BlogText
  },
  created() {
    if (!this.newProject) {
      this.project = this.$store.state.project.project;
    }
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
        skills: [],
        links: []
      },
      editMode: true
    };
  },
  methods: {
    updateProject() {
      if (this.newProject) {
        this.$store.dispatch("project/createProject", this.project);
      } else {
        this.$store.dispatch("project/updateProject", this.project);
      }
    }
  }
};
</script>

<style lang="scss">
.editProject {
  &__label {
    &--body {
      display: flex;
      flex-grow: 1;
    }
  }
}
</style>
