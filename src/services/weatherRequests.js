//@flow

import Api from './api';

/**
 * Types is Returns
 */

export type typeReturnApiHead = {
  temp: Number,
  date: String,
  description: String,
  condition_slug: String,
  city_name: String,
  forecast: typeReturnApiForecast[],
};

export type typeReturnApiForecast = {
  date: String,
  weekday: String,
  max: Number,
  min: Number,
  description: String,
  condition: String,
};

type typeLocalInfoByLongAndLat = {
  data: {
    results: typeReturnApiHead,
  },
};

/**
 * Requests in API
 */

export function getLocalInfoByLongAndLat(): typeLocalInfoByLongAndLat {
  return Api.get('&lat=-23.682&log=-46.875&user_ip=remote');
}
