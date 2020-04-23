<template>
  <div class="fileUploader">
    <ul class="fileUploader__uploaded">
<<<<<<< HEAD
      <li v-for="(file, index) in images.files" :key="index">
=======
      <li
        v-for="(file, index) in settings.files"
        :key="index"
        @click="this.settings.featured = file"
      >
>>>>>>> change/remove_relational
        <label>
          <img class="fileUploader__img" :src="file.fileUrl" :alt="file.name" />
          <input
            type="radio"
<<<<<<< HEAD
            v-model="featured"
            :value="file.fileUrl"
=======
            v-model="settings.featured"
            :value="file.fileUrl"
            :id="file.name"
>>>>>>> change/remove_relational
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
import firebaseApi from "@/services/firebaseApi.service";

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
<<<<<<< HEAD
            const dbData = { src: fileUrl, name: file.name };
            return firebaseApi.postMedia(dbData).then(res => {
              this.images.files.push({ fileUrl, name: file.name });
              this.images.uploadIds.push(res.id);
            });
=======
            this.settings.files.push({ fileUrl, name: file.name });
>>>>>>> change/remove_relational
          })
          .catch(err => console.log(err)); // catch errors
      });
    }
  },
  data() {
    return {
<<<<<<< HEAD
      images: {
        featured: "",
        files: [],
        uploadIds: []
=======
      settings : {
        featured: "",
        files: []
>>>>>>> change/remove_relational
      },
      disabled: false
    };
  },
  watch: {
<<<<<<< HEAD
    uploadIds: function() {
      this.$emit("fileUploaded", {
        fileIds: this.images.uploadIds,
        featured: this.images.featured
      });
=======
    settings: {
      deep: true,
      handler() {
        console.log('this jhappened')
        this.$emit("fileUploaded", this.settings);
      }
>>>>>>> change/remove_relational
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
