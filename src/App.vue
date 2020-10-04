<template>
  <v-app class="open-sans">
    <div class="container">
      <v-btn depressed color="primary" @click="showModal">Open Modal</v-btn>
    </div>
    <fund-acc-modal :visible.sync="isModalVisible"/>
  </v-app>
</template>

<script>
import FundAccModal from '@/components/FundAccModal'

export default {
  name: 'App',
  components: {
    FundAccModal
  },
  data() {
    return {
      isModalVisible: true
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    }
  }
}
</script>
<style>
body .open-sans {
  font-family: 'Open Sans', sans-serif;
}

.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
