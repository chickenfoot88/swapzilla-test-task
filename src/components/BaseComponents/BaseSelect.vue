<template>
  <div class="base-select" :tabindex="tabindex" @blur="closeSelect">
    <label v-if="label" @click="toggleSelect">{{ label }}</label>
    <div class="selected" :class="{ open: isSelectOpen }" @click="toggleSelect">
      <span v-if="selected" key="value">{{ selected.name }}</span>
      <span v-else class="placeholder" key="placeholder">{{ placeholder }}</span>
      <v-icon class="select-icon">keyboard_arrow_down</v-icon>
    </div>
    <!-- <transition name="fade"> -->
    <transition-expand>
      <div v-show="isSelectOpen" class="options">
        <div
          v-for="(option, index) of options"
          :key="index"
          @click="selectOption(option)"
        >
          {{ option.name }}
        </div>
      </div>
    </transition-expand>
    <!-- </transition> -->
  </div>
</template>
<script>

export default {
  name: 'BaseSelect',
  model: {
    prop: 'value',
    event: 'select',
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true,
      validator: function (value) {
        let isValid = false
        value.forEach((option) => {
          isValid =
            Object.prototype.hasOwnProperty.call(option, 'id') &&
            Object.prototype.hasOwnProperty.call(option, 'name')
        })
        return isValid
      },
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    placeholder: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      isSelectOpen: false,
      selected: null,
    }
  },
  methods: {
    openSelect() {
      this.isSelectOpen = true
    },
    closeSelect() {
      this.isSelectOpen = false
    },
    toggleSelect() {
      this.isSelectOpen = !this.isSelectOpen
    },
    selectOption(option) {
      this.selected = option
      this.isSelectOpen = false
      this.$emit('select', option.id)
    },
  },
}
</script>
<style scoped>
.base-select {
  color: var(--v-dark-base);
  font-size: 14px;
  line-height: 20px;
  position: relative;
  width: 100%;
}

.base-select label {
  display: inline-block;
  font-size: 12px;
  padding-left: 20px;
  margin-bottom: 10px;
}

.base-select .placeholder {
  color: var(--v-label-base);
}

.base-select .selected {
  background: var(--v-border-base);
  position: relative;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  width: 100%;
  user-select: none;
  transition: border-color .2s ease;
}

.base-select .selected.open {
  border: 1px solid var(--v-info-base);
}

.base-select .select-icon {
  position: absolute;
  top: 15px;
  right: 20px;
  pointer-events: none;
  touch-action:none;
  transition: transform .2s ease;
}

.base-select .selected.open .select-icon {
  transform: rotateX(180deg);
}

.base-select .options {
  background: var(--v-white-base);
  box-shadow: 0px 7px 16px rgba(60, 72, 76, 0.1);
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1px;
  max-height: 240px;
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  z-index: 1;
}

.base-select .options > div {
  padding: 15px;
  transition: background-color .3s ease
}

.base-select .options > div:last-child {
  border-radius: 0 0 5px 5px;
}

.base-select .options > div:hover {
  background: var(--v-border-base);
}
</style>
