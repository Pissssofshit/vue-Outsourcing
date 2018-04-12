<template>
  <div>
      <basicmainlayout>
          <taskdetail form1="{}"></taskdetail>
          <noheadtable>
              <ttt slot="firstslot"></ttt>
          </noheadtable>
      </basicmainlayout>
  </div>
</template>

<script>
import Ttt from './tttt.vue'
import Basicmainlayout from '../../components/layout/basicmainlayout.vue'
import Taskdetail from '../../components/Task/taskdetail.vue'
import Noheadtable from '../../components/Table/noheadtable.vue'
export default {
  components:{
      Basicmainlayout,
      Taskdetail,
      Noheadtable,
      Ttt
  }
}
</script>
