import { createSSRApp } from 'vue'

import pinia from './store'
import installGlobalComponents from './components/global'

import 'virtual:svg-icons-register'

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(installGlobalComponents)
  return {
    app,
  }
}
