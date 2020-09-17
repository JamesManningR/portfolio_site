<template>
  <main class="editPost" :class="modeClass">
    <transition-group>
      <blog-edit-form key="edit-form" v-show="editMode" v-model="post">
        <button
          @click.prevent="updatePost"
          class="btn btn--submit"
          slot="submit"
          type="submit"
        >
          Submit
        </button>
      </blog-edit-form>
      <blog-post
        key="preview"
        v-show="!editMode"
        :blogPost="blogPost"
      ></blog-post>
    </transition-group>
    <button class="editPost__modeSwitch" @click.prevent="editMode = !editMode">
      Show {{ toggleModeButtonText }}
    </button>
  </main>
</template>

<script>
import BlogEditForm from "@/components/blog/backend/BlogEditForm";
import BlogPost from "@/components/blog/frontend/BlogPost";

export default {
  components: {
    BlogEditForm,
    BlogPost
  },
  props: {
    newPost: Boolean
  },
  data() {
    return {
      blogPost: {
        title: "",
        body: "",
        images: [],
        featuredImage: ""
      },
      editMode: true
    };
  },
  created() {
    if (!this.newPost) {
      this.post = this.$store.state.blog.post;
    }
  },
  computed: {
    toggleModeButtonText() {
      return this.editMode ? "Preview" : "Edit";
    },
    modeClass() {
      return this.editMode ? "editPost--edit" : "editPost--preview";
    }
  },
  methods: {
    updatePost() {
      if (this.newPost) {
        this.$store.dispatch("post/createPost", this.post);
      } else {
        this.$store.dispatch("post/updatePost", this.post);
      }
    }
  }
};
</script>

<style lang="scss">
.editPost {
  position: relative;
  &__label {
    &--body {
      display: flex;
      flex-grow: 1;
    }
  }
  &__modeSwitch {
    padding: 0.25em;
    color: col(secondary, dark);
    font-size: 1em;
    background-color: col(secondary);
    border: none;
    border-radius: 0.5em 0.5em 0 0;
    cursor: pointer;
  }
}
</style>
