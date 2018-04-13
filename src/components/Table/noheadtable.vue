<template>
  <el-table
    :show-header=false
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="100%"
      prop="row"
     >
      <template slot-scope="scope">
        <!-- <slot　></slot> -->
        <!-- <slot>{{scope.row.row}}</slot> -->
        <!-- <div>{{scope.row.row}}</div> -->
        <tttt :form1="scope.row.row"></tttt>
      </template>
    </el-table-column>
    <!-- <el-table-column
      label="日期"
      >
      <template slot-scope="scope">
        <slot name="firstslot"></slot>
      </template>
    </el-table-column> -->
    </el-table>
</template>
<style scoped>
/deep/ .el-table__body{
    width: 100% !important;
}
</style>

<script>
import Tttt from '../../pages/Task/tttt.vue'
  export default {
    data() {
      return {
      }
    },
    components:{
      Tttt
    },
    // watch:{
    //     test: function(){
    //         console.log(';ssss');
    //         for(item in test){
    //             console.log(""+item+test[item]);
    //         }
    //     }
    // },
    props:[
        'tableData'
        ],
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