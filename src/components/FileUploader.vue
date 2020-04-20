<template>
  <input type="file" :disabled="disabled" @change="handleChange($event)" />
</template>

<script>
import firebaseStorage from "@/services/firebaseStorage.service";

export default {
  methods: {
    handleChange(event) {
      this.disabled = true;
      return firebaseStorage
        .upload(event.target.files[0], event.target.files[0].name)
        .then(() => {
          this.disabled = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  data() {
    return {
      disabled: false
    };
  }
};
</script>

<style></style>
