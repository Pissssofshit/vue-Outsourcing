<template>
  <div >
    <basiclayout :title=title :data=data></basiclayout>
  </div>
</template>
<script>
import Basiclayout from '../../components/layout/basiclayout.vue'
export default {
  components:{
      Basiclayout
  },
    data(){
        return{
            title: '项目管理',
      data: [
        // 里面设置了按照 命名路由，所以url只需要是router name就ok
        [
          { type: 1, menuname: '任务' },
          { type: 2, menuname: '任务总览', url: '任务总览' },
          { type: 1, menuname: '筛选器' },
          { type: 3, menuname: '我负责的任务', url: '我负责的任务' },
          { type: 3, menuname: '我关注的任务', url: '我关注的任务' },
          { type: 3, menuname: '我的个人仓库', url: '成员个人仓库' }

        ],
        [
          { type: 3, menuname: '报表', url: '报表' },
          { type: 3, menuname: '成员', url: '人员' },
          { type: 3, menuname: '出入职', url: '出入职' },
          { type: 3, menuname: '资料', url: '项目资料' },
          { type: 3, menuname: '设置', url: '项目设置' },
          // {type:3,menuname:'个人',url:'项目个人'},
        ]
      ]
        }
    }
}
</script>
