<template>
  <div class="loading-spinner">
    <div class="spinner-border text-primary" role="status"></div>
  </div>
</template>    

<style lang="scss">
.loading-spinner {
  /* Стили для вашего индикатора загрузки */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
    font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
    .spinner-border {
    width: 5rem;
    height: 5rem;
}
}
</style>
