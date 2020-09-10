<template>
  <div class="sidebar__navbar section">
    <nav class="sidebar__nav">
      <ul class="sidebar__navList">
        <li class="sidebar__listItem">
          <router-link class="sidebar__navLink" to="/" exact>
            <svg-path class="sidebar__icon" set="icoMoon" name="home" />
            <span class="sidebar__navText">Home</span></router-link
          >
        </li>
        <li class="sidebar__listItem">
          <router-link class="sidebar__navLink" :to="{ name: 'projects' }">
            <svg-path class="sidebar__icon" set="icoMoon" name="folder" />
            <span class="sidebar__navText">Projects</span></router-link
          >
        </li>
        <li class="sidebar__listItem">
          <router-link class="sidebar__navLink" :to="{ name: 'contact' }">
            <svg-path class="sidebar__icon" set="icoMoon" name="phone" />
            <span class="sidebar__navText">Contact</span></router-link
          >
        </li>
        <li class="sidebar__listItem">
          <router-link class="sidebar__navLink" :to="{ name: 'contact' }">
            <svg-path class="sidebar__icon" set="icoMoon" name="gear" />
            <span class="sidebar__navText">Settings</span></router-link
          >
        </li>
      </ul>
    </nav>
    <section class="sidebar__auth">
      <app-account class="sidebar__account" />
    </section>
  </div>
</template>

<script>
import appAccount from "@/components/app/AppAccount.vue";

export default {
  components: {
    appAccount
  }
};
</script>

<style lang="scss">
.sidebar {
	justify-content: space-between;
	font-family: fnt(primary);
	font-size: 1.5em;
	&__nav {
		padding: 0.5rem;
		flex-grow: 1;
		border: solid col(fg, dark);
		border-width: 2px 0;
	}
	&__navList {
		display: flex;
		flex-direction: column;
	}
	&__navText {
		font-weight: 900;
	}
	&__listItem {
		display: flex;
		align-items: center;
		text-transform: uppercase;

		@include margin-y(1rem);
	}
	&__icon {
		margin-right: 0.35em;
	}
	&__auth {
		display: flex;
	}
	&__account {
		padding: 0.5rem;
		color: col(fg);
	}
}

</style>
