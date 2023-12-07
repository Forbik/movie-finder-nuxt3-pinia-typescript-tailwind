const apiKey: string = import.meta.env.VITE_API_KEY
const apiUrl: string = import.meta.env.VITE_API_URL

type AdditionalParams = {
  [key: string]: string | number
}

function buildQueryString(params: AdditionalParams): string {
  const query: string = Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join('&')
  return query ? `?${query}` : ''
}

export async function get(options: AdditionalParams = {} as AdditionalParams) {
  const queryParams: string = buildQueryString({
    ...options,
    apikey: apiKey
  })
  const res = await fetch(`${apiUrl}${queryParams}`)
  const processedRes = await res.json()
  return processedRes
}
