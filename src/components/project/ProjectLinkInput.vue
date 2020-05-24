<template>
  <section class="linkInput">
    <ul class="linkInput__list">
      <li class="linkInput__item" v-for="(link, index) in value" :key="index">
        <button @click.prevent="value.splice(index, 1)">X</button>
        <input
          class="linkInput__handle"
          v-model="link.handle"
          type="text"
          placeholder="Handle"
        />
        <input
          class="linkInput__url"
          v-model="link.url"
          type="url"
          placeholder="Link"
        />
        <select v-model="link.type">
          <option value="github">Github</option>
          <option value="live">Live</option>
          <option value="design">Design</option>
          <option value="trello">Trello</option>
          <option value="video">Video</option>
          <option value="design">Other</option>
        </select>
      </li>
    </ul>
    <button class="linkInput__add" @click.prevent="addLink()">Add Link</button>
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
  &__list {
    display: flex;
    flex-direction: column;
  }
  &__item {
    display: flex;
  }
  &__url,
  &__handle {
    flex-grow: 1;
  }
  &__add {
    width: 100%;
    padding: 0.5em;
  }
}
</style>
