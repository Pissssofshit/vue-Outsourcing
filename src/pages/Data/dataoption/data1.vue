<template>
  <div class="notbasewhatcanicall">
    <card1>
      <div slot="card_top">任务增加情况</div>
      <schart slot="card_content" canvasId="canvasId" type="line" width="560px" height="300px" :data="data" :options="options"></schart>
    </card1>
    <card1>
      <div slot="card_top">缺陷状态分布</div>
      <schart slot="card_content" canvasId="canvasId2" type="bar" width="560px" height="300px" :data="data2" :options="options2"></schart>
    </card1>
    <card1>
      <div slot="card_top">任务种类统计</div>
      <schart slot="card_content" canvasId="canvasId3" type="ring" width="560px" height="300px" :data="data3" :options="options3"></schart>
    </card1>
    <card1>
      <div slot="card_top">任务状况统计</div>
      <schart slot="card_content" canvasId="canvasId4" type="pie" width="560px" height="300px" :data="data4"></schart>
    </card1>
  </div>
</template>
<style scoped>
.notbasewhatcanicall {
  flex-wrap: wrap;
  padding-top: 20px;
  /*width: 1500px;*/
  /*height: 800px;*/
  display: flex;
}

</style>
<script>
import Card1 from '../../../components/Card/card1.vue'
import Schart from 'vue-schart';
export default {
  components: {
    Card1,
    Schart
  },
  data() {
    return {
      data4: [
        { name: '完成', value: 1200 },
        { name: '进行中', value: 1222 },
        { name: '失败', value: 1283 }
      ],
      options3: {
        bgColor: '#ffffff', // 默认背景颜色
        title: '', // 图表标题
        titleColor: '#000000', // 图表标题颜色
        titlePosition: 'top', // 图表标题位置: top / bottom
        legendColor: '#000000', // 图例文本颜色
        legendTop: 40, // 图例距离顶部的长度
        colorList: ['#1E9FFF', '#13CE66', '#F7BA2A', '#FF4949', '#72f6ff'], // 环形图颜色列表
        radius: 100, // 环形图外圆半径
        innerRadius: 70 // 环形图内圆半径
      },
      data3: [
        { name: '素材分类整理', value: 1200 },
        { name: '素材筛选', value: 1222 },
        { name: '图片失真修复', value: 1283 },
        { name: '数据化分析', value: 1314 },
        { name: '修图', value: 2314 }
      ],
      options2: {
        padding: 50, // canvas 内边距
        yEqual: 5, // y轴分成5等分
        bgColor: '#ffffff', // 默认背景颜色
        fillColor: '#1E9FFF', // 默认填充颜色
        axisColor: '#666666', // 坐标轴颜色
        contentColor: '#eeeeee', // 内容横线颜色
        title: '', // 图表标题
        titleColor: '#000000', // 图表标题颜色
        titlePosition: 'top' // 图表标题位置: top / bottom
      },
      data2: [
        { name: '测试提交', value: 1141 },
        { name: '挂起', value: 1499 },
        { name: '关闭', value: 2260 },
        { name: '回归通过', value: 1170 },
        { name: '恢复中', value: 970 },
        { name: '通过', value: 1450 }
      ],
      data: [
        { name: '2018-1-1', value: 1200 },
        { name: '2018-1-3', value: 1000 },
        { name: '2018-1-5', value: 900 },
        { name: '2018-2-4', value: 800 },
        { name: '2018-3-1', value: 700 },
        { name: '2018-4-1', value: 300 },

      ],
      options: {
        // title: '任务增加情况'
      }
    }
  }
}

</script>
