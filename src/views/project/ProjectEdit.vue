<template>
  <main class="editProject" :class="modeClass">
    <transition-group>
      <project-edit-form key="edit-form" v-show="editMode" v-model="project">
        <button
          @click.prevent="updateProject"
          class="btn btn--submit"
          slot="submit"
          type="submit"
        >
          Submit
        </button>
      </project-edit-form>
      <project-post
        key="preview"
        v-show="!editMode"
        :project="project"
      ></project-post>
    </transition-group>
    <button
      class="editProject__modeSwitch"
      @click.prevent="editMode = !editMode"
    >
      Show {{ toggleModeButtonText }}
    </button>
  </main>
</template>

<script>
import ProjectEditForm from "@/components/project/ProjectEditForm.vue";
import ProjectPost from "@/components/project/ProjectPost";

export default {
  components: {
    ProjectEditForm,
    ProjectPost
  },
  props: {
    newProject: Boolean
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
  created() {
    if (!this.newProject) {
      this.project = this.$store.state.project.project;
    }
  },
  computed: {
    toggleModeButtonText() {
      return this.editMode ? "Preview" : "Edit";
    },
    modeClass() {
      return this.editMode ? "editProject--edit" : "editProject--preview";
    }
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
  position: relative;
  &__label {
    &--body {
      display: flex;
      flex-grow: 1;
    }
  }
  &__modeSwitch {
    width: 30rem;
    padding: 0.25em;
    position: absolute;
    top: 20%;
    left: 0;
    color: col(secondary, dark);
    font-size: 1em;
    background-color: col(secondary);
    border: none;
    border-radius: 0.5em 0.5em 0 0;
    transform: rotate(90deg);
    transform-origin: bottom left;
    cursor: pointer;
  }
  &--preview {
    padding-right: 4rem;
  }
  &--edit {
    padding-left: 4rem;
  }
}
</style>
