<template>
  <li class="projectPost">
    <router-link class="projectPost__link" :to="{ name: 'project-show', params: { id: project.id } }">
      <figure class="projectPost__post" :style="blockStyling">
        <h2 class="projectPost__title">{{ project.title }}</h2>
      </figure>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    project: Object
  },
  computed: {
    blockStyling(){
      return {
        backgroundColor: this.project.color,
        backgroundImage: `url(${this.project.featuredImage})`,
      }
    }
  }
};
</script>

<style lang="scss">
.projectPost {
	&__post {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		background-size: cover;

		&:hover {
			h2 {
				transform: scale(1.2);
			}
		}
		h2 {
			text-decoration: none;
			transition: transform 0.55s ease-out;
			&:visited {
				color: currentColor;
			}
		}
	}
	&__title {
		text-shadow: 2px 1px 12px #000000EE;
	}
}

</style>
