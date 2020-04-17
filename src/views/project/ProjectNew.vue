<template>
  <main class="newProject">
    <project-edit-form @change="project = $event">
      <button class="btn btn--submit" slot="submit" type="submit">Submit</button>
    </project-edit-form>

    <div class="newProject__preview">
      <blog-text :project="project"/>
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
        images: [],
        featuredImage: "",
        color: "",
        skills: []
      }
    };
  }
};
</script>

<style lang="scss">
.newProject {
	display: grid;
	grid-template-columns: 1fr 2fr;
	&__label {
		&--body {
			display: flex;
			flex-grow: 1;
		}
	}
	&__preview {
	}
}

</style>
