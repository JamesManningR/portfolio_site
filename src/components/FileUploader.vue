<template>
  <div class="fileUploader">
    <ul>
      <li v-for="(file, index) in files" :key="index">{{ file.name }}</li>
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
    fileSelect(evt) {
      evt.target.files.forEach(file => {
        return firebaseStorage
          .upload(file, file.name)
          .then((fileUrl) => {
            const uploadInfo = {fileUrl, name: file.name}
            this.files.push(uploadInfo)
          })
          .catch(err => console.log(err));
      });
    }
  },
  data() {
    return {
      featured: "",
      files: [],
      disabled: false
    };
  }
};
</script>

<style></style>
