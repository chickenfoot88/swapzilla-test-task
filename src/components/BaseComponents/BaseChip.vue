<template functional>
  <div class="base-chip" :class="[props.bgColor, `${props.textColor}--text`]">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'BaseChip',
  props: {
    bgColor: {
      type: String,
      default() {
        return 'secondary'
      },
    },
    textColor: {
      type: String,
      default() {
        return 'dark'
      },
    },
  }
}
</script>
<style>
.base-chip {
  font-size: 12px;
  display: inline-block;
  border-radius: 3px;
  padding: 10px;
}
</style>
