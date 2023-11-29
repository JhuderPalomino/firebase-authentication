<template>
  <div id="app">
    <router-view/>
    <login v-if="!user" />
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import firebase from "@/firebase";

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  },
  components: {
    Login,
  },
};
</script>
