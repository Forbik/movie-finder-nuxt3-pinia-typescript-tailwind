export interface MovieFullInfo {
  Title: string
  Year: string
  Runtime: string
  Genre: string
  Plot: string
  Poster: string
  imdbRating: string
  imdbID: string
  Response: string
  Error: string
}
export interface MovieShortInfo {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
export interface SearchResult {
  Search: MovieShortInfo[]
  totalResults: string
  Response: string
  Error: string
}
