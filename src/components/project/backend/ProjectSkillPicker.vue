<template>
  <div class="skillPicker">
    <div class="skillSearch">
      <input
        class="skillSearch__input"
        type="text"
        v-model="search"
        placeholder="Search Skills"
      />
      <svg-path class="skillSearch__icon" set="icoMoon" name="search" />
    </div>
    <transition-group name="slide" tag="ul" class="skillsList" mode="out-in">
      <li
        v-for="(iconData, key) in filteredSkills"
        :data-skillname="key"
        :key="`key-${key}`"
        @click="iconData.selected = true"
        class="skillsList__skill"
      >
        <input
          class="skillsList__checkbox"
          type="checkbox"
          :id="'skillsList__check--' + key"
          v-model="selectedSkills"
          :value="key"
        />
        <label
          :aria-label="key"
          :for="'skillsList__check--' + key"
          class="skillsList__label"
        >
          <svg-path
            className="skillsList__icon"
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
.skillSearch {
  max-width: 20em;
  position: relative;
  &__input {
    width: 100%;
    height: 100%;
    padding: 0.1em;
    font-size: 1.1em;
    text-align: left;
  }
  &__icon {
    position: absolute;
    right: 0.5em;
    bottom: 0.4em;
    pointer-events: none;
  }
}

.skillsList {
  display: flex;
  max-height: 6em;
  padding-bottom: 1em;
  margin-top: 1rem;
  overflow-y: scroll;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-size: 1.75em;
  list-style: none;
  border: 2px solid col(fg, dark);
  border-radius: 0.35rem;
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
        font-size: 0.65em;
        text-transform: capitalize;
        background-color: col(bg);
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
    background-color: #fff1;
    border-color: #ffb829;
    .skills__icon {
      filter: none;
    }
  }
}
</style>
