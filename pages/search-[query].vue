<template>
  <div
    v-loading="loading"
    element-loading-background="rgba(0, 0, 0, 0.53)"
    class="my-12"
  >
    <template v-if="moviesData">
      <AppCaroules :movies-data="moviesData" />
      <div
        v-if="total > limit"
        class="demo-pagination-block flex justify-center"
      >
        <el-pagination
          v-model:current-page="currentPage"
          small
          :page-size="limit"
          background
          layout="prev, pager, next"
          :total="total"
        />
      </div>
    </template>
    <template v-if="!loading && !moviesData">
      <div class="text-center">oops, nothing found...</div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import useRequest from '@/composables/useRequest'
import type { MovieShortInfo } from '@/types/movies'

const { params } = useRoute()
const appStore = useAppStore()

const moviesData = ref<MovieShortInfo[]>()
const { currentPage, limit } = storeToRefs(appStore)
const total = ref()
const loading = ref(true)

watch(currentPage, async (newPage, oldPage) => {
  if (newPage !== oldPage) {
    appStore.currentPage = newPage
    await fetchMovies()
  }
})

watch(
  () => params.query,
  async (newValue) => {
    if (!newValue) {
      return
    }
    appStore.searchQuery = newValue.toString()
    await fetchMovies()
  },
  { immediate: true }
)

async function fetchMovies() {
  loading.value = true
  const res = await useRequest.searchMovies(
    appStore.searchQuery,
    appStore.currentPage
  )
  moviesData.value = res?.movies
  total.value = parseInt(res?.totalResults || '', 10)
  loading.value = false
}
</script>
<style>
.el-carousel__mask {
  background-color: #0000008a;
  border-radius: 20px;
  opacity: 0.74;
}
</style>
