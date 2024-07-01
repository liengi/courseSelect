<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo></Logo>
      <el-aside class="scrollbar">
        <el-scrollbar>
          <el-menu
            class="el-menu"
            background-color="#32323a"
            :unique-opened="true"
            :default-active="$route.path"
            text-color="#ffffff"
          >
            <Menu :menuList="menuList"></Menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
    </div>
    <div class="layout_tabbar"><Tabbar></Tabbar></div>

    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script>
import Logo from "./logo/index.vue";
import Menu from "./menu/index.vue";
import Tabbar from "./tabbar/index.vue";
import Main from "./main/index.vue";
export default {
  data() {
    return {
      menuList: [
        {
          path: "/home/courseList",
          meta: {
            title: "课程信息",
          },
        },
        {
          path: "/home/courseselected",
          meta: {
            title: "选课信息",
          },
        },
      ],
    };
  },
  components: {
    Logo,
    Menu,
    Tabbar,
    Main,
  },
};
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: 300px;
    height: 100vh;
    background-color: #32323a;
    transition: all 0.3s;
    .scrollbar {
      height: calc(100vh - $base-menu-logo-height);
      .el-menu{
        border-right: none;
      }
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0;
    left: 300px;
    width: calc(100% - 300px);
    height: 50px;
    background-color: #32323a;
    color: white;
  }
}
</style>
