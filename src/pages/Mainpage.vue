<template>
  <div>
    <component :is="headis" @changeHEAD="changethehead">
    </component>
    <component :is="bodyis" @changeBODY="changethebody">
    </component>
  </div>
</template>
<script>
import Bodymain from '../components/body/bodymain.vue'
import Bodyproject from '../components/body/bodyproject.vue'
import Header_ from '../components/head/header_.vue'
export default {
  data() {
    return{
      headis: 'Header_',
      bodyis: 'Bodymain'
    }
  },
  components: {
    Bodymain,
    Bodyproject,
    Header_
  },
  methods:{
    changethehead: function(component){
      console.log(component)
    },
    changethebody: function(componentname,proid){
      console.log('the body content will change to'+componentname)
      this.bodyis=componentname
    }
  }
}
</script>
