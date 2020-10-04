<template>
  <transition name="modal-fade">
    <div
      class="modal-backdrop"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal" :style="{ maxWidth: `${maxWidth}px` }">
        <header class="modal-header">
          <slot name="header"></slot>
          <button
            class="modal-close"
            type="button"
            @click="close"
            aria-label="Close modal"
          >
            <v-icon large>close</v-icon>
          </button>
        </header>
        <section class="modal-body">
          <slot name="body"></slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'BaseModal',
  props: {
    maxWidth: {
      type: String,
      default: '320',
    },
  },
  data() {
    return {}
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style scoped>
/* Backdrop */
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-backdrop::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--v-alpha-base);
  opacity: 0.3;
  z-index: -1;
}

.modal {
  background: var(--v-white-base);
  border-radius: 5px;
  min-width: 320px;
  width: 100%;
  margin: 24px;
  padding-bottom: 40px;
  transition: height .3s ease;
}

/* Header */
.modal-header {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  position: relative;
}

.modal-close {
  position: absolute;
  right: 20px;
  top: 20px;
}

.modal-close i.v-icon {
  color: var(--v-label-base);
}

.modal-close:hover i.v-icon {
  color: var(--v-dark-base);
}

.modal-body {
  padding: 30px;
}

/* Animation */
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.modal-fade-enter .modal {
  transform: translateY(-100px);
}

.modal-fade-leave-active .modal {
  transform: translateY(-100px);
}

.modal-fade-enter-active .modal,
.modal-fade-leave-active .modal {
  transition: transform 0.35s ease-out;
}
</style>
