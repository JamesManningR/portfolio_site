<template>
  <section class="linkInput">
    <ul class="linkInpu__list">
      <li v-for="(link, index) in value" :key="index">
        <input v-model="link.handle" type="text" placeholder="Handle" />
        <input v-model="link.url" type="url" placeholder="Link" />
        <select v-model="link.type">
          <option value="github">Github</option>
          <option value="live">Live</option>
          <option value="design">Design</option>
        </select>
        <button @click.prevent="value.splice(index, 1)">X</button>
      </li>
    </ul>
    <button @click.prevent="addLink()">Add Link</button>
  </section>
</template>

<script>
export default {
  name: "project-link-input",
  props: {
    value: Array
  },
  methods: {
    addLink() {
      this.value.push({
        handle: "",
        url: "",
        type: "live"
      });
    }
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.$emit("input", this.value);
      }
    }
  }
};
</script>
<style></style>
