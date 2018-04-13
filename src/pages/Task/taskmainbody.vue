<template>
  <div>
      <basicmainlayout>
          <taskdetail @child-say="additems" :form1="selecttask"></taskdetail>
          <div v-for="item in items">
              <div class="title"><b>{{item[0].row.data}}</b></div>
              <noheadtable :tableData="item">
                  <!-- <ttt></ttt> -->
                </noheadtable>
          </div>
      </basicmainlayout>
  </div>
</template>
<style scoped>
.title{
    text-align: start;
    font-size: 20px;
    font-weight: 500;
}
</style>

<script>
import Ttt from './tttt.vue'
import Basicmainlayout from '../../components/layout/basicmainlayout.vue'
import Taskdetail from '../../components/Task/taskdetail.vue'
import Noheadtable from '../../components/Table/noheadtable.vue'
import Vue from 'vue'
export default {
    methods:{
        additems:function(itemf){
            console.log("this is additems");
            for(var ii in itemf){
                console.log(itemf[ii]);
            }
            var t={};
            Vue.set(t,"row",itemf);
            var a=[t];
            // console.log('a is '+a[0].row[id]);
            this.items.splice(0,0,a)
        }
    },
  components:{
      Basicmainlayout,
      Taskdetail,
      Noheadtable,
      Ttt
  },
  data(){
      return{
          items:[
              
          [
                  {row:{
              id:'#1245',
              commitname:'第一次样本采集',
              logoimg:'../../../static/1.jpg',
              data:'2018-4-7',
              commiter:'pisofshit'
          }},
               {row:{
              id:'#126',
              commitname:'第二次样本采集',
              logoimg:'../../../static/1.jpg',
              data:'2018-4-7',
              commiter:'pisofshit'
          }},
          ],[
                  {row:{
              id:'#312',
              commitname:'图形优化',
              logoimg:'../../../static/2.jpg',
              data:'2018-4-4',
              commiter:'Yamilaw'
          }},
               {row:{
              id:'#612',
              commitname:'素材归类',
              logoimg:'../../../static/3.jpg',
              data:'2018-4-4',
              commiter:'Nevermore'
          }},
          ]
          ],
          selecttask:{
              taskname:"红软外包服务平台 登录权限",
            youxianji:"普通",
            state:"进行中",
            creator:"1412143367@qq.com",
            id:"#1255",
            exo:"1412143367@qq.com",
            project:"红软外包服务平台",
            textarea:"需要在登录的时候进行权限验证",
            data:"2018-04-17",
            role:'myduty'
            }
      }
  }
}
</script>
