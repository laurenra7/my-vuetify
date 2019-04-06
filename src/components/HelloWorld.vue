<template>
  <v-app>
    <h2>Buttons</h2>
    <div>
      <v-btn color="success">Success</v-btn>
      <v-btn color="error">Error</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="info">Info</v-btn>
    </div>
  </v-app>
</template>

<script>
  import Vue from 'vue'

  import Vuetify, {
      VApp,
      VBtn
  } from 'vuetify/lib'

  import {
      Ripple
  } from 'vuetify/lib/directives'

  Vue.use(Vuetify, {
      iconfont: 'md',
      components: {
          VApp,
          VBtn
      },
      directive: {
          Ripple
      }
  })

  export default {
      // components: {
      //     VApp,
      //     VBtn
      // }
  }
</script>

<style lang="stylus" scoped>

  /*@import '../../node_modules/vuetify/src/stylus/main';*/
  @import '../../node_modules/vuetify/src/stylus/theme';
  @import '../../node_modules/vuetify/src/stylus/app';
  @import '../../node_modules/vuetify/src/stylus/components/_buttons';

  .success {
    background-color: #4caf50 !important;
    border-color: #4caf50 !important;
  }

</style>

<!--<style lang="css" scoped>-->
  <!--@import '~vuetify/dist/vuetify.min.css';-->
<!--</style>-->
