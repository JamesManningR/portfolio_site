<template>
  <div class="skillPicker">
    <h3>Skills</h3>
    <div class="skillPicker__search">
      <input class="skillPicker__searchInput" type="text" v-model="search" />
      <svg-path set="iconMoon" name="search" />
    </div>
    <transition-group name="slide" tag="ul" class="skills">
      <li
        v-for="(brand, key) in filteredSkills"
        :key="`key-${key}`"
        @click="brand.selected = true"
        class="skills__skill"
      >
        <input
          class="skills__checkbox"
          type="checkbox"
          :id="'skills__check--' + key"
          v-model="selectedSkills"
          :value="key"
        />
        <label
          :aria-label="key"
          :for="'skills__check--' + key"
          class="skills__label"
        >
          <svg-path
            className="skills__icon"
            set="skills"
            :name="key"
            :label="key"
          />
        </label>
      </li>
    </transition-group>
  </div>
</template>

<script>
import symbols from "@/assets/symbols";
import svgPath from "@/components/general/SVGPath.vue";

export default {
  props: {
    value: Array,
    subset: Array
  },
  data() {
    return {
      skills: symbols.skills,
      search: "",
      selectedSkills: this.value
    };
  },
  watch: {
    selectedSkills() {
      this.$emit("input", this.selectedSkills);
    }
  },
  computed: {
    skillSubset() {
      if (this.subset) {
        const subset = Object.keys(this.skills)
          .filter(key => this.subset.includes(key))
          .reduce((obj, key) => {
            obj[key] = this.skills[key];
            return obj;
          }, {});
        return subset;
      }
      return this.skills;
    },
    filteredSkills() {
      const filtered = Object.keys(this.skillSubset)
        .filter(key => key.includes(this.search))
        .reduce((obj, key) => {
          obj[key] = this.skillSubset[key];
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
.skillPicker {
  &__search {
    width: 100%;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      padding: 0.1em;
      font-size: 1.1em;
      text-align: left;
    }
    svg {
      width: 1em;
      height: 1em;
      position: absolute;
      top: 0.5em;
      right: 0.5em;
      pointer-events: none;
    }
  }
}

.skills {
  display: flex;
  height: 200px;
  overflow: scroll;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
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
    &:hover {
      background-color: #f6f6f6;
      border-color: #dedede;
    }
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
