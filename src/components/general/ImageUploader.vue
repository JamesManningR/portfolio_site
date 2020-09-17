<template>
  <div class="imageUploader">
    <label class="imageUploader__label">
      <svg-path
        className="imageUploader__inputIcon"
        set="icoMoon"
        name="upload"
        label="Upload"
      />
      <span>Upload images</span>
      <input
        class="imageUploader__file"
        type="file"
        multiple
        :disabled="disabled"
        @change="fileSelect($event)"
      />
    </label>
    <ul class="imageUploader__uploaded" v-if="images.files">
      <li class="uploaderImage" v-for="file in images.files" :key="file._id">
        <label class="uploaderImage__Label">
          <input
            class="uploaderImage__featured"
            type="radio"
            v-model="images.featured"
            :value="file._id"
            name="featured"
          />
          <img class="uploaderImage__img" :src="file.src" :alt="file.name" />
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import db from "@/services/nodeApi.service";

export default {
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
      this.$emit("featuredSelected", {
        id: this.images.featured,
        src: this.images.files.find(file => file._id === this.images.featured)
          .src
      });
    }
  },
  methods: {
    // On file drag and drop
    async fileSelect(evt) {
      // If the user is not authorised
      if (!this.$store.getters["auth/isAdmin"]) {
        // Let the user know they aren't authorised to do that
        this.$store.dispatch("notification/createNotification", {
          action: "Upload Image",
          message: "You don't have permission to do that!",
          type: "failure"
        });
        // And do nothing else
        return;
      }
      // Otherwise Upload each of the files to the server
      let filePromises = [];
      evt.target.files.forEach(file => {
        filePromises.push(db.uploadMedia(file));
      });
      let resolved;
      try {
        // Wait for the images to upload
        resolved = await Promise.all(filePromises);
      } catch (err) {
        // If the images failed to upload, tell the user.
        this.$store.dispatch("notification/createNotification", {
          action: "Upload Image",
          message: err.data.message,
          type: "failure"
        });
        return;
      }
      // If all goes well, set the files to the returned value
      this.images.files = resolved;
    }
  }
};
</script>

<style lang="scss">
.imageUploader {
  display: flex;
  height: 100%;
  border: 1px solid #8fb5d0;
  border-radius: 0.3em;

  &__label {
    box-sizing: border-box;
    display: flex;
    padding: 2em;
    padding-left: 1em;
    align-items: center;
    flex-basis: 12em;
    border-right: 1px solid #8fb5d0;
    &:active {
      background-color: #eaeaea;
    }
  }
  &__file {
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 100px;
    opacity: 0;
  }
  &__inputIcon {
    margin-right: 1em;
  }
  &__uploaded {
    display: flex;
    list-style: none;
  }

  .uploaderImage {
    &__featured {
      overflow: hidden;
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
      top: 0;
      left: 0;
      &:checked + img {
        border: #ffb829 3px solid;
        border-radius: 0.2em;
      }
    }
    &__img {
      box-sizing: border-box;
      height: 4em;
      margin: 0.5em;

      object-fit: cover;
    }
    &__imgLabel {
      display: flex;
    }
  }
}
</style>
