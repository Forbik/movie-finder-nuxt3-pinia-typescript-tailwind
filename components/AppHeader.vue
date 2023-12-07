<template>
  <header class="text-white h-[96px]">
    <div
      class="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center"
    >
      <div class="col-span-1 lg:block hidden">
        <HeaderSiteName />
      </div>
      <div class="col-span-3">
        <HeaderSearchInput />
      </div>
      <div class="col-span-3">
        <HeaderMenuItems />
      </div>
    </div>
  </header>
</template>
