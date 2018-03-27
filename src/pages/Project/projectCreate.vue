<template>
  <div>
    <div class="create_page">
      <div class="container-header">
        <div class="title">新建项目</div>
      </div>
      <el-steps :active="active" finish-status="success" simple style="margin-top: 10px">
        <el-step title="项目内容"></el-step>
        <el-step title="邀请成员"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <el-tabs v-model="activeName" style="height: 540px">
        <el-tab-pane :disabled="true" label="" name="first" style="height: 490px">
          <div class="name">
            <div class="name_title">项目名称</div>
            <el-input class="name_input" v-model="name" placeholder="请输入内容（必填）"></el-input>
          </div>
          <div class="description">
            <div class="description_title">项目描述</div>
            <el-input class="description_input" v-model="description" placeholder="请输入内容（必填）"></el-input>
          </div>
          <div class="file">
            <div class="file_title">文件上传<span>上传100KB以上文件容易失败，请多次尝试或压缩</span></div>
            <el-upload :headers=myheaders class="file_upload" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :file-list="upFileList" :on-success="updateSuccess">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
          <div class="next">
            <el-button>返回</el-button>
            <el-button type="primary" @click="next()" :disabled="nextState">下一步</el-button>
          </div>
          <p>{{ifnext}}</p>
        </el-tab-pane>
        <el-tab-pane :disabled="true" label="" name="second" style="height: 490px">
          <div class="second">
            <div class="selectPerson">
              <el-autocomplete style="width:280px" class="inline-input" v-model="addPerson" :fetch-suggestions="querySearch" placeholder="输入昵称查找成员" @select="handleSelect">
                <template slot-scope="props">
                  <span class="">{{ props.item.userId}}</span>
                </template>
              </el-autocomplete>
              <span class="second_description">输入关键字，点击即可添加 </span>
            </div>
            <el-table :data="myStaff" max-height="500" style="width: 100%" :border="false" stripe>
              <el-table-column type="index" width="50">
              </el-table-column>
              <el-table-column align="left" prop="userId" label="用户名" width="600px">
              </el-table-column>
              <el-table-column align="left" prop="userEmail" label="邮箱">
              </el-table-column>
            </el-table>
            <div class="next">
              <el-button>上一步</el-button>
              <el-button type="primary" @click="next()">下一步</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :disabled="true" label="" name="third" style="height: 490px">
          <i class="el-icon-circle-check-outline"></i>
          <br></br>
          <span class="third_context">创建成功</span>
          <br></br>
          <router-link :to="{name: '项目详情'}">
            <span class="third_toDetails">点击查看</span>
          </router-link>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import upfileLogo from '../../assets/pics/upfile.png'
export default {
  data() {
    return {
      myheaders: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      name: '',
      description: '',
      active: 1,
      activeName: 'first',
      nextState: true,
      upFileList: [{
        name: 'food.jpg',
        url: upfileLogo
      }],
      myStaff: [{
          userId: 'Georege',
          userEmail: 'Georege@gmail.com'
        },
        {
          userId: 'spongebob',
          userEmail: 'spongebob@gmail.com'
        },
      ],
      addPerson: '',
      candidate: [
        { "userId": "Mr.huang", "userEmail": "huang@163.com" },
        { "userId": "Mr.feng", "userEmail": "feng@163.com" },
        { "userId": "Mr.chen", "userEmail": "chen@163.com" },
      ],
    }
  },
  components: {},
  created: function() {},
  computed: {
    ifnext() {
      if ((this.name.length > 0) && (this.description.length > 0)) {
        this.nextState = false
      } else { this.nextState = true }
    },
  },
  methods: {
    ...mapActions(['IntoProjectDetailsAction']),
    handlePictureCardPreview(file) {
      console.log(file)
    },
    handleRemove() {

    },
    next() {
      this.active++;
      if (this.activeName === "first") {
        this.activeName = "second"
      } else if (this.activeName === "second") {
        this.activeName = "third"
      }
    },
    querySearch(queryString, cb) {
      var candidate = this.candidate;
      var results = queryString ? candidate.filter(this.createFilter(queryString)) : candidate;
      // 调用 callback 返回建议列表的数据

      if (typeof(queryString) != undefined && queryString.length > 0) {
        cb(results);
      }

    },
    createFilter(queryString) {
      // &&(this.myStaff.find(function(x) {return x.userId == candidate.userId;}) != undefined)
      return (candidate) => {

        return (candidate.userId.toLowerCase().indexOf(queryString.toLowerCase()) === 0 && !this.findItem(candidate.userId));
      };
    },
    handleSelect(item) {
      let newPerson = {
        userId: item.userId,
        userEmail: item.userEmail
      }
      this.myStaff.push(newPerson)

      // console.log(item)
    },
    findItem(userId) {
      for (var i = this.myStaff.length - 1; i >= 0; i--) {
        if (this.myStaff[i].userId === userId) {
          return true
        }
      }
      return false
    },
    updateSuccess(response, file, fileList) {
      // console.log(response)
      // console.log(file)
      // console.log(fileList)
      let fileType = file.name.split('.')[file.name.split('.').length - 1]
      // console.log(fileType)
      let img = ['jpg', 'jpeg', 'png'];
      if (fileType != 'jpg' && fileType != 'png' && fileType != 'jpeg') { file.url = upfileLogo }
      this.upFileList = fileList

      // console.log(this.upFileList)
    }
  }
}

</script>
<style scoped>
.file_title span {
  margin-left: 10px;
  font-size: 12px;
  color: rgb(176, 190, 197);
}

.third_toDetails {
  font-size: 16px;
}

.third_context {
  font-size: 30px;
  font-weight: bold;
}

.el-icon-circle-check-outline {
  font-size: 80px;
  color: green;
  margin-top: 40px;
}

.second_description {
  font-size: 15px;
  padding-left: 20px;
}

.second .selectPerson {
  text-align: left;
  /*display: flex;*/
}

.second {
  margin-left: 25px;
  margin-right: 25px;
}

.next {
  position: absolute;
  right: 25px;
  bottom: 25px;
}

.name {
  margin-left: 25px;
  margin-right: 25px;
}

.name .name_title {
  text-align: left;
  font-size: 20px;
}

.name .name_input {
  margin-top: 10px;
  margin-bottom: 10px;
}

.description {
  margin-left: 25px;
  margin-right: 25px;
}

.description .description_title {
  text-align: left;
  font-size: 20px;
}

.description .description_input {
  margin-top: 10px;
  margin-bottom: 10px;
}

.file {
  margin-left: 25px;
  margin-right: 25px;
  text-align: left;
}

.file .file_title {
  text-align: left;
  font-size: 20px;
}

.file .file_upload {
  margin-top: 10px;
  margin-bottom: 10px;
}

.create_page {
  margin-left: 10%;
  width: 80%;
  height: 670px;
  background-color: white;
}

.container-header {
  width: 100%;
  padding-left: 20px;
  padding-top: 20px;
  /*padding-right: 2vh;*/
  padding-bottom: 0px;
  /*border-bottom: 1px solid #dedede;*/
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}

.title {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  font-size: 25px;
  font-weight: 500;
  text-align: left;
}

</style>
