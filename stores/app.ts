import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    currentPage: 1,
    limit: 10,
    searchQuery: ''
  })
})
