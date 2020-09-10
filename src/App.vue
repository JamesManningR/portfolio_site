<template>
  <div id="app" :class="{'--expandedSidebar': header.headerToggled}">
    <app-header class="app__header"/>
		<transition name="slide-right">
			<header-sidebar 
				class="sidebar"
				v-if="header.headerToggled"
			/>
		</transition>
    <transition name="fade" mode="out-in">
      <router-view class="section app__main" :key="$route.fullPath" />
    </transition>
    <notification-list />
  </div>
</template>

<script>
import appHeader from "@/components/header/Header.vue";
import notificationList from "@/components/notification/NofiticationList.vue";
import headerSidebar from "@/components/header/HeaderSidebar.vue";

import { mapState } from "vuex";

export default {
  components: {
		appHeader,
		headerSidebar,
    notificationList
  },
  created() {
    this.$store.dispatch("auth/autoLogin");
	},
	computed: mapState(['header'])
};
</script>

<style lang="scss">
@import './scss/main.scss';

body {
	width: 100vw;
	min-height: calc(100vh - 2rem);
	color: col(fg);
	background-color: col(bg, dark);

	@include bp(150em) {
		font-size: 3em;
	}
	@include bp(200em) {
		font-size: 4em;
	}
}

#app {
	display: grid;
	max-width: 100vw;
	min-height: 100vh;
	padding: 1rem;
	grid-template-areas: 'header' 'main';
	gap: 1rem;
}
.app {
	&__header {
		width: 100%;
		grid-area: header;
	}
	&__sidebar {
		grid-area: sidebar;
	}
	&__main {
		height: 100%;
		grid-area: main;
	}
}

#app.--expandedSidebar {
		grid-template-areas: 'header header' 'main sidebar';
		grid-template-rows: auto 1fr;
		grid-template-columns: 1fr max-content;
}


main {
	padding: 1rem;
	flex-grow: 1;
}

</style>
