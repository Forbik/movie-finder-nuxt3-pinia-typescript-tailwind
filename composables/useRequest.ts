import { ElNotification } from 'element-plus'
import { get } from '@/composables/http'
import type { MovieFullInfo, SearchResult } from '@/types/movies'

export default {
  async searchMovies(query: string, page: number = 1) {
    try {
      const res: SearchResult = await get({
        s: query,
        page
      })
      if (res?.Response === 'False') {
        throw new Error(res.Error)
      }
      const movies = (res as SearchResult)?.Search
      const totalResults = (res as SearchResult)?.totalResults

      return { movies, totalResults }
    } catch (error) {
      ElNotification({
        title: 'Error',
        message: error?.toString() || 'Failed to search movies',
        type: 'error'
      })
    }
  },
  async fetchMovieById(imdbID: string) {
    try {
      const res: MovieFullInfo = await get({
        i: imdbID,
        plot: 'full'
      })
      if (res?.Response === 'False') {
        throw new Error(res.Error)
      }
      return res
    } catch (error) {
      ElNotification({
        title: 'Error',
        message: error?.toString() || 'Failed to fetch movie',
        type: 'error'
      })
    }
  }
}
