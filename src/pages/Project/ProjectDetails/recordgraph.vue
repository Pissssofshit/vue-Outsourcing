<template>
<div>
   <schart :canvasId="canvasId"
			:type="type"
			:width="width"
			:height="height"
			:data="data"
			:options="options"
		></schart>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="任务名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="content"
      label="任务简介"
      width="300">
    </el-table-column>
    <el-table-column
      prop="finishpercent"
      label="完成度"
      width="100"
    >
      <template slot-scope="scope">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="80"></el-progress>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>
<style scoped>

</style>

<script>
import Schart from 'vue-schart';
  export default {
    data() {
      return {
        canvasId: 'myCanvas',
			type: 'pie',
			width: 500,
			height: 400,
          data : [
    {name:'完成', value:1200},
    {name:'进行中', value:1222},
    {name:'失败', value:1283}
],options: {
				title: '任务完成情况'
			},
        tableData: [{
          date: '2016-05-02',
          name: 'xxxxxx',
          content: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
          finishpercent:80
        },
        {
          date: '2016-05-02',
          name: 'xxxxxx',
          content: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
          finishpercent:80
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
