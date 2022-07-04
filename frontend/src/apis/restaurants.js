import axios from 'axios';
import { restaurantsindex } from '../urls';

export const fetchRestaurants = () => {
  return axios.get(restaurantsindex)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}