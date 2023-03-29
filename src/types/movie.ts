import { Category } from './category'

export type Movie = {
  id: number
  title: string
  subTitle: string
  year: number
  imgUrl: string
  synopsis: string
  genre?: string
  categories?: Category[]
}
