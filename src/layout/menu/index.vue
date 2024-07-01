<template>
  <div>
    <div v-for="(item, index) in menuList" :key="item.path">
      <el-menu-item
        v-if="!item.children && !item.meta.hidden"
        :index="item.path"
        @click="goRoute(item.path)"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
      <el-menu-item
        v-if="
          item.children &&
          item.children.length == 1 &&
          !item.children[0].meta.hidden
        "
        :index="item.children[0].path"
      >
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
      <el-sub-menu
        v-if="item.children && item.children.length > 1"
        :index="item.path"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>
            {{ item.meta.title }}
          </span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["menuList"],
  methods: {
    goRoute(path) {
      this.$router.push({ path });
    },
  },
};
</script>

<style></style>
