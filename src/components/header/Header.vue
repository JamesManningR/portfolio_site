<template>
  <header class="header">
    <div class="header__topbar section">
			<router-link to="/">
      	<h3 class="header__title">Curious<strong>Digital</strong></h3>
			</router-link>
      <header-toggle/>
    </div>
  </header>
</template>

<script>
import headerToggle from "@/components/header/HeaderToggle.vue";

export default {
  components: {
    headerToggle
	}
};
</script>

<style lang="scss">
@import '@/scss/abstracts/_variables.scss';
@import '@/scss/abstracts/_functions.scss';
@import '@/scss/abstracts/_mixins.scss';

.header {
	display: flex;
	position: relative;
	align-self: center;
	justify-content: space-between;
	font-weight: 900;
	&__topbar {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
	&__title {
		strong {
			display: block;
		}
	}
}

</style>
