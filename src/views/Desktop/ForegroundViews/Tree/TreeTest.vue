<template>
  <div class="treeTestPage">
    <h1 style="text-align:center">This is tree test page</h1>
    <el-row>
        <el-col :span=5>
          <div class="treeContainer">
            <Tree 
              :model="treeData"
              :onNodePressed="showInformation" />
          </div>
          <div class="addNodeContainer">
            <el-input 
              class="nodeInput" 
              size="small"
              v-model="newChildName"
              :disabled="disableAddNode"></el-input>
            <el-button 
              type="primary" 
              class="addChildButton" 
              size="small"
              :disabled="disableAddNode"
              @click="onAddChildPressed"> 
              Add Child Node
            </el-button>
          </div>
        </el-col>
        <el-col :span=19 v-show="informationVisible">
          <div class="informationContainer">
            <el-row>
              <el-col :span=12>
                Basic Information
              </el-col>
              <el-col :span=12 class="saveDeleteNodeContainer">
                <el-button type="primary" size="small">Save</el-button>
                <el-button 
                  type="danger"
                  size="small"
                  @click="onDeleteNodePressed">Delete</el-button>
              </el-col>
            </el-row>
            <div class="nodeInfoInputContainer">
              <div class="orgNameContainer">
                <span style="margin-right:3rem">Upper Org</span>
                <span>{{currentTreeItem.parentName}}</span>
              </div>
              <div class="orgNameContainer">
                <span style="margin-right:3rem; display:inline-block">Org Name</span>
                <el-input 
                  size="small" 
                  class="orgNameInput"
                  v-model="nodeAttribute.name"/>
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
      treeData: MockData.MockTreeData,
      // treeData: {},
      currentTreeItem: {},
      nodeAttribute: {
        name: ""
      },
      informationVisible: false,
      newChildName: "",
      currentLevel: 3
    };
  },
  computed: {
    disableAddNode: function() {
      return this.currentLevel > 2;
    }
  },
  methods: {
    showInformation: function(oTreeItem) {
      this.informationVisible = true;

      this.currentTreeItem = oTreeItem;

      this.nodeAttribute.name = oTreeItem.name; //Copy name from tree, two-way bind in case
      this.currentLevel = oTreeItem.level;
    },

    onAddChildPressed: function() {
      //Call back-end API, then involve following code under success response.
      this.currentTreeItem.children.push({
        name: this.newChildName,
        key: "get from back-end API!!!!!",
        parentKey: this.currentTreeItem.key,
        parentName: this.currentTreeItem.name,
        level: this.currentTreeItem.level + 1,
        children: []
      });
    },

    onDeleteNodePressed: function() {
      !!this.currentTreeItem.parentKey
        ? this.currentTreeItem.deleteCurrentItem()
        : (this.treeData = {});

      this.informationVisible = false;
      this.currentLevel = 3;
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

