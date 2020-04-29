<template>
  <div class="fileUploader">
    <ul class="fileUploader__uploaded">
      <li v-for="file in images.files" :key="file.id">
        <label>
          <img class="fileUploader__img" :src="file.fileUrl" :alt="file.name" />
          <input
            type="radio"
            v-model="images.featured"
            :value="file.id"
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
import firebaseService from "@/services/firebaseApi.service";

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
            return firebaseService
              .postMedia({ src: fileUrl, name: file.name })
              .then(docRef => {
                this.images.files.push({
                  id: docRef.id,
                  fileUrl,
                  name: file.name
                });
              })
              .catch(err => {
                console.log(err);
              });
            // this.images.uploadIds.push()
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
    "images.files": function() {
      this.$emit(
        "fileUploaded",
        this.images.files.map(a => a.id)
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
