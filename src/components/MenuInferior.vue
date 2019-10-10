<template>
  <div>
    <v-app-bar bottom app color="#E0E0E0">
        <div>
            <v-btn>
                <v-icon>mdi-history</v-icon>
                <span>Chat pago</span>
            </v-btn>
            <v-btn>
                <v-icon>mdi-heart</v-icon>
                <span>Favs</span>
            </v-btn>
            <v-btn>
                <v-icon>mdi-history</v-icon>
                <span>Perfil</span>
            </v-btn>
        </div> 
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