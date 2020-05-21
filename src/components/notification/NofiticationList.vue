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
    notificationItem
  },
  computed: {
    ...mapState(["notification"])
  }
};
</script>

<style></style>
