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
            v-bind:fatherChildren="model.children"
            v-for="singleNode in model.children"
            v-bind:model="singleNode"
            :onNodePressed="onNodePressed" />
    </ul>
  </li>
</template>

<script>
export default {
  name: "Tree",
  props: {
    model: Object,
    onNodePressed: Function,
    fatherChildren: Array
  },
  data: function() {
    return {
      expanded: false,
      rootDeleted: false
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
      return !!this.model.children && !!this.model.children.length > 0;
    }
  },
  methods: {
    onArrowPressed: function() {
      this.expanded = !this.expanded;
    },

    onTextPressed: function() {
      var that = this;
      this.model.deleteCurrentItem = function() {
        if (!!that.model.parentKey) {
          var iIndex = that.$lo.findIndex(that.fatherChildren, function(item) {
            return item.key === that.model.key;
          });
          that.fatherChildren.splice(iIndex, 1);
        } else {
          that.modelCopy = {};
        }
      };
      this.onNodePressed(this.model);
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

