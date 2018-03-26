<template>
<div class="that">
   <div class="graphs">
     <div class="graph">
     <schart :canvasId="canvasId"
			:type="type"
			:width="width"
			:height="height"
			:data="data"
			:options="options"
		></schart>
     <div class="block">
    <!-- <el-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2">
    </el-date-picker> -->
  </div>
   </div>
   <div class="graph">
     <schart :canvasId="canvasId2"
			type="line"
			:width="width"
			:height="height"
			:data="data2"
      :options="options2"
		></schart>
     <div class="block">
    <!-- <el-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2">
    </el-date-picker> -->
  </div>
   </div>
   </div>
   
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      sortable
     
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column
      prop="id"
      label="任务编号"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="任务名称"
      >
    </el-table-column>
    <el-table-column
      prop="content"
      label="任务简介"
      width="500">
    </el-table-column>
    <el-table-column
      prop="finishpercent"
      label="完成度"
      width="100"
    >
      <template slot-scope="scope">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="scope.row.finishpercent"></el-progress>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>
<style>

.cell{
  text-align: start;
}
</style>

<style scoped>
.that{
  width:100%;
  margin: 0 auto;
}
.graphs{
  display: flex;
  width: 100%;
}
.graph{
  width: 50%;
}

</style>
<style>
canvas{
  box-shadow: 0px 0px 5px gray;
}
</style>

<script>
import Schart from 'vue-schart';
  export default {
    data() {
      return {
            options2: {

			  title: '任务增量情况',
        padding: 50,                    // canvas 内边距
        yEqual: 5,                      // y轴分成5等分
        bgColor: '#ffffff',             // 默认背景颜色
        fillColor: '#1E9FFF',           // 默认填充颜色
        axisColor: '#666666',           // 坐标轴颜色
        contentColor: '#eeeeee',        // 内容横线颜色
        title: '',                      // 图表标题
        titleColor: '#000000',          // 图表标题颜色
        titlePosition: 'top'            // 图表标题位置: top / bottom
    },
        value7:'',
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        canvasId: 'myCanvas',
        canvasId2: 'myCanvas2',
			type: 'pie',
			width: 500,
			height: 400,
      data2:[
        {name:'1月',value:'100'},
        {name:'2月',value:'200'},
        {name:'3月',value:'300'},
        {name:'4月',value:'400'},
        {name:'5月',value:'300'},
        {name:'6月',value:'200'},
        {name:'7月',value:'100'}
      ],
          data : [
    {name:'完成', value:1200},
    {name:'进行中', value:1222},
    {name:'失败', value:1283}
    ],options: {
				title: '任务完成情况'
			},
        tableData: [{
          date: '2016-05-02',
          id:'123',
          name: 'xxxxxx',
          content: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
          finishpercent:80
        },
        {
          id:'234',
          date: '2016-05-02',
          name: 'xxxxxx',
          content: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
          finishpercent:100
        },
        ]
      }
    },
    components:{
        Schart
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    },
    created: function(){
        console.log('created function')
        new sChart('canvas', 'pie', this.data, {
        title: '某商店各商品年度销量',
        bgColor: '#829dca',
        titleColor: '#ffffff',
        legendColor: '#ffffff'
    });
    }
  }
      
</script>
