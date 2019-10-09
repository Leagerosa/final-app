import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#0099A0',
        secondary: '#FF8E30',
        accent: '#309CFF',
        info: '#C4C4C4',
      },
      dark: {
        
      },
    },
  },
});
