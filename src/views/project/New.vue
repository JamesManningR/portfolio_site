<template>
  <main class="newProject">
    <div class="newProject__inputs">
      <label>
        Title
        <input type="text" v-model="project.title" />
      </label>
      <label>
        Body
        <textarea v-model="project.body" />
      </label>
    </div>

    <div class="newProject__preview">
      <h1>{{ project.title }}</h1>
      <vue-simple-markdown :source="project.body"></vue-simple-markdown>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      project: {
        title: "",
        body: "",
        images: [],
        color: "",
        skills: [],
      },
    };
  },
};
</script>

<style lang="scss">
.newProject{
  display: grid;
  grid-template-columns: 1fr 2fr;
  &__inputs{

  }
  &__preview{

  }
}
</style>
