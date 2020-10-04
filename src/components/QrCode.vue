<template>
  <div class="qr-code text-center">
    <img src="@/assets/demo/qr.svg" class="mb-3"/>
    <span>FGBfvcnkfdnvkk74365832ybvcvdfvfvb</span>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      
    }
  }
}
</script>
<style>
.qr-code {
  min-height: 155px;
}

@media (max-width: 480px) {
  span {
    font-size: 14px;
  }
}

</style>
