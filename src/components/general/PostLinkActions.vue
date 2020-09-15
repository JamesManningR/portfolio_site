<template v-if="isAuthenticated">
  <div class="thumbnailActions">
    <router-link
      class="btn thumbnailActions__edit"
      :to="{ name: 'project-edit', params: { id: postId } }"
    >
      Edit
    </router-link>

    <confirm-button
      @confirm="$emit('delete')"
      buttonClass="thumbnailActions__delete"
    >
      <svg-path
        className="projectPost__deleteIcon"
        set="icoMoon"
        name="bin"
        label="bin"
      />
    </confirm-button>
  </div>
</template>

<script>
export default {
  props: {
    postId: String
  }
};
</script>

<style lang="scss">
.thumbnailActions {
  display: none;
  width: 100%;
  padding: 0.5em 0.5em;
  position: absolute;
  top: 0;
  z-index: 20;
  justify-content: space-between;
  &__edit {
    background-color: col(caution);
  }
  &__delete {
    padding-right: 1.5em;
    padding-left: 1.5em;
    color: col(fg);
    font-size: 1em;
    background-color: col(failure);
  }
}
</style>
