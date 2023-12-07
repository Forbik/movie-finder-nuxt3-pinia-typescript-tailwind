<template>
  <div class="h-screen">
    <div class="cover-bg bg-scroll min-h-screen flex flex-col justify-between">
      <AppHeader />
      <div class="text-white mb-auto mainContent container mx-auto px-2">
        <slot />
      </div>
      <AppFooter />
    </div>
  </div>
</template>
