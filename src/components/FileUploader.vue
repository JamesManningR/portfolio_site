<template>
  <div class="fileUploader">
    <ul class="fileUploader__uploaded">
      <li
        v-for="(file, index) in files"
        :key="index"
        @click="this.featured = file"
      >
        <label>
          <img class="fileUploader__img" :src="file.fileUrl" :alt="file.name" />
          <input
            type="radio"
            v-model="featured"
            :id="file.name"
            :value="file.fileUrl"
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
import firebaseStorage from "@/services/firebaseStorage.service";

export default {
  methods: {
    // On file drag and drop
    fileSelect(evt) {
      evt.target.files.forEach(file => {
        return firebaseStorage // Upload to firebase
          .upload(file, file.name)
          .then(fileUrl => {
            // Upon success
            // push file data onto the files array
            this.files.push({ fileUrl, name: file.name });
          })
          .catch(err => console.log(err)); // catch errors
      });
    }
  },
  data() {
    return {
      featured: {},
      files: [],
      disabled: false
    };
  },
  watch: {
    files: function() {
      this.$emit("fileUploaded", this.files);
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
