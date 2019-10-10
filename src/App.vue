<template>
<v-app>
<MenuInferior v-if="$route.meta.inferior"/>
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
 import MenuInferior from "./components/MenuInferior.vue"
 import NavNoMenu from "./components/NavNoMenu.vue"
export default {
  components: {
    MenuInferior,
    NavNoMenu
  },
  name: 'App'
};
</script>