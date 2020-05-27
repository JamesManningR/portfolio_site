<template>
  <div class="skillPicker">
    <div class="skillPicker__search">
      <input
        class="skillPicker__searchInput"
        type="text"
        v-model="search"
        placeholder="Search Skills"
      />
      <svg-path class="skillPicker__searchIcon" set="iconMoon" name="search" />
    </div>
    <transition-group name="slide" tag="ul" class="skills">
      <li
        v-for="(brand, key) in filteredSkills"
        :data-skillname="key"
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
  computed: {
    skillSubset() {
      // If a subset has been selected
      if (this.subset) {
        const subset = Object.keys(this.skills)
          .filter(key => this.subset.includes(key))
          .reduce((obj, key) => {
            obj[key] = this.skills[key];
            return obj;
          }, {});
        // Return a filtered list with the subset
        return subset;
      }
      // Otherwise, return the full array
      return this.skills;
    },
    filteredSkills() {
      // Filter skills by search
      const filtered = Object.keys(this.skillSubset)
        .filter(key => key.includes(this.search))
        .reduce((obj, key) => {
          obj[key] = this.skillSubset[key];
          return obj;
        }, {});
      return filtered;
    }
  },
  watch: {
    selectedSkills() {
      this.$emit("input", this.selectedSkills);
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/abstracts/_mixins.scss";
@import "@/scss/abstracts/_functions.scss";
@import "@/scss/abstracts/_variables";

.skillPicker {
  &__search {
    max-width: 20em;
    position: relative;
    &Input {
      width: 100%;
      height: 100%;
      padding: 0.1em;
      font-size: 1.1em;
      text-align: left;
    }
    &Icon {
      position: absolute;
      top: 0.75em;
      right: 0.5em;
      pointer-events: none;
    }
  }
}

.skills {
  display: flex;
  max-height: 10em;
  padding-bottom: 1em;
  overflow-x: hidden;
  overflow-y: scroll;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  &__skill {
    margin: 0.2em;
    position: relative;
    &:hover {
      &::after {
        width: max-content;
        padding: 0.15em;
        position: absolute;
        right: 0;
        bottom: -10px;
        left: 0;
        z-index: 10;
        color: col(light);
        content: attr(data-skillname);
        text-transform: capitalize;
        background-color: col(dark);
        pointer-events: none;
      }
    }
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
      .skills__icon {
        filter: none;
      }
    }
  }
  &__icon {
    transition: filter 0.05s ease-in;
    filter: grayscale(1) contrast(0);

    @include square(2em, false);
  }
  &__checkbox:checked ~ &__label {
    border-color: #ffb829;
    .skills__icon {
      filter: none;
    }
  }
}
</style>
