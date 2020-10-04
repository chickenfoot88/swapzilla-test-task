<template>
  <base-modal v-if="isModalVisible" max-width="780" @close="closeModal" v-touch:tap="swipeHandler">
    <template slot="header">
      <base-tabs :tabs-array="tabs" :selected-tab-name.sync="tab" />
    </template>
    <template slot="body">
      <div class="modal-content mx-auto d-flex justify-center flex-column">
        <transition name="fade" mode="out-in" appear>
          <component :is="tab" :key="tab"></component>
        </transition>
      </div>
    </template>
  </base-modal>
</template>
<script>
import Deposit from '@/components/Deposit'
import Withdraw from '@/components/Withdraw'
import Rebalance from '@/components/Rebalance'

export default {
  name: 'FundAcc',
  components: {
    Deposit,
    Withdraw,
    Rebalance
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tab: 'deposit',
      selectedExchange: '',
      tabs: [
        {
          name: 'Deposit',
          key: 'deposit',
        },
        {
          name: 'Withdraw',
          key: 'withdraw',
        },
        {
          name: 'Rebalance',
          key: 'rebalance',
        },
      ],
    }
  },
  computed: {
    isModalVisible: {
      get() {
        return this.visible
      },
      set(value) {
        this.$emit('update:visible', value)
      },
    },
  },
  methods: {
    closeModal() {
      this.isModalVisible = false
    },

    setMaxValue(){
      this.inputTest = 1000
    },

    swipeHandler(event) {
      console.log('tap');
      console.log('swipe', event);
      this.tab = "rebalance"
    }
  },
}
</script>
<style>
.modal-content {
  width: 100%;
  max-width: 380px;
}
</style>
