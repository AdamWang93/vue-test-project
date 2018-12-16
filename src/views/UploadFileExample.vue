<template>
  <div id="uploadPageDiv">
    <div id="uploadBoxDiv">
      <h1>Upload File Test for Doris</h1>
      <UploadWithInput></UploadWithInput>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IdPasswordInput from "@/components/IdPasswordInput.vue";
import UploadWithInput from "@/components/UploadWithInput.vue";

export default {
  name: "UploadFile",
  components: {
    UploadWithInput
  }
};
</script>

<style>
#uploadPageDiv {
  overflow: auto;
  height: 100%;
  /* background-image: url(../assets/home_background.jpg); */
  background-size: contain;
  display: -webkit-flex;
  display: flex;
}

#uploadBoxDiv {
  /* margin: 10rem; */
  height: 20rem;
  width: 45rem;
  background-color: #92959eee;
  opacity: 0.6;
  border: black;
  margin: auto;
}
</style>

