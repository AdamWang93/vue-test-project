<template>
  <li class="treeNode">
    <el-row class="treeNodeLine">
        <el-col :span=3 class="arrowBox">
            <el-button 
                class="arrowButton" 
                @click="onArrowPressed"
                type="primary" 
                :icon="arrowIcon" />
        </el-col>
        <el-col :span=12 class="textBox">
            <el-button 
                class="textButton"
                type="text"
                @click="onTextPressed">
                {{model.name}}
            </el-button>
        </el-col>
    </el-row>
    <ul 
      v-show="expanded"
      v-if="hasChildren"
      class="treeUl" >
        <Tree 
            v-for="(model, index) in model.children"
            v-bind:model="model"
            :onNodePressed="onNodePressed" />
    </ul>
  </li>
</template>

<script>
export default {
  name: "Tree",
  props: {
    model: Object,
    onNodePressed: Function
  },
  data: function() {
    return {
      expanded: false
    };
  },
  computed: {
    arrowIcon: function() {
      if (this.hasChildren) {
        return this.expanded ? "el-icon-arrow-down" : "el-icon-arrow-right";
      } else {
        return "";
      }
    },
    hasChildren: function() {
      return this.model.children && this.model.children.length;
    }
  },
  methods: {
    onArrowPressed: function() {
      this.expanded = !this.expanded;
    },

    onTextPressed: function() {
      var oParams = {
        name: this.model.name,
        parentName: this.model.parentName
      };

      this.onNodePressed(oParams);
    }
  }
};
</script>

<style scoped>
.treeNode {
  list-style-type: none;
}

.arrowButton {
  /* width: 100%; */
  padding-right: 0rem;
  color: black;
  border: none;
  background-color: transparent;
  /* opacity: 0.6; */
}

.textButton {
  color: black;
}

.treeNodeLine {
  width: 100%;
  display: inline-block;
}

.arrowBox {
  text-align: end;
}

.textBox {
  text-align: start;
}

.treeUl {
  margin-block-start: 0rem;
  margin-block-end: 0rem;
}
</style>

