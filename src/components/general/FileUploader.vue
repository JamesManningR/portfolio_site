<template>
  <div class="fileUploader">
    <label class="fileUploader__label">
      <svg-path
        className="fileUploader__inputIcon"
        set="iconMoon"
        name="upload"
        label="Upload"
      />
      <span>Upload images</span>
      <input
        class="fileUploader__file"
        type="file"
        multiple
        :disabled="disabled"
        @change="fileSelect($event)"
      />
    </label>
    <ul class="fileUploader__uploaded" v-if="images.files">
      <li v-for="file in images.files" :key="file._id">
        <label class="fileUploader__imgLabel">
          <input
            class="fileUploader__featured"
            type="radio"
            v-model="images.featured"
            :value="file._id"
            name="featured"
          />
          <img class="fileUploader__img" :src="file.src" :alt="file.name" />
        </label>
      </li>
    </ul>
  </div>
  <!-- <label class="fileUploader__altLabel">
          Alt Text
          <input
            class="fileUploader__altText"
            v-model="file.altText"
            type="text"
          />
        </label> -->
</template>

<script>
import db from "@/services/nodeApi.service";
import svgPath from "@/components/general/SVGPath";

export default {
  components: {
    svgPath
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
      let filePromises = [];
      evt.target.files.forEach(file => {
        filePromises.push(db.uploadMedia(file));
      });
      let resolved;
      try {
        resolved = await Promise.all(filePromises);
      } catch (err) {
        this.$store.dispatch("notification/createNotification", {
          action: "Upload Image",
          message: err.data.message,
          type: "failure"
        });
        return;
      }
      this.images.files = resolved;
    }
  }
};
</script>

<style lang="scss">
.fileUploader {
  display: flex;
  height: 100%;
  border: 1px solid #8fb5d0;
  border-radius: 0.3em;

  &__label {
    box-sizing: border-box;
    display: flex;
    padding: 0.5em;
    padding-left: 1em;
    align-items: center;
    flex-basis: 30%;
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
    overflow-x: scroll;
    list-style: none;
  }
  &__featured {
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
</style>
