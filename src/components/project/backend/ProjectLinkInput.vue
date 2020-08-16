<template>
  <section class="linkInput">
    <h2>Links</h2>
    <ul class="linkInput__list">
      <li class="linkInput__item" v-for="(link, index) in value" :key="index">
        <span class="linkInput__type">
          <select name="type" v-model="link.type">
            <option value="github">Github</option>
            <option value="live">Live</option>
            <option value="design">Design</option>
            <option value="trello">Trello</option>
            <option value="video">Video</option>
            <option value="other">Other</option>
          </select>
        </span>
        <input
          class="linkInput__handle"
          v-model="link.handle"
          type="text"
          placeholder="Title"
          aria-label="Link Title"
          name="handle"
        />
        <input
          class="linkInput__url"
          v-model="link.url"
          type="url"
          placeholder="Link"
          aria-label="Link"
          name="url"
        />
        <button
          class="linkInput__remove"
          aria-label="remove link"
          @click.prevent="value.splice(index, 1)"
        >
          &#10005;
        </button>
      </li>
    </ul>
    <button class="linkInput__add" @click.prevent="addLink()">
      <svg-path name="add" set="icoMoon" /> Add Link
    </button>
  </section>
</template>

<script>
export default {
  name: "project-link-input",
  props: {
    value: Array
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.$emit("input", this.value);
      }
    }
  },
  methods: {
    addLink() {
      this.value.push({
        handle: "",
        url: "",
        type: "live"
      });
    }
  }
};
</script>

<style lang="scss">
.linkInput {
  overflow-x: scroll;
  &__list {
    display: flex;
    flex-direction: column;
  }
  &__item {
    display: flex;
    margin-bottom: 0.5em;
    align-items: center;
    flex-direction: row;
    input {
      max-width: 100%;
    }
  }
  &__remove {
    height: 50%;
    padding: 0.4em 0.8em;
    color: #ffffff;
    background-color: col(failure);
    border: none;
    border-radius: 0 0.75em 0.75em 0;
    &:hover {
      color: col(failure);
      background-color: #ffffff;
      cursor: pointer;
    }
  }
  &__url,
  &__handle {
    min-width: 1em;
    flex-grow: 1;
    border: 1px solid #aaaaaa;
    border-radius: 0.5em;
  }
  &__type {
    position: relative;
    &::after {
      position: absolute;
      top: 0.25em;
      right: 0.35em;
      color: col(primary, light);
      content: "▿";
      pointer-events: none;
    }
  }
  &__add {
    width: 100%;
    padding: 0.5em;
    color: col(success, light);
    background-color: col(success);
    border: none;
    border-radius: 0.5em;
    &:hover {
    }
  }
}
</style>
