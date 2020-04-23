<template>
  <div class="fileUploader">
    <ul class="fileUploader__uploaded">
      <li
        v-for="(file, index) in settings.files"
        :key="index"
        @click="this.settings.featured = file"
      >
        <label>
          <img class="fileUploader__img" :src="file.fileUrl" :alt="file.name" />
          <input
            type="radio"
            v-model="settings.featured"
            :value="file.fileUrl"
            :id="file.name"
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
            this.settings.files.push({ fileUrl, name: file.name });
          })
          .catch(err => console.log(err)); // catch errors
      });
    }
  },
  data() {
    return {
      settings : {
        featured: "",
        files: []
      },
      disabled: false
    };
  },
  watch: {
    settings: {
      deep: true,
      handler() {
        console.log('this jhappened')
        this.$emit("fileUploaded", this.settings);
      }
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
