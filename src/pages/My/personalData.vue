<template>
  <div class="base">
    <el-container>
      <el-header height="55px">
        <el-row>
          <div class="position">个人资料</div>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <Collapse v-model="value1">
            <Panel name="1">
              合同图片
              <div slot="content">
                <div class="demo-upload-list" v-for="item in uploadList">
                  <template v-if="item.status === 'finished'">
                    <img :src="item.url">
                    <div class="demo-upload-list-cover">
                      <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
                      <!-- <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon> -->
                    </div>
                  </template>
                  <template v-else>
                    <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                  </template>
                </div>
                <Upload ref="upload" :show-upload-list="false" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="2048" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" action="//jsonplaceholder.typicode.com/posts/" style="display: inline-block;width:200px;">
                  <div style="width: 200px;height:200px;line-height: 220px;">
                    <Icon type="camera" size="50"></Icon>
                  </div>
                </Upload>
                <Modal title="View Image" v-model="visible">
                  <img :src="imgUrl" v-if="visible" style="width: 100%">
                </Modal>
              </div>
            </Panel>
            <Panel name="2">
              文件
              <div slot="content">
                <el-table :data="normalData[0]" style="width: 100% ;margin-top:5px">
                  <el-table-column label="资料名" align="left">
                    <template slot-scope="scope">
                      <i v-if="scope.row.type==='文档'" class="el-icon-document"></i>
                      <Icon v-if="scope.row.type==='文件夹'" type="folder"></Icon>
                      <i v-if="scope.row.type==='图片'" class="el-icon-picture"></i>
                      <Icon v-if="scope.row.type==='视频'" type="social-youtube"></Icon>
                      <span @click="HandleFolder( scope.row.needpower)" style="margin-left: 0px;cursor:pointer">{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="上传人" align="center" prop="userName">
                  </el-table-column>
                  <el-table-column label="更新时间" align="center" prop="updateTime">
                  </el-table-column>
                  <el-table-column label="下载" align="center" width="100px">
                    <template slot-scope="scope">
                      <div>
                        <a href="../../../../static/help.png" :download="downloadName" @click='HandleDownload(scope.row.name)'>
                      <i v-if="scope.row.type!='文件夹'" class="el-icon-download" style="cursor:pointer"></i>
                      </a>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </Panel>
          </Collapse>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: null,
      downloadName: '123.png',
      value1: '1',
      defaultList: [{
          'name': 'a42bdcc1178e62b4694c830f028db5c0',
          'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523616539548&di=2a099c310f79fce07b5cc1e1203fed58&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dbf79cdcc0bd79123e0b59c70980475b4%2F0b7b02087bf40ad117205a27502c11dfa8ecce2a.jpg'
        },
        {
          'name': 'bc7521e033abdd1e92222d733590f104',
          'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523616539548&di=809b7c0dd2ad8f0a43547cd95e7386fd&imgtype=0&src=http%3A%2F%2Fdocs.ebdoor.com%2FImage%2FCompanyCertificate%2F10%2F101030.jpg'
        },
        {
          'name': 'bc7521e033abdd1e92222d733590f104',
          'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523616539547&di=fc957d51bba9184fcfe2773ad2ab6290&imgtype=0&src=http%3A%2F%2Fwww.hngp.gov.cn%2Fwebfile%2Fshangqiu%2Frootimages%2F2015%2F12%2F23%2F1450833075547785-1450833075557216.jpg'
        },
        {
          'name': 'bc7521e033abdd1e92222d733590f104',
          'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523616539546&di=a923ba673a5de5738bbebd716abb32ad&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D25e5807c28dda3cc0be4b82831eb3905%2F674bad096b63f62405b320e08144ebf81b4ca33f.jpg'
        },
      
      ],
      imgName: '',
      visible: false,
      uploadList: [],
      normalData: [
        [
          { name: "person#001.jpg", userName: "tom", updateTime: "2018-03-29", type: '图片' },
          { name: "person#002.jpg", userName: "tom", updateTime: "2018-03-29", type: '图片' },
          { name: "person#003.jpg", userName: "tom", updateTime: "2018-03-29", type: '图片' },
          { name: "person#004.jpg", userName: "tom", updateTime: "2018-03-29", type: '图片' },
          { name: "person#005.jpg", userName: "tom", updateTime: "2018-03-29", type: '图片' },
          { name: "person#006.jpg", userName: "tom", updateTime: "2018-03-29", type: '图片' },
          { name: "识别过程.mp4", userName: "tom", updateTime: "2018-03-29", type: '视频' },
        ],
      ],
    }
  },
  watch: {

  },
  created() {

  },
  methods: {
    HandleDownload(name) {
      this.downloadName = name;
    },
    handleView(url) {
      this.imgUrl = url
      // this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess(res, file) {
      file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
      file.name = '7eb99afb9d5f317c912f08b5212fd69a';
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: 'File  ' + file.name + ' is too large, no more than 2M.'
      });
    },
    handleBeforeUpload() {
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: 'Up to five pictures can be uploaded.'
        });
      }
      return check;
    }
  },
  mounted() {
    this.uploadList = this.$refs.upload.fileList;
  }
}

</script>
<style scoped>
.demo-upload-list {
  display: inline-block;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  margin-right: 4px;
}

.demo-upload-list img {
  width: 100%;
  height: 100%;
}

.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .6);
}

.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}

.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  /*margin: 0 75px;*/
  margin-top: 75px;
}

.project-more-content {
  float: left;
}

.project-more-action {
  padding-top: 10px;
  vertical-align: middle;
  float: right;
}

.more {
  margin-top: 10px;
  /*width: 100%;*/
}


.forinput {
  padding-bottom: 10px;
}

.forbutton {
  margin-top: 5px;
  float: left;
}

p {
  float: left;
  font-size: 16px;
  margin-left: 5px;
  margin-bottom: 5px;
}

.base {
  box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);
  margin: 10px;
  /*min-width:1200px;*/
}

.el-row {
  background-color: white;
  border-bottom: 1px solid #dedede;
}

.position {
  /* min-height: 40px; */
  height: 44px;
  font-size: 25px;
  text-align: start;
  margin-top: 10px;
  margin-left: 15px;
}

.el-container {
  height: 100%;
  min-height: 1000px;
  padding-top: 0px;
}

.el-main {
  padding: 10px;
  background-color: white;
}

.el-header {
  padding: 0px;
}

</style>
