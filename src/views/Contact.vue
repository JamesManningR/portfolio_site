<template>
  <main>
    <h1>Contact Me</h1>
    <ul>
      <li v-for="(contact, index) in settings.contact" :key="index">
        <svg-path :set="contact.iconSet" :name="contact.icon"></svg-path>
        {{ contact.title }}:
        <a :href="contact.link">{{ contact.text }} </a>
      </li>
    </ul>
  </main>
</template>

<script>
import settings from "@/content.json";

export default {
  data() {
    return {
      settings
    };
  }
};
</script>

<style></style>
