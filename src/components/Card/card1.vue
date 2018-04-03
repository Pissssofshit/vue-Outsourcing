<template>
  <div class="zuikengwangquegurenshi">
      <div class="card_top">
           <slot name="card_top">
             </slot>
      </div>
      <div class="card_content">
           <slot name="card_content">
             </slot>
      </div>
  </div>
</template>
<style scoped>
.card_top{
    padding: 20px;
    width: 100%;
    height: 50px;
    text-align: start;
    font-size: 15px;
    font-weight: 500;
}
.card_content{
    /*padding: 20px;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /* background-color: black; */
}
.zuikengwangquegurenshi{
    /*width: 40%;*/
    height: 35%;
    min-width: 410px;
    min-height: 380px;
    box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);
    border-radius: 3px;
    background-color: #fff;
    margin-right: 10px;
    margin-bottom: 10px;
}
</style>
