// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importez votre fichier de configuration de route

const app = createApp(App);
app.use(router); // Utilisez le routeur dans votre application

app.mount('#app');
