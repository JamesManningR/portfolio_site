<template>
  <ul>
    <li
      v-for="(brand, key) in brands"
      :key="key"
      @click="brand.selected = true"
    >
      <label>
        {{ key }}
        <svg-path set="brands" :name="key" :label="key" />
        <input type="checkbox" v-model="skills" :value="key" />
      </label>
    </li>
  </ul>
</template>

<script>
import symbols from "@/assets/symbols";
import svgPath from "@/components/SVGPath.vue";

export default {
  data() {
    return {
      brands: symbols.brands,
      skills: []
    };
  },
  watch: {
    skills() {
      this.$emit("skillsChanged", this.skills);
    }
  },
  components: {
    svgPath
  }
};
</script>

<style></style>
