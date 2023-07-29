<template>
  <div>
    <projects-info></projects-info>
    <footer-info></footer-info>
  </div>
</template>

<script>
import ProjectsInfo from "@/components/ProjectsInfo.vue";
import FooterInfo from "@/components/FooterInfo.vue";
export default {
  components: {
    ProjectsInfo,
    FooterInfo,
  },
};
</script>

<style scoped>
</style>