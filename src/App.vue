<template>
<v-app>
<!--<NavMenu v-if="$route.meta.menu"/>-->
<NavNoMenu v-if="$route.meta.nomenu"/>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app>
  </v-footer>
</v-app>
</template>

<script>
 //import NavMenu from "./components/NavMenu.vue"
 import NavNoMenu from "./components/NavNoMenu.vue"
export default {
  components: {
    //NavMenu,
    NavNoMenu
  },
  name: 'App'
};
</script>