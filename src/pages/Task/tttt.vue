<template>
  <div>
      <el-row><b><router-link to="">{{form.id}}</router-link>{{form.commitname}}</b></el-row>
      <el-row>
          <el-col :span="2" class="sf">
              <img　:src="form.logoimg">
              <div><b>{{form.commiter}}</b></div>
          </el-col>
          <el-col class="ssf" width="100%">{{showdata}}</el-col>
      </el-row>
  </div>
</template>
<script>
export default {
  data(){
      return{
          showdata:'',
          form:{
              id:'12',
              commitname:'sdsd',
              logoimg:'sss',
              data:'2017-4-4',
              commiter:'sfsf'
          }
      }
  },
  props:[
        'form1'
  ],
  watch:{
      form1(value){
          this.form="";
          this.form=value;
          for(var item in this.form){
              console.log('ssss');
              console.log(this.form[item]);
          }
          this.test();
      }
  },
  methods:{
      getNowFormatDate:function() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            // month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            // strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },
      test:function(){
        var day1 = this.getNowFormatDate();
        var day2 = this.form.data;
        console.log('day2='+day2);
        // var tmpday1=new Date(day1);
        // var tmpday2=new Date(day2);
        // this.test2(parseInt(day1)-parseInt(day2));
        var tday1 = new Date(""+day1);
        var tday2 = new Date(""+day2);
    // console.log("day1"+day1);
    //     console.log("day2"+day2);
        this.test2(parseInt((tday1 - tday2) / (1000 * 60 * 60 * 24)))
      },
      test2: function(day){
          console.log('day='+day);
          if(day <30){

              this.showdata=""+day+"天前";
          }else if(day<365){
              this.showdata=""+parseInt(day/30)+"月前";
          }else{
              this.showdata=""+parseInt(day/365)+"年前";
          }
          console.log('showdata'+this.showdata)
      }
  },
  created(){
      
  },
  mounted(){
      this.form=this.form1;
  }
}
</script>

<style scoped>
.sf{
    display: flex;
}
.ssf{
    font-weight: 100;
    font-size: 14px;
}
*{
    text-align: start;
}
.el-row{
    display: flex !important;
    align-items: baseline;
    justify-content: flex-start;
}
img{
    width: 20px;
    height: 20px;
}
</style>

