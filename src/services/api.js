import axios from 'axios';
import {KEY_API} from 'react-native-dotenv';

const api = axios.create({
  baseURL: `https://api.hgbrasil.com/weather?array_limit=7&fields=only_results,condition_slug,condition,description,weekday,temp,city_name,forecast,max,min,date&key=${KEY_API}`,
});

export default api;
