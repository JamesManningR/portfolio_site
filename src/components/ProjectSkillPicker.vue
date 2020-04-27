<template>
  <div class="skillPicker">
    <h3>Skills</h3>
    <div class="skillPicker__search">
      <input class="skillPicker__searchInput" type="text" v-model="search" />
      <svg-path set="iconMoon" name="search" />
    </div>
    <transition-group name="slide" tag="ul" class="skills">
      <li
        v-for="(brand, key) in filteredBrands"
        :key="`key-${key}`"
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
            className="skills__icon"
            set="brands"
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

.slide {
  &-enter {
    opacity: 0;
    &-active {
      transition: opacity 0.2s;
    }
  }
  &-leave {
    &-active {
      position: absolute;
      transition: opacity 0.2s;
      opacity: 0;
    }
  }
  &-move {
    transition: transform 0.5s;
  }
}
</style>
