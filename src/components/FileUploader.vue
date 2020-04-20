<template>
  <div class="fileUploader">
    <ul>
      <li v-for="(file, index) in files" :key="index">{{ file.name }}</li>
    </ul>
    <input
      type="file"
      multiple
      :disabled="disabled"
      @change="handleChange($event)"
    />
  </div>
</template>

<script>
import firebaseStorage from "@/services/firebaseStorage.service";

export default {
  methods: {
    handleChange(evt) {
      // this.disabled = true;
      // return firebaseStorage
      //   .upload(event.target.files[0], event.target.files[0].name)
      //   .then(() => {
      //     this.disabled = false;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      this.files = evt.target.files;
      this.files.forEach(file => {
        return firebaseStorage
          .upload(file, file.name)
          .then(() => {
            console.log("Uploaded");
          })
          .catch(err => console.log(err));
      });
    }
  },
  data() {
    return {
      files: [],
      disabled: false
    };
  }
};
</script>

<style></style>
