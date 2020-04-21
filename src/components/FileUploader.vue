<template>
  <div class="fileUploader">
    <ul class="fileUploader__uploaded">
      <li v-for="(file, index) in image.files" :key="index">
        <label>
          <img class="fileUploader__img" :src="file.fileUrl" :alt="file.name" />
          <input
            type="radio"
            v-model="featured"
            :value="file.fileUrl"
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
            this.images.files.push({ fileUrl, name: file.name });
          })
          .catch(err => console.log(err)); // catch errors
      });
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
    images: function() {
      this.$emit("fileUploaded", {
        files: this.images.files,
        featured: this.images.featured
      });
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
