<template>
  <div class="courselist">
    <el-dialog
      title="选课"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      :modal="false"
    >
      <span>是否选择这门课程</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleChoose">确 定</el-button>
      </span>
    </el-dialog>
    <el-table
      border
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
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
            v-if="scope.row.status == 0"
            size="mini"
            type="primary"
            @click="handleSelect(scope.$index, scope.row, scope)"
            :disabled="scope.row.status == 1"
            >选课</el-button
          >
          <el-button
            v-else
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
import tableData from "@/utils/courselist.json";
export default {
  data() {
    return {
      dialogVisible: false,
      selectindex: null,
      tableData: null,
      search: "",
    };
  },
  beforeMount() {
    console.log(tableData);
    const storedTableData = localStorage.getItem("tableData");
    if (!storedTableData) {
      this.tableData = tableData;
      localStorage.setItem("tableData", JSON.stringify(tableData));
    } else {
      this.tableData = JSON.parse(storedTableData);
    }
  },

  methods: {
    handleChoose() {
      this.dialogVisible = false;
      this.tableData[this.selectindex].status = 1;
      localStorage.setItem("tableData", JSON.stringify(this.tableData));
    },
    handleSelect(index, row, scope) {
      console.log(scope);
      this.dialogVisible = true;
      this.selectindex = index;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.courselist {
  padding: 20px;
}
</style>
