<template>
  <div class="rightbase">
      <slot></slot>
    </div>
</template>

<style scoped>

.rightbase{
    width: 1200px;
    height: 1000px;
    /* height: 100%; */
    background-color: white;
    box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);
    margin-top: 15px;
    padding: 20px;
}
</style>