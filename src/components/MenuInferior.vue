<template>
  <div>
    <v-bottom-navigation v-model="bottomNav" app>
      <v-btn value="recent" class="pa-3 mx-3">
        <span>Psicólogo</span>
        <v-icon color="yellow">mdi-star</v-icon>
      </v-btn>

      <v-btn value="favorites" class="pa-3 mx-5">
        <span>Favoritos</span>
        <v-icon color="pink">mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby" class="pa-3 mx-3">
        <span>Perfil</span>
        <v-icon color="black">mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

  <script>
  export default {
    data: () => ({
      bottomNav: 'recent',
    }),
  };
</script>