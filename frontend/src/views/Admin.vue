<template>
  <div>
    <form id="form-upload" @submit.prevent="upload">
      <input type="file" ref="file" @change="processFile" />
      <button type="submit">Enregistrer</button>
    </form>
    <hr>
    <h2>Register Test</h2>

  </div>
</template>

<script>
import { mapActions } from "vuex";


export default {
  
  data() {
    return {
      uri: this.$store.state.URI_API,
      file: null,
    };
  },

  methods: {
    ...mapActions("admin", ["uploadFile"]),
    processFile() {
      this.file = this.$refs.file.files[0];
    },
    upload() {
      let formData = new FormData();
      formData.append("file", this.file);
      this.uploadFile(formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
