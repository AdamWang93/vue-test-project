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
                :show-file-list="false"
                :on-change="handleFileUploaded">
                <el-button slot="trigger" type="primary">Browser File</el-button>
                <el-button style="margin-left: 10px;" type="success">upload to server</el-button>
                <!-- <el-button type="primary">Browser File</el-button> -->
            </el-upload>
        </el-col>
    </el-row>
</template>

<script>
export default {
  name: "UploadWithInput",
  data: function() {
    return {
      sFileName: ""
    };
  },
  methods: {
    handleFileUploaded: function(oFileInfo) {
      this.sFileName = oFileInfo.name;
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
