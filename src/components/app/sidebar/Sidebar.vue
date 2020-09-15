<template>
  <div class="sidebar section">
    <nav class="sidebar__nav">
      <ul class="sidebar__navList">
        <sidebar-nav-item
          v-for="(link, i) in links"
          :key="i"
          :linkTo="link.linkTo"
          :iconSet="link.iconSet"
          :iconName="link.iconName"
          :label="link.label"
        />
      </ul>
    </nav>
    <section class="sidebar__auth">
      <app-account class="sidebar__account" />
    </section>
  </div>
</template>

<script>
import appAccount from "@/components/app/AppAccount.vue";
import sidebarNavItem from "@/components/app/sidebar/SidebarNavItem.vue";

export default {
  components: {
    appAccount,
    sidebarNavItem
  },
  data() {
    return {
      links: [
        {
          linkTo: { path: "/" },
          iconSet: "icoMoon",
          iconName: "home",
          label: "Home"
        },
        {
          linkTo: { name: "projects" },
          iconSet: "icoMoon",
          iconName: "folder",
          label: "Projects"
        },
        {
          linkTo: { name: "about" },
          iconSet: "icoMoon",
          iconName: "info",
          label: "About Me"
        },
        {
          linkTo: { name: "blog" },
          iconSet: "icoMoon",
          iconName: "book",
          label: "Blog"
        }
        // {
        //   linkTo: { name: "settings" },
        //   iconSet: "icoMoon",
        //   iconName: "gear",
        //   label: "Settings"
        // }
      ]
    };
  }
};
</script>

<style lang="scss">
.sidebar {
  font-family: fnt(primary);
  font-size: 1.5em;
  @include bp(desktop) {
    display: flex;
    align-self: center;
  }
  &__nav {
    width: max-content;
    padding: 0.5rem 0;
    flex-grow: 1;
    border: solid col(fg, dark);
    border-width: 2px 0;
    @include bp(desktop) {
      border: none;
    }
  }
  &__navList {
    display: flex;
    flex-direction: column;
    @include bp(desktop) {
      flex-direction: row;
      justify-content: flex-end;
    }
  }
  &__navText {
    font-weight: 900;
  }
  &__listItem {
    text-transform: uppercase;

    @include padding-y(1rem);

    @include bp(desktop) {
      margin: 0 1rem;
    }
  }
  &__icon {
    margin-right: 0.35em;
  }
  &__auth {
    display: flex;
  }
  &__account {
    padding: 0.5rem;
    width: 100%;
    color: col(fg);
  }
}
</style>
