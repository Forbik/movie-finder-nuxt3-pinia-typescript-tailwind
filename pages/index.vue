<template>
  <div class="sm:max-w-md my-8 sm:my-40 text-center sm:text-left">
    <div class="text-5xl sm:text-6xl font-semibold mb-4">
      Explore Films You Love
    </div>
    <div class="text-xl font-medium mb-7">
      Discover movie details or search for any title
    </div>
    <div class="text-md text-gray-400 mb-9">
      Expand our database by adding your beloved films.
    </div>
    <nuxt-link
      to="/add-film"
      class="bg-red-600 hover:bg-red-700 transitions text-white px-8 py-3 rounded font-medium text-sm"
    >
      Add films
    </nuxt-link>
  </div>
</template>
