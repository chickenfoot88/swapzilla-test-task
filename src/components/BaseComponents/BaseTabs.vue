<template>
  <div class="base-tabs">
    <ul>
      <li
        v-for="(tab, index) in tabs"
        :class="{ 'is-active': tab.isActive }"
        :key="index"
      >
        <a @click.prevent="selectTab(tab.key)">{{ tab.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'BaseTabs',
  props: {
    tabsArray: {
      type: Array,
      required: true,
    },
    selectedTabName: {
      type: String,
      required: '',
    },
  },
  computed: {
    activeTab: {
      get() {
        return this.selectedTabName
      },
      set(value) {
        this.$emit('update:selectedTabName', value)
      },
    },

    tabs() {
      return this.tabsArray.map((tab) => {
        tab.isActive = tab.key === this.selectedTabName
        return tab
      })
    },
  },
  methods: {
    selectTab(key) {
      this.activeTab = key
    },
  },
}
</script>
<style scoped>
.base-tabs ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.base-tabs ul li a {
  color: var(--v-label-base);
  display: block;
  font-size: 20px;
  margin-right: 40px;
  padding-bottom: 14px;
  transition: color 0.3s ease-out;
  position: relative;
}

.base-tabs ul li a::after {
  background: var(--v-dark-base);
  bottom: 0;
  content: '';
  height: 4px;
  position: absolute;
  right: 0;
  width: 100%;
  transition: all 0.4s ease-out;
  opacity: 0;
}

.base-tabs ul li.is-active a {
  color: var(--v-dark-base);
  position: relative;
}

.base-tabs ul li.is-active a::after {
  opacity: 1;
}

@media (max-width: 480px) {
  .base-tabs ul li a {
    font-size: 14px;
    margin-right: 12px;
  }
}
</style>
