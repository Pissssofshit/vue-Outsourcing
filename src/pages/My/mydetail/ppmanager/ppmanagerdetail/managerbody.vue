<template>
  <div>
      <el-row>
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="xingzhi"
        label="人员姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="content"
        label="职务"
        width="180">
      </el-table-column>
      <el-table-column
        prop="worker"
        label="参与项目">
      </el-table-column>
      <el-table-column
        prop="state"
        label="工作量">
      </el-table-column>
      <el-table-column
        prop="cost"
        label="等等">
      </el-table-column>
    </el-table>
      </el-row>
      <el-row>
      </el-row>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          tableData: [{
            xingzhi: '采集',
            content: '采集个啥呢',
            worker: 'Ｈｘｓ',
            state:'完成',
            cost:'１２天'
          }
          ]
        }
      }
    }
  </script>
