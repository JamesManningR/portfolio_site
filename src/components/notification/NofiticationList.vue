<template>
  <ul>
    <notification-iten
      v-for="(notification, index) in notifications"
      :key="index"
      :notification="notification"
    />
  </ul>
</template>

<script>
import { mapState } from "vuex";
import NotificationItem from "@/components/notification/NotificationItem.vue";

export default {
  components: [NotificationItem],
  computed: {
    ...mapState(["notification"])
  }
};
</script>

<style></style>
