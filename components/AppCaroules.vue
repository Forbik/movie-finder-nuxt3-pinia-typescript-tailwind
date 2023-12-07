<template>
  <el-carousel
    :autoplay="false"
    indicator-position="none"
    type="card"
    height="410px"
  >
    <el-carousel-item v-for="item of moviesData" :key="item.imdbID">
      <nuxt-link :to="`/details-${item.imdbID}`">
        <div class="py-3 sm:max-w-xl sm:mx-auto">
          <div
            class="bg-white shadow-lg border-gray-100 max-h-80 border rounded-lg sm:rounded-3xl p-8 flex flex-col sm:flex-row sm:space-x-8"
          >
            <div class="h-48 overflow-visible w-full sm:w-1/2 mb-4">
              <img
                class="max-h-40 sm:max-h-80 rounded-3xl shadow-lg"
                :src="item.Poster"
                alt=""
              />
            </div>
            <div class="flex flex-col w-full sm:w-1/2 sm:space-y-4">
              <div class="flex justify-between items-start">
                <h2 class="text-md md:text-lg lg:text-3xl text-black font-bold">
                  {{ item.Title }}
                </h2>
              </div>
              <div>
                <div class="text-sm text-gray-400">{{ item.Type }}</div>
                <div class="text-lg text-gray-800">{{ item.Year }}</div>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </el-carousel-item>
  </el-carousel>
</template>
<script lang="ts" setup>
import type { MovieShortInfo } from '@/types/movies'

defineProps<{
  moviesData: MovieShortInfo[]
}>()
</script>
