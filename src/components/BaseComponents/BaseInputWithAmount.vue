<template>
  <div
    class="base-input-with-options"
    :tabindex="tabindex"
    @focus.capture="openOptions"
    @blur.capture="closeOptions"
  >
    <base-input
      :max="max"
      :value="value"
      @input="$emit('input', $event)"
      :placeholder="placeholder"
    />
    <transition name="fade">
      <div v-show="isOptionsOpen" class="options" @click.prevent>
        <base-chip
          bg-color="primary lighten-5"
          text-color="primary"
          class="mb-5"
        >
          Balance: <span class="font-weight-bold">{{ balance }}</span>
        </base-chip>
        <div>
          <v-btn
            v-for="(value, index) in amountOptions"
            :key="index"
            class="text-normal mr-2 font-weight-bold mb-1"
            small
            depressed
            color="label"
            dark
            retain-focus-on-click
          >
            {{ `${value}%` }}
          </v-btn>
          <v-btn
            class="text-normal mr-2 font-weight-bold mb-1"
            small
            depressed
            color="label"
            dark
            retain-focus-on-click
          >
            Split
          </v-btn>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'BaseInputWithAmount',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: String,
      deault: null,
      required: true,
    },
    max: {
      type: String,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    amountOptions: {
      type: Array,
      default() {
        return []
      },
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOptionsOpen: false,
      balance: 0.0476,
    }
  },
  methods: {
    openOptions() {
      this.isOptionsOpen = true
    },
    closeOptions() {
      this.isOptionsOpen = false
    },
    toggleOptions() {
      this.isOptionsOpen = !this.isOptionsOpen
    },
    toggleSelect() {
      this.isOptionsOpen = !this.isOptionsOpen
    },
  },
}
</script>
<style>
.base-input-with-options {
  position: relative;
}

.base-input-with-options .options {
  background: var(--v-white-base);
  box-shadow: 0px 7px 16px rgba(60, 72, 76, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-top: 1px;
  max-height: 240px;
  position: absolute;
  padding: 20px;
  z-index: 1;
  width: 100%;
}
</style>
