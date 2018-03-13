<template>
  <div >
    <el-card class="project" :style="realimg">
      {{name}}
      <slot></slot>
    </el-card>
  </div>
</template>
<style>
.el-card__body {
  position: relative;
  top: 40%;
  border: 0px;
  padding: 0px;
}

</style>
<script>
export default {
  data() {
    return {
      realimg: 'sss'
    }
  },
   methods: {
  },
  props: [
    'img',
    'name',
    'proid'
  ],
  created() {
    this.realimg = 'background:' + 'url(' + this.img + ')' + ' no-repeat'
  }
}

</script>
<style scoped>
.el-card {
  width: 30vh;
  height: 20vh;
  overflow: hidden;
  margin: 2vh;
}

</style>
