<template>
  <div class="courseselected">
    <el-table
      border
      :data="tableData.filter((item) => item.status == 1)"
      style="width: 100%"
    >
      <el-table-column label="课程名称" prop="name"> </el-table-column>
      <el-table-column label="课程介绍" prop="descript"> </el-table-column>
      <el-table-column label="课程学分" prop="point"> </el-table-column>
      <el-table-column label="授课教师" prop="teacher"> </el-table-column>
      <el-table-column label="上课时段" prop="time"> </el-table-column>
      <el-table-column label="上课地点" prop="position"> </el-table-column>
      <el-table-column align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="success"
            :disabled="scope.row.status == 1"
            >已选课</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  beforeMount() {
    this.tableData = JSON.parse(localStorage.getItem("tableData"));
    console.log(typeof this.tableData);
  },
};
</script>

<style lang="scss" scoped>
.courseselected {
  padding: 20px;
}
</style>
