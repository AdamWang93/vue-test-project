<template>
  <input class="idPwsInput" :class="{ idInput: isIdInput }" :type="inputType">
</template>

<script>
export default {
  name: "IdPasswordInput",
  props: {
    isIdInput: Boolean
  },
  data: function() {
    return {
      inputType: ""
    };
  },
  beforeMount: function() {
    this.inputType = this.isIdInput ? "text" : "password";
    device.type;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input.idInput {
  margin-bottom: 0.5rem;
}

input.idPwsInput {
  border: 0.15rem solid #ccc;
  width: 50%;
  padding-bottom: 0.3rem;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

input.idPwsInput:focus {
  border: 0.15rem solid #555;
}
</style>
