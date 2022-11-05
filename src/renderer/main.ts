import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.mount('#app');

// Message will be logged in the main process (stdout)
window.api.sayHello("Electron");

window.api.getAppMetrics().then((metrics) => {
  // Message will be logged in the web inspector
  console.log("App metrics from main process", metrics);
});

