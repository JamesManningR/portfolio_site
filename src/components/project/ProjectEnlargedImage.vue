<template>
  <div class="enlargeImage" 
    @click="$emit('close')" 
    @keypress.right="$emit('next')" 
    @keypress.left="$emit('previous')"
  >
    <img class="enlargeImage__img" :src="image.src" :alt="image.altText">
  </div>
</template>

<script>
export default {
  props : {
    image: Object
  }
}
</script>

<style lang="scss">
  .enlargeImage {
  	display: flex;
  	width: 90%;
  	height: 100%;
  	position: absolute;
  	top: 0;
  	align-items: center;
  	justify-content: center;
  	background-color: #000D;
  	cursor: pointer;
  	&__img {
  		max-width: 100%;
  		max-height: 100%;
  	}
  }

</style>