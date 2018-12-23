</<template>
    <el-dialog
    title="Warning"
    :visible.sync="dialogVisible"
    width="30%"
    :show-close=false>
    <span>{{message}}</span>
    <span slot="footer">
        <el-button @click="onConfirmClicked">Confirm</el-button>
        <el-button type="primary" @click="onCancelClicked">Cancel</el-button>
    </span>
    </el-dialog>
</template>

<script>
export default {
  name: "MessageDialog",
  props: {
    message: String,
    dialogVisible: Boolean
  },
  methods: {
    onConfirmClicked: function() {
      this.$emit("confirm-clicked");
    },
    onCancelClicked: function() {
      this.$emit("cancel-clicked");
    }
  }
};
</script>
