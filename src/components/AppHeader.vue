<template>
  <header class="header">
    <div class="header__ident">

    <InlineSVG :class="'header__logo'" pathTo="../assets/sprites.svg#logo" />
    <h3 class="header__itentText">Curious <strong>Digital</strong></h3>
    </div>
    <p class="header__info">The online portfolio of James Manning</p>
    <nav class="header__nav">
      <ul class="header__navList">
        <li class="header__listItem">
          <router-link class="header__navLink" to="/">Home</router-link>
        </li>
        <li class="header__listItem">
          <router-link class="header__navLink" :to="{name: 'Projects'}">Projects</router-link>
        </li>
        <li class="header__listItem">
          <router-link class="header__navLink" :to="{name: 'Skills'}">Skills</router-link>
        </li>
        <li class="header__listItem">
          <router-link class="header__navLink" :to="{name: 'Contact'}">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import InlineSVG from '@/components/InlineSVG.vue';

export default {
  components: {
    InlineSVG
  }
}
</script>

<style lang="scss">
.header {
	display: grid;
	height: 100vh;
	padding: 4rem;
	align-content: center;
	grid-template-rows: 1fr 1fr 4fr;
	&__ident {
		display: flex;
		margin-bottom: 1rem;
		align-items: center;
		font-size: 2.6em;
		font-weight: 200;
	}
	&__logo {
		max-width: 7.5rem;
		max-height: 7.5rem;
	}
	&__info {
		font-size: 1.4em;
	}
	&__navList {
		font-size: 1.4em;
		list-style: none;
	}
	&__listItem> .router-link-active {
		color: #FAFAFA;
		&::before {
			transform: scaleX(1);
		}
	}
	&__navLink {
		display: block;
		padding: 1rem 0;
		position: relative;
		color: currentColor;
		text-decoration: none;
		&::before {
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: -1;
			content: '';
			background: #000000;
			transform: scaleX(0);
			transform-origin: left center;
			transition: transform 0.1s ease-in;
		}
		&:hover {
			color: #FAFAFA;
			&::before {
				transform: scaleX(1);
			}
		}
	}
}

</style>