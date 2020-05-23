<template>
  <transition-group name="slide" tag="ul" class="nofiticationList">
    <notification-item
      class="nofiticationList__item"
      v-for="notification in notification.notifications"
      :key="notification.id"
      :notification="notification"
    />
  </transition-group>
</template>

<script>
import { mapState } from "vuex";
import notificationItem from "@/components/notification/NotificationItem.vue";

export default {
  components: {
    notificationItem
  },
  computed: {
    ...mapState(["notification"])
  }
};
</script>

<style lang="scss">
@import "@/scss/abstracts/_variables.scss";
@import "@/scss/abstracts/_functions.scss";

.nofiticationList {
  width: 25em;
  position: absolute;
  right: 0;
  bottom: 0;
  &__item {
    margin: 0.5em;
    color: col(success, dark);
    background-color: col(success, light);
    border-left: 4px solid col(success);
  }
}
</style>
