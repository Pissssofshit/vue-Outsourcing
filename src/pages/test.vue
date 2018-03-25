<template>
  <vue-event-calendar :events="demoEvents">
      <!-- <template scope="props">
        <div v-for="(event, index) in props.showEvents" class="event-item"> -->
          <!-- 这里拿到的是传入的单个event所有数据 -->
          <!-- {{event}} -->
        <!-- </div>
      </template> -->
    </vue-event-calendar>
</template>

<script>
export default {
  data () {
    return {
      demoEvents: [{
        date: '2016/12/15',
        title: 'eat',
        desc: 'longlonglong description'
      },{
        date: '2016/11/12',
        title: 'this is a title'
      }]
    }
  }
}
</script>
