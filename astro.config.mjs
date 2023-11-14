// Importiere die Funktionen, die du aus den benötigten SDKs benötigst
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { initializeApp } = require('firebase/app');
const { getAnalytics } = require('firebase/analytics');
import { defineConfig } from 'astro/config';

// Deine Astro.js-Konfiguration für Firebase
export default defineConfig({
  site: 'https://comboomPunkTsucht.github.io',
  base: '/fex-projekt',
  plugins: [
    {
      package: '@astrojs/firebase',
      options: {
        // Füge hier die SDKs für die Firebase-Produkte hinzu, die du verwenden möchtest
        // https://firebase.google.com/docs/web/setup#available-libraries
      }
    }
  ],
  async load() {
    // Deine Firebase-Konfiguration
    const firebaseConfig = {
      apiKey: "AIzaSyAQ0CUHC-7KNkE2CuF2NDPcTgW56Ac9zzo",
      authDomain: "fex-projekt.firebaseapp.com",
      projectId: "fex-projekt",
      storageBucket: "fex-projekt.appspot.com",
      messagingSenderId: "797807569892",
      appId: "1:797807569892:web:478a4733d4b56f81f375f1",
      measurementId: "G-VD0P0JMRR0"
    };

    // Initialisiere Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
});
