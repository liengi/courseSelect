<template>
  <div class="main_container"><router-view></router-view></div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {};
  },
};
</script>

<style scoped>
.main_container {
  width: calc(100% - 300px);
  height: calc(100vh - 50px);
  overflow: auto;
  position: fixed;
  top: 50px;
  right: 0;
}
</style>
