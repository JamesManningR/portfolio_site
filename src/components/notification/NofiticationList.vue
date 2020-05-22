<template>
  <ul class="nofiticationList">
    <notification-item
      class="nofiticationList__item"
      v-for="(notification, index) in notification.notifications"
      :key="index"
      :notification="notification"
    />
  </ul>
</template>

<script>
import { mapState } from "vuex";
import notificationItem from "@/components/notification/NotificationItem.vue";

export default {
  components: {
    notificationItem,
  },
  computed: {
    ...mapState(["notification"]),
  },
};
</script>

<style lang="scss">
@import '@/scss/abstracts/_variables.scss';
@import '@/scss/abstracts/_functions.scss';

.nofiticationList {
	width: 25em;
	position: absolute;
	right: 0.5em;
	bottom: 0.5em;
	&__item {
		color: col(success, dark);
		background-color: col(success, light);
		border-left: 2px solid col(success);
	}
}

</style>
