<template>
  <li class="notification">
    <h2 class="notification__action">{{ notification.action }}</h2>
    <p class="notification__message">{{ notification.message }}</p>
    <button class="notification__dismiss" aria-label="dismiss notification">
      &#x2715;
    </button>
  </li>
</template>

<script>


export default {
  props: {
    notification: Object
  }
};
</script>

<style lang="scss">
.notification {
	padding: 0.3em 0.75em;
	&__dismiss {
		padding: 0.5em;
		position: absolute;
		top: 0.25em;
		right: 0.25em;
		color: currentColor;
		background: none;
		border: none;
		&:hover {
			background-color: #FFFFFFDA;
			cursor: pointer;
		}
	}
}

</style>
