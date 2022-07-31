export interface ApiResponse<T> {
  message: T,
  status: string
}

export type BreedResponse = {[name: string]: string[]}
