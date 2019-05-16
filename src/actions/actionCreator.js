import { FETCH_NEWS } from './actionsTypes'

export const fetchNews = news => ({
  type: FETCH_NEWS,
  value: news
})
