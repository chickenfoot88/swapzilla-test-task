<template>
  <div class="base-input">
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @click="$emit('click', $event)"
      @focus="$emit('focus', $event)"
      @blur.prevent
    />
    <div v-if="max" class="extra-button-before-end">
      <v-btn
        class="text-normal font-weight-bold"
        small
        depressed
        color="label"
        dark
        @click="$emit('input', max)"
        >
          Max
        </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseInput',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    max: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
.base-input {
  position: relative;
}

.base-input input {
  background: var(--v-border-base);
  border: 1px solid transparent;
  font-size: 14px;
  line-height: 20px;
  border-radius: 5px;
  padding: 15px;
  transition: border-color 0.2s ease;
  width: 100%;
}

.base-input input:focus {
  border: 1px solid var(--v-info-base);
}

.base-input input::placeholder {
  color: var(--v-label-base);
}

.base-input .extra-button-before-end {
  align-items: center;
  bottom: 10px;
  display: flex;
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
