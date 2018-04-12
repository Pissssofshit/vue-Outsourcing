<template>
  <el-table
    :show-header=false
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
     >
      <template slot-scope="scope">
        <slot name="firstslot"></slot>
      </template>
    </el-table-column>
    <el-table-column
      label="日期"
      >
      <template slot-scope="scope">
        <slot name="firstslot"></slot>
      </template>
    </el-table-column>
    </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>