

<template>
    <el-row>
        <el-col :span="12">
            <el-input class="uploadFileInput"
                :disabled="true"
                v-model="sFileName">
                <template slot="prepend">Upload File's Name</template>
            </el-input>
        </el-col>
        <el-col :span="12">
            <el-upload
                id="uploadFile"
                class="uploadButtonDiv"
                action="https://jsonplaceholder.typicode.com/posts/"
                :multiple="false"
                :auto-upload="false"
                ref="upload"
                :show-file-list="false"
                :on-change="handleFileUploaded"
                :data="oFileData"
                :http-request="handleHttpRequest">
                <el-button slot="trigger" type="primary">Browser File</el-button>
                <el-button style="margin-left: 10px;" type="success" @click="submitUpload">upload to server</el-button>
                <!-- <el-button type="primary">Browser File</el-button> -->
            </el-upload>
        </el-col>
    </el-row>
</template>

<script>
import Base from "@/Base.js";

export default {
  name: "UploadWithInput",
  data: function() {
    return {
      sFileName: "",
      oFileData: {}
    };
  },
  methods: {
    handleFileUploaded: function(oFileInfo) {
      this.sFileName = oFileInfo.name;
    },

    handleHttpRequest: function(options) {
      if (options.file.size / 1000 > 500) {
        Base.compressImage(options.file, this.callBackAPI);
      }
    },

    submitUpload: function() {
      this.$refs.upload.submit();
    },

    callBackAPI: function(compressedURL) {
      //Add your own logic here to call back-end API by passing compressed url
      console.log(compressedURL);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.uploadFileInput {
  vertical-align: top;
}

.uploadButtonDiv {
  text-align: left;
}
</style>
