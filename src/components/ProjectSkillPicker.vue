<template>
  <div class="skillPicker">
    <h3>Skills</h3>
    <input type="text" v-model="search" />
    <svg-path set="iconMoon" name="search" />
    <ul class="skills">
      <li
        v-for="(brand, key) in filteredBrands"
        :key="key"
        @click="brand.selected = true"
        class="skills__skill"
      >
        <input
          class="skills__checkbox"
          type="checkbox"
          :id="'skills__check--' + key"
          v-model="skills"
          :value="key"
        />
        <label
          :aria-label="key"
          :for="'skills__check--' + key"
          class="skills__label"
        >
          <svg-path
            class="skills__icon"
            set="brands"
            :name="key"
            :label="key"
          />
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import symbols from "@/assets/symbols";
import svgPath from "@/components/SVGPath.vue";

export default {
  data() {
    return {
      brands: symbols.brands,
      skills: [],
      search: ""
    };
  },
  watch: {
    skills() {
      this.$emit("skillsChanged", this.skills);
    }
  },
  computed: {
    filteredBrands() {
      const filtered = Object.keys(this.brands)
        .filter(key => key.includes(this.search))
        .reduce((obj, key) => {
          obj[key] = this.brands[key];
          return obj;
        }, {});
      return filtered;
    }
  },
  components: {
    svgPath
  }
};
</script>

<style lang="scss">
.skills {
  display: flex;
  height: 200px;
  overflow: scroll;
  flex-wrap: wrap;
  list-style: none;
  &__skill {
    margin: 0.2em;
  }
  &__checkbox {
    display: none;
  }
  &__label {
    box-sizing: border-box;
    display: flex;
    padding: 0.4em;
    border: 2px solid transparent;
    border-radius: 0.2em;
  }
  &__icon > path {
    filter: grayscale(1) contrast(0);
  }
  &__checkbox:checked ~ &__label {
    border-color: #ffb829;
    .skills__icon > path {
      filter: none;
    }
  }
}
</style>
