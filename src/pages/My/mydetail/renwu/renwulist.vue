  <template>
    <el-table
      @row-click="handleclick"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="right"
        label="优先级"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gaikuang"
        label="任务概况"
        width="180">
      </el-table-column>
      <el-table-column
        prop="deadline"
        label="截止日期">
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            right: '紧急',
            deadline: '2016-05-02',
            gaikuang: '这是一首简单的小情歌，唱着人们心中的曲折 我想我很适合 当一个歌颂者'
          },
          {
            right: '紧急',
            deadline: '2016-05-02',
            gaikuang: '这是一首简单的小情歌，唱着人们心中的曲折 我想我很适合 当一个歌颂者'
          },
          {
            right: '紧急',
            deadline: '2016-05-02',
            gaikuang: '这是一首简单的小情歌，唱着人们心中的曲折 我想我很适合 当一个歌颂者'
          }
          ]
        }
      },
      methods:{
        handleclick:function(row,mo, column){
          console.log(row.right)
          this.$store.commit('showRenwu')
        }
      }
      // created: function(){
      //   this.$store.commit('showRenwu')
      // }
    }
  </script>