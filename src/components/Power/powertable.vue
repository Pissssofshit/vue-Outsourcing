<template>
  <div class="base">
    <div class="rightname">{{rightname}}</div>
    <div class="rightdesp">{{rightdesp}}</div>
    <div class="e">
       <el-table
       class="powertable"
    :data="ownThePower"
    style="width: 100%"
     @cell-click="deletesomeone">
    <el-table-column
      label="拥有此操作域权限的成员"
      
      >
      <template slot-scope="scope">
        <div class="role">{{scope.row.role}}</div>
      </template>
    </el-table-column>
    <el-table-column  width="100">
      <template slot-scope="scope">
       <div class="el-icon-close"></div>
      </template>
    </el-table-column>
  </el-table>
  <div class="add">
    <el-dropdown @command="handleCommand" :hide-on-click=true> 
                <input  v-model="searchword" placeholder="搜索角色、用户组、部门、成员">
              <el-dropdown-menu slot="dropdown">
                <div v-for="(item, index) in tableData" :key="index">
                  <el-dropdown-item :divided=true :disabled=true v-if="item.type===0">
                  <div  class="dropdown-item dropdown-item-head">{{item.content}}</div>
                </el-dropdown-item>
                <el-dropdown-item :command="index" v-else >
                  <div  class="dropdown-item">{{item.content}}</div>
                </el-dropdown-item>
                </div>
              </el-dropdown-menu>
    </el-dropdown>
  </div>
    </div>
     
  </div> 
</template>
  <style>
          .powertable th{
            background:#f8f8f8 !important;
            /* font-size: large; */
           }
    </style>
<style scoped>
li{
  padding:0px;
}
.rightdesp{
  text-align: start;
  font-size: 14px;
  color:#909090;
}
.rightname{
  text-align: start;
  font-size: 18px;
}
.base{
  margin: 10px;
  margin-top: 30px;
  border-radius: 3px;
}
.e{
  /* margin: 10px; */
  border: 1px solid beige;
}
.role{
  text-align: start;
}
.add{
    width: 100%;
    background-color:white;
    display: flex;
    justify-content: flex-start;
}
input{
    width: 250px;
    margin: 10px;
}
.dropdown-item-head{
  height: 24px;
line-height: 24px;
font-size: 12px;
color: #909090;
background-color: #f8f8f8;

}
.dropdown-item{
    width: 200px;
    text-align: center;
}
</style>

<script>
  export default {
    data() {
      return {
        rightname:'迭代优化',
        rightdesp:'允许团队成员创建、修改、删除当前项目的迭代',
        count:1,
        ownThePower:[
          
        ],
        tableData: [ //suppose to be post
          {content:'项目角色',type:0,in:false},
          {content:'项目经理',type:1,in:true,editable:false},
          {content:'测试人员',type:1,in:true},
          {content:'开发人员',type:1,in:false},
          {content:'项目成员',type:0,in:false},
          {content:'nevermore',type:1,in:false},
          {content:'Yaphets',type:1,in:false},
          {content:'Pisofshit',type:1,in:true}
        ],
        searchword:''
      }
    },
    methods: {
      test(){
        console.log('this is test');
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      deletesomeone(row, column, cell, event){
        // for(var item in row){
        //   console.log(''+item+':'+row[item]);
        // }
        // console.log('im deletesomeone');
        // console.log('the index is'+row.index);
        this.tableData[row.index].in=false;
        if(this.ownThePower.length!=1)
        {
          this.ownThePower.splice(row.thisindex,1);
        }else{
          this.ownThePower=[];
        }
        // console.log(this.ownThePower);
      },
      pushintotable:function(index){
          var o={};
          o.role=this.tableData[index].content;
          o.index=index;
          o.thisindex=this.ownThePower.length;
          this.tableData[index].in=true;
          this.ownThePower.push(o);
      },
      handleCommand:function(command){
        //接受下拉菜单的点击事件，即接受tabledata的数组下标
        console.log(command);
        if(this.tableData[command].in===true)
        {
          console.log("the data is already in the table");
          return;
        }
        else{
          console.log("push this into table");
          this.pushintotable(command);
        }
      }
    },
    created:function(){
      //我在这里做的操作本应是在处理完网络操作之后进行的，即将相应的角色和成员加到相应的数组之中，但是 恩 就这样把
      for(let i=0;i<this.tableData.length;i++){
        if(true===this.tableData[i].in)
        {
          this.pushintotable(i);
        }
      }
    }
  }
</script>