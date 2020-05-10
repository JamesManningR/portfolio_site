<template>
  <div class="fileUploader">
    <ul class="fileUploader__uploaded">
      <li v-for="file in images.files" :key="file._id">
        <label>
          <img class="fileUploader__img" :src="file.src" :alt="file.name" />
          <input
            type="radio"
            v-model="images.featured"
            :value="file._id"
            name="featured"
          />
        </label>
        <label>
          Alt Text
          <input v-model="file.altText" type="text" />
        </label>
      </li>
    </ul>
    <input
      type="file"
      multiple
      :disabled="disabled"
      @change="fileSelect($event)"
    />
  </div>
</template>

<script>
import db from "@/services/nodeApi.service";

export default {
  methods: {
    // On file drag and drop
    async fileSelect(evt) {
      let filePromises = [];
      evt.target.files.forEach(file => {
        filePromises.push(db.uploadMedia(file));
      });
      const resolved = await Promise.all(filePromises);
      this.images.files = resolved;
    }
  },
  data() {
    return {
      images: {
        featured: "",
        files: []
      },
      disabled: false
    };
  },
  watch: {
    "images.files": function() {
      this.$emit(
        "fileUploaded",
        this.images.files.map(a => a._id)
      );
    },
    "images.featured": function() {
      this.$emit("featuredSelected", this.images.featured);
    }
  }
};
</script>

<style lang="scss">
.fileUploader {
  &__uploaded {
    display: flex;
    flex-wrap: wrap;
  }
  &__img {
    height: 4em;
    margin: 0.5em;
  }
}
</style>
