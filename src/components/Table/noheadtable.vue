<template>
  <el-table
    :show-header=false
    :data="tableData"
    style="width: 100%"
    >
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
    <el-table-column
      width="8%"
      
    >
      <template slot-scope="scope">
        <el-button  type="primary"
    @click="openFullScreen"
    v-loading.fullscreen.lock="fullscreenLoading">确认</el-button>
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
.el-button{
  text-align: start;
}
</style>

<script>
import Tttt from '../../pages/Task/tttt.vue'
  export default {
    data() {
      return {
        fullscreenLoading: false
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
      openFullScreen() {
         const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 800);
      },
      stst(){
        this.openFullScreen();
      
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>