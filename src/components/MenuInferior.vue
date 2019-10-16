<template>
  <div>
    <v-app-bar bottom app color="#E0E0E0">
      <v-container>
          <v-row>
            <v-col cols="4">
              <v-btn class="px-3 mx-3" outlined>
                      <v-icon>mdi-star</v-icon>
                      <!--<span>Pago</span>-->
                  </v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn class="px-3 mx-5" outlined>
                      <v-icon>mdi-heart</v-icon>
                      <!--<span>Favs</span>-->
                  </v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn class="px-3 mx-3" outlined>
                      <v-icon>mdi-account</v-icon>
                      <!--<span>Perfil</span>-->
                  </v-btn>
            </v-col>
          </v-row>
        </v-container>
    </v-app-bar>
  </div>
</template>
  <script>
export default {
  data: () => ({
    inferior: false,
  }),
};
</script>