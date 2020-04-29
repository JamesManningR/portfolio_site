<template>
  <main>
    <h1>Contact Me</h1>
    <ul>
      <li>Email: <svg-path set="iconMoon" name="email" label="Email" /></li>
      <li>Email: <svg-path set="skills" name="sass" /></li>
      <li>Email: <svg-path set="iconMoon" name="email" /></li>
      <li>Email: <svg-path set="skills" name="sass" /></li>
    </ul>
  </main>
</template>

<script>
import svgPath from "@/components/SVGPath.vue";

export default {
  components: {
    svgPath
  }
};
</script>

<style></style>
