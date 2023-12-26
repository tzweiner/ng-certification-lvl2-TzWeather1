export interface ForecastResponse {
  name: string;
  weather: Weather[];
  main: Main;
  coord: Coord
}

export interface ForecastDisplay {
  high: number;
  low: number;
  condition: string;
  icon: string;
  name: string;
}

export interface ForecastByDay extends ForecastDisplay {
  day: string;
}

export type Main = {
  "temp": number;
    "feels_like": number;
    "temp_min": number;
    "temp_max": number;
    "pressure": number;
    "humidity": number;
}




export interface RangeForecastResponse {
  city: City
  cod: string
  message: number
  cnt: number
  list: List[]
}

export interface City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
}

export interface Coord {
  lon: number
  lat: number
}

export interface List {
  dt: number
  sunrise: number
  sunset: number
  temp: Temp
  feels_like: FeelsLike
  pressure: number
  humidity: number
  weather: Weather[]
  speed: number
  deg: number
  gust: number
  clouds: number
  pop: number
  rain?: number
}

export interface Temp {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

export interface FeelsLike {
  day: number
  night: number
  eve: number
  morn: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}
