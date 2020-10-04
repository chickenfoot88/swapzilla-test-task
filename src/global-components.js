import Vue from 'vue'

const components = {
  'BaseModal':   () => import('@/components/BaseComponents/BaseModal'),
  'BaseTabs':   () => import('@/components/BaseComponents/BaseTabs'),
}

Object.entries(components).forEach(([name, component]) => Vue.component(name, component))