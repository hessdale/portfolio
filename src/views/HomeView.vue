<template>
  <div>
    <home-info></home-info>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeInfo from "@/components/HomeInfo.vue";

export default {
  name: "HomeView",
  components: {
    HomeInfo,
  },
};
</script>
