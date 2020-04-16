<template>
  <li>
    <router-link :to="{ name: 'project-show', params: { id: project.id } }">
      <figure>
        <h2>{{ project.title }}</h2>
      </figure>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    project: Object
  }
};
</script>

<style></style>
