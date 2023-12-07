<template>
  <div class="details relative">
    <div
      v-if="loading"
      v-loading="loading"
      element-loading-background="rgba(0, 0, 0, 0)"
      class="h-[32rem]"
    />
    <template v-else>
      <div
        class="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-12 gap-8"
      >
        <div
          class="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden"
        >
          <img
            :src="movieData.Poster"
            :alt="movieData.Title"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="col-span-2 md:grid gap-4 items-center">
          <div class="col-span-3 flex flex-col gap-10">
            <h1
              class="mt-8 xl:mt-0 xl:text-4xl capitalize font-sans text-2xl font-bold"
            >
              {{ movieData.Title }}
            </h1>
            <div class="flex items-center gap-4 font-medium text-dryGray">
              <div class="flex-colo bg-red-600 text-xs px-2 py-1">
                {{ movieData.imdbRating }}
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-medium">{{ movieData.Genre }}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  stroke="#dc2626"
                  fill="#dc2626"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  class="text-subMain w-3 h-3"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                  />
                </svg>
                <span class="text-sm font-medium">{{ movieData.Year }}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  stroke="#dc2626"
                  fill="#dc2626"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-subMain w-3 h-3"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                  />
                  <path d="M13 7h-2v6h6v-2h-4z"></path>
                </svg>
                <span class="text-sm font-medium">{{ movieData.Runtime }}</span>
              </div>
            </div>
            <p class="text-text text-sm leading-7">{{ movieData.Plot }}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import useRequest from '@/composables/useRequest'
import type { MovieFullInfo } from '@/types/movies'

const movieData = ref<MovieFullInfo>({
  Title: ''
} as MovieFullInfo)
const { params } = useRoute()
const loading = ref(true)
onBeforeMount(async () => {
  if (!params.id) {
    loading.value = false
    return
  }
  const paramsId = params.id.toString()
  await useRequest
    .fetchMovieById(paramsId)
    .then((data: MovieFullInfo | undefined) => {
      if (data) {
        movieData.value = data
        loading.value = false
      }
    })
})
</script>
