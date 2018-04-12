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
            title: '账号信息',
      data: [
        [{ type: 1, menuname: '个人信息' ,url:'个人信息'},
          { type: 2, menuname: '账户信息', url: 'main' },
          { type: 3, menuname: '个人文件', url: '个人文件' }
        ]
      ]
        }
    }
}
</script>
