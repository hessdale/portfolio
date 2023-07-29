<template>
  <div>
    <home-info></home-info>
    <footer-info></footer-info>
  </div>
</template>

<script>
import HomeInfo from "@/components/HomeInfo.vue";
import FooterInfo from "@/components/FooterInfo.vue";
export default {
  name: "HomeView",
  components: {
    HomeInfo,
    FooterInfo,
  },
};
</script>
