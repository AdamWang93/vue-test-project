<template>
  <div id="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="logonDiv">
      <h1>Log On</h1>
      <div id="idPswLabelDiv">
       <label id="idText" for="idInput" style="display:inline-block;; margin-bottom:0.5rem">Id</label><br>
       <label id="pswText" for="pswInput">Password</label>
      </div>
      <div id="idPswInputDiv">
       <IdPasswordInput :isIdInput = true /><br>
       <IdPasswordInput :isIdInput = false /><br>
       <div id="signInButtonDiv">
        <button class="signInButton">Sign in</button>
        <router-link to="/upload" tag="button" id="uploadFileButton" class="signInButton">Upload File Test</router-link>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IdPasswordInput from "@/components/IdPasswordInput.vue";

export default {
  name: "Home",
  components: {
    IdPasswordInput
  }
};
</script>

<style>
#home {
  overflow: auto;
  height: 100%;
  /* background-image: url(../assets/home_background.jpg); */
  background-size: contain;
  display: -webkit-flex;
  display: flex;
}

#logonDiv {
  /* margin: 10rem; */
  height: 20rem;
  width: 45rem;
  background-color: #ffffff;
  opacity: 0.6;
  border: black;
  margin: auto;
}

#idPswLabelDiv {
  display: inline-block;
  width: 30%;
  text-align: end;
  margin-right: 1rem;
  font-weight: bold;
  vertical-align: top;
}

#idPswInputDiv {
  display: inline-block;
  width: 50%;
  text-align: left;
  vertical-align: top;
}

#signInButtonDiv {
  margin-top: 2rem;
  width: 50%;
  text-align: end;
}

button.signInButton {
  background-color: grey;
  color: white;
  border: none;
  padding: 0.4rem 0.4rem;
  box-shadow: 0 0.5rem 0.9rem 0rem rgba(0, 0, 0, 0.2),
    0 0.2rem 1rem 0 rgba(0, 0, 0, 0.2);
}

#uploadFileButton {
  margin-left: 1rem;
}
</style>

