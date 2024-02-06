type Genre = "Rock" | "Hip Hop" | "Country" | "Gospel" | "Afrobeats"

export interface ISong {
  id: number
  title: string
  artist: string
  genre: Genre
  plays: number
  factorialId: number
}
