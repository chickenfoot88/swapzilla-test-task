import Vue from 'vue'

const components = {
  'BaseModal':   () => import('@/components/BaseComponents/BaseModal'),
}

Object.entries(components).forEach(([name, component]) => Vue.component(name, component))