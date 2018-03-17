<template>
  <div class="that">
      <div class="base">
        <el-row>
          <el-col span=5>
          <div>
              <el-input v-model="proname" placeholder="请输入项目名称"></el-input>
          </div>
        </el-col>
        </el-row>
        <el-row>
          <el-col span=10>
          <div>
              <el-input type="textarea" v-model="prodesp" placeholder="请输入项目概述"></el-input>
</div>
        </el-col>
        </el-row>
        <el-row type="flex" justify="baseline">
  
              <el-col span=2>
              项目安全等级:
              </el-col>
              <el-col span=2>
              <el-dropdown trigger="click" @command="handleCommand2">
  <el-tag>普通</el-tag>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="普通">普通</el-dropdown-item>
    <el-dropdown-item command="重要">重要</el-dropdown-item>
    <el-dropdown-item command="机密">机密</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</el-col>

          
        </el-row>
          
      </div>
    <div class="lichengbei">
          <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="阶段名称"
      width="180"
    >
   <template slot-scope="scope">
        <el-input v-model="scope.row.name" placeholder="请输入阶段名称" :disabled="scope.row.editable"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      label="期望完成时间"
      width="180">
      <template slot-scope="scope">
        <el-date-picker
        v-model="scope.row.value"
      type="date"
      placeholder="选择日期"
      :disabled="scope.row.editable" >
    </el-date-picker>
      </template>
      
    </el-table-column>
    <el-table-column
      label="里程碑文件"
      width="300">
      <template slot-scope="scope">
        <el-input  :value="scope.row.name" placeholder="请输入里程碑文件"
        :disabled="scope.row.editable"></el-input>
      </template>
    </el-table-column>
    <el-table-column

      label="操作"
      width="200"
    >
      <template slot-scope="scope">
       <el-button
          size="mini"
          @click="handleEdit(scope,scope.$index, scope.row)">
          <div v-if=scope.row.editable>编辑</div>
          <div v-else>保存</div> </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   <el-row>
     <el-col span=2>
    <el-button @click="addnode()">添加节点</el-button></el-col>
   </el-row>
    </div>
    <div>
      <el-row>
        <el-col span=5>
        <el-input v-model="input" placeholder="邀请成员加入"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col span=2>
          <div type="primary" class="el-icon-circle-plus icon"></div>
        </el-col>
      </el-row>
        <ul>
            <li class="member">成员2</li>
            <li class="member">成员3</li>
            <li class="member">成员4</li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
      handleEdit:function(scope,index,row){
          this.tableData[index].editable=false
          if(this.buttontai==="编辑"){
            this.buttontai="保存"
          }else{
            this.buttontai="编辑"
            this.tableData[index].editable=true
          }
        
      },
      handleDelete:function(index,row){
          console.log('index '+index+'row '+row)
          this.tableData.splice(index,1)
        },
      addnode:function(){
        console.log('sss')
        var object={
          editable:false,
          name:'',
          value:'',}
         this.tableData.push(object)
      }
  },
  data(){
      return{
        proname:'',
        prodesp:'',
        buttontai:'编辑',   
          input:'',
          tableData: [{
            name:'',
            value: '2018-09-30',
            editable: true
        },
        {
          name:'1234',
          editable: true
        }
        ]
      }
  }
}
//半城烟沙 兵临城下
//row row row 每一列数据（一行）
</script>
<style scoped>
.member{
  margin-left: 5px;
}
ul{
  display: flex;
}
.that{
  width:60%;
  margin: 0 auto;
}
.el-icon-circle-plus{
    color:blue;
    font-size: 30px;
}
.el-row{
  margin-bottom: 20px;
}
</style>
