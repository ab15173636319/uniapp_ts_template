import { App } from 'vue'

import Icon from './Icon.vue'

const GlobalComponentsList = [Icon]

const install = (app: App) => {
  GlobalComponentsList.forEach((component) => {
    if (!component.__name) throw new Error('组件名称不能为空')
    app.component(component.__name, component)
  })
}

export default install
