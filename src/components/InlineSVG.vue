<template>
      <svg>
      <use xmlns:xlink="http://www.w3.org/1999/xlink" v-bind="{'xlink:href': pathTo}"></use>
    </svg>
</template>

<script>
export default {
  props: {
    pathTo: String
    }
}
</script>

<style>

</style>