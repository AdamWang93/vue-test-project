<template>
  <div class="treeTestPage">
    <h1 style="text-align:center">This is tree test page</h1>
    <el-row>
        <el-col :span=5>
          <div class="treeContainer">
            <Tree 
              :model="mockTreeData"
              :onNodePressed="showInformation" />
          </div>
          <div class="addNodeContainer">
            <el-input class="nodeInput" size="small"></el-input>
            <el-button type="primary" class="addChildButton" size="small"> Add Child Node</el-button>
          </div>
        </el-col>
        <el-col :span=19 v-show="treeClicked">
          <div class="informationContainer">
            <el-row>
              <el-col :span=12>
                Basic Information
              </el-col>
              <el-col :span=12 class="saveDeleteNodeContainer">
                <el-button type="primary" size="small">Save</el-button>
                <el-button type="danger" size="small">Delete</el-button>
              </el-col>
            </el-row>
            <div class="nodeInfoInputContainer">
              <div class="orgNameContainer">
                <span style="margin-right:3rem">Upper Org</span>
                <span>{{orgAttribute.parentName}}</span>
              </div>
              <div class="orgNameContainer">
                <span style="margin-right:3rem; display:inline-block">Org Name</span>
                <el-input 
                  size="small" 
                  class="orgNameInput"
                  v-model="orgAttribute.name"/>
              </div>
            </div>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import MockData from "@/MockData.js";
import Tree from "@/components/Tree.vue";

export default {
  name: "TreeTest",
  components: {
    Tree
  },
  data: function() {
    return {
      mockTreeData: MockData.MockTreeData,
      orgAttribute: {
        name: "",
        parentName: ""
      },
      treeClicked: false
    };
  },
  methods: {
    showInformation: function(oParams) {
      this.treeClicked = true;
      this.orgAttribute.name = oParams.name;
      this.orgAttribute.parentName = oParams.parentName;
    }
  }
};
</script>

<style scoped>
.treeContainer {
  background-color: white;
  /* display: inline-block; */
}

.treeTestPage {
  font-family: Menlo, Consolas, monospace;
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
  text-align: justify;
  display: inline-block;
}

.informationContainer {
  background-color: white;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-top: 0.3rem;
  padding-left: 1rem;
}

.addNodeContainer {
  display: inline-block;
  margin-top: 1rem;
  width: 100%;
}

.nodeInput {
  margin-left: 7%;
  width: 50%;
}

.addChildButton {
  width: 40%;
  margin-left: 3%;
}

.nodeInfoInputContainer {
  margin-top: 3rem;
}

.saveDeleteNodeContainer {
  text-align: end;
  padding-right: 1rem;
}

.orgNameContainer {
  width: 100%;
  margin-bottom: 1rem;
  display: inline-block;
}

.orgNameInput {
  width: 20%;
}
</style>

