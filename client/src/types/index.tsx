export type game = {
  cover: string
  coverLarge: string
  date: Date
  id: number
  name: string
  provider: number
}

export type group = {
  id: number
  name: string
  games: number[]
}

export type provider = {
  id: number
  name: string
  logo: string
}
