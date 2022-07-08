import axios from 'axios'
import { foodsindex } from "../urls/index"

export const fetchFoods =(restaurantId) => {
  return axios.get(foodsindex(restaurantId))
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
