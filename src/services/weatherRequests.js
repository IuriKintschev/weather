//@flow

import Api from './api';

/**
 * Types is Returns
 */

export type TypeReturnApiHead = {
  temp: Number,
  date: String,
  description: String,
  condition_slug: String,
  city_name: String,
  forecast: TypeReturnApiForecast[],
};

export type TypeReturnApiForecast = {
  date: String,
  weekday: String,
  max: Number,
  min: Number,
  description: String,
  condition: String,
};

type TypeLocalInfoByLogAndLat = {
  data: {
    results: TypeReturnApiHead,
  },
};

/**
 * Requests in API
 */

export function getLocalInfoByLogAndLat(
  lat: Number,
  log: Number,
): TypeLocalInfoByLogAndLat {
  const latitude = lat.toString();
  const logitude = log.toString();

  return Api.get(`&lat=${latitude}&log=${logitude}&user_ip=remote`);
}
