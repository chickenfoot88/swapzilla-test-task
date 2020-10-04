import Vue from 'vue'

const components = {
  'BaseModal':   () => import('@/components/BaseComponents/BaseModal'),
  'BaseTabs':   () => import('@/components/BaseComponents/BaseTabs'),
  'BaseInput':   () => import('@/components/BaseComponents/BaseInput'),
  'BaseSelect':   () => import('@/components/BaseComponents/BaseSelect'),
  'BaseChip':   () => import('@/components/BaseComponents/BaseChip'),
  'BaseInputWithAmount':   () => import('@/components/BaseComponents/BaseInputWithAmount'),
  'TransitionExpand':   () => import('@/components/Utility/TransitionExpand')
}

Object.entries(components).forEach(([name, component]) => Vue.component(name, component))