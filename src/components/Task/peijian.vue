<template>
  <div class="baseff">
      <div>
        <img >
      </div>
      <div class="tf">
          <div class="te important-text">{{firsttext}}</div>
          <div class="te normal-text">{{secondtext}}</div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return{
          imgUrl:'../../../img/123.png'
      }
  },
  props:[
      'firsttext',
      'secondtext',
      'url'
  ]
}
</script>

<style scoped>
.tf{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 10px;
}
.normal-text{
    font-size: 12px;
    font-weight: 500;
    overflow: hidden;
    color: #909090;
}
.important-text{
    line-height: 1.2;
    color: #303030;
    font-size: 15px;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
}
.te{
    width: 80px;
    text-align: start;
}
img{
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: black;
}
.baseff{
    display: flex;
    width: 120px;
    height: 43px;
    padding: 4px;
    border-radius: 30px;
    margin-right: 15px;
}
.baseff:hover{
    background-color: rgb(41, 204, 245);
}
</style>
